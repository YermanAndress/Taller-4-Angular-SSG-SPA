import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Sale } from '../../interfaces/sales.interface';
import { SALES } from '../../data/sales.interface';

/**
 * Servicio encargado de la gestión de ventas.
 *
 * Proporciona métodos para obtener información de ventas
 * desde el data local.
 *
 * @example
 * ```ts
 * constructor(private salesService: SalesService) {}
 *
 * this.salesService.getAllSales().subscribe(sales => {
 *   console.log(sales);
 * });
 * ```
 */
@Injectable({
  providedIn: 'root',
})
export class SalesService {
  /**
   * Obtiene una lista de ventas desde el backend.
   *
   * @returns Observable que emite un array de ventas.
   *
   * @example
   * ```ts
   * this.salesService.getAllSales().subscribe(sales => {
   *   console.log(sales);
   * });
   * ```
   */
  getAllSales(): Observable<Sale[]> {
    return of(SALES);
  }
}