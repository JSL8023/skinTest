window.onload = function() {
	var sum = [],
		sum_1 = [],
		sum_2 = [];
	var num2, num3, sum1 = sum2 = sum3 = sum4 = 0,
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
			num2 = $(this).parent().index(); /*此页下标*/

			//			alert(typeof parseInt($(this).attr("scores")))
			num3 = num2;
			//				解除上一题disabled事件
			$('.leftB').removeAttr("disabled").removeClass("disabled");
			sum[num2] = parseInt($(this).attr("scores"));

			//				点击变色事件  字体+图标
			$(this).find("dt").html("&#xe602;")
			$(this).find("dd").css({
				color: "#3BDDC6"
			});
			$(this).siblings().find("dt").html("&#xe605;");
			$(this).siblings().find("dd").css({
				color: "#000"
			});

			if(num2 != 25) {
				//	           	点击隐藏当前出下一个
				setTimeout(function() {
					_this.parent().addClass("hide").next().removeClass("hide");
				}, 100)
			}
			//			检查函数
			judge()

			//				最后一题弹出结果  题数-1 序号   共26  第一套1-9  第二套10-21 第三套22-26

			if(num2 == 25) {
				$('.rightB').addClass("disabled").attr("disabled", "disabled");
				$(".testOver").removeClass("hide");
				//			中间换页切换
				//					查看结果
				$(".congratulationButton").on("touchstart", function() {
						$(".testBagin").addClass("hide");
						$(".testResult").removeClass("hide");
					})
					//					再看看题
				$(".conResTestButton").on("touchstart", function() {
					$(".testOver").addClass("hide");
				})

				$(".header_title").html("24类肤质分形精测结果")
				for(var i = 0; i < 9; i++) {
					sum1 += sum[i]; /*第一题分数总和*/
				}
				for(var j = 9; j < 21; j++) {
					sum2 += sum[j]; /*第二题分数总和*/
				}
				for(var k = 21; k < 26; k++) {
					sum3 += sum[k]; /*第三题分数总和*/
				}
				$(".ouside1 .oilGrade").html(sum1);
				$(".ouside2 .oilGrade").html(sum2);
				$(".ouside3 .oilGrade").html(sum3);

				/*第一题判断*/
				if(sum1 >= 61 && sum1 <= 74) {
					$(".ouside1 .oilType1").html("油性");
					$(".t1res").html("油性");
					$(".ouside1 .zhi4").css({
						color: "#6CC"
					});
					$(".ouside1 .zhi4").siblings().css({
						color: "#fff"
					});
				} else if(sum1 >= 46 && sum1 <= 60) {
					$(".ouside1 .oilType1").html("混合偏油");
					$(".t1res").html("混合偏油");
					$(".ouside1 .zhi3").css({
						color: "#6CC"
					});
					$(".ouside1 .zhi3").siblings().css({
						color: "#fff"
					});
				} else if(sum1 >= 34 && sum1 <= 45) {
					$(".ouside1 .oilType1").html("混合偏干");
					$(".t1res").html("混合偏干");
					$(".ouside1 .zhi2").css({
						color: "#6CC"
					});
					$(".ouside1 .zhi2").siblings().css({
						color: "#fff"
					});
				} else if(sum1 >= 14 && sum1 <= 33) {
					$(".ouside1 .oilType1").html("干性");
					$(".t1res").html("干性");
					$(".ouside1 .zhi1").css({
						color: "#6CC"
					});
					$(".ouside1 .zhi1").siblings().css({
						color: "#fff"
					});
				}

				/*第二题判断*/
				if(sum2 >= 61 && sum2 <= 100) {
					$(".ouside2 .oilType1").html("敏感");
					$(".t2res").html("敏感");
					$(".ouside2 .zhi3").css({
						color: "#6CC"
					});
					$(".ouside2 .zhi3").siblings().css({
						color: "#fff"
					})
				} else if(sum2 >= 37 && sum2 <= 60) {
					$(".ouside2 .oilType1").html("敏感倾向");
					$(".t2res").html("敏感倾向");
					$(".ouside2 .zhi2").css({
						color: "#6CC"
					});
					$(".ouside2 .zhi2").siblings().css({
						color: "#fff"
					})
				} else {
					$(".ouside2 .oilType1").html("耐受性");
					$(".t2res").html("耐受性");
					$(".ouside2 .zhi1").css({
						color: "#6CC"
					});
					$(".ouside2 .zhi1").siblings().css({
						color: "#fff"
					})

				}

				/*第三题判断*/
				if(sum3 >= 21 && sum3 <= 40) {
					$(".ouside3 .oilType1").html("色素");
					$(".t3res").html("色素");
					$(".ouside3 .zhi2").css({
						color: "#6CC"
					});
					$(".ouside3 .zhi2").siblings().css({
						color: "#fff"
					});

				} else {
					$(".ouside3 .oilType1").html("非色素");
					$(".t3res").html("非色素");
					$(".ouside3 .zhi1").css({
						color: "#6CC"
					});
					$(".ouside3 .zhi1").siblings().css({
						color: "#fff"
					});
				}

				//				肤质综合评分
				sum4 = sum1 + sum2 + sum3;
				$(".loveSkinScore").html(sum4)
				if(sum4 >= 88) {
					$(".adjustScore").html("较强");
				} else if(sum4 >= 80 && sum4 < 80) {
					$(".adjustScore").html("中等偏上");
				} else if(sum4 >= 70 && sum4 < 80) {
					$(".adjustScore").html("中等");
				} else if(sum4 >= 60 && sum4 < 70) {
					$(".adjustScore").html("中等偏弱");
				} else if(sum4 < 60) {
					$(".adjustScore").html("较弱");
				}
				
				$.ajax({
					type:"get",
					url:"http://question.fulibailing.com/service/member/judgeSkinType",
					dataType:"json",
					data:{firstScore: sum1,secondScore: sum2,thirdScore: sum3,compositeScore: sum4},
					async:true,
					success:function(data){
						$(".summary").html(data.summary);/*这是让人*/
						$(".rank").html(data.rank);/*24类中那类*/
						$(".allRes_H3Html").html(data.title); /*图片旁文字*/
						$(".skinPercent").html(data.percent); /*百分比*/
						$(".allRes_H3Html").html();
					},
					error:function(){
						alert("提交失败");
					}
				});
				
				
				
				
				
				
				
				
				
				
				
				
				
				

			} else {
				//				不到最后一题时候
				$(".testOver").addClass("hide");
			}

		}
	})
	
	/*$.ajax({
				type:"get",
				url:"http://question.fulibailing.com/service/member/judgeSkinType",
				dataType:"json",
				data:{firstScore: sum1,secondScore: sum2,thirdScore: sum3,compositeScore: sum4},
				async:true,
				success:function(data){
					
				},
				error:function(){
					alert("提交失败");
				}
			});*/
				
	
	

	//	最后一题确认提交事件
	function judge() {
		if(!$(".3t5").hasClass("hide")) {
			$(".seeRes").removeClass("hide");
			$(".rightB").addClass("hide");
		} else {
			$(".seeRes").addClass("hide");
			$(".rightB").removeClass("hide");
		}
	}

	$(".seeRes").on("touchend", function() {
		$(".testOver").removeClass("hide");
	})

	//			上一题点击事件
	$('.leftB').on("touchstart", function() {
			if(num3 == 25) {
				num3 = 24
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
		if(num3 == 24) {
			$('.rightB').addClass("disabled").attr("disabled", "disabled");
		}
		judge();
	})

	//关闭事件
	$(".closeDiv").on("touchend", function(){
		$(".resPhone").removeClass("fixed");
		$(".submitPHone").removeClass("hide");
		$(".postPhoneNumber").removeAttr("disabled").removeClass("disabled");
		$(".closeDiv").addClass("hide");
		$(".prosonPhoneNumber").blur();
	})

	//			手机号验证 
	$(".prosonPhoneNumber").focus(function() {
		$(".resPhone").addClass("fixed");
		$(".submitPHone").addClass("hide");
		$('.postPhoneNumber').addClass("disabled").attr("disabled", "disabled");
		$(".closeDiv").removeClass("hide");
		return false;
	})

	$(".prosonPhoneNumber").blur(function() {
		$(".resPhone").removeClass("fixed");
		$(".submitPHone").removeClass("hide");
		$(".postPhoneNumber").removeAttr("disabled").removeClass("disabled");
		$(".closeDiv").addClass("hide");
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
		setTimeout(function() {
			$(".Commit").removeClass("hide");
		}, 500);
		$(".prosonPhoneNumber").blur();

	})
//	alert((46*3.349)+(62*(-2))+(20*3));


	window.onresize = function() {
		window.location.reload()
	}

}