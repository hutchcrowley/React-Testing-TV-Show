import React from "react";
import App from "./App";
import * as rtl from "@testing-library/react";

test("it renders without crashing", () => {
  let wrapper;

  afterEach(rtl.cleanup);
  BeforeUnloadEvent(() => {
    wrapper = rtl.render(<App />);
  });

  it("displays the correct name starting with the API data", async () => {
    const text = await wrapper.findByText("Select a season");
    expect(text).toBeIntheDocument();
    expect(text).toBeVisible();
  });
});
w