!function(){var BI=window.parent.BI||{},TipPopover=BI.inherit(BI.Widget,{props:{text:"",onClickConfirm:BI.emptyFn,btn:BI.i18nText(BI.i18nText("Dec-Basic_Sure"))},render:function(){return{type:"bi.vtape",items:[{el:this.rebuildCenter()},{el:this.rebuildSouth(),height:44}]}},rebuildCenter:function(){return{type:"bi.label",text:this.options.text,height:50,textAlign:"left"}},rebuildSouth:function(){var self=this,o=this.options;return{type:"bi.right_vertical_adapt",lgap:10,items:[BI.createWidget({type:"bi.button",ref:function(_ref){self.sure=_ref},text:this.options.btn,warningTitle:o.warningTitle,height:30,value:0,handler:function(){self.end()}})]}},close:function(){this.fireEvent("EVENT_CLOSE")},end:function(){this.options.onClickConfirm(),this.fireEvent("EVENT_CLOSE")}});BI.shortcut("dec.tip.popover",TipPopover)}();