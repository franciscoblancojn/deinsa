import { IRole } from '../role';
import { IStatus } from '../status';

export interface IResponsables {
    id: string;
    name: string;
    email: string;
    status: IStatus;
    role: IRole;
    createdAt: string;
    updatedAt: string;
}
