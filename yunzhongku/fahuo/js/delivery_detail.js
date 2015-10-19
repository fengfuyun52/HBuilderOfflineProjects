(function($) {
	$.init();
	
	mui.plusReady(function(){
		
		// webview 对象
    	var webview = plus.webview.currentWebview();
    	
    	// id
    	var id = webview.id;
    	
//		// 单号 
//		var no = webview.no;
//		// 出库仓库
//		var warehouse = webview.warehouse;
//		// 客户
//		var customer = webview.customer;
//		// 出库商品
//		var rows = webview.rows;
//		// 业务日期
//		var bussinessDate = webview.bussinessDate;
//		// 经手人
//		var operator = webview.operator;
//		// 备注
//		var remark = webview.remark;
//		// 制单人
//		var maker = webview.maker;
//		// 制单日期
//		var makeDate = webview.makeDate;
		
		var jsonData =
		{
		    "res": "0",     //0-成功1-失败
		    "data": {
		        "no":"FHD20150629001",//单号
		        "warehouse":"默认仓库",    //出库仓库
		        "customer":"中联重科",    //客户
		        "operator":"张三" ,     //经手人
		        "date":"2015-01-01",      //业务日期
		        "totalPrice":"500.00",      //总计
		        "remark":"250.00",      //备注 
		        "maker":"admin",      //制单人
		        "makeDate":"2015-01-01 12:00:00",      //制单日期
		        "returnStatus":"0",      //退货状态
		        "logistics":"个" ,     //物流公司
		        "logisticsNo":"0",      //物流单号     
		        "Rows":[{
	                        "id":"1",
	                        "name":"溢流阀",      //商品名称
	                        "inputPrice":"250",      //发货价
	                        "num":"2" ,     //数量
	                        "unit":"个"      //单位
	                	},
	                	{
	                		"id":"1",
	                        "name":"喷嘴",     //商品名称
	                        "inputPrice":"250",      //发货价
	                        "num":"2" ,     //数量
	                        "unit":"个"      //单位
	                	}]    //商品列表
		    },   
		    "msg": ""        
		};
		
		
		var ul = document.querySelector(".mui-table-view");
	
		var html;
		html = 		'<li class="mui-table-view-cell">';
		html +=			'<span class="mui-pull-left">单号</span>'; 
		html +=			'<span class="mui-pull-right">' + jsonData.data.no + '</span>';
		html +=  	'</li>';
		html +=		'<li class="mui-table-view-cell">';
		html +=			'<span class="mui-pull-left">出库仓库</span>';
		html +=			'<span class="mui-pull-right">' + jsonData.data.warehouse + '</span>';
		html +=		'</li>';
		html +=		'<li class="mui-table-view-cell">';
		html +=			'<span class="mui-pull-left">客户</span>';
		html +=			'<span class="mui-pull-right">' + jsonData.data.customer + '</span>';
		html +=		'</li>';
		html +=		'<li class="mui-table-view-divider">出库商品</li>';
		// 出库商品有多个
		for(var i = 0; i < jsonData.data.Rows.length; i++) {
			html +=		'<li class = "mui-table-view-cell">';
			html +=			'<label class = "mui-media mui-input-row mui-checkbox mui-left">';
			html +=				'<div class="mui-media-body">';
			html +=					'<span class="mui-media-object mui-pull-right mui-navigate-right"></span>';
			html +=					'<span>' + jsonData.data.Rows[i].name + '</span>';
			html +=					'<p class = "mui-ellipsis">*' + jsonData.data.Rows[i].num + jsonData.data.Rows[i].unit + '</p>';
			html +=				'</div>';
			html +=			'</label>';
			html +=		'</li>';
		}
		html +=		'<li class="mui-table-view-divider"></li>';
		html +=		'<li class="mui-table-view-cell">';
		html +=			'<span class="mui-pull-left">业务日期</span>';
		html +=			'<span class="mui-pull-right">' + jsonData.data.date + '</span>';
		html +=		'</li>';
		html +=		'<li class="mui-table-view-cell">';
		html +=			'<span class="mui-pull-left">经手人</span>';
		html +=			'<span class="mui-pull-right">' + jsonData.data.operator + '</span>';
		html +=		'</li>';
		html +=		'<div class="mui-content-padded">';
		html +=			'<div class="mui-input-row">';
		html +=				'<textarea rows="5" placeholder="无" disabled="disabled">' + jsonData.data.remark + '</textarea>';
		html +=			'</div>';
		html +=		'</div>';
		html +=		'<li class="mui-table-view-divider"></li>';
		html +=		'<li class="mui-table-view-cell">';
		html +=			'<span class="mui-pull-left">制单人</span>';
		html +=			'<span class="mui-pull-right">' + jsonData.data.maker + '</span>';
		html +=		'</li>';
		html +=		'<li class="mui-table-view-cell">';
		html +=			'<span class="mui-pull-left">制单日期</span>';
		html +=			'<span class="mui-pull-right">' + jsonData.data.makeDate + '</span>';
		html +=		'</li>';
		ul.innerHTML = html;
	});
	
	// 拉动不弹跳
	mui(".mui-scroll-wrapper").scroll({bounce: false});
})(mui);
