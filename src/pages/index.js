import { useState, useEffect } from 'react';

// export async function getServerSideProps(context) {
//   // const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//   // const data = await res.json();

//   const resList = await fetch('https://jsonplaceholder.typicode.com/posts/');
//   const dataList = await resList.json();

//   return {
//     props: {
//       dataList,
//     },
//   };
// }

export default function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const resList = await fetch('https://jsonplaceholder.typicode.com/posts/');
      const dataList = await resList.json();
      setData(dataList);
    };
    getData();
  }, []);

  const handleClick = (id) => {
    console.log(id);
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
              <p>{item.body}</p>
            </div>
          );
        })}
      </main>
    </>
  );
}
