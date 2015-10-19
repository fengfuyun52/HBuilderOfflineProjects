(function($, o) {
	/** 
	 * 获取本地快捷功能数据。
	 */
	o.getShortcuts = function() {
		//var shortcuts = localStorage.getItem("$shortcuts") || o.getShortcutAjax() || "{}";
		var shortcuts = localStorage.getItem("$shortcuts") || null;
		if (typeof shortcuts == "string") {
			shortcuts = JSON.parse(shortcuts);
		}
		return shortcuts;
	};
	/**
	 * 设置本地快捷功能数据。
	 */
	o.setShortcuts = function(shortcuts) {
		shortcuts = shortcuts || {};
		localStorage.setItem("$shortcuts", JSON.stringify(shortcuts));
	};
	/**
	 * 更新本地快捷功能数据。
	 * modulesId, shortcutId
	 */
	o.updateShortcutState = function(modulesId, shortcutId, state) {
		try {
			var shortcuts = o.getShortcuts();//
			if (state == 1) {
				shortcuts.modules[modulesId].shortcuts[shortcutId].state = 0;
			} else {
				shortcuts.modules[modulesId].shortcuts[shortcutId].state = 1;
			}
			o.setShortcuts(shortcuts);
		} catch (err) {
			throw err;
		}
	};
	/**
	 * 从服务器中读取快捷功能数据，并存到本地。
	 */
	o.getShortcutAjax = function() {
		var res = {};
		mui.ajax('../json/shortcut.json', {
			data: {},
			dataType: 'json', //服务器返回json格式数据
			type: 'post', //HTTP请求类型
			timeout: 10000, //超时时间设置为10秒；
			success: function(data) {
				//服务器返回响应，根据响应结果，分析是否登录成功；
				res = data;
				o.setShortcuts(data);
			},
			error: function(xhr, type, errorThrown) {
				//异常处理；
				console.log(type);
			}
		});
		return res;
	};
	/**
	 * 显示数据
	 */
	o.showShortcuts = function(shortcuts) {
		if (!shortcuts) {
			return;
		}
		var ulwrap = document.getElementById("shortcut");
		for (var i = 0; i < shortcuts.length; i++) {
			var ulsub = document.createElement("ul");
			ulsub.className = "mui-table-view mui-table-view-chevron";
			for (var j = 0; j < shortcuts[i].shortcuts.length; j++) {
				with(shortcuts[i].shortcuts[j]) {
					var li = document.createElement("li");
					li.className = "mui-table-view-cell mui-media";
					var imgicon = document.createElement("img");
					imgicon.className = "mui-media-object mui-pull-left";
					imgicon.src = icon;
					var span = document.createElement("span");
					span.className = "mui-media-object mui-pull-left";
					span.innerText = name;
					var imgstatus = document.createElement("img");
					imgstatus.className = "mui-pull-right";
					imgstatus.src = "../images/u47.png";
					if (state == 0) {
						imgstatus.src = "../images/u51.png";
					}
					imgstatus.setAttribute("data-mid", i);
					imgstatus.setAttribute("data-sid", j);
					imgstatus.setAttribute("data-status", state);
					imgstatus.addEventListener("click", function() {
						var state = this.getAttribute("data-status");
						if (this.getAttribute("data-status") == "1") {
							this.src = "../images/u51.png";
							this.setAttribute("data-status", 0);
						} else {
							this.src = "../images/u47.png";
							this.setAttribute("data-status", 1);
						}
						o.updateShortcutState(this.getAttribute("data-mid"), this.getAttribute("data-sid"), state);
					}, true);
					li.appendChild(imgicon);
					li.appendChild(span);
					li.appendChild(imgstatus);
					ulsub.appendChild(li);
				}
			}
			var atitle = document.createElement("a");
			atitle.href = "#";
			atitle.className = "mui-navigate-right";
			atitle.innerText = shortcuts[i].name;
			var liL1 = document.createElement("li");
			liL1.className = "mui-table-view-cell mui-collapse";
			liL1.appendChild(atitle);
			liL1.appendChild(ulsub);
			ulwrap.appendChild(liL1);
		}
	};
})(mui, window.addShortcut = {});