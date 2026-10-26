// Menu mobile
const btn=document.querySelector('.menu-btn'), nav=document.querySelector('nav');
if(btn){btn.addEventListener('click',()=>{const a=nav.classList.toggle('aberto');btn.setAttribute('aria-expanded',a)})}
// Animação ao rolar
const els=document.querySelectorAll('.revelar');
if('IntersectionObserver' in window){
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visivel');io.unobserve(e.target)}}),{threshold:.12});
  els.forEach(el=>io.observe(el));
}else{els.forEach(el=>el.classList.add('visivel'))}
// Ampliar imagens (lightbox)
const lb=document.createElement('div');lb.className='lightbox';lb.innerHTML='<img alt="">';document.body.appendChild(lb);
document.querySelectorAll('.caixa-medicao img,.galeria img,.img-unica img').forEach(img=>{
  img.addEventListener('click',()=>{lb.firstChild.src=img.src;lb.firstChild.alt=img.alt;lb.classList.add('aberto')});
});
lb.addEventListener('click',()=>lb.classList.remove('aberto'));
document.addEventListener('keydown',e=>{if(e.key==='Escape')lb.classList.remove('aberto')});
