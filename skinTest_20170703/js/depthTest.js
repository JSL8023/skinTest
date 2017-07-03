//全局变量
var index, question = "q" + getQueryString("question"),
	sum = [],
	sumGrade;
$.ajax({
	type: "get",
	url: "../json/cosmetic.json",
	async: false,
	success: function(e) {
		var data = "";
		for(var j in e) {
			if(j == question) {
				data = e[j];
			}
		}
		$(".depthTestAll").html(data.length);
		$(".depthTest-body").html("");
		for(var i in data) {
			var str = "<div class=\"depthTestC\"><div class=\"depthTestC-top\">";
			str += $.trim(data[i].question.split(".")[1]) + "</div>";
			str += "<div grade=\"1\" class=\"depthTestC-body\">" + "A. " + $.trim(data[i].A) + "</div>";
			str += "<div grade=\"2\" class=\"depthTestC-body\">" + "B. " + $.trim(data[i].B) + "</div>";
			str += "<div grade=\"3\" class=\"depthTestC-body\">" + "C. " + $.trim(data[i].C) + "</div>";
			str += "<div grade=\"4\" class=\"depthTestC-body\">" + "D. " + $.trim(data[i].D) + "</div>";
			if(data[i].E) {
				str += "<div grade=\"2.5\" class=\"depthTestC-body\">" + "E. " + $.trim(data[i].E) + "</div>";
			}
			str += "<div class=\"depthTestC-explain\">选项不变，点击原选项跳转至下一题</div></div>";
			$(".depthTest-body").append(str);
		}
		var length = $(".depthTestC").length - 1;
		$(".depthTestC").eq(0).show();
		choseTest(data.length);
		prev();

	}
});
//页面选择切换
function choseTest(length) {
	$(".depthTestC-body").off().on("click", function() {
		$(this).addClass("choseRes").siblings().removeClass("choseRes");
		index = $(this).parent().index() + 1;
		sum[index - 1] = $(this).attr("grade");
		setTimeout(function() {
			$(".depthTestC").eq(index).show().siblings().hide();
			if(index++ < length) {
				$(".presentTest").html(index++);
			}
			$(".prev").removeClass("vhide");
		}, 200);
		if(length == $(".presentTest").html()) {
			sumGrade = 0;
			for(var e in sum) {
				sumGrade += parseInt(sum[e]);
			}
			$(".hui,.overDepthTestBox").show();
			console.log(sum);
			console.log(sumGrade);
		}
	});
}
//上一题监控
function prev() {
	$(".prev").off().on("click", function() {
		var presentNum = parseInt($(".presentTest").html(), 10);
		if(presentNum == 2) {
			$(".prev").addClass("vhide");
			$(".depthTestC").eq(0).show().siblings().hide();
			$(".depthTestC-explain").eq(0).show();
			$(".presentTest").html(1);
		} else {
			$(".depthTestC").eq(presentNum - 2).show().siblings().hide();
			$(".depthTestC-explain").eq(presentNum - 2).show();
			$(".presentTest").html(presentNum - 1);
		}
	});
}
//退出
$(".quit").click(function() {
	location.href = "depth.html";
});
//测试结束
$(".overDepthTestB").click(function() {
	//	$(".hui,.overDepthTestBox").hide();
	location.href = "depth.html";
});