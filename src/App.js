import React, { useState } from "react";
// components
import { PictureFetcher } from "./component/PictureFetcher/PictureFetcher";
import { EmailForm } from "./component/EmailForm";
// css
import "./setup.css";
import "./App.css";

const App = () => {
  const [messageToSend, setMessageToSend] = useState({
    to: "",
    from: "",
    subject: "",
    text: "",
    image: ""
  });

  const updateMessageToSend = msg => {
    setMessageToSend(msg);
  };

  return (
    <main className="wrapper">
      <h1> Welcome to Virtual TP !</h1>
      <p>
        Hi there, would you like to send a virtual hug to your family, friends
        or loved ones? Oh but you can send them something even better right now.
        Toilet papers, Hand sanitizers, or just a cute kitten. Virtually, free
        of charge!
      </p>

      <div className="content-container">
        <div className="left">
          <h2>STEP 1: Enter your Email and Message</h2>
          <EmailForm
            messageToSend={messageToSend}
            updateMessageToSend={updateMessageToSend}
          />
        </div>
        <div className="right">
          <h2>STEP 2: Search and select an image to attach </h2>
          <PictureFetcher
            messageToSend={messageToSend}
            updateMessageToSend={updateMessageToSend}
          />
        </div>
      </div>
    </main>
  );
};

export default App;
