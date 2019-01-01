//control.js
function getObj(id){
    return document.getElementById(id);  
  }
  var ui=new Object();
  ui.register=function(id,even,fun,arr){
    if(getObj(id)){
          getObj(id)["on"+even]=function(){
               fun(arr);
          }      
    }
  }   
  ui.register("baidu","click",tipInfo,[1,2]);
  /*
             第一参数：为button节点id
             第二参数：为需要注册的触发事件
             第三参数：事件触发函数
             第四参数：需要传递的参数。
  */
  /*
  
   说明：control.js的代码就是实现html页面节点事件的注册。使得节点的各种事件知道会触发什么函数去执行。
           具体的函数操作，可以放到model模块中执行，在model中，才是真正处理逻辑操作
  
  */