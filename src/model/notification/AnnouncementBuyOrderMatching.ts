import {TradexNotification} from 'tradex-common';

export default class AnnouncementBuyOrderMatching
  implements TradexNotification.ITemplateData {
  public acnt_no?: string;
  public sub_no?: string;
  public stk_cd?: string;
  public mth_qty?: string;
  public mth_pri?: string;
  public mth_time?: string;

  public getTemplate(): string {
    return 'lottehpt_announcement_buy_order_matching';
  }
}