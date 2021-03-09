
// stores the sections in varible
const homePage = document.querySelector(".home-page");
const aboutPage = document.querySelector(".about-page");
const projectPage = document.querySelector(".project-page");
const contactPage = document.querySelector(".contact-page");

// grabs the anchor text in the nav
const linkHome = document.getElementById("home");
const linkAbout = document.getElementById("about");
const linkProject = document.getElementById("projects");
const linkContact = document.getElementById("contact");



//functions to show and hide pages.
let homeShow = () => {
   
    aboutPage.classList.remove("show")
    projectPage.classList.remove("show");
    contactPage.classList.remove("show");

}


//function to reveal about page (overlays home page)
let aboutShow = () => {
   
   aboutPage.classList.add("show");

   projectPage.classList.remove("show");
   contactPage.classList.remove("show");
}

let projectShow = () => {
    
    projectPage.classList.add("show");

    

    aboutPage.classList.remove("show")
    contactPage.classList.remove("show")
    
}

let contactShow = () => {
    contactPage.classList.add("show");

    
    aboutPage.classList.remove("show")
    projectPage.classList.remove("show")
}



linkHome.addEventListener('click', homeShow);
linkAbout.addEventListener('click', aboutShow);
linkProject.addEventListener('click', projectShow);
linkContact.addEventListener('click', contactShow);




