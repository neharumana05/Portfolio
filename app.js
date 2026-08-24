// show and close menu

const navMenu = document.getElementById("nav_menu");
const navToggle =document.getElementById("nav_toggle");
const navClose = document.getElementById("nav_close");

//show menu
if(navToggle){
    navToggle.addEventListener("click", ()=>{
        navMenu.classList.add("show_menu")
    });
}

//hide menu
if(navClose){
    navClose.addEventListener("click", ()=>{
        navMenu.classList.remove("show_menu");
    });
}

//remove mobile menu

const navLink = document.querySelectorAll(".nav_link");

const linkAction = ()=>{
    const navMenu =document.getElementById("nav_menu");
    //When we click on each nav_link, we remove the show-menu class
    navMenu.classList.remove("show_menu");
}

navLink.forEach(n => n.addEventListener("click", linkAction));

// projects slider
//swiper projects

let swiperProjects = new Swiper('.projects_container', {
        loop: true,
        spaceBetween:24,

        navigation: {
          nextEl: '.button-next',
          prevEl: '.button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
        },
        breakpoints: {
          1200: {
            slidesPerView: 2,
            spaceBetween: -56,
          }
        },
      });


// email javascript

const contactForm = document.getElementById("contact_form"),
      contactName = document.getElementById("contact_name"),
      contactEmail = document.getElementById("contact_email"),
      contactProject = document.getElementById("contact_project"),
      contactMessage = document.getElementById("contact_message");

const sendEmail = (e) =>{
    e.preventDefault();

    //check if the field has a value
    if(contactName.value === '' || contactEmail.value === '' || contactProject.value === ''){
        //add and remove color
        contactMessage.classList.remove("color_blue");
        contactMessage.classList.add("color_red");

        //show message
        contactMessage.textContent = "Write all the input fields 📑 ";
    } else{
        //refer emailJS for all the IDs
        // services ID - template ID - #form - publicKey
        emailjs.sendForm('service_us6fdji','template_tnaj2dy','#contact_form','5pgNSFIk-Q9DiFrG9')
            .then (() => {
                //show message and add color
                contactMessage.classList.add("color_blue");
                contactMessage.textContent = "Message sent ☑️"

                //remove message after 5sec
                setTimeout (()=>{
                    contactMessage.textContent='';
                }, 5000)
            }, (error) => {
                alert('OOPS! something went wrong.', error);
            })

        //to clear input field
        contactName.value='';
        contactEmail.value='';
        contactProject.value='';
    }
}
contactForm.addEventListener("submit", sendEmail);

//scrool sections active link

const sections = document.querySelectorAll("section[id]");

const scrollActive = () =>{
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute("id"),
            sectionsClass = document.querySelector(`.nav_menu a[href="#${sectionId}"]`)

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionsClass.classList.add("active_link")
        } else{
            sectionsClass.classList.remove("active_link")
        }
    })
}

window.addEventListener("scroll", scrollActive);

//show scroll up

const scrollUp = () =>{
    const scrollUp =document.getElementById("scrollup")

    //when the scroll is higher than 350 viewport height , add the showscroll class  to the a tag with the scrollup
    this.scrollY >= 350 ? scrollUp.classList.add("show_scroll")
                                            : scrollUp.classList.remove("show_scroll")

}

window.addEventListener("scroll", scrollUp);

//change background header

const scrollHeader = () =>{
   const header = document.getElementById('header')
   // Add the .scroll-header class if the bottom scroll of the viewport is greater than 50
    window.scrollY >= 50 ? header.classList.add('bg_header') 
                                : header.classList.remove('bg_header')
}
window.addEventListener('scroll', scrollHeader)

//scroll reveal animation

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    //reset: true --Animation repeat--
})

sr.reveal(`.home_data, .projects_container`)

sr.reveal(`.home_info div`,
    {
        delay: 600,
        origin:'bottom',
        interval: 100
    }
)

sr.reveal(`.nav_menu`,
    {
        origin:'right'
    }
)

sr.reveal(`.nav_logo`,
    {
        origin:'top'
    }
)

sr.reveal(`.section`,
    {
        delay:400,
        origin:'top'
    }
)

sr.reveal(`.footer_container`,
    {
        origin:'bottom',
        delay:800
    }
)

sr.reveal(`.skills_content:nth-child(1), .contact_content:nth-child(1)`,
    {
        origin:'left'
    }
)

// sr.reveal(`.skills_content:nth-child(2)`,
//     {
//         origin:'right'
//     }
// )

sr.reveal(`.contact_content:nth-child(2)`,
    {
        origin:'right'
    }
)

sr.reveal(`.qualification_content, .services_card`,
    {
        interval: 100
    }
)