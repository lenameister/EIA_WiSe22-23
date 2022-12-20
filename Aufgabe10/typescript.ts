namespace A10 {
    let counter = 0;
    let input = document.querySelector("task");

    function newTask() {
        counter++;
        document.querySelector("todocounter").innerHTML = String(counter + " in total");

        
    }

}