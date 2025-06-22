// function carregar() {
//     var date = new Date()
//     var date2 = date.getDate()

//     var data = window.document.querySelector('input#idia')
//     data.innerHTML = `${date2}`
// }

function carregar() {
    const hoje = new Date()

    const ano = hoje.getFullYear()
    const mes = String(hoje.getMonth() + 1).padStart(2, '0') // Mês começa em 0
    const dia = String(hoje.getDate()).padStart(2, '0')

    const dataFormatada = `${ano}-${mes}-${dia}`

    document.querySelector('#idia').value = dataFormatada
}
