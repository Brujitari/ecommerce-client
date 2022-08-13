import { catcher } from "./utils";

const createOrder = (client) => async (data) => catcher(client.post)("orders/create", data);



const order = (client) =>({
    createOrder: createOrder(client),
});

export default order;