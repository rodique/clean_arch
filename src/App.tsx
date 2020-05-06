import * as React from "react";
import "./styles.css";

import SignUpView from "./presentation/view/signup/SignUp.view";
import SignUpViewModel from "./presentation/view-model/signup/SignUp.viewModel";

export default function App() {
  const signUpViewModel = new SignUpViewModel();

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <SignUpView signUpViewModel={signUpViewModel} />
    </div>
  );
}
