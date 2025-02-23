import { ApiEndPoint } from '@/api/endpoint';
import { IApiQuery, IApiResultTable } from '@/interface/api';
import { IResponsables } from '@/interface/responsables';
import { IApiResult, parseNumber } from 'fenextjs';
import responsables from "@/data/responsables.json"

export default ApiEndPoint<IApiResultTable<IResponsables>>(async (req, res) => {
    const { search, status, ...query } = (req?.query ?? {}) as IApiQuery;
    const { id } = query as any;

    const npage = parseNumber(query?.npage ?? 10);
    const page = parseNumber(query?.page ?? 0);

    const count = responsables.length;

    const items: IResponsables[] = (responsables as IResponsables[]).filter((e) => {
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

    const data: IApiResultTable<IResponsables> = {
        count,
        items,
    };

    const respond: IApiResult<IApiResultTable<IResponsables>> = {
        data,
        message: 'Responsables encontrados',
    };

    res.status(200).json(respond);
});
