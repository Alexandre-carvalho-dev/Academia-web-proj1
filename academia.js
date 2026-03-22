let n=0
let n1=0
setInterval(
    function contar(){
n++
n1++
 imagens()
 front()

   },1000
)
function front(){
   if(n===3){
let publ=document.querySelector('.divfront')
publ.innerHTML='<img src="img/pulldown-exercise-dwayne-johnson.gif" width="90%" height="500px" alt="">'
   }

   if(n===6){
let publ=document.querySelector('.divfront')
publ.innerHTML='<img src="img/jinder-mahal-lifting-weights.gif" width="90%" height="500px" alt="">'
   }
   if(n===9){
let publ=document.querySelector('.divfront')
publ.innerHTML='<img src="img/art-atwood.gif" width="90%" height="500px" alt="">'}
   if(n===14){
let publ=document.querySelector('.divfront')
publ.innerHTML='<img src="img/peitoral.webp" width="90%" height="500px" alt="">'
   }
   if(n===20){
n=0
let publ=document.querySelector('.divfront')
publ.innerHTML='<img src="img/working-out-dwayne-johnson.gif" width="90%" height="500px" alt="">'
   }
}



function imagens(){
   if(n1===5){
    let a=document.querySelector('.a1')
    let b=document.querySelector('.b1')
    let c=document.querySelector('.c1')
    a.innerHTML='<img src="img/perna2.webp" width="300px" height="300px" title="clica para encaminhar-te aos treinos" alt="">'
    b.innerHTML='<img src="img/pitoral2.webp" width="300px" height="300px" title="clica para encaminhar-te aos treinos" alt=""> '
    c.innerHTML='<img src="img/whey.jpg" width="300px" height="300px" title="clica para encaminhar-te aos treinos" alt="">'
}
if(n1===10){
   let a=document.querySelector('.a1')
   let b=document.querySelector('.b1')
    let c=document.querySelector('.c1')
   a.innerHTML='<img src="img/perna3.webp" width="300px" height="300px" title="clica para entrares nas nossas dicas nutritivas" alt="">'
   b.innerHTML='<img src="img/baixados.webp" width="300px" height="300px" title="clica para encaminhar-te aos treinos" alt="">'
   c.innerHTML='<img src="img/proteinas2.webp" width="300px" height="300px" title="clica para encaminhar-te aos treinos" alt="">'
}
if(n1===15){
   n1=0
 let a=document.querySelector('.a1')
 let b=document.querySelector('.b1')
    let c=document.querySelector('.c1')
 a.innerHTML='<img src="img/OIP.webp" width="300px" height="300px" title="clica para encaminhar-te aos treinos" alt="">'
 b.innerHTML='<img src="img/peitoral.webp" width="300px" height="300px" title="clica para encaminhar-te aos treinos" alt="">'
 c.innerHTML='<img src="img/proteinas 1.webp" width=300px" height="300px" title="clica para encaminhar-te aos treinos" alt="">'
}
}