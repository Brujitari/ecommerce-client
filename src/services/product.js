import { catcher } from "./utils";

const getAll = (client) => async () => catcher(client.get)("products/get-all");



const product = (client) =>({
    getAll: getAll(client),
});

export default product;