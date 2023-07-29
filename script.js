// let currentSlide = 0;
// const slides = document.querySelectorAll('.slide');

// function showSlide(index) {
//     slides.forEach((slide, i) => {
//         if (i === index) {
//             slide.style.display = 'block';
//         } else {
//             slide.style.display = 'none';
//         }

//     });
//     if (index === 0) {
//         document.getElementById('slide-pre').style.display = 'none';
//     } else if (index === (slides.length - 1)) {
//         document.getElementById('slide-next').style.display = 'none';
//     } else {
//         for (let i = 0; i < document.getElementsByClassName('slide-button').length; i++) {
//             document.getElementsByClassName('slide-button')[i].style.display = 'block';
//         }
//     }
// }

// function prevSlide() {
//     currentSlide = (currentSlide - 1 + slides.length) % slides.length;
//     showSlide(currentSlide);
// }

// function nextSlide() {
//     currentSlide = (currentSlide + 1) % slides.length;
//     showSlide(currentSlide);
// }

// // 最初のスライドを表示
// showSlide(currentSlide);


// ScrollReveal初期設定 -------------------------------------------------------
ScrollReveal({ reset: true, distance: "60px", duration: 2500, delay: 200 })

// ScrollReveal slide1 -------------------------------------------------------
ScrollReveal().reveal('.slide1-description', { delay: 200, origin: "left" });

// ScrollReveal slide2 -------------------------------------------------------
ScrollReveal().reveal('.slide2', {
    delay: 400, // アニメーションがトリガーされるまでの遅延時間（ミリ秒）
    distance: '30px', // 要素がスライドする距離
    origin: 'buttom', // スライドの方向（ここでは下から上にスライド）
    duration: 1000, // アニメーションの時間（ミリ秒）
    easing: 'ease-out', // アニメーションのイージング関数
    reset: true // 要素が再度表示されたときにアニメーションをリセットするかどうか
});
ScrollReveal().reveal('.slide2-parag', { delay: 200, origin: "left" });

// ScrollReveal slide3 -------------------------------------------------------
ScrollReveal().reveal('.slide3', {
    delay: 200, // アニメーションがトリガーされるまでの遅延時間（ミリ秒）
    distance: '30px', // 要素がスライドする距離
    origin: 'right', // スライドの方向（ここでは下から上にスライド）
    duration: 800, // アニメーションの時間（ミリ秒）
    easing: 'ease-out', // アニメーションのイージング関数
    reset: true // 要素が再度表示されたときにアニメーションをリセットするかどうか
});
ScrollReveal().reveal('.slide3-description', { delay: 200, origin: "left" });


