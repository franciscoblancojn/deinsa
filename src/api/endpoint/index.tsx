import { ErrorFenextjs, IApiRespond } from 'fenextjs';
import type { NextApiRequest, NextApiResponse } from 'next';

// Funcion para estandarizar endpoints de /api/*
export const ApiEndPoint =
    <T,>(
        endpoint: (
            req: NextApiRequest,
            res: NextApiResponse<IApiRespond<T>>,
        ) => Promise<void>,
    ) =>
    async (req: NextApiRequest, res: NextApiResponse<IApiRespond<T>>) => {
        try {
            await endpoint(req, res);
        } catch (err: any) {
            const error: ErrorFenextjs = err;
            res.status(500).json({ error, message: error?.msg ?? '' });
        }
    };
