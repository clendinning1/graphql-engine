const typeDefs = `

    type Query {
        me: [User]
    }

    type User {
        _id: ID
        username: String
        email: String
        # bookCount:
        # savedBooks:
    }

    type Book {
        # bookId
        # authors
        # description
        # title
        # image
        # link
    }
        
    type Auth {
        # token
        # user
    }

    type Mutation {
        # login
        # addUser
        # saveBook
        # removeBook
    }

`;


module.exports = typeDefs;