import { IStatus } from '../status';

export interface IProduct {
    id: string;
    name: string;
    image: string;
    description: string;
    price: number;
    status: IStatus;
    createdAt: string;
    updatedAt: string;
}
