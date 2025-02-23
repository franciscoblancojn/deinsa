import { ApiEndPoint } from '@/api/endpoint';
import { IApiQuery, IApiResultTable } from '@/interface/api';
import { IUser } from '@/interface/user';
import { IStatus } from '@/interface/status';
import { IApiResult, parseNumber, sleep } from 'fenextjs';
import { IRole } from '@/interface/role';

export default ApiEndPoint<IApiResultTable<IUser>>(async (req, res) => {
    const { search, status, ...query } = (req?.query ?? {}) as IApiQuery;
    const { id } = query as any;

    const npage = parseNumber(query?.npage ?? 10);
    const page = parseNumber(query?.page ?? 0);

    await sleep(2000);

    const count = 50;

    const items: IUser[] = new Array(count)
        .fill(1)
        .map((_, i) => {
            const r: IUser = {
                id: `${i}`,
                name: 'Usuario ' + i,
                email: `user${i}@gmail.com`,
                status: Object.values(IStatus)[i % 3],
                role: Object.values(IRole)[i % 2],
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
            };
            return r;
        })
        .filter((e) => {
            if (search) {
                return (
                    e?.name?.toLowerCase().includes(search.toLowerCase()) ||
                    search?.toLowerCase().includes(e?.name.toLowerCase())
                );
            }
            if (status) {
                return e?.status == status;
            }
            if (id) {
                return `${e?.id}` == `${id}`;
            }
            return true;
        })
        .slice(page * npage, (page + 1) * npage);

    const data: IApiResultTable<IUser> = {
        count,
        items,
    };

    const respond: IApiResult<IApiResultTable<IUser>> = {
        data,
        message: 'Usuarios encontrados',
    };

    res.status(200).json(respond);
});
