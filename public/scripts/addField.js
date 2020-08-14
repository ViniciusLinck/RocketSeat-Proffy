//Procurar o botao
document.querySelector("#add-time")

// Quando clicar no botao
.addEventListener('click', cloneField)

// Executar uma ação
function cloneField() {
    // duplicar campos. Que campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    //limpar os campos. que campos?
    const fields = newFieldContainer.querySelectorAll('input')

    fields.forEach(function(field) {
        field.value = ""
    })
    // colocar na página: onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
    