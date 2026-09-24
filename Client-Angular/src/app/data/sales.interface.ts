import { Sale } from "../interfaces/sales.interface";

/**
 * Listado de ventas del sistema.
 *
 * Esta constante representa un conjunto de datos de prueba (mock)
 * que simula la respuesta de un backend REST.
 *
 * Se utiliza principalmente para:
 * - Pruebas unitarias
 * - Prácticas de componentes
 * - Ejercicios de arquitectura modular
 *
 * @type {Sale[]}
 */
export const SALES: Sale[] = [
  {
    id: 1,
    customer: 'Carlos Ramírez',
    product: 'Leche entera',
    date: '2025-09-01',
    total: 4500,
    status: 'Completada'
  },
  {
    id: 2,
    customer: 'Ana Gómez',
    product: 'Queso campesino',
    date: '2025-09-02',
    total: 8200,
    status: 'Pendiente'
  },
  {
    id: 3,
    customer: 'Luis Martínez',
    product: 'Pechuga de pollo',
    date: '2025-09-03',
    total: 14500,
    status: 'Completada'
  },
  {
    id: 4,
    customer: 'María Lopez',
    product: 'Carne molida de res',
    date: '2025-09-03',
    total: 12800,
    status: 'Cancelada'
  },
  {
    id: 5,
    customer: 'Jorge Fernández',
    product: 'Manzanas rojas',
    date: '2025-09-04',
    total: 5200,
    status: 'Completada'
  },
  {
    id: 6,
    customer: 'Paola Ríos',
    product: 'Banano',
    date: '2025-09-05',
    total: 2800,
    status: 'Pendiente'
  },
  {
    id: 7,
    customer: 'Andrés Torres',
    product: 'Tomate chonto',
    date: '2025-09-06',
    total: 3500,
    status: 'Completada'
  },
  {
    id: 8,
    customer: 'Lucía Mendoza',
    product: 'Cebolla cabezona',
    date: '2025-09-07',
    total: 3000,
    status: 'Cancelada'
  },
  {
    id: 9,
    customer: 'Sofía Pérez',
    product: 'Yogurt natural',
    date: '2025-09-08',
    total: 2500,
    status: 'Completada'
  },
  {
    id: 10,
    customer: 'Miguel Castro',
    product: 'Pernil de cerdo',
    date: '2025-09-09',
    total: 16000,
    status: 'Pendiente'
  }
];