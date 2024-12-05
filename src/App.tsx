import Qabot from "./components/Qabot";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 1,
        throwOnError: true,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Qabot />
    </QueryClientProvider>
  );
}

export default App;
