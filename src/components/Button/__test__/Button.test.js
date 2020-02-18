import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Button from "../../Button";

describe("Button Test", () => {
  it("renders Button without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Button />, div);
  });
  it("renders Button with label", () => {
    const { getByTestId } = render(<Button label="Beginner" />);
    expect(getByTestId("button")).toHaveTextContent("Beginner");
  });
});
