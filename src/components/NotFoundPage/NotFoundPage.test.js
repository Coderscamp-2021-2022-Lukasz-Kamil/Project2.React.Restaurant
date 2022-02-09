import { getByTestId, render, screen } from "@testing-library/react";
import { toHaveStyle } from "@testing-library/jest-dom";
import errorPhoto from "./404.jpg";
import NotFoundPage from "./NotFoundPage";

describe("NotFoundPage components", () => {
  test("Renders background photo ", () => {
    render(<NotFoundPage />);
    const backgroundImageElement = screen.getByTestId("background");
    expect(backgroundImageElement).toHaveStyle({
      backgroundImage: `url(${errorPhoto})`,
    });
  });

  test("Renders button", () => {
    render(<NotFoundPage />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});
