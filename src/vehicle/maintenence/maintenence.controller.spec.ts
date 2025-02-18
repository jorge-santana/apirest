import { Test, TestingModule } from '@nestjs/testing';
import { MaintenenceController } from './maintenence.controller';

describe('MaintenenceController', () => {
  let controller: MaintenenceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MaintenenceController],
    }).compile();

    controller = module.get<MaintenenceController>(MaintenenceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
