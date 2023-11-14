import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/layout";
import MainPage from "../pages/main";
import TodoPage from "../pages/todo";

// v6
// import를 하기 위해 해당 모듈(컴포넌트)를 export 하는 방법
// 1. export const router = createBrowserRouter([
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    children: [
      {
        path: "",
        element: <MainPage/>
      },
      {
        path: "/todo/:todoId",
        element: <TodoPage/>
      }
    ]
  },
]);

export default router
