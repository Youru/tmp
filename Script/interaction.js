usagesModule.init("")

// document.getElementById('button-values')
//     .addEventListener('click', function () {
//         var result = usagesModule.getUsages();
//     });
let form2 = document.getElementById('form-2')
let cspBtn = document.querySelectorAll('#form-1 button')
for (var i = 0; i < cspBtn.length; i++) {
    cspBtn[i].addEventListener('click', function(event) {
            form2.setAttribute("data-csp",this.id);
    });
}