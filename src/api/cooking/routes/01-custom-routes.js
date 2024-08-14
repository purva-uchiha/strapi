module.exports = {
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