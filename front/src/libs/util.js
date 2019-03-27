let util = {

};
util.title = function (title) {
    title = title ? title + ' - Home' : '重庆孟山信息科技有限公司';
    window.document.title = title;
};

export default util;
