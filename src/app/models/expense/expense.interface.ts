export interface ExpenseInterface {
    id: number;
    amount: number;
    date: string;
    description: string;
}

export interface ExpenseDTOInterface {
    id?: number;
    amount: number;
    date: string;
    description: string;
}
