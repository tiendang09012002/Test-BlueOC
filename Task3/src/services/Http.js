import axios from "axios";
import { BASE_API } from "../shared/constants/app";

const Http = axios.create({
    baseURL: BASE_API,
    headers: {
        'Content-Type': 'application/json'
    }
});
export default Http;