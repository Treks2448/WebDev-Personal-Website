window.onload = function() 
{
    var images = document.getElementsByClassName("fading-img");
    images[0].style.opacity = 1;
    var interval = setInterval(fadeThroughImages, 3000);
}

function fadeThroughImages()
{
    var images = document.getElementsByClassName("fading-img");
    var nextImg;
    for (var i = 0; i < images.length; i++)
    {
        if (images[i].style.opacity == 0)
        {
            nextImg = images[i];
            break;
        }
    }
    if (nextImg == null) 
    {
        nextImg = images[0];
        for (var n = 1; n < images.length; n++)
        {
            images[n].style.opacity = 0;
        }
    }
    fadeTo(nextImg);
}

function fadeTo(next) 
{
    next.style.opacity = 0;
    var tick = function()
    {
        next.style.opacity = +next.style.opacity + 0.01;
        if (+next.style.opacity < 1) 
        {
            (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
        }
    }
    tick();
}
