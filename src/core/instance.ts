import axios from "axios";
import { slackConfig } from "../config/slackConfig";

export const slackAPI = axios.create({
  baseURL: slackConfig.webhookUrl || "",
});
