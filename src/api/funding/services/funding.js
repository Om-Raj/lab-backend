'use strict';

/**
 * funding service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::funding.funding');
