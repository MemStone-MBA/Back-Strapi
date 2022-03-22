
const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::inventory.userId', ({ strapi }) =>  ({

  async findUserId(userId) {
    // Calling the default core controller
    const { results, pagination } = await super.find({userId:userId});

    // some custom logic
    results.forEach(result => {
      result.counter = 1;
    });

    return { results, pagination };
  },

}));
