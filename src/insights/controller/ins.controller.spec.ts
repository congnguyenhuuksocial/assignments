import { Test, TestingModule } from '@nestjs/testing';
import { InsController } from './ins.controller';

describe('InsController', () => {
  let controller: InsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InsController],
    }).compile();

    controller = module.get<InsController>(InsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
