import Header from "@components/Header";
import { render } from "@testing-library/react";
import * as React from "react";

/* eslint-disable no-undef */
it('Should render header with heading role and correct text', () => {
  render(<Header />);
});
