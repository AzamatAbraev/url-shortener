import { useState, useEffect } from "react";
import axios from "axios";

import "./Shortener.css";

const Shortener = () => {
  const [link, setLink] = useState<string>("");
  const [links, setLinks] = useState<Array<{ original: string; short: string }>>([]);
  const [error, setError] = useState("");
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    const savedLinks = sessionStorage.getItem("shortenedLinks");
    if (savedLinks) {
      setLinks(JSON.parse(savedLinks));
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem("shortenedLinks", JSON.stringify(links));
  }, [links]);

  const shortenLink = async () => {
    if (link) {
      try {
        const res = await axios.post(
          "https://smolurl.com/api/links",
          {
            url: link,
          },
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        );
        const newLink = {
          original: link,
          short: res.data.data.short_url,
        };
        setLinks([...links, newLink]);
        setLink("");
        setSelected(null);
      } catch (err) {
        console.log(err);
        setError("Failed to shorten the link. Please try again.");
      }
    } else {
      setError("Please add a link!");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLink(e.target.value);
    if (e.target.value.length > 0) {
      setError("");
    }
  };

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text).then(() => {
      setSelected(index);
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  };

  return (
    <div className="container">
      <div className="shortener">
        <input
          value={link}
          onChange={handleInputChange}
          type="text"
          className={`shortener-input ${error ? "error" : ""}`}
          placeholder="Shorten a link here..."
        />
        <button onClick={shortenLink}>Shorten</button>
        {error && <p className="error-message">{error}</p>}
      </div>
      <div className="url-list">
        {links.map((linkItem, index) => (
          <div key={index} className="url-result">
            <a href={linkItem.original} className="original-url">{linkItem.original.substring(0, 40)}{linkItem.original.length > 40 ? "..." : ""}</a>
            <div className="url-result-left">
              <a href={linkItem.short} target="_blank" rel="noopener noreferrer">{linkItem.short}</a>
              <button className={selected === index ? "btn-copied" : "btn-copy"} onClick={() => copyToClipboard(linkItem.short, index)}>{selected !== index ? "Copy" : "Copied"}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shortener;
