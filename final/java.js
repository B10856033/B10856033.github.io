var video = 1

function video(n) {
    video += n;
    if (video = 1) {
        document.getElementById("video").innerHTML("<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/a52HzwvaEqE\" id=\"video\" frameborder\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>")
        document.getElementById("videotext").innerText("與社工第一節比賽")
    } else if (video = 2) {
        document.getElementById("video").innerHTML("<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/F5CQ0qkLksE\" id=\"video\" frameborder\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>")
        document.getElementById("videotext").innerText("與社工第二節比賽")
    } else if (video = 3) {
        document.getElementById("video").innerHTML("<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/T1Wy41kXHxU\" id=\"video\" frameborder\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>")
        document.getElementById("videotext").innerText("與社工第三節比賽")
    } else if (video = 4) {
        document.getElementById("video").innerHTML("<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/a52HzwvaEqE\" id=\"video\" frameborder\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>")
        document.getElementById("videotext").innerText("與社工第四節比賽")
    } else if (video = 0) {
        video = 4
        document.getElementById("video").innerHTML("<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/jQv7zL3B7PQ\" id=\"video\" frameborder\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>")
        document.getElementById("videotext").innerText("與社工第四節比賽")
    } else {
        video = 1
        document.getElementById("video").innerHTML("<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/a52HzwvaEqE\" id=\"video\" frameborder\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>")
        document.getElementById("videotext").innerText("與社工第一節比賽")
    }
}
$(document).ready(function() {
    $("#num").click(function() {
        $("#nav1").toggle()
    })
})