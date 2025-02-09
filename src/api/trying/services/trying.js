'use strict';

/**
 * trying service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::trying.trying');
