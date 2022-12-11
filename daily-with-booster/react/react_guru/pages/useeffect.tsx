import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import Toggler from "../components/UseEffect/toggler";

const UseEffect: NextPage = () => {
  const [toggle, setToggle] = useState(true);
  const toggleHandler = () => setToggle(() => !toggle);

  return <Toggler toggle={toggle} toggleHandler={toggleHandler} />;
};

export default UseEffect;
