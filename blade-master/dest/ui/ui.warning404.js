define(["UIView",getAppUITemplatePath("ui.warning404")],function(a,b){return _.inherit(a,{propertys:function($super){$super(),this.template=b,this.datamodel={tel:"4000086666",loadFail:"加载失败，请稍后再试试吧",telText:"或者拨打携程客服电话",tryAgain:"重试",contact:"联系客服",showContact:!0},this.events={"click .cui-btns-tel":"callTelAction","click .cui-btns-retry":"retryAction"}},createRoot:function(a){this.$el=$(a).hide().attr("id",this.id)},setDatamodel:function(a,b,c){a||(a={}),_.extend(this.datamodel,a),this.retryAction=b,this.callTelAction=c,this.refresh()},callTelAction:function(){window.location.href="tel:"+self.tel},retryAction:function(){0},initialize:function($super,a){$super(a)}})});