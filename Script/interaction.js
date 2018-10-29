usagesModule.init("")


let form1 = document.getElementById('form-1')
let form3 = document.getElementById('form-3')

let cspBtn = document.querySelectorAll('#form-1 button')
for (var i = 0; i < cspBtn.length; i++) {
    cspBtn[i].addEventListener('click', function (event) {
        form3.innerHTML = ""
        reinit_checked()
        usagesModule.refreshSelect(this.id)
        form1.setAttribute("data-csp", this.id)
        this.classList.add("checked")
    });
}

function reinit_checked() {
    for (var i = 0; i < cspBtn.length; i++) {
        cspBtn[i].classList.remove("checked")
    }
}

let inputFields = document.querySelectorAll('input,select')
for (var i = 0; i < inputFields.length; i++) {
    inputFields[i].onchange = usagesModule.drawTable
}
