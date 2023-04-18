import { useState } from 'react';

export async function getServerSideProps(context) {
  const resList = await fetch('https://jsonplaceholder.typicode.com/posts/');
  const dataList = await resList.json();

  return {
    props: {
      dataList,
    },
  };
}

export default function Home({ dataList }) {
  const [counter, setCounter] = useState(0);

  const handleClick = (id) => {
    console.log(id);
    setCounter(counter + 1);
  };

  return (
    <>
      <main>
        {dataList.map((item) => {
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
