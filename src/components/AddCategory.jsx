import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("One Punch");
  const onInputChange = (event) => {
    console.log(event.target.value);
    setInputValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    // console.log(inputValue);
    if (inputValue.trim().length <= 1) return;

    // setCategories((prevCategories) => [inputValue, ...prevCategories]);
    onNewCategory(inputValue.trim());
    setInputValue("");
  };

  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <input
        type="text"
        placeholder="Buscar GIF"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
