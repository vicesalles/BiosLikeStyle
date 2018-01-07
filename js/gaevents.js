//EVENTS FOR GOOGLE ANALYTICS. I LIKE TO KNOW ABOUT MY STALKERS

document.addEventListener("DOMContentLoaded", function (event) {
    //Getting all the buttons to Track
    const buttons = Array.from(document.querySelectorAll('li.infla'));
    
    //Creating GA events
    buttons.map((bt) => {
       
        //Button ID
        let id = bt.children[0].id;
        
        //DOM element
        let el = document.querySelector(`#${id}`);
        
        //Getting Text
        let txt = el.innerHTML;
        
        //Setting up the listener
        el.addEventListener('click', () => {
            //Launching Google Analytics event
            ga('send', 'event', 'me', 'click', txt);
        })

    })

});