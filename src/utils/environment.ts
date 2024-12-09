export const getSlackWebhookUrl = () => {
  return (
    import.meta.env.VITE_APP_SLACK_WEBHOOK_API_URL || // Vite
    process.env.REACT_APP_SLACK_WEBHOOK_API_URL || // CRA
    process.env.NEXT_PUBLIC_SLACK_WEBHOOK_API_URL || // Next.js
    null
  );
};

export const getBuildEnvironment = () => {
  if (typeof import.meta !== "undefined" && import.meta.env) {
    return import.meta.env.MODE;
  }

  if (typeof process !== "undefined" && process.env) {
    if (process.env.NEXT_PUBLIC_VERCEL_ENV) {
      return process.env.NEXT_PUBLIC_VERCEL_ENV;
    }

    return process.env.NODE_ENV;
  }

  return "unknown";
};
