import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Inventory } from '../../interfaces/inventory.interface';
import { INVENTORY } from '../../data/inventory.interface';

/**
 * Servicio encargado de la gestión del inventario.
 *
 * Proporciona métodos para obtener información del inventario
 * desde el data local.
 *
 * @example
 * ```ts
 * constructor(private inventoryService: InventoryService) {}
 *
 * this.inventoryService.getAllInventory().subscribe(inventory => {
 *   console.log(inventory);
 * });
 * ```
 */
@Injectable({
  providedIn: 'root',
})
export class InventoryService {
  /**
   * Obtiene una lista de registros de inventario desde el backend.
   *
   * @returns Observable que emite un array de registros de inventario.
   *
   * @example
   * ```ts
   * this.inventoryService.getAllInventory().subscribe(inventory => {
   *   console.log(inventory);
   * });
   * ```
   */
  getAllInventory(): Observable<Inventory[]> {
    return of(INVENTORY);
  }
}
