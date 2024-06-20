import {
  HashRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

import AppLayout from "./ui/AppLayout";

import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import Users from "./pages/Users";
import Account from "./pages/Account";
import Dashboard from "./pages/Dashboard";
import Posts from "./pages/Posts";

import ProtectedRoute from "./ui/ProtectedRoute";
import PostDetails from "./features/posts/PostDetails";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime is actually amount of time that data in cache stays fresh
      // staleTime: 60 * 1000,
      staleTime: 0,
    },
  },
});

export default function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Router>
          <Routes>
            <Route
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate replace to="dashboard" />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="posts" element={<Posts />} />
              <Route path="posts/:postId" element={<PostDetails />} />
              <Route path="users" element={<Users />} />
              <Route path="account" element={<Account />} />
            </Route>

            <Route path="login" element={<Login />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Router>
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "var(--color-grey-0)",
              color: "var(--color-grey-700)",
            },
          }}
        />
      </QueryClientProvider>
    </>
  );
}
