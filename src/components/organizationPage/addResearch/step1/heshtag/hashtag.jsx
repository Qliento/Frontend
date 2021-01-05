import React, { useState } from "react";
import "./hashtag.scss";
import CreatableSelect from "react-select/creatable";

const components = {
  DropdownIndicator: null,
};

const createOption = (label) => ({
  label,
  value: label,
});

const CreatableInputOnly = ({ changeHashtag, lang, data }) => {
  const [inputValue, setInputValue] = useState("");
  const [value, setValue] = useState(data ? data : []);

  const handleChange = (value1) => {
    setValue(value1);
    changeHashtag(value);
  };

  const handleInputChange = (inputValue1) => {
    setInputValue(inputValue1);

    changeHashtag(value);
  };
  const handleKeyDown = (event) => {
    if (!inputValue) return;
    switch (event.key) {
      case "Enter":
      case "Tab":
        console.log("Value Added");
        console.log(value);

        setInputValue("");
        if (value) {
          setValue([...value, createOption(inputValue)]);
        } else if (!value) {
          setValue([createOption(inputValue)]);
        }

        changeHashtag(value);

        event.preventDefault();
    }
  };

  return (
    <div className="hashtag">
    {
      lang == 'en' && <CreatableSelect
      components={components}
      inputValue={inputValue}
      isClearable
      isMulti
      menuIsOpen={false}
      onChange={handleChange}
      onInputChange={handleInputChange}
      onKeyDown={handleKeyDown}
      placeholder="Which words describe your research"
      value={value}
    />
    }
    {
      lang == 'ru' && <CreatableSelect
      components={components}
      inputValue={inputValue}
      isClearable
      isMulti
      menuIsOpen={false}
      onChange={handleChange}
      onInputChange={handleInputChange}
      onKeyDown={handleKeyDown}
      placeholder="Какие слова описывают ваше исследование"
      value={value}
    />
    }
    {
      lang == 'kg' && <CreatableSelect
      components={components}
      inputValue={inputValue}
      isClearable
      isMulti
      menuIsOpen={false}
      onChange={handleChange}
      onInputChange={handleInputChange}
      onKeyDown={handleKeyDown}
      placeholder="Изилдөөңүздү сүрөттөгөн сөздөр"
      value={value}
    />
    }
      
    </div>
  );
};
export default CreatableInputOnly;
