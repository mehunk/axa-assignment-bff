import { Module } from '@nestjs/common';

import { VehicleTypesModule } from '@/vehicle-types/vehicle-types.module';
import { ProductsModule } from '@/products/products.module';
import { InsuranceQuotesService } from './insurance-quotes.service';
import { InsuranceQuotesController } from './insurance-quotes.controller';

@Module({
  imports: [VehicleTypesModule, ProductsModule],
  controllers: [InsuranceQuotesController],
  providers: [InsuranceQuotesService],
})
export class InsuranceQuotesModule {}
