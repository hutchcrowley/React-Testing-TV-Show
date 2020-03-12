import { makeUser } from "./helpers";

jest.mock('uuid', () => () => 'abcde')

test("generates a user with an id and full name", () => {
  // Arrange
  
  //  set up fake data
  const expected = { id: "abcde", fullName: "Peter Piper" };

  //  Act
  const actual = makeUser("Peter", "Piper");

  //  Assert

  expect(actual).toEqual(expected);
});
