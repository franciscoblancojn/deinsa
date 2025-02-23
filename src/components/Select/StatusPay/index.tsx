import { IStatusPay } from '@/interface/status';
import { parseStatusPay } from '@/parse/Status';
import { InputSelectT, InputSelectTProps } from '@/ui-fenextjs/Input/SelectT';

export interface InputSelectStatusPayProps
    extends Omit<InputSelectTProps<IStatusPay>, 'onParse' | 'options'> {}

export const InputSelectStatusPay = ({
    ...props
}: InputSelectStatusPayProps) => {
    return (
        <InputSelectT<IStatusPay>
            {...props}
            options={Object.values(IStatusPay)}
            onParse={(status) => {
                return {
                    id: status ?? '',
                    text: parseStatusPay(status),
                    data: status,
                };
            }}
        />
    );
};
