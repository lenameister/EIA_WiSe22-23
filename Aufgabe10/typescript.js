var A10;
(function (A10) {
    window.addEventListener("load", function () {
        let index = 0;
        let input = document.querySelector("#textfield");
        document.querySelector("#btn").addEventListener("click", newTask);
        function newTask() {
            index++;
            document.querySelector("#todoAmount").innerHTML = String(index + " in total");
            let eingabefeld = document.createElement("p");
            eingabefeld.innerHTML = input.value;
            input.value = "";
            let check = document.createElement("div");
            let task = document.getElementById("task");
            let trash = document.createElement("div");
            let wrapper = document.createElement("div");
            wrapper.textContent = "";
            task.appendChild(wrapper);
            wrapper.appendChild(eingabefeld);
            wrapper?.appendChild(check);
            wrapper?.appendChild(trash);
            task?.appendChild(wrapper);
            eingabefeld.id = "eingabe";
            check.className = "far fa-circle";
            wrapper.id = "neuesDiv";
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
                index--;
                document.querySelector("#todoAmount").innerHTML = String(index + " in total");
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