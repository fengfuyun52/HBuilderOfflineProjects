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
                                "name":"溢流阀",          //商品名称
                                "spec":"IU87",              //规格
                                "code":"12C2004",    //商品编号
                                "atts":"12C2004",      //属性
                                "purchasePrice":"250.00" ,     //进货参考价
                                "num":"250" ,     //库存数量
                                "img":"www.tiza.com/img/abc.png"   ,   //图片地址
                                "retailPrice":"250"   ,   //零售价
                               "tradePrice":"250" ,     //批发价
				    	},
						{
				               "id":"1",
                                "name":"溢流阀",          //商品名称
                                "spec":"IU87",              //规格
                                "code":"12C2004",    //商品编号
                                "atts":"12C2004",      //属性
                                "purchasePrice":"250.00",      //进货参考价
                                "num":"250",      //库存数量
                                "img":"www.tiza.com/img/abc.png" ,     //图片地址
                                "retailPrice":"250" ,     //零售价
                               "tradePrice":"250" ,     //批发价
				        },
						{
				             "id":"1",
                                "name":"溢流阀",          //商品名称
                                "spec":"IU87",              //规格
                                "code":"12C2004",    //商品编号
                                "atts":"12C2004",      //属性
                                "purchasePrice":"250.00" ,     //进货参考价
                                "num":"250",      //库存数量
                                "img":"www.tiza.com/img/abc.png" ,     //图片地址
                                "retailPrice":"250" ,     //零售价
                               "tradePrice":"250" ,     //批发价
				        },
				        {
				             "id":"1",
                                "name":"溢流阀",          //商品名称
                                "spec":"IU87",              //规格
                                "code":"12C2004",    //商品编号
                                "atts":"12C2004",      //属性
                                "purchasePrice":"250.00"    ,  //进货参考价
                                "num":"250",      //库存数量
                                "img":"www.tiza.com/img/abc.png" ,     //图片地址
                                "retailPrice":"250" ,     //零售价
                               "tradePrice":"250" ,     //批发价
				        },
				        {
				           "id":"1",
                                "name":"溢流阀",          //商品名称
                                "spec":"IU87",              //规格
                                "code":"12C2004",    //商品编号
                                "atts":"12C2004",      //属性
                                "purchasePrice":"250.00" ,     //进货参考价
                                "num":"250",      //库存数量
                                "img":"www.tiza.com/img/abc.png" ,     //图片地址
                                "retailPrice":"250" ,     //零售价
                               "tradePrice":"250" ,     //批发价
				        },
				        {
				              "id":"1",
                                "name":"溢流阀",          //商品名称
                                "spec":"IU87",              //规格
                                "code":"12C2004",    //商品编号
                                "atts":"12C2004",      //属性
                                "purchasePrice":"250.00" ,    //进货参考价
                                "num":"250",      //库存数量
                                "img":"www.tiza.com/img/abc.png" ,     //图片地址
                                "retailPrice":"250" ,     //零售价
                               "tradePrice":"250" ,     //批发价
				        }]
				    },   
				    	"msg": ""          
					};
		
		var content = document.querySelector("#content");
		
		// 循环就sonData.list
		for(var i = 0; i < jsonData.data.Rows.length; i++) {			
			var li = document.createElement("li");
			li.className = "mui-table-view-cell";
			// 多个商品字符串
			//var products = "";			
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

            var id = jsonData.data.Rows[i].id;   
             
            //商品名称
            var name = jsonData.data.Rows[i].name;
            //规格
            var spec = jsonData.data.Rows[i].spec;
                                
            //商品编号
            var code = jsonData.data.Rows[i].code;
            //属性                                
            var atts = jsonData.data.Rows[i].atts;
             //进货参考价
           var purchasePrice = jsonData.data.Rows[i].purchasePrice;
             //库存数量
           var num = jsonData.data.Rows[i].num;
             //图片地址
            var img = jsonData.data.Rows[i].img;
             //零售价
            var retailPrice = jsonData.data.Rows[i].retailPrice;
            //批发价
            var tradePrice = jsonData.data.Rows[i].tradePrice;


			//名称			        
//			var name = jsonData.data.Rows[i].name;
//			 //编号
//			var code = jsonData.data.Rows[i].code;
//		     //分类
//		    var classify = jsonData.data.Rows[i].classify;
//		     //电话
//		    var tel = jsonData.data.Rows[i].tel;
//		    //联系人
//		    var contacts = jsonData.data.Rows[i].contacts;
//		    //传真
//		    var fax = jsonData.data.Rows[i].fax;
//		    //邮箱
//		    var mail = jsonData.data.Rows[i].mail;
			// 循环Rows商品
			//for(var j = 0; j < jsonData.data.Rows[i].Rows.length; j++) {
				//products += jsonData.data.Rows[i].Rows[j].name + ",";
//				// 出库商品一个一个加
//				Rows.push(jsonData.data.Rows[i].Rows[j].name);
			//}
			
			
			
    		
//  <a class="mui-navigate-right">
//  	<div class="pic">
//			
//		</div>
//   <div>中联重科</div>
//   <div>
//   	<span class="contact">联系人 : <span >无</span> </span>
//   	<span class="contact-phone"> 联系电话：<span >无</span></span>
//  </div>
// <div><span class="goods">商品: <span >油嘴 3TF</span> </span></div>
// <div><span class="contact">备注 : <span >无</span> </span></div>
// <div><span class="contact">备注 : <span >无</span> </span></div>
//  </a>
//  
//</li>
//	
//				html = 		'<label class = "mui-media mui-input-row mui-checkbox mui-left">'
//					+		'<div class="mui-media-body">'
//					
//					+			'<span>' + jsonData.data.Rows[i].name + '</span>'
//					+			'<p class = "mui-ellipsis"><span>' + '联系人：'+jsonData.data.Rows[i].contacts + '</span><span class="right-span">'+'联系人：'+jsonData.data.Rows[i].tel+'</span></p>'
//					+			'<p class = "mui-ellipsis">' + '应付欠款：'+jsonData.data.Rows[i].contacts + '</p>'
//					+		'</div>'
//					+	'</label>'
//					+	'<span class="mui-pull-right mui-navigate-right"></span>';
//		
               html = 	'<label class = "mui-media mui-input-row mui-checkbox mui-left">'
					+       '<div><span class="pic"></span>'
							
					+		'<span class="detail-rightspan"><div class="mui-media-body">'
					
					+			'<span>' + jsonData.data.Rows[i].name+ '</span>'
					+			'<p class = "mui-ellipsis"><span>' + '规格：'+jsonData.data.Rows[i].spec + '</span></p>'
					+			'<p class = "mui-ellipsis">' + '属性：'+jsonData.data.Rows[i].atts + '</p>'
					+           '<p class = "mui-ellipsis">' + '编号：'+jsonData.data.Rows[i].code  + '</p>'
					+           '<p class = "mui-ellipsis">' + '库存数量：'+jsonData.data.Rows[i].num+ '</p>'
					+		'</div></span></div>'
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
				url : "prodect_detail.html",
			    //id:new-page-id,
//				    styles:{
//					    top:newpage-top-position,//新页面顶部位置
//					    bottom:newage-bottom-position,//新页面底部位置
//					    width:newpage-width,//新页面宽度，默认为100%
//					    height:newpage-height,//新页面高度，默认为100%
//					    ......
//				    },
			    extras : {
			             id:id,
			             name:name,
			             spec:spec,
			             code:code,
			             atts:atts,
			             purchasePrice:purchasePrice,
			             num:num,
			             img:img,
			             retailPrice:retailPrice,
			             tradePrice:tradePrice
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