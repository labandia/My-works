// var counter = 1;

// setInterval(function () {
//    document.getElementById("radio" + counter).checked = true;
//    counter++;
//    if (counter > 4) {
//       counter = 1;
//    }
// }, 5000);

// var slideindex = 1;

// showlides(slideindex);

// function pluslides(n) {
//    showlides((slideindex += n));
// }

// function currentslides(n) {
//    showlides((slideindex = n));
// }

// function showlides(n) {
//    var i;
//    var slides = document.getElementsByClassName("myslides");
//    var dots = document.getElementsByClassName("dot");
//    if (n > slides.length) {
//       slideindex = 1;
//    }
//    if (n < 1) {
//       slideindex = slides.length;
//    }
//    for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//    }

//    for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//    }
//    slides[slideindex - 1].style.display = " block";
//    dots[slideindex - 1].className += " active";
// }

const slides = document.querySelectorAll(".slide");

slides.forEach(function (slide, index) {
   slide.style.left = `${index * 100}%`;
});

let counter = 0;
nextBtn.addEventListener("click", function () {
   counter++;
   carousel();
});

prevBtn.addEventListener("click", function () {
   counter--;
   carousel();
});

function carousel() {
   // working with slides
   // if (counter === slides.length) {
   //   counter = 0;
   // }
   // if (counter < 0) {
   //   counter = slides.length - 1;
   // }
   // working with buttons

   if (counter < slides.length - 1) {
      nextBtn.style.display = "block";
   } else {
      nextBtn.style.display = "none";
   }
   if (counter > 0) {
      prevBtn.style.display = "block";
   } else {
      prevBtn.style.display = "none";
   }
   slides.forEach(function (slide) {
      slide.style.transform = `translateX(-${counter * 100}%)`;
   });
}

prevBtn.style.display = "none";
