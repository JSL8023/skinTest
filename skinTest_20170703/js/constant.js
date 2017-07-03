var auth, meetao = "testmall.meetao.com",
	homeUrl = "http://testmall.meetao.com/service/user/index";
/* function Error(){
	 location.href="notFound.html";
   }*/
/*接口管理文档*/
var addressJr = "http://192.168.86.243:8880/"; ////贾然ip地址
var addressYh = "http://192.168.86.120:8388/"; //于辉ip地址
//var addressCy="http://192.168.86.250:8080/";////超毅ip地址
var addressCy = "http://192.168.86.120:8388/";
var addressWl = "http://192.168.86.215:8080/";
//测试环境
var addressTest = "http://192.168.86.120:8388/";
var addressGroup = "http://192.168.86.120:8388/";
var addressComment = "http://192.168.86.120:8588/";
var addressVideoColumn = "http://192.168.86.120:8688/";
var addressPersonal = "http://192.168.86.120:8788/";
var SERVICE = {
	//我的桃花币和成长值明细
	"myPeachOrValue": "meeTao/getTaoOrValue",
	"peachRanking": "meeTao/othersTaoHuaCoin",
	"peachNum": "meeTao/myTaoHuaCoin",
	"growNum": "meeTao/myGrowthValue",
	"metaoClub": "meeTao/meeTaoClub",
	"memberInfo": "meeTao/memberInfo",
	"peachexchange": "meeTao/getAllExchangeProducts", //获取桃花币换礼三个状态值。已兑换，总数等
	"peachAdress": "meeTao/confirmExchangeProduct", //填写兑换商品的收货信息
	"peachCan": "meeTao/canExchangeProduct", //获取用户桃花币数量以及是否还有机会

	//jsl
	//查询用户桃花币或者成长值记录
	"growRecord": "meeTao/getTaoOrValue",
	"psInfPfect": "meeTao/memberInfo",
	"getHobbyOrMajor": "meeTao/getHobbyOrMajor",
	"reFillMemberInfo": "meeTao/reFillMemberInfo",
	"share": "meeTao/getSignature",
	"meeTaoClubJsl": "meeTao/meeTaoClub",
	"reFillTaskFinshed": "meeTao/reFillTaskFinshed",
	//蜜桃live 
	"meetao_comment_topic": "zmt-svr-meetao/svr/sys/common/meetao_comment_topic.jsonp", //话题详情 评论列表 原
	"commentSelect": "api/comment/commentSelect.jsonp", //话题详情 评论列表 现
	//	"meetao_searchDetail":"api/sys/common/meetao_topic-searchDetail-action.jsonp",//话题详情 内容
	"meetao_searchDetail": "api/group/searchTopicDetail.jsonp", //话题详情 内容
	"queryPlan": "api/user/queryPlan.jsonp", //√美妆方案选择列表
	"queryPlanInfo": "api/user/queryPlanInfo.jsonp", //√方案详情页信息  力哥
	"queryPlanProducts":"api/user/queryPlanProducts.jsonp",//√方案相关产品信息

	//xubing
	"meetao_questionlList": "api/sys/common/meetao_question-search-action.jsonp", //小组知道热门列表
	"meetao_questionDetail": "api/sys/common/meetao_question-byid-action.jsonp", //小组知道详情
	"meetao_questionlQuestionFocus": "api/group/questionFocus.jsonp", //小组知道关注问题
	"meetao_questionlLikeComment": "api/comment/likeComment.jsonp", //对评论进行点赞
	"queryTaohuaAndGrowthvalue": "meetao/queryTaohuaAndGrowthvalue", //会员中心首页桃花币和成长值数额查询接口
	"queryTaohuaDetail": "meetao/queryTaohuaDetail", //桃花币明细查询接口
	"queryGrowthValueDetail": "meetao/queryGrowthValueDetail", //成长值明细查询接口
	"queryMemberInfo": "meetao/queryMemberInfo", //会员中心首页个人信息API
	"questionWeightLossSubmit": "api/user/questionWeightLossSubmit.jsonp" //减肥评测结果保存API

};