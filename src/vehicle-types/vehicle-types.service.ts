import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

import { VehicleType } from './interfaces/vehicle-type.interface';

@Injectable()
export class VehicleTypesService {
  constructor(private httpService: HttpService) {}

  async findAll(): Promise<VehicleType> {
    const { data } = await firstValueFrom(
      this.httpService.get<VehicleType>('/vehicle-types'),
    );
    return data;
  }

  async findOne(id: number): Promise<VehicleType> {
    const { data } = await firstValueFrom(
      this.httpService.get<VehicleType>(`/vehicle-types/${id}`),
    );
    return data;
  }
}
