import { Card, Container, Flex } from '@mantine/core';
import React from 'react';

import { InputWithButton } from '~src/Components/SearchBox';
import { Setting } from '~src/Components/Setting';
import { WrapperContainer } from '~src/tabs/style';

export const MainContext: React.FC = () => {
	return (
		<WrapperContainer>
			<Container size={'xl'} w={'100%'}>
				<Flex
					w={'100%'}
					gap={'sm'}
					justify="center"
					align="center"
					direction="row">
					<Card w={'100%'}>
						<InputWithButton />
					</Card>
					{/* <Setting /> */}
				</Flex>
			</Container>
		</WrapperContainer>
	);
};
