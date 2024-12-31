import { ElementInfo } from "../types";
import axios from "axios";
import { getSlackWebhookUrl } from "../utils/environment";

interface PostSlackProps {
  qaMessage: string;
  qaElementInfo: ElementInfo;
  qaTitle?: string;
  includePathName?: boolean;
  includeTagName?: boolean;
  includeId?: boolean;
  includeClassName?: boolean;
  includeTextContent?: boolean;
  includeCreatedAt?: boolean;
}

const createTitleBlock = (title: string) => ({
  type: "section",
  text: {
    type: "mrkdwn",
    text: `*${title}*`,
  },
});

const createSlackBlock = (label: string, content: string) => ({
  type: "section",
  text: {
    type: "mrkdwn",
    text: `*\`${label}\`* : ${content}`,
  },
});

export const postSlack = async ({
  qaMessage,
  qaElementInfo,
  qaTitle,
  includePathName,
  includeTagName,
  includeId,
  includeClassName,
  includeTextContent,
  includeCreatedAt,
}: PostSlackProps) => {
  const today = new Date();

  const blocks = [
    createTitleBlock(qaTitle ?? "📷 A new QA has occurred!"),
    createSlackBlock("QA message", qaMessage),
    includePathName && createSlackBlock("pathname", qaElementInfo.pathName),
    includeTagName && createSlackBlock("tagName", qaElementInfo.tagName),
    includeId && createSlackBlock("id", qaElementInfo.id),
    includeClassName && createSlackBlock("className", qaElementInfo.className),
    includeTextContent && createSlackBlock("textContent", qaElementInfo.textContent),
    includeCreatedAt && createSlackBlock("createdAt", today.toLocaleString()),
  ].filter(Boolean);

  const payload = {
    text: "A new QA has occurred!",
    blocks: JSON.stringify(blocks),
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
