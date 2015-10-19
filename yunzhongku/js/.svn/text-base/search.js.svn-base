
function selecttype(type) {

	var type = type;
	var id = document.getElementById("menu");
	var topPopover = document.getElementById("topPopover");
	switch (type) {
		case 1:
			id.innerHTML = "商品";
			mui('#topPopover').popover('hide');
			window.sessionStorage.setItem("type", "1")
			break;
		case 2:
			id.innerHTML = "单据";
			mui('#topPopover').popover('hide');
			window.sessionStorage.setItem("type", "2")
			break;
		case 3:
			id.innerHTML = "客户";
			mui('#topPopover').popover('hide');
			window.sessionStorage.setItem("type", "3")
			break;
		case 4:
			id.innerHTML = "供应商";
			mui('#topPopover').popover('hide');
			window.sessionStorage.setItem("type", "4")
			break;
	}


}

function search() {

	var a = window.sessionStorage.getItem("type");
	var id = parseInt(a);
	console.log("id:" + id);
	switch (id) {
		case 1:
			window.sessionStorage.clear();
			mui.openWindow({
				url: 'search_goods_list.html'
			})
			break;
		case 2:
			window.sessionStorage.clear();
			mui.openWindow({
				url: 'search_receipts_list.html'
			})
			break;
		case 3:
			window.sessionStorage.clear();
			mui.openWindow({
				url: 'search_client_list.html'
			})
			break;
		case 4:
			window.sessionStorage.clear();
			mui.openWindow({
				url: 'search_supplier_list.html'
			})
			break;
	}
}

