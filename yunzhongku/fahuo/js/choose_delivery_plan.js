mui.init({
	swipeBack: true
	//beforeback: saveDeliveryOrder
});



mui.plusReady(function() {
	
	document.querySelector('input[type=search]').addEventListener("keydown", function(e) {
		 if(13 == e.keyCode){
            //点击了“搜索” 
            document.querySelector('#content').innerHTML = '<li class="mui-table-view-cell">' + '没有搜索结果' + '</li>';
        }
	});
	
	// json数据
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
		        "date":"2010-01-02",      //业务日期
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
		        "date":"2011-01-01",      //业务日期
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
		        "date":"2012-01-01",      //业务日期
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
		        "date":"2013-01-01",      //业务日期
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
		        "date":"2014-01-01",      //业务日期
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
		li.id = jsonData.data.Rows[i].id;
		
		
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
	
	mui(".mui-table-view").on('tap', '.mui-table-view-cell', function() {
		//saveDeliveryOrder(id);
		console.log("tap");
		// 前画面
		var new_delivery = plus.webview.currentWebview().opener();
		// 参数
		var data = {id: this.id};
		// 出发前画面
		mui.fire(new_delivery, "reloadDeliveryPlan", data);
		// 返回
		mui.back();
	});
	
	
	
	
	mui("#offCanvasContentScroll").scroll({bounce:false});
});


//function search() {
//	document.querySelector('#content').innerHTML = '没有搜索结果';
//}
// 返回选中的单子
//function saveDeliveryOrder(id) {
//	// 前画面
//	var new_delivery = plus.webview.currentWebview().opener();
//	//var new_delivery = plus.webview.getWebviewById('new_delivery');
//	// 参数
//	//console.log(id);
//	var data = {id: 1};
//	
//	mui.fire(new_delivery, "reloadPrevious", data);
//}
