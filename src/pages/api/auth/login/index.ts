// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { ApiEndPoint } from '@/api/endpoint';
import { IFormLogin } from '@/components/Form/Login/interface';
import { FormLoginValidator } from '@/components/Form/Login/validator';
import { useUserDataProps } from '@/hook/useUser';
import { ErrorFenextjs, sleep } from 'fenextjs';

export default ApiEndPoint<useUserDataProps>(async (req, res) => {
    const data = (req?.body ?? {}) as IFormLogin;
    const isValid = FormLoginValidator.onValidate(data);
    if (isValid != true) {
        throw isValid;
    }

    await sleep(2000);

    if (data.email != 'user@gmail.com' || data.password != 'user1234') {
        throw new ErrorFenextjs({
            message: 'Usuario invalido',
        });
    }

    res.status(200).json({
        message: 'Login exitoso',
        data: {
            id: '1',
            name: 'User',
            email: 'user@gmail.com',
            token: 'token',
        },
    });
});
