import { useEffect, useState } from "react";

const Card = () => {
  const [data, setData] = useState([]);
  async function fetchData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const result = await res.json();
    if (result) {
      setData(result);
      //   console.log(data);
    }
  }

  useEffect(() => {
    fetchData();
    console.log(data);
  }, []);
  return (
    <div className="flex-col">
      {data.map((item: any, index: number) => (
        <div key={index} className="grid-cols-5 bg-slate-600 card">
          {item.title}
        </div>
      ))}
    </div>
  );
};

export default Card;
