import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  actualizar(prod: { _id: null; descripcion: null; precio: null; }) {
    throw new Error('Method not implemented.');
  }
  eliminar(codigo: any) {
    throw new Error('Method not implemented.');
  }
  listar() {
    throw new Error('Method not implemented.');
  }
  mostrar(codigo: any) {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
