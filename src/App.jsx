import "./App.css";
import Login from "./Components/Login/Login";
import Signup from "./Components/SignUp/Signup";
import ConfirmationMsg from "./Components/SignUp/ConfirmationMsg";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EmailConfirmation from "./Components/SignUp/EmailConfirmation";
import Final_Registration from "./Components/SignUp/Final_Registration";
import Forget_Pass from "./Components/Login/Forget_Password/Forget_Pass";
import Reset_Pass_Msg from "./Components/Login/Forget_Password/Reset_Pass_Msg";
import ResetPassword from "./Components/Login/Forget_Password/ResetPassword";
function App() {
  return (
    <Router>
      <div className="Container">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/ConfirmationMsg" element={<ConfirmationMsg />} />
          <Route path="/EmailConfirmation" element={<EmailConfirmation/>}/>
          <Route path="/FinalRegister" element={<Final_Registration/>}/>
          <Route path="/forgetPassword" element={<Forget_Pass/>}/>
          <Route path="/ResetPasswordMSg" element={<Reset_Pass_Msg />} />
          <Route path="/Reset_Password" element={<ResetPassword />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
