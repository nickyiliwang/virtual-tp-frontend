import React, { useState, useEffect } from "react";
// components
import { PictureFetcher } from "./component/PictureFetcher/PictureFetcher";
import { EmailForm } from "./component/EmailForm";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
// css
import "./setup.css";
import "./App.css";
// axios
import axios from "axios";

const App = () => {
  const [messageToSend, setMessageToSend] = useState({
    to: "",
    from: "",
    subject: "",
    text: "",
    image: ""
  });
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    const errorHandling = () => {
      const isEmpty = Object.values(messageToSend).map(val => val === "");

      if (isEmpty.filter(val => val === true).length === 0) {
        setIsButtonDisabled(false);
      }
    };
    errorHandling();
  }, [messageToSend]);

  const updateMessageToSend = msg => {
    setMessageToSend(msg);
  };

  const handleOnSubmitClick = () => {
    const MySwal = withReactContent(Swal);

    axios
      .post("https://glacial-earth-86841.herokuapp.com/send", messageToSend)
      .then(res => {
        MySwal.fire({
          title: "Message sent!",
          icon: "success",
          showCancelButton: true
        });

        setMessageToSend({
          to: "",
          from: "",
          subject: "",
          text: "",
          image: ""
        });
        setIsButtonDisabled(true);
      })
      .catch(err => console.error(err));
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
            handleOnSubmitClick={handleOnSubmitClick}
            isDisabled={isButtonDisabled}
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
