// let display = document.getElementById('display');

// let buttons = Array.from(document.getElementsByClassName('button'));

// buttons.map( button => {
//     button.addEventListener('click', (e) => {
//         switch(e.target.innerText){
//             case 'C':
//                 display.innerText = '';
//                 break;
//             case '=':
//                 try{
//                     display.innerText = eval(display.innerText);
//                 } catch {
//                     display.innerText = "Error"
//                 }
//                 break;
//             case '←':
//                 if (display.innerText){
//                    display.innerText = display.innerText.slice(0, -1);
//                 }
//                 break;
//             default:
//                 display.innerText += e.target.innerText;
//         }
//     });
// });

let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('button'));
//1 Get all of our buttons by going thro all the html and get each element with class button
//2 Convert the html collection to Array collection 

buttons.map(button =>{
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                // this is how to clear all the text inside the display container 
                display.innerText = '';
                break;
                // Add break to end the execution here
            case '=':
                //To make the equal sign work properly here we use the function eval 
                try{
                    display.innerText = eval(display.innerText)
                }
                //We have to use the try catch block so the program is executed the right way with handling error if needed.
                catch{
                    display.innerText = "Error!"
                }
                break;
            case '←':
                //Use the slice method to remove the last added element on the display container
                if(display.innerText){
                    display.innerText = display.innerText.slice(0, -1);
                }
                break;
                //This is how to add the content of each button to display
            default:
                display.innerText += e.target.innerText;
        }
    });
});