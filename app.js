const sections = document.querySelectorAll('.section');
const secbtns = document.querySelectorAll(".controls");
const secbtn = document.querySelectorAll(".control");
const allsec = document.querySelectorAll(".main-content")[0];

function pagetransitions() {
    // Button click active class
    for (let i = 0; i < secbtn.length; i++) {
        secbtn[i].addEventListener("click", function () {
            let currentbtn = document.querySelectorAll(".active-btn");
            currentbtn[0].className = currentbtn[0].className.replace("active-btn", "");
            this.className += ' active-btn';
        });
    }

    // Sections active class
    allsec.addEventListener('click', (e) =>{
        const id = e.target.dataset.id;
        if (id){
            // remove selected form other btns
            secbtns.forEach((btn) =>{
                btn.classList.remove('active')
            })
            e.target.classList.add('active')

            // hide other sections
            sections.forEach((section) =>{
                section.classList.remove('active')

            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })
    
    //  Toggle Theme

    const themebtn = document.querySelector('.theme-btn');

    themebtn.addEventListener("click", () =>{
        let element = document.body;
        element.classList.toggle('light-mode')
    })

}

pagetransitions();

// <!-- Element to contain animated typing -->
// <span id="element"></span>

// <!-- Load library from the CDN -->
// <script src="https://unpkg.com/typed.js@2.0.16/dist/typed.umd.js"></script>

// <!-- Setup and start animation! -->
// 
// </body>


/* ### For making same Body background color as the section background color ### */
const controls = document.querySelectorAll('.control');

controls.forEach(control => {
  control.addEventListener('click', () => {
    const sectionId = control.getAttribute('data-id');
    const section = document.getElementById(sectionId);
    const sectionBackgroundColor = getComputedStyle(section).backgroundColor;
    
    // Update body's background color
    document.body.style.backgroundColor = sectionBackgroundColor;

    // You can also update other styles or perform additional actions here

    // Optionally, you can add a smooth scroll to the selected section
    section.scrollIntoView({ behavior: 'smooth' });
  });
});

const controlIcons = document.querySelectorAll('.control');

controlIcons.forEach((icon) => {
    icon.addEventListener('click', () => {
        // Remove the animate class
        icon.classList.remove('animate');

        // Trigger reflow to restart the animation
        void icon.offsetWidth;

        // Add the animate class back
        icon.classList.add('animate');
    });
});
/* ### End of making same Body background color as the section background color ### */



