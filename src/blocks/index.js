'use strict';

var _GooglePay = require('./Payment/Gateway/GooglePay');
var _Payfort = require('./Payment/Gateway/Payfort');
var _Paypal = require('./Payment/Gateway/Paypal');
var _Wallet = require('./Payment/Gateway/Wallet');
var _PaymentMethod = require('./Payment/PaymentMethod');

exports.GooglePay = _GooglePay.default;
exports.Payfort = _Payfort.default;
exports.Paypal = _Paypal.default;
exports.Wallet = _Wallet.default;
exports.PaymentMethod = _PaymentMethod.default;