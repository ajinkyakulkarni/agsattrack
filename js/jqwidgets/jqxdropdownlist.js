/*
jQWidgets v2.5.5 (2012-Nov-28)
Copyright (c) 2011-2012 jQWidgets.
License: http://jqwidgets.com/license/
*/

(function(a){a.jqx.jqxWidget("jqxDropDownList","",{});a.extend(a.jqx._jqxDropDownList.prototype,{defineInstance:function(){this.disabled=false;this.width=null;this.height=null;this.items=new Array();this.selectedIndex=-1;this.source=null;this.scrollBarSize=15;this.arrowSize=19;this.enableHover=true;this.enableSelection=true;this.visualItems=new Array();this.groups=new Array();this.equalItemsWidth=true;this.itemHeight=-1;this.visibleItems=new Array();this.emptyGroupText="Group";this.checkboxes=false;if(this.openDelay==undefined){this.openDelay=350}if(this.closeDelay==undefined){this.closeDelay=400}this.animationType="default";this.autoOpen=false;this.dropDownWidth="auto";this.dropDownHeight="200px";this.autoDropDownHeight=false;this.keyboardSelection=true;this.enableBrowserBoundsDetection=false;this.dropDownHorizontalAlignment="left";this.displayMember="";this.valueMember="";this.searchMode="startswithignorecase";this.incrementalSearch=true;this.incrementalSearchDelay=700;this.renderer=null;this.promptText="Please Choose:";this.events=["open","close","select","unselect","change","checkChange","bindingComplete"]},createInstance:function(b){this.render()},render:function(){this.element.innerHTML="";this.isanimating=false;var d=a("<div tabIndex=0 style='background-color: transparent; -webkit-appearance: none; outline: none; width:100%; height: 100%; padding: 0px; margin: 0px; border: 0px; position: relative;'><div id='dropdownlistWrapper' style='outline: none; background-color: transparent; border: none; float: left; width:100%; height: 100%; position: relative;'><div id='dropdownlistContent' style='outline: none; background-color: transparent; border: none; float: left; position: relative;'/><div id='dropdownlistArrow' style='background-color: transparent; border: none; float: right; position: relative;'><div></div></div></div></div>");this._addInput();if(a.jqx._jqxListBox==null||a.jqx._jqxListBox==undefined){alert("jqxListBox is not loaded.")}var h=this;this.touch=a.jqx.mobile.isTouchDevice();this.comboStructure=d;this.host.append(d);this.dropdownlistWrapper=this.host.find("#dropdownlistWrapper");this.dropdownlistArrow=this.host.find("#dropdownlistArrow");this.arrow=a(this.dropdownlistArrow.children()[0]);this.dropdownlistContent=this.host.find("#dropdownlistContent");this.dropdownlistContent.addClass(this.toThemeProperty("jqx-dropdownlist-content"));this.dropdownlistWrapper.addClass(this.toThemeProperty("jqx-disableselect"));this.addHandler(this.dropdownlistWrapper,"selectstart",function(){return false});this.dropdownlistWrapper[0].id="dropdownlistWrapper"+this.element.id;this.dropdownlistArrow[0].id="dropdownlistArrow"+this.element.id;this.dropdownlistContent[0].id="dropdownlistContent"+this.element.id;var j=this.toThemeProperty("jqx-widget")+" "+this.toThemeProperty("jqx-widget-content")+" "+this.toThemeProperty("jqx-dropdownlist-state-normal")+" "+this.toThemeProperty("jqx-rc-all")+" "+this.toThemeProperty("jqx-fill-state-normal");this.element.className+=" "+j;this._firstDiv=this.host.find("div:first");try{var k="listBox"+this.element.id;var f=a(a.find("#"+k));if(f.length>0){f.remove()}var b=a("<div style='overflow: hidden; background-color: transparent; border: none; position: absolute;' id='listBox"+this.element.id+"'><div id='innerListBox"+this.element.id+"'></div></div>");b.hide();b.appendTo(document.body);this.container=b;this.listBoxContainer=a(a.find("#innerListBox"+this.element.id));var c=this.width;if(this.dropDownWidth!="auto"){c=this.dropDownWidth}if(this.dropDownHeight==null){this.dropDownHeight=200}var h=this;this.container.width(parseInt(c)+25);this.container.height(parseInt(this.dropDownHeight)+25);this.addHandler(this.listBoxContainer,"bindingComplete",function(e){h._raiseEvent("6")});this.listBoxContainer.jqxListBox({checkboxes:this.checkboxes,itemHeight:this.itemHeight,width:c,searchMode:this.searchMode,incrementalSearch:this.incrementalSearch,incrementalSearchDelay:this.incrementalSearchDelay,displayMember:this.displayMember,valueMember:this.valueMember,height:this.dropDownHeight,autoHeight:this.autoDropDownHeight,scrollBarSize:this.scrollBarSize,selectedIndex:this.selectedIndex,source:this.source,theme:this.theme,rendered:function(){if(h.selectedIndex!=h.listBoxContainer.jqxListBox("selectedIndex")){h.listBox=a.data(h.listBoxContainer[0],"jqxListBox").instance;h.listBoxContainer.jqxListBox({selectedIndex:h.selectedIndex});h.renderSelection("mouse")}else{h.renderSelection("mouse")}},renderer:this.renderer});this.listBoxContainer.css({position:"absolute",zIndex:9999999999999,top:0,left:0});this.listBox=a.data(this.listBoxContainer[0],"jqxListBox").instance;this.listBox.enableSelection=this.enableSelection;this.listBox.enableHover=this.enableHover;this.listBox.equalItemsWidth=this.equalItemsWidth;this.listBox.selectIndex(this.selectedIndex);this.listBox._arrange();this.addHandler(this.listBoxContainer,"unselect",function(e){h._raiseEvent("3",{index:e.args.index,type:e.args.type,item:e.args.item})});this.addHandler(this.listBoxContainer,"change",function(e){h._raiseEvent("4",{index:e.args.index,type:e.args.type,item:e.args.item})});if(this.animationType=="none"){this.container.css("display","none")}else{this.container.hide()}}catch(g){}var l=this;this.propertyChangeMap.disabled=function(e,n,m,o){if(o){e.host.addClass(l.toThemeProperty("jqx-dropdownlist-state-disabled"));e.host.addClass(l.toThemeProperty("jqx-fill-state-disabled"));e.dropdownlistContent.addClass(l.toThemeProperty("jqx-dropdownlist-content-disabled"))}else{e.host.removeClass(l.toThemeProperty("jqx-dropdownlist-state-disabled"));e.host.removeClass(l.toThemeProperty("jqx-fill-state-disabled"));e.dropdownlistContent.removeClass(l.toThemeProperty("jqx-dropdownlist-content-disabled"))}};if(this.disabled){this.host.addClass(this.toThemeProperty("jqx-dropdownlist-state-disabled"));this.host.addClass(this.toThemeProperty("jqx-fill-state-disabled"));this.dropdownlistContent.addClass(this.toThemeProperty("jqx-dropdownlist-content-disabled"))}this.arrow.addClass(this.toThemeProperty("icon-arrow-down"));this.arrow.addClass(this.toThemeProperty("icon"));this._setSize();this._updateHandlers();if(a.browser.msie&&a.browser.version<8){if(this.host.parents(".jqx-window").length>0){var i=this.host.parents(".jqx-window").css("z-index");b.css("z-index",i+10);this.listBoxContainer.css("z-index",i+10)}}},val:function(){if(!this.dropdownlistContent){return""}return this.dropdownlistContent.html()},focus:function(){var c=this;var b=function(){c.host.focus();if(c._firstDiv){c._firstDiv.focus()}};b();setTimeout(function(){b()},10)},_addInput:function(){var b=this.host.attr("name");if(!b){b=this.element.id}this.input=a("<input type='hidden'/>");this.host.append(this.input);this.input.attr("name",b)},getItems:function(){if(!this.listBox){return new Array()}return this.listBox.items},_setSize:function(){if(this.width!=null&&this.width.toString().indexOf("px")!=-1){this.host.width(this.width)}else{if(this.width!=undefined&&!isNaN(this.width)){this.host.width(this.width)}}if(this.height!=null&&this.height.toString().indexOf("px")!=-1){this.host.height(this.height)}else{if(this.height!=undefined&&!isNaN(this.height)){this.host.height(this.height)}}var e=false;if(this.width!=null&&this.width.toString().indexOf("%")!=-1){e=true;this.host.width(this.width)}if(this.height!=null&&this.height.toString().indexOf("%")!=-1){e=true;this.host.height(this.height)}if(e){var c=this;var b=this.host.width();if(this.dropDownWidth!="auto"){b=this.dropDownWidth}this.listBoxContainer.jqxListBox({width:b});this.container.width(parseInt(b)+25);var d=function(){c._arrange();if(c.dropDownWidth=="auto"){var f=c.host.width();c.listBoxContainer.jqxListBox({width:f});c.container.width(parseInt(f)+25)}};a(window).unbind("resize."+this.element.id);a(window).bind("resize."+this.element.id,function(){d()})}},isOpened:function(){var c=this;var b=a.data(document.body,"openedJQXListBox"+this.element.id);if(b!=null&&b==c.listBoxContainer){return true}return false},_updateHandlers:function(){var c=this;var d=false;this.removeHandlers();if(!this.touch){this.host.hover(function(){if(!c.disabled&&c.enableHover){d=true;c.host.addClass(c.toThemeProperty("jqx-dropdownlist-state-hover"));c.arrow.addClass(c.toThemeProperty("icon-arrow-down-hover"));c.host.addClass(c.toThemeProperty("jqx-fill-state-hover"))}},function(){if(!c.disabled&&c.enableHover){c.host.removeClass(c.toThemeProperty("jqx-dropdownlist-state-hover"));c.host.removeClass(c.toThemeProperty("jqx-fill-state-hover"));c.arrow.removeClass(c.toThemeProperty("icon-arrow-down-hover"));d=false}})}var b="mousedown";if(this.touch){b="touchstart"}this.addHandler(this.dropdownlistWrapper,b,function(g){if(!c.disabled){var f=c.container.css("display")=="block";if(!c.isanimating){if(f){c.hideListBox();if(c._firstDiv){c._firstDiv.focus()}}else{c.showListBox();if(c._firstDiv){c._firstDiv.focus()}}}}});if(c.autoOpen){this.addHandler(this.host,"mouseenter",function(){var f=c.isOpened();if(!f&&c.autoOpen){c.open();c.host.focus()}});a(document).bind("mousemove."+c.element.id,function(i){var h=c.isOpened();if(h&&c.autoOpen){var m=c.host.offset();var l=m.top;var k=m.left;var j=c.container.offset();var f=j.left;var g=j.top;canClose=true;if(i.pageY>=l&&i.pageY<=l+c.host.height()){if(i.pageX>=k&&i.pageX<k+c.host.width()){canClose=false}}if(i.pageY>=g&&i.pageY<=g+c.container.height()){if(i.pageX>=f&&i.pageX<f+c.container.width()){canClose=false}}if(canClose){c.close()}}})}if(this.touch){this.addHandler(a(document),"touchstart."+this.element.id,c.closeOpenedListBox,{me:this,listbox:this.listBox,id:this.element.id})}else{this.addHandler(a(document),"mousedown."+this.element.id,c.closeOpenedListBox,{me:this,listbox:this.listBox,id:this.element.id})}if(document.referrer!=""||window.frameElement){if(window.top!=null){if(window.parent&&document.referrer){parentLocation=document.referrer}if(parentLocation.indexOf(document.location.host)!=-1){var e=function(f){if(c.isOpened()){var g={me:c,listbox:c.listBox,id:c.element.id};f.data=g}};if(window.top.document.addEventListener){window.top.document.addEventListener("mousedown",e,false)}else{if(window.top.document.attachEvent){window.top.document.attachEvent("onmousedown",e)}}}}}this.addHandler(this.host,"keydown",function(g){var f=c.container.css("display")=="block";if(c.host.css("display")=="none"){return true}if(g.keyCode=="13"){if(!c.isanimating){if(f){c.renderSelection();c.hideListBox();if(!c.keyboardSelection){c._raiseEvent("2",{index:c.selectedIndex,type:"keyboard",item:c.getItem(c.selectedIndex)})}}else{c.showListBox()}if(f){return false}}}if(g.keyCode==115){if(!c.isanimating){if(!c.isOpened()){c.showListBox()}else{if(c.isOpened()){c.hideListBox()}}}return false}if(g.altKey){if(c.host.css("display")=="block"){if(g.keyCode==38){if(c.isOpened()){c.hideListBox()}}else{if(g.keyCode==40){if(!c.isOpened()){c.showListBox()}}}}}if(g.keyCode=="27"){if(!c.ishiding){c.hideListBox();if(c.tempSelectedIndex!=undefined){c.selectIndex(c.tempSelectedIndex)}}}if(f&&!c.disabled){return c.listBox._handleKeyDown(g)}});this.addHandler(this.listBoxContainer,"checkChange",function(f){c.renderSelection();c._updateInputSelection();c._raiseEvent(5,{label:f.args.label,value:f.args.value,checked:f.args.checked,item:f.args.item})});this.addHandler(this.listBoxContainer,"select",function(f){if(!c.disabled){if(f.args.type!="keyboard"||c.keyboardSelection){c.renderSelection();c._raiseEvent("2",{index:f.args.index,type:f.args.type,item:f.args.item,originalEvent:f.args.originalEvent});if(f.args.type=="mouse"){if(!c.checkboxes){c.hideListBox();if(c._firstDiv){c._firstDiv.focus()}}}}}});if(this.listBox){if(this.listBox.content){this.addHandler(this.listBox.content,"click",function(f){if(!c.disabled){if(f.target===c.listBox.itemswrapper[0]){return true}c.renderSelection("mouse");if(!c.touch){if(!c.ishiding){if(!c.checkboxes){c.hideListBox();if(c._firstDiv){c._firstDiv.focus()}}}}if(!c.keyboardSelection){if(c._oldSelectedInd==undefined){c._oldSelectedIndx=c.selectedIndex}if(c.selectedIndex!=c._oldSelectedIndx){c._raiseEvent("2",{index:c.selectedIndex,type:"keyboard",item:c.getItem(c.selectedIndex)});c._oldSelectedIndx=c.selectedIndex}}}})}}this.addHandler(this._firstDiv,"focus",function(){c.host.addClass(c.toThemeProperty("jqx-dropdownlist-state-focus"));c.host.addClass(c.toThemeProperty("jqx-fill-state-focus"))});this.addHandler(this._firstDiv,"blur",function(){c.host.removeClass(c.toThemeProperty("jqx-dropdownlist-state-focus"));c.host.removeClass(c.toThemeProperty("jqx-fill-state-focus"))})},removeHandlers:function(){var c=this;var b="mousedown";if(this.touch){b="touchstart"}this.removeHandler(this.dropdownlistWrapper,b);if(this.listBox){if(this.listBox.content){this.removeHandler(this.listBox.content,"click")}}this.removeHandler(this.host,"loadContent");this.removeHandler(this.listBoxContainer,"checkChange");this.removeHandler(this.host,"keydown");this.removeHandler(this._firstDiv,"focus");this.removeHandler(this._firstDiv,"blur");this.host.unbind("hover");this.removeHandler(this.host,"mouseenter");a(document).unbind("mousemove."+c.element.id)},getItem:function(b){var c=this.listBox.getItem(b);return c},getItemByValue:function(c){var b=this.listBox.getItemByValue(c);return b},selectItem:function(b){if(this.listBox!=undefined){this.listBox.selectItem(b);this.selectedIndex=this.listBox.selectedIndex;this.renderSelection("mouse")}},unselectItem:function(b){if(this.listBox!=undefined){this.listBox.unselectItem(b);this.renderSelection("mouse")}},checkItem:function(b){if(this.listBox!=undefined){this.listBox.checkItem(b)}},uncheckItem:function(b){if(this.listBox!=undefined){this.listBox.uncheckItem(b)}},indeteterminateItem:function(b){if(this.listBox!=undefined){this.listBox.indeteterminateItem(b)}},renderSelection:function(){if(this.listBox==null){return}var p=this.listBox.getItem(this.listBox.selectedIndex);var m=this;if(this.checkboxes){var g=this.getCheckedItems();if(g!=null&&g.length>0){p=g[0]}else{p=null}}if(p==null){var d=a('<span style="color: inherit; border: none; background-color: transparent;"></span>');d.appendTo(a(document.body));d.addClass(this.toThemeProperty("jqx-widget"));d.addClass(this.toThemeProperty("jqx-listitem-state-normal"));d.addClass(this.toThemeProperty("jqx-item"));d.html(this.promptText);var c=this.dropdownlistContent.css("padding-top");var q=this.dropdownlistContent.css("padding-bottom");d.css("padding-top",c);d.css("padding-bottom",q);var b=d.outerHeight();d.remove();d.removeClass();this.dropdownlistContent.html(d);var o=this.host.height();if(this.height!=null&&this.height!=undefined){o=parseInt(this.height)}var n=parseInt((parseInt(o)-parseInt(b))/2);if(n>0){this.dropdownlistContent.css("margin-top",n+"px");this.dropdownlistContent.css("margin-bottom",n+"px")}if(this.selectionRenderer){this.dropdownlistContent.html(this.selectionRenderer());this._updateInputSelection()}this.selectedIndex=this.listBox.selectedIndex;return}this.selectedIndex=this.listBox.selectedIndex;var d=a('<span style="color: inherit; border: none; background-color: transparent;"></span>');d.appendTo(a(document.body));d.addClass(this.toThemeProperty("jqx-widget"));d.addClass(this.toThemeProperty("jqx-listitem-state-normal"));d.addClass(this.toThemeProperty("jqx-item"));var e=false;try{if(p.html!=undefined&&p.html!=null&&p.html.toString().length>0){d.html(p.html)}else{if(p.label!=undefined&&p.label!=null&&p.label.toString().length>0){d.html(p.label)}else{if(p.value!=undefined&&p.value!=null&&p.value.toString().length>0){d.html(p.value)}else{if(p.title!=undefined&&p.title!=null&&p.title.toString().length>0){d.html(p.title)}else{if(p.label==""||p.label==null){e=true;d.html("Item")}}}}}}catch(l){var h=l}var c=this.dropdownlistContent.css("padding-top");var q=this.dropdownlistContent.css("padding-bottom");d.css("padding-top",c);d.css("padding-bottom",q);var b=d.outerHeight();if((p.label==""||p.label==null)&&e){d.html("")}d.remove();d.removeClass();if(this.selectionRenderer){this.dropdownlistContent.html(this.selectionRenderer(d,p.index,p.label,p.value))}else{if(this.checkboxes){var j=this.getCheckedItems();var k="";for(var f=0;f<j.length;f++){if(f==j.length-1){k+=j[f].label}else{k+=j[f].label+","}}d.text(k);d.css("max-width",this.host.width()-30);d.css("overflow","hidden");d.css("display","block");d.css("width",this.host.width()-30);d.css("text-overflow","ellipsis");this.dropdownlistContent.html(d)}else{this.dropdownlistContent.html(d)}}var o=this.host.height();if(this.height!=null&&this.height!=undefined){o=parseInt(this.height)}var n=parseInt((parseInt(o)-parseInt(b))/2);if(n>0){this.dropdownlistContent.css("margin-top",n+"px");this.dropdownlistContent.css("margin-bottom",n+"px")}if(this.dropdownlistContent&&this.input){this._updateInputSelection()}},_updateInputSelection:function(){if(this.input){if(this.selectedIndex==-1){this.input.val("")}else{var d=this.getSelectedItem();if(d!=null){this.input.val(d.value)}else{this.input.val(this.dropdownlistContent.text())}}if(this.checkboxes){var b=this.getCheckedItems();var e="";if(b!=null){for(var c=0;c<b.length;c++){if(c==b.length-1){e+=b[c].value}else{e+=b[c].value+","}}}this.input.val(e)}}},setContent:function(b){this.dropdownlistContent.html(b);this._updateInputSelection()},dataBind:function(){this.listBoxContainer.jqxListBox({source:this.source});this.renderSelection("mouse");if(this.source==null){this.clearSelection()}},clear:function(){this.listBoxContainer.jqxListBox({source:null});this.clearSelection()},clearSelection:function(b){this.selectedIndex=-1;this.listBox.clearSelection();this.renderSelection();this.dropdownlistContent.html("")},unselectIndex:function(b,c){if(isNaN(b)){return}this.listBox.unselectIndex(b,c);this.renderSelection()},selectIndex:function(b,d,e,c){this.listBox.selectIndex(b,d,e,c);this.renderSelection()},getSelectedIndex:function(){return this.selectedIndex},getSelectedItem:function(){return this.getItem(this.selectedIndex)},getCheckedItems:function(){return this.listBox.getCheckedItems()},checkIndex:function(b){this.listBox.checkIndex(b)},uncheckIndex:function(b){this.listBox.uncheckIndex(b)},indeterminateIndex:function(b){this.listBox.indeterminateIndex(b)},checkAll:function(){this.listBox.checkAll()},uncheckAll:function(){this.listBox.uncheckAll()},insertAt:function(c,b){if(c==null){return false}return this.listBox.insertAt(c,b)},addItem:function(b){return this.listBox.addItem(b)},removeAt:function(c){var b=this.listBox.removeAt(c);this.renderSelection("mouse");return b},ensureVisible:function(b){this.listBox.ensureVisible(b)},disableAt:function(b){this.listBox.disableAt(b)},enableAt:function(b){this.listBox.enableAt(b)},_findPos:function(c){while(c&&(c.type=="hidden"||c.nodeType!=1||a.expr.filters.hidden(c))){c=c.nextSibling}var b=a(c).offset();return[b.left,b.top]},testOffset:function(h,f,c){var g=h.outerWidth();var j=h.outerHeight();var i=a(window).width()+a(window).scrollLeft();var e=a(window).height()+a(window).scrollTop();if(f.left+g>i){if(g>this.host.width()){var d=this.host.offset().left;var b=g-this.host.width();f.left=d-b+2}}if(f.left<0){f.left=parseInt(this.host.offset().left)+"px"}f.top-=Math.min(f.top,(f.top+j>e&&e>j)?Math.abs(j+c+22):0);return f},open:function(){this.showListBox()},close:function(){this.hideListBox()},hide:function(){this.close()},show:function(){this.open()},_getBodyOffset:function(){var c=0;var b=0;if(a("body").css("border-top-width")!="0px"){c=parseInt(a("body").css("border-top-width"));if(isNaN(c)){c=0}}if(a("body").css("border-left-width")!="0px"){b=parseInt(a("body").css("border-left-width"));if(isNaN(b)){b=0}}return{left:b,top:c}},showListBox:function(){var o=this;var d=this.listBoxContainer;var i=this.listBox;var l=a(window).scrollTop();var g=a(window).scrollLeft();var j=parseInt(this._findPos(this.host[0])[1])+parseInt(this.host.outerHeight())-1+"px";var f=parseInt(this.host.offset().left)+"px";var n=a.jqx.mobile.isSafariMobileBrowser();if(this.listBox==null){return}var c=a.jqx.utilities.hasTransform(this.host);this.ishiding=false;if(!this.keyboardSelection){this.listBox.selectIndex(this.selectedIndex);this.listBox.ensureVisible(this.selectedIndex)}this.tempSelectedIndex=this.selectedIndex;if(this.autoDropDownHeight){this.container.height(this.listBoxContainer.height()+25)}if(a("body").css("border-top-width")!="0px"){j=parseInt(j)+this._getBodyOffset().top+"px"}if(a("body").css("border-left-width")!="0px"){f=parseInt(f)+this._getBodyOffset().left+"px"}if(c||(n!=null&&n)){f=a.jqx.mobile.getLeftPos(this.element);j=a.jqx.mobile.getTopPos(this.element)+parseInt(this.host.outerHeight())}d.stop();this.host.addClass(this.toThemeProperty("jqx-dropdownlist-state-selected"));this.host.addClass(this.toThemeProperty("jqx-fill-state-pressed"));this.arrow.addClass(this.toThemeProperty("icon-arrow-down-selected"));this.container.css("left",f);this.container.css("top",j);i._arrange();var e=true;var p=false;if(this.dropDownHorizontalAlignment=="right"){var k=this.container.width();var b=Math.abs(k-this.host.width());if(k>this.host.width()){this.container.css("left",25+parseInt(f)-b+"px")}else{this.container.css("left",25+parseInt(f)+b+"px")}}if(this.enableBrowserBoundsDetection){var h=this.testOffset(d,{left:parseInt(this.container.css("left")),top:parseInt(j)},parseInt(this.host.outerHeight()));if(parseInt(this.container.css("top"))!=h.top){p=true;d.css("top",23)}else{d.css("top",0)}this.container.css("top",h.top);if(parseInt(this.container.css("left"))!=h.left){this.container.css("left",h.left)}}if(this.animationType=="none"){this.container.css("display","block");a.data(document.body,"openedJQXListBoxParent",o);a.data(document.body,"openedJQXListBox"+this.element.id,d);d.css("margin-top",0);d.css("opacity",1)}else{this.container.css("display","block");o.isanimating=true;if(this.animationType=="fade"){d.css("margin-top",0);d.css("opacity",0);d.animate({opacity:1},this.openDelay,function(){a.data(document.body,"openedJQXListBoxParent",o);a.data(document.body,"openedJQXListBox"+o.element.id,d);o.ishiding=false;o.isanimating=false})}else{d.css("opacity",1);var m=d.outerHeight();if(p){d.css("margin-top",m)}else{d.css("margin-top",-m)}d.animate({"margin-top":0},this.openDelay,function(){a.data(document.body,"openedJQXListBoxParent",o);a.data(document.body,"openedJQXListBox"+o.element.id,d);o.ishiding=false;o.isanimating=false})}}i._renderItems();this._raiseEvent("0",i)},hideListBox:function(){var f=this.listBoxContainer;var g=this.listBox;var c=this.container;var d=this;a.data(document.body,"openedJQXListBox"+this.element.id,null);if(this.animationType=="none"){this.container.css("display","none")}else{if(!d.ishiding){f.stop();var b=f.outerHeight();f.css("margin-top",0);d.isanimating=true;var e=-b;if(parseInt(this.container.offset().top)<parseInt(this.host.offset().top)){e=b}if(this.animationType=="fade"){f.css({opacity:1});f.animate({opacity:0},this.closeDelay,function(){c.css("display","none");d.isanimating=false;d.ishiding=false})}else{f.animate({"margin-top":e},this.closeDelay,function(){c.css("display","none");d.isanimating=false;d.ishiding=false})}}}this.ishiding=true;this.host.removeClass(this.toThemeProperty("jqx-dropdownlist-state-selected"));this.host.removeClass(this.toThemeProperty("jqx-fill-state-pressed"));this.arrow.removeClass(this.toThemeProperty("icon-arrow-down-selected"));this._raiseEvent("1",g)},closeOpenedListBox:function(e){var d=e.data.me;var b=a(e.target);var c=e.data.listbox;if(c==null){return true}if(a(e.target).ischildof(e.data.me.host)){return true}if(!d.isOpened()){return true}var f=d;var g=false;a.each(b.parents(),function(){if(this.className!="undefined"){if(this.className.indexOf){if(this.className.indexOf("jqx-listbox")!=-1){g=true;return false}if(this.className.indexOf("jqx-dropdownlist")!=-1){if(d.element.id==this.id){g=true}return false}}}});if(c!=null&&!g&&d.isOpened()){d.hideListBox()}return true},loadFromSelect:function(b){this.listBox.loadFromSelect(b)},refresh:function(b){this._setSize();this._arrange();if(this.listBox){this.renderSelection()}},_arrange:function(){var f=parseInt(this.host.width());var b=parseInt(this.host.height());var e=this.arrowSize;var d=this.arrowSize;var g=3;var c=f-d-2*g;if(c>0){this.dropdownlistContent.width(c+"px")}this.dropdownlistContent.height(b);this.dropdownlistContent.css("left",0);this.dropdownlistContent.css("top",0);this.dropdownlistArrow.width(d);this.dropdownlistArrow.height(b)},destroy:function(){this.removeHandler(this.listBoxContainer,"select");this.removeHandler(this.listBoxContainer,"unselect");this.removeHandler(this.listBoxContainer,"change");this.removeHandler(this.dropdownlistWrapper,"selectstart");this.removeHandler(this.dropdownlistWrapper,"mousedown");this.removeHandler(this.host,"keydown");this.removeHandler(this.listBoxContainer,"select");this.removeHandler(this.listBox.content,"click");this.removeHandlers();this.listBoxContainer.jqxListBox("destroy");this.listBoxContainer.remove();this.host.removeClass();this.removeHandler(a(document),"mousedown."+this.element.id,self.closeOpenedListBox);if(this.touch){this.removeHandler(a(document),"touchstart."+this.element.id)}this.host.remove()},_raiseEvent:function(f,c){if(c==undefined){c={owner:null}}var d=this.events[f];args=c;args.owner=this;var e=new jQuery.Event(d);e.owner=this;if(f==2||f==3||f==4||f==5){e.args=c}var b=this.host.trigger(e);return b},propertyChangedHandler:function(b,c,f,e){if(b.isInitialized==undefined||b.isInitialized==false){return}if(c=="autoOpen"){b._updateHandlers()}if(c=="renderer"){b.listBox.renderer=b.renderer}if(c=="itemHeight"){b.listBox.itemHeight=e}if(c=="source"){b.listBoxContainer.jqxListBox({source:b.source});b.listBox.selectedIndex=-1;b.listBox.selectIndex(this.selectedIndex);b.renderSelection();if(e==null){b.clear()}}if(c=="displayMember"||c=="valueMember"){b.listBoxContainer.jqxListBox({displayMember:b.displayMember,valueMember:b.valueMember});b.renderSelection()}if(c=="theme"&&e!=null){b.listBoxContainer.jqxListBox({theme:e});b.dropdownlistContent.removeClass();b.dropdownlistContent.addClass(b.toThemeProperty("jqx-dropdownlist-content"));b.dropdownlistWrapper.removeClass();b.dropdownlistWrapper.addClass(b.toThemeProperty("jqx-disableselect"));b.host.removeClass();b.host.addClass(b.toThemeProperty("jqx-fill-state-normal"));b.host.addClass(b.toThemeProperty("jqx-dropdownlist-state-normal"));b.host.addClass(b.toThemeProperty("jqx-rc-all"));b.host.addClass(b.toThemeProperty("jqx-widget"));b.host.addClass(b.toThemeProperty("jqx-widget-content"));b.arrow.removeClass();b.arrow.addClass(b.toThemeProperty("icon-arrow-down"));b.arrow.addClass(b.toThemeProperty("icon"))}if(c=="autoDropDownHeight"){b.listBoxContainer.jqxListBox({autoHeight:b.autoDropDownHeight});if(b.autoDropDownHeight){b.container.height(b.listBoxContainer.height()+25)}else{b.listBoxContainer.jqxListBox({height:b.dropDownHeight});b.container.height(parseInt(b.dropDownHeight)+25)}}if(c=="searchMode"){b.listBoxContainer.jqxListBox({searchMode:b.searchMode})}if(c=="incrementalSearch"){b.listBoxContainer.jqxListBox({incrementalSearch:b.incrementalSearch})}if(c=="incrementalSearchDelay"){b.listBoxContainer.jqxListBox({incrementalSearchDelay:b.incrementalSearchDelay})}if(c=="dropDownHeight"){if(!b.autoDropDownHeight){b.listBoxContainer.jqxListBox({height:b.dropDownHeight});b.container.height(parseInt(b.dropDownHeight)+25)}}if(c=="dropDownWidth"||c=="scrollBarSize"){var d=b.width;if(b.dropDownWidth!="auto"){d=b.dropDownWidth}b.listBoxContainer.jqxListBox({width:d,scrollBarSize:b.scrollBarSize});b.container.width(parseInt(d)+25)}if(c=="width"||c=="height"){if(e!=f){this.refresh();if(c=="width"){if(b.dropDownWidth=="auto"){var d=b.host.width();b.listBoxContainer.jqxListBox({width:d});b.container.width(parseInt(d)+25)}}}}if(c=="checkboxes"){b.listBoxContainer.jqxListBox({checkboxes:b.checkboxes})}if(c=="selectedIndex"){if(b.listBox!=null){b.listBox.selectIndex(e);b.renderSelection()}}}})})(jQuery);