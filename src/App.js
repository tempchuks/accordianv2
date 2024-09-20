import { render } from "react-dom";
import "./styles.css";
import { useState } from "react";
const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];
export default function App() {
  return (
    <div className="App">
      <Accordian />
    </div>
  );
}

function Accordian() {
  const [content, setContent] = useState(null);
  return (
    <div className="accordion">
      {faqs.map((f, i) => (
        <Accordianlist
          title={f.title}
          text={f.text}
          num={i}
          content={content}
          setContent={setContent}
        />
      ))}
    </div>
  );
}
function Accordianlist({ title, num, text, content, setContent }) {
  const isOpens = num === content;
  return (
    <div
      onClick={() => setContent(isOpens ? null : num)}
      className={`item ${isOpens ? "open" : ""}`}
    >
      <p className="number">{num + 1}</p>
      <h1 className="title text">{title}</h1>
      <p className="title">{isOpens ? "-" : "+"}</p>
      {isOpens && <div className="content-box">{text}</div>}
    </div>
  );
}
