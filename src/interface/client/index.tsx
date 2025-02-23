import { IStatus } from '../status';

export interface IClient {
    id: string;
    name: string;
    email: string;
    status: IStatus;
    createdAt: string;
    updatedAt: string;
}
