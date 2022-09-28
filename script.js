let pagina = 0
const tutteLePagine = document.getElementsByClassName("carousel-item")

const avanti = function(){

    const paginaPrecedente = tutteLePagine[pagina]
    paginaPrecedente.classList.remove("show")

    pagina++
    console.log(pagina)
    if (pagina >= tutteLePagine.length) {
        pagina = 0
    } solo se siamo oltre l'array

    const paginaCorrente = tutteLePagine[pagina]
    paginaCorrente.classList.add("show")
}

const indietro = function(){

    const paginaPrecedente = tutteLePagine[pagina]
    paginaPrecedente.classList.add("show")

    pagina++
    console.log(pagina)
    if (pagina >= tutteLePagine.length) {
        pagina = 1
    }
    const paginaCorrente = tutteLePagine[pagina]
    paginaCorrente.classList.remove("show")

}