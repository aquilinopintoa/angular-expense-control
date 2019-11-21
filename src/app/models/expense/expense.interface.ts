export interface ExpenseInterface {
    id: number;
    importe: number;
    fecha: string;
    concepto: string;
}

export interface ExpenseDTOInterface {
    id?: number;
    importe: number;
    fecha: string;
    concepto: string;
}
