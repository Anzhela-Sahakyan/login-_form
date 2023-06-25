import FirstName from "./components/firstName/FirstName";
import LastName from "./components/lastName/LastName";
import Email from "./components/email/Email";
import Password from "./components/Password/Password";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Login Form</h1>
      <FirstName />
      <LastName />
      <Email />
      <Password />
    </div>
  );
}

export default App;
