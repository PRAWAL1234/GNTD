import { Card, Container, Flex, Text } from '@mantine/core';
import React, { useEffect, useState } from 'react';

import dayjs from '~node_modules/dayjs';
import { DateFormats, TimeFormats } from '~src/utility/DateFormate';

export const Calendar: React.FC = () => {
	const [time, setTime] = useState(dayjs());

	useEffect(() => {
		const timerInterval = setInterval(() => {
			setTime(dayjs());
		}, 1000);

		return () => clearInterval(timerInterval);
	}, []);

	return (
		<Container mt="md">
			<Card bg="transparent" withBorder={false}>
				<Flex direction="column" align="center" justify={'center'} gap="xs">
					<Text fw={700} fz={70} lh={1}>
						{time.format(TimeFormats.HourMinuteSecond)}
					</Text>
					<Text fw={1000} c="dark" fz={25}>
						{time.format(DateFormats.WeekdayFullMonthDayYear)}
					</Text>
				</Flex>
			</Card>
		</Container>
	);
};
