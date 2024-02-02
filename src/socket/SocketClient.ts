import {
    sendOneSignalAnnouncementBuyOrderMatching,
    sendOneSignalAnnouncementSellOrderMatching,
    sendOneSignalCancelBuyIssueStock,
    sendOneSignalChangePassword,
    sendOneSignalDepositStock,
    sendOneSignalReceiveStockTransfer,
    sendOneSignalRegisterBuyIssueStock, sendOneSignalSendMoney, sendOneSignalWithdrawMoney
} from "../service/SendNotificationService";
import {LOTTEHPTWsMessage} from "../model/request/LOTTEHPTWsMessage";
import {ChangePasswordRequest} from "../model/request/ChangePasswordRequest";
import {ReceiveStockTransferRequest} from "../model/request/ReceiveStockTransferRequest";
import {DepositStockRequest} from "../model/request/DepositStockRequest";
import {AnnouncementBuyOrderMatchingRequest} from "../model/request/AnnouncementBuyOrderMatchingRequest";
import {AnnouncementSellOrderMatchingRequest} from "../model/request/AnnouncementSellOrderMatchingRequest";
import {RegisterBuyIssueStockRequest} from "../model/request/RegisterBuyIssueStockRequest";
import {CancelBuyIssueStockRequest} from "../model/request/CancelBuyIssueStockRequest";
import {SendMoneyRequest} from "../model/request/SendMoneyRequest";
import {WithdrawMoneyRequest} from "../model/request/WithdrawMoneyRequest";
import conf from "../conf";

const WebSocket = require('ws');

