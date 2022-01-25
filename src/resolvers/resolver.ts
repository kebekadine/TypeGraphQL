const mongoose = require('mongoose');

import { Arg, Args, Mutation, Query, Resolver } from "type-graphql";
import { livreMutation, livreSchema } from "../schema/schema";
const db = require("../../config/db");
const livre = require("../../config/models/LivreSchema")
const LivreModel = mongoose.model('livreSchema', livre);

/*const { Kafka } = require('kafkajs')

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['kafka1:9092', 'kafka2:9092']
})*/

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
            /*const producer = kafka.producer()

            await producer.connect()
            await producer.send({
            topic: 'test-topic',
            messages: [
                input
            ],
            })
            await producer.disconnect()

            const consumer = kafka.consumer({ groupId: 'test-group' })

            await consumer.connect()
            await consumer.subscribe({ topic: 'test-topic', fromBeginning: true })

            await consumer.run({
            eachMessage: async (message: { value: { toString: () => any; }; }) => {
                console.log({
                value: message.value.toString(),
                })
            },
            })*/
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