const resolvers = {
  Query: {
    async user(parent, _, { db }) {
      await db.user.findAll();
    },
  },
};
module.exports = {
  resolvers,
};
