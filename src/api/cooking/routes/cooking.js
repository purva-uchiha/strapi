'use strict';

/**
 * cooking router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::cooking.cooking'), {
routes: [
    {
    method: 'GET',
    path: '/cookings/publish',
    handler: 'cooking.findPublished',
    config: {
        auth:false
    },
    },
], 
};   
