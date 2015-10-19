var mask = mui.createMask();
var showMenu = false;
var menuShow = false;


mui.init({
  	pullRefresh : {
  		container:"#offCanvasContentScroll",//下拉刷新容器标识，querySelector能定位的css选择器均可，比如：id、.class等
    	down : {
		  	contentdown : "下拉可以刷新",//可选，在下拉可刷新状态时，下拉刷新控件上显示的标题内容
		    contentover : "释放立即刷新",//可选，在释放可刷新状态时，下拉刷新控件上显示的标题内容
		    contentrefresh : "正在刷新...",//可选，正在刷新状态时，下拉刷新控件上显示的标题内容
		    callback :pullfresh //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
		},
	    up : {
		    contentrefresh : "正在加载...",//可选，正在加载状态时，上拉加载控件上显示的标题内容
		    contentnomore:'没有更多数据了',//可选，请求完毕若没有更多数据时显示的提醒内容；
		    callback :pullLoad //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
    	}
  	}
});

function pullfresh() {
	//console.log("123");
    //业务逻辑代码，比如通过ajax从服务器获取新数据；
    //......
    //注意，加载完新数据后，必须执行如下代码，注意：若为ajax请求，则需将如下代码放置在处理完ajax响应数据之后
    setTimeout(function() {
    	// 
		mui('#offCanvasContentScroll').pullRefresh().endPulldownToRefresh();
	}, 1500);
    
}

function pullLoad() {
	setTimeout(function() {
		// console.log("in");
		mui('#offCanvasContentScroll').pullRefresh().endPullupToRefresh(false); //参数为true代表没有更多数据了。
	}, 1500);
}


////在android4.4中的swipe事件，需要preventDefault一下，否则触发不正常
////故，在dragleft，dragright中preventDefault
//window.addEventListener('dragright', function(e) {
//	e.detail.gesture.preventDefault();
//});
//window.addEventListener('dragleft', function(e) {
//	e.detail.gesture.preventDefault();
//});
////主界面向左滑动，若菜单未显示，则显示菜单；否则不做任何操作；
//window.addEventListener("swipeleft", openFliterMenu);
// //主界面向右滑动，若菜单已显示，则关闭菜单；否则，不做任何操作；
//window.addEventListener("swiperight", closeMenu);


window.addEventListener('maskshow', function() {
	mask.show();
	menuShow = true;
});

window.addEventListener('maskClose', function() {
	console.log('maskclose');
	mask.close();
	menuShow = false;
});
// 点击遮罩
window.addEventListener('tap', menuClose);
// 右滑遮罩 
window.addEventListener('swiperight', menuClose);
// 搜索
window.addEventListener('searchDelivery', function(e) {
	document.querySelector('#content').innerHTML = '<li class="mui-table-view-cell">' + '没有搜索结果' + '</li>';
});

function menuClose() {
	if(menuShow) {
		mui.fire(plus.webview.currentWebview().parent(), 'menuClose', {});
		mask.close();
	}
}
//if (mui.os.plus) {
//	mui.plusReady(function() {
//		setTimeout(function() {
//			mui('#offCanvasContentScroll').pullRefresh().pullupLoading();
//		}, 1000);
//
//	});
//} else {
//	mui.ready(function() {
//		mui('#offCanvasContentScroll').pullRefresh().pullupLoading();
//	});
//}

//mui.plusReady(function(){
     //console.log("当前页面URL："+plus.webview.currentWebview().getURL());
//	mui('#offCanvasContentScroll').scroll();
	// 新增出货单
	//console.log("in");
	var jsonData = 
					{
				    "res": "0",     //0-成功1-失败
				    "data": {
				        "Rows":[{
				            "id":"1",
				            "type":"0",                   //单据类型
				            "code":"THD20150629001",              //单据编号
				            "warehouse":"默认仓库",    //仓库
				            "names":"溢流阀,水泵,油嘴",      //商品
				            "customer":"250" ,     //客户
				            "supplier":"250",      //供应商
				            "date":"2015-01-02",      //业务日期
				            "remark":"250.00"      //备注
				    	},
						{
				            "id":"2",
				            "type":"0",                   //单据类型
				            "code":"THD20150629002",              //单据编号
				            "warehouse":"默认仓库",    //仓库
				            "names":"溢流阀,水泵",      //商品
				            "customer":"250" ,     //客户
				            "supplier":"250",      //供应商
				            "date":"2015-01-01",      //业务日期
				            "remark":"250.00"      //备注 
				        },
						{
				            "id":"3",
				            "type":"0",                   //单据类型
				            "code":"THD20150629003",              //单据编号
				            "warehouse":"默认仓库",    //仓库
				            "names":"溢流阀,水泵",      //商品
				            "customer":"250" ,     //客户
				            "supplier":"250",      //供应商
				            "date":"2015-01-01",      //业务日期
				            "remark":"250.00"      //备注 
				        },
				        {
				            "id":"2",
				            "type":"0",                   //单据类型
				            "code":"THD20150629002",              //单据编号
				            "warehouse":"默认仓库",    //仓库
				            "names":"溢流阀,水泵",      //商品
				            "customer":"250" ,     //客户
				            "supplier":"250",      //供应商
				            "date":"2015-01-01",      //业务日期
				            "remark":"250.00"      //备注 
				        },
				        {
				            "id":"2",
				            "type":"0",                   //单据类型
				            "code":"THD20150629002",              //单据编号
				            "warehouse":"默认仓库",    //仓库
				            "names":"溢流阀,水泵",      //商品
				            "customer":"250" ,     //客户
				            "supplier":"250",      //供应商
				            "date":"2015-01-01",      //业务日期
				            "remark":"250.00"      //备注 
				        },
				        {
				            "id":"2",
				            "type":"0",                   //单据类型
				            "code":"THD20150629002",              //单据编号
				            "warehouse":"默认仓库",    //仓库
				            "names":"溢流阀,水泵",      //商品
				            "customer":"250" ,     //客户
				            "supplier":"250",      //供应商
				            "date":"2015-01-01",      //业务日期
				            "remark":"250.00"      //备注 
				        }]
				    },   
				    	"msg": ""          
					};
		
		var content = document.querySelector("#content");
		
		// 循环就sonData.list
		for(var i = 0; i < jsonData.data.Rows.length; i++) {
			if(i == 0 || jsonData.data.Rows[i].date != jsonData.data.Rows[i - 1].date) {
				var liDivider = document.createElement("li");
				liDivider.innerText = jsonData.data.Rows[i].date;
				liDivider.className = "mui-table-view-divider";
				content.appendChild(liDivider);
			}
			var li = document.createElement("li");
			li.className = "mui-table-view-cell";
			// 多个商品字符串
			//var products = "";
			
			// id
			var id = jsonData.data.Rows[i].id;
			
//			// 单号 
//			var no = jsonData.data.Rows[i].code;
//			// 出库仓库
//			var warehouse = jsonData.data.Rows[i].warehouse;
//			// 客户
//			var customer = jsonData.data.Rows[i].customer;
//			// 出库商品
//			var Rows = jsonData.data.Rows[i].Rows;
//			// 业务日期
//			var bussinessDate = jsonData.data.Rows[i].bussinessDate;
//			// 经手人
//			var operator = jsonData.data.Rows[i].operator;
//			// 备注
//			var remark = jsonData.data.Rows[i].remark;
//			// 制单人
//			var maker = jsonData.data.Rows[i].maker;
//			// 制单日期
//			var makeDate = jsonData.data.Rows[i].makeDate;
			
			// 循环Rows商品
			//for(var j = 0; j < jsonData.data.Rows[i].Rows.length; j++) {
				//products += jsonData.data.Rows[i].Rows[j].name + ",";
//				// 出库商品一个一个加
//				Rows.push(jsonData.data.Rows[i].Rows[j].name);
			//}
			
			html = 		'<label class = "mui-media mui-input-row mui-checkbox mui-left">'
					+		'<div class="mui-media-body">'
					
					+			'<span>' + jsonData.data.Rows[i].customer + '</span>'
					+			'<p class = "mui-ellipsis">' + jsonData.data.Rows[i].code + '</p>'
					+			'<p class = "mui-ellipsis">' + jsonData.data.Rows[i].names + '</p>'
					+		'</div>'
					+	'</label>'
					+	'<span class="mui-pull-right mui-navigate-right"></span>';
			li.innerHTML = html;
			content.appendChild(li);
		}
		//alert();
		// 批量绑定事件 点击到详细 
		mui('.mui-table-view').on('tap', '.mui-table-view-cell', function(){
			// 页面跳转到详细
			mui.openWindow({
				url : "delivery_detail.html",
			    //id:new-page-id,
//				    styles:{
//					    top:newpage-top-position,//新页面顶部位置
//					    bottom:newage-bottom-position,//新页面底部位置
//					    width:newpage-width,//新页面宽度，默认为100%
//					    height:newpage-height,//新页面高度，默认为100%
//					    ......
//				    },
			    extras : {
			    	id : id // id
//				    	no : no, // 单号 
//				    	warehouse : warehouse, // 出库仓库
//				    	customer : customer, // 客户
//				    	Rows : Rows, // 出库商品
//				    	bussinessDate : bussinessDate, // 业务日期
//				    	operator : operator, // 经手人
//				    	remark : remark, // 备注
//				    	maker : maker, // 制单人
//				    	makeDate : makeDate // 制单日期
			    },
			    createNew : false,//是否重复创建同样id的webview，默认为false:不重复创建，直接显示
			    show:{
			      	autoShow:true,//页面loaded事件发生后自动显示，默认为true
			      	//aniShow:animationType,//页面显示动画，默认为”slide-in-right“；
			      	//duration:animationTime//页面动画持续时间，Android平台默认100毫秒，iOS平台默认200毫秒；
			    },
			    waiting:{
			      	autoShow:true,//自动显示等待框，默认为true
			      	title:'正在加载...',//等待对话框上显示的提示内容
//							      	options:{
//							        	width:waiting-dialog-widht,//等待框背景区域宽度，默认根据内容自动计算合适宽度
//							        	height:waiting-dialog-height,//等待框背景区域高度，默认根据内容自动计算合适高度
//							        	......
//							      	}
			    }
			});
		});
		// 滚动条(不弹跳)
		//mui('#offCanvasSideScroll').scroll({bounce : false});
		//mui('#offCanvasContentScroll').scroll();
		
//});