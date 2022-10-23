const text1=document.getElementById("blog-text1")
const button1=document.getElementById("button1")
const text2=document.getElementById("blog-text2")
const button2=document.getElementById("button2")
const text3=document.getElementById("blog-text3")
const button3=document.getElementById("button3")
const site1=document.getElementById("blog-site1")


const displayOriginal=site1.style.display
site1.style.display="none"


button1.onmouseover=function(){
    text1.textContent="柵木　貫那　(マセギ　カンナ)"
}
button2.onmouseover=function(){
    text2.textContent="神戸大学工学部機械工学科3回生"
}
button3.onmouseover=function(){
    text3.textContent="愛知県刈谷市出身"
    site1.style.display=displayOriginal
}

const text4=document.getElementById("blog-text4")
const button4=document.getElementById("button4")
button4.onmouseover=function(){
    text4.textContent="サッカーが大好きです!小１から高校まで続けていて、大学からはフットサルサークルで運動を続けています。今年のワールドカップは皆さんどこが優勝すると思いますか？僕は友達と勝負してブラジルに賭けました(笑)"
}

