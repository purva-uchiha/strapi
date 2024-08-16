const { indexData, removeIndexedData } = require('./elasticClient');

module.exports = {
  performIndexingForSearch: async ({ strapi }) => {
    
    const recs = await strapi.entityService.findMany('api::search-indexing-request.search-indexing-request', {
      filters: { indexing_status: 'To be Done' },
    });

    for (let r = 0; r < recs.length; r++) {
      const col = recs[r].collection_name;

      if (recs[r].item_id) {
        if (recs[r].indexing_request_type !== 'Delete from index') {
          
          const api = `api::${col}.${col}`;
          const item = await strapi.entityService.findOne(api, recs[r].item_id);
          const indexItemId = `${col}::${item.id}`;
          const { Intro, ProviderName} = item;

          
          await indexData({ itemId: indexItemId, Intro, ProviderName });

          await strapi.entityService.update('api::search-indexing-request.search-indexing-request', recs[r].id, {
            data: { indexing_status: 'Done' },
          });
        } else {
          
          const indexItemId = `${col}::${recs[r].item_id}`;
          await removeIndexedData({ itemId: indexItemId });

          await strapi.entityService.update('api::search-indexing-request.search-indexing-request', recs[r].id, {
            data: { indexing_status: 'Done' },
          });
        }
      } 
    }
  },
};
