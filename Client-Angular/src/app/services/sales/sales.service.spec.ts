import { TestBed } from '@angular/core/testing';
import { SalesService } from './sales.service';
import { SALES } from '../../data/sales.interface';

describe('SalesService', () => {
  let service: SalesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalesService);
  });

  describe('Creación del servicio', () => {

    it('debería crearse correctamente', () => {
      expect(service).toBeTruthy();
    });

    it('getAllSales debería retornar un observable con las ventas', (done) => {
      service.getAllSales().subscribe(sales => {
        expect(sales).toEqual(SALES);
        expect(sales.length).toBe(SALES.length);
        done();
      });
    });

  });

});