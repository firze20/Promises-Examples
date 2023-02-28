export interface IStore {
    sunglasses: IItems;
    pants: IItems;
    bags: IItems;
}

interface IItems {
    inventory: number;
    cost: number
}