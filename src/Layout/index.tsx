import { AppShell, Flex } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import React, { useMemo } from 'react';

import { Calendar } from '~src/Components/Clock';
import { FavoritesApp } from '~src/Components/FavApp';
import { MainContext } from '~src/Main';
import { useAppSelector } from '~src/Store/store';
import { gradient, VideoBackground, WrapperContainer } from '~src/tabs/style';

export const HeroLayout: React.FC = () => {
	const [opened] = useDisclosure();
	const { backgroundImage } = useAppSelector((state) => state.Settings);
	const isVideo = useMemo(
		() =>
			Boolean(
				backgroundImage?.startsWith('data:video') ||
					backgroundImage?.match(/\.(mp4|webm|ogg)(\?.*)?$/i)
			),
		[backgroundImage]
	);

	return (
		<WrapperContainer
			style={
				!isVideo && !backgroundImage
					? {
							background:
								'linear-gradient(45deg, #ff6b6b, #4eb6cdff, #4584d1ff)',
						}
					: !isVideo && backgroundImage
						? {
								background: `url(${backgroundImage}) !important`,
								animation: 'none !important',
							}
						: {}
			}>
			{isVideo && (
				<VideoBackground
					autoPlay
					loop
					muted
					playsInline
					src={backgroundImage!}
				/>
			)}
			<AppShell
				header={{ height: 100 }}
				navbar={{
					width: 400,
					breakpoint: 'sm',
					collapsed: { mobile: !opened },
				}}
				styles={{
					root: { width: '100%' },
					main: { background: 'transparent' },
					header: { background: 'transparent', borderBottom: 'none' },
					navbar: { background: 'transparent', borderRight: 'none' },
				}}>
				<AppShell.Header>
					<MainContext />
				</AppShell.Header>
				<AppShell.Navbar>
					<Flex
						gap={'lg'}
						direction={'column'}
						justify={'space-evenly'}
						align={'start'}>
						<Calendar />
						<FavoritesApp />
					</Flex>
				</AppShell.Navbar>
				<AppShell.Main>Main</AppShell.Main>
			</AppShell>
		</WrapperContainer>
	);
};
