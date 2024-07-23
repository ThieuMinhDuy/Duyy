
// Thay đổi nội dung búc thư ở đây
var letterContent = "25/07/2024: Dear Thu,ㅤㅤㅤㅤㅤㅤHappy birthday ngoan xink êu cụa anhhhh!ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤChúc em có một ngày sinh nhật thật vui vẻ và đáng nhớ ở một nơi xa lạ nkeeee! Chúc bé tuổi mới tràn đầy sức khỏe, lao động tốt, học tập tốt, luôn giữ trên môi nụ cừi xink và có một tinh thần thật lạc quan và yêu đời. Mong rằng mọi điều ước của em sẽ thành hiện thực.ㅤㅤㅤCảm ơn em vì một năm qua đã ở bên anh và chia sẻ những khoảnh khắc vui buồn. Tuổi mới iu anh nhiều hơn nheee hehe.ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤLove uuuuuu🧡"

// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
durationWrite = 50 

// Hiệu ứng gõ chữ

function effectWrite () {
    var boxLetter = document.querySelector(".letterContent")
    letterContentSplited = letterContent.split("")
    
    letterContentSplited.forEach((val, index) => {
        setTimeout(() => {
            boxLetter.innerHTML += val    
        }, durationWrite* index)
    })
}

window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active")
    }, 500)
})

var openBtn = document.querySelector(".openBtn")
openBtn.addEventListener("click", () => {
    document.querySelector(".cardValentine").classList.add("active")
    document.querySelector(".container").classList.add("close")
})

var cardValentine = document.querySelector(".cardValentine")

cardValentine.addEventListener("click", () => {
    cardValentine.classList.toggle("open")

    if(cardValentine.className.indexOf("open") != -1) {
        setTimeout(effectWrite, 500)
    } else {
        setTimeout(() => {
            document.querySelector(".letterContent").innerHTML = ""
        }, 1000)
    }
})
