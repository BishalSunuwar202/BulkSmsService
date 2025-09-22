import ChatBot from "react-chatbotify";

const Chatbotify = () => {
  const styles = {
    chatWindowStyle: {
      bottom: "0", // distance from bottom
    },
  };
  return <ChatBot styles={styles} />;
};

export default Chatbotify;
