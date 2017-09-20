//webService
//作用是用promise处理数据
//首先需要引进baseService
import { get,} from "./baseService";
//先把Config引入
const Config = require(`../config`);
//等会执行后看打印出来什么
//console.log(Config);
//console.log(${Config.main_url});
//如何用呢？
//ES5写法
// var ProductService = function(){
// 	return new Promise(function(resolve,reject){
// 		//get(url,dataType)
// 		get(`${Config.main_url}/getGoods.php`,"jsonp").then(function(data){
// 			resolve(data);
// 		}).catch(function(error){
// 			reject(error);
// 		})
// 	})
// }
//ES6写法
//抛出这个函数
let ProductService = ()=>{
	//返回一个Promise对象
	//先执行webService,需要的得到一个数据
	//得到的数据从哪儿来呢
	//调用get方法即可
	//再执行baseService
	//console.log("1111");
	return new Promise( (resolve,reject)=>{
		//${Config.main_url}
		get(`${Config.main_url}/getGoods.php`,"jsonp").then((data)=>{
			resolve(data);
		}).catch((error)=>{
			reject(error);
		})
	})
}
// let testService = ()=>{
// 	return get(`${Config.main_url}/getGoods.php`,"jsonp");
// }
//console.log("--- ProductService---", ProductService);
//***有些不理解
export{
	ProductService,
}

