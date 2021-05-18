const calcular = () => {

    const dato = document.querySelector("#e1").value;

     if (dato >= 1 && dato <=13)
     {
        alert ('Su edad esta entre 1 a 13 años edad')
     }

     if (dato >= 14 && dato<= 21)
    {
        alert ('Su edad esta entre 14 a 21 años de edad')
    }

    if (dato >= 21)
    {
        alert('El sujeto es mayor de 21 años de edad')
    }
}

const btn = document.querySelector("#btn_validar");
btn.addEventListener("click",calcular);
