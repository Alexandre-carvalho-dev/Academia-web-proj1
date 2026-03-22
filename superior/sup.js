

 function peitoral(){
    const div=document.querySelector('.div2')
    div.innerHTML=`
    <div>
        <h3>supino enclinado</h3>
        <img src="img_sup/pitoral2.webp" width="80%" height="400px" alt="">
        <p>
            hhhhhhhhhhhhhhhhhhhhhhh <br>
            gggggggggggggggggggggbr <br>
            ggggggggggggggggggggggggg
        </p>
    </div>
    `
    const div1=document.createElement('div')
    const img=document.createElement('img')
    const p=document.createElement('p')
    const h3=document.createElement('h3')
    p.textContent=' hhhhhhhhhhhhhhhhhhhhhhh '   
    h3.textContent=' supino reto '   
    img.src="img_sup/pitoral2.webp"
    img.classList.add('img1')
div1.appendChild(h3)
div1.appendChild(img)
div1.appendChild(p)
div.appendChild(div1)
 }