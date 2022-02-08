import { render, screen } from "@testing-library/react";
import ContactPage from "./ContactPage";
import image from "./contactImage.png";

describe("ContactPage components", () => {
  test("Renders background photo ", () => {
    render(<ContactPage />);
    const backgroundImageElement = screen.getByTestId("background");
    expect(backgroundImageElement).toHaveStyle({
      backgroundImage: `url(${image})`,
    });
  });

  test("Renders Opening Hours header as a text ", () => {
    render(<ContactPage />);

    const openingHoursElement = screen.getByText("Opening Hours", {
      exact: false,
    });
    expect(openingHoursElement).toBeInTheDocument();
  });

  test("Renders Find Us Here as a text ", () => {
    render(<ContactPage />);

    const findUsHereElement = screen.getByText("Find us here", {
      exact: false,
    });
    expect(findUsHereElement).toBeInTheDocument();
  });

  test("Renders phone icon", () => {
    render(<ContactPage />);
    const phoneIconElement = screen.getByAltText("phone");
    expect(phoneIconElement).toBeInTheDocument();
  });

  test("Renders envelope icon", () => {
    render(<ContactPage />);
    const envelopeIconElement = screen.getByAltText("envelope");
    expect(envelopeIconElement).toBeInTheDocument();
  });

  test("Renders map element", () => {
    render(<ContactPage />);
    const mapElement = screen.getByTestId("map-container-google-1");
    expect(mapElement).toBeInTheDocument();
  });
});
