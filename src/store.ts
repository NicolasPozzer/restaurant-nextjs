import { create } from "zustand";
import { OrderItem } from "./types";
import { Product } from "@prisma/client";

interface Store {
    order: OrderItem[];
    addToOrder: (product: Product) => void;
}

export const useStore = create<Store>((set, get) => ({
    // Inicialización
    order: [],

    // Métodos
    addToOrder: (product) => {
        // Destructuración del producto antes de agregarlo
        const { categoryId, image, ...algunosAtributos } = product;

        // Verificar si el producto ya existe en la orden
        const existingOrderItem = get().order.find(item => item.id === product.id);

        let updatedOrder;

        if (existingOrderItem) {
            // Si el producto ya existe, incrementa la cantidad y el subtotal
            updatedOrder = get().order.map(item =>
                item.id === product.id
                    ? {
                        ...item,
                        quantity: item.quantity + 1,
                        subtotal: item.price * (item.quantity + 1)
                    }
                    : item
            );
        } else {
            // Si el producto no existe, agrega uno nuevo a la orden
            updatedOrder = [
                ...get().order,
                {
                    ...algunosAtributos,
                    quantity: 1,
                    subtotal: product.price
                }
            ];
        }

        // Actualiza el estado con la orden modificada
        set({ order: updatedOrder });
    }
}));
