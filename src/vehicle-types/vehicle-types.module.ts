import { Module } from '@nestjs/common';

import { ProductsModule } from '@/products/products.module';
import { VehicleTypesService } from './vehicle-types.service';
import { VehicleTypesController } from './vehicle-types.controller';

@Module({
  imports: [ProductsModule],
  controllers: [VehicleTypesController],
  providers: [VehicleTypesService],
  exports: [VehicleTypesService],
})
export class VehicleTypesModule {}
