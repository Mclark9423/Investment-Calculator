import Results from "./components/Results";
import UserInput from "./components/UserInput";
import { useState } from "react";


function App() {
  const [userData, setUserData] = useState({});

  const updateUserData = (name, value) => {
    setUserData(prevUserData => ({
      ...prevUserData,
      [name]: +value
    }));
  };

  const inputIsValid = userData.duration >= 1

  return (
    <div className="center" >
      <UserInput updateUserData={updateUserData}></UserInput>
      {!inputIsValid && (<p className="center">Please enter valid input data</p>
      )}
      {inputIsValid && <Results resultData={userData}></Results>}
    </div>
  )
}

export default App
