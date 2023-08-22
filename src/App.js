import { useState } from 'react';
import { MdDelete } from 'react-icons/md';
import './App.css';

const App = () => {
  // tecla Enter
  const ENTER_KEY = 13;
  // tecla Esc
  const ESCAPE_KEY = 27;

  const initialTodos = [
    { id: 1, title: 'Estudar React', checked: false },
    { id: 2, title: 'Estudar Inglês', checked: true },
    { id: 3, title: 'Tocar guitarra', checked: false },
    { id: 4, title: 'Aprender Python', checked: false },
  ];

  const [todos] = useState(initialTodos);
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
        <ul className="todo-list">
          {todos.map((todo) => (
            <li key={todo.id.toString()}>
              <span className="todo">{todo.title}</span>
              <button className="remove" type="button">
                <MdDelete size={28} />
              </button>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default App;
