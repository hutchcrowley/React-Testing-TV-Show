import uuidv4 from 'uuid';

const id = uuidv4()

export const makeUser = (firstName, lastName) => {
  return {
    id: id,
    fullName: `${firstName} ${lastName}`
  };
};
