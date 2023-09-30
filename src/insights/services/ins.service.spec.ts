import { Test, TestingModule } from '@nestjs/testing';
import { InsService } from './ins.service';

describe('InsService', () => {
  let service: InsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InsService],
    }).compile();

    service = module.get<InsService>(InsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
