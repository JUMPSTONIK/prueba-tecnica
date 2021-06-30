let btnPush = document.getElementById('push'),
    btnPop = document.getElementById('pop'),
    textPila = document.getElementById('minimo'),
    textMinimo = document.getElementById('list');

    
const pila = [];
let minimo = 0;

const insertElement = () => {
    let tfInput = parseInt(document.getElementById('input').value);
    //let tfInput = document.getElementById('input').textContent;
    pila.push(tfInput);

    if(pila.length === 1){
        minimo = pila[0];
    }else{
        if(pila[pila.length -1] < minimo){
            minimo = pila[pila.length-1];
        }
    }

    console.log({pila, minimo})

    textPila.innerHTML = `${pila}`;
    textMinimo.innerHTML = `${minimo}`
}

const takeOut = () => {
    let index = pila.indexOf(minimo);

    if (pila.length > 0){
        pila.pop();
    }

    if(index > pila.length - 1){
        minimo = pila[0];
        for( let item of pila){
            if(item < minimo){
                minimo = item;
            }
        }
    }

    console.log({pila, minimo})

    textPila.innerHTML = `${pila}`;
    textMinimo.innerHTML = `${minimo}`;

}



btnPush.addEventListener('click', insertElement, true);
btnPop.addEventListener('click',takeOut, true);
