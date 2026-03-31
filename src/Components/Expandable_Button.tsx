import { Button, Flex, Text } from '@mantine/core';
import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

export const Expandable_Button: React.FC<{
	opened: boolean;
	setOpened: () => void;
}> = ({ opened, setOpened }) => {
	return (
		<Flex style={{ position: 'absolute', right: '-40px', bottom: 20 }}>
			<Button
				h={80}
				w={40}
				p={0}
				onClick={setOpened}
				style={{ borderRadius: '0 10px 10px 0' }}>
				<Flex
					direction="column"
					align="center"
					justify="space-evenly"
					gap={'md'}>
					{opened ? (
						<IoIosArrowBack size={24} />
					) : (
						<IoIosArrowForward size={24} />
					)}
				</Flex>
			</Button>
		</Flex>
	);
};
