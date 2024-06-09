import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { NewArrivalService } from "./newArrival.service";
import { NewArrivalControllerBase } from "./base/newArrival.controller.base";

@swagger.ApiTags("newArrivals")
@common.Controller("newArrivals")
export class NewArrivalController extends NewArrivalControllerBase {
  constructor(protected readonly service: NewArrivalService) {
    super(service);
  }
}
