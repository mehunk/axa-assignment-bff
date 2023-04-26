import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';

import { ProductsService } from '@/products/products.service';
import { VehicleTypesService } from './vehicle-types.service';

@Controller('vehicle-types')
export class VehicleTypesController {
  constructor(
    private readonly vehicleTypesService: VehicleTypesService,
    private readonly productsService: ProductsService,
  ) {}

  @Get()
  findAll() {
    return this.vehicleTypesService.findAll();
  }

  @Get(':id/products')
  findProducts(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.findAllByVehicleTypeId(id);
  }

  @Get(':id/products/:productId')
  findProduct(
    @Param('id', ParseIntPipe) id: number,
    @Param('productId', ParseIntPipe) productId: number,
  ) {
    return this.productsService.findOneByVehicleTypeId(id, productId);
  }
}
