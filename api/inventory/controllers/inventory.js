
"use strict";
module.exports = {
  findUserCard: async (ctx) => {
    try {

      const id = ctx.params.userId || "idcsdkcksd"

      ctx.query = {
        ...ctx.query,
        "idUser" :id
      }
      return  await strapi.services.inventory.find(ctx.query);
    } catch (err) {
      console.log(err)
      return err;
    }
    finally {

      console.log(ctx)
    }
  },
};
