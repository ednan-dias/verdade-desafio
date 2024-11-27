import { ActivityIndicator } from 'react-native';

import * as PhosphorIcon from 'phosphor-react-native';

import { Text } from '../Text';
import { Icon } from '../Icon';

import { Container } from './styles';
import { RectButtonProps, RectButton } from 'react-native-gesture-handler';
import { forwardRef } from 'react';

export interface ButtonProps extends RectButtonProps {
	text: string;
	color?: string;
	size?: number;
	icon?: keyof typeof PhosphorIcon;
	isDisabled?: boolean;
	isLoading?: boolean;
	loadingText?: string;
}

export const Button = forwardRef<typeof RectButton, ButtonProps>(
	(
		{ icon, text, color, size, isLoading, loadingText, isDisabled, ...rest },
		ref,
	) => {
		const disabled = isLoading || isDisabled;

		return (
			<Container
				ref={ref}
				color={color}
				size={size}
				enabled={!disabled}
				{...rest}
			>
				{isLoading ? (
					<>
						<ActivityIndicator
							size={30}
							color="#fff"
						/>

						<Text color="white">{loadingText}</Text>
					</>
				) : (
					<>
						{icon && (
							<Icon
								iconName={icon}
								color="#fff"
								weight="fill"
							/>
						)}

						<Text color="white">{text}</Text>
					</>
				)}
			</Container>
		);
	},
);
