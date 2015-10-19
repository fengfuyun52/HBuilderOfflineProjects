/*offcanvas.init({
			menuUrl: '../modules/stock_transfer_offcanvas_right_menu.html', // 菜单页面
			tapId: '#offCanvasBtn', // 触发侧滑事的元素id
			mode: 'main-move', // 滑动方式
			direction: 'right', // 滑动方向
			offset: '30%',
			menuStyles: { 
				left: "30%",
				width: '70%',
				zindex: 9997
			}
		});*/

(function($) {
	$.mask = mui.createMask(_closeMenu);
	$.showMenu = false,
		/**
		 * 操作参数
		 */
		$.options = {
			menuUrl: '', // 菜单页面
			tapId: 'barId', // 触发侧滑事的元素id
			mode: 'main-move', // 滑动方式
			direction: 'left', // 滑动方向
			offset: '30%',
			menuStyles: {
				left: '0',
				width: '70%'
			},
			back: function() {
				if ($.showMenu) {
					//菜单处于显示状态，返回键应该先关闭菜单,阻止主窗口执行mui.back逻辑；
					closeMenu();
					return false;
				} else {
					//菜单处于隐藏状态，执行返回时，要先close菜单页面，然后继续执行mui.back逻辑关闭主窗口；
					$.menu.close('none');
					return true;
				}
			}
		};
	/**
	 * 初始化
	 */
	$.init = function(options) {
		$.options = mui.extend(true, $.options, options);
		/**		*/
		if (!mui.os.android) {
			//整体滑动暂不支持android手机，因为两个页面的移动动画，无法保证同步性；
			/*document.getElementById("move-togger").classList.remove('mui-hidden');
			var spans = document.querySelectorAll('.android-only');
			for (var i=0,len=spans.length;i<len;i++) {
				spans[i].style.display = "none";
			}*/
		}
		/** 初始化mui*/
		mui.init({
			swipeBack: false,
			beforeback: $.options.back
		});
		//plusReady事件后，自动创建menu窗口；
		var direction = $.options.direction;
		var offset = $.options.offset;
		var styles = $.options.menuStyles;
		mui.plusReady(function() {
			$.main = plus.webview.currentWebview();
			//setTimeout的目的是等待窗体动画结束后，再执行create webview操作，避免资源竞争，导致窗口动画不流畅；
			setTimeout(function() {
				//侧滑菜单默认隐藏，这样可以节省内存；
				$.menu = mui.preload({
					id: $.options.menuUrl,
					url: $.options.menuUrl,
					styles: styles
				});
			}, 300);
		});
		//打开侧滑菜单事件；
		document.querySelector($.options.tapId).addEventListener('tap', openMenu);

		//在android4.4中的swipe事件，需要preventDefault一下，否则触发不正常
		//故，在dragleft，dragright中preventDefault
		window.addEventListener('dragright', function(e) {
			e.detail.gesture.preventDefault();
		});
		window.addEventListener('dragleft', function(e) {
			e.detail.gesture.preventDefault();
		});
		if (direction == 'left') {
			//主界面向右滑动，若菜单未显示，则显示菜单；否则不做任何操作；
			window.addEventListener("swiperight", openMenu);
			//主界面向左滑动，若菜单已显示，则关闭菜单；否则，不做任何操作；
			window.addEventListener("swipeleft", closeMenu);
			//menu页面向左滑动，关闭菜单；
			window.addEventListener("menu:swipeleft", closeMenu);
		} else {
			//主界面向右滑动，若菜单未显示，则显示菜单；否则不做任何操作；
			window.addEventListener("swipeleft", openMenu);
			//主界面向左滑动，若菜单已显示，则关闭菜单；否则，不做任何操作；
			window.addEventListener("swiperight", closeMenu);
			//menu页面向左滑动，关闭菜单；
			window.addEventListener("menu:swipetrght", closeMenu);
		}

		//重写mui.menu方法，Android版本menu按键按下可自动打开、关闭侧滑菜单；
		mui.menu = function() {
			if ($.showMenu) {
				closeMenu();
			} else {
				openMenu();
			}
		}
	};

	function openMenu() {
			if ($.options.direction == 'left') {
				openMenuLeft();
			}else if($.options.direction == 'right'){
				openMenuRight();
			}
		}
		/**
		 * 显示菜单菜单
		 */

	function openMenuRight() {
		if (!$.showMenu) {

			//侧滑菜单处于隐藏状态，则立即显示出来；
			//显示完毕后，根据不同动画效果移动窗体；
			$.menu.show('none', 0, function() {
				switch ($.options.mode) {
					case 'main-move':
						//主窗体开始侧滑；
						$.main.setStyle({
							left: '-70%',
							transition: {
								duration: 150
							}
						});
						break;
					case 'menu-move':
						$.menu.setStyle({
							left: '30%',
							transition: {
								duration: 150
							}
						});
						break;
					case 'all-move':
						$.main.setStyle({
							left: '-70%',
							transition: {
								duration: 150
							}
						});
						$.menu.setStyle({
							left: '30%',
							transition: {
								duration: 150
							}
						});
						break;
				}
			});
			//显示主窗体遮罩
			$.mask.show();
			$.showMenu = true;
		}
	}

	function openMenuLeft() {
			if (!$.showMenu) {
				//侧滑菜单处于隐藏状态，则立即显示出来；
				//显示完毕后，根据不同动画效果移动窗体；
				$.menu.show('none', 0, function() {
					switch ($.options.mode) {
						case 'main-move':
							//主窗体开始侧滑；
							$.main.setStyle({
								left: '70%',
								transition: {
									duration: 150
								}
							});
							break;
						case 'menu-move':
							$.menu.setStyle({
								left: '0%',
								transition: {
									duration: 150
								}
							});
							break;
						case 'all-move':
							$.main.setStyle({
								left: '70%',
								transition: {
									duration: 150
								}
							});
							$.menu.setStyle({
								left: '0%',
								transition: {
									duration: 150
								}
							});
							break;
					}
				});
				//显示遮罩
				$.mask.show();
				$.showMenu = true;
			}
		}
		/**
		 * 关闭侧滑菜单
		 */

	function closeMenu() {
		//关闭遮罩
		_closeMenu();

		$.mask.close();
	}

	function _closeMenu() {
		if ($.options.direction == 'left') {
			_closeMenuLeft();
		} else if ($.options.direction == 'right') {
			_closeMenuRight();
		}
	}

	function _closeMenuRight() {
			if ($.showMenu) {
				switch ($.options.mode) {
					case 'main-move':
						//主窗体开始侧滑；
						$.main.setStyle({
							left: '0',
							transition: {
								duration: 150
							}
						});
						break;
					case 'menu-move':
						//主窗体开始侧滑；
						$.menu.setStyle({
							left: '100%',
							transition: {
								duration: 150
							}
						});
						break;
					case 'all-move':
						//主窗体开始侧滑；
						$.main.setStyle({
							left: '0',
							transition: {
								duration: 150
							}
						});
						//menu页面同时移动
						$.menu.setStyle({
							left: '100%',
							transition: {
								duration: 150
							}
						});

						break;
				}
				//等窗体动画结束后，隐藏菜单webview，节省资源；
				setTimeout(function() {
					$.menu.hide();
				}, 300);
				$.showMenu = false;
			}
		}
		/**
		 * 关闭侧滑菜单（业务部分）
		 */

	function _closeMenuLeft() {
		if ($.showMenu) {
			//关闭遮罩；
			switch ($.options.mode) {
				case 'main-move':
					//主窗体开始侧滑；
					$.main.setStyle({
						left: '0',
						transition: {
							duration: 150
						}
					});
					break;
				case 'menu-move':
					//主窗体开始侧滑；
					$.menu.setStyle({
						left: '-70%',
						transition: {
							duration: 150
						}
					});
					break;
				case 'all-move':
					//主窗体开始侧滑；
					$.main.setStyle({
						left: '0',
						transition: {
							duration: 150
						}
					});
					//menu页面同时移动
					$.menu.setStyle({
						left: '-70%',
						transition: {
							duration: 150
						}
					});

					break;
			}

			//等窗体动画结束后，隐藏菜单webview，节省资源；
			setTimeout(function() {
				$.menu.hide();
			}, 200);
			//改变标志位
			$.showMenu = false;
		}
	};
	$.closeMenu = closeMenu;
})(window.offcanvas = {});