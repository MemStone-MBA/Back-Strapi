'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

const {sanitizedEntity}  = require("strapi-utils");


module.exports = {
  async findUserCard(ctx) {

    const { _idUser } = ctx.params;
    console.log(ctx)
    console.log("id user : ", _idUser)
    const entity = await strapi.service('api::inventory.findUserCard').findOne({IdUser : _idUser});
    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

    return this.transformResponse(sanitizedEntity);
  }
};
