import React, { useState, useEffect } from "react";
import axios from "axios";
const Resume = ({ data, uploadedImage }) => {
  const [inputText, setInputText] = useState("");
  const [resultText, setResultText] = useState("");
  const [selectedLanguageKey, setLanguageKey] = useState("");
  const [languagesList, setLanguagesList] = useState([]);
  const [detectLanguageKey, setdetectedLanguageKey] = useState("");
  let style;
  if (uploadedImage.current == null) {
    style = {};
  } else {
    style = { width: "200px", height: "200px" };
  }
  const getLanguageSource = () => {
    axios
      .post(`https://libretranslate.de/detect`, {
        q: inputText,
      })
      .then((response) => {
        setdetectedLanguageKey(response.data[0].language);
      });
  };
  const translateText = () => {
    setResultText(inputText);

    getLanguageSource();

    let data = {
      q: inputText,
      source: detectLanguageKey,
      target: selectedLanguageKey,
    };
    axios
      .post(`https://libretranslate.com/translate`, data)
      .then((response) => {
        setResultText(response.data.translatedText);
      });
  };

  const languageKey = (selectedLanguage) => {
    setLanguageKey(selectedLanguage.target.value);
  };

  useEffect(() => {
    axios.get(`https://libretranslate.com/languages`).then((response) => {
      setLanguagesList(response.data);
    });

    getLanguageSource();
  }, [inputText]);
  return (
    <div>
      <div style={style}>
        <img width="100%" ref={uploadedImage} />
      </div>
      <div className="mb-3">
        <h4 onChange={(e) => setInputText(e.target.value)}>
          {data.location ? (
            <span>
              {" "}
              {data.name} from {data.location}.{" "}
            </span>
          ) : data.name ? (
            <span>You are teaching {data.name} </span>
          ) : data.major ? (
            <span>
              {" "}
              She is Studying {data.major}at {data.school}.{" "}
            </span>
          ) : data.school ? (
            <span>at {data.school} </span>
          ) : data.occu ? (
            <span> She is currently work as a {data.occu}.</span>
          ) : data.religion ? (
            <span>She was raised {data.religion}. </span>
          ) : (
            ""
          )}
          {data.major ? (
            <span>
              {" "}
              She is Studying {data.major}at {data.school}.{" "}
            </span>
          ) : data.school ? (
            <span>at {data.school} </span>
          ) : (
            ""
          )}
          {data.occu ? (
            <span> She is currently work as a {data.occu}.</span>
          ) : (
            ""
          )}
          {data.religion ? <span>She was raised {data.religion}. </span> : ""}
        </h4>
      </div>
      <select name="" id="" defaultValue="Choose...">
        <option>Please Select Language..</option>
        {languagesList.map((language) => {
          return <option value={language.code}>{language.name}</option>;
        })}
      </select>
      <button
        onClick={() => {
          translateText();
        }}
      >
        Translate
      </button>
      <div>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          value={resultText}
        ></textarea>
      </div>
    </div>
  );
};

export default Resume;
