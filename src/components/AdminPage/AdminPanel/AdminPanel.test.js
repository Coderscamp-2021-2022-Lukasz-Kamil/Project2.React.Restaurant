import { render, screen } from "@testing-library/react";
import AdminPanel from "./AdminPanel";

describe("AdminPanel components", () => {
  test("Renders button", () => {
    render(<AdminPanel />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  test("Renders Paradiso Italiano as a text ", () => {
    render(<AdminPanel />);
    expect(screen.getByText("Paradiso Italiano")).toBeInTheDocument;
  });
});
