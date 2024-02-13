'use strict';

/**
 * servi service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::servi.servi');
