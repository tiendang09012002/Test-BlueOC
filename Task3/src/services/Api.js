import Http from "./Http";

export const getPosts = (config) => Http.get("", config);
export const createPost = (data, config) => Http.post("", data, config);