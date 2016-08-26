window.onload = function() {
	var sum = [],
		sum_1 = [],
		sum_2 = [];
	var num2, num3, sum1 = sum2 = sum3 = 0,
		Switch = 0,
		Scroll = 0,
		headerHight = document.documentElement.clientWidth / 20 * 3;
	document.getElementsByTagName("html")[0].style.fontSize = document.documentElement.clientWidth / 20 + "px";

	//         开始测试按钮
	$("#bagin").on("touchstart", function() {

		$(".homePage").addClass("hide");
		$(".testBagin").removeClass("hide");

	})

	//			滑动事件  不触发选择题
	$(".testBagin").on("touchmove", function() {

		Switch = 1;
		$(".testBagin").on("touchend", function() {
			Switch = 0;
		})
	})

	//			开始答题
	$(".testBox dl").on("touchend", function() {
		if(Switch == 0) {
			var _this = $(this);
			var num1 = $(this).index(); /*dl下标*/
			num2 = $(this).parent().index(); /*此页下标*/

			num3 = num2;
			//				解除上一题disabled事件
			$('.leftB').removeAttr("disabled").removeClass("disabled");
			if(num1 == 5) {
				num1 = 2.5;
			}
			sum[num2] = num1;

			//				点击变色事件  字体+图标
			$(this).find("dt").html("&#xe602;")
			$(this).find("dd").css({
				color: "#3BDDC6"
			});
			$(this).siblings().find("dt").html("&#xe605;");
			$(this).siblings().find("dd").css({
				color: "#000"
			});

			if(num2 != 41) {
				//	           	点击隐藏当前出下一个
				setTimeout(function() {
					_this.parent().addClass("hide").next().removeClass("hide");
				}, 100)
			}
//			检查函数
			judge()

			//				最后一题弹出结果  题数-1 序号   共41  第一套0-10  第二套11-28 第三套29-41

			if(num2 == 41) {
				$('.rightB').addClass("disabled").attr("disabled", "disabled");
				$(".testOver").removeClass("hide");
				//			中间换页切换
				//					查看结果
				$(".congratulationButton").on("touchstart", function() {
						//					$(".testOver").addClass("hide");
						$(".testBagin").addClass("hide");
						$(".testResult").removeClass("hide");
					})
					//					再看看题
				$(".conResTestButton").on("touchstart", function() {
					$(".testOver").addClass("hide");
				})

				$(".header_title").html("32类肤质分形精测结果")
				for(var i = 0; i < 10; i++) {
					sum1 += sum[i]; /*第一题分数总和*/
				}
				for(var j = 11; j < 28; j++) {
					sum2 += sum[i]; /*第二题分数总和*/
				}
				for(var j = 29; j < 41; j++) {
					sum3 += sum[i]; /*第三题分数总和*/
				}
				$(".ouside1 .oilGrade").html(sum1);
				$(".ouside2 .oilGrade").html(sum2);
				$(".ouside3 .oilGrade").html(sum3);

				/*第一题判断*/
				if(sum1 >= 27 && sum1 <= 44) {
					$(".ouside1 .oilType1").html("油");
					$(".ouside1 .oilType2").html("O");
					$(".t1res").html("油性皮肤");
					if(sum1 >= 34 && sum1 <= 44) {
						$(".ouside1 .zhi4").css({
							color: "#6CC"
						})
					} else if(sum1 >= 27 && sum1 <= 33) {
						$(".ouside1 .zhi3").css({
							color: "#6CC"
						})
					}
				} else {
					$(".ouside1 .oilType1").html("干");
					$(".ouside1 .oilType2").html("D");
					$(".t1res").html("干性皮肤");
					if(sum1 >= 17 && sum1 <= 26) {
						$(".ouside1 .zhi2").css({
							color: "#6CC"
						})
					} else if(sum1 >= 11 && sum1 <= 16) {
						$(".ouside1 .zhi1").css({
							color: "#6CC"
						})
					}
				}

				/*第二题判断*/
				if(sum2 >= 30 && sum2 <= 72) {
					$(".ouside2 .oilType1").html("敏");
					$(".ouside2 .oilType2").html("S");
					$(".t2res").html("敏感性皮肤");
					if(sum2 >= 34 && sum2 <= 72) {
						$(".ouside2 .zhi4").css({
							color: "#6CC"
						})
					} else if(sum2 >= 30 && sum2 <= 33) {
						$(".ouside2 .zhi3").css({
							color: "#6CC"
						})
					}
				} else {
					$(".ouside2 .oilType1").html("耐");
					$(".ouside2 .oilType2").html("R");
					$(".t2res").html("耐受性皮肤");
					if(sum2 >= 25 && sum2 <= 29) {
						$(".ouside2 .zhi2").css({
							color: "#6CC"
						})
					} else if(sum2 >= 17 && sum2 <= 24) {
						$(".ouside2 .zhi1").css({
							color: "#6CC"
						})
					}
				}

				/*第三题判断*/
				if(sum3 >= 29 && sum3 <= 52) {
					$(".ouside3 .oilType1").html("色");
					$(".ouside3 .oilType2").html("P");
					$(".t3res").html("色素沉着性皮肤");
					$(".ouside3 .zhi2").css({
						color: "#6CC"
					});

				} else {
					$(".ouside3 .oilType1").html("非");
					$(".ouside3 .oilType2").html("N");
					$(".t3res").html("非色素沉着性皮肤");
					$(".ouside3 .zhi1").css({
						color: "#6CC"
					});
				}
			} else {
				$(".testOver").addClass("hide");
			}
		}
	})
	
	
	function judge(){
		if (!$(".2t13").hasClass("hide")) {
			$(".seeRes").removeClass("hide");
			$(".rightB").addClass("hide");
		} else{
			$(".seeRes").addClass("hide");
			$(".rightB").removeClass("hide");
		}
	}
	
	
	$(".seeRes").on("touchend",function(){
		$(".testOver").removeClass("hide");
	})
	
	
	
	
	

	//			上一题点击事件
	$('.leftB').on("touchstart", function() {
			if(num3 == 41) {
				num3 = 40
			}
			$(".ti").eq(num3 + 1).addClass("hide").prev().removeClass("hide");
			num3--;
			//				最开始一题
			if(num3 < 0) {
				$('.leftB').addClass("disabled").attr("disabled", "disabled");
				$('.rightB').removeAttr("disabled").removeClass("disabled");
			} else if(num3 == 40) {
				$('.rightB').addClass("disabled").attr("disabled", "disabled");
			} else {
				$('.rightB').removeAttr("disabled").removeClass("disabled");
			}
			judge();

		})
		//			下一题点击事件
	$(".rightB").on("touchstart", function() {
		$(".ti").eq(num3 + 1).addClass("hide").next().removeClass("hide");
		num3++;
		$('.leftB').removeAttr("disabled").removeClass("disabled");
		if(num3 >= num2) {
			$('.rightB').addClass("disabled").attr("disabled", "disabled");
		}
		if(num3 == 40) {
			$('.rightB').addClass("disabled").attr("disabled", "disabled");
		}
		judge();
	})

	//			手机号验证 
	$(".prosonPhoneNumber").focus(function() {
		$(".resPhone").addClass("fixed");
	})

	$(".prosonPhoneNumber").blur(function() {
		$(".resPhone").removeClass("fixed");
	})

	$(".prosonPhoneNumber").keyup(function() {
			var phone = $(".prosonPhoneNumber").val();
			if(phone == "") {
				$(".Warning").addClass("hide");
				$(".Correct").addClass("hide");
				$('.postPhoneNumber').addClass("disabled").attr("disabled", "disabled");
			} else if(!(/^1[3|4|5|7|8]\d{9}$/.test(phone))) {
				//					输入错误提示
				$(".Warning").removeClass("hide");
				$(".Correct").addClass("hide");
				$('.postPhoneNumber').addClass("disabled").attr("disabled", "disabled");
			} else {
				//					输入正确提示
				$(".Warning").addClass("hide");
				$(".Correct").removeClass("hide");

				$(".postPhoneNumber").removeAttr("disabled").removeClass("disabled");
			}

		})
		//			提交按钮事件
	$(".postPhoneNumber").on("touchstart", function() {
		$(".Uncommit").addClass("hide");
		$(".Commit").removeClass("hide");
	})

	window.onresize = function() {
		window.location.reload()
	}
	
}