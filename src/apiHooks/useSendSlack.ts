import { useMutation } from "@tanstack/react-query";
import { slackConfig } from "../config/slackConfig";
import { slackAPI } from "../core/instance";
import { ElementInfo } from "../types/qabotTypes";

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

const postSlack = async ({ qaMessage, qaElementInfo }: PostSlackProps) => {
  const payload = {
    text: "새로운 QA 발생!",
    blocks: JSON.stringify([
      createSlackBlock("QA 메시지", qaMessage),
      createSlackBlock("pathname", qaElementInfo.pathName),
      createSlackBlock("tagName", qaElementInfo.tagName),
      createSlackBlock("id", qaElementInfo.id),
      createSlackBlock("className", qaElementInfo.className),
      createSlackBlock("textContent", qaElementInfo.textContent),
    ]),
  };

  const res = await slackAPI({
    method: "post",
    url: slackConfig.webhookUrl,
    data: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });

  return res;
};

export const useSendSlack = () => {
  return useMutation({
    mutationFn: postSlack,
    onError: (err) => {
      console.error("에러발생", err);
    },
  });
};
