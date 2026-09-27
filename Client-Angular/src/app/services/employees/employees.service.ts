import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Employee } from '../../interfaces/employees.interface';
import { EMPLOYEES } from '../../data/employees.interface';

/**
 * Servicio encargado de la gestión de empleados.
 *
 * Proporciona métodos para obtener información de los empleados
 * desde el data local.
 *
 * @example
 * ```ts
 * constructor(private employeesService: EmployeesService) {}
 *
 * this.employeesService.getAllEmployees().subscribe(employees => {
 *   console.log(employees);
 * });
 * ```
 */
@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  /**
   * Obtiene una lista de empleados desde el backend.
   *
   * @returns Observable que emite un array de empleados.
   *
   * @example
   * ```ts
   * this.employeesService.getAllEmployees().subscribe(employees => {
   *   console.log(employees);
   * });
   * ```
   */
  getAllEmployees(): Observable<Employee[]> {
    return of(EMPLOYEES);
  }
}
