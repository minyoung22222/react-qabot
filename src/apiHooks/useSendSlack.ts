import { ElementInfo } from "../types";
import axios from "axios";
import { getSlackWebhookUrl } from "../utils/environment";

interface PostSlackProps {
  qaMessage: string;
  qaElementInfo: ElementInfo;
}

const createSlackBlock = (label: string, content: string) => ({
  type: "section",
  text: {
    type: "mrkdwn",
    text: `*${label}*\n ${content}`,
  },
});

export const postSlack = async ({ qaMessage, qaElementInfo }: PostSlackProps) => {
  const today = new Date();

  const payload = {
    text: "새로운 QA 발생!",
    blocks: JSON.stringify([
      createSlackBlock("QA 메시지", qaMessage),
      createSlackBlock("pathname", qaElementInfo.pathName),
      createSlackBlock("tagName", qaElementInfo.tagName),
      createSlackBlock("id", qaElementInfo.id),
      createSlackBlock("className", qaElementInfo.className),
      createSlackBlock("textContent", qaElementInfo.textContent),
      createSlackBlock("createdAt", today.toLocaleString()),
    ]),
  };

  const res = await axios({
    method: "post",
    url: getSlackWebhookUrl(),
    data: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });

  return res;
};
