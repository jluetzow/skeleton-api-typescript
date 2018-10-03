"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const blockstart_nem1_sdk_1 = require("blockstart-nem1-sdk");
const express_1 = require("express");
const validators_1 = require("../middleware/validators");
const address_1 = require("../models/address");
const transfer_transaction_1 = require("../models/transfer-transaction");
const crypto_util_1 = require("../utilities/crypto-util");
exports.transaction = () => {
    const api = express_1.Router();
    api.get('/all/:address', (req, res) => __awaiter(this, void 0, void 0, function* () {
        try {
            const address = new address_1.MAddress(req.params.address);
            const txs = yield address.transactions(req.query.nextpageid);
            res.send(txs);
        }
        catch (err) {
            res.status(409).json({ message: err.message });
        }
    }));
    api.post('/decode/message', (req, res) => {
        try {
            const message = {
                payload: req.body[validators_1.KEY_MESSAGE_PAYLOAD]
            };
            res.send({ payload: blockstart_nem1_sdk_1.BPlainMessage.castToPlainMessage(message).plain() });
        }
        catch (err) {
            res.status(409).json({ message: err.message });
        }
    });
    api.post('/create', validators_1.vCreateTransferTransaction, (req, res) => __awaiter(this, void 0, void 0, function* () {
        try {
            res.send(transfer_transaction_1.createTransferTransaction(req.body[validators_1.KEY_ADDRESS], req.body[validators_1.KEY_MOSAIC], req.body[validators_1.KEY_TX_MESSAGE]));
        }
        catch (err) {
            res.status(409).json({ message: err.message });
        }
    }));
    api.post('/send', validators_1.vSignTransferTransaction, (req, res) => __awaiter(this, void 0, void 0, function* () {
        try {
            res.send(transfer_transaction_1.sendTransferTransaction(req.body[validators_1.KEY_WALLET], req.body[validators_1.KEY_TRANSFER_TRANSACTION], crypto_util_1.decrypt(req.body[validators_1.KEY_PASSWORD])));
        }
        catch (err) {
            res.status(409).json({ message: err.message });
        }
    }));
    api.post('/filtered/byMosaicId', validators_1.vFilterTransaction, (req, res) => __awaiter(this, void 0, void 0, function* () {
        try {
            res.send(yield transfer_transaction_1.findTransactions(req.body[validators_1.KEY_ADDRESS], req.body[validators_1.KEY_MOSAIC_ID], req.body[validators_1.KEY_NEXT_PAGE_ID]));
        }
        catch (err) {
            res.status(409).json({ message: err.message });
        }
    }));
    return api;
};
//# sourceMappingURL=transaction.js.map