
$(document).ready(function(){
    $(function() {
        jcf.replaceAll();


    });


    $(".case_filter .filter-open").on("click",function(){
        $(this).next().toggleClass("active")
    });
    $(".case_filter #pp_offers_list li").on("click",function(){
        $("#pp_offers_list li").removeClass("active"),
            $(this).addClass("active"),
            $(this).parent("#pp_offers_list").removeClass("active"),
            $(".filter-open").find("span b").text($(this).find("a").text())
    });
});/**
 * Created by Nafta on 21.09.2020.
 */
