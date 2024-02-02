import {TradexNotification} from 'tradex-common';

export default class DepositStock
  implements TradexNotification.ITemplateData {
  public acnt_no?: string;
  public sub_no?: string;
  public stk_qty?: string;
  public stk_cd?: string;

  public getTemplate(): string {
    return 'lottehpt_deposit_stock';
  }
}