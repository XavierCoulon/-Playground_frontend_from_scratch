import "./App.css";
import { ReactQueryDevtools } from "react-query/devtools";
import BooksList from "./components/BooksList";
import CreateBook from "./components/CreateBook";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <CreateBook />
        <BooksList />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;
