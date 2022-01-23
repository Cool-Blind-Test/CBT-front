import { render, screen } from "@testing-library/react";
import Home from "../pages/index";

describe("Home", () => {
  it("renders three links", async () => {
    render(<Home />);

    const links = await screen.findAllByRole("link");

    expect(links).toHaveLength(3);
  });
});
