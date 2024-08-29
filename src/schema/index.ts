import { z } from 'zod'

// VALIDACIONES PARA FORMULARIOS Y OTROS..  CON ZOD,
// FUNCIONA PARA VALIDAREN EL CLIENTE Y SERVIDOR.

export const OrderSchema = z.object({
    name: z.string()
        .min(1, 'Tu Nombre es Obligatorio'),
    total: z.number()
        .min(1, "Hay errores en la orden"),//si se le pasa 0 en vez de 1, es decir que no hay ningun
    //producto en la listapero como es una lista de carrito siempre tiene q haber uno al cliquear

    order: z.array(z.object({
        id: z.number(),
        name: z.string(),
        price: z.number(),
        quantity: z.number(),
        subtotal: z.number()
    }))
})