import React from 'react';
import {
    User as FenextjsUser,
    UserComponentProps as FenextjsUserProps,
} from 'fenextjs';

export interface UserProps extends FenextjsUserProps {}
export const User = ({ className = '', ...props }: UserProps) => {
    return (
        <FenextjsUser
            className={`
                my-project-user 
                !gap-x-2
                ${className}
            `}
            classNameName={`
                !text-sm
            `}
            classNameEmail={`
                text-xs  
            `}
            {...props}
        />
    );
};
