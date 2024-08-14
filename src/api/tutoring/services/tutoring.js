'use strict';

/**
 * tutoring service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tutoring.tutoring');
