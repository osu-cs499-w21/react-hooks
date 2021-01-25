import React, { useState, useEffect } from 'react';

function Clock(props) {
  const [ date, setDate ] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <h2>It is {date.toLocaleTimeString()}.</h2>
  );
}

function CountMessage(props) {
  return <p>You clicked {props.count} times</p>;
}

function CountingButton() {
  // const count = 0;
  const [ count, setCount ] = useState(0);
  // const [ pets, setPets ] = useState({ cats: 2, dogs: 2 });
  // setPets(prevPets => ({ ...prevPets, fish: 3 }));
  // const [ cats, setCats ] = useState(0);
  // const [ dogs, setDogs ] = useState(0);
  // const [ fish, setFish ] = useState(0);
  // const [ photos, setPhotos ] = useState([]);
  // setPhotos(prevPhotos => ([ ...prevPhotos, {url: '...'}]));

  useEffect(() => {
    document.title = `${count} clicks`;
  }, [ count ]);

  return (
    <div>
      <Clock />
      <CountMessage count={count} />
      {/*
        function (prevCount) {
          return prevCount + 1;
        }
        */}
      <button onClick={() => setCount(prevCount => prevCount + 1)}>
        Click me
      </button>
    </div>
  );
}

function App() {
  return (
    <div>
      <CountingButton />
    </div>
  );
}

export default App;
