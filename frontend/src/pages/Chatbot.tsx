import { useState } from "react";

function Chatbot() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");

  const handleSend = () => {
    const text = message.toLowerCase();

    if (text.includes("course")) {
      setReply(
        "We offer Drone Training, Full Stack Development and AI & Machine Learning courses."
      );
    } else if (text.includes("fee")) {
      setReply(
        "Course fees vary depending on the program."
      );
    } else if (text.includes("service")) {
      setReply(
        "We provide training, consulting and technology services."
      );
    } else if (text.includes("contact")) {
      setReply(
        "Please use the Contact page to submit your enquiry."
      );
    } else if (text.includes("hello")) {
      setReply(
        "Hello! How can I assist you today?"
      );
    } else {
      setReply(
        "Sorry, I only understand questions about courses, fees, services and contact information."
      );
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h2 className="mb-4">
          AI Support Assistant
        </h2>

        <input
          className="form-control"
          placeholder="Ask a question..."
          value={message}
          onChange={(e) =>
            setMessage(e.target.value)
          }
        />

        <button
          className="btn btn-success mt-3"
          onClick={handleSend}
        >
          Send
        </button>

        <div className="alert alert-info mt-4">
          <strong>Bot:</strong> {reply}
        </div>
      </div>
    </div>
  );
}

export default Chatbot;