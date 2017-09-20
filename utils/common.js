//common.js
//引入需要的文件
import { ProductService, } from "../service/webService";
//在common.js中加载模板，然后抛出
function headerLoad(){
	//注意load里面的路径是相对于index.html的
	$("#header").load(`./utils/commonHtml/header.html`);
}
function logoLoad(){
	$("#logo").load(`./utils/commonHtml/logo.html`);
}
function navLoad(){
	ProductService().then(data=>{
			//console.log(data);
			$(".nav_li").html("");
			//创建一个模板
			for(let i=0; i<data.length; i++){
				$(".nav_li").append('<li class="recent"></li>');
				//$(".recent").append('<a class="nav_product" href="#"></a>');
			}
			addOverEvent();
			$(".recent").load(`./utils/commonHtml/nav.html` ,()=>{
				getNavData();
			});
			function getNavData(){
				for(let i=0; i< data.length; i++){
					// $(".recent").eq(i).mouseover( ()=>{
					// 	alert(i);
					// 	$(".recent").eq(i).css("background","red").siblings().css("background","#FFFFFF");
					// 	//$(".nav_com").eq(i).css("display","block").sibings().css("display","none");
					// })
					$(".nav_product").eq(i).text(data[i][7]);
					$(".today_line").eq(i).text(data[i][7]);
					$(".today_line").eq(i).text(data[i][7]);
					$(".yesday_line").eq(i).text(data[i][7]);
					$(".week_line").eq(i).text(data[i][7]);
					$(".mans").eq(i).text(data[i][7]);
					$(".man_bag").eq(i).text(data[i][7]);
					$(".man_shoes").eq(i).text(data[i][7]);
					$(".man_clothes").eq(i).text(data[i][7]);
					$(".man_access").eq(i).text(data[i][7]);
					$(".womans").eq(i).text(data[i][7]);
					$(".woman_bag").eq(i).text(data[i][7]);
					$(".woman_shoes").eq(i).text(data[i][7]);
					$(".woman_clothes").eq(i).text(data[i][7]);
					$(".woman_access").eq(i).text(data[i][7]);
					$(".recoment_product").eq(i).text(data[i][7]);
					$(".Moschino").eq(i).attr("src",data[i][3]);
					$(".mos_content").eq(i).text(data[i][2]);
					$(".mos_bags").eq(i).attr("src",data[i][3]);
					$(".mos_text").eq(i).text(data[i][2]);
					$(".mos_chino").eq(i).attr("src",data[i][3]);
					$(".mos_html").eq(i).text(data[i][2]);
				}	
			}
			function addOverEvent(){
				for(let i = 0;i < data.length; i++){
					$(".recent").eq(i).mouseover( ()=>{
						//console.log(i);
						$(".recent").eq(i).css("background","red").siblings().css("background","");
						//$(".nav_com").eq(i).css("display","block").siblings().css("display","none");
					})
				}
				
			}

		})
}
function footerLoad(){
	$("#footer").load(`./utils/commonHtml/footer.html`);
}
//export 抛出
//对应的有两种写法
//第一种是：
//export default headerLoad; 只能抛出一个
//第二种是用对象的方式，可以抛出一个及多个
//注意抛出的方式不一样，接受的方式也是不一样的
export {
	headerLoad,
	logoLoad,
	navLoad,
	footerLoad,
}