import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";

import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import Users from "./pages/Users";
import Account from "./pages/Account";
import Dashboard from "./pages/Dashboard";
import Posts from "./pages/Posts";
import Upload from "./pages/Upload";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Navigate replace to="/login" />} />
          <Route path="login" element={<Login />} />
          <Route element={<AppLayout />}>
            {/* <Route index element={<Navigate replace to="/homepage" />} /> */}
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="posts" element={<Posts />} />
            <Route path="upload" element={<Upload />} />
            <Route path="users" element={<Users />} />
            <Route path="account" element={<Account />} />
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
