define([],function(){return _.inherit({propertys:function(){},getInputVal:function(a){return a},setPosition:function(a){var b=this.offset;b.left&&a.css({left:b.left+"px",right:"auto"}),b.top&&a.css({top:b.top+"px",bottom:"auto"}),b.right&&a.css({right:b.right+"px",left:"auto"}),b.bottom&&a.css({bottom:b.bottom+"px",top:"auto"})},initialize:function(a){this.propertys(),this.handleOpts(a),this.init()},handleOpts:function(a){_.extend(this,a),this.clearClass=a.clearClass||"close-me",this.html=a.html||'<a class="clear-input close-me" href="javascript:void(0);" style="display:none;"><span></span></a>',this.wrapper=a.wrapper||$("body"),this.inputs=a.inputs,this.wrapper.append(this.html),this.clearCallback=a.clearCallback},init:function(){this.bindEvents()},bindEvents:function(){var a,b=this,c=b.wrapper.find("."+b.clearClass);this.wrapper.on("focus",this.inputs,function(){c.show();var d=$(this).offset(),e=d.left,f=d.top,g=d.width,h=d.height,i=c.width(),j=c.height();b.offset={left:e+g-i,top:f+h/2-j/2},b.setPosition(c),a=$(this)}).on("focusout",this.inputs,function(){c.hide()}).on("input",this.inputs,function(){""!=$(this).val()?c.show():c.hide()}),c.click(function(c){$target=$(c.currentTarget),a.val(""),"function"==typeof b.clearCallback&&b.clearCallback.call($target),$target.hide()})}})});