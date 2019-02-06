const imgNavBtn = document.querySelector('#hamburgerImg');
const body = document.querySelector('body');
const expanded=document.querySelector('.transparent');
//console.log(expanded);
imgNavBtn.addEventListener('click', function() {
    //using toggle maybe ...
    //console.log('tralala');
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


//================GASP ANIMATION=======

const aTag=document.querySelectorAll('a');

aTag.forEach(item=>{
    item.addEventListener('mouseover',function(){
        //item.style.color='red';
        TweenMax.to(item,1,{fontSize:25})
        TweenMax.to(item,1,{color:'black'})
    })

    item.addEventListener('mouseout',function(){
        //item.style.color='red';
        TweenMax.to(item,1,{fontSize:15})
        TweenMax.to(item,1,{color:'white'})
    })
})




