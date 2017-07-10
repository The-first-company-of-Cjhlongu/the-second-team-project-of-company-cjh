$.get("http://139.199.192.48:9090/api/getbrandtitle",{},function(res){
    var $listStr = $(template("brand-list",res));
    $listStr.on("click","li",function(){
        var brandTitleId = $(this).attr("brandTitleId")
        $.cookie("brandTitleId",brandTitleId);
        location.href="/"
    })
    $(".brand-list").html($listStr);
})