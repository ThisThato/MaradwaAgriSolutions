import { TRANSACTION_LIST_REQUEST, TRANSACTION_LIST_SUCCESS, TRANSACTION_LIST_FAIL } from "../constants/transactionConstants";
import axios from "axios";

export const listTransactions = () => async (dispatch) => {
  try {
    dispatch({ type: TRANSACTION_LIST_REQUEST });
    const { data } = await axios.get("/api/transactions");

    dispatch({
      type: TRANSACTION_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({ type: TRANSACTION_LIST_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message });
  }
};
