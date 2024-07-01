"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sleep = exports.formatDateToDDMMYYYY = exports.today = exports.dateAfterDays = void 0;
/**
 * return date after certain number of days in format YYYY-mm-dd
 * @param days
 */
var dateAfterDays = function (days) {
    if (days === void 0) { days = 0; }
    var nextDate = new Date();
    if (days != 0)
        nextDate.setDate(nextDate.getDate() + days);
    return nextDate.toISOString().split("T")[0];
};
exports.dateAfterDays = dateAfterDays;
/**
 * return today in format YYYY-mm-dd
 */
var today = function () {
    return new Date().toISOString().split("T")[0];
};
exports.today = today;
var formatDateToDDMMYYYY = function (date) {
    if (typeof date == 'string')
        date = new Date(date);
    var day = String(date.getDate()).padStart(2, '0');
    var month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    var year = date.getFullYear();
    return "".concat(day, ".").concat(month, ".").concat(year);
};
exports.formatDateToDDMMYYYY = formatDateToDDMMYYYY;
var sleep = function (ms) { return new Promise(function (r) { return setTimeout(r, ms); }); };
exports.sleep = sleep;
