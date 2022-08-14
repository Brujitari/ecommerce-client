import { catcher } from "./utils";

const getAll = (client) => async () => catcher(client.get)("categories");

const category = (client) =>({
    getAll: getAll(client),
});

export default category;