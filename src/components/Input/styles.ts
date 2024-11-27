import styled from 'styled-components/native';

interface ContainerProps {
	isFocused?: boolean;
}

export const Container = styled.View<ContainerProps>`
	width: 250px;
	height: 50px;
	border-radius: 15px;
	padding: 0 10px;

	flex-direction: row;
	align-items: center;
	gap: 5px;

	background: #e5e7e9;
`;
