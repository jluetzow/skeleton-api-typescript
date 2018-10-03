"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const check_1 = require("express-validator/check");
exports.KEY_ADDRESS = 'address';
exports.KEY_WALLET_NAME = 'name';
exports.KEY_PRIVATE_KEY = 'privateKey';
exports.KEY_PASSWORD = 'password';
exports.KEY_QRSTRING = 'qrstring';
exports.KEY_NETWORK = 'network';
exports.KEY_CREATION_DATE = 'creationDate';
exports.KEY_ENCRYPTED_PRIVATE_KEY = 'encryptedPrivateKey';
exports.KEY_TX_MESSAGE = 'message';
exports.KEY_MESSAGE_PAYLOAD = 'payload';
exports.KEY_WALLET = 'wallet';
exports.KEY_MOSAIC = 'mosaic';
exports.KEY_MOSAIC_ID = 'mosaicId';
exports.KEY_NEXT_PAGE_ID = 'nextPageId';
exports.KEY_TRANSFER_TRANSACTION = 'transferTransaction';
exports.KEY_QROBJECT_DATA = 'data';
exports.KEY_PWD_LENGTH = 8;
exports.KEY_ADDRESS_LENGTH = 40;
exports.KEY_PRIVATE_LENGTH = 64;
exports.errorHandler = (req, res, next) => {
    const errors = check_1.validationResult(req);
    if (!errors.isEmpty()) {
        res.status(409).json({ message: errors.array()[0].msg });
    }
    else {
        next();
    }
};
exports.vAddress = [
    check_1.check(exports.KEY_ADDRESS)
        .exists()
        .trim()
        .isLength({ min: exports.KEY_ADDRESS_LENGTH }),
    exports.errorHandler
];
exports.vWallet = [
    check_1.check(exports.KEY_ADDRESS)
        .exists()
        .trim()
        .isLength({ min: exports.KEY_ADDRESS_LENGTH }),
    check_1.check(exports.KEY_NETWORK)
        .exists()
        .trim(),
    check_1.check(exports.KEY_CREATION_DATE)
        .exists()
        .trim(),
    check_1.check(exports.KEY_ENCRYPTED_PRIVATE_KEY)
        .exists()
        .trim(),
    exports.errorHandler
];
exports.vExportWallet = [
    check_1.check(exports.KEY_ADDRESS)
        .exists()
        .trim(),
    check_1.check(exports.KEY_NETWORK)
        .exists()
        .trim(),
    check_1.check(exports.KEY_CREATION_DATE)
        .exists()
        .trim(),
    check_1.check(exports.KEY_ENCRYPTED_PRIVATE_KEY)
        .exists()
        .trim(),
    exports.errorHandler
];
exports.vFilterTransaction = [
    check_1.check(exports.KEY_ADDRESS)
        .exists()
        .trim()
        .isLength({ min: exports.KEY_ADDRESS_LENGTH }),
    check_1.check(exports.KEY_MOSAIC_ID)
        .exists(),
    exports.errorHandler
];
exports.vCreateTransferTransaction = [
    check_1.check(exports.KEY_ADDRESS)
        .exists()
        .trim()
        .isLength({ min: exports.KEY_ADDRESS_LENGTH }),
    check_1.check(exports.KEY_MOSAIC)
        .exists(),
    check_1.check(exports.KEY_TX_MESSAGE)
        .exists()
        .trim(),
    exports.errorHandler
];
exports.vDecodeMessage = [
    check_1.check(exports.KEY_MESSAGE_PAYLOAD)
        .exists(),
    exports.errorHandler
];
exports.vSignTransferTransaction = [
    check_1.check(exports.KEY_WALLET)
        .exists(),
    check_1.check(exports.KEY_TRANSFER_TRANSACTION)
        .exists(),
    check_1.check(exports.KEY_PASSWORD)
        .exists()
        .trim()
        .isLength({ min: exports.KEY_PWD_LENGTH }),
    exports.errorHandler
];
exports.vEncryptedPrivateKey = [
    check_1.check(exports.KEY_WALLET)
        .exists(),
    check_1.check(exports.KEY_PASSWORD)
        .exists()
        .trim()
        .isLength({ min: exports.KEY_PWD_LENGTH }),
    exports.errorHandler
];
exports.vQRString = [
    check_1.check(exports.KEY_QRSTRING)
        .exists()
        .trim(),
    exports.errorHandler
];
exports.vQRObject = [
    check_1.check(exports.KEY_PASSWORD)
        .exists()
        .trim(),
    check_1.check(exports.KEY_QROBJECT_DATA)
        .exists(),
    exports.errorHandler
];
exports.vWalletName = [
    check_1.check(exports.KEY_WALLET_NAME)
        .exists()
        .trim()
        .isAlphanumeric()
        .isLength({ min: 1 }),
    exports.errorHandler
];
exports.vPassword = [
    check_1.check(exports.KEY_PASSWORD)
        .trim()
        .isLength({ min: exports.KEY_PWD_LENGTH }),
    exports.errorHandler
];
//# sourceMappingURL=validators.js.map