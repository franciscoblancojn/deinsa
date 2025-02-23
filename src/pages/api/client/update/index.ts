import { ApiEndPoint } from '@/api/endpoint';
import { IApiRespond, sleep } from 'fenextjs';

export default ApiEndPoint<unknown>(async (req, res) => {
    await sleep(2000);

    const respond: IApiRespond<unknown> = {
        data: {},
        message: 'Clientes Actualizados',
    };

    res.status(200).json(respond);
});
