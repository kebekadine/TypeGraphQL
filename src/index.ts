import { ApolloServer } from "apollo-server";
import "reflect-metadata"
import { buildSchema } from "type-graphql"
import {resolvers} from "./resolvers"
import express from "express"
const config = require("../config/models/dbConfig")
async function launch (){
    const schema = await buildSchema({
        resolvers
    })
    const app = express()
    app.use(express)
    const server = new ApolloServer({ schema });
    console.log("entre")
    server.listen().then(({ url }) => {
        console.log(`  Server ready at ${url}`);
      });
}

launch()


