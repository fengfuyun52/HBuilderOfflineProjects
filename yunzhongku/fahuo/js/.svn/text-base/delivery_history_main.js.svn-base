
var main, menu, mask = mui.createMask(_closeMenu);
var showMenu = false;
	//mode = 'all-move';

mui.init({
	swipeBack: false,
	beforeback: back,
	subpages:[{
		url:'delivery_history_sub.html',
		id:'delivery_history_sub',
		styles:{
			top: '86px',
			bottom: '0px'
		}
	}]
});

function back() {
	if (showMenu) {
		//菜单处于显示状态，返回键应该先关闭菜单,阻止主窗口执行mui.back逻辑；
		closeMenu();
		return false;
	} else {
		//菜单处于隐藏状态，执行返回时，要先close菜单页面，然后继续执行mui.back逻辑关闭主窗口；
		menu.close('none');
		return true;
	}
}


//plusReady事件后，自动创建menu窗口；
mui.plusReady(function() {
	main = plus.webview.currentWebview();
	//setTimeout的目的是等待窗体动画结束后，再执行create webview操作，避免资源竞争，导致窗口动画不流畅；
	setTimeout(function () {
		menu = mui.preload({
			url: 'fliter_menu.html',
			id: 'fliter_menu',
			styles: {
				left: "30%",
				width: '70%',
				zindex: 9997
			}
		});
	},300);
	
	// 搜索按钮
	document.querySelector('input[type=search]').addEventListener("keydown", function(e) {
		 if(13 == e.keyCode){
            //点击了“搜索” 
            mui.fire(plus.webview.currentWebview().children()[0], 'searchDelivery', {value: document.querySelector('input[type=search]').value});
            //document.querySelector('#content').innerHTML = '<li class="mui-table-view-cell">' + '没有搜索结果' + '</li>';
        }
	});
	
});

/*
 * 显示菜单
 */
function openFliterMenu(){
	if (!showMenu) {
		//解决android 4.4以下版本webview移动时，导致fixed定位元素错乱的bug;
		if (mui.os.android && parseFloat(mui.os.version) < 4.4) {
			document.querySelector("header.mui-bar").style.position = "static";
			//同时需要修改以下.mui-contnt的padding-top，否则会多出空白；
			document.querySelector(".mui-bar-nav~.mui-content").style.paddingTop = "0px";
		}
		
		//侧滑菜单处于隐藏状态，则立即显示出来；
		//显示完毕后，根据不同动画效果移动窗体；
		menu.show('none', 0, function() {
			main.setStyle({
				left: '-70%',
				transition: {
					duration: 800
				}
			});
			menu.setStyle({
				left: '30%',
				transition: {
					duration: 300
				}
			});
		});

		//侧滑菜单处于隐藏状态，则立即显示出来；
		//显示完毕后，根据不同动画效果移动窗体；
		menu.show('none', 0, function() {
			
					main.setStyle({
						left: '-70%',
						transition: {
							duration: 800
						}
					});
					menu.setStyle({
						left: '30%',
						transition: {
							duration: 300
						}
					});
		});
		//显示主窗体遮罩
		mask.show();
		showMenu = true;
	}
}

function closeMenu () {
	
	//窗体移动
	_closeMenu();
	//关闭遮罩
	mask.close();
}

/**
 * 关闭侧滑菜单(业务部分)
 */
function _closeMenu() {
	if (showMenu) {
		//解决android 4.4以下版本webview移动时，导致fixed定位元素错乱的bug;
		if (mui.os.android && parseFloat(mui.os.version) < 4.4) {
			document.querySelector("header.mui-bar").style.position = "fixed";
			//同时需要修改以下.mui-contnt的padding-top，否则会多出空白；
			document.querySelector(".mui-bar-nav~.mui-content").style.paddingTop = "44px";
		}
		//主窗体开始侧滑；
		main.setStyle({
			left: '0',
			transition: {
				duration: 300
			}
		});
		//menu页面同时移动
		menu.setStyle({
			left: '100%',
			transition: {
				duration: 300
			}
		});
	//等窗体动画结束后，隐藏菜单webview，节省资源；
	setTimeout(function() {
		menu.hide();
	}, 300);
	showMenu = false;
	// 关闭子页面遮罩
	mui.fire(plus.webview.currentWebview().children()[0], 'maskClose', {});
	}
}


//点击图标的右滑监听
document.querySelector("#offCanvasBtn").addEventListener('tap', function() {
	//if(!showMenu) {
		// 先遮子页面
		mui.fire(plus.webview.currentWebview().children()[0], 'maskshow', {});
		// 再打开菜单
		openFliterMenu();
	//}
	//else {
	//	closeMenu();
	//}
});
//在android4.4中的swipe事件，需要preventDefault一下，否则触发不正常
//故，在dragleft，dragright中preventDefault
window.addEventListener('dragright', function(e) {
	e.detail.gesture.preventDefault();
});
window.addEventListener('dragleft', function(e) {
	e.detail.gesture.preventDefault();
});
//主界面向左滑动，若菜单未显示，则显示菜单；否则不做任何操作；
window.addEventListener("swipeleft", openFliterMenu);
 //主界面向右滑动，若菜单已显示，则关闭菜单；否则，不做任何操作；
window.addEventListener("swiperight", closeMenu);//function() {
	// 先关子页面遮罩 
	//mui.fire(plus.webview.currentWebview().children()[0], 'maskclose', {});
	//closeMenu();
//});
 //menu页面向右滑动，关闭菜单；
window.addEventListener("menu:swiperight", closeMenu);

// 子页面返回
window.addEventListener('menuClose', closeMenu);
	
// 新增出货单
document.querySelector("#addNewOrder").addEventListener('tap', function() {
	mui.openWindow({
		url: "new_delivery.html",
		id: "new_delivery"
	});
});

//重写mui.menu方法，Android版本menu按键按下可自动打开、关闭侧滑菜单；
mui.menu = function() {
	if (showMenu) {
		closeMenu();
	} else {
		openFliterMenu();
	}
}
