/*
 * template-jQuery
 * 20170621 update
 * 根据HTML模板及数据  生成html代码
 * 模板：
	<TEXTAREA id="yourTemplateName" style="display: none;">
		<div class="containerDivName">
			<img src="${src}" style='display: ${showpic}'/>
			<span>${title}</span>
		</div>
	</textarea>
 * 
 * 数据： data = {src: 'srcAddress', showpic:'block' ,title:"titleName"} 
 * 
 * 使用：
 * 依次加入到尾部
 * makeNodeTo("#yourTemplateName", data, ".containerDivName");
 * 
 * 依次加入到头部
 * makeToNode("#yourTemplateName", data, ".containerDivName");
 */
var makeNode = function(tplSel, jsonData) {
	//TODO   html模板  20170621 去空格
	var html = $(tplSel).text();
	html = applyData(html, jsonData);
	var htmlVal = $.trim(html); //去空格
	return $(htmlVal);
};
var makeNodeTo = function(tplSel, jsonData, applySel) {
	$(applySel).append(makeNode(tplSel, jsonData));
};
//20170509 新增  反向模板
var makeToNode = function(tplSel, jsonData, applySel) {
	$(applySel).prepend(makeNode(tplSel, jsonData));
};
var applyData = function(tplTxt, data) { /*2.0 可支持多级jason数据*/
	if(typeof(Map) == 'undefined') {
		return applyData10(tplTxt, data);
	}
	//从模板拿出key，用于后边M.key替换
	tplTxt = tplTxt.replace(/\$\{(.+?)\}/g, "\${data\.$1\}");
	var tmpl = "`" + tplTxt + "`";
	return eval(tmpl);
	//执行转义字符‘ 内函数‘  	
};
var applyData10 = function(tplTxt, data) { /*1.0未完善仅支持一级jason数据*/
	for(var key in data) {
		//	key=="key" !=num
		var value = data[key];
		var keyname = "${" + key + "}";
		tplTxt = tplTxt.replace(keyname, value);

	}
	return tplTxt;
};