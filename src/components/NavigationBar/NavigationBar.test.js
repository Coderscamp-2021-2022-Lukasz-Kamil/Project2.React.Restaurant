import { render, screen } from "@testing-library/react";
import NavigationBar from "./NavigationBar";
import { MemoryRouter } from "react-router-dom";

describe("NavigationBar components", () => {
  test("Logo icon is rendered", () => {
    render(
      <MemoryRouter>
        <NavigationBar />
      </MemoryRouter>
    );
    const logoIconElement = screen.getAllByAltText("restaurant logo");
    expect(logoIconElement).toBeInTheDocument;
  });
});
