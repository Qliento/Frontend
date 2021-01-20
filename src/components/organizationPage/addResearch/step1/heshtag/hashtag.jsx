import React, { useMemo, useState } from "react";
import "./hashtag.scss";
import CreatableSelect from "react-select/creatable";
import { green } from "@material-ui/core/colors";

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

  const customStyles = useMemo(
    () => ({
      option: (provided) => ({
        ...provided,
        border: "1px dotted black",
        color: "black",
        opacity: 0.8,
        padding: 5,
      }),
     
      control: (provided) => ({
        ...provided,
        width: "100%",
        minHeight:100,
      }),
      input: (provided) => ({
        ...provided,
        height: "auto",

      }),
      placeholder: (provided)=>({
        ...provided,
        height:"auto",
        top:"0%",
        transform: "translateY(0%)",
      }),
      valueContainer: (provided)=>({
        ...provided,
        height:60,
        alignItems:"flex-start",
      }),
     
    }),
    []
  );
  console.log(customStyles)
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
      placeholder="What keywords describe your research ( after entering keywords press ‘enter’ )"
      value={value}
      styles={customStyles}
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
      placeholder="Какие слова описывают ваше исследование ( после ввода ключевого слова нажмите ‘enter’ ) "
      value={value}
      styles={customStyles}
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
