// const expresiones = {
//     usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
//     nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
//     password: /^.{4,12}$/, // 4 a 12 digitos.
//     correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
//     telefono: /^\d{7,14}$/ // 7 a 14 numeros.
// }

export function validateEmail(input){
    const validEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    // if(validEmail.test(input) === false){
    //     return false
    // } 
    return true
}

export function validatePassword(input){
    const validPassword = /^.{6,12}$/ // 6 a 12 digitos.
    if(validPassword.test(input) === false){
        return false
    } 
    return true
}