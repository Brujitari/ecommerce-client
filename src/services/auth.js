import { catcher } from "./utils";

const register = (client) => async (data) => catcher(client.post)("auth/register", data);

const login = (client) => async(data) => catcher(client.post)("auth/login", data);

const auth = (client) =>({
    register: register(client),
    login: login(client)
});

export default auth;