mui.init({
	subpages: [{
		url:'choose_products_sub.html',
		id:'choose_products_sub',
		styles:{
			top: '86px',
			bottom: '44px'
		}
	}]
});

var count = 0;

mui.plusReady(function() {
	//console.log(1);
	//mui('.mui-scroll-wrapper').scroll({bounce});
	// 底部选择了几种实时监听
	window.addEventListener('reloadFooter', function(e) {
		document.querySelector('.mui-bar-footer>.mui-title').innerText = '确认选择(' + e.detail.count + '种)';
		count = e.detail.count;
	});
	
	// 确认选择
	document.querySelector('.mui-bar-footer').addEventListener('tap', function() {
		// console.log(1);
		mui.fire(plus.webview.currentWebview().children()[0], 'toGetChosenOnes', {});
		//console.log("2");
//		var opener = plus.webview.currentWebview().opener();
//		var data = {};
//		data.products = [];
//		for(var i = 0; i < count; i++) {
//			data.products.push();
//		}
	});
	
	// 
	window.addEventListener('getChosenOnes', function(e) {
		//var rows = e.detail;
		//alert(JSON.stringify(products));
		mui.fire(plus.webview.currentWebview().opener(), 'reloadProducts', e.detail);
		mui.back();
//		mui.openWindow({
//			url: 'new_delivery.html',
//			id: ''
//		});
	});
	
	document.querySelector('.mui-icon.mui-icon-bars.mui-pull-right').addEventListener('tap', function() {
		mui.openWindow({
			url: 'products_category.html',
			id: 'products_category',
		});
	});
});
