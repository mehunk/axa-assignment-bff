import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  HttpException,
  ParseIntPipe,
} from '@nestjs/common';

import { VehicleTypesService } from '@/vehicle-types/vehicle-types.service';
import { ProductsService } from '@/products/products.service';
import { InsuranceQuotesService } from './insurance-quotes.service';
import { CreateInsuranceQuoteDto } from './dto/create-insurance-quote.dto';

@Controller('insurance-quotes')
export class InsuranceQuotesController {
  constructor(
    private readonly vehicleTypesService: VehicleTypesService,
    private readonly productsService: ProductsService,
    private readonly insuranceQuotesService: InsuranceQuotesService,
  ) {}

  @Post()
  async create(@Body() createInsuranceQuoteDto: CreateInsuranceQuoteDto) {
    const vehicleType = await this.vehicleTypesService.findOne(
      createInsuranceQuoteDto.vehicleTypeId,
    );
    if (!vehicleType) {
      throw new HttpException('Vehicle type does not exist', 404);
    }
    const product = await this.productsService.findOneByVehicleTypeId(
      createInsuranceQuoteDto.vehicleTypeId,
      createInsuranceQuoteDto.productId,
    );
    if (!product) {
      throw new HttpException('Product does not exist', 404);
    }

    return this.insuranceQuotesService.create(createInsuranceQuoteDto);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.insuranceQuotesService.findOne(id);
  }
}
