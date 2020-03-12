import React from "react";

import { toMatchSnapshot } from 'jest-snapshot';

import { render } from '@testing-library/react';
 
import App from "./App";

test("renders episode data from an API", () => {
const { getAllByTestId, toBeDefined } = render(<App />);

const dropdown = getAllByTestId(/dropdown/i);

expect.extend({
    toMatchTrimmedSnapshot(recieved, length) {
        return toMatchSnapshot.call(
            this,
            recieved.substring(0, length),
            'toMatchTrimmedSnapshot',
        );
    },
});
expect(dropdown).toBeDefined();


})