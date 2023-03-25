const formElem = document.querySelector(".form")
const [btnLeft, btnTop, btnRight, btnBottom] = document.querySelectorAll(".btn-border")
const submitBTN = document.querySelector(".btn-elem")
const projectParent = document.querySelector(".project__items")
const starParent = document.querySelector(".star-container")
const hero = document.querySelector(".hero")
const links = document.querySelectorAll('a[href^="#"]');
const starColors = ["#afc9ff", "#c7d8ff", "#fff4f3", "#ffe5cf", 
            "#ffd9b2", "#ffc78e", "#ffa651", "#9db4ff", "#a2b9ff",
            "#a7bcff", "#afc3ff", "#baccff", "#c0d1ff",
            "#cad8ff", "#c4e8ff", "#edeeff", "#fbf8ff", "#fff9f9"]


const projects = [
    {
        name: "Social Section",
        image: "/static/images/Social-Section.png",
        description: "A minimal, static Social Section template",
        tech: [
            "devicon-html5-plain",
            "devicon-css3-plain"
        ],
        github: "https://github.com/MADITIS/social-proof-section-css-html",
        site: "https://social-proof-section-css-html.vercel.app/",
    },
    {
        name: "Landing Page",
        image: "/static/images/landing-page-intro.png",
        description: "A minimal, Landing page with dropdown menu",
        tech: [
            "devicon-html5-plain",
            "devicon-css3-plain",
            "fa-brands fa-square-js"
        ],
        github: "https://github.com/MADITIS/intro-section-with-dropdown-navigation-main",
        site: "https://intro-section-with-dropdown-navigation-main-fawn.vercel.app/",
    },
    {
        name: "Magic Website",
        image: "/static/images/magic-cards-desktop.png",
        description: "A Magic cards website",
        tech: [
            "devicon-html5-plain",
            "devicon-css3-plain"
        ],
        github: "https://github.com/MADITIS/magic-cards-css",
        site: "https://magic-cards-css-t1tb.vercel.app/",
    },
    {
        name: "Github User Search",
        image: "/static/images/github-user-search.png",
        description: "GIthub User Search Using Api",
        tech: [
            "devicon-html5-plain",
            "devicon-css3-plain",
            "fa-brands fa-square-js"
        ],
        github: "https://github.com/MADITIS/magic-cards-css",
        site: "https://github-user-search-6rm8.vercel.app/",
    },
    {
        name: "Rating System",
        image: "/static/images/rating-system.png",
        description: "Static Rating system",
        tech: [
            "devicon-html5-plain",
            "devicon-css3-plain",
            "fa-brands fa-square-js"
        ],
        github: "https://github.com/MADITIS/rating-system",
        site: "https://rating-system-eight.vercel.app/",
    },
    {
        name: "Progress Steps",
        image: "/static/images/progress-steps.png",
        description: "Static Progress Steps",
        tech: [
            "devicon-html5-plain",
            "devicon-css3-plain",
            "fa-brands fa-square-js"
        ],
        github: "https://github.com/MADITIS/progress-steps",
        site: "https://progress-steps-bay.vercel.app/",
    },
    {
        name: "Exapnding Galary",
        image: "/static/images/expanding-galary.png",
        description: "Expanding galary cards",
        tech: [
            "devicon-html5-plain",
            "devicon-css3-plain",
            "fa-brands fa-square-js"
        ],
        github: "https://github.com/MADITIS/expandings-cards-css-js",
        site: "https://expandings-cards-css-js.vercel.app/",
    },

]

projects.forEach((project) => {

    let techStack = ""
    project.tech.forEach((t) => {
        techStack += `<i class="${t}"></i>`
    })

    const projectTemplate = `
        <li>
            <div class="img">
                <img src="${project.image}" alt="" />
                <div class="info-container flex">
                    <h3>Featured Project</h3>
                    <h2>${project.name}</h2>
                    <p>${project.description}</p>
                    <ul class="flex">
                    <li><a href="${project.github}"><i class="fa-brands fa-github project-icon"></i></a></li>
                    <li><a href="${project.site}"><i class="fa-solid fa-arrow-up-right-from-square project-icon"></i></a></li>
                    </ul>
                </div>
            </div>
            <h4>${project.name}</h4>
            <div>
            ${techStack}
            </div>
        </li>`
    projectParent.innerHTML += projectTemplate
})

function addStars() {
    let stars = 30
    const mediaQuery = window.matchMedia('(min-width: 36em)');
    if (mediaQuery.matches) {
        stars = 55
    }

    for (let i=0; i < stars; i++) {
        const star = document.createElement("div")
        star.classList.add("star")
        star.style.top = getRandomNumber(1, 100) + "%"
        star.style.left = getRandomNumber(1, 100) + "%"
        star.style.backgroundColor = starColors[Math.floor(Math.random() * starColors.length - 1)]
        starParent.append(star)
    }

}


addStars()

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 0.5) + min);
}

let isvalidated = {
    allValidated: function () {
        if (this.name && this.email && this.message) {
            return true
        }
    }
}
// client side form validation
const validateForm = (event) => {
    event.preventDefault()
    const { target } = event
    switch (target) {
        case formElem.name:
            console.log("name")
            result = validateInput(target)
            result ? isvalidated.name = true : delete isvalidated.name
            break
        case formElem.email:
            console.log("email")
            validateEmail(target)
            break
        case formElem.message:
            console.log("message")
            result = validateInput(target)
            result ? isvalidated.message = true : delete isvalidated.message
            break
        default:
            console.log("not a input")
            break
    }

    addBorder()
    console.log(isvalidated)
}

const addBorder = ()=>{
    let length = Object.entries(isvalidated).length

    switch (length) {
        case 4:
            btnRight.style.height = "100%"
        
            if (isvalidated.email) {
                btnBottom.style.width = "100%"
            } else {
                submitBTN.style.setProperty("--clr-status", "red")
                btnBottom.style.width = "0%"
            }
            break;
        case 3:
            btnTop.style.width = "100%"
            // setTimeout(() => {
                
            // }, 400);
            btnRight.style.height = "0"
            btnBottom.style.width = "0%"
            break
        case 2:
            btnLeft.style.height = "100%" //works
            btnTop.style.width = "0"
            btnRight.style.height = "0"
            btnBottom.style.width = "0%"
            break
        default:
            submitBTN.style.removeProperty("--clr-status")
            btnLeft.style.height = "0"
            break;
        }
        submitBTN.style.setProperty("--clr-status", "red")
        if (length === 1) { 
            submitBTN.style.removeProperty("--clr-status")
    }

}


function validateInput(input) {
    if (input.value.trim()) {
        input.style.setProperty("--clr-status", "hsl(153, 71%, 59%)")
        return true
    } else {
        input.style.removeProperty("--clr-status")
        return false
    }
}

function validateEmail(target) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const isValidEmail = emailRegex.test(target.value)
    if (isValidEmail) {
        target.style.setProperty("--clr-status", "hsl(153, 71%, 59%)")
        isvalidated.email = true
    } else if (target.value.trim() !== "") {
        target.style.setProperty("--clr-status", "red")
        isvalidated.email = false
    } else {
        target.style.removeProperty("--clr-status")
        delete isvalidated.email
    }


}

const stars = document.querySelectorAll(".star")
function moveStars(event) {
    // const scrollPos = window.scrollY;
    const mouseX = event.clientX;
    const mouseY = event.clientY;
  
    stars.forEach((star, index) => {
      const speed = (index + 1) * 0.7;
      star.style.transform = `translate(-50%, -50%) translate3d(${(mouseX *
        speed) /
        50}px, ${(mouseY * speed) / 50}px, 0)`;
    });
}

function twinkleStars() {
    stars.forEach((star) => {
      const isVisible = star.classList.contains('twinkle');
      if (!isVisible && Math.random() < 0.01) {
        star.classList.add('twinkle');
        setTimeout(() => {
          star.classList.remove('twinkle');
        }, Math.random() * 1000 + 2500);
      }
    });
  }
    // Set interval to update star positions every 100ms
// moveStars(

function main() {
    formElem.addEventListener("input", validateForm)
    starParent.addEventListener("pointermove", moveStars)
    setInterval(() => {
        twinkleStars();
    }, 1); 
    let elemes = document.querySelectorAll(".elem")
    const hoverElem = document.querySelector(".hover-elem")
    hoverElem.addEventListener("pointerout", ()=> {
        elemes.forEach((elem)=> {
            if (elem.classList.contains("left-elem") || elem.classList.contains("top-elem")) {
                elem.style.transitionDelay = "0.6s"
            } else if (elem.classList.contains("bottom-elem") || elem.classList.contains("right-elem")) {
                elem.style.transitionDelay = "0s"
            }
        })
        //  const filteredElements = Array.from(elemes).filter(element => {
        //     return element.classList.contains('bottom-elem') || element.classList.contains('right-elem');
        //   });
        // const filteredLeft = Array.from(elemes).filter(element => {
        //     return element.classList.contains('top-elem') || element.classList.contains('left-elem');
        //   });

        // filteredElements.forEach(elem=> {
        //     if (elem.style.width < 50 || elem.style.height < 50) {
        //         filteredLeft.forEach((e => {
        //             e.style.transitionDelay = "0s"
        //         }))
        //     }
        // })
        // elemes.forEach(elem=> {
        //     if (elem.classList.contains("top-elem") && elem.style.width <= 100) {
        //         elem.style.transitionDelay = "0s"
        //     } else if (elem.classList.contains("left-elem") && elem.style.height <= 100) {
        //         elem.style.transitionDelay = "0s"
        //     }
        // })
    }) 
    hoverElem.addEventListener("pointerover", ()=> {
        elemes.forEach((elem)=> {
            if (elem.classList.contains("left-elem") || elem.classList.contains("top-elem")) {
                elem.style.transitionDelay = "0s"
            }else if (elem.classList.contains("bottom-elem") || elem.classList.contains("right-elem")) {
                elem.style.transitionDelay = "0.6s"
            }

        })
       

    }) 
    links.forEach(link => {
        link.addEventListener('click', e => {
          e.preventDefault();
          const target = document.querySelector(link.hash);
          target.scrollIntoView({
            behavior: 'smooth'
          });
        });
      });

      submitBTN.addEventListener("click", (event) => {
        event.preventDefault()

        if (!isvalidated.allValidated() || submitBTN.disabled) {return}
        
        submitBTN.disabled = true
        console.log("submitting")
        const target = formElem
        const data = new FormData(target)
        // for (const [name, value] of data) {
        //     data.set(name, encodeURIComponent(value))
        // }
        const server = "/"
        sendToServer(data, server, target)
        
    })

   
}



window.addEventListener("DOMContentLoaded", main)


// handle form
async function sendToServer(data,server, target) {
    loadingStatus()
    let response = await fetch( server , {
        method: "POST", 
        body: data,
        mode: "no-cors",
    })
    if (response.status === 200) {
        showSuccess()
        removeBorders(target)
    }
}

const loader = submitBTN.querySelector(".loader")
const btn = submitBTN.querySelector("button")
const loadingStatus = () => {
    console.log("loader", loader)
    btn.classList.add("hide")
    loader.classList.add("show")

    // loader.style.opacity = "1"
    // loader.style.animation = `load 6s linear infinite`;
    // const load = () => {button
    //     loader.animate([
    //     { transform: `translateX(0) translateY(0)` },
    //     { transform: `translateX(${width}px) translateY(0)` },
    //     { transform: `translateX(${width}px) translateY(${height}px) rotate(90deg)` },
    //     { transform: `translateX(0) translateY(${height}px)` },
    //     { transform: `translateX(0) translateY(0)` }
    //     ], {
    //     duration: 2000,
    //     easing: 'cubic-bezier(0.37, 0, 0.63, 1)',
    //     iterations: Infinity
    //     });
    // };
    
    // load()
}


const removeBorders = (target) => {
       for (let [key, value] of Object.entries(isvalidated)) {
        if (typeof value !== 'function') {
            delete isvalidated[key]
        }
       }
       target.querySelectorAll("[data-type='input']").forEach((elem) => {
        elem.style.removeProperty("--clr-status")
       })

       
    for (const [index, button] of [btnLeft, btnTop, btnRight, btnBottom].entries()) {
        switch (index) {
        case 0:
            button.style.height = '0';
            break;
        case 1:
            button.style.width = '0';
            break;
        case 2:
            button.style.height = '0';
            break;
        case 3:
            button.style.width = '0';
            break;
        default:
            break;
        }
    }

    submitBTN.style.removeProperty("--clr-status")

}

const showSuccess = () => {
    loader.classList.remove("show")
    setTimeout(() => {
        btn.innerText = "SUBMITTED"
        btn.classList.remove("hide")
    }, 400);

    setTimeout(() => {
        formElem.reset()
        btn.innerText = "SEND MESSAGE"
        submitBTN.disabled = false
    }, 2000);

}
