var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");
var box3 = document.getElementById("box3");
var box4 = document.getElementById("box4");
var btn = document.getElementById("animate");
var topp = 500;
var left = 0;
var bottom = 0;
var right = 0;
var flag = 0
btn.addEventListener('click', () => {
    if (flag === 0) {
        flag = 1;
        box1.style.opacity = 1;
        box2.style.opacity = 1;
        box3.style.opacity = 1;
        box4.style.opacity = 1;

        setTimeout(() => {
            while (left < 500) {
                left = left + 1;
                box1.style.left = left + 'px';
            }

            while (right < 500) {
                right = right + 1;
                box4.style.right = right + 'px';
            }

            while (bottom < 500) {
                bottom = bottom + 1;
                box3.style.bottom = bottom + 'px';
            }

            while (topp > 0) {
                topp = topp - 1;
                box2.style.bottom = topp + 'px';
            }
        }, 100);
    } else {
        flag = 0
        left = 500;
        right = 500;
        bottom = 500;
        topp = 0;
        while (left > 0) {
            left = left - 1;
            box1.style.left = left + 'px';
        }

        while (right > 0) {
            right = right - 1;
            box4.style.right = right + 'px';
        }

        while (bottom > 0) {
            bottom = bottom - 1;
            box3.style.bottom = bottom + 'px';
        }

        while (topp < 500) {
            topp = topp + 1;
            box2.style.bottom = topp + 'px';
        }
    }
})

