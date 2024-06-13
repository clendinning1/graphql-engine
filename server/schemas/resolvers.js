const { User } = require('../models');

const resolvers = {
    Query: {
        me: async () => {
            return User.find();
        },
    },
    Mutation: {
        login: async (parent, {  }) => {

        },
        addUser: async (parent, {  }) => {

        },
        saveBook: async (parent, {  }) => {

        },
        removeBook: async (parent, {  }) => {

        },
    },
};

module.exports = resolvers;
