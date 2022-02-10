
export const messages = {
    loan: (isApproved: boolean) => {

        const title = isApproved ? 'Prestamo aprobado' : 'Préstamo rechazado'
        const icon = isApproved ? 'success' : 'error'
        const text = isApproved ?
            `Se ha generado con éxito su prestamo nuestro
           equipo se contactará para el desembolso`
            : 'Lo sentimos no cumple con las requisitos necesarios';

        return {title, icon, text}
    }
}