//公共js 共用函数写在此处
function time(time) {
	/*时间戳转换  (毫秒) 20170626*/
	var date = new Date(time);
	Y = date.getFullYear();
	M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
	D = date.getDate();
	h = date.getHours();
	m = date.getMinutes();
	s = date.getSeconds();

	var daTe = new Date();
	Yl = daTe.getFullYear();
	Ml = (daTe.getMonth() + 1 < 10 ? '0' + (daTe.getMonth() + 1) : daTe.getMonth() + 1);
	Dl = daTe.getDate();
	hl = daTe.getHours();
	ml = daTe.getMinutes();
	sl = daTe.getSeconds();
	if (Y==Yl&&Ml==M&&(Dl-D)<=3) {
		if ((Dl-D)==0) {
			if ((hl-h)<1) {
				if((ml-m)<=1){
					return "刚刚";
				}else{
					return (ml-m)+"分钟之前";
				}
			}else if((hl-h)==1){
				return "1小时以内";
			} else{
				return (hl-h)+"小时前";
			}
		} else{
			return (Dl-D)+"天前";
		}
	}else{
		return M +"-"+ D;
	}
};

function getQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	var r = window.location.search.substr(1).match(reg);
	if(r != null) return unescape(r[2]);
	return null;
};

function timeM(t) {

	var date = new Date(t);
	Y = date.getFullYear() + '-';
	M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
	D = date.getDate() + ' ';
	h = date.getHours() + ':';
	m = date.getMinutes() + ':';
	s = date.getSeconds();
	return(Y + M + D + h + m)

};