// import { useState, useEffect } from 'react';

export async function getServerSideProps(context) {
  // const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  // const data = await res.json();

  const resList = await fetch('https://jsonplaceholder.typicode.com/posts/');
  const dataList = await resList.json();

  return {
    props: {
      dataList,
    },
  };
}

export default function Home({ dataList }) {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   const getData = async () => {
  //     const resList = await fetch('https://jsonplaceholder.typicode.com/posts/');
  //     const dataList = await resList.json();
  //     setData(dataList);
  //   };
  //   getData();
  // }, []);

  return (
    <>
      <main>
        {dataList.map((item) => {
          return (
            <div key={item.id}>
              <h1>{item.title}</h1>
              <p>{item.body}</p>
            </div>
          );
        })}
      </main>
    </>
  );
}
