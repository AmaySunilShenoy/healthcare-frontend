import axios from "axios";

export const instance = axios.create({
    baseURL: "https://68x0x5mqsh.execute-api.us-east-1.amazonaws.com/Prod",
    timeout: 30000,
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        "Access-Control-Allow-Credentials": "true",
    },
});
