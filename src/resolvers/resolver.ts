const mongoose = require('mongoose');

import { Arg, Args, Mutation, Query, Resolver } from "type-graphql";
import { livreMutation, livreSchema } from "../schema/schema";
const db = require("../../config/db");
const livre = require("../../config/models/LivreSchema")
const LivreModel = mongoose.model('livreSchema', livre);



@Resolver()
export default class LivreResolver{
    @Query(()=> [livreSchema])
    async livre(){
        try {
        const livreDisplay =  await LivreModel.find()
        return livreDisplay
    }catch(e){
        console.error(e)
    }
            
    }
    @Mutation(() => livreSchema)
    async creatLivre(@Arg("input") input: livreMutation){
        try {
           
           
            const newLivre = await new LivreModel({ 
                ...input
            });
            newLivre.save();
            console.log(newLivre);
            return newLivre;
        } catch (e) {
            console.error(e)
        }
    }

}
