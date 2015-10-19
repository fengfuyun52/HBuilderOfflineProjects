// 选择状态
var relativeOn = true;  

mui.init({
	swipeBack: true, // 右滑关闭
	gestureConfig: {
	   tap: true, //默认为true
	   doubletap: true, //默认为false
	   longtap: true, //默认为false
	   swipe: true, //默认为true
	   drag: true, //默认为true
	   hold:true,//默认为false，不监听
	   release:true//默认为false，不监听
	}
});


mui.plusReady(function() {
	// 商品种类数
	var productTypes = 0;
	// 修改商品id
	var pid;
	
	// 关联发货计划
	var sliderSwitch = document.querySelector("#sliderSwitch");
	
	
	// 滑块监听事件
	sliderSwitch.addEventListener('toggle', function(event) {
		// 滑动结束后状态开启
		if(!event.detail.isActive) {
			// 显示关联发货计划off的画面
			relativeOn = false;
			document.querySelector("#chooseOrderPlanUL").classList.add("mui-hidden");
			
			document.querySelector('#orderMainInfo').classList.remove('mui-hidden');
			
			document.querySelector('#chooseProducts').classList.remove('mui-hidden');
			
		}
		else {
			relativeOn = true;
			document.querySelector("#chooseOrderPlanUL").classList.remove("mui-hidden");
			document.querySelector('#orderMainInfo').classList.add('mui-hidden');
			document.querySelector('#chooseProducts').classList.add('mui-hidden');
		}
	});
	
	// 选择发货计划
	var chooseOrderPlan = document.querySelector("#chooseOrderPlan");
 	
	// 点击“选择发货计划”监听
	chooseOrderPlan.addEventListener('tap', function() {
		this.innerText = '重新选择出库订单';
		chooseDeliveryPlan();
	});
	
	//监听所选单号
	window.addEventListener("reloadDeliveryPlan", function(e) {
		// 通过id从后台取
		var id = e.detail.id;
		// post传递
		// ...............
		document.querySelector('#products').innerHTML = '';
		// json数据
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
			        "logistics":"顺风快递" ,     //物流公司
			        "logisticsNo":"01664654715245",      //物流单号     
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
			}
			// 单号
			document.querySelector('#no').innerText = jsonData.data.no;
			// 仓库
			document.querySelector('#warehouse').innerText = jsonData.data.warehouse;
			// 客户
			document.querySelector('#customer').innerText = jsonData.data.customer;
			// 出货单信息
			var products = document.querySelector('#products');
			
			var liDivider = document.createElement('li');
			liDivider.className = 'mui-table-view-divider';
			products.appendChild(liDivider);
			//console.log(jsonData.data.Rows.length);
			// 循环产品
			for(var i = 0; i < jsonData.data.Rows.length; i++) {
				var li = document.createElement('li');
				li.className = 'mui-table-view-cell';
				li.id = jsonData.data.Rows[i].id;
				var html;
				html = 	'<label class="mui-media mui-input-row mui-checkbox mui-left">';
				html += 	'<div class="mui-media-body">';
				html +=     	'<span class="mui-media-object mui-pull-right mui-navigate-right"></span>';
				html +=			'<span>' + jsonData.data.Rows[i].name + '</span>';
				html +=			'<p class="mui-ellipsis">*' + jsonData.data.Rows[i].num + jsonData.data.Rows[i].unit +'</p>';
				html += 	'</div>';
				html += '</label>';
				
				li.innerHTML = html;
				
				products.appendChild(li);
			}
			
			
			// 业务日期
			document.querySelector('#date').innerText = jsonData.data.date;
			// 经手人
			document.querySelector('#operator').innerText = jsonData.data.operator;
			// 物流公司
			document.querySelector('#logistics').innerText = jsonData.data.logistics;
			// 物流单号
			document.querySelector('#logisticsNo').placeholder = jsonData.data.logisticsNo;
			// 备注
			document.querySelector('#remark').placeholder = jsonData.data.remark;
			
			// 
			document.querySelector('#orderMainInfo').classList.remove('mui-hidden');
			
			// 
			document.querySelector('#relatedDeliveryNo').classList.remove('mui-hidden');
			
			// 
			document.querySelector('#products').classList.remove('mui-hidden');
			
			// 
			document.querySelector('#orderMinorInfo').classList.remove('mui-hidden');
			
			//
			document.querySelector('#relateSwitch').classList.add('mui-hidden');
			
			document.querySelector("#save").classList.remove("mui-hidden");
	});
	
	/**
	 * 
	 */
	// 点击选择客户
	document.querySelector('#customerLi').addEventListener('tap', function() {
		mui.openWindow({
			url: '../modules/delivergood-selectclient.html',
			id: 'delivergood-selectclient',
			extras: {
				clientId: this.childNodes[2].name
			}
		});
	});

	// 返回客户
	window.addEventListener('selectClient', function(e) {
		console.log(typeof e.detail);
		// 经手人id
		var param = JSON.parse(e.detail);
		var clientId = param.clientId;
		
		// 经手人姓名
		var clientName = param.clientName;
		console.log(clientName);

		var customer = document.querySelector('#customer');
		// 设经手人
		customer.innerText = clientName;
		// 设经手人id
		customer.name = clientId;
	});
	
	// 选择仓库
	document.querySelector('#warehouseLi').addEventListener('tap', function() {
		mui.openWindow({
			url: '../modules/delivergood-selectdeliverstorage.html',
			id: 'delivergood-selectdeliverstorage',
			extras: {
				storageId: this.childNodes[2].name
			}
		});
	});

	// 返回仓库
	window.addEventListener('selectWarehouse', function(e) {
		console.log(JSON.stringify(e.detail));
		var param = JSON.parse(e.detail);
		// 经手人id
		var storageId = param.storageId;
		//console.log();
		// 经手人姓名
		var storageName = param.storageName;

		var warehouse = document.querySelector('#warehouse');
		// 设经手人
		warehouse.innerText = storageName;
		// 设经手人id
		warehouse.name = storageId;
	});

	// 选择日期
	document.querySelector('#date').parentNode.addEventListener('tap', function() {
		chooseDate();
	});
	
	// 选择商品点击
	//
	var chooseProducts = document.querySelector('#chooseProducts');
	chooseProducts.addEventListener('tap', function() {
		mui.openWindow({
			url: 'choose_products.html',
			id: 'choose_products'
		});
	});
	
	
	
	// 未关联商品选择监听
	window.addEventListener('reloadProducts', function(e) {
		var JSONproducts = e.detail;
		// 出货单商品
		var products = document.querySelector('#products');
		
		
		if(!productTypes) {
			var liDivider = document.createElement('li');
			liDivider.className = 'mui-table-view-divider';
			products.appendChild(liDivider);
		}
		//console.log(JSONproducts.rows.length);
		// 循环产品
		for(var i = 0; i < JSONproducts.rows.length; i++) {
			var li = document.createElement('li');
			li.className = 'mui-table-view-cell';
			li.id = JSONproducts.rows[i].id;
			var html;
			html = 	'<label class="mui-media mui-input-row mui-checkbox mui-left">';
			html += 	'<div class="mui-media-body">';
			html +=     	'<span class="mui-media-object mui-pull-right mui-navigate-right"></span>';
			html +=			'<span>' + JSONproducts.rows[i].name + '</span>';
			html +=			'<p class="mui-ellipsis">*' + JSONproducts.rows[i].pickCount +'</p>';
			html += 	'</div>';
			html += '</label>';
			
			li.innerHTML = html;
			
			products.appendChild(li);
			
			
			productTypes++;
		}
		
		
		// 
		document.querySelector('#orderMainInfo').classList.remove('mui-hidden');
		
		// 
		document.querySelector('#relatedDeliveryNo').classList.remove('mui-hidden');
		
		// 
		document.querySelector('#products').classList.remove('mui-hidden');
		
		// 
		document.querySelector('#orderMinorInfo').classList.remove('mui-hidden');
		
		//
		document.querySelector('#relateSwitch').classList.add('mui-hidden');
		
		document.querySelector("#save").classList.remove("mui-hidden");
		
	});
	
	// 点击修改商品
	mui('#products').on('tap', '.mui-table-view-cell', function() {
		pid = this.id;
		mui.openWindow({
			url: 'change_products.html',
			id: 'change_products',
			extras: {
				pid: this.id,
				productTypes: productTypes
			}
		});
	});
	
	// 修改商品
	window.addEventListener('changeProducts', function(e) {
		console.log(pid);
		//console.log();//
		document.getElementById(pid).childNodes[0].childNodes[0].childNodes[2].innerText = '*' + e.detail.num;
	});
	
	// 点击经手人
	document.querySelector('#operatorLi').addEventListener('tap', function() {
		// 已选择经手人id
		//var brokerId = this.childNodes[2].id;
		//console.log(brokerId);
		mui.openWindow({
			url: '../modules/out-handled-list.html',
			id: 'out-handled-list',
			extras: {
				brokerId: this.childNodes[2].name // 已选择经手人id
			}
		});
	});
	
	// 返回经手人
	window.addEventListener('selectBrocker', function(e) {
		console.log();
		var param = JSON.parse(e.detail);
		// 经手人id
		var brokerId = param.brokerId;
		// 经手人姓名
		var brokerName = param.brokerName;
		//console.log(brokerId);
		var operatorLi = document.querySelector('#operator');
		// 设经手人
		operatorLi.innerText = brokerName;
		// 设经手人id
		operatorLi.name = brokerId;
	});
	
	// 点击物流公司
	document.querySelector('#logisticsLi').addEventListener('tap', function() {
		mui.openWindow({
			url: '../modules/out-logistics-companys.html',
			id:	'out-logistics-companys',
			extras: {
				logisticsId: this.childNodes[2].name
			}
			
		});
	});
	
	// 返回物流公司
	window.addEventListener('selectLogistics', function(e) {
		var logisticsName = e.detail.logisticsName;
		var logisticsId = e.detail.logisticsId;
		
		var logisticsLi = document.querySelector('#logistics');
		logisticsLi.innerText = logisticsName;
		logisticsLi.name = logisticsId;
	});
		
	// 删除商品
	window.addEventListener('deleteProducts', function(e) {
		document.querySelector('#products').removeChild(document.getElementById(pid));
		if(e.detail.productTypes === 0){	
			document.querySelector('#products').classList.add('mui-hidden');
			document.querySelector('#orderMinorInfo').classList.add('mui-hidden');
			document.querySelector('#save').classList.add('mui-hidden');
		}
	});
	
	mui('#initial').scroll({bounce : false});
	
	
	// 点击保存
	document.querySelector('#save').addEventListener('tap', function() {
		var param;
		var webview = plus.webview.currentWebview().opener();
//		webviewP.reload();
//		var webviewC = webviewP.children()[0];
//		webviewC.reload();
		//mui.fire(webview, 'refresh', {});
		mui.back();
		if(relativeOn) {
			// if(document.querySelector)
			// mui.toast('haha');
			var date = new Date();
			param = {};
			param.data = {};
			param.data.no = '' + date.getFullYear() + date.getMonth() + date.getDate() + date.getHours() + date.getMinutes() + date.getSeconds();
			param.data.warehouse = document.querySelector('#warehouse').innerText;
			param.data.customer = document.querySelector('#customer').innerText;
			param.data.operator = document.querySelector('#operator').innerText;
			param.data.date = document.querySelector('#date').innerText;
			param.data.logistics = document.querySelector('#logistics').innerText;
			param.data.logisticsNo = document.querySelector('#logisticsNo').value;
			param.data.Rows = [];
			// 暂时
			for(var i = 0; i < 2; i++) {
				param.data.Rows.push({});
				param.data.Rows[i].id = "1";
				param.data.Rows[i].name = "溢流阀";
				param.data.Rows[i].num = "2";
				param.data.Rows[i].unit = "个";
			}
//			var jsonData =
//				{
//				    "res": "0",     //0-成功1-失败
//				    "data": {
//				        "no":"FHD20150629001",//单号
//				        "warehouse":"默认仓库",    //出库仓库
//				        "customer":"中联重科",    //客户
//				        "operator":"张三" ,     //经手人
//				        "date":"2015-01-01",      //业务日期
//				        "totalPrice":"500.00",      //总计
//				        "remark":"250.00",      //备注 
//				        "maker":"admin",      //制单人
//				        "makeDate":"2015-01-01 12:00:00",      //制单日期
//				        "returnStatus":"0",      //退货状态
//				        "logistics":"个" ,     //物流公司
//				        "logisticsNo":"0",      //物流单号     
//				        "Rows":[{
//			                        "id":"1",
//			                        "name":"溢流阀",      //商品名称
//			                        "inputPrice":"250",      //发货价
//			                        "num":"2" ,     //数量
//			                        "unit":"个"      //单位
//			                	},
//			                	{
//			                		"id":"1",
//			                        "name":"喷嘴",     //商品名称
//			                        "inputPrice":"250",      //发货价
//			                        "num":"2" ,     //数量
//			                        "unit":"个"      //单位
//			                	}]    //商品列表
//				    },   
//				    "msg": ""        
//				}
		}
		else {
			var date = new Date();
			param = {};
			param.data = {};
			param.data.no = '' + date.getFullYear() + date.getMonth() + date.getDate() + date.getHours() + date.getMinutes() + date.getSeconds();
			param.data.warehouse = document.querySelector('#warehouse').innerText;
			param.data.customer = document.querySelector('#customer').innerText;
			param.data.operator = document.querySelector('#operator').innerText;
			param.data.date = document.querySelector('#date').innerText;
			param.data.logistics = document.querySelector('#logistics').innerText;
			param.data.logisticsNo = document.querySelector('#logisticsNo').value;
			param.data.Rows = [];
			// 暂时
			for(var i = 0; i < 2; i++) {
				param.data.Rows.push({});
				param.data.Rows[i].id = "1";
				param.data.Rows[i].name = "溢流阀";
				param.data.Rows[i].num = "2";
				param.data.Rows[i].unit = "个";
			}
		}
	});
	
});

// 选择发货计划
function chooseDeliveryPlan() {
	mui.openWindow({
		url: 'choose_delivery_plan.html',
		id: "choose_delivery_plan"
	});
}

// 插入的方法
function insertAfter(newElement, targetElement) { 
    var parent = targetElement.parentNode; 
    if(parent.lastChild == targetElement) { 
        parent.appendChild(newElement);
    } 
    else {
        parent.insertBefore(newElement, targetElement.nextSibling); 
    } 
}

// 日期选择
function chooseDate() {
	var dDate = new Date();
	dDate.setFullYear(dDate.getFullYear(), dDate.getMonth(), dDate.getDate());
	var minDate = new Date();
	minDate.setFullYear(1970, 0, 1);
	var maxDate = new Date();
	maxDate.setFullYear(2070, 11, 31);
	plus.nativeUI.pickDate(function(e) {
		var d = e.date;
		document.querySelector('#date').innerText = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
	}, function(e) {
		info.innerText = "您没有选择日期";
	}, {
		title: "请选择日期",
		date: dDate,
		minDate: minDate,
		maxDate: maxDate
	});
}
