import {TradexNotification} from 'tradex-common';

export default class AnnouncementSellOrderMatching
  implements TradexNotification.ITemplateData {
  public acnt_no?: string;
  public sub_no?: string;
  public stk_cd?: string;
  public mth_qty?: string;
  public mth_pri?: string;
  public mth_time?: string;

  public getTemplate(): string {
    return 'lottehpt_announcement_sell_order_matching';
  }
}