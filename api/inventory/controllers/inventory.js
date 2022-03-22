
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
    /*  console.log("entity : ",entity)
      const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
      console.log("response : ",this.transformResponse(sanitizedEntity))
      return this.transformResponse(sanitizedEntity);*/
    } catch (err) {
      console.log(err)
      return err;
    }
    finally {

      console.log(ctx)
    }
  },
};
