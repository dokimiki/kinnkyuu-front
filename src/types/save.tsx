import { type Order } from "./order";

export type Save = {
    name: string;
    order: Order;
    orderNumber: string;
    total: number;
    isOrdered: boolean;
};
