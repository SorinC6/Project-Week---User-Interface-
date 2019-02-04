const imgNavBtn = document.querySelector('#hamburgerImg');
//console.log(imgNavBtn);
const body = document.querySelector('body');
const expanded=document.querySelector('.transparent');
console.log(expanded);
imgNavBtn.addEventListener('click', function() {
    //using toggle maybe ...
    console.log('tralala');
    expanded.style.display='block';
    TweenMax.from('.transparent',0.5,{marginTop:500})
    TweenMax.from('.expandedText',2,{
        scale:0,
        ease: Elastic.easeOut.config(1, 0.3)
        ,delay:0.7
    })

});

const btnClose=document.querySelector('.close');

btnClose.addEventListener('click',closeNavigation);

function closeNavigation(){
    expanded.style.display="none";
}

