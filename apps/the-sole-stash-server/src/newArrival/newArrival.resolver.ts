import * as graphql from "@nestjs/graphql";
import { NewArrivalResolverBase } from "./base/newArrival.resolver.base";
import { NewArrival } from "./base/NewArrival";
import { NewArrivalService } from "./newArrival.service";

@graphql.Resolver(() => NewArrival)
export class NewArrivalResolver extends NewArrivalResolverBase {
  constructor(protected readonly service: NewArrivalService) {
    super(service);
  }
}
