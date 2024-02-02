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
    const socket = new WebSocket("ws://localhost:8081");
    

    socket.onopen = () => {
        console.log("ket noi thanh cong")
        socket.send('gui toi server');
    }

    socket.onmessage = (event: any) => {
        console.log("Received message : ", event.data);
    };


    socket.onclose = (event: any): void => {
        console.log("WebSocket disconnected");
        // console.log("event is: ", event.code);
        const reconnectInterval: number = 1000 * 2;
        setTimeout(connectSocket, reconnectInterval);
    };

    socket.onerror = function (event: any): void {
        console.log("onerror")
        // console.log("onerror message : ", event);
    };
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

