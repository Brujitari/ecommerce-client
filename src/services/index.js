import axios from "axios";
import auth from "./auth"
import user from "./user";
import product from "./product";
import order from "./order";

const instance = axios.create({
    baseURL: "http://localhost:3000",
    withCredentials: true
});

const services = {
    auth: auth(instance),
    user: user(instance),
    product: product(instance),
    order: order(instance)
}

export default services;