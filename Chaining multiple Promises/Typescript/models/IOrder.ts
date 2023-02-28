export interface IOrder {
    items: IItem[];
    giftcardBalance: number;
}

interface IItem {
    product: 'sunglasses' | 'pants' | 'bags',
    amount: number
}



