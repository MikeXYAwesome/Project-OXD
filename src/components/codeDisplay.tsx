import { useState } from "react";
import "../css/codedisplay.css";

const CodeDisplay = ({ code }: any) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="css-code-display">
      <pre>{code}</pre>
      <button onClick={handleCopy}>{copied ? "Copied!" : "Copy"}</button>
    </div>
  );
};

export default CodeDisplay;
