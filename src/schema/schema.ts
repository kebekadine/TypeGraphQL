import { Min } from "class-validator";
import { Field, InputType, Int, ObjectType } from "type-graphql";
@ObjectType()
export class livreSchema {
    @Field(()=>String)
    name : string

    @Field(()=> Int)
    @Min(1)
    nbPage : number

}

@InputType()
export class livreMutation{
    @Field(()=>String)
    name : string

    @Field(()=> Int)
    @Min(1)
    nbPage : number
}
