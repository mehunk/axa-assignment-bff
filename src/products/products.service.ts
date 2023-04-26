import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import type { AxiosError } from 'axios';
import { firstValueFrom, catchError } from 'rxjs';

import { Product } from './interfaces/product.interface';
@Injectable()
export class ProductsService {
  constructor(private httpService: HttpService) {}

  async findAllByVehicleTypeId(vehicleTypeId: number): Promise<Product[]> {
    const { data } = await firstValueFrom(
      this.httpService.get<Product[]>(
        `/vehicle-types/${vehicleTypeId}/products`,
      ),
    );
    return data;
  }

  async findOneByVehicleTypeId(
    vehicleTypeId: number,
    productId: number,
  ): Promise<Product> {
    const { data } = await firstValueFrom(
      this.httpService
        .get<Product>(`/vehicle-types/${vehicleTypeId}/products/${productId}`)
        .pipe(
          catchError((error: AxiosError) => {
            console.log(error);
            throw error;
          }),
        ),
    );
    return data;
  }
}
