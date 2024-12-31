# react-qabot

react-qabot is a lightweight React component designed to streamline QA feedback by integrating directly with your Slack application. It enables users to provide detailed feedback, including contextual information about selected UI elements, and sends this information to Slack using a webhook for efficient issue tracking.

## Features

- **Interactive QA Trigger**: Activate QA mode by clicking the QA button at the bottom right of the page, then select any UI element to provide feedback.

- **Contextual Feedback**: Automatically captures detailed information about the targeted UI element, such as `pathName`, `tagName`, `className`, `id`, `textContent`, and `createdAt`.
- **Customizable Slack Integration**: Sends feedback directly to a specified Slack channel via a webhook, with customizable information inclusion.
- **Environment Compatibility**: Works seamlessly with React, Next.js, and Vite environments.
- **Dynamic Positioning**: The QA feedback form appears at the exact location of the clicked element for an intuitive user experience.
- **Customizable Feedback Title**: Adjust the `qaTitle` prop to customize the message title in Slack, with a default of "`📷 A new QA has occurred!`".
- **Keyboard and Mouse Control:** Use the Esc key or click outside the form to close the feedback interface.

## Installation

Install the package using npm or yarn:

```bash
npm install react-qabot
# or
yarn add react-qabot
```

## Environment Setup

Qabot integrates seamlessly with multiple environments. To use Slack integration, set the Slack webhook URL in your environment variables:

- Vite: `VITE_APP_SLACK_WEBHOOK_API_URL`
- Create React App: `REACT_APP_SLACK_WEBHOOK_API_URL`
- Next.js: `NEXT_PUBLIC_SLACK_WEBHOOK_API_URL`

## How to Add a Slack App for Webhook API

To enable Slack integration, follow these steps:

1. Go to the [Slack API documentation](https://api.slack.com/messaging/webhooks#getting_started).

2. Follow the **"Getting started with incoming webhooks"** guide up to step 3: **"Create an incoming webhook**."

3. Once you create a webhook, copy the webhook URL.

4. Set the webhook URL in your `.env` file, using the appropriate environment variable name:

- `VITE_APP_SLACK_WEBHOOK_API_URL` (for Vite)

- `REACT_APP_SLACK_WEBHOOK_API_URL` (for CRA)

- `NEXT_PUBLIC_SLACK_WEBHOOK_API_URL` (for Next.js)

> Note: The Slack webhook URL is mandatory for the component to function correctly.

## Usage

Basic Example

```tsx
// App.tsx
import Qabot from "qabot";

function App() {
  return (
    <div>
      <Qabot env="react" />
    </div>
  );
}

export default App;
```

## How It Works

### 1. Trigger QA Mode:

- Click the QA button located at the bottom-right corner of the screen.

- The mouse cursor will change to indicate QA mode is active.
- Click on any element on the page to target it for QA.

### 2. Submit Feedback:

- A QA box will appear near the selected element.

- Write your QA message in the input field and click the "Submit" button.

### 3. Feedback Delivery:

- The feedback, along with details about the selected element, will be sent to the configured Slack channel.

- A success or failure toast message will appear based on the submission status. The response or error can also be viewed in the console.

## Customizable Options

You can customize the QA experience using the following props:

- **qaTitle** (string): The title shown in Slack messages. Defaults to "`📷 A new QA has occurred!`".

- **Include Element Information**: Choose which details about the selected element to include in the Slack message. By default, all options are `true`. Set any to `false` to exclude them:

```ts
qaTitle?: string;
includePathName?: boolean; // Include the page's pathname
includeTagName?: boolean; // Include the element's tag name
includeId?: boolean; // Include the element's ID
includeClassName?: boolean; // Include the element's class name
includeTextContent?: boolean; // Include the element's text content
includeCreatedAt?: boolean; // Include the timestamp
```

## Props

`QabotProps`

| Prop               | Type    | Required | Default                   | Description                                                               |
| ------------------ | ------- | -------- | ------------------------- | ------------------------------------------------------------------------- |
| env                | string  | Yes      | ""                        | Specifies the build environment (`react`, `next`, `vite`).                |
| qaTitle            | string  | No       | 📷 A new QA has occurred! | Custom title for the Slack message.                                       |
| includePathName    | boolean | No       | true                      | Whether to include the `pathname` of the element in the Slack message.    |
| includeTagName     | boolean | No       | true                      | Whether to include the `tagName` of the element in the Slack message.     |
| includeId          | boolean | No       | true                      | Whether to include the `id` of the element in the Slack message.          |
| includeClassName   | boolean | No       | true                      | Whether to include the `className` of the element in the Slack message.   |
| includeTextContent | boolean | No       | true                      | Whether to include the `textContent` of the element in the Slack message. |
| includeCreatedAt   | boolean | No       | true                      | Whether to include the `createdAt` timestamp in the Slack message.        |

## Contributing

We welcome contributions to improve Qabot! If you'd like to contribute:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

## License

Qabot is released under the MIT License.

```
This README provides a comprehensive guide for users to understand and integrate Qabot, ensuring ease of use and flexibility.
```
