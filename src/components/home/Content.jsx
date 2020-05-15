import React from "react";

import BoxContainer from "../BoxContainer";
import Image from "./Image";
import TextInput from "./TextInput";

export default function HomeContent({ onSubmit = () => {}, answers }) {
  return (
    <BoxContainer>
      <Image />
      <TextInput onSubmit={onSubmit} answers={answers} />
    </BoxContainer>
  );
}
