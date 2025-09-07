document.getElementById("spinButton").addEventListener("click", function() {
    let i = 1;
    let score;
    let a;

    function numberchange() {
        if (i <= 10) {
            a = Math.floor(Math.random() * 10000) + 2;
            if (a == 10001) {
                score = 999;
            } else {
                score = Math.floor(a / 100) + 1;
            }
            document.getElementById("result").innerText = "결과: " + score;
            i = i + 1;
            setTimeout(numberchange, 50);
        } else {
            document.getElementById("result").innerText = "결과: " + score;
        }
    }

    numberchange();
});