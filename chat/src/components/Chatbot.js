"use client";
import React from "react";
import ChatBot from "react-chatbotify";
function Chatbot() {
  const helpOption = ["github", "linkedin", "inte-gem", "authentication"];
  const flow = {
    start: {
      message: "Hello I am vasanth what i can provide for you 😀",
      transition: { duration: 1000 }, //wait for 1sec and then move to show_option
      path: "show_options",
    },
    show_options: {
      message: "Here you can start up with me...",
      options: helpOption,
      path: "process_options",
    },
    prompt_again: {
      message: "Do you need any other help...",
      options: helpOption,
      path: "process_options",
    },
    unknown_input: {
      message: "sorry,I am not able to understand",
      options: helpOption,
      path: "process_options",
    },
    process_options: {
      transition: { duration: 0 },
      chatDisabled: true,
      path: async ({ userInput, injectMessage }) => {
        let link = "";
        switch (userInput) {
          case "github":
            link = "https://github.com/Vasanth-sharp";
            break;
          case "linkedin":
            link = "https://www.linkedin.com/in/vasanthakumar-kathiresan/";
            break;
          case "inte-gem":
            link = "https://www.inte-gem.vercel.app";
            break;
          case "authentication":
            link = "https://authentication-ver2.vercel.app/";
            break;
          default:
            return "unknown_input";
        }
        await injectMessage("sit tight! I'll send you right there!!");
        setTimeout(() => {
          window.open(link);
        }, 3000);
        return "repeat";
      },
    },
    repeat: {
      transition: { duration: 3000 },
      path: "prompt_again",
    },
  };
  return (
      <ChatBot
        settings={{
          general: { embedded: true },
          chatHistory: { storageKey: "VK bot" },
        }}
        flow={flow}
      />
  );
}

export default Chatbot;
