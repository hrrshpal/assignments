const addBtn = document.querySelector('#add-btn');
const form = document.querySelector("#form-preview")


addBtn.addEventListener("click", function(){
    const fieldType = document.querySelector("#field-type").value;
    const fieldLabel = document.querySelector("#field-label").value;

    let div = document.createElement("div")
    div.setAttribute("id",fieldType+"-field");
    let label = document.createElement("label")
    label.textContent = fieldLabel;
    let input = document.createElement("input")
    input.setAttribute("type", fieldType)

    if(fieldType === 'text'){
        div.appendChild(label)
        div.appendChild(input)
        form.append(div)
    } else {
        label.textContent = ""
        label.appendChild(input)
        label.append(" " + fieldLabel)
        div.appendChild(label)
        form.append(div)
    }
})