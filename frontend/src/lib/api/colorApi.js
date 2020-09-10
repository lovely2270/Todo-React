import axios from "axios";

//서버와 연결
//기본 주소
const TODO_API_BASE_URL = "http://localhost:8080/color";

//해당 주소로 매핑된 서버에 요청하는 함수
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
