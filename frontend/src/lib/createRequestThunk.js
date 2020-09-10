import { startLoading, finishLoading } from "../modules/loading";

export default function createRequestThunk(type, request) {
  //성공 및 실패 액션 타입을 정의
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  return (params) => async (dispatch) => {
    dispatch({ type }); //시작됨
    //loading 리덕스 모듈에서 만든 액션 함수
    dispatch(startLoading(type));
    try {
      const response = await request(params);
      dispatch({
        type: SUCCESS,
        //해당 타입의 요청의 결과를 payload에 담음
        payload: response.data,
      });
      //loading 리덕스 모듈에서 만든 액션 함수
      dispatch(finishLoading(type));
    } catch (e) {
      dispatch({
        type: FAILURE,
        payload: e,
        error: true,
      });
      //loading 리덕스 모듈에서 만든 액션 함수
      dispatch(startLoading(type));
      throw e;
    }
  };
}
