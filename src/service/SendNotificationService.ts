import {TradexNotification} from 'tradex-common';
// import * as uuid from 'uuid';
import ChangePassword from "../model/notification/ChangePassword";
import {ChangePasswordRequest} from "../model/request/ChangePasswordRequest";
import {Constants} from "../Constants";
import ReceiveStockTransfer from "../model/notification/ReceiveStockTransfer";
import {ReceiveStockTransferRequest} from "../model/request/ReceiveStockTransferRequest";
import {DepositStockRequest} from "../model/request/DepositStockRequest";
import DepositStock from "../model/notification/DepositStock";
import AnnouncementBuyOrderMatching from "../model/notification/AnnouncementBuyOrderMatching";
import {AnnouncementBuyOrderMatchingRequest} from "../model/request/AnnouncementBuyOrderMatchingRequest";
import {AnnouncementSellOrderMatchingRequest} from "../model/request/AnnouncementSellOrderMatchingRequest";
import AnnouncementSellOrderMatching from "../model/notification/AnnouncementSellOrderMatching";
import {RegisterBuyIssueStockRequest} from "../model/request/RegisterBuyIssueStockRequest";
import RegisterBuyIssueStock from "../model/notification/RegisterBuyIssueStock";
import {CancelBuyIssueStockRequest} from "../model/request/CancelBuyIssueStockRequest";
import CancelBuyIssueStock from "../model/notification/CancelBuyIssueStock";
import {SendMoneyRequest} from "../model/request/SendMoneyRequest";
import SendMoney from "../model/notification/SendMoney";
import {WithdrawMoneyRequest} from "../model/request/WithdrawMoneyRequest";
import WithdrawMoney from "../model/notification/WithdrawMoney";


let sendNotification: TradexNotification.SendNotification = TradexNotification.getInstance();

export function getSendNotification() {
    if (sendNotification == null) {
        console.log('gia tr', sendNotification)
        sendNotification = TradexNotification.getInstance();
        console.log('gia tr', sendNotification)
    }
    return sendNotification;
}

export function notifyOneSignal(
    data: TradexNotification.ITemplateData,
    acnt_no: string,
    extraFilter?: TradexNotification.IFilter []
) {
    const conf: TradexNotification.OneSignalConfiguration = new TradexNotification.OneSignalConfiguration();
    conf.domain = Constants.DOMAIN_ONE_SIGNAL;

    conf.filters = [];
    if (extraFilter != null) {
        conf.filters = conf.filters.concat(extraFilter);
    }
    const filter: TradexNotification.IFilter = {
        field: 'tag',
        key: 'accountNumber',
        relation: '=',
        value: `${acnt_no}`,
    };
    conf.filters.push(filter);
    // console.log('conf', conf);
    // console.log('data', data);
    try {
        getSendNotification().sendPushNotification('33333', conf, data);
    }catch (e) {
        console.log(e)
    }
}

export function sendOneSignalChangePassword(request: ChangePasswordRequest): void {
    const changePassword: ChangePassword = new ChangePassword();
    changePassword.flag = request.flag;
    notifyOneSignal(changePassword, request.acnt_no);
}

export function sendOneSignalReceiveStockTransfer(request: ReceiveStockTransferRequest): void {

    console.log("data eventBody: ", request);

    console.log("datakkk jjj: ", request["stk_cd KL stk_qty, stk_cd2 KL stk_qty2"]);
    const receiveStockTransfer: ReceiveStockTransfer = new ReceiveStockTransfer();
    receiveStockTransfer.acnt_no = request.acnt_no;
    // receiveStockTransfer.sub_no = request.sub_no;
    // receiveStockTransfer.stk_cd = request.stk_cd;
    // receiveStockTransfer.stk_qty = request.stk_qty;
    notifyOneSignal(receiveStockTransfer, request.acnt_no);
}

export function sendOneSignalDepositStock(request: DepositStockRequest): void {
    const depositStock: DepositStock = new DepositStock();
    depositStock.acnt_no = request.acnt_no;
    depositStock.sub_no = request.sub_no;
    depositStock.stk_cd = request.stk_cd;
    depositStock.stk_qty = request.stk_qty;
    notifyOneSignal(depositStock, request.acnt_no);
}

