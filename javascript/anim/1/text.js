function anim() {
    document.getElementById('h1').textContent = 'hello';
    setTimeout(function() {
        document.getElementById('h1').textContent = 'hello.';
    }, 500);
    setTimeout(function() {
        document.getElementById('h1').textContent = 'hello..';
    }, 1000);
    setTimeout(function() {
        document.getElementById('h1').textContent = 'hello...';
    }, 1500);
}
anim();
setInterval(anim,2000);
