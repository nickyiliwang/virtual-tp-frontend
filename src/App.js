import React from "react";
// components
import { ImageSelection } from "./component/ImageSelection";
import { EmailForm } from "./component/EmailForm";
// css
import "./setup.css";
import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <h1>Welcome to Virtual TP !</h1>
      <p>
        Hi there, would you like to send a virtual hug to your family, friends
        or loved ones? Oh but you can send them something even better right now.
        Toilet papers, Hand sanitizers, or just a cute kitten. Virtually, free
        of charge!
      </p>
      <div className="left">
        <EmailForm />
      </div>
      <div className="right">
        <ImageSelection />
      </div>
    </div>
  );
}

export default App;
