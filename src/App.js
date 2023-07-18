import { useState } from 'react';
import './App.css';

const App = () => {
  // tecla Enter
  const ENTER_KEY = 13;
  // tecla Esc
  const ESCAPE_KEY = 27;

  const [value, setValue] = useState('');

  // função para apagar com a tecla Esc
  const erase = () => {
    setValue('');
  };

  // função enviar (aparece no console.log)
  const submit = () => {
    console.log('submit', value);
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
    <section id="app" className="container">
      <header>
        <h1 className="title">TODO-List</h1>
      </header>

      <section className="main">
        <input
          className="new-todo"
          placeholder="o que precisa ser feito?"
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
      </section>
    </section>
  );
};

export default App;
