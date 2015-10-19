mui.init({
	gestureConfig:{
	   	tap: true, //默认为true
	   	doubletap: true, //默认为false
	   	longtap: true, //默认为false
	   	swipe: true, //默认为true
	   	drag: true, //默认为true
	   	hold:false,//默认为false，不监听
	   	release:false//默认为false，不监听
	},
  	pullRefresh : {
  		container:"#offCanvasContentScroll",//下拉刷新容器标识，querySelector能定位的css选择器均可，比如：id、.class等
    	down : {
		  	//contentdown : "下拉可以刷新",//可选，在下拉可刷新状态时，下拉刷新控件上显示的标题内容
		   	//contentover : "释放立即刷新",//可选，在释放可刷新状态时，下拉刷新控件上显示的标题内容
		    //contentrefresh : "正在刷新...",//可选，正在刷新状态时，下拉刷新控件上显示的标题内容
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
    	console.log('down');
		mui('#offCanvasContentScroll').pullRefresh().endPulldownToRefresh();
	}, 1500);
    
}

function pullLoad() {
	setTimeout(function() {
		 console.log("up");
		mui('#offCanvasContentScroll').pullRefresh().endPullupToRefresh(false); //参数为true代表没有更多数据了。
	}, 1500);
}

// 新增出货单
document.querySelector("#addNewOrder").addEventListener('tap', function() {
	mui.openWindow({
		url: "new_delivery.html",
		id: "new_delivery"
	});
});



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
	
	var id = jsonData.data.Rows[i].id;
	
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
// 批量绑定事件 点击到详细 
mui('#content').on('tap', '.mui-table-view-cell', function(){
	// 页面跳转到详细
	mui.openWindow({
		url : "delivery_detail.html",
	    
	    extras : {
	    	id : id 
	    },
	    createNew : false,//是否重复创建同样id的webview，默认为false:不重复创建，直接显示
	    show:{
	      	autoShow:true,//页面loaded事件发生后自动显示，默认为true
	      	
	    },
	    waiting:{
	      	autoShow:true,//自动显示等待框，默认为true
	      	title:'正在加载...',//等待对话框上显示的提示内容
	    }
	});
});


mui.plusReady(function () {
	//console.log(plus.navigator.getUserAgent());
	plus.navigator.setUserAgent('abcd');
	console.log(plus.navigator.getUserAgent());
	// 搜索按钮
	document.querySelector('input[type=search]').addEventListener("keydown", function(e) {
		 if(13 == e.keyCode){
            //点击了“搜索” 
            document.querySelector('#content').innerHTML = '<li class="mui-table-view-cell">' + '没有搜索结果' + '</li>';
        }
	});
//	plus.key.addEventListener("backbutton", function() {
//		console.log('back');
//	});
	//main = plus.webview.currentWebview().opener();
	// 点击筛选,关闭侧滑菜单
	document.querySelector('.mui-pull-right.font-blue.ver-center').addEventListener('tap', function() {
		mui('.mui-off-canvas-wrap').offCanvas('close');
	});
	
	// 选择日期
	var ul = mui('.mui-table-view.mui-table-view-chevron.mui-table-view-inverted')
	ul.on('tap', '[name=time]', function() {
		chooseDate(this);
	});
	
	// 选择仓库
	document.querySelector('#warehouseLi').addEventListener('tap', function() {
		mui.openWindow({
			url: '../modules/delivergood-selectdeliverstorage.html',
			id: 'delivergood-selectdeliverstorage',
			extras: {
				storageId: this.childNodes[1].name
			}
		});
	});

	// 返回仓库
	window.addEventListener('selectWarehouse', function(e) {
		console.log(JSON.stringify(e.detail));
		var param = JSON.parse(e.detail);
		// 经手人id
		var storageId = param.storageId;
		// 经手人姓名
		var storageName = param.storageName;
		// 
		var warehouse = document.querySelector('#warehouse');
		// 设经手人
		warehouse.innerText = storageName;
		// 设经手人id
		warehouse.name = storageId;
	});
	
	
	// 点击经手人
	document.querySelector('#operatorLi').addEventListener('tap', function() {
		// 已选择经手人id
		mui.openWindow({
			url: '../modules/out-handled-list.html',
			id: 'out-handled-list',
			extras: {
				brokerId: this.childNodes[1].name // 已选择经手人id
			}
		});
	});
	
	// 返回经手人
	window.addEventListener('selectBrocker', function(e) {
		//openMenu();
		var param = JSON.parse(e.detail);
		console.log(e.detail);
		// 经手人id
		var brokerId = param.brokerId;
		// 经手人姓名
		var brokerName = param.brokerName;
		//console.log(brokerId);
		var operatorLi = document.querySelector('#operator');
		// 设经手人
		operator.innerText = brokerName;
		// 设经手人id
		operator.name = brokerId;
	});
	
	
	// 点击制单人
	document.querySelector('#customerLi').addEventListener('tap', function() {
		// 已选择经手人id
		mui.openWindow({
			url: '../modules/delivergood-selectclient.html',
			id: 'delivergood-selectclient',
			extras: {
				clientId: this.childNodes[1].name // 已选择经手人id
			}
		});
	});
	
	// 返回制单人
	window.addEventListener('selectClient', function(e) {
		//openMenu();
		var param = JSON.parse(e.detail);
		//console.log(e.detail);
		// 经手人姓名
		var clientName = param.clientName;
		//console.log(clientName);

		var customer = document.querySelector('#customer');
		// 设经手人
		customer.innerText = clientName;
		// 设经手人id
		customer.name = clientId;
	});
	
	// 清空所有筛选条件
	document.querySelector('.mui-title.font-blue.background-dark').addEventListener('tap', function(){
		var list = document.querySelectorAll('.mui-table-view.mui-table-view-chevron.mui-table-view-inverted .mui-table-view-cell');
		document.querySelector('#operator').innerText = '';
		document.querySelector('#warehouse').innerText = '';
		//console.log(!document.querySelector('#switch').classList.contains('mui-active'));
		document.querySelector('');
		if(!document.querySelector('#switch').classList.contains('mui-active')) {
			//console.log('in');
			mui('#switch').switch().toggle();
			//document.querySelector('#switch').classList.add('mui-active');
		}
		//console.log(list.length);
		for(var i = 0; i < 4; i++) {
			list[i].childNodes[1].innerText = null;
			//console.log(list[i].innerHTML);
 		}
	});
	
});

//function closeMenu () {
//	console.log('close');
	//window.
//	document.querySelector('#offCanvasSide').hide
//	mui.fire(plus.webview.currentWebview(), 'swiperight', {});
	//mui.trigger(window, 'swipeleft');
	//document.querySelector(".mui-bar-nav~.mui-content").style.paddingTop = "0px";
//}

// 日期选择
function chooseDate(obj) {
	//console.log();
	var dDate = new Date();
	dDate.setFullYear(dDate.getFullYear(), dDate.getMonth(), dDate.getDate());
	var minDate = new Date();
	minDate.setFullYear(1970, 0, 1);
	var maxDate = new Date();
	maxDate.setFullYear(2070, 11, 31);
	plus.nativeUI.pickDate(function(e) {
		var d = e.date;
		obj.childNodes[1].innerText = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
	}, {
		title: "请选择日期",
		date: dDate,
		minDate: minDate,
		maxDate: maxDate
	});
}

//function search() {
//	// 取得输入框的值
//	//var value = document.querySelector('input').value;
//	//value = '/' + value + '/g';
//	
//}

//mui('.mui-scroll-wrapper').scroll({bounce: false});


