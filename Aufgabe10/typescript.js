var A10;
(function (A10) {
    window.addEventListener("load", function () {
        let counter = 0;
        let input = document.querySelector("#textfield");
        document.querySelector("#addtn").addEventListener("click", newTask);
        function newTask() {
            counter++;
            document.querySelector("todocounter").innerHTML = String(counter + " in total");
            let eingabefeld = document.createElement("p");
            eingabefeld.innerHTML = input.value;
            input.value = "";
            let task = document.getElementById("task");
            let check = document.createElement("div");
            let trash = document.createElement("div");
            let wrapper = document.createElement("div");
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
            function erledigteToDos() {
                if (check.getAttribute("class") == "far fa-check-circle") {
                    check.setAttribute("class", "far fa-circle");
                }
                else {
                    check.setAttribute("class", "far fa-check-circle");
                }
            }
            trash.addEventListener("click", deleteToDo);
            function deleteToDo() {
                wrapper.parentElement.removeChild(wrapper);
                counter--;
                document.querySelector("#todoAmount").innerHTML = String(counter + " in total");
            }
        }
        document.addEventListener("keydown", function (event) {
            if (event.key == "Enter") {
                newTask();
            }
        });
    });
})(A10 || (A10 = {}));
//# sourceMappingURL=typescript.js.map