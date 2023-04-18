import { useState, useEffect } from 'react';

export default function Home() {
  const [data, setData] = useState([]);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const getData = async () => {
      const resList = await fetch('https://jsonplaceholder.typicode.com/posts/');
      const dataList = await resList.json();
      setData(dataList);
    };
    getData();
  }, []);

  const handleClick = (id) => {
    setCounter(counter + 1);
  };

  return (
    <>
      <main>
        {data.map((item) => {
          return (
            <div
              key={item.id}
              style={{ padding: '10px', cursor: 'pointer', border: '1px solid pink' }}
              onClick={() => handleClick(item.id)}
            >
              <h1>{item.title}</h1>
              <h2 style={{ color: 'pink' }}>
                Counter: <span style={{ color: 'black' }}>{counter}</span>
              </h2>
              <p>{item.body}</p>
            </div>
          );
        })}
      </main>
    </>
  );
}
