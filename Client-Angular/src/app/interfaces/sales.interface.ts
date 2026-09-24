/**
 * Interfaz que representa una venta o pedido del sistema.
 *
 * Contiene la información básica necesaria para mostrar una venta
 * en la tabla o en cualquier componente de listado.
 *
 * @remarks
 * Cada venta debe tener un `id` único, el nombre del `customer`,
 * el `product` vendido, la `date` de la transacción, el `total`
 * en pesos colombianos y un `status` definido.
 *
 * @example
 * ```ts
 * const venta: Sale = {
 *   id: 1,
 *   customer: 'Carlos Ramírez',
 *   product: 'Leche entera',
 *   date: '2025-09-01',
 *   total: 4500,
 *   status: 'Completada'
 * };
 * ```
 */
export interface Sale {
    /** Identificador único de la venta */
    id: number;

    /** Nombre del cliente que realiza la compra */
    customer: string;

    /** Producto o descripción de la venta */
    product: string;

    /** Fecha de la venta */
    date: string;

    /** Total de la venta en pesos */
    total: number;

    /** Estado de la venta */
    status: SaleStatus;
}

/**
 * Tipo de estado de una venta.
 *
 * @remarks
 * Este tipo restringe los estados a los valores predefinidos:
 * - 'Completada'
 * - 'Pendiente'
 * - 'Cancelada'
 *
 * Se utiliza principalmente para mapear badges de colores en la UI.
 *
 * @example
 * ```ts
 * const estado: SaleStatus = 'Pendiente';
 * ```
 */
export type SaleStatus = 'Completada' | 'Pendiente' | 'Cancelada';