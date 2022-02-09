import { getByTestId, render, screen } from "@testing-library/react";
import { toHaveStyle } from "@testing-library/jest-dom";
import LandingPage from "./LandingPage";
import background from "./bg-landingPage.jpg";

describe("LandingPage components", () => {
  test("Renders background photo ", () => {
    render(<LandingPage />);
    const backgroundImageElement = screen.getByTestId("background");
    expect(backgroundImageElement).toHaveStyle({
      backgroundImage: `url(${background})`,
    });
  });

  test("Renders Paradiso Italiano as a text ", () => {
    render(<LandingPage />);
    expect(screen.getByText("Paradiso Italiano")).toBeInTheDocument;
  });

  test("Renders Italian Restaurant as a text ", () => {
    render(<LandingPage />);
    expect(screen.getByText("Italian Restaurant")).toBeInTheDocument;
  });

  test("Renders Container About ", () => {
    render(<LandingPage />);
    expect(screen.getByTestId("about-container")).toBeInTheDocument;
  });

  test("Container About contains description", () => {
    render(<LandingPage />);
    const container = screen.getByTestId("about-container");
    const description = screen.getByTestId("about-description");
    expect(container).toContainElement(description);
  });
});
