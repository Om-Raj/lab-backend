'use strict';

/**
 * patent service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::patent.patent');
