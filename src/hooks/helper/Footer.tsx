import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const Footer = () => {
  const { phone, name }: any = useContext(AppContext);
  return (
    <div>
      <h1>Footer</h1>
      <p>
        <b>Phone:{phone}</b>
      </p>
      <b>Name:{name}</b>
    </div>
  );
};

export default Footer;
