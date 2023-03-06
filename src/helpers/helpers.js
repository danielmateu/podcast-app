export const formatearFecha = (fecha) => {
    const fechaFormateada = new Date(fecha);
    const dia = fechaFormateada.getDate();
    const mes = fechaFormateada.getMonth() + 1;
    const anio = fechaFormateada.getFullYear();
    return `${dia}/${mes}/${anio}`;
}

//Formatear de milisegundos a minutos y segundos
export const formatearDuracion = (duracion) => {
    const minutos = Math.floor(duracion / 60000);
    const segundos = ((duracion % 60000) / 1000).toFixed(0);
    return `${minutos}:${segundos < 10 ? "0" : ""}${segundos}`;
}
