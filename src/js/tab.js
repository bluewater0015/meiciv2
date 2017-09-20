//tab.js
import { ProductService } from "../../service/webService";

var oHtml = document.getElementsByTagName("html")[0];
oHtml.style.height = "100%";
var oBody = document.getElementsByTagName("body")[0];
oBody.style.height = "100%";
oBody.style.display = "flex";
oBody.style.flexDirection = "column";
//头部
var oHeader = document.createElement("div");
oBody.appendChild(oHeader);
oHeader.style.width = "100%";
oHeader.style.height = "140px";
oHeader.style.background = "#f99";
//oHeader.innerHTML = "头部";

//创建input的父盒子
var header_box = document.createElement("div");
var header_input = document.createElement("div");
var oInput = document.createElement("input");

//添加
oHeader.appendChild(header_box);
header_box.appendChild(header_input);
header_input.appendChild(oInput);

//设置样式
header_box.style.height = "80px";
header_box.style.display = "flex";
header_box.style.justifyContent = "center";
header_box.style.alignItems = "center";

header_input.style.width = "96%";
header_input.style.height = "40px";
header_input.style.background = "#fff";
header_input.style.display = "flex";
header_input.style.justifyContent = "center";
header_input.style.alignItems = "center";
header_input.style.border = "1px solid #ccc";
oInput.style.display = "inline-block";
oInput.style.width = "80%";
oInput.style.height = "100%";
oInput.style.border = "none";
oInput.style.outline = "none";
//创建tab
var header_tabs = document.createElement("div");
var header_tab = document.createElement("div");
//添加
oHeader.appendChild(header_tabs);
header_tabs.appendChild(header_tab);
//设置tab的样式
header_tabs.style.overflow = "auto";
header_tabs.style.width = "100%";
header_tabs.style.height = "60px";
header_tabs.style.display = "flex";
header_tabs.style.justifyContent = "center";
header_tabs.style.alignItems = "center";
header_tab.style.width = "96%";
header_tab.style.height = "38px";
//header_tab.style.border = "1px solid #ccc";
//for循环，加载多少条数据
var arr = ["推荐","视频","热点","图片","趣图","北京","娱乐","体育","时尚","国际","社会","汽车","科技","财经","问答"];
//console.log(arr.length);//16
var tab_ul = document.createElement("ul");
header_tab.appendChild(tab_ul);
//tab_ul.style.overflow = "auto";
tab_ul.style.width = "100%";
tab_ul.style.height = "38px";
tab_ul.style.display = "flex";
tab_ul.style.alignItems = "center";
for( let i = 0; i < arr.length; i++){
	var oLi = document.createElement("li");
	var oA = document.createElement("a");
	tab_ul.appendChild(oLi);
	oLi.appendChild(oA);
	//oLi.style.flex = 1;
	oLi.style.width = "200px";
	oLi.style.height = "100%";
	oLi.style.display = "flex";
	oLi.style.justifyContent = "center";
	oLi.style.alignItems = "center";
	oA.innerHTML = arr[i];
	var lis = document.getElementsByTagName("li");
	lis[i].onclick = function(){
		$(this).css("background","yellow").siblings().css("background","");
		$(this).css("color","#d00").siblings().css("color","#000");
	}

}
//循环遍历，给每个li添加点击事件
//内容
var oContent = document.createElement("div");
oBody.appendChild(oContent);
oContent.style.overflow = "auto";
//oContent.style.flexGrow = "1";
oContent.style.background = "#f9f";
//oContent.innerHTML = "内容";
oContent.style.display = "flex";
//为什么要加这个
oContent.style.flex = 1;
oContent.style.justifyContent = "center";
oContent.style.alignItems = "center";
var content_box = document.createElement("div");
oContent.appendChild(content_box);
content_box.style.width = "96%";
content_box.style.height = "100%";
//content_box.style.background = "#fff";
//content_box.style.display = "flex";
//content_box.style.flexGrow = "1";
//content_box.style.height = "300px";
// for( var i = 0; i< arr.length; i++){
// 	var list = document.createElement("div");
// 	list.style.width = "100%";
// 	list.style.height = "200px";
// 	list.style.background = "#fff";
// 	list.style.border = "1px solid #ccc";
// 	content_box.appendChild(list);

// 	var oH = document.createElement("h3");
// 	var oDl = document.createElement("dl");
// 	var oDt = document.createElement("dt");
// 	var oDd = document.createElement("dd");
// 	var oP = document.createElement("p");

// 	list.appendChild(oH);
// 	list.appendChild(oDl);
// 	list.appendChild(oP);
// 	oDl.appendChild(oDt);
// 	oDl.appendChild(oDd);

// 	oH.style.height = "60px";
// 	oDl.style.height = "100px";
// 	oDl.style.background = "yellow"
// 	oP.style.height = "40px";
// }
ProductService().then( function(data){
	console.log("data",data);
	for(var i = 0; i<data.length; i++){
		var list = document.createElement("div");
		list.style.width = "100%";
		list.style.height = "400px";
		list.style.background = "#fff";
		list.style.border = "1px solid #ccc";
		content_box.appendChild(list);

		var oH = document.createElement("h3");
		var oDl = document.createElement("dl");
		var oDt = document.createElement("dt");
		var oImg = document.createElement("img");
		var oDd = document.createElement("dd");
		var oP = document.createElement("p");

		list.appendChild(oH);
		list.appendChild(oDl);
		list.appendChild(oDl);
		list.appendChild(oDl);
		list.appendChild(oP);
		oDl.appendChild(oDt);
		oDl.appendChild(oDd);
		oDt.appendChild(oImg);

		oH.style.height = "60px";
		oH.style.display = "flex";
		//oH.style.justifyContent = "center";
		oH.style.alignItems = "center";
		oDl.style.height = "300px";
		oDl.style.background = "yellow"
		oDt.style.width = "28%";
		oDt.style.padding = "20px";
		oDt.style.height = "260px";
		oP.style.height = "40px";
		oP.style.display = "flex";
		oP.style.alignItems = "center";
		oImg.style.width = "100%";
		oImg.style.height = "100%";
		//渲染数据
		oH.innerHTML = data[i].goodsName;
		oP.innerHTML = data[i].className;
		oImg.src = data[i].goodsListImg;
	}

})

//尾部
var oFooter = document.createElement("div");
oBody.appendChild(oFooter);
oFooter.style.width = "100%";
oFooter.style.height = "100px";
oFooter.style.background = "#9ff";
oFooter.innerHTML = "底部";
