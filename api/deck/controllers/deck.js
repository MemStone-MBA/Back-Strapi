'use strict';

module.exports = {
  findUserDeck: async (ctx) => {
    try {

      const id = ctx.params.userId || "0000"

      ctx.query = {
        ...ctx.query,
        "idUser" :id
      }
      return  await strapi.services.deck.find(ctx.query);
    } catch (err) {
      console.log(err)
      return err;
    }
    finally {

      console.log(ctx)
    }
  },
};
