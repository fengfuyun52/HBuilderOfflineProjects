	var menu = null,
		main = null;
	var showMenu = false;
	var subpages = ['modules/home.html', 'modules/stock.html', 'tab-webview-subpage-setting.html', 'modules/report-list.html'];
	var subpage_style = {
		top: '46px',
		bottom: '50px'
	};
	var aniShow = {};
	mui.init({
		swipeBack: false,
		statusBarBackground: '#f7f7f7',
		gestureConfig: {
			doubletap: true
		}
	});
	mui.plusReady(function() {
		//关闭等待框
		plus.nativeUI.closeWaiting();
		//仅支持竖屏显示
		plus.screen.lockOrientation("portrait-primary");
		main = plus.webview.currentWebview();
		// 显示当前页面
		main.show();
		// 创建子页面
		createSubPages();

		main.addEventListener('maskClick', closeMenu);
		// 处理侧滑导航，为了避免和子页面初始化等竞争资源，延迟加载侧滑页面；
		setTimeout(function() {
			menu = mui.preload({
				id: 'main_left_menu',
				url: 'main_left_menu.html',
				styles: {
					left: 0,
					width: '70%',
					zindex: -1
				},
				show: {
					aniShow: 'none'
				}
			});
		}, 200);
	});

	function createSubPages() {
		for (var i = 0; i < 4; i++) {
			var temp = {};
			var sub = plus.webview.create(subpages[i], subpages[i], subpage_style);
			if (i > 0) {
				sub.hide();
			} else {
				temp[subpages[i]] = "true";
				mui.extend(aniShow, temp);
			}
			main.append(sub);
		}
	};
	//当前激活选项
	var activeTab = subpages[0];
	var title = document.getElementById("title");
	//选项卡点击事件
	mui('.mui-bar-tab').on('tap', 'a', function(e) {
		var targetTab = this.getAttribute('href');
		if (targetTab == activeTab) {
			return;
		}


		//控制选项卡变色
		var current = document.querySelector(".mui-bar-tab>.mui-tab-item.mui-active");
		var currentspan = current.querySelector(".mui-icon");
		var currentClass = currentspan.getAttribute('class');
		currentspan.className = currentClass.substr(0, currentClass.length - 9)
		this.querySelector(".mui-icon").className = this.querySelector(".mui-icon").getAttribute('class') + "-selected";
		
		//更换标题
		//title.innerHTML = this.querySelector('.mui-tab-label').innerHTML;

		//显示目标选项卡
		if (mui.os.ios || aniShow[targetTab]) {
			plus.webview.show(targetTab);
		} else {
			var temp = {};
			temp[targetTab] = "true";
			mui.extend(aniShow, temp);
			plus.webview.show(targetTab, "fade-in", 300);
		}
		//隐藏当前;
		plus.webview.hide(activeTab);
		//更改当前活跃的选项卡
		activeTab = targetTab;
	});
	var isInTransition = false;
	/**
	 * 显示侧滑菜单
	 */
	function openMenu() {
		if (isInTransition) {
			return;
		}
		if (!showMenu) {
			//侧滑菜单处于隐藏状态，则立即显示出来；
			isInTransition = true;
			menu.setStyle({
				mask: 'rgba(0,0,0,0)'
			}); //menu设置透明遮罩防止点击
			menu.show('none', 0, function() {
				//主窗体开始侧滑并显示遮罩
				main.setStyle({
					mask: 'rgba(0,0,0,0.4)',
					left: '70%',
					transition: {
						duration: 150
					}
				});
				isInTransition = false;
				menu.setStyle({
					mask: "none"
				}); 
				later(function() {
					isInTransition = false;
					menu.setStyle({
						mask: "none"
					}); //移除menu的mask
				}, 160);
				showMenu = true;
			});
		}
	};
	function later(a, b, c, d) {
		b = b || 0;
		var e, f, g = a,
			h = d;
		return "string" == typeof a && (g = c[a]), e = function() {
			g.apply(c, mui.isArray(h) ? h : [h])
		}, f = setTimeout(e, b), {
			id: f,
			cancel: function() {
				clearTimeout(f)
			}
		}
	}
	/**
	 * 关闭菜单
	 */
	function closeMenu() {
		if (isInTransition) {
			return;
		}
		if (showMenu) {
			//关闭遮罩；
			//主窗体开始侧滑；
			isInTransition = true;
			main.setStyle({
				mask: 'none',
				left: '0',
				transition: {
					duration: 200
				}
			});
			showMenu = false;
			//等动画结束后，隐藏菜单webview，节省资源；
			later(function() {
				isInTransition = false;
				menu.hide();
			}, 300);
		}
	};
	//点击左上角侧滑图标，打开侧滑菜单；
	document.querySelector('a#offCanvasBtn').addEventListener('tap', function(e) {
		if (showMenu) {
			closeMenu();
		} else {
			openMenu();
		}
	});
	//敲击顶部导航，内容区回到顶部
	document.querySelector('header').addEventListener('doubletap', function() {
		main.children()[0].evalJS('mui.scrollTo(0, 100)');
	});
	//主界面向右滑动，若菜单未显示，则显示菜单；否则不做任何操作
	window.addEventListener("swiperight", openMenu);
	//主界面向左滑动，若菜单已显示，则关闭菜单；否则，不做任何操作；
	window.addEventListener("swipeleft", closeMenu);
	//侧滑菜单触发关闭菜单命令
	window.addEventListener("menu:close", closeMenu);
	window.addEventListener("menu:open", openMenu);
	//重写mui.menu方法，Android版本menu按键按下可自动打开、关闭侧滑菜单；
	mui.menu = function() {
			if (showMenu) {
				closeMenu();
			} else {
				openMenu();
			}
		};
	//处理右上角关于图标的点击事件；
	/*var subWebview = null,
		template = null;
	document.getElementById('info').addEventListener('tap', function() {
		if (subWebview == null) {
			//获取共用父窗体
			template = plus.webview.getWebviewById("default-main");
		}
		if (template) {
			subWebview = template.children()[0];
			subWebview.loadURL('examples/info.html');
			//修改共用父模板的标题
			mui.fire(template, 'updateHeader', {
				title: '关于',
				showMenu: false
			});
			template.show('slide-in-right', 150);
		}
	});*/
	//首页返回键处理
	//处理逻辑：1秒内，连续两次按返回键，则退出应用；
	var first = null;
	mui.back = function() {
		if (showMenu) {
			closeMenu();
		} else {
			//首次按键，提示‘再按一次退出应用’
			if (!first) {
				first = new Date().getTime();
				mui.toast('再按一次退出应用');
				setTimeout(function() {
					first = null;
				}, 1000);
			} else {
				if (new Date().getTime() - first < 1000) {
					plus.runtime.quit();
				}
			}
		}
	};
	/**
	 * 打开条码扫描页面
	 * @param {Object} obj
	 */
	window.openBarcodeScan = function(url) {
		var target = url;
		mui.openWindow({
			url: target,
			id: target,
		});
	}

/*(function($, doc) {
	$.plusReady(function() {
		var backButtonPress = 0;
		mui.back = function(event) {
			backButtonPress++;
			if (backButtonPress > 1) {
				plus.runtime.quit();
			} else {
				plus.nativeUI.toast('再按一次退出应用');
			}
			setTimeout(function() {
				backButtonPress = 0;
			}, 1000);
			return false;
		};
	});
}(mui, document));*/