let red = document.querySelector(".red");
let yellow = document.querySelector(".yellow");
let green = document.querySelector(".green");

let counter = 0;

function Lights() {
  red.style.backgroundColor = "red";
  yellow.style.backgroundColor = "gray";
  green.style.backgroundColor = "gray";

  setTimeout(function () {
    red.style.backgroundColor = "red";
    yellow.style.backgroundColor = "yellow";
    green.style.backgroundColor = "gray";

    setTimeout(function () {
      red.style.backgroundColor = "gray";
      yellow.style.backgroundColor = "gray";
      green.style.backgroundColor = "green";

      setTimeout(function () {
        green.style.backgroundColor = "gray";

        setTimeout(function () {
          red.style.backgroundColor = "gray";
          yellow.style.backgroundColor = "yellow";
          green.style.backgroundColor = "gray";

          counter++;

          if (counter < 3) {
            setTimeout(Lights, 2000);
          } else {
            red.style.backgroundColor = "gray";
            yellow.style.backgroundColor = "yellow";
            green.style.backgroundColor = "gray";

            setTimeout(function () {
              red.style.backgroundColor = "red";
              yellow.style.backgroundColor = "gray";
              green.style.backgroundColor = "gray";

              counter = 0;
              setTimeout(Lights, 2000);
            }, 2000);
          }
        }, 1000);
      }, 5000);
    }, 2000);
  }, 2000);
}

Lights();
