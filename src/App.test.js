import React from "react";

import { fireEvent, render } from '@testing-library/react';


import App from "./App";


 test("it renders, fetches data from the API and renders it", async () => {

 const { getByText, queryAllByTestId, getByTestId } = render(<App />);

 expect.assertions(2);

  const string = getByText(/fetching data/i);
  console.log(string);

  const dropdown = await getByTestId('dropdown')
  
  fireEvent.click(dropdown);
  const season1 = getByText(/season 1/i);
  fireEvent.click(season1);
  
  expect(string).toBeDefined()
  await expect(queryAllByTestid('episodes').toHaveLength(8));
 
})

