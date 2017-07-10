/**
 * Created by CJH on 2017/7/9.
 */
///getbrandproductlist
require.config({
  baseUrl:"../../../js"
  ,paths:{
    jquery:"lib/jquery-2.1.4"
    ,art:"lib/template-web"
    ,text:"lib/text"
    ,cookie:"lib/jquery.cookie"
  }
  ,shim:{
    cookie:{
      deps:["jquery"]
    }
  }

})
require(["jquery"],function($){
  var data={
    brandtitleid:0,
    pagesize:4
  };
  console.log(1);
  $.get("http://127.0.0.1:9090/api/getbrandproductlist",data,function(cdata){
  })
})