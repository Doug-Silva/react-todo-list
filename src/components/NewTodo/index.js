import React, { useState } from 'react';

const NewTodo = ({ onNewTodo }) => {
  const ENTER_KEY = 13;
  const ESCAPE_KEY = 27;

  const [value, setValue] = useState('');

  // função para apagar com a tecla Esc
  const erase = () => {
    setValue('');
  };

  // função enviar
  const submit = () => {
    if (onNewTodo) {
      onNewTodo(value);
      erase();
    }
  };

  const onChange = (event) => {
    setValue(event.target.value);
  };

  // função de tecla Enter pressionada ou tecla Esc
  const onKeyDown = (event) => {
    // se for pressionada a tecla Enter
    if (event.which === ENTER_KEY) {
      submit();
      erase();

      // se for pressionada a tecla Esc
    } else if (event.which === ESCAPE_KEY) {
      erase();
    }
  };

  return (
    <input
      className="new-todo"
      placeholder="o que precisa ser feito?"
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
};

export default NewTodo;
