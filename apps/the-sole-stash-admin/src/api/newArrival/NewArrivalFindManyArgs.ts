import { NewArrivalWhereInput } from "./NewArrivalWhereInput";
import { NewArrivalOrderByInput } from "./NewArrivalOrderByInput";

export type NewArrivalFindManyArgs = {
  where?: NewArrivalWhereInput;
  orderBy?: Array<NewArrivalOrderByInput>;
  skip?: number;
  take?: number;
};
