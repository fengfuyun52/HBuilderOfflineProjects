
mui.init();

mui.plusReady(function() {
	var webview = plus.webview.currentWebview();
	var priceId = webview.priceId;
	//console.log(priceId);
	if(priceId) {
		document.getElementById('' + priceId).classList.add('mui-selected');
	}

	mui('.mui-table-view').on('tap', '.mui-table-view-cell', function() {
		var param = {};
		param.priceId = this.id;
		param.price = this.querySelector('.mui-pull-right').innerText;
		//console.log(param.price);
		mui.fire(plus.webview.currentWebview().opener(), 'priceChosed', param);
		mui.back();
	});
});
