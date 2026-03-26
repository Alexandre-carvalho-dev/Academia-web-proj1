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
function reutilizaçao0(nr,img1r,n0){
   if(n===nr){
let img1=document.querySelector('.img1')
img1.src=img1r
n=n0
   }
}
function front(){
   reutilizaçao0(3,"img/pulldown-exercise-dwayne-johnson.gif",3)
   reutilizaçao0(6,"img/jinder-mahal-lifting-weights.gif",6)
   reutilizaçao0(9,"img/art-atwood.gif",9)
   reutilizaçao0(14,"img/peitoral.webp",14)
   reutilizaçao0(20,"img/working-out-dwayne-johnson.gif",0)
}

function reutilizaçao1(ar,br,cr,n1r,n2r){
    if(n1===n1r){
n1=n2r
    let a=document.querySelector('.a1')
    let b=document.querySelector('.b1')
    let c=document.querySelector('.c1')
    a.src=ar
    b.src=br
   c.src=cr
   }
}
function imagens(){
 reutilizaçao1("img/perna2.webp","img/pitoral2.webp","img/whey.jpg",5,5)

    reutilizaçao1("img/perna3.webp","img/baixados.webp","img/proteinas2.webp",10,10)

    reutilizaçao1("img/OIP.webp","img/peitoral.webp","img/proteinas 1.webp",15,0)
}