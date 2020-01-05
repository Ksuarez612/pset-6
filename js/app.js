window.onload = function() {
  document.getElementById("bTN").onclick = newElement
  document.getElementById("textIN")

}



const newElement = function() {
  var input = document.getElementById("textIN").value
  var li = document.createElement("li")
  var ul = document.getElementById("unorLT")
  var exclamation = document.createElement("button")
  exclamation.id = exclamation
  exclamation.value = "Priority"
  exclamation.setAttribute("style", )
  var done = document.createElement("button")
  done.id = done
  done.value = "Complete"
  var close = document.createElement("button")
  close.id = close
  close.value = "Delete"

  li.prepend(exclamation)
  li.append(input);
  li.append(done);
  li.append(close);
  ul.append(li);

  var array = []

  if (input != null) {
    array.unshift(input)
  }

  input = "";
}
