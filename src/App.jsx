import FirstName from "./components/firstName/FirstName";
import LastName from "./components/lastName/LastName";
import Email from "./components/email/Email";
import "./App.css";

function App() {
  return (
    <div className="App">
      <FirstName />
      <LastName />
      <Email />
    </div>
  );
}

export default App;
