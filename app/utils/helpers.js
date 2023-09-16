export function formatearFecha(fecha){
    const fechaNueva = new Date(fecha)
    const formato= {
        year:"numeric",
        month:"long",
        day:"2-digit"
    }

    return fechaNueva.toLocaleDateString('es-ES',formato)
}