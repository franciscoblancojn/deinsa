import { ApiEndPoint } from '@/api/endpoint';
import { IApiQuery, IApiResultTable } from '@/interface/api';
import { IClient } from '@/interface/client';
import { IProduct } from '@/interface/product';
import { ISell } from '@/interface/sell';
import { IStatus, IStatusPay } from '@/interface/status';
import { IApiResult, parseNumber, sleep } from 'fenextjs';

export default ApiEndPoint<IApiResultTable<ISell>>(async (req, res) => {
    const { search, status, statusPay, ...query } = (req?.query ??
        {}) as IApiQuery;

    const npage = parseNumber(query?.npage ?? 10);
    const page = parseNumber(query?.page ?? 0);

    await sleep(2000);

    const count = 50;

    const items: ISell[] = new Array(count)
        .fill(1)
        .map((_, i) => {
            const client: IClient = {
                id: `${i}`,
                name: 'Cliente ' + i,
                email: `client${i}@gmail.com`,
                status: Object.values(IStatus)[i % 3],
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
            };
            const product: IProduct = {
                id: `${i}`,
                name: 'Producto ' + i,
                description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur obcaecati ratione recusandae odio? Temporibus, blanditiis itaque similique laboriosam non vel voluptate quis, deserunt inventore enim at possimus eius, nulla labore?`,
                price: 1000 * (i + 1),
                image: '',
                status: Object.values(IStatus)[i % 3],
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
            };
            const r: ISell = {
                id: `${i}`,
                total: 1000 * (i + 1),
                status: Object.values(IStatus)[i % 3],
                statusPay: Object.values(IStatusPay)[i % 3],
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
                client,
                products: [
                    {
                        product,
                        count: i + 1,
                    },
                ],
            };
            return r;
        })
        .filter((e) => {
            let sw = true;
            if (search) {
                return (
                    e?.client?.name
                        ?.toLowerCase()
                        .includes(search.toLowerCase()) ||
                    search
                        ?.toLowerCase()
                        .includes(e?.client?.name.toLowerCase())
                );
            }
            if (status) {
                sw &&= e?.status == status;
            }
            if (statusPay) {
                sw &&= e?.statusPay == statusPay;
            }
            return sw;
        })
        .slice(page * npage, (page + 1) * npage);

    const data: IApiResultTable<ISell> = {
        count,
        items,
    };

    const respond: IApiResult<IApiResultTable<ISell>> = {
        data,
        message: 'Sellos encontrados',
    };

    res.status(200).json(respond);
});
