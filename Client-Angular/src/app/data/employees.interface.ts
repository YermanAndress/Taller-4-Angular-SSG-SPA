import { Employee } from "../interfaces/employees.interface";

/**
 * Listado de empleados del sistema.
 *
 * Esta constante representa un conjunto de datos de prueba (mock)
 * que simula la respuesta de un backend REST.
 *
 * Se utiliza principalmente para:
 * - Pruebas unitarias
 * - Prácticas de componentes
 * - Ejercicios de arquitectura modular
 *
 * @type {Employee[]}
 */
export const EMPLOYEES: Employee[] = [
  {
    id: 1,
    name: 'María García',
    position: 'Cajera',
    department: 'Caja',
    salary: 1425000,
    status: 'Activo'
  },
  {
    id: 2,
    name: 'Carlos Rodríguez',
    position: 'Bodeguero',
    department: 'Bodega',
    salary: 1425000,
    status: 'Activo'
  },
  {
    id: 3,
    name: 'Ana Martínez',
    position: 'Vendedora',
    department: 'Ventas',
    salary: 1600000,
    status: 'Vacaciones'
  },
  {
    id: 4,
    name: 'José Hernández',
    position: 'Administrador',
    department: 'Administración',
    salary: 3200000,
    status: 'Activo'
  },
  {
    id: 5,
    name: 'Laura López',
    position: 'Auxiliar de refrigerados',
    department: 'Refrigerados',
    salary: 1500000,
    status: 'Activo'
  },
  {
    id: 6,
    name: 'Pedro Sánchez',
    position: 'Repartidor',
    department: 'Logística',
    salary: 1550000,
    status: 'Inactivo'
  },
  {
    id: 7,
    name: 'Sofía Ramírez',
    position: 'Cajera',
    department: 'Caja',
    salary: 1425000,
    status: 'Vacaciones'
  },
  {
    id: 8,
    name: 'Diego Torres',
    position: 'Supervisor de bodega',
    department: 'Bodega',
    salary: 2100000,
    status: 'Activo'
  },
  {
    id: 9,
    name: 'Carmen Díaz',
    position: 'Vendedora',
    department: 'Ventas',
    salary: 1600000,
    status: 'Inactivo'
  },
  {
    id: 10,
    name: 'Miguel Castro',
    position: 'Contador',
    department: 'Administración',
    salary: 2800000,
    status: 'Activo'
  }
];
