if("object"!=typeof rnChat&&(rnChat=new Object),"object"!=typeof rnChat.proc&&(rnChat.proc=new Boolean,rnChat.modules=new Object,rnChat.vars=new Object,rnChat.timers=new Object,rnChat.xhr=new Object),0==rnChat.proc){if(rnChat.proc=!0,null==document.getElementById("rnChat")&&(rnChat.vars.scratch=document.createElement("div"),rnChat.vars.scratch.id="rnChat",rnChat.vars.scratch.style="display: none;",document.body.appendChild(rnChat.vars.scratch)),void 0===rightNowDomainName)var rightNowDomainName,rightNowWidgetDomainName;for(location.href.match(/(zeus\.fds|(dev|tst.)\.custhelp)\.com/g)?(rightNowDomainName="https://macys--dev.custhelp.com",rightNowWidgetDomainName="https://macys--dev.widget.custhelp.com",rnChat.env="DEV",rnChat.modules=[rightNowWidgetDomainName+"/euf/assets/js/ee/chat_rules_init.dev.js?d=20180711",rightNowWidgetDomainName+"/euf/assets/js/ee/chat_rules_fn.dev.js?d=20180711",rightNowWidgetDomainName+"/euf/assets/js/ee/coremetrics.oracleEE.dev.js?d=20180711",rightNowWidgetDomainName+"/euf/assets/js/floatinghelp/floatinghelp.dev.js?d=20180711"]):(rightNowDomainName="https://www.customerservice-macys.com",rightNowWidgetDomainName="https://macys.widget.custhelp.com",rnChat.env="PROD",rnChat.modules=[rightNowWidgetDomainName+"/euf/assets/js/ee/chat_rules_init.min.js?d=20180711",rightNowWidgetDomainName+"/euf/assets/js/ee/chat_rules_fn.min.js?d=20180711",rightNowWidgetDomainName+"/euf/assets/js/ee/coremetrics.oracleEE.min.js?d=20180711",rightNowWidgetDomainName+"/euf/assets/js/floatinghelp/floatinghelp.min.js?d=20180711"]),rnChat.getCookie=function(t){var e=("; "+document.cookie).split("; "+t+"=");if(2==e.length)return e.pop().split(";").shift()},i=1;i<rnChat.modules.length;i++){var script=document.createElement("script");script.src=rnChat.modules[i],document.head.appendChild(script)}if(console.log("-- chat_rules_init loaded --"),"object"!=typeof macysns)var macysns={calledChatTest:0,x:0},PAChatimages=new Array;if("object"!=typeof rn_prodArray){var rn_prodArray=[],obj={ID:0,chats:!1,hours:!1,queuing:!1};rn_prodArray.push(obj)}deferredOfferDataCapture=function(){var t={83:"incidents.c$bagid",84:"incidents.c$carttotal",86:"incidents.c$customerid",87:"incidents.c$credit_dept",88:"incidents.c$sales_dept",89:"incidents.c$sales_proactive_dept",90:"incidents.c$chat_page_url",91:"incidents.c$chat_error_message",92:"incidents.c$chat_productids",93:"incidents.c$rulename",94:"incidents.c$chat_accepted_domain_var",95:"incidents.c$detect_reactive_chat",96:"incidents.c$chat_error_message_long",105:"incidents.c$sales_fob_name",106:"incidents.c$sales_cat_name",108:"incidents.c$chat_product_saleprice"},e=window[_vsq._widgets[0]];if(e){var a=_vsq._dataFields,n="";for(var s in a)if(a[s]&&0<a[s].length){if(0===s.indexOf("contacts.")||0===s.indexOf("incidents."))continue;n+="/"+t[s]+"/"+encodeURIComponent(a[s])}e.data.custom_fields_in_url=n,e.data.common_fields_in_url="",a["contacts.first_name"]&&""!=a["contacts.first_name"]&&(e.data.common_fields_in_url+="/contacts.first_name/"+encodeURIComponent(a["contacts.first_name"])),a["contacts.last_name"]&&""!=a["contacts.last_name"]&&(e.data.common_fields_in_url+="/contacts.last_name/"+encodeURIComponent(a["contacts.last_name"])),a["contacts.email"]&&""!=a["contacts.email"]&&(e.data.common_fields_in_url+="/contacts.email/"+encodeURIComponent(a["contacts.email"])),a["incidents.prod"]&&""!=a["incidents.prod"]&&(e.data.common_fields_in_url+="/p/"+encodeURIComponent(a["incidents.prod"]))}if(_vsq&&_vsq._spacWidgets[0]&&_vsq._spacWidgets[0].instanceId){var i=window[_vsq._spacWidgets[0].instanceId];if(i){var c=new RightNow.Client.EventObject(i.instanceId,_vsq._spacWidgets[0].instanceId),r=(a=_vsq._dataFields,{});for(var s in a)a[s]&&"object"!=typeof a[s]&&"function"!=typeof a[s]&&"symbol"!=typeof a[s]&&(0===s.indexOf("contacts.")||0===s.indexOf("incidents.")?r[s]=encodeURIComponent(a[s]):r[s]=a[s]);c.data={dataFields:r},RightNow.Client.Event.evt_updateCustomFieldsRequest.fire(c)}}};try{var rnPageTitle=document.title.replace("–","-");rnChat.vars.domain=location.hostname.replace(/^www1/,"www"),rnChat.vars.url=location.href.substr(0,255).toString(),document.getElementById("productMktData")&&(rnChat.vars.prodJSON=document.getElementById("productMktData").text.replace(/(\t|\r|\n)/g," "),rnChat.vars.price=JSON.parse(rnChat.vars.prodJSON).offers[0].price,rnChat.vars.brand=JSON.parse(rnChat.vars.prodJSON).brand.name),"object"==typeof utag_data.product_id&&1==utag_data.product_id.length&&(rnChat.vars.webId=Number(utag_data.product_id[0])),"object"==typeof utag_data.product_category_id&&1==utag_data.product_category_id.length&&(rnChat.vars.webCategoryId=utag_data.product_category_id[0]),"object"==typeof utag_data.product_category_name&&1==utag_data.product_category_name.length&&(rnChat.vars.webCategoryName=utag_data.product_category_name[0]),rnChat.getCookie("GCs")&&0<rnChat.getCookie("GCs").indexOf("UserName1_92_")&&(rnChat.vars.firstName=rnChat.getCookie("GCs").split("UserName1_92_")[1].split(/[0-9]/g)[0])}catch(t){}try{"string"!=typeof _vsq._dataFields["incidents.prod"]&&(_vsq._dataFields["incidents.prod"]="655")}catch(t){}}