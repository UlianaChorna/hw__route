import { Route, BrowserRouter as Router, Routes} from "react-router-dom";
import RegisterPage from "./pages/register/RegisterPage";
import LoginPage from "./pages/login/LoginPage";
import MainPage from "./pages/main/mainPage";
import UserPage from "./pages/user/userPage";
import PostPage from "./pages/posts/PostsPage";
import TodoList from "./pages/todos/TodosPage";
import { useState } from "react";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
  <Router>
    <Routes>
    <Route path="/register" element={<RegisterPage/>}/>
      <Route path="/" element={<LoginPage setLoggedIn={setIsLoggedIn}/>}/>
      <Route path="/main" element={<MainPage />}/>
      <Route path="/users"  element={<UserPage/>}/> 
      <Route path="/users/:userId" element={<UserPage/>}/> 
      <Route path="/posts"  element={<PostPage/>}/> 
      <Route path="/posts/:postId" element={<PostPage/>}/> 
      <Route path="/todos" element={<TodoList />} />
      <Route path="/todos/edit/:todoId" element={<TodoList />} />
    </Routes>

  </Router>
)};

export default App;