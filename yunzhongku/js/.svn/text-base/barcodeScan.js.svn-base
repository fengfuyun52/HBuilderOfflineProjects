(function($, doc) {

	$.plusReady(function() {
		plus.nativeUI.closeWaiting();
		$.currentWebview.show();
		scan = new plus.barcode.Barcode('bcid');
		scan.onmarked = onmarked;
		scan.start({
			conserve: true,
			filename: "_doc/barcode/"
		});
		/*setTimeout(function() {
			// 创建支持
			//var filter = [plus.barcode.QR, plus.barcode.CODE128];
			//scan = new plus.barcode.Barcode('bcid', filter);
			scan = new plus.barcode.Barcode('bcid');
			scan.onmarked = onmarked;
			scan.start({
				conserve: true,
				filename: "_doc/barcode/"
			});
		}, 300);*/
	});

	// 二维码扫描成功
	function onmarked(type, result, file) {
		switch (type) {
			case plus.barcode.QR:
				type = "QR";
				break;
			case plus.barcode.EAN13:
				type = "EAN13";
				break;
			case plus.barcode.EAN8:
				type = "EAN8";
				break;
			default:
				type = "其它";
				break;
		}
		console.log(type, result, file);
		result = result.replace(/\n/g, '');
		//wo.evalJS("scaned('" + type + "','" + result + "','" + file + "');");
		back();
	};
	// 从相册中选择二维码图片 
	function scanPicture() {
		plus.gallery.pick(function(path) {
			plus.barcode.scan(path, onmarked, function(error) {
				plus.nativeUI.alert("无法识别此图片");
			});
		}, function(err) {
			plus.nativeUI.alert("Failed: " + error.message);
		});
	}
})(mui, document);