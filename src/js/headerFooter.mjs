// header
header = document.getElementById("Header")

links = ["home", "services", "contact"]
paths = ["1", "2", "3"]

headerTitle = document.createElement("h2")
headerTitle.textContent = "jnana bharathi samudaya bhavana"
headerTitle.classList = ["header__title"]

headerMenuBtn = document.createElement("button")
headerMenuBtn.innerHTML = "&equiv;"
headerMenuBtn.classList = ["header__menu-btn"]
headerMenuBtn.setAttribute("type", "button")
headerMenuBtn.addEventListener("click", ()=>{
    sidebar.style.transform = "translateX(0)"
})

headerFaqBtn = document.createElement("button")
headerFaqBtn.textContent = "faq"
headerFaqBtn.classList = ["header__faq-btn"]
headerFaqBtn.setAttribute("type", "button")

//header navbar
headerNavbar = document.createElement("nav")
headerNavbar.classList = ["header__navbar"]
for(let i=0; i<links.length; i++){
    let j = links[i]
    j = document.createElement("a")
    j.textContent = links[i]
    j.setAttribute("href", paths[i])
    j.classList = ["header__nav-links"]
    headerNavbar.appendChild(j)
}

header.appendChild(headerTitle)
header.appendChild(headerMenuBtn)
header.appendChild(headerFaqBtn)
header.appendChild(headerNavbar)

// footer
footer = document.getElementById("Footer")

footerSociety = document.createElement("p")
footerSociety.innerHTML = `<sup>a unit of</sup>
                            bangalore university credit co-operative society
                            <sub>&copy; 2025, all rights reserved.</sub>`
footerSociety.classList = ["footer__society"]

footer.appendChild(footerSociety)

//sidebar
sidebar = document.getElementById("sideBar")

sidebarCloseBtn = document.createElement("button")
sidebarCloseBtn.classList = ["sidebar__close-btn"]
sidebarCloseBtn.innerHTML = "&times;"
sidebarCloseBtn.addEventListener("click", ()=>{
    sidebar.style.transform = ""
})

for(let i=0; i<links.length; i++){
    let j = links[i]
    j = document.createElement("a")
    j.textContent = links[i]
    j.setAttribute("href", paths[i])
    j.classList = ["sidebar__nav-links"]
    sidebar.appendChild(j)
}

sidebar.appendChild(sidebarCloseBtn)