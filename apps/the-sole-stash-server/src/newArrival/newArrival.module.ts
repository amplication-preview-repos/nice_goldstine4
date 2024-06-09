import { Module } from "@nestjs/common";
import { NewArrivalModuleBase } from "./base/newArrival.module.base";
import { NewArrivalService } from "./newArrival.service";
import { NewArrivalController } from "./newArrival.controller";
import { NewArrivalResolver } from "./newArrival.resolver";

@Module({
  imports: [NewArrivalModuleBase],
  controllers: [NewArrivalController],
  providers: [NewArrivalService, NewArrivalResolver],
  exports: [NewArrivalService],
})
export class NewArrivalModule {}
