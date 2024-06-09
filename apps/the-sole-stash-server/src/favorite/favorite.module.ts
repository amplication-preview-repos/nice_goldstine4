import { Module } from "@nestjs/common";
import { FavoriteModuleBase } from "./base/favorite.module.base";
import { FavoriteService } from "./favorite.service";
import { FavoriteController } from "./favorite.controller";
import { FavoriteResolver } from "./favorite.resolver";

@Module({
  imports: [FavoriteModuleBase],
  controllers: [FavoriteController],
  providers: [FavoriteService, FavoriteResolver],
  exports: [FavoriteService],
})
export class FavoriteModule {}
