import { AxiosRequestConfig } from "axios";
import { get } from "./Base.ts";

export const SiteContent = {
    list: () => get('/site_content/get-experience/')
}
