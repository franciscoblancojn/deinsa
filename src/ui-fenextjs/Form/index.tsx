import React from 'react';
import { Form as FenextjsForm, FormProps as FenextjsFormProps } from 'fenextjs';

export interface FormProps extends FenextjsFormProps {}
export const Form = ({ children, className = '', ...props }: FormProps) => {
    return (
        <FenextjsForm
            className={`
            my-project-form 
            grid
            gap-4
            ${className}
        `}
            {...props}
        >
            {children}
        </FenextjsForm>
    );
};
