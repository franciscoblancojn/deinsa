import { IRole } from '../role';
import { IStatus } from '../status';

export interface IUser {
    id: string;
    name: string;
    email: string;
    status: IStatus;
    role: IRole;
    createdAt: string;
    updatedAt: string;
}
