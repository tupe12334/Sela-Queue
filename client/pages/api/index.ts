import axios from "axios";
import { stringifyUrl } from "query-string";

export async function addName(name: string) {
  try {
    const url = stringifyUrl({
      url: `${process.env.NEXT_PUBLIC_SERVER_URL}/form/`,
      query: { name: name },
    });
    const data = (await axios.post(url)).data;
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getQueue() {
  try {
    const data = (
      await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/queue/waiting`)
    ).data;
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function finish(number: number) {
  try {
    const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/queue/finish?number=${number}`;
    const data = (await axios.put(url)).data;
    return true;
  } catch (error) {
    return false;
  }
}
