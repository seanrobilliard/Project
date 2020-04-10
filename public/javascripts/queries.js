$('body').ready(function(){

    //jQuery for the comment section of each venue
    $('.link1').click(function(){
        $('.tag2 , .tag3').addClass("hidden")
        $('.tag1').removeClass("hidden")
        $('.link1').addClass("active")
        $('.link2 , .link3').removeClass("active")
    })

    $('.link2').click(function(){
        $('.tag1 , .tag3').addClass("hidden")
        $('.tag2').removeClass("hidden")
        $('.link2').addClass("active")
        $('.link1 , .link3').removeClass("active")
    })

    $('.link3').click(function(){
        $('.tag1 , .tag2').addClass("hidden")
        $('.tag3').removeClass("hidden")
        $('.link3').addClass("active")
        $('.link1 , .link2').removeClass("active")
    })
})
    