var app = document.getElementById('app')

var Typewriter = new Typewriter(app,{
    //loop: true,
    delay: 80,
});
Typewriter
    .pauseFor(2000)
    .typeString('Date: 18/06/2024 18:06:24 (UTC+7:00),')
    .pauseFor(300)
    .typeString('<br>Đây là <strong>thông điệp</strong> dành riêng cho bạn.')
    .pauseFor(300)
    .typeString('<br>Và tôi ở đây để truyền tải nó đến cho bạn.')
    .pauseFor(300)
    .typeString('<br><bold><italic>Okay lẹt gô</italic></bold>')
    .pauseFor(1000)
    .start()

var mouse = document.getElementById("mouse")
//var mouseDisplay = 0
function hideMouse(){
    if(mouse.style.display === "none"){
        mouse.style.display = "inline";
    }else{
        mouse.style.display = "none";
    }
}
