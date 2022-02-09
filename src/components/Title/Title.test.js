import { render, screen } from "@testing-library/react";
import Title from "./Title";

describe("Title component", () => {
  test("Renders title ", () => {
    render(<Title />);
    expect(screen.getByText("Paradiso Italiano")).toBeInTheDocument;
  });
});
