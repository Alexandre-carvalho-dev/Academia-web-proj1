let header=document.querySelector('.cabeça')
let cadastro=document.querySelector('.apresentação_site')
let academias=document.querySelector('.seção2')
let oferta=document.querySelector('.seção1')
let dica=document.querySelector('.dica')
let form=document.querySelector('.inscrever')
let footer=document.querySelector('#contato')
let body=document.querySelector('body')



function inscrever(){
form.style.display='flex' 
cadastro.style.opacity='5%'
header.style.opacity='0%'

oferta.style.opacity='5%'

body.style.backgroundColor='black'
body.classList.add('bodyE1')

}

function submit(){
    let nome=document.querySelector('.nome').value
let email=document.querySelector('.email').value
let data=document.querySelector('.data').value

if(nome==='' || email==='' || data==='') {
    alert('vazio')
}
else{


let login=document.querySelector('.inscrever')
login.style.display='none'
body.classList.add('bodyE')
academias.classList.add('seçãoE2')
dica.classList.add('dicaE')
footer.classList.add('contatoE')



 let aside=document.querySelector('.asideE')
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
ul2.appendChild(li5)
ul2.appendChild(li6)
ul2.appendChild(li7)
ul2.appendChild(li8)
div2.appendChild(h2)
div2.appendChild(p3)
div2.appendChild(p4)
div2.appendChild(ul2)
div2.appendChild(bt2)
div2.classList.add('divE')

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
ul3.appendChild(li9)
ul3.appendChild(li10)
ul3.appendChild(li11)
ul3.appendChild(li12)
div3.appendChild(h3)
div3.appendChild(p5)
div3.appendChild(p6)
div3.appendChild(ul3)
div3.appendChild(bt3)
div3.classList.add('divE')

aside.appendChild(div1)
aside.appendChild(div2)
aside.appendChild(div3)

 }
}
