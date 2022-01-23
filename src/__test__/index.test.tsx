import { render, screen } from "@testing-library/react";
import Home from "../pages/index";

describe("Home", () => {
  it("renders signUp button", async () => {
    render(<Home />);

    const button = await screen.findByText("home:signUp");

    expect(button).toBeInTheDocument();
  });
});
