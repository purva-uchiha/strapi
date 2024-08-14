'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::cooking.cooking', ({ strapi }) => ({
  
  async findPublished(ctx) {
    try {

      const entries = await strapi.db.query('api::cooking.cooking').findMany({
        
      })
      // const entries = await strapi.query('api::cooking.cooking').findMany({
      //   populate: true,
        
      //   data:{

      //   }
      //   // where: { status: 'published' }, 
      //   // populate: true, 
      // });

      

      return ctx.send(entries);
    } catch (error) {
      return ctx.internalServerError('Error retrieving documents'); // Handle errors
    }
  },
}));
