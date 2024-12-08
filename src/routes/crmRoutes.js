import {addNewItems, 
    getItems, 
    getItemsWithID, 
    updateItems, 
    deleteItems} from '../controllers/crmController.js';


const routes = (app) => {
    app.route('/items')
    // get all items
    .get((req, res, next) => {
        // middleware
        console.log(`Request from; ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();
    }, getItems)

    // post a new Items
    .post(addNewItems);

    app.route('/items/:itemId')
    // get specific Items
    .get(getItemsWithID)

    // update a Item
    .put(updateItems)

    // to delete a Item
    .delete(deleteItems)
}

export default routes;