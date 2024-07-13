import useLocalStorage from "../useLocalStorage";

const TestCustomHook = () => {
  const [name, setName] = useLocalStorage("userName", "");
  const [id, setId] = useLocalStorage("userId", "");

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h2>Hello, {name}</h2>
      <input
        type="text"
        placeholder="Enter your Id"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <h2>Your Id is : {id}</h2>
    </div>
  );
};

export default TestCustomHook;
