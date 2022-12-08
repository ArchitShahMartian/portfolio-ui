import axios from "axios";
import { AxiosRequestConfig } from "axios";
import { get } from "./Base.ts";

const mediumRssFeed = "https://medium.com/feed/geekculture";
const rssToJsonApi = "https://api.rss2json.com/v1/api.json";
const data = { params: { rss_url: mediumRssFeed}};

export const Medium = {
    MediumPost: () => axios.get(rssToJsonApi, data)
}
