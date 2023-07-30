function slide4DisplayOpen() {
    document.getElementById('slide4-parag').style.display = "block";
}
document.getElementsByClassName('slide4-description')[0].addEventListener("click", slide4DisplayOpen);

function slide10DisplayOpen() {
    document.getElementById('slide10-video').style.display = 'block'
    document.getElementsByClassName('text')[0].style.display = 'none'
}
document.getElementsByClassName('slide10-header')[0].addEventListener('click', slide10DisplayOpen);
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
ScrollReveal().reveal('.slide2-parag', { delay: 200, origin: "left", interval: 200 });

// ScrollReveal slide3 -------------------------------------------------------
ScrollReveal().reveal('.slide3', {
    delay: 200, // アニメーションがトリガーされるまでの遅延時間（ミリ秒）
    distance: '30px', // 要素がスライドする距離
    origin: 'right', // スライドの方向（ここでは下から上にスライド）
    duration: 800, // アニメーションの時間（ミリ秒）
    easing: 'ease-out', // アニメーションのイージング関数
    reset: true // 要素が再度表示されたときにアニメーションをリセットするかどうか
});
ScrollReveal().reveal('.slide3-description', { delay: 200, origin: "left", interval: 200 });

// ScrollReveal slide4 -------------------------------------------------------
ScrollReveal().reveal('.slide4', {
    delay: 200, // アニメーションがトリガーされるまでの遅延時間（ミリ秒）
    distance: '30px', // 要素がスライドする距離
    origin: 'right', // スライドの方向（ここでは下から上にスライド）
    duration: 800, // アニメーションの時間（ミリ秒）
    easing: 'ease-out', // アニメーションのイージング関数
    reset: true // 要素が再度表示されたときにアニメーションをリセットするかどうか
});
ScrollReveal().reveal('.slide4-description', { delay: 200, origin: "top", interval: 200 });

// ScrollReveal slide5 -------------------------------------------------------
ScrollReveal().reveal('.slide5', {
    delay: 200, // アニメーションがトリガーされるまでの遅延時間（ミリ秒）
    distance: '30px', // 要素がスライドする距離
    origin: 'bottom', // スライドの方向（ここでは下から上にスライド）
    duration: 800, // アニメーションの時間（ミリ秒）
    easing: 'ease-out', // アニメーションのイージング関数
    reset: true // 要素が再度表示されたときにアニメーションをリセットするかどうか
});
// ScrollReveal slide6 -------------------------------------------------------
ScrollReveal().reveal('.slide6', {
    delay: 200, // アニメーションがトリガーされるまでの遅延時間（ミリ秒）
    distance: '30px', // 要素がスライドする距離
    origin: 'top', // スライドの方向（ここでは下から上にスライド）
    duration: 800, // アニメーションの時間（ミリ秒）
    easing: 'ease-out', // アニメーションのイージング関数
    reset: true // 要素が再度表示されたときにアニメーションをリセットするかどうか
});
// ScrollReveal slide7 -------------------------------------------------------
ScrollReveal().reveal('.slide7', {
    delay: 200, // アニメーションがトリガーされるまでの遅延時間（ミリ秒）
    distance: '30px', // 要素がスライドする距離
    origin: 'right', // スライドの方向（ここでは下から上にスライド）
    duration: 800, // アニメーションの時間（ミリ秒）
    easing: 'ease-out', // アニメーションのイージング関数
    reset: true // 要素が再度表示されたときにアニメーションをリセットするかどうか
});
// ScrollReveal slide8 -------------------------------------------------------
ScrollReveal().reveal('.slide8', {
    delay: 200, // アニメーションがトリガーされるまでの遅延時間（ミリ秒）
    distance: '30px', // 要素がスライドする距離
    origin: 'left', // スライドの方向（ここでは下から上にスライド）
    duration: 800, // アニメーションの時間（ミリ秒）
    easing: 'ease-out', // アニメーションのイージング関数
    reset: true // 要素が再度表示されたときにアニメーションをリセットするかどうか
});

// ScrollReveal slide9 -------------------------------------------------------
ScrollReveal().reveal('.slide9', {
    delay: 200, // アニメーションがトリガーされるまでの遅延時間（ミリ秒）
    distance: '30px', // 要素がスライドする距離
    origin: 'bottom', // スライドの方向（ここでは下から上にスライド）
    duration: 800, // アニメーションの時間（ミリ秒）
    easing: 'ease-out', // アニメーションのイージング関数
    reset: true // 要素が再度表示されたときにアニメーションをリセットするかどうか
});
// ScrollReveal slide10 -------------------------------------------------------
ScrollReveal().reveal('.slide10', {
    delay: 200, // アニメーションがトリガーされるまでの遅延時間（ミリ秒）
    distance: '30px', // 要素がスライドする距離
    origin: 'left', // スライドの方向（ここでは下から上にスライド）
    duration: 800, // アニメーションの時間（ミリ秒）
    easing: 'ease-out', // アニメーションのイージング関数
    reset: true // 要素が再度表示されたときにアニメーションをリセットするかどうか
});


