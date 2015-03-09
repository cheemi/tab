/* 
   Author:Cheemi
   Blog Url:  http://cheemi.com
*/
// JavaScript Document
//公共方法
 function addHandlerEvent(el,type,handler){
	if(el.addEventListener){
		addHandlerEvent=el.addEventListener(type,handler,false);	
	}else if(el.attachEvent){
		 
		addHandlerEvent=el.attachEvent("on"+type,handler);	
	}else{
		addHandlerEvent=el["on"+type]=handler;	
	}
	return addHandlerEvent;
};
 
//tab实现方法
 function CTab(){};
 CTab.prototype={
	handlerTabNav:function(el,tabNavs,tabList){
	 addHandlerEvent(el,"click",function(event){
		 
		var id=(event.target||event.srcElement).id;
		var index= id.substr(id.length-1,1);
		 
		for(var i=0,len=tabList.length;i<len;i++){
			tabList[i].style.display="none";
			if(i==len-1){
				tabNavs[i].className="last";
			}else{
				tabNavs[i].className="";
			}
		}
		 
		tabList[index-1].style.display="block";
		tabNavs[index-1].className+=" hover";	
	 });
	} 
	  
 };
 