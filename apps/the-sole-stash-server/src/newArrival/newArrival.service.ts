import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { NewArrivalServiceBase } from "./base/newArrival.service.base";

@Injectable()
export class NewArrivalService extends NewArrivalServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
