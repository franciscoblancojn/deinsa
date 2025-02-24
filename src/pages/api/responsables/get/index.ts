import { ApiEndPoint } from '@/api/endpoint';
import { IApiQuery, IApiResultTable } from '@/interface/api';
import { IResponsables } from '@/interface/responsables';
import { IApiResult, parseNumber } from 'fenextjs';
import fileJson from '@/data/responsables.json';

export default ApiEndPoint<IApiResultTable<IResponsables>>(async (req, res) => {
    const { search, ...query } = (req?.query ?? {}) as IApiQuery;
    const { id } = query as any;

    const npage = id ? 1 : parseNumber(query?.npage ?? 10);
    const page = id ? 0 : parseNumber(query?.page ?? 0);

    let items: IResponsables[] = (
        fileJson?.data?.responsables as IResponsables[]
    ).filter((e) => {
        if (search) {
            return (
                e?.Responsable?.toLowerCase().includes(search.toLowerCase()) ||
                search?.toLowerCase().includes(e?.Responsable.toLowerCase())
            );
        }
        if (id) {
            return `${e?.IDResponsable}` == `${id}`;
        }
        return true;
    });

    const count = items.length;
    items = items.slice(page * npage, (page + 1) * npage);

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
