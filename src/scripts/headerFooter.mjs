// ---> Header section
const siteHeader = document.getElementById('siteHeader')
siteHeader.classList.add('bg-prm', 'h-[10vh]', 'w-full', 'flex', 'items-center', 'justify-between')

const siteTitle = document.createElement('h2')
siteTitle.textContent = 'jnana bharathi samudaya bhavana'
siteTitle.classList.add('uppercase', 'max-w-[20ch]', 'text-bg-one','text-center', 'text-[1.2rem]', 'font-heading', 'font-bold')
siteHeader.appendChild(siteTitle)

const siteMenuBtn = document.createElement('button')
siteMenuBtn.innerHTML = '&equiv;'
siteMenuBtn.classList.add('h-10', 'w-12', 'bg-transparent', 'text-bg-one', 'text-[1.2rem]', 'font-bold')
siteHeader.appendChild(siteMenuBtn)


// ---> Footer section
const siteFooter = document.getElementById('siteFooter')
siteFooter.classList.add('flex', 'flex-col', 'items-center', 'justify-evenly', 'bg-prm', 'h-[50vh]', 'w-full', 'mt-8')

const siteAddress = document.createElement('address')
siteAddress.innerHTML = `near Bangalore University,<br>
                        Bangalore University road,<br>
                        jnana bharathi,<br>
                        Bengaluru - 560034<br>
                        Karnataka - IN`
siteAddress.classList.add('text-center', 'text-bg-one', 'font-heading', 'font-semibold', 'text-[0.9rem]')
siteFooter.appendChild(siteAddress)

const siteTiming = document.createElement('p')
siteTiming.innerHTML = `Business Hours:<br>
                        Monday - Friday<br>
                        10.00AM to 5.00PM`
siteTiming.classList.add('text-center', 'text-bg-one', 'font-heading')
siteFooter.appendChild(siteTiming)

const siteHelpline = document.createElement('p')
siteHelpline.innerHTML = `Helpline:<br>
                            1234567890`
siteHelpline.classList.add('text-center', 'text-bg-one', 'font-heading')
siteFooter.appendChild(siteHelpline)

const siteCopyright = document.createElement('p')
siteCopyright.innerHTML = '&copy; Jnana Bharathi, All Right Resevered'
siteCopyright.classList.add('text-bg-one', 'text-center', 'font-heading')
siteFooter.appendChild(siteCopyright)