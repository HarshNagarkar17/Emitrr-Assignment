import {Routes, Route} from "react-router-dom"
import { Login } from "./pages/Login";
import QuizContainer from "./pages/QuizContainer";
import { Home } from "./pages/Home";
import { Results } from "./pages/Results";
import { See } from "./pages/See";
import { Profile } from "./pages/Profile";
import { Admin } from "./pages/Admin";
import { Register } from "./pages/Register";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/quiz" element={<QuizContainer/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/see" element={<See/>} />
      <Route path="/admin" element={<Admin/>} />
      <Route path="/results" element={<Results/>} />
    </Routes>
  );
}

export default App;
