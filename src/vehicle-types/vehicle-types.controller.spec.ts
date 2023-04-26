import { Test, TestingModule } from '@nestjs/testing';
import { VehicleTypesController } from './vehicle-types.controller';
import { VehicleTypesService } from './vehicle-types.service';
import { ProductsService } from '@/products/products.service';

describe('VehicleTypesController', () => {
  let controller: VehicleTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VehicleTypesController],
      providers: [
        {
          provide: VehicleTypesService,
          useValue: {},
        },
        {
          provide: ProductsService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<VehicleTypesController>(VehicleTypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
