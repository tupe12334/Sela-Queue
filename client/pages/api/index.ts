import axios from "axios";
import { stringifyUrl } from "query-string";

export async function addName(name: string) {
  const url = stringifyUrl({
    url: `${process.env.NEXT_PUBLIC_SERVER_URL}/form/`,
    query: { name: name },
  });
  const data = (await axios.post(url)).data;
  return data;
}

export async function getQueue() {
  const data = (
    await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/queue/waiting`)
  ).data;
  return data;
}

export async function finish(number: number) {
  console.log(number);
  const data = (
    await axios.put(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/queue/finish?number=${number}`
    )
  ).data;
}
