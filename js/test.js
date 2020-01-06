let elements = []
var ab = document.getElementById("add_button");
var tr = document.getElementsByClassName("row");
let pb = document.getElementsByClassName("priority_button");
let cb = document.getElementsByClassName("complete_button");
let rb = document.getElementsByClassName("remove_button");
let tod = document.getElementsByClassName("to_do")

let element_prioritize;

window.onload = function() {
    document.getElementById("ta").onmouseover = startup;
}

const create_item = function() {
    let input = document.getElementById("init").value;
    if (input === "") {

    } else {
        let tod = {
            task: input,
            priority: false,
            complete: false,
            html_row: null,
            html_priority_button: null,
            html_text: null,
            html_remove_button: null
        }

        elements.push(tod);
        let index = elements.indexOf(tod);

        elements[index].htmltr = document.createElement("tr");
        elements[index].htmltr.setAttribute("class", "row");
        document.getElementById("ta").append(elements[index].htmltr);

        elements[index].htmlpb = document.createElement("td");
        elements[index].htmlpb.setAttribute("class", "pb");
        elements[index].htmlpb.innerHTML = "!";

        tr[index].append(elements[index].htmlpb);

        elements[index].htmltx = document.createElement("td");
        elements[index].htmltx.innerHTML = elements[index].task;
        elements[index].htmltx.setAttribute("class", "tod");

        tr[index].append(elements[index].htmltx);

        elements[index].htmlcb = document.createElement("td");
        elements[index].htmlcb.innerHTML = "&#x2713;";
        elements[index].htmlcb.setAttribute("class", "cb");

        tr[index].append(elements[index].htmlcb);

        elements[index].htmlrb = document.createElement("td");
        elements[index].htmlrb.setAttribute("class", "rb");
        elements[index].htmlrb.innerHTML = "X";

        tr[index].append(elements[index].htmlRemoveButton);
    }
    document.getElementById("init").value = "";
};

const remove_item = function() {
    var removed = false;
    for (let i = 0; i < rb.length; i++) {
        rb[i].onclick = function() {
            removed = true;
            let remove_element = tr[i];
            remove_element.remove();
            elements.splice(i, 1);
        };
        if (removed) {
            break;
        }
    }
}

const finish_item = function() {
    var finish = false;
    for (let x = 0; x < cb.length; x++) {
        cb[x].onclick = function() {
            if (elements[x].complete == false) {
                finish = true;
                listItem[x].style.setProperty("text-decoration", "line-through");
                listItem[x].style.backgroundColor = "#baff66";
                cb[x].style.backgroundColor = "#baff66";
                listItem[x].style.color = "black";
                cb[x].style.color = "black";
                cb[x].style.borderColor = "black";
                elements[x].complete = true;
            } else if (elements[x].complete == true) {
                cb[x].style.backgroundColor = "black";
                cb[x].style.color = "#A4FFA4"
                cb[x].style.borderColor = "#A4FFA4"
                listItem[x].style.setProperty("text-decoration", "none");
                listItem[x].style.backgroundColor = "black";
                listItem[x].style.color = "#A4FFA4";
                elements[x].complete = false;
            }
        };
        if (finish) {
            break;
        }
    }
}

const prioritize_item = function() {
    var prioritize = false;
    for (let z = 0; z < pb.length; z++) {
        pb[z].onclick = function() {
            if (elements[z].priority == false) {
                element_prioritize = tr[z]
                prioritize = true;
                pb[z].style.backgroundColor = "#fff98a";
                pb[z].style.color = "black";
                pb[z].style.borderColor = "black";
                tr[0].before(element_prioritize);
                elements[z].priority = true;

                const objectToMove = elements[z];

                elements.splice(z, 1);
                elements.unshift(objectToMove);
                prioritize = true;
            } else if (elements[z].priority) {
                element_prioritize = tr[z]
                pb[z].style.backgroundColor = "black";
                pb[z].style.color = "#A4FFA4";
                pb[z].style.borderColor = "#A4FFA4";
                tr[elements.length - 1].after(element_prioritize);
                elements[z].priority = false;

                let element_move = elements[z];
                elements.splice(z, 1);
                elements.push(element_move);
                prioritize = true;
            }
        };
        if (prioritize) {
            break;
        }
    }
}

const startup = function() {
    remove_item();
    finish_item();
    prioritize_item();
}

addb.onclick = create_item

document.getElementById("init").addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        document.getElementById("ab").click();
    }
});
