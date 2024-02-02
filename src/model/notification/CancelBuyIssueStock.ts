import {TradexNotification} from 'tradex-common';

export default class CancelBuyIssueStock
  implements TradexNotification.ITemplateData {
  public acnt_no?: string;
  public sub_no?: string;
  public trd_amt?: string;
  public trd_qty?: string;
  public stk_cd?: string;
  public dpo?: string;

  public getTemplate(): string {
    return 'lottehpt_cancel_buy_issue_stock';
  }
}