import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const Contact = () => {
  const { phone }: any = useContext(AppContext);
  return (
    <div>
      <h1>Contact</h1>
      <p>
        <b>Phone:{phone}</b>
      </p>
    </div>
  );
};

export default Contact;
