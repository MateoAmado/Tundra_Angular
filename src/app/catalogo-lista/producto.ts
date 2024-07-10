export interface Producto{
    producto: string;
    nombre: string;
    tipo: string;
    precio: number;
    talles: { [key: string]: number };
    talleSeleccionado: string;
    oferta: boolean;
}