// 选中商品几种
var count = 0;

mui.init({
	pullRefresh : {
  		container:'.mui-scroll-wrapper',//下拉刷新容器标识，querySelector能定位的css选择器均可，比如：id、.class等
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

mui.plusReady(function() {
	console.log(plus.navigator.getUserAgent());
});

function pullfresh() {
	//console.log("123");
    //业务逻辑代码，比如通过ajax从服务器获取新数据；
    //......
    //注意，加载完新数据后，必须执行如下代码，注意：若为ajax请求，则需将如下代码放置在处理完ajax响应数据之后
    setTimeout(function() {
    	// 
		mui('.mui-scroll-wrapper').pullRefresh().endPulldownToRefresh();
	}, 1500);
    
}

function pullLoad() {
	setTimeout(function() {
		// console.log("in");
		mui('.mui-scroll-wrapper').pullRefresh().endPullupToRefresh(true); //参数为true代表没有更多数据了。
	}, 1500);
}

//商品
var jsonData = 
				{
				    "res": "0",     //0-成功1-失败2-搜索不到
				   "data": {
				        "Rows":[{
                                "id":"1",
                                "name":"溢流阀",
                                "spec":"IU87",              //规格
                                "code":"12C2004",    //商品编号
                                "atts":"12C2004",      //属性
                                "purchasePrice":"250.00",      //进货参考价
                                "num":"8",      //库存数量
                                "img":"../images/product_detail_u19.png"      //图片地址 
                        },
                        {
                        		"id":"2",
                                "name":"喷嘴",
                                "spec":"IU87",              //规格
                                "code":"12C2004",    //商品编号
                                "atts":"12C2004",      //属性
                                "purchasePrice":"250.00",      //进货参考价
                                "num":"12",      //库存数量
                                "img":"../images/product_detail_u19.png"
                        },
                        {
                        		"id":"3",
                                "name":"法兰",
                                "spec":"IU87",              //规格
                                "code":"12C2004",    //商品编号
                                "atts":"12C2004",      //属性
                                "purchasePrice":"250.00",      //进货参考价
                                "num":"15",      //库存数量
                                "img":"../images/product_detail_u19.png"
                        },
                        {
                        		"id":"4",
                                "name":"螺栓",
                                "spec":"IU87",              //规格
                                "code":"12C2004",    //商品编号
                                "atts":"12C2004",      //属性
                                "purchasePrice":"250.00",      //进货参考价
                                "num":"100",      //库存数量
                                "img":"../images/product_detail_u19.png"
                        },
				        {
                        		"id":"5",
                                "name":"螺母",
                                "spec":"IU87",              //规格
                                "code":"12C2004",    //商品编号
                                "atts":"12C2004",      //属性
                                "purchasePrice":"250.00",      //进货参考价
                                "num":"250",      //库存数量
                                "img":"../images/product_detail_u19.png"
                        }]
				    },   
				    "msg": ""          
				};

// ul标签
var ul = document.querySelector('.mui-table-view');
//console.log(ul);

// 一条一条加入ul
for(var i = 0; i < jsonData.data.Rows.length; i++) {
	var li = document.createElement('li');
	li.className = 'mui-table-view-cell';
	li.id = jsonData.data.Rows[i].id;
	var html;
	html = 			'<label class = "mui-media mui-input-row mui-checkbox mui-right">';
	html += 			'<span><input name="checkbox" type="checkbox"></span>';
	html += 			'<img id="img" class="mui-media-object mui-pull-left triple-size" src="' + jsonData.data.Rows[i].img + '">';
	html += 			'<div class="mui-media-body">';
	html +=					'<p class="mui-ellipsis">' + jsonData.data.Rows[i].name + '</p>';
	html +=					'<p class="mui-ellipsis">规格：' + jsonData.data.Rows[i].spec + '</p>';
	html +=					'<p class="mui-ellipsis">属性：' + jsonData.data.Rows[i].atts + '</p>';
	html +=					'<p class="mui-ellipsis">编号：' + jsonData.data.Rows[i].code + '</p>';
	html +=					'<p class="mui-ellipsis">备注： 无</p>';
	html +=					'<p class="mui-ellipsis">库存数量：' + jsonData.data.Rows[i].num + '</p>';
	html +=				'</div>';
	html +=			'</label>';
	
	li.innerHTML = html;
	/*没选中不显示,选中才显示的内容*/
	// 单位
	var liUnit = document.createElement('li');
	liUnit.className = 'mui-table-view-cell mui-hidden';
	var htmlUnit;
	htmlUnit = 		'<span>单位</span>';
	htmlUnit +=		'<span class="mui-pull-right mui-navigate-right"></span>';
	htmlUnit +=		'<span class="mui-pull-right right-words">部</span>';
	liUnit.innerHTML = htmlUnit;
	
	// 单价
	var liPrice = document.createElement('li');
	liPrice.className = 'mui-table-view-cell mui-hidden';
	var htmlPrice = '<span>单价</span>';
	htmlPrice += 	'<span class="mui-pull-right mui-navigate-right"></span>';
	htmlPrice +=	'<span id="tradePrice" class="mui-pull-right right-words"></span>';
	liPrice.innerHTML = htmlPrice;
	
	// 数量
	var liNum = document.createElement('li');
	liNum.className = 'mui-table-view-cell mui-hidden';
	var htmlNum;
	htmlNum = 		'<div class="mui-input-row">';
	htmlNum += 			'<label>数量</label>';
	htmlNum +=			'<div class="mui-numbox mui-pull-right"  data-numbox-min=\'1\' data-numbox-max=' + jsonData.data.Rows[i].num + '>';
	htmlNum +=				'<button class="mui-btn mui-numbox-btn-minus" type="button">-</button>';
	htmlNum +=				'<input class="mui-numbox-input" type="number" />';
	htmlNum +=				'<button class="mui-btn mui-numbox-btn-plus" type="button">+</button>';
	htmlNum += 			'</div>';
	htmlNum +=		'</div>';
	liNum.innerHTML = htmlNum;
	
	ul.appendChild(li);
	ul.appendChild(liUnit);
	ul.appendChild(liPrice);
	ul.appendChild(liNum);
}

// 点击li监听事件
mui('.mui-table-view').on('tap', '.mui-table-view-cell>label', function() {
	// 是否选中
	//console.log(this.childNodes[0].childNodes[0].checked);
	//console.log(this.childNodes[0].childNodes[0].childNodes[0].checked);
	if(!this.childNodes[0].childNodes[0].checked) {
		this.parentNode.nextSibling.classList.remove('mui-hidden');
		this.parentNode.nextSibling.nextSibling.classList.remove('mui-hidden');
		this.parentNode.nextSibling.nextSibling.nextSibling.classList.remove('mui-hidden');
		count++;
	}
	else {
		this.parentNode.nextSibling.classList.add('mui-hidden');
		this.parentNode.nextSibling.nextSibling.classList.add('mui-hidden');
		this.parentNode.nextSibling.nextSibling.nextSibling.classList.add('mui-hidden');
		count--;
	}
	var parent = plus.webview.currentWebview().parent();
	data = {count: count};
	mui.fire(parent, "reloadFooter", data);
});

// 获取选中商品
window.addEventListener('toGetChosenOnes', function() {
	var list = document.querySelectorAll('.mui-table-view>.mui-table-view-cell>label');
	//console.log(list.length);
	var products = {};
	//products.data = {};
	products.rows = [];
	index = 0;
	for(var i = 0; i < list.length; i++) {
		//console.log(list[i].childNodes[0].childNodes[0].checked);
		if(list[i].childNodes[0].childNodes[0].checked) {
			products.rows.push({});
			// 商品id
			products.rows[index].id = list[i].parentNode.id;
			//console.log(list[i].childNodes[2].childNodes[0].innerText);
			// 商品名称
			products.rows[index].name = list[i].childNodes[2].childNodes[0].innerText;
			// 商品提取数量(不是库存数量)
			//console.log(list[i].parentNode.nextSibling.nextSibling.nextSibling.childNodes[0].childNodes[1].childNodes[1].value);
			products.rows[index].pickCount = list[i].parentNode.nextSibling.nextSibling.nextSibling.childNodes[0].childNodes[1].childNodes[1].value;
			index++;
		}
	}
	var parent = plus.webview.currentWebview().parent();
	mui.fire(parent, 'getChosenOnes', products); 
	//alert(JSON.stringify(products));
});

window.addEventListener('choosed', function(e) {
	console.log('choosed');
	if(e.detail.category !== 'all') {
		ul.innerHTML = '<li class="mui-mui-table-view-cell">' + '当前没有数据' + '</li>'
	}
});


// 点击分类
//mui('.mui-icon-bars').addEventListener('tap', function() {
//	mui.openWindow({
//		url: 'products_category.html',
//		id: 'products_category'
//	});
//});

