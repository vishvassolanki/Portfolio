// ====================
//  responsive Navbar Component
// ==================== 

// const mobileNav = document.querySelector(".mobile-navbar-btn");
// const headerElem = document.querySelector(".header");

// mobileNav.addEventListener("click", () => {
//     headerElem.classList.toggle("active");
// });

const mobileNav = document.querySelector(".mobile-navbar-btn");
const headerElem = document.querySelector(".header");

mobileNav.addEventListener("click", () => {
    headerElem.classList.toggle("active");
});





// ====================
//  Portfolio Button Component
// ==================== 

const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const p_img_elem = document.querySelectorAll(".img-overlay");

p_btns.addEventListener("click", (e) => {
    const p_btn_clicked = e.target;
    // console.log(p_btn_clicked);

    p_btn.forEach((curElem) => curElem.classList.remove("p-btn-active"));

    p_btn_clicked.classList.add("p-btn-active");

    // find the number in data atrribute
    const btn_num = p_btn_clicked.dataset.btnNum;
    console.log(btn_num);

    const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);
    p_img_elem.forEach((curElem) => curElem.classList.add("p-image-not-active"));

    img_active.forEach((curElem) => curElem.classList.remove("p-image-not-active"));
})

// Swiper Js Code 
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    autoplay: {
        delay: 2500
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


// Scroll To Top Button 

const header = document.querySelector(".header")
const heroElement = document.querySelector(".section-hero")
const footerElement = document.querySelector(".section-footer");
const scrollElement = document.createElement("div");
scrollElement.classList.add("scrollTop-style");

scrollElement.innerHTML = `<ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>`

footerElement.after(scrollElement)

const scrollTop = () => {
    header.scrollIntoView({ behavior: "smooth" })
}

scrollElement.addEventListener("click", scrollTop)


// Counter Number Animation 

// const counterNum = document.querySelectorAll(".counter-numbers");

// const speed = 100;

// counterNum.forEach((curElem) => {
//     const updateNumber = () => {
//         const targetNumber = parseInt(curElem.dataset.number);
//         const initialNum = parseInt(curElem.innerText);
//         const incrementNum = Math.trunc(targetNumber / speed)
        
//         if (initialNum < targetNumber) {
//             curElem.innerText = `${initialNum + incrementNum}+`
//             setTimeout(updateNumber, 10);
//         }
//     }

//     updateNumber();
// });

const counterNum = document.querySelectorAll(".counter-numbers");
const speed = 100;

// Function to animate the counter
const animateCounter = (curElem) => {
  const updateNumber = () => {
    const targetNumber = parseInt(curElem.dataset.number);
    const initialNum = parseInt(curElem.innerText);
    const incrementNum = Math.trunc(targetNumber / speed);

    if (initialNum < targetNumber) {
      curElem.innerText = `${initialNum + incrementNum}+`;
      setTimeout(updateNumber, 10);
    }
  };

  updateNumber();
};

// Using Intersection Observer to trigger animation when element is in view
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const curElem = entry.target;
      animateCounter(curElem);
      observer.unobserve(curElem); // Stop observing after animation starts
    }
  });
});

// Observe each counter number element
counterNum.forEach((curElem) => {
  observer.observe(curElem);
});
