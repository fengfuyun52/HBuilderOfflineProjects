
mui.init({
	swipeBack: true
});


//商品
mui.plusReady(function() {
	// 取得前画面传值
	var webview = plus.webview.currentWebview();
	
	// 商品id
	var pid = webview.pid;
	//console.log(pid);
	// 前画面有几种商品
	var productTypes = webview.productTypes;
	
	// json数据
	var jsonData = 
				{
				   	"res": "0",     //0-成功1-失败
				   	"data": {
                    	"id":"1",
                        "name":"溢流阀",          //商品名称
                        "spec":"IU87",              //规格
                        "code":"12C2004",    //商品编号
                        "atts":"12C2004",      //属性
                        "purchasePrice":"250.00",      //进货参考价
                        "num":"250",      //库存数量
                        "img":"../images/product_detail_u19.png",      //图片地址
                        "retailPrice":"250",    //零售价
                       	"tradePrice":"250"    //批发价
				    },   
				    "msg": ""          
				};
				
	/*显示信息*/
	// 图片
	document.querySelector('#img').src = jsonData.data.img;
	// 商品名称
	document.querySelector('#name').innerText = jsonData.data.name;
	// 规格
	document.querySelector('#spec').innerText = jsonData.data.spec;
	// 属性
	document.querySelector('#atts').innerText = jsonData.data.atts;
	// 商品编号
	document.querySelector('#code').innerText = jsonData.data.code;
	// 库存数量
	document.querySelector('#num').innerText = jsonData.data.num;
	// 单价
	document.querySelector('#tradePrice').value = parseFloat(jsonData.data.tradePrice);

	// 修改价格
	document.querySelector('#toChoosePrice').addEventListener('tap', function() {
		mui.openWindow({
			url: 'choose_price.html',
			id: 'choose_price',
			extras: {
				priceId: this.name
			}
		});
	});
	
	//返回价格
	window.addEventListener('priceChosed', function(e) {
		document.querySelector('#tradePrice').value = e.detail.price;
		document.querySelector('#tradePrice').name = e.detail.priceId;
	});

	// 点击保存
	document.querySelector('#save').addEventListener('tap', function() {
		var num = document.querySelector('.mui-numbox-input').value;
		//console.log(num);
		mui.fire(plus.webview.currentWebview().opener(), 'changeProducts', {num: num});
		mui.back();
	});
	
	// 点击删除
	document.querySelector('.mui-table-view-cell.mui-text-center.red').addEventListener('tap', function() {
		mui.fire(plus.webview.currentWebview().opener(), 'deleteProducts', {productTypes: productTypes - 1});
		mui.back();
	});

});

				