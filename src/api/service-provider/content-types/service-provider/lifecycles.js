module.exports = {
    async afterUpdate(event){
        if (event?.result?.publishedAt)
        {
            strapi.entityService.create('api::search-indexing-request.search-indexing-request', 
            {
                data: {
                    item_id: event.result.id,
                    collection_name: event.model.singularName,
                    indexing_status: "To be Done",
                    indexing_request_type: "Add to index",
                    full_site_indexing: false
                }
                
            });

            console.log('Indexing request created.');
        }
    }, 
    async afterDelete(event){
        strapi.entityService.create('api::search-indexing-request.search-indexing-request', 
        {
            data: {
                item_id: event.result.id,
                collection_name: event.model.singularName,
                indexing_status: "To be Done",
                indexing_request_type: "Delete from index",
                full_site_indexing: false
            }
        });        
    }
}