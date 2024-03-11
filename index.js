//SIDEBAR
const menuItems = document.querySelectorAll('.menu-item');
//MESSAGES
const messagesNotification=document.querySelector('.message-notification-count');
const messages=document.querySelector('#messages');
const messageBox= document.querySelector('.messages');
const message= document.querySelectorAll('.message');
const messageSearch= document.querySelector('#message-search');
//THEME CUSTOMISATION
const newActive2= document.querySelector('.customise-theme');
//remove active class
const changeActive =()=>{
    menuItems.forEach(item=>{
        item.classList.remove('active');
    }) 
}
menuItems.forEach(item =>{
    item.addEventListener('click',()=>{
        changeActive();
        item.classList.add('active');
        if (item.id !=='notifications'&&item.id !=='theme') {
            const newActive = document.querySelector('.notification-popup')
            newActive.style.display ='none';
            const newActive2= document.querySelector('.customise-theme');
            newActive2.style.display ='none';
        }    
        else if(item.id =='notifications'){
            const newActive = document.querySelector('.notification-popup')
            newActive.style.display ='block';
            const notification = document.querySelector('.notification-count');
            notification.style.display='none';
        }
        else if(item.id =='theme'){
            const newActive = document.querySelector('.customise-theme');
            newActive.style.display ='grid';
        }
    })
})

//MESSAGES
//messages selection
messages.addEventListener('click',()=>{
    messageBox.style.display ='block';
    messageBox.style.boxshadow = '0 0 1rem var(--color-primary)';
    setTimeout(()=>{
    messageBox.style.boxshadow = 'none';
    },2000)
    messagesNotification.style.display='none';
})
//message search
// Function to handle search
function searchUsers(query) {
    const messages = document.querySelectorAll('.message');
    messages.forEach(message => {
        const userName = message.querySelector('h5').textContent.toLowerCase();
        if (userName.includes(query.toLowerCase())) {
            message.style.display = 'block';
        } else {
            message.style.display = 'none';
        }
    });
}

// Example usage:
const searchInput = document.getElementById('message-search'); 
searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim();
    searchUsers(query);
});
//theme customisation
document.addEventListener("DOMContentLoaded", function() {
    // Font size customization
    const fontSizes = document.querySelectorAll('.choose-size span');
    fontSizes.forEach(function(fontSize) {
        fontSize.addEventListener('click', function() {
            // Remove active class from all font size options
            fontSizes.forEach(function(option) {
                option.classList.remove('active');
            });
            // Add active class to the clicked font size option
            this.classList.add('active');
            changeThemes();
        });
        const changeThemes = function () {
            let fontsize;
        if(fontSize.classList.contains('font-size-1')){
            fontsize = '10px';
        }
        else if(fontSize.classList.contains('font-size-2')){
            fontsize = '12px';
        }
        else if(fontSize.classList.contains('font-size-3')){
            fontsize = '14px';
        }
        else if(fontSize.classList.contains('font-size-4')){
            fontsize = '16px';
        }
        else if(fontSize.classList.contains('font-size-5')){
            fontsize = '18px';
        }
        const myhtml=document.querySelector('html');
        myhtml.style.fontSize = fontsize; 
        }
    });
    
    // Color customization
    // Get the computed style of the root element

// Access the value of the CSS variable
const rootStyles = window.getComputedStyle(document.documentElement);
let primaryHue = rootStyles.getPropertyValue('--color-primary-hue');
const colors = document.querySelectorAll('.choose-color span');

colors.forEach(function(color) {
    color.addEventListener('click', function() {
        // Remove active class from all color options
        colors.forEach(function(option) {
            option.classList.remove('active');
        });
        // Add active class to the clicked color option
        this.classList.add('active');
        changeColor();
    });
    const changeColor = function () {
        let newPrimaryHue;
        if(color.classList.contains('Color-1')){
            newPrimaryHue = 252;
        }
        else if(color.classList.contains('Color-2')){
            newPrimaryHue = 52;
        }
        else if(color.classList.contains('Color-3')){
            newPrimaryHue = 352;
        }
        else if(color.classList.contains('Color-4')){
            newPrimaryHue = 152;
        }
        else if(color.classList.contains('Color-5')){
            newPrimaryHue = 202;
        }
        document.documentElement.style.setProperty('--color-primary-hue',newPrimaryHue);
    };
});

    // Background customization
    const backgrounds = document.querySelectorAll('.choose-bg div');
    backgrounds.forEach(function(bg) {
        bg.addEventListener('click', function() {
            // Remove active class from all background options
            backgrounds.forEach(function(option) {
                option.classList.remove('active');
            });
            // Add active class to the clicked background option
            this.classList.add('active');
            changeBackground();
        });
       
    const changeBackground = function () {
        let newBackground;
        let color;
        if(bg.classList.contains('bg-1')){
            newBackground= '100%';
            color='#000';
        }
        else if(bg.classList.contains('bg-2')){
            newBackground = '10%';
            color='#fff';
        }
        else if(bg.classList.contains('bg-3')){
            newBackground = '17%';
            color='#fff';
        }
        document.documentElement.style.setProperty('--bg-color-lightness',newBackground);
        document.documentElement.style.setProperty('--color',color);
    }; 
    });
});
// fonts


    

 
