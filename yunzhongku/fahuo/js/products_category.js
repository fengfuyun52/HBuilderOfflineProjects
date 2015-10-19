mui.init();



mui.plusReady(function() {
	mui('.mui-table-view').on('tap', '.mui-table-view-cell', function(){
		console.log(this.id);
		var chooseProducts = plus.webview.currentWebview().opener().children()[0];
		mui.fire(chooseProducts, 'choosed', {category: this.id});
		mui.back();
	});
});
