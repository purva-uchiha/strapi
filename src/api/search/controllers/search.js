'use strict';

const { searchData } = require('../../../../elastic/elasticClient');

module.exports = {
  performSearch: async (ctx, next) => {
    console.log("I am hreereere")
    try {
      if (ctx.query.search)
      {
        const resp = await searchData(ctx.query.search);
        console.log(resp)
        if (resp?.hits?.hits)
        {
          
          const specificFields = resp.hits.hits.map((data) => {
            const dt = data['_source'];
            return {ProviderName: dt.ProviderName, Intro: dt.Intro}
          })
          ctx.body = specificFields;
        }
        else
          ctx.body = {}
      }
      else
        ctx.body = {}
    } catch (err) {
      
      ctx.response.status = 500;
      ctx.body = "An error was encountered while processing the search request."
      console.log('An error was encountered while processing the search request.')
      console.log(err);
    }
  }
};