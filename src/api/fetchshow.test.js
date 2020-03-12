import { fetchShow } from "./fetchshow";

test("the data is returned from the API", () => {
  return fetchShow().then(res => {
      console.log(res.data)
    expect(res.data).toMatchSnapshot()
  });
});
