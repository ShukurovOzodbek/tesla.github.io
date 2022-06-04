let url = 'http://localhost:3001/car'

let arr = []
axios.get(url)
    .then(res => {
        for(let item of res.data) {
            arr.push(item) 
        }
    })
    .catch(err => console.log(err))

let speedtop = document.querySelector('.speedtop') 
let speedbot = document.querySelector('.speedbot') 
let temptop = document.querySelector('.temptop') 
let tempbot = document.querySelector('.tempbot') 
let disktop = document.querySelector('.disktop') 
let diskbot = document.querySelector('.diskbot') 
let speed = document.querySelector('.speed')
let temp = document.querySelector('.temp')
let disk = document.querySelector('.disk')
let stat = document.querySelector('.zp')
let price = document.querySelector('.price')
let img = document.querySelector('.wh')
let img2 = document.querySelector('.wh2')
let price2 =document.querySelector('#pr')
let view2 = document.querySelector('#vw')

spedT()
spedB()

function spedT() {
    speedtop.onclick = () => {
        if(parseInt(speed.innerHTML) < 320) {
            speed.innerHTML = parseInt(speed.innerHTML) + 5
            stat.innerHTML = parseInt(stat.innerHTML) - 5
    
        }else{
            speed.innerHTML = '320 MAX'
        }
    }
}

function spedB() {
    speedbot.onclick = () => {
        if(parseInt(speed.innerHTML) > 0) {
            speed.innerHTML = parseInt(speed.innerHTML) - 5
            stat.innerHTML = parseInt(stat.innerHTML) + 5
    
        }else if(parseInt(speed.innerHTML) === 0){
            speed.innerHTML = '0 MIN'
        }
    }
}
tempT()
tempB()

function tempT() {
    temptop.onclick = ()  => {
        temp.innerHTML = parseInt(temp.innerHTML) + 1
        stat.innerHTML = parseInt(stat.innerHTML) - 3
    }
}
function tempB() {
    tempbot.onclick = ()  => {
        temp.innerHTML = parseInt(temp.innerHTML) - 1
        stat.innerHTML = parseInt(stat.innerHTML) + 3
    }
}
diskT()
diskB()
function diskT() {
    if(parseInt(disk.innerHTML) === 18) {
        img2.src = './img/wheel-removebg-preview.png'
        img.src = './img/wheel-removebg-preview.png'
    }
    disktop.onclick = ()  => {
        if(parseInt(disk.innerHTML) <= 16) {
            disk.innerHTML = parseInt(disk.innerHTML) + 2
            img2.src = './img/wheel-removebg-preview.png'
            img.src = './img/wheel-removebg-preview.png'
            price.innerHTML = parseInt(price.innerHTML) + 2400
        }else{
        }
    }
}
function diskB() {
    diskbot.onclick = ()  => {
        if(parseInt(disk.innerHTML) === 18) {
            disk.innerHTML = parseInt(disk.innerHTML) - 2
            img2.src = './img/wheel2png-removebg-preview.png'
            img.src = './img/wheel2png-removebg-preview.png'
            price.innerHTML = parseInt(price.innerHTML) - 2400
        }else{
        }
    }
}
let kond = document.querySelector('.kond')
let version = document.querySelector('.version')
let view = document.querySelector('.view')
cond()
function cond() {
    kond.onclick = () => {
        if(kond.checked == false) {
           stat.innerHTML = parseInt(stat.innerHTML) + 40 
           console.log('asdsad'); 
        }else{
           stat.innerHTML = parseInt(stat.innerHTML) - 40 
        }
    }
}

All(version)
All(kond)

function All(item) {
    item.onclick = () => {
        if(item.checked == false) {
           stat.innerHTML = parseInt(stat.innerHTML) + 23 
           console.log('asdsad'); 
        }else{
           stat.innerHTML = parseInt(stat.innerHTML) - 23 
        }
    }
}
vid()
function vid() {
    view.onclick = () => {
        if(view.checked == false) {
            price.innerHTML = parseInt(price.innerHTML) + 5500 
            console.log('asdsad'); 
        }else{
            price.innerHTML = parseInt(price.innerHTML) - 5500 
        }
    }
}
vid2()
function vid2() {
    view2.onclick = () => {
        if(view2.checked == false) {
            price2.innerHTML = parseInt(price2.innerHTML) + 5500 
            console.log('asdsad'); 
        }else{
            price2.innerHTML = parseInt(price2.innerHTML) - 5500 
        }
    }
}

let cir = document.querySelector('.cir')
let cir2 = document.querySelector('.cir2')
let cir3 = document.querySelector('.cir3')
let img_salon = document.querySelector('#tesla')

cir.onclick = () => {
    img_salon.src = './img/salon.png'
    price2.innerHTML = '49000'
}
cir2.onclick = () => {
    img_salon.src = './img/w.png'
    price2.innerHTML = '52000'
}
cir3.onclick = () => {
    img_salon.src = './img/y.png'
    price2.innerHTML = '57000'
}

let tesla = document.querySelector('.tesla')
let cont = document.querySelector('.container_2')

tesla.onclick = () => {
    tesla.style.transform = 'scale(18)'
    cont.classList.add('active')
    setTimeout(() => {
        cont.classList.add('act')
        tesla.style.transform = 'scale(1)'
    }, 300);
}