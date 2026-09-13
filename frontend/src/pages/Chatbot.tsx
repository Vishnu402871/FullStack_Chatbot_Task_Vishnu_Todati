import { useState } from "react";

function Chatbot() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");

  const handleSend = () => {
    const text = message.toLowerCase();

    if (text.includes("course")) {
      setReply(
        "We offer Drone Training, Full Stack Development, AI & Machine Learning courses."
      );
    } else if (text.includes("fee")) {
      setReply(
        "Course fees vary by program. Please submit an enquiry for details."
      );
    } else if (text.includes("contact")) {
      setReply(
        "You can contact us through the enquiry form or admin support team."
      );
    } else if (text.includes("service")) {
      setReply(
        "We provide drone services, training, technology solutions and consulting."
      );
    } else if (text.includes("hello")) {
      setReply("Hello! How can I help you today?");
    } else {
      setReply(
        "Sorry, I do not understand. Please ask about courses, fees, services or contact information."
      );
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>AI Support Assistant</h1>

      <input
        type="text"
        placeholder="Ask something..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        style={{
          width: "300px",
          padding: "8px",
        }}
      />

      <button
        onClick={handleSend}
        style={{
          marginLeft: "10px",
        }}
      >
        Send
      </button>

      <div style={{ marginTop: "20px" }}>
        <strong>Bot:</strong> {reply}
      </div>
    </div>
  );
}

export default Chatbot;