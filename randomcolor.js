element=document.querySelectorAll("li");
for(let i=0;i<element.length;i++){
element[i].addEventListener('click',()=>{
    let x=Math.round(0xffffff * Math.random()).toString(16);
    let y=(6-x.length);
    let z='000000';
    let z1 = z.substring(0,y);
    let color= '#' + z1 + x;
    element[i].style.color=color
})}