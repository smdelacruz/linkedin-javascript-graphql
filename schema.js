import { buildSchema, SchemaMetaFieldDef } from 'graphql';

const schema = buildSchema(`
    enum Gender{
        MALE
        FEMALE
        OTHER
    }

    type Friend{
        id: ID
        firstName: String
        lastName: String
        gender: Gender
        age: Int
        email: String
    }

    type Query{
        getFriend(id:ID): Friend
    }

    input FriendInput{
        id: ID
        firstName: String
        lastName: String
        gender: Gender
        age: Int
        email: String
    }

    type Mutation {
        createFriend(input: FriendInput) : Friend
    }
`)

export default schema;