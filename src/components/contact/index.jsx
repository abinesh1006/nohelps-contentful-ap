import React from "react";
import Container from "../common/Container";
import ContactForm from "./contactForm";
import { Wrapper, Details } from "./styles";

export default () => (
  <Wrapper as={Container} id="contact">
    <Details>
      <ContactForm />
    </Details>
  </Wrapper>
);

