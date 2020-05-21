// TODO: Create a logo

import React from "react";

import BoxContainer from "../BoxContainer";
import Image from "./Image";
import Intro from "./Intro";
import TextInput from "./TextInput";

export default function HomeContent({ onSubmit = () => {}, answers }) {
  return (
    <BoxContainer>
      <Image />
      <Intro />
      <TextInput onSubmit={onSubmit} answers={answers} />
    </BoxContainer>
  );
}
