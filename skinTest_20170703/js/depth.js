var num = 1,
	grade = 0;
//$(".hui").show();
$(".depthBox").on("click", function() {
	num = $(this).index() + 1;
	if($(".depthBoxO").eq(num - 1).hasClass("hide")) {
		$(".depthTestC").eq(num - 1).show().siblings().hide();
		$(".depthTestC-body").removeClass("choseRes");
		$(".hui").show();
		$(".quizChose").toggleClass("animateHeight");
	}
});
$(".hui").on("click", miss);
$(".quizChoseTop").on("click", function() {
	location.href = "depthTest.html?question=" + num;
});
$(".depthTestC-body").on("click", function() {
	//	给力哥提交数据
	var _this = $(this),
		str = $.trim(_this.html());
	grade = _this.attr("grade");
	_this.addClass("choseRes");
	setTimeout(function() {
		$(".depthBoxO").eq(num - 1).html(str).removeClass("hide").addClass("overAllDepth");
		miss();
	}, 200);
});

function miss() {
	$(".hui").hide();
	$(".quizChose").toggleClass("animateHeight");
	overAllDepth();
};

function overAllDepth() {
	if($(".overAllDepth").length == 4) {
		$(".depthRBox").html("查看结果").addClass("depthRBoxOver");
	}else{
		$(".depthRBox").html("做完四题<br/>可查看结果").removeClass("depthRBoxOver");
	}
};
$(".depthRBox").on("click",function(){
	if ($(this).hasClass("depthRBoxOver")) {
		location.href="depthResult.html";
	}
})