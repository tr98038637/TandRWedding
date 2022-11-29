const scrollTo=(x,y)=>{
 window.scroll({
  left: x,
  top: y,
  behavior: 'smooth' 
 });
},
Id=(e)=>document.getElementById(e),
Class=(e)=>document.getElementsByClassName(e),
WdgMthds=Array.from(Class('WeddingMethod'));

//Scrolls
Id('Logo').onclick=()=>scrollTo(0,0);

//Generate button to scroll top when it is not at the top
const ToTop=document.createElement('i');
ToTop.setAttribute('id','ScrollTop');
ToTop.setAttribute('class','fa-sharp fa-solid fa-angle-up')
ToTop.onclick=()=>scrollTo(0,0);


window.onscroll=()=>{
 fromTop=document.documentElement.scrollTop || document.body.scrollTop;
 fromTop!==0&&Id('Main').appendChild(ToTop)||ToTop.remove();
}


const Navs={
 "Message" : Id('MsgWrapper').getBoundingClientRect(),
 "Schedule" : Id('ScheduleWrapper').getBoundingClientRect(),
 "Menu" : Id('MenuWrapper').getBoundingClientRect()
}
for(i=0;i<Class('NavbarItem').length;i++){
 let name=Class('NavbarItem')[i].innerText;
 Class('NavbarItem')[i].onclick=()=>scrollTo(Navs[name].x,Navs[name].y-150);
};

WdgMthds.forEach(v=>v.onclick=(e=>{
 Id("WeddingMethodPopupWrapper").classList.add('open');
 console.log(e.target.src.split('/').pop());
}));
//Remove open class when clicked outside of Modal
Id('WeddingMethodPopupWrapper').onclick=e=>e.target.closest('#WeddingMethodPopup')===null&&Id('WeddingMethodPopupWrapper').classList.remove('open');
Id('MobileNavBtn').onclick=e=>Id('Navbar').classList.add('open');
Id('NavWrapper').onclick=e=>e.target.closest('Navbar')===null&&Id('Navbar').classList.remove('open');