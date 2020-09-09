import axios from "axios";

const TODO_API_BASE_URL = "http://localhost:8080/color";

export const getColor = () => axios.get(TODO_API_BASE_URL);

export const clickcolor = (colorId) =>
  axios.put(
    TODO_API_BASE_URL,
    { colorId: colorId },
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
