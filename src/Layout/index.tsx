import { AppShell, Flex } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import React, { useMemo } from 'react';

import { Calendar } from '~src/Components/Clock';
import { Expandable_Button } from '~src/Components/Expandable_Button';
import { FavoritesApp } from '~src/Components/FavApp';
import { Weather } from '~src/Components/Weather';
import { MainContext } from '~src/Main';
import { useAppSelector } from '~src/Store/store';
import { VideoBackground, WrapperContainer } from '~src/tabs/style';

import { NavbarMinimal } from './Menu';

export const HeroLayout: React.FC = () => {
	const [opened, { toggle }] = useDisclosure(true);
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
					: !isVideo && backgroundImage.startsWith('data:image')
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
					collapsed: { desktop: !opened, mobile: !opened },
				}}
				styles={{
					root: { width: '100%' },
					main: { background: 'transparent' },
					header: { background: 'transparent', borderBottom: 'none' },
					navbar: { background: 'transparent' },
					aside: { background: 'transparent', borderLeft: 'none' },
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
						<Weather />
						<Calendar />
						<FavoritesApp />
						<Expandable_Button opened={opened} setOpened={toggle} />
					</Flex>
				</AppShell.Navbar>
				<AppShell.Aside>
					<NavbarMinimal />
				</AppShell.Aside>
				<AppShell.Main>Main</AppShell.Main>
			</AppShell>
		</WrapperContainer>
	);
};
