const b_table = document.querySelector('tbody')
const resultado = document.querySelector('.resultado')
const vs_calcular = document.querySelectorAll('.v_calcular')

document.querySelector('form').addEventListener('submit', e => {

    e.preventDefault();


    const data = Object.fromEntries(new FormData(e.target))

    const c_error = 0.5*(10**(2-parseInt(data.ncs)))


    let it = 0
    let error = 100
    let fx = 0
    let fpx = 0
    let xi = parseFloat(data.valor)
    let xi2 = 0
    let t_ind = parseFloat(data.valor)
    let row = "";

    
    while(error > c_error){
        it += 1;

        fx = (xi**3)-t_ind
        fpx = 3*(xi**2)

        xi2 = xi - (fx/fpx)


        row += `<tr><td>${it}</td> 
                    <td>${xi}</td>
                    <td>${fx}</td>
                    <td>${fpx}</td>
                    <td>${xi2}</td>
                    <td>${error}</td>        
                    </tr>`

        error = Math.abs(((xi2-xi)/xi2))*100
        xi = xi2
        
    }

    b_table.innerHTML =  row;

    resultado.style.display = 'flex'
    
    Array.from(vs_calcular).forEach( v_calcular =>  {
        v_calcular.innerHTML = data.valor 
    })


    document.querySelector('.v_resultado').innerHTML = xi2

})