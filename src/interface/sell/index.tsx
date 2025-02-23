import { IClient } from '../client';
import { IProduct } from '../product';
import { IStatus, IStatusPay } from '../status';

export interface ISellProduct {
    product: IProduct;
    count: number;
}

export interface ISell {
    id: string;
    status: IStatus;
    statusPay: IStatusPay;
    createdAt: string;
    updatedAt: string;
    client: IClient;
    products: ISellProduct[];
    total: number;
}
