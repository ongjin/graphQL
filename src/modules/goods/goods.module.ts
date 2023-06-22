import { Module } from '@nestjs/common';
import { GoodsService } from './goods.service';
import { GoodsResolver } from './goods.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GoodsDetail, GoodsHeader } from './entities/good.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([GoodsHeader, GoodsDetail])
  ],
  providers: [GoodsResolver, GoodsService]
})
export class GoodsModule { }
