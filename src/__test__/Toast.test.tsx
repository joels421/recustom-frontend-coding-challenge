import React from "react";
import { render } from "@testing-library/react";
import Toast from "../components/Toast/Toast";
import { it, expect } from "vitest";

it("renders the Component correctly", () => {
  const { getByTestId } = render(<Toast />);
  const element = getByTestId("example-component");
  expect(element).toBeDefined();
});