export async function connectSocket(): Promise<void> {
    const socket = new WebSocket("ws://172.33.30.386:9900");
    // const socket = new WebSocket("ws://172.31.224.7:30598");
    // const socket = new WebSocket("wss://tnhsvpro.nhsv.vn/lotte-ws");
    // const socket = new WebSocket(conf.lotte.websocketAddress);
    

    socket.onopen = () => {
        console.log("ket noi thanh cong")
        socket.send('sub/bos.evt.ord.sts.*/');
        socket.send('sub/bos.evt.acc.bal.*/');
      
    }

    socket.onmessage = (event: any) => {
        console.log("Received message : ", event.data);
        setInterval(() => {
            // ws.send('gui tu server');
            socket.close();
        }, 3000); // 1 giây
        
        

        // const textData : string = event.data;

        // const textData: string = '{"@class":"com.lhpt.gwapi.bosevent.model.BOSEventObj","topicName":"bos.evt.acc.bal","service":"bos.evt.acc.bal.F01104","eventCode":"F01104","eventBody":"{\\"date\\":\\"20231206\\", \\"event_seqno\\":\\"9069\\", \\"event_code\\":\\"F01104\\", \\"acnt_no\\":\\"039C120996\\", \\"flag\\":\\"!\\"}"}';
        const textData: string = '{"topicName":"bos.evt.acc.bal","service":"bos.evt.acc.bal.F02105","eventCode":"F02105","eventBody":"{\\"date\\":\\"20231206\\", \\"event_seqno\\":\\"9069\\", \\"event_code\\":\\"F01104\\", \\"acnt_no\\":\\"039C120996\\", \\"sub_no\\":\\"00\\", \\"stk_cd KL stk_qty, stk_cd2 KL stk_qty2\\":\\"AAA KL 1,000\\", \\"flag\\":\\"!\\"}"}';


        // const textData: string = '{"@class":"com.lhpt.gwapi.bosevent.model.BOSEventObj","topicName":"bos.evt.acc.bal","service":"bos.evt.acc.bal.F02115","eventCode":"F02115","eventBody":"{\\"date\\":\\"20231206\\", \\"event_seqno\\":\\"9065\\", \\"event_code\\":\\"F02115\\", \\"acnt_no\\":\\"039C071122\\", \\"acnt_no\\":\\"039C071122\\", \\"sub_no\\":\\"00\\", \\"stk_qty\\":\\"100\\", \\"stk_cd\\":\\"AAA\\"}"}';

        // const textData: string =  '{"@class":"com.lhpt.gwapi.bosevent.model.BOSEventObj","topicName":"bos.evt.ord.sts","service":"bos.evt.ord.sts.F03101","eventCode":"F03101","eventBody":"{\\"date\\":\\"20231205\\", \\"event_seqno\\":\\"9021\\", \\"event_code\\":\\"F03101\\", \\"acnt_no\\":\\"039C290623\\", \\"acnt_no\\":\\"039C290623\\", \\"sub_no\\":\\"00\\", \\"stk_cd\\":\\"CEO\\", \\"mth_qty\\":\\"100\\", \\"mth_pri\\":\\"20,700\\", \\"mth_time\\":\\"20:06:25\\"}"}';
       // const textData: string = '{"@class":"com.lhpt.gwapi.bosevent.model.BOSEventObj","topicName":"bos.evt.ord.sts","service":"bos.evt.ord.sts.F03102","eventCode":"F03102","eventBody":"{\\"date\\":\\"20231207\\", \\"event_seqno\\":\\"9084\\", \\"event_code\\":\\"F03102\\", \\"acnt_no\\":\\"039C100737\\", \\"acnt_no\\":\\"039C100737\\", \\"sub_no\\":\\"00\\", \\"stk_cd\\":\\"BID\\", \\"mth_qty\\":\\"100\\", \\"mth_pri\\":\\"46,700\\", \\"mth_time\\":\\"09:06:32\\"}"}'

       // const textData: string = '{"@class":"com.lhpt.gwapi.bosevent.model.BOSEventObj","topicName":"bos.evt.ord.sts","service":"bos.evt.ord.sts.F03108","eventCode":"F03108","eventBody":"{\\"date\\":\\"20231207\\", \\"event_seqno\\":\\"9086\\", \\"event_code\\":\\"F03108\\", \\"acnt_no\\":\\"039C200400\\", \\"acnt_no\\":\\"039C200400\\", \\"sub_no\\":\\"01\\", \\"trd_amt\\":\\"15,000,000\\", \\"trd_qty\\":\\"21,200\\", \\"stk_cd\\":\\"HPG\\", \\"dpo\\":\\"1,032,095,396\\"}"}'
       //const textData: string = '{"@class":"com.lhpt.gwapi.bosevent.model.BOSEventObj","topicName":"bos.evt.ord.sts","service":"bos.evt.ord.sts.F03110","eventCode":"F03110","eventBody":"{\\"date\\":\\"20231207\\", \\"event_seqno\\":\\"9087\\", \\"event_code\\":\\"F03110\\", \\"acnt_no\\":\\"039C200400\\", \\"acnt_no\\":\\"039C200400\\", \\"sub_no\\":\\"01\\", \\"trd_amt\\":\\"15,000,000\\", \\"trd_qty\\":\\"1,000\\", \\"stk_cd\\":\\"HPG\\", \\"dpo\\":\\"1,047,095,396\\"}"}'

       //const textData: string =  '{"@class":"com.lhpt.gwapi.bosevent.model.BOSEventObj","topicName":"bos.evt.acc.bal","service":"bos.evt.acc.bal.F07101","eventCode":"F07101","eventBody":"{\\"date\\":\\"20231205\\", \\"event_seqno\\":\\"9018\\", \\"event_code\\":\\"F07101\\", \\"acnt_no\\":\\"039C100723\\", \\"acnt_no\\":\\"039C100723\\", \\"sub_no\\":\\"02\\", \\"trd_amt\\":\\"10,000\\", \\"trd_tm\\":\\"12:50:37\\", \\"trd_dt\\":\\"05/12/2023\\", \\"dpo\\":\\"10,000\\"}"}'

       // const textData = '{"@class":"com.lhpt.gwapi.bosevent.model.BOSEventObj","topicName":"bos.evt.acc.bal","service":"bos.evt.acc.bal.F07102","eventCode":"F07102","eventBody":"{\\"date\\":\\"20231205\\", \\"event_seqno\\":\\"9017\\", \\"event_code\\":\\"F07102\\", \\"acnt_no\\":\\"039C100723\\", \\"acnt_no\\":\\"039C100723\\", \\"sub_no\\":\\"00\\", \\"trd_amt\\":\\"-10,000\\", \\"trd_tm\\":\\"12:50:37\\", \\"trd_dt\\":\\"05/12/2023\\", \\"dpo\\":\\"10,000,090,000\\"}"}'
        // console.log("textData: ", textData);

        try {
            const message: LOTTEHPTWsMessage = JSON.parse(textData);
            // console.log("message: ", message);
           handleMessage(message);

            // socket.close();
        } catch (e) {
            console.log('loi', e); // error in the above string (in this case, yes)!
        }
    };


    socket.onclose = (event: any): void => {
        console.log("WebSocket disconnected");
        console.log("event is: ", event.code);
        const reconnectInterval: number = 1000 * 6;
        setTimeout(connectSocket, reconnectInterval);
    };

    socket.onerror = function (event: any): void {
        console.log("onerror message")
        console.log("onerror message : ", event);
    };
    socket.on('error', console.error);
}

