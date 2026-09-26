import { TestBed } from '@angular/core/testing';
import { InventoryService } from './inventory.service';
import { INVENTORY } from '../../data/inventory.interface';

describe('InventoryService', () => {
  let service: InventoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InventoryService);
  });

  describe('Creación del servicio', () => {

    it('debería crearse correctamente', () => {
      expect(service).toBeTruthy();
    });

    it('getAllInventory debería retornar un observable con el inventario', (done) => {
      service.getAllInventory().subscribe(inventory => {
        expect(inventory).toEqual(INVENTORY);
        expect(inventory.length).toBe(INVENTORY.length);
        done();
      });
    });

  });

});
