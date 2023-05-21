const table = document.getElementById("table");
const modal = document.getElementById("modal");
const inputs = document.querySelectorAll("input")

let count = 0;

window.addEventListener('click', (e) => {
    if(e.target.matches(".btn-warning")) {
        e.stopPropagation();
        let data = e.target.parentElement.parentElement.parentElement.children;
        fillData(data);
        modal.classList.toggle("translate");
    }
    if(e.target.matches(".btn-danger")) {
        modal.classList.toggle("translate");
        count = 0;
    }
})

const fillData = (data) => {
    for (let index of inputs) {
        index.value = data[count].textContent;
        count++;
    }
}