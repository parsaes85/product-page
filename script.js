let productImgs = [
    'images/image-product-1.jpg',
    'images/image-product-2.jpg',
    'images/image-product-3.jpg',
    'images/image-product-4.jpg'
]

let cartField = document.querySelector('.cart-field')
let cartFieldBtn = document.querySelector('.basket-btn')
let cartFieldDeleteBtn = document.querySelector('.delete-btn')
let mainImg = document.querySelector('.main-img')
let miniImgs = document.querySelectorAll('.mini-imgs img')
let lightbox = document.querySelector('.lightbox-background')
let lightboxMainImg = document.querySelector('.lightbox-main-img')
let lightboxMiniImgs = document.querySelectorAll('.lightbox-mini-imgs img')
let lightboxCloseBtn = document.querySelector('.lightbox-close-btn')
let preBtn = document.querySelectorAll('.pre-btn')
let nextBtn = document.querySelectorAll('.next-btn')
let plusBtn = document.querySelector('.plus-btn')
let minusBtn = document.querySelector('.minus-btn')
let number = document.querySelector('.number')
let addBtn = document.querySelector('.product-add-btn')
let menuBtn = document.querySelector('.menu-btn')
let menu = document.querySelector('.nav-left ul')

function addEmptyText(){
    text = document.createElement('p')
    text.className = 'empty-text'
    text.innerText = 'Your card is empty'
    cartField.appendChild(text)
}
addEmptyText()

function miniImgsChangeFocus(){
    miniImgs.forEach((img) =>{
        if(img.src == mainImg.src){
            miniImgs.forEach(miniImg =>{
                miniImg.style.border = 'none'
                miniImg.style.opacity = '1'
            })
            img.style.border = '3px solid hsl(26, 100%, 55%)'
            img.style.opacity = '.4'
        }
    })
}

function lightboxMiniImgsChangeFocus(){
    lightboxMiniImgs.forEach((img) =>{
        if(img.src == lightboxMainImg.src){
            lightboxMiniImgs.forEach(miniImg =>{
                miniImg.style.border = 'none'
                miniImg.style.opacity = '1'
            })
            img.style.border = '3px solid hsl(26, 100%, 55%)'
            img.style.opacity = '.4'
        }
    })
}

let currentProductImg = 0;
mainImg.src = productImgs[currentProductImg]
lightboxMainImg.src = productImgs[currentProductImg]

//changing main product img
miniImgs.forEach((img , index) =>{
    img.addEventListener('click',(e)=>{
        currentProductImg = index;
        
        mainImg.src = productImgs[currentProductImg]
        lightboxMainImg.src = productImgs[currentProductImg]

        if(img.src == mainImg.src){
            miniImgs.forEach(miniImg =>{
                miniImg.style.border = 'none'
                miniImg.style.opacity = '1'
            })
            img.style.border = '3px solid hsl(26, 100%, 55%)'
            img.style.opacity = '.4'
        }
    })

    if(img.src == mainImg.src){
        miniImgs.forEach(miniImg =>{
            miniImg.style.border = 'none'
            miniImg.style.opacity = '1'
        })
        img.style.border = '3px solid hsl(26, 100%, 55%)'
        img.style.opacity = '.4'
    }
})

//close and open lightbox
mainImg.addEventListener('click',e=>{
    lightbox.classList.add('show')
    lightboxMiniImgsChangeFocus()
})
lightboxCloseBtn.addEventListener('click',e=>{
    lightbox.classList.remove('show')
})

//changing main lightbox img
lightboxMiniImgs.forEach((img , index) =>{
    img.addEventListener('click',(e)=>{
        currentProductImg = index;
        mainImg.src = productImgs[currentProductImg]
        lightboxMainImg.src = productImgs[currentProductImg]

        if(img.src == lightboxMainImg.src){
            lightboxMiniImgs.forEach(miniImg =>{
                miniImg.style.border = 'none'
                miniImg.style.opacity = '1'
            })
            img.style.border = '3px solid hsl(26, 100%, 55%)'
            img.style.opacity = '.4'
        }
        miniImgsChangeFocus()
    })
    
    if(img.src == lightboxMainImg.src){
        lightboxMiniImgs.forEach(miniImg =>{
            miniImg.style.border = 'none'
            miniImg.style.opacity = '1'
        })
        img.style.border = '3px solid hsl(26, 100%, 55%)'
        img.style.opacity = '.4'
    }
})
nextBtn.forEach(next=>{
    next.addEventListener('click',e=>{
        changeImg('next')
        miniImgsChangeFocus()
        lightboxMiniImgsChangeFocus()
    })
})

preBtn.forEach(pre=>{
    pre.addEventListener('click',e=>{
        changeImg('pre')
        miniImgsChangeFocus()
        lightboxMiniImgsChangeFocus()
    })
})

function changeImg(btn){
    if(btn == 'next'){
        if(currentProductImg == productImgs.length - 1)
            currentProductImg = 0
        else currentProductImg ++
    }else{
        if(currentProductImg == 0)
            currentProductImg = productImgs.length -1
        else currentProductImg --
    }

    mainImg.src = productImgs[currentProductImg]
    lightboxMainImg.src = productImgs[currentProductImg]
}

//open and close cart field
cartFieldBtn.addEventListener('click',e=>{
    cartField.classList.toggle('show-cart-field')
    if(cartField.children.length == 1){
        addEmptyText()
    }
})

document.addEventListener('click',e=>{
    if(e.target != cartField.querySelector('div') && e.target != cartField.querySelector('h4') && e.target != cartField.querySelector('button') && e.target != cartField.querySelector('div img') && e.target.className != 'delete-btn' && e.target != cartField.querySelector('div p') && e.target.className != 'basket-btn'){
        cartField.classList.remove('show-cart-field')
    }
})

// change product number
plusBtn.addEventListener('click',e=>{
    ++number.innerText
})
minusBtn.addEventListener('click',e=>{
    if(number.innerText == 0) return
    --number.innerText
})

// add product to cart-field
addBtn.addEventListener('click',e=>{
    if(number.innerText <= 0) return
    
    addProduct()
    text.remove()
    number.innerText = 0

    document.querySelector('.basket-product-number').classList.add('show')
    document.querySelector('.basket-product-number').innerText = (cartField.children.length - 1)
})

function addProduct(){
    let product = document.createElement('div')
    product.className = 'product-in-cart'

    let img = document.createElement('img')
    img.src = 'images/image-product-1.jpg'
    img.className = 'product-in-cart-img'

    let info = document.createElement('div')
    info.className = 'product-in-cart-info'

    let name = document.createElement('p')
    name.className = 'product-in-cart-name'
    name.innerText = 'Fall Limited Edition Sneakers'

    let numbers = document.createElement('p')
    numbers.className = 'product-in-cart-numbers'
    numbers.innerText = '$125.00 x '

    let span = document.createElement('span')
    span.innerText = number.innerText

    let price = document.createElement('h4')
    price.className = 'product-in-cart-price'
    price.innerText = `$${125*number.innerText}.00`

    let deleteBtn = document.createElement('img')
    deleteBtn.src = "images/icon-delete.png"
    deleteBtn.className = 'delete-btn'

    let checkout = document.createElement('button')
    checkout.innerText = 'Checkout'

    numbers.appendChild(span)
    info.appendChild(name)
    info.appendChild(numbers)
    info.appendChild(price)
    product.appendChild(img)
    product.appendChild(info)
    product.appendChild(deleteBtn)
    product.appendChild(checkout)

    cartField.querySelector('h4').insertAdjacentElement('afterend',product)

    deleteBtn.addEventListener('click',e=>{
        deleteBtn.parentElement.remove()

        if(cartField.children.length == 1){
            addEmptyText()
            document.querySelector('.basket-product-number').classList.remove('show')
        }
        
        document.querySelector('.basket-product-number').innerText = (cartField.children.length - 1)
    })
}

if(window.innerWidth < 820){
    mainImg.addEventListener('click',e=>{
        lightbox.classList.remove('show')
    })

    document.querySelectorAll('.mobile-btn').forEach(btn=>{
        btn.classList.add('show-btn')
    })
    menuBtn.src = 'images/icon-menu.png'
}

menuBtn.addEventListener('click',e=>{
    if(menu.className == ''){
        menu.classList.add('show-nav')
        menuBtn.src = 'images/icon-close.png'
    }else{
        menu.classList.remove('show-nav')
        menuBtn.src = 'images/icon-menu.png'
    }
    
})