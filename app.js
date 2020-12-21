const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navlink');
    const navlink = document.querySelectorAll('.navlink li')

    
    burger.addEventListener('click',() => {
        //Toggle nav
        nav.classList.toggle('navactive');

        //Animate links
        navlink.forEach((link, index) => {
            if(link.style.animation) {
               link.style.animation = ''
            }
             else {
                link.style.animation = `navlinkfade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        
        //Animate burger
        burger.classList.toggle('toggle');
    });
}

navSlide();

const logo = document.querySelectorAll("#logo path");

for (let i =0; i < logo.length; i++) {
    console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
}

function setupTabs () {
    document.querySelectorAll(".tabs-btn").forEach(button => {
        button.addEventListener("click", () => {
            const sideBar = button.parentElement;
            const tabsContainer = sideBar.parentElement;
            const tabsNumber = button.dataset.forTab;
            const tabToActivate = tabsContainer.querySelector(`.tabs-contents[data-tab="${tabsNumber}"]`)
    
            tabsContainer.querySelectorAll(".tabs-contents").forEach(tab => {
                tab.classList.remove("tabs-contents-block");
            });

            tabToActivate.classList.add("tabs-contents-block");
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
setupTabs();

document.querySelectorAll(".tabs").forEach(tabsContainer => {
    tabsContainer.querySelector(".tabs-sidebar .tabs-btn").click();
})
});

const machinelearn = document.getElementById("machinelearn");
const compvision = document.getElementById("compvision");

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

function openML() {
    machinelearn.style.transform = "translateX(0)";
    compvision.style.transform = "translateX(100%)";
    btn1.style.color =  "#262626";
    btn2.style.color =  "#F2F0F0";
}

function openCV() {
    machinelearn.style.transform = "translateX(100%)";
    compvision.style.transform = "translateX(0)";
    btn1.style.color =  "#F2F0F0";
    btn2.style.color =  "#262626";
}