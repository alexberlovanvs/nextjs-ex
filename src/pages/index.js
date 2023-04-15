import { useState, useEffect } from 'react';

// export async function getServerSideProps(context) {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//   const data = await res.json();

//   return {
//     props: {
//       data,
//     },
//   };
// }

export default function Home() {
  const [data, setData] = useState({});
  useEffect(() => {
    const getData = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      const resData = await res.json();
      setData(resData);
    };
    getData();
  }, []);

  return (
    <>
      <main>
        <div>{data.body}</div>
      </main>
    </>
  );
}
