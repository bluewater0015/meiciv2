//baseService
//作用是：封装ajax各种请求，比如get、post
//ES5的写法
// var get = function(url,dataType){
// 	//Promise的有写法，目前还没有理解
// 	return new Promise(function(resolve,reject){
// 		$.ajax({
// 			type: "GET",
// 			url,
// 			dataType,
// 			success: function(data){
// 				//当数据加载成功时，注入到success中
// 				resolve(data);
// 			},
// 			fail: function(e){
// 				reject(e);
// 			}
// 		})
// 	})
// }
//ES6的写法
let get = (url,dataType) =>{
	//返回的是什么？是promise对象
	//执行ajax后就可得到数据,注入进入
	//返回promise 就相当于返回data数据
	//console.log(22222);
	return new Promise( (resolve,reject)=>{
		$.ajax({
			url,
			type: "GET",
			dataType,
			success: (data)=>{
				//数据加载成功时注入
				resolve(data);
			},
			fail: (e)=>{
				reject(e);
			}
		})
	})
}
//console.log("---get---",get)
//返回的这个东西有什么作用，是干嘛的
//需要抛出
export{
	get,
}