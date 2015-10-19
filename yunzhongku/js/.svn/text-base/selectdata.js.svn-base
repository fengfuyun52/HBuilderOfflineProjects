/**
 * 打开选择经手人页面
 * @param {Object} id
 * 	·				当前按钮元素id，从中取出数据。
 */
function openBrokerPage(id, targetURL) {
		var e = document.getElementById(id);
		var data = {
			elementId: e.getAttribute("data-eid"),
			brokerId: e.getAttribute("data-brokerId")
		};
		clicked(targetURL, false, false, data);
	}
	/**
	 * 选择经手人回调
	 * @param {Object} data
	 * 					返回的数据
	 * @param {Object} elementId
	 * 					相关html元素id，用作经手人姓名显示
	 */

function updateHandled(data, elementId) {
	data = mui.parseJSON(data);
	document.getElementById(elementId).innerText = data.name;
	document.getElementById(elementId).setAttribute('data-value', data.id);
	document.getElementById(elementId).setAttribute('data-borderId', data.id);
}