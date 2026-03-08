import { Card, Container, Flex } from '@mantine/core';
import React from 'react';
import { IoSettings } from 'react-icons/io5';

export const Setting: React.FC = () => {
	return (
		<Flex align={'flex-end'}>
			<Card>
				<IoSettings />
			</Card>
		</Flex>
	);
};
