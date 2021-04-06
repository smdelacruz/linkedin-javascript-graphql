const FriendDatabase = {};
class Friend {
    constructor(id, { firstName, lastName, gender, email}){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.email = email;
    }
}
const resolvers ={ // resolver return from db , so its hardcoded for now
    getFriend: ({id}) => {
        return new Friend(id, FriendDatabase[id]);
    },
    createFriend: ({input}) => {
        let id = require('crypto').randomBytes(10).toString('hex');
        FriendDatabase[id] = input;
        return new Friend(id, input);
    }
}; 


export default resolvers;