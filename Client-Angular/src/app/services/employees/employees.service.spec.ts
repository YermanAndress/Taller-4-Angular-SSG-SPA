import { TestBed } from '@angular/core/testing';
import { EmployeesService } from './employees.service';
import { EMPLOYEES } from '../../data/employees.interface';

describe('EmployeesService', () => {
  let service: EmployeesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeesService);
  });

  describe('Creación del servicio', () => {

    it('debería crearse correctamente', () => {
      expect(service).toBeTruthy();
    });

    it('getAllEmployees debería retornar un observable con los empleados', (done) => {
      service.getAllEmployees().subscribe(employees => {
        expect(employees).toEqual(EMPLOYEES);
        expect(employees.length).toBe(EMPLOYEES.length);
        done();
      });
    });

  });

});
