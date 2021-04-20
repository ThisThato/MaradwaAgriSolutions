import { TRANSACTION_LIST_REQUEST, TRANSACTION_LIST_SUCCESS, TRANSACTION_LIST_FAIL } from "../constants/transactionConstants";

export const transactionListReducer = (state = { transactions: [] }, action) => {
  switch (action.type) {
    case TRANSACTION_LIST_REQUEST:
      return { loading: true, transactions: [] };
    case TRANSACTION_LIST_SUCCESS:
      return { loading: false, transactions: action.payload };
    case TRANSACTION_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return { state };
  }
};
