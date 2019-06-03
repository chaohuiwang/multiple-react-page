let common = {
    FormatMoney: function(s, n) {//数字格式化 s - 需要格式化的数字 n - 小数点保留的位数
    	n = n > 0 && n <= 20 ? n : 2;
    	s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
    	let l = s.split(".")[0].split("").reverse(), r = s.split(".")[1];
    	let t = "";
    	for (let i = 0; i < l.length; i++) {
    		t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
    	}
    	return t.split("").reverse().join("") + "." + r;
    },
    md5seri: function(obj){//MD5加密参数序列号;
        let str = 'HLJFZZRSDDBBGZDDJYJY';
        for(let i in obj){
            str+= ';'+ i + ':' +obj[i];
        }
        return str;
    },
    mobileCheck: function (str){//手机号码规则验证
        let reg = /^1[1-9]\d{9}$/;
        return reg.test(str);
    },
    SMSCodeCheck: function (str){//短信验证码 规则验证 必须6位且不为空
        return /^[0-9]{4,6}$/.test(str);
    },
    checkPasswd: function (str){//检验登录密码的合法性 只能输入数字跟字母
        return /^[a-zA-Z0-9]+$/.test(str);
    },
    checkSecurCode: function (str){//检验安全码密码的合法性 只能输入数字且必须是6位
        return /^[0-9]{6}$/.test(str);
    },
    checkCarNumber: function (str){//检验车牌号的合法性
    	let reg = /^[\u4e00-\u9fa5]{1}[A-Z]{1}[A-Z_0-9]{5}$/;
    	if (reg.test(str)) return true;
    	return false;
    },
    checkIDCard: function (str){
        let reg = /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}[0-9Xx]$)/
        if (reg.test(str)) return true;
    	return false;
    },
    getQueryStringByName: function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        var context = "";
        if (r != null)
            context = r[2];
        reg = null;
        r = null;
        return context == null || context == "" || context == "undefined" ? "" : context;
    }
};
module.exports = common;
