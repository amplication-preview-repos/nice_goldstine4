/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { NewArrivalWhereInput } from "./NewArrivalWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class NewArrivalCountArgs {
  @ApiProperty({
    required: false,
    type: () => NewArrivalWhereInput,
  })
  @Field(() => NewArrivalWhereInput, { nullable: true })
  @Type(() => NewArrivalWhereInput)
  where?: NewArrivalWhereInput;
}

export { NewArrivalCountArgs as NewArrivalCountArgs };