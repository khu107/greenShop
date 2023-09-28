import axios from "axios";

interface AxiosProp {
  url: string;
  method?: "POST" | "PUT" | "PATCH" | "DELETE";
  body?: object;
  headers?: object;
}

export const useAxios = () => {
  const request = async (props: AxiosProp) => {
    const { url, method = "GET", body, headers } = props;
    return await axios({
      url: `${process.env.REACT_APP_MAIN_URL}${url}`,
      method,
      data: body,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": true,
        ...headers,
      },
      params: {
        access_token: "64ed92109b7cbfbb33a03893",
      },
    });
  };
  return request;
};
