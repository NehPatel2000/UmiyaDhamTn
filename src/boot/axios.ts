import axios from "axios";
import camelcaseKeys from "camelcase-keys";

const api = axios.create({
  baseURL: "/api",
  transformResponse: [
    (data, headers) => {
      if (
        data &&
        headers &&
        headers["content-type"].includes("application/json")
      ) {
        return camelcaseKeys(JSON.parse(data), { deep: true });
      }
    },
  ],
});

export { api };
