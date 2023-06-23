
const carousel=document.querySelector('.carousel');
let slider=[];
let slideindex=0;

const createslide =()=>{
    if(slideindex>=movies.length){
        slideindex=0;
    }

let slide=document.createElement("div");
let img=document.createElement("img");
let content=document.createElement("div");
let h1=document.createElement("h1");
let p=document.createElement("p");

img.appendChild(document.createTextNode(""));
h1.appendChild(document.createTextNode(movies[slideindex].name));
p.appendChild(document.createTextNode(movies[slideindex].des));
content.appendChild(h1);
content.appendChild(p);
slide.appendChild(content);
slide.appendChild(img);
carousel.appendChild(slide);


img.src=movies[slideindex].image;
slideindex++;
slide.className='slider';
content.className='slider-content';
h1.className='movie-title';
p.className='movie-des';
img.className='slider-img';
slider.push(slide);

if (slider.length) {
    slider[0].style.marginLeft = `calc(-${100 * (slider.length - 2)}% - ${
      30 * (slider.length - 2)
    }px)`;
  }
}
// for(let i=0;i<3;i++){
    // createslide();
// }
setInterval(()=>{
    createslide();
},3000);
const videoCards=[...document.querySelectorAll('.video-card')];

videoCards.forEach(item=>{
    item.addEventListener('mouseover',function(){
        let video=item.children[1];
        video.play()
    })
    item.addEventListener('mouseleave',function(){
        let video=item.children[1];
        video.pause();
    })
});
let cardcontainer=[...document.querySelectorAll(".card-container")];
let prebutton=[...document.querySelectorAll(".pre-btn")];
let nxtbutton=[...document.querySelectorAll(".nxt-btn")];
cardcontainer.forEach((item,i)=>{
let containerdimensions=item.getBoundingClientRect();
let containerwidth=containerdimensions.width;
nxtbutton[i].addEventListener('click',()=>{
    item.scrollLeft+=containerwidth-200;
}) 
prebutton[i].addEventListener('click',()=>{
    item.scrollLeft-=containerwidth+200;
}) 

})