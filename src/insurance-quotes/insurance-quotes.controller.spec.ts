import { Test, TestingModule } from '@nestjs/testing';

import { VehicleTypesService } from '@/vehicle-types/vehicle-types.service';
import { ProductsService } from '@/products/products.service';
import { InsuranceQuotesController } from './insurance-quotes.controller';
import { InsuranceQuotesService } from './insurance-quotes.service';

describe('InsuranceQuotesController', () => {
  let controller: InsuranceQuotesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InsuranceQuotesController],
    })
      .useMocker((token) => {
        if (token === InsuranceQuotesService) {
          return {};
        }
        if (token === VehicleTypesService) {
          return {};
        }
        if (token === ProductsService) {
          return {};
        }
      })
      .compile();

    controller = module.get<InsuranceQuotesController>(
      InsuranceQuotesController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
