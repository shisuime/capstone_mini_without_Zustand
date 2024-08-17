import Button from "../common/Button/Button.component";
import "./Header.scss";
import { useState } from "react";

function Header(props) {
  const [Value, setValue] = useState("");

  const onchangehandeler = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <div className="wrapper">
        <div className="main-div main-div3">
          <h1 className="logoname">ROYAL CROWN</h1>
        </div>
      </div>
    </>
  );
}

export default Header;
