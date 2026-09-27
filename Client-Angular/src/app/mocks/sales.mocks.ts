import { Sale } from "../interfaces/sales.interface";

export const SALES_MOCK: Sale[] = [
    {
        id: 1,
        customer: 'Carlos Ramírez',
        product: 'Leche entera',
        date: '2025-09-01',
        total: 4500,
        status: 'Completada',
    },
    {
        id: 2,
        customer: 'Ana Gómez',
        product: 'Queso campesino',
        date: '2025-09-02',
        total: 8200,
        status: 'Pendiente',
    }
];