export interface ReceiveStockTransferRequest {
  date: string;
  event_seqno: string;
  event_code: string;
  acnt_no: string;
  "stk_cd KL stk_qty, stk_cd2 KL stk_qty2": string;
}