export function sendOneSignalAnnouncementBuyOrderMatching(request: AnnouncementBuyOrderMatchingRequest): void {
    const buyOrderMatching: AnnouncementBuyOrderMatching = new AnnouncementBuyOrderMatching();
    buyOrderMatching.acnt_no = request.acnt_no;
    buyOrderMatching.sub_no = request.sub_no;
    buyOrderMatching.stk_cd = request.stk_cd;
    buyOrderMatching.mth_qty = request.mth_qty;
    buyOrderMatching.mth_pri = request.mth_pri;
    buyOrderMatching.mth_time = request.mth_time;
    notifyOneSignal(buyOrderMatching, request.acnt_no);
}

export function sendOneSignalAnnouncementSellOrderMatching(request: AnnouncementSellOrderMatchingRequest): void {
    const sellOrderMatching: AnnouncementSellOrderMatching = new AnnouncementSellOrderMatching();
    sellOrderMatching.acnt_no = request.acnt_no;
    sellOrderMatching.sub_no = request.sub_no;
    sellOrderMatching.stk_cd = request.stk_cd;
    sellOrderMatching.mth_qty = request.mth_qty;
    sellOrderMatching.mth_pri = request.mth_pri;
    sellOrderMatching.mth_time = request.mth_time;
    notifyOneSignal(sellOrderMatching, request.acnt_no);
}

export function sendOneSignalRegisterBuyIssueStock(request: RegisterBuyIssueStockRequest): void {
    const registerBuyIssueStock: RegisterBuyIssueStock = new RegisterBuyIssueStock();
    registerBuyIssueStock.acnt_no = request.acnt_no;
    registerBuyIssueStock.sub_no = request.sub_no;
    registerBuyIssueStock.trd_amt = request.trd_amt;
    registerBuyIssueStock.trd_qty = request.trd_qty;
    registerBuyIssueStock.stk_cd = request.stk_cd;
    registerBuyIssueStock.dpo = request.dpo;
    notifyOneSignal(registerBuyIssueStock, request.acnt_no);
}

export function sendOneSignalCancelBuyIssueStock(request: CancelBuyIssueStockRequest): void {
    const cancelBuyIssueStock: CancelBuyIssueStock = new CancelBuyIssueStock();
    cancelBuyIssueStock.acnt_no = request.acnt_no;
    cancelBuyIssueStock.sub_no = request.sub_no;
    cancelBuyIssueStock.trd_amt = request.trd_amt;
    cancelBuyIssueStock.trd_qty = request.trd_qty;
    cancelBuyIssueStock.stk_cd = request.stk_cd;
    cancelBuyIssueStock.dpo = request.dpo;
    notifyOneSignal(cancelBuyIssueStock, request.acnt_no);
}

export function sendOneSignalSendMoney(request: SendMoneyRequest): void {
    const sendMoney: SendMoney = new SendMoney();
    sendMoney.acnt_no = request.acnt_no;
    sendMoney.sub_no = request.sub_no;
    sendMoney.trd_amt = request.trd_amt;
    sendMoney.trd_tm = request.trd_tm;
    sendMoney.trd_dt = request.trd_dt;
    sendMoney.dpo = request.dpo;
    notifyOneSignal(sendMoney, request.acnt_no);
}

export function sendOneSignalWithdrawMoney(request: WithdrawMoneyRequest): void {
    const withdrawMoney: WithdrawMoney = new WithdrawMoney();
    withdrawMoney.acnt_no = request.acnt_no;
    withdrawMoney.sub_no = request.sub_no;
    withdrawMoney.trd_amt = request.trd_amt;
    withdrawMoney.trd_tm = request.trd_tm;
    withdrawMoney.trd_dt = request.trd_dt;
    withdrawMoney.dpo = request.dpo;
    notifyOneSignal(withdrawMoney, request.acnt_no);
}






