import {TradexNotification} from 'tradex-common';

export default class RegisterBuyIssueStock
  implements TradexNotification.ITemplateData {
  public acnt_no?: string;
  public sub_no?: string;
  public trd_amt?: string;
  public trd_qty?: string;
  public stk_cd?: string;
  public dpo?: string;

  public getTemplate(): string {
    return 'lottehpt_register_buy_issue_stock';
  }
}