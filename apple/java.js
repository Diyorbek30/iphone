let btn_one = document.querySelector('.btn_first')
let btn_two = document.querySelector('.btn_second')

let color_one = document.querySelector('.color_one')
let color_two = document.querySelector('.color_two')
let color_three = document.querySelector('.color_three')
let color_four = document.querySelector('.color_four')
let color_five = document.querySelector('.color_five')

let img = document.querySelector('.img_1')

let tex_one = document.querySelector('.tex_two')
let tex_two = document.querySelector('.tex_second') 


btn_one.onclick = () => {
    btn_one.classList.toggle('active')
    btn_two.classList.remove('active')
    tex_one.innerHTML = 'Iphone 13 Pro'
    img.setAttribute('src', './img/iphone-13-pro-family-select.jpg')
    tex_two.innerHTML = 'From $999 or $41.62/mo.per month for 24 mo. before trade-in'
}

btn_two.onclick = () => {
    btn_two.classList.toggle('active')
    btn_one.classList.remove('active')
    img.setAttribute('src', './img/iphone-13-pro-max-family-select.jpg')
    tex_one.innerHTML = 'Iphone 13 Pro Max'
    tex_two.innerHTML = 'From $1099 or $45.79/mo.per month for 24 mo. before trade-in'
}
color_one.onclick = () => {
    img.setAttribute('src', './img/green.png')
    color_one.classList.add('activeS')
}
color_two.onclick = () => {
    img.setAttribute('src', './img/silver.png')
}
color_three.onclick = () => {
    img.setAttribute('src', './img/gold.png')
}
color_four.onclick = () => {
    img.setAttribute('src', './img/graph.png')
}
color_five.onclick = () => {
    img.setAttribute('src', './img/blue.png')
}
