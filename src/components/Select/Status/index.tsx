import { IStatus } from '@/interface/status';
import { parseStatus } from '@/parse/Status';
import { InputSelectT, InputSelectTProps } from '@/ui-fenextjs/Input/SelectT';

export interface InputSelectStatusProps
    extends Omit<InputSelectTProps<IStatus>, 'onParse' | 'options'> {}

export const InputSelectStatus = ({ ...props }: InputSelectStatusProps) => {
    return (
        <InputSelectT<IStatus>
            {...props}
            options={Object.values(IStatus)}
            onParse={(status) => {
                return {
                    id: status ?? '',
                    text: parseStatus(status),
                    data: status,
                };
            }}
        />
    );
};
