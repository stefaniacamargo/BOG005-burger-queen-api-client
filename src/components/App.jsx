import { useState } from 'react';
import thumb from '../../thumb.png';

const App = () => {
  const [times, setTimes] = useState(0);

  const onButtonClick = () => {
    setTimes(value => value + 1)
  };

  return (
    <>
      <h1>Hello World</h1>
      <img src={thumb} alt="Thumb image" />
      <button onClick={onButtonClick}>Click me! {times}</button>
    </>
  );
};

export default App;
