import { render, screen } from "@testing-library/react";
import NavigationBar from "./NavigationBar";

describe("NavigationBar components", () => {
  test("Logo icon is rendered", () => {
    render(<NavigationBar />);
    const logoIconElement = screen.getByAltText("restaurant logo");
    expect(logoIconElement).toBeInTheDocument();
  });
});
