import styled, { keyframes } from 'styled-components';

export const gradient = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

export const WrapperContainer = styled.div`
	min-height: 100vh;
	display: flex;
	background-size: 400% 400%;
	background-position: center;
	padding: 20px;
	position: relative;
	overflow: hidden;
	animation: ${gradient} 15s ease infinite;
`;

export const VideoBackground = styled.video`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	object-fit: cover;
	z-index: -1;
`;
