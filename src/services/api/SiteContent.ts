import { AxiosRequestConfig } from "axios";
import { get } from "./Base.ts";

export const SiteContent = {
    ExperienceList: () => get('/site_content/get-experiences/'),
    SkillList: () => get('/site_content/get-skills/'),
    ProjectList: () => get('/site_content/get-projects/'),
}
