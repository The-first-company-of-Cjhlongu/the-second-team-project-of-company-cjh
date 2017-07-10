/**
 * Created by www1 on 2017/6/30.
 */
require.config({
    baseUrl:"js",
    paths:{
        jquery:"lib/jquery-2.1.4",
        bootstrap:"../assets/bootstrap/js/bootstrap",
        jqueryCookie:"lib/jquery.cookie",
        text:"lib/text",
        artTemplate:"lib/template-web",
        api:"common/api",
        tpls:"../tpls",
        swiper:"../assets/swiper/js/swiper",
        zepto:"../assets/zepto/zepto",
        zeptoEvent:"../assets/zepto/event",
        zeptoTouch:"../assets/zepto/touch",
        zeptoFx:"../assets/zepto/fx",
        zeptoFxMethods:"../assets/zepto/fx_methods",
    },
    shim:{
        bootstrap:{
            deps:["jquery"],
        },
    }
});
require(["jquery","jqueryCookie","bootstrap"],function ($) {


});