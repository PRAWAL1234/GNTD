import styled, { keyframes } from 'styled-components';

const gradient = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

export const WrapperContainer = styled.div`
	min-height: 100vh;
	display: flex;
	background: linear-gradient(45deg, #ff6b6b, #4eb6cdff, #4584d1ff);
	background-size: 400% 400%;
	animation: ${gradient} 15s ease infinite;
	padding: 20px;
`;
