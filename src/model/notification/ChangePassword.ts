import {TradexNotification} from 'tradex-common';

export default class ChangePassword
  implements TradexNotification.ITemplateData {
  public flag?: string;

  public getTemplate(): string {
    return 'lottehpt_change_password';
  }
}