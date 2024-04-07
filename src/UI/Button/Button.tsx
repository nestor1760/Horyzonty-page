import { FC } from 'react';
import { IButtonProps } from './interfaces';
import { Button, CustomIcon } from './ButtonStyles';

export const StyledButton: FC<IButtonProps> = ({children, ...props}) => <Button {...props}>{children} <CustomIcon color={props.color}/></Button>

