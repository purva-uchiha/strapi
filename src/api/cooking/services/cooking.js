'use strict';

/**
 * cooking service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cooking.cooking') ;
