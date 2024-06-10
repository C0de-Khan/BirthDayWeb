var app = document.getElementById('app')

var TypeWriter = new Typewriter(app,{
    //loop: true,
    delay: 80,
});
TypeWriter
    .pauseFor(2000)
    .typeString('Date: 18/06/2024 18:06:24 (UTC+7:00),')
    .pauseFor(600)
    .typeString('<br>Đây là <strong>thông điệp</strong> dành riêng cho bạn.')
    .pauseFor(600)
    .typeString('<br>Và tôi ở đây để truyền tải nó đến cho bạn.')
    .pauseFor(1000)
    .deleteAll()
    .typeString('<br><bold><italic>Okay lẹt gô</italic></bold>')
    .pauseFor(1000)
    .start()

var mouse = document.getElementsByClassName("mouse-scroll")
//var mouseDisplay = 0
function hideMouse(){
    if(mouse.style.display === "none"){
        mouse.style.display = "inline";
    }else{
        mouse.style.display = "none";
    }
}

var app3 = document.getElementById('app3')

var TypeWriter3 = new Typewriter(app3,{
    delay: 80,
});

TypeWriter3
    .pauseFor(2000)
    .typeString('Ok. Vậy là bạn đã nhận được thông điệp rồi nhỉ?')
    .pauseFor(600)
    .deleteAll()
    .typeString('Phần tiếp theo và cũng là phần quan trọng nhất dành riêng cho bạn đấy.')
    .pauseFor(800)
    .deleteAll()
    .typeString('Chúng ta tiếp tục nhá?')
    .start()

var lastSlide = document.getElementById('slide3')

lastSlide.addEventListener('scroll',function(){
    if (lastSlide.scrollTop + lastSlide.offsetHeight >= lastSlide.scrollHeight) {
        mouse.style.display = "none";
    }
});
    