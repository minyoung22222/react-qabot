export const getSlackWebhookUrl = () => {
  return (
    import.meta.env.VITE_APP_SLACK_WEBHOOK_API_URL || // Vite
    process.env.REACT_APP_SLACK_WEBHOOK_API_URL || // CRA
    process.env.NEXT_PUBLIC_SLACK_WEBHOOK_API_URL || // Next.js
    null
  );
};

export const getBuildEnvironment = (env: "react" | "next" | "vite") => {
  if (env === "vite") {
    return import.meta.env && import.meta.env.MODE;
  }

  if (env === "next") {
    return process.env && process.env.NEXT_PUBLIC_VERCEL_ENV;
  }

  if (env === "react") {
    return process.env && process.env.NODE_ENV;
  }

  return "unknown";
};
