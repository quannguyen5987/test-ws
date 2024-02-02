import {TradexNotification} from 'tradex-common';

export default class ReceiveStockTransfer
  implements TradexNotification.ITemplateData {
  public acnt_no?: string;
  public sub_no?: string;
  public stk_cd?: string;
  public stk_qty?: string;

  public getTemplate(): string {
    return 'lottehpt_receive_stock_transfer';
  }
}