import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

import { InsuranceQuote } from './interfaces/insurance-quote.interface';
import { CreateInsuranceQuoteDto } from './dto/create-insurance-quote.dto';

@Injectable()
export class InsuranceQuotesService {
  constructor(private readonly httpService: HttpService) {}
  async create(
    createInsuranceQuoteDto: CreateInsuranceQuoteDto,
  ): Promise<InsuranceQuote> {
    const { data } = await firstValueFrom(
      this.httpService.post('/insurance-quotes', createInsuranceQuoteDto),
    );
    return data;
  }

  async findOne(id: number): Promise<InsuranceQuote> {
    const { data } = await firstValueFrom(
      this.httpService.get(`/insurance-quotes/${id}`),
    );
    return data;
  }
}
