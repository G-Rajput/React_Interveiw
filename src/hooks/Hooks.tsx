import Footer from "./helper/Footer";
import HuseReducer from "./HuseReducer";
import Profile from "./Profile";
import HuseCallback from "./HuseCallback";
import HuseEffect from "./HuseEffect";
import HuseMemo from "./HuseMemo";
import HuseRef from "./HuseRef";
import HuseState from "./HuseState";
import HuseLayoutEffect from "./HuseLayoutEffect";
import TestCustomHook from "./helper/TestCustomHook";

const Hooks = () => {
  return (
    <div>
      <h1>Hooks</h1>
      <HuseState />
      <br />
      <hr />
      <br />
      <HuseEffect />
      <br />
      <hr />
      <br />
      <HuseRef />
      <br />
      <hr />
      <br />
      <HuseMemo />
      <br />
      <hr />
      <br />
      <HuseCallback />
      <br />
      <hr />
      <br />
      {/* Used of useContext Hook start */}
      <Profile />
      <Footer />
      {/* End of useContext Hook start */}
      <br />
      <hr />
      <br />
      <HuseReducer />
      <br />
      <hr />
      <br />
      <HuseLayoutEffect />
      <br />
      <hr />
      <br />
      <TestCustomHook />
    </div>
  );
};

export default Hooks;
