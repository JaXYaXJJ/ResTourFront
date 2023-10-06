import { request } from "../utils/axios-interceptors";

export const tourRequest = () => request({ url: "/packages" })