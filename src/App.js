import './App.css';
import { data } from './data';
import React from 'react';

function App() {
  const [value, setValue] = React.useState(data);

  const removeItem = (id) => {
    console.log(id);
    // filter the array with id
    const newItem = value.filter((item, index) => id !== index);
    // splice the data
    // const newItem = [...value]; //deep copy
    // newItem.splice(id, 1); //delete 1 item start with id index
    setValue(newItem);
  };
  return (
    <>
      <main>
        <div className='wrap'>
          <h1>5 birthdays today</h1>
          <div className='container'>
            {value.map((dat, index) => {
              const { img, name, age } = dat;
              return (
                <Individual
                  removeItem={removeItem}
                  {...dat}
                  id={index}
                  key={index}
                />
              );
            })}
          </div>
          {value.length ? (
            <button onClick={() => setValue([])}>CLEAR ALL</button>
          ) : (
            ''
          )}
        </div>
      </main>
    </>
  );
}

function Individual(props) {
  const { img, name, age, removeItem, id } = props;
  return (
    <section>
      <div className='each'>
        <img src={img} alt='' />
        <div className='name-age'>
          <p>{name}</p>
          <p className='age'>{age}</p>
        </div>
      </div>
      <button onClick={() => removeItem(id)}>Remove Item</button>
    </section>
  );
}

export default App;
