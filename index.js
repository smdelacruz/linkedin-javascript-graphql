import express from "express";
import schema from './schema';
import {graphqlHTTP} from 'express-graphql';
import resolvers from './resolvers';

const app = express();

app.get('/', (req, res) => {
    res.send("Graphql is amazing!");
});

const root = resolvers;

//moves to resolvers.js file
// const FriendDatabase = {};
// class Friend {
//     constructor(id, { firstName, lastName, gender, email}){
//         this.id = id;
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.gender = gender;
//         this.email = email;
//     }
// }
// const root = { friend: () => { // resolver return from db , so its hardcoded for now

//     return {
//         "id": 123456,
//         "firstname": "Shareena",
//         "lastname": "delacruz",
//         "gender": "Femal",
//         "email": "testemail@email.comm"
//     }},
//     createFriend: ({input}) => {
//         let id = require('crypto'.randomByes(10).toString('hex'));
//         FriendDatabase[id] = input;
//         return new Friend(id, input);
//     }
// }; 
app.use('/graphql', graphqlHTTP ({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

app.listen(8080, () => console.log("Running on server port localhost:8080/graphql"));