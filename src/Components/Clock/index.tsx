import { Card, Container, Flex, Text, useMantineTheme } from '@mantine/core';
import React, { useEffect, useState } from 'react';

import dayjs from '~node_modules/dayjs';
import { DateFormats, TimeFormats } from '~src/utility/DateFormate';

export const Calendar: React.FC = () => {
	const [time, setTime] = useState(dayjs());
	const theme = useMantineTheme();

	useEffect(() => {
		const timerInterval = setInterval(() => {
			setTime(dayjs());
		}, 1000);

		return () => clearInterval(timerInterval);
	}, []);

	return (
		<Container mt="md">
			<Card withBorder={false}>
				<Flex direction="column" align="center" justify={'center'} gap="xs">
					<Text fw={700} fz={60} lh={1} c={theme.white}>
						{time.format(TimeFormats.HourMinuteSecond)}
					</Text>
					<Text fw={1000} c={theme.white} fz={23}>
						{time.format(DateFormats.WeekdayFullMonthDayYear)}
					</Text>
				</Flex>
			</Card>
		</Container>
	);
};
