# react-qabot

react-qabot is a lightweight React component designed to send QA feedback directly from your slack application. It allows users to provide detailed feedback, including context about the selected UI elements, and sends the information to Slack for streamlined issue tracking.

## Features

- **Contextual Feedback:** Automatically captures information about the targeted UI element (e.g., `pathName`, `tagName`, `className`, `id`, `textContent`).
- **Slack Integration:** Sends QA feedback directly to a specified Slack channel via a webhook.
- **Easy Integration:** Works seamlessly with React, Next.js, or Vite environments.
- **Customizable Positioning:** Feedback form appears at the mouse position for easy interaction.
- **Keyboard and Mouse Events:** Esc key and outside clicks close the feedback form.

## Installation

Install the package using npm or yarn:

```bash
npm install qabot
# or
yarn add qabot
```

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

## Environment Setup

Qabot integrates seamlessly with multiple environments. To use Slack integration, set the Slack webhook URL in your environment variables:

- Vite: VITE_APP_SLACK_WEBHOOK_API_URL
- Create React App: REACT_APP_SLACK_WEBHOOK_API_URL
- Next.js: NEXT_PUBLIC_SLACK_WEBHOOK_API_URL

## Props

`QabotProps`

| Prop | Type   | Required | Default | Description                                                |
| ---- | ------ | -------- | ------- | ---------------------------------------------------------- |
| env  | string | No       | ""      | Specifies the build environment (`react`, `next`, `vite`). |

## Environment Variables

Ensure your environment variables are correctly set to enable Slack integration:

- Slack Webhook URL:
  - `VITE_APP_SLACK_WEBHOOK_API_URL` (for Vite)
  - `REACT_APP_SLACK_WEBHOOK_API_URL` (for CRA)
  - `NEXT_PUBLIC_SLACK_WEBHOOK_API_URL` (for Next.js)

## How It Works

1. Right-Click Detection:

- When a user right-clicks twice within 1 second, the QA feedback form appears at the cursor position.
- Information about the clicked UI element (e.g., `className`, `tagName`, `textContent`) is automatically captured.

2. Feedback Submission:

- Users can write their QA message in the form.
- On submission, the feedback and element information are sent to Slack using the provided webhook.

3. Closing the Form:

- The form can be closed by clicking outside of it or pressing the Esc key.

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
