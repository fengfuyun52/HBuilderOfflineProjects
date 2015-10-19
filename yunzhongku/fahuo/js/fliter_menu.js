//关闭back、menu按键监听，这样侧滑主界面会自动获得back和memu的按键事件，仅在主界面处理按键逻辑即可；
mui.init({
	keyEventBind: {
		backbutton: false,
		menubutton: false
	}
});


var main = null;
mui.plusReady(function () {
	main = plus.webview.currentWebview().opener();
	// 点击筛选,关闭侧滑菜单
	document.querySelector('.mui-pull-right.font-blue.ver-center').addEventListener('tap', closeMenu);
	
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
				clintId: this.childNodes[1].name
			}
		});
	});

	// 返回仓库
	window.addEventListener('selectClient', function(e) {
		console.log(JSON.stringify(e.detail));
		// 经手人id
		var storageId = e.detail.storageId;
		// 经手人姓名
		var storageName = e.detail.storageName;

		var operatorLi = document.querySelector('#warehouse');
		// 设经手人
		operatorLi.innerText = clientName;
		// 设经手人id
		operatorLi.name = clientId;
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
		//closeMenu();
	});
	
	// 返回经手人
	window.addEventListener('selectBrocker', function(e) {
		openMenu();
		var param = JSON.parse(e.detail);
		console.log(e.detail);
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
		if(!document.querySelector('#switch').classList.contains('mui-active')) {
			mui('#switch').switch().toggle();
		}
		//console.log(list.length);
		for(var i = 0; i < 4; i++) {
			list[i].childNodes[1].innerText = null;
			//console.log(list[i].innerHTML);
 		}
	});
});

function closeMenu () {
	mui.fire(main,"menu:swiperight");
	//document.querySelector(".mui-bar-nav~.mui-content").style.paddingTop = "0px";
}

function openMenu() {
	mui.fire(main,"swipeleft");
}
//左滑显示出来的菜单，只需监听右滑，然后将菜单关闭即可；在该菜单上左滑，不做任何操作；
window.addEventListener("swiperight",closeMenu);

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
	}, function(e) {
		info.innerText = "您没有选择日期";
	}, {
		title: "请选择日期",
		date: dDate,
		minDate: minDate,
		maxDate: maxDate
	});
}



//alert(mui("#offCanvasSideScroll"));
//mui('#offCanvasSideScroll').scroll();
//mui('#offCanvasSideScroll').scroll();
		//mui('#offCanvasContentScroll').scroll();
//document.getElementById("close-btn").addEventListener('tap',closeMenu);