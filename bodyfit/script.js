let header=document.querySelector('.cabeça')
let cadastro=document.querySelector('.apresentação_site')
let academias=document.querySelector('.seção2')
let oferta=document.querySelector('.seção1')
let dica=document.querySelector('.dica')
let form=document.querySelector('.inscrever')
let footer=document.querySelector('#contato')
let body=document.querySelector('.body')
let aside=document.querySelector('.asideE')


function inscrever(){
form.style.display='flex' 
if(cadastro){
    cadastro.classList.remove('apresentação_site')
cadastro.classList.add('cadastro')
if(body){
    body.classList.remove('body')
body.classList.add('bodyE1')
}
if(header){
    header.classList.remove('cabeça')
header.classList.add('header')
}
if(oferta){
    oferta.classList.remove('seção1')
oferta.classList.add('oferta')
}
}




}

function submit(){
    let nome=document.querySelector('.nome').value
let email=document.querySelector('.email').value
let data=document.querySelector('.data').value

if(nome==='' || email==='' || data==='') {
    alert('campos vazios')
}
else{


let login=document.querySelector('.inscrever')
login.style.display='none'
if(body){
    body.classList.remove('bodyE1')
body.classList.add('bodyE')
}
body.classList.add('bodyE')
academias.classList.add('seçãoE2')
dica.classList.add('dicaE')
footer.classList.add('contatoE')



 
 let div1=document.createElement('div')
 let div2=document.createElement('div')
 let div3=document.createElement('div')
 

//div1
let h1=document.createElement('h1')
let p1=document.createElement('p')
let p2=document.createElement('p')
let ul1=document.createElement('ul')
let li1=document.createElement('li')
let li2=document.createElement('li')
let li3=document.createElement('li')
let li4=document.createElement('li')
let bt1=document.createElement('button')
li1.textContent='fssssss'
li2.textContent='fssssss'
li3.textContent='fssssss'
li4.textContent='fssssss'
p1.textContent='20mil kz'
p2.textContent='terás os segintes direitos '
h1.textContent='mínimo'
bt1.textContent='escolher'
bt1.classList.add('bt1')
ul1.appendChild(li1)
ul1.appendChild(li2)
ul1.appendChild(li3)
ul1.appendChild(li4)
div1.appendChild(h1)
div1.appendChild(p1)
div1.appendChild(p2)
div1.appendChild(ul1)
div1.appendChild(bt1)
div1.classList.add('divE')
h1.classList.add('h1')


//div2
let h2=document.createElement('h1')
let p3=document.createElement('p')
let p4=document.createElement('p')
let ul2=document.createElement('ul')
let li5=document.createElement('li')
let li6=document.createElement('li')
let li7=document.createElement('li')
let li8=document.createElement('li')
let bt2=document.createElement('button')
li5.textContent='fssssss'
li6.textContent='fssssss'
li7.textContent='fssssss'
li8.textContent='fssssss'
p3.textContent='20mil kz'
p4.textContent='terás os segintes direitos '
h2.textContent='mínimo'
bt2.textContent='escolher'
bt2.classList.add('bt2')
ul2.appendChild(li5)
ul2.appendChild(li6)
ul2.appendChild(li7)
ul2.appendChild(li8)
div2.appendChild(h2)
div2.appendChild(p3)
div2.appendChild(p4)
div2.appendChild(ul2)
div2.appendChild(bt2)
div2.classList.add('div2')

//div3
let h3=document.createElement('h1')
let p5=document.createElement('p')
let p6=document.createElement('p')
let ul3=document.createElement('ul')
let li9=document.createElement('li')
let li10=document.createElement('li')
let li11=document.createElement('li')
let li12=document.createElement('li')
let bt3=document.createElement('button')
li9.textContent='fssssss'
li10.textContent='fssssss'
li11.textContent='fssssss'
li12.textContent='fssssss'
p5.textContent='20mil kz'
p6.textContent='terás os segintes direitos '
h3.textContent='mínimo'
bt3.textContent='escolher'
bt3.classList.add('bt3')
ul3.appendChild(li9)
ul3.appendChild(li10)
ul3.appendChild(li11)
ul3.appendChild(li12)
div3.appendChild(h3)
div3.appendChild(p5)
div3.appendChild(p6)
div3.appendChild(ul3)
div3.appendChild(bt3)
div3.classList.add('div3')

aside.appendChild(div1)
aside.appendChild(div2)
aside.appendChild(div3)

 }
}


aside.addEventListener('click',(e)=>{
if(e.target.classList.contains('bt1')){
   aside.innerHTML=''
    let divf=document.createElement('div')
    divf.classList.add('divf1')
    let p1=document.createElement('p')
    let p2=document.createElement('p')
    let ul1=document.createElement('ul')
    let li1=document.createElement('li')
    let li2=document.createElement('li')
    let li3=document.createElement('li')
    let btok=document.createElement('button')
    let nome=document.querySelector('.nome').value
    let data=document.querySelector('.data').value
    p1.textContent='Bodyfitness dá-te as boas vindas '+nome+', agora és membro do bodyfitness' 
    p2.textContent='Aderiste ao nosso pacote mínimo no valor de 20mil kz, com este pacote terás os seguintes acessos'
    li1.textContent='acesso as nossas academias'
    li2.textContent='acesso a água'
    li3.textContent='acesso as academias durante este mes todo até a renovação'
    btok.textContent='OK'
    btok.classList.add('btok')
    ul1.appendChild(li1)
    ul1.appendChild(li2)
    ul1.appendChild(li3)
    divf.appendChild(p1)
    divf.appendChild(p2)
    divf.appendChild(ul1)
    divf.appendChild(btok)
    divM.appendChild(divf)
    
    
}
if(e.target.classList.contains('bt2')){
   aside.innerHTML=''
    let divf=document.createElement('div')
    divf.classList.add('divf1')
    let p1=document.createElement('p')
    let p2=document.createElement('p')
    let ul1=document.createElement('ul')
    let li1=document.createElement('li')
    let li2=document.createElement('li')
    let li3=document.createElement('li')
    let btok=document.createElement('button')
    let nome=document.querySelector('.nome').value
    let data=document.querySelector('.data').value
    p1.textContent='Bodyfitness dá-te as boas vindas '+nome+', agora és membro do bodyfitness' 
    p2.textContent='Aderiste ao nosso pacote médio no valor de 30mil kz, com este pacote terás os seguintes acessos'
    li1.textContent='acesso as nossas academias'
    li2.textContent='acesso a água'
    li3.textContent='acesso as academias durante este mes todo até a renovação'
    btok.textContent='OK'
    btok.classList.add('btok')
    ul1.appendChild(li1)
    ul1.appendChild(li2)
    ul1.appendChild(li3)
    divf.appendChild(p1)
    divf.appendChild(p2)
    divf.appendChild(ul1)
    divf.appendChild(btok)
    divM.appendChild(divf)
    
}
if(e.target.classList.contains('bt3')){
    aside.innerHTML=''
    let divf=document.createElement('div')
    divf.classList.add('divf1')
    let p1=document.createElement('p')
    let p2=document.createElement('p')
    let ul1=document.createElement('ul')
    let li1=document.createElement('li')
    let li2=document.createElement('li')
    let li3=document.createElement('li')
    let btok=document.createElement('button')
    let nome=document.querySelector('.nome').value
    let data=document.querySelector('.data').value
    p1.textContent='Bodyfitness dá-te as boas vindas '+nome+', agora és membro do bodyfitness' 
    p2.textContent='Aderiste ao nosso pacote máximo no valor de 40mil kz, com este pacote terás os seguintes acessos'
    li1.textContent='acesso as nossas academias'
    li2.textContent='acesso a água'
    li3.textContent='acesso as academias durante este mes todo até a renovação'
    btok.textContent='OK'
    btok.classList.add('btok')
    ul1.appendChild(li1)
    ul1.appendChild(li2)
    ul1.appendChild(li3)
    divf.appendChild(p1)
    divf.appendChild(p2)
    divf.appendChild(ul1)
    divf.appendChild(btok)
    divM.appendChild(divf)
    
    
}

})

let divM=document.querySelector('.divM')
divM.addEventListener('click',(e)=>{
    if(e.target.classList.contains('btok')){
   divM.innerHTML=''
 cadastro.classList.add('apresentação_site')
header.classList.add('cabeça')
if(body){
    body.classList.remove('bodyE')
body.classList.add('body')
}
if(oferta){
    oferta.classList.remove('oferta')
oferta.classList.add('seção1')
}

academias.classList.add('seçãoE2_1')
dica.classList.add('dicaE_1')
footer.classList.add('contatoE_1')
}
})