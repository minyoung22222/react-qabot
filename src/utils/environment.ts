export const getSlackWebhookUrl = () => {
  return (
    import.meta.env.VITE_APP_SLACK_WEBHOOK_API_URL || // Vite
    process.env.REACT_APP_SLACK_WEBHOOK_API_URL || // CRA
    process.env.NEXT_PUBLIC_SLACK_WEBHOOK_API_URL || // Next.js
    null
  );
};

export const getBuildEnvironment = (env?: "react" | "next" | "vite" | "") => {
  if (env === "vite" && import.meta.env) {
    return import.meta.env.MODE;
  }

  if (env === "next" && process.env) {
    return process.env.NEXT_PUBLIC_VERCEL_ENV;
  }

  if (env === "react" && process.env) {
    return process.env.NODE_ENV;
  }

  return "unknown";
};
