import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VehicleTypesModule } from './vehicle-types/vehicle-types.module';
import { CommonModule } from './common/common.module';
import { ProductsModule } from './products/products.module';
import { InsuranceQuotesModule } from './insurance-quotes/insurance-quotes.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    VehicleTypesModule,
    CommonModule,
    ProductsModule,
    InsuranceQuotesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
