import { Test, TestingModule } from '@nestjs/testing';
import { VehicleTypesService } from './vehicle-types.service';

import { HttpService } from '@nestjs/axios';

describe('VehicleTypesService', () => {
  let service: VehicleTypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        VehicleTypesService,
        {
          provide: HttpService,
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<VehicleTypesService>(VehicleTypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
