import { Module, Global, OnModuleInit, HttpException } from '@nestjs/common';
import { HttpModule, HttpService } from '@nestjs/axios';
import { ConfigModule, ConfigService } from '@nestjs/config';
import type { AxiosError } from 'axios';

interface UpstreamError {
  statusCode: number;
  message: string;
}

@Global()
@Module({
  imports: [
    HttpModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        timeout: 5000,
        baseURL: configService.get('UPSTREAM_URL'),
      }),
      inject: [ConfigService],
    }),
  ],
  exports: [HttpModule],
})
export class CommonModule implements OnModuleInit {
  constructor(private readonly httpService: HttpService) {}

  public onModuleInit() {
    const axios = this.httpService.axiosRef;
    axios.interceptors.response.use(
      (config) => config,
      (error: AxiosError<UpstreamError>) => {
        const { response } = error;
        if (!response) {
          throw new HttpException('Internal Server Error', 500);
        }
        const { data, status } = response;
        if (status !== 500 && data.statusCode && data.message) {
          throw new HttpException(data.message, data.statusCode);
        }

        throw new HttpException('AXA api Service Unavailable', 503);
      },
    );
  }
}
