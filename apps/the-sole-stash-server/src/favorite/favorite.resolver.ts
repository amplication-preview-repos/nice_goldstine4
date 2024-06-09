import * as graphql from "@nestjs/graphql";
import { FavoriteResolverBase } from "./base/favorite.resolver.base";
import { Favorite } from "./base/Favorite";
import { FavoriteService } from "./favorite.service";

@graphql.Resolver(() => Favorite)
export class FavoriteResolver extends FavoriteResolverBase {
  constructor(protected readonly service: FavoriteService) {
    super(service);
  }
}
