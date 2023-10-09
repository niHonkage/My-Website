const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelector(".controls");
const secBtn = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");
const nextPage = document.getElementById("nextone");

nextPage.addEventListener("click", () => {
    const sc2 = document.querySelector(".sc2");
    const btn2 = document.querySelector(".control-2")
    sc2.classList.add("active");
    unhighlight(secBtn);
    highlight(btn2);

})

sectBtns.addEventListener("click", (event) => {
    let Btn = event.target.closest('div');
    const id = Btn.dataset.id;
    const selected = document.getElementById(id);
    if (!Btn) return;
    unhighlight(secBtn);
    highlight(Btn);
    for (let sec of sections) {
        sec.classList.remove('active');
    }
    selected.classList.add("active");
});
function unhighlight(btns) {
    for (let btn of btns) {
        btn.classList.remove("active-btn");
    }
}
function highlight(btn) {
    btn.classList.add('active-btn');
}

//image slider
const prev = document.querySelector(".prev");
const nextPic = document.querySelector('.next');
const imgs = document.querySelectorAll(".slider");//返回图片数组
const sliderText = document.querySelector(".blur");
const textArr = ["看动画", "学习编程", "浏览互联网", "关注全球新闻"];


let currentPic = 1;
const picCon = document.querySelector(".pic-container");

let timeout;

nextPic.addEventListener("click", () => {

    currentPic++;
    clearTimeout(timeout);//要放在函数前清除timeout
    updatePic();

})

prev.addEventListener("click", () => {
    currentPic--;
    clearTimeout(timeout);
    updatePic();

})
updatePic();
function updatePic() {
    if (currentPic > imgs.length) {
        currentPic = 1;//超出限制后返回第一张图
    } else if (currentPic < 1) {
        currentPic = imgs.length;
    }
    picCon.style.transform = `translateX(-${(currentPic - 1) * 600}px)`;
    sliderText.textContent = textArr[currentPic - 1];
    timeout = setTimeout(() => {
        currentPic++;
        updatePic();
    }, 5000);
}

//tabs content
const btnBar = document.querySelector(".btn-container");
const btns = document.querySelectorAll(".button");
const articles = document.querySelectorAll(".content");

btnBar.addEventListener("click", (event) => {
    const id = event.target.dataset.id;//点击事件返回在HTML属性中设置的dataid
    const textId = document.getElementById(id);//绑定相同的id并选中


    if (id) {
        btns.forEach((btn) => {
            btn.classList.remove("live");//给所有btn移除live
        });
        event.target.classList.add("live");//单独给目标btn加上
        articles.forEach((article) => {
            article.classList.remove("live");
        })
        textId.classList.add("live");
    }


});

//count plus
const num1 = document.getElementById("number1");
const num2 = document.getElementById("number2");
const num3 = document.getElementById("number3");
const num4 = document.getElementById("number4");
const ctr3 = document.querySelector(".control-3");

function countUp(num, stop) {
    let count = 0;

    setInterval(() => {
        if (count == stop) {
            clearInterval();
        } else {
            count++;
            num.innerHTML = count + "%";
        }
    }, 50);
}
ctr3.addEventListener("click", () => {
    countUp(num1, 75);
    countUp(num2, 65);
    countUp(num3, 45);
    countUp(num4, 90);

})







