let add_buttons = document.getElementsByClassName('click');
// console.log(add_buttons);
let buttonsCount = add_buttons.length;
// console.log("raodenoba: " + buttonsCount);


// let defaultTextContent = add_buttons[0].textContent;
// for (let i = 0; i < buttonsCount; i++) {
//     add_buttons[i].addEventListener("click", function () {
//         for (var elementIndex = 0; elementIndex < buttonsCount; elementIndex++) {
//             add_buttons[elementIndex].classList.remove("added");
//             add_buttons[elementIndex].textContent = defaultTextContent;
//         }
//         this.classList.toggle("added");
//         if (this.classList.contains("added"))
//             this.textContent = "დამატებულია";
//         else this.textContent = defaultTextContent;
//     })
// }
for (let i = 0; i < buttonsCount; i++) {
    // console.log (i)
    add_buttons[i].addEventListener('click', function(){
        // console.log (i)
        this.classList.toggle('added');
         if (this.classList.contains('added')){
            this.textContent = "დამატებულია";
         } else {
            this.textContent = "დამატება";
        }

    });
    if(add_buttons[i].classList.contains('added')){
        add_buttons[i].textContent = "დამატებულია";
    } else {
        add_buttons[i].textContent = "დამატება";
    }
}