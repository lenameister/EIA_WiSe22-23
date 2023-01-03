namespace A10 {
    window.addEventListener("load", function (): void {
        let counter = 0;
        let input: HTMLInputElement = document.querySelector("#textfield");
        document.querySelector("#addtn").addEventListener("click", newTask);


        function newTask() {
            counter++;
            document.querySelector("todocounter").innerHTML = String(counter + " in total");

            let eingabefeld: HTMLElement = document.createElement("p");
            eingabefeld.innerHTML = input.value;

            input.value = "";

            let task: HTMLElement = document.getElementById("task");
            let check: HTMLDivElement = document.createElement("div");
            let trash: HTMLDivElement = document.createElement("div");
            let wrapper: HTMLDivElement = document.createElement("div");

            wrapper.textContent = "";

            task.appendChild(wrapper);
            wrapper.appendChild(eingabefeld);
            wrapper?.appendChild(check);
            wrapper?.appendChild(trash);
            task?.appendChild(wrapper);

            eingabefeld.id = "eingabe";
            wrapper.id = "neuesDiv";
            check.className = "far fa-circle";
            trash.className = "fas fa-trash";


            check.addEventListener("click", erledigteToDos);

            function erledigteToDos(): void {
                if (check.getAttribute("class") == "far fa-check-circle") {
                    check.setAttribute("class", "far fa-circle");
                }
                else {
                    check.setAttribute("class", "far fa-check-circle");
                }
            }

            trash.addEventListener("click", deleteToDo);

            function deleteToDo(): void {
                wrapper.parentElement.removeChild(wrapper);
                counter--;
                document.querySelector("#todoAmount").innerHTML = String(counter + " in total");
            }

        }

        document.addEventListener("keydown", function (event: KeyboardEvent): void {
            if (event.key == "Enter") {
                newTask();
            }
        });
    });
}
