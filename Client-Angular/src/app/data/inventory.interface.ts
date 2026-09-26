import { Inventory } from "../interfaces/inventory.interface";

/**
 * Listado de inventario del sistema.
 *
 * Esta constante representa un conjunto de datos de prueba (mock)
 * que simula la respuesta de un backend REST.
 *
 * Se utiliza principalmente para:
 * - Pruebas unitarias
 * - Prácticas de componentes
 * - Ejercicios de arquitectura modular
 *
 * @type {Inventory[]}
 */
export const INVENTORY: Inventory[] = [
  {
    id: 1,
    product: 'Leche entera',
    quantity: 50,
    minStock: 20,
    warehouse: 'Refrigerado',
    status: 'Disponible'
  },
  {
    id: 2,
    product: 'Queso campesino',
    quantity: 8,
    minStock: 10,
    warehouse: 'Refrigerado',
    status: 'Stock bajo'
  },
  {
    id: 3,
    product: 'Pechuga de pollo',
    quantity: 0,
    minStock: 15,
    warehouse: 'Refrigerado',
    status: 'Agotado'
  },
  {
    id: 4,
    product: 'Carne molida de res',
    quantity: 30,
    minStock: 12,
    warehouse: 'Refrigerado',
    status: 'Disponible'
  },
  {
    id: 5,
    product: 'Manzanas rojas',
    quantity: 25,
    minStock: 10,
    warehouse: 'Bodega A',
    status: 'Disponible'
  },
  {
    id: 6,
    product: 'Banano',
    quantity: 5,
    minStock: 8,
    warehouse: 'Bodega A',
    status: 'Stock bajo'
  },
  {
    id: 7,
    product: 'Tomate chonto',
    quantity: 0,
    minStock: 10,
    warehouse: 'Bodega A',
    status: 'Agotado'
  },
  {
    id: 8,
    product: 'Cebolla cabezona',
    quantity: 40,
    minStock: 15,
    warehouse: 'Bodega B',
    status: 'Disponible'
  },
  {
    id: 9,
    product: 'Yogurt natural',
    quantity: 6,
    minStock: 10,
    warehouse: 'Refrigerado',
    status: 'Stock bajo'
  },
  {
    id: 10,
    product: 'Pernil de cerdo',
    quantity: 18,
    minStock: 10,
    warehouse: 'Refrigerado',
    status: 'Disponible'
  }
];
