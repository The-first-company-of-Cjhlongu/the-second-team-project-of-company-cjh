/**
 * Created by www1 on 2017/7/4.
 */
define(["jquery"],function ($) {
    return {
        ajax:function(type,url,data,cb){
            $.ajax("/api/"+url,{
                type:type,
                data:data,
                success:function(res){
                    if(res.code!==200)  throw new Error(res.msg);
                    typeof cb==="function"&&cb(res);
                }
            });
        },
        get:function(url,data,cb){
            this.ajax("get",url,data,cb);
        },
        post:function(url,data,cb){
            this.ajax("post",url,data,cb);
        }

    };
});