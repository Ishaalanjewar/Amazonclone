const imgs=document.querySelectorAll('.header-slider ul img');
const prev__btn=document.querySelectorAll('.control_prev');
const imgs=document.querySelectorAll('.control_next');

let n=0;

function changeSlide(){
    for(let i=0;i<imgs.length;i++){
        imgs[i].style.display ='none';
    }
    imgs[n].style.display='block';
}

changeSlide();

next_btn.addEventListener('click',(e)=>{
    if(n<img.length-1){
        n++;
    }else{
        n=0;
    }
    changeSlide();
})

const scrollContainer = document.querySelectorAll('.product');

for(const item of scrollContainer){
    item.addEventListener('wheel',(evt)=>{
        evt.preventDefault();
        item.scrollLeft += evt.deltaY;
    });
}