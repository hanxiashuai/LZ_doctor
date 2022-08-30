(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["page_userCenter/common/vendor"],{

/***/ 315:
/*!********************************************************!*\
  !*** D:/HANSHUAI UNIAPP/LZ_doctor/api/user_address.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.getUserAddress = getUserAddress;exports.getAnAddress = getAnAddress;exports.delUserAddress = delUserAddress;exports.editUserAddress = editUserAddress;exports.addUserAddress = addUserAddress;exports.getProvinces = getProvinces;exports.getCities = getCities;exports.getAreas = getAreas;var _request = __webpack_require__(/*! @/utils/request.js */ 138);



//获取用户地址
function getUserAddress(data) {
  return (0, _request.request)({
    url: '/my/useraddress',
    method: 'GET',
    data: {
      id: data } });


}

//获取一条用户地址
function getAnAddress(data) {
  return (0, _request.request)({
    url: '/my/anaddress',
    method: 'GET',
    data: {
      id: data } });


}

//删除用户地址
function delUserAddress(data) {
  return (0, _request.request)({
    url: '/my/deluseraddress',
    method: 'DELETE',
    data: {
      id: data } });


}

//编辑用户地址
function editUserAddress(data) {
  return (0, _request.request)({
    url: '/my/edituseraddress',
    method: 'POST',
    data: data });

}

//新增用户地址
function addUserAddress(data) {
  return (0, _request.request)({
    url: '/my/adduseraddress',
    method: 'POST',
    data: data });

}



//获取省名称
function getProvinces() {
  return (0, _request.request)({
    url: '/my/getprovinces',
    method: 'GET' });

}

//获取市名称
function getCities(data) {
  return (0, _request.request)({
    url: '/my/getcities',
    method: 'GET',
    data: {
      provinceid: data } });


}

//获取县名称
function getAreas(data) {
  return (0, _request.request)({
    url: '/my/getareas',
    method: 'GET',
    data: {
      cityid: data } });


}

/***/ })

}]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/page_userCenter/common/vendor.js.map