// Selectors

var img = document.getElementById('img');
var time = document.getElementById('time');
var heart = document.getElementById('heart-rate');
var select = document.getElementById('select');
var timeShow = document.getElementById('time-content');
var icon = document.getElementById('icon');

var i = 0;

// Event

select.addEventListener('click', change);

// function

function change(e) {
    var color = String(e.target.id);
    color = color.substring(0, (color.length-4));
    if(color === '') return
    img.src = 'Images/'+color+'.png';

    console.log(e.target.id)
}

setInterval(function(){
    var d = new Date();
    var second = d.getSeconds();
    var minutes = d.getMinutes();
    var hour = d.getHours();

    timeShow.textContent = hour + ':' + minutes + ':' + second;
}, 1000);

heart.addEventListener('click', function() {
    icon.classList.add('show-heart');
    timeShow.classList.add('time-hide');
    icon.classList.remove('hide-heart');
    timeShow.classList.remove('time-show');

    setInterval(function() {
        if(i == 0) {
            icon.style.fontSize = '70px';
            i = 1;
        } else {
            icon.style.fontSize = '60px';
            i = 0;
        }
    }, 500)
});

time.addEventListener('click', function() {
    icon.classList.add('hide-heart');
    timeShow.classList.add('time-show');
    icon.classList.remove('show-heart');
    timeShow.classList.remove('time-hide');
});