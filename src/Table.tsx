import { useEffect, useState } from "react";

const Table = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showdata, setShowData] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [isEnable, setIsEnable] = useState(false);

  async function fetchData() {
    try {
      setLoading(true);
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      const result = await res.json();
      //   console.log(result);
      if (result && result.length > 0) {
        setData(result);
        let updatedResult: any = [];
        for (let i = 0; i < 10; i++) {
          updatedResult.push(result[i]);
        }
        setShowData(updatedResult);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  console.log(showdata);

  useEffect(() => {
    fetchData();
  }, []);

  function handlePrev() {
    // console.log(pageNo);
    setPageNo((prev) => prev - 1);
    // let nextshowData: any = [];

    // if (pageNo <= 0) {
    //   setIsEnable(false);
    // } else {
    //   for (let i = pageNo * 10; i < pageNo * 10 + 10; i++) {
    //     nextshowData.push(data[i]);
    //   }
    // }
    // setShowData(nextshowData);
    const startIndex = pageNo * 10;
    const endIndex = startIndex + 10;
    setShowData(data.slice(startIndex, endIndex));
    console.log(showdata);
  }

  function handleNext() {
    setPageNo((prev) => prev + 1);
    // console.log(pageNo);
    // let nextshowData: any = [];
    // if (pageNo > 20) {
    //   setIsEnable(false);
    // } else {
    //   for (let i = pageNo * 10; i < pageNo * 10 + 10; i++) {
    //     nextshowData.push(data[i]);
    //   }
    // }
    // setShowData(nextshowData);
    const startIndex = pageNo * 10;
    const endIndex = startIndex + 10;
    setShowData(data.slice(startIndex, endIndex));
    console.log(showdata);
  }

  if (loading) {
    return <h1> loading data please wait !</h1>;
  }

  return (
    <>
      <div>
        <table>
          <thead>
            <tr>
              <th>title</th>
              <th>id</th>
            </tr>
          </thead>
          <tbody>
            {showdata.map((item: any, index: number) => {
              return (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>{item.id}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <button onClick={handlePrev}>Prev</button>
      <button onClick={handleNext}>Next</button>
    </>
  );
};

export default Table;