async function handleMessage(message: LOTTEHPTWsMessage): Promise<void> {
    if (message && message.eventCode) {
        switch (message.eventCode) {
            case 'F01104':
                const changePasswordRequest: ChangePasswordRequest = JSON.parse(message.eventBody);
                sendOneSignalChangePassword(changePasswordRequest);
                // console.log("data eventBody: ", changePasswordRequest);
                break;
            case 'F02105':
            console.log("data eventBody: ", message);
                // sendOneSignalReceiveStockTransfer(JSON.parse(message.eventBody));
        
                break;
            case 'F02115':
                const depositStockRequest : DepositStockRequest = JSON.parse(message.eventBody);
                sendOneSignalDepositStock(depositStockRequest);
                console.log("data eventBody: ", depositStockRequest);
                break;
            case 'F03101':
                const announcementBuyOrderMatchingRequest : AnnouncementBuyOrderMatchingRequest = JSON.parse(message.eventBody);
                sendOneSignalAnnouncementBuyOrderMatching(announcementBuyOrderMatchingRequest);
                console.log("data eventBody: ", announcementBuyOrderMatchingRequest);
                break;
            case 'F03102':
                const announcementSellOrderMatchingRequest : AnnouncementSellOrderMatchingRequest = JSON.parse(message.eventBody);
                sendOneSignalAnnouncementSellOrderMatching(announcementSellOrderMatchingRequest);
                console.log("data eventBody: ", announcementSellOrderMatchingRequest);
                break;
            case 'F03108':
                const registerBuyIssueStockRequest : RegisterBuyIssueStockRequest = JSON.parse(message.eventBody);
                sendOneSignalRegisterBuyIssueStock(registerBuyIssueStockRequest);
                console.log("data eventBody: ", registerBuyIssueStockRequest);
                break;
            case 'F03110':
                const cancelBuyIssueStockRequest : CancelBuyIssueStockRequest = JSON.parse(message.eventBody);
                sendOneSignalCancelBuyIssueStock(cancelBuyIssueStockRequest);
                console.log("data eventBody: ", cancelBuyIssueStockRequest);
                break;
            case 'F07101':
                const sendMoneyRequest : SendMoneyRequest = JSON.parse(message.eventBody);
                sendOneSignalSendMoney(sendMoneyRequest);
                console.log("data eventBody: ", sendMoneyRequest);
                break;
            case 'F07102':
                const withdrawMoneyRequest : WithdrawMoneyRequest = JSON.parse(message.eventBody);
                sendOneSignalWithdrawMoney(withdrawMoneyRequest);
                console.log("data eventBody: ", withdrawMoneyRequest);
                break;
        }
    }
}

