import { render, screen } from "@testing-library/react";
import TestComponent from "../TestComponent";

test("renders TestComponent", () => {
  render(<TestComponent />);
  expect(screen.getByText("Test Component")).toBeInTheDocument();
});