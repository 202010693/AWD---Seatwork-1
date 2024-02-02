let buttons = document.querySelectorAll(".button");

buttons.forEach(button => {
    button.addEventListener("mousedown", (e) => {
        e.preventDefault();

        // Add the following line to prevent the button border size from changing
        e.target.style.outline = 'transparent';

        let overlay = document.createElement('span');
        overlay.classList.add("overlay");

        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;

        overlay.style.left = x + "px";
        overlay.style.top = y + "px"

        e.target.appendChild(overlay);

        setTimeout(() => {
            overlay.remove();
        }, 1500); // Adjust the duration as needed
    });
});


document.getElementById('fillBtn').addEventListener('click', function () {
    var wave = document.querySelector('.wave');
    wave.classList.remove('drip-animation');
    wave.classList.add('fill-animation');
    document.getElementById('fillBtn').style.display = 'none';
    document.getElementById('dripBtn').style.display = 'inline-block';
});

document.getElementById('dripBtn').addEventListener('click', function () {
    var wave = document.querySelector('.wave');
    wave.classList.remove('fill-animation');
    wave.classList.add('drip-animation');
    document.getElementById('dripBtn').style.display = 'none';
    document.getElementById('fillBtn').style.display = 'inline-block';
});

