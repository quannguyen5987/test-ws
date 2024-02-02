import {TradexNotification} from 'tradex-common';

export default class SendMoney
  implements TradexNotification.ITemplateData {
  public acnt_no?: string;
  public sub_no?: string;
  public trd_amt?: string;
  public trd_tm?: string;
  public trd_dt?: string;
  public dpo?: string;

  public getTemplate(): string {
    return 'lottehpt_send_money';
  }
}