import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/This is done by CuongNh34/i);
  expect(linkElement).toBeInTheDocument();
});
