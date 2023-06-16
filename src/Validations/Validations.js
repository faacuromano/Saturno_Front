const errorCamposOb = "Campo obligatorio."
const errorDebeContener = "Debe contener entre 4 y 25 caracteres." 
const errorDebeContenerTel = "Debe contener 10 números."
const errorEmail = "Ingrese un email correcto."
const errorTel = "Ingrese un número correcto."
const errorPass = "La contraseña debe contener al menos un número y una mayúscula."
const errorValidPass= "Las contraseñas no coinciden."
const errorFecha = "Ingrese la fecha en el formato indicado."
const errorHora = "Ingrese el horario en el formato indicado."

export const campoObligatorio = ({value}) => {
  if(value===""){
    return errorCamposOb
  }
  return null
}

export const validacionesInputs = ({value}) => {
  console.log(value) 
  if(value===""){
     return errorCamposOb
   }
  if (value.length <4 || value.length  > 25) {
    return errorDebeContener
   }
   return null
}

export const validacionesInputsTel = ({value}) => {
  const onlyNumbers = /^[0-9]*$/
  console.log(value) 
  
  if(value===""){
     return errorCamposOb
   }

  if (value.length !== 10) {
    return errorDebeContenerTel
   }

   if (!onlyNumbers.test(value)) {
      return errorTel
   }
   return null
}

export const validacionesInputsEmail = ({value}) => {
  console.log(value) 
  
  const dominiosPermitidos = /@gmail\.com$|@hotmail\.com$|@yahoo\.com$/;

  if(value===""){
     return errorCamposOb
   }

  if (!dominiosPermitidos.test(value)) {
    return errorEmail
   }
  return null
}

export const validacionesInputsPass = ({value}) => {
  console.log(value) 
  const regex = /^(?=.*\d)(?=.*[A-Z])/;

  if(value===""){
     return errorCamposOb
   }

  if (!regex.test(value)) {
    return errorPass
   }
  return null
}

export const validacionesInputsValidPass = ({value1, value2}) => {
  console.log("value1:", value1, "value2:", value2)
  if(value1==="" || value2===""){
     return errorCamposOb
   }

  if (value1!==value2) {
    return errorValidPass
   }
  return null
}

export const validacionesInputsFecha = ({value}) => {
  console.log(value)  
  const regex = /^\d{4}-\d{2}-\d{2}$/;
  const partes = value.split("-");
  const year = parseInt(partes[0], 10);
  const month = parseInt(partes[1], 10);
  const day = parseInt(partes[2], 10);
  
  if(value===""){
    return errorCamposOb
  }
  if (!regex.test(value)) {
    return errorFecha
  }
  
  const fechaValida = new Date(year, month - 1, day);
  if (
      fechaValida.getFullYear() !== year ||
      fechaValida.getMonth() !== month - 1 ||
      fechaValida.getDate() !== day
  ) {
      return errorFecha 
    }
    return null  
} 

export const validacionesInputsHora = (value) => {
  console.log(value)  
  const regex = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/;
  const partes = value.split(":");
  const hora = parseInt(partes[0], 10);
  const minuto = parseInt(partes[1], 10);
  const segundo = parseInt(partes[2], 10);

  if(value===""){
    return errorCamposOb
  }
  if (!regex.test(value)) {
    return errorHora 
  }

  if (hora < 0 || hora > 23 || minuto < 0 || minuto > 59 || segundo < 0 || segundo > 59) {
    return errorHora
  }
  return null
}
