import { Center, Stack, Tooltip, UnstyledButton } from '@mantine/core';
import {
	IconCalendarStats,
	IconDeviceDesktopAnalytics,
	IconFingerprint,
	IconGauge,
	IconHome2,
	IconSettings,
	IconSwitchHorizontal,
	IconUser,
} from '@tabler/icons-react';
import { useState } from 'react';

import { Setting } from '~src/Components/Setting';

import classes from './NavbarMinimal.module.css';

interface NavbarLinkProps {
	icon?: typeof IconHome2;
	label?: string;
	active?: boolean;
	onClick?: () => void;
}

export const NavbarLink: React.FC<NavbarLinkProps> = ({
	icon: Icon,
	label,
	active,
	onClick,
}) => {
	return (
		<Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
			<UnstyledButton
				onClick={onClick}
				className={classes.link}
				data-active={active || undefined}
				aria-label={label}>
				<Icon size={20} stroke={1.5} />
			</UnstyledButton>
		</Tooltip>
	);
};

export const NavbarMinimal: React.FC = () => {
	const [active, setActive] = useState(1);
	const [opened, setOpened] = useState(false);
	const mockdata = [
		{ icon: IconHome2, label: 'Home', onClick: () => {} },
		{ icon: IconGauge, label: 'Dashboard', onClick: () => {} },
		{
			icon: IconDeviceDesktopAnalytics,
			label: 'Analytics',
			onClick: () => {},
		},
		{ icon: IconCalendarStats, label: 'Notes', onClick: () => {} },
		{ icon: IconUser, label: 'Account', onClick: () => {} },
	];

	const links = mockdata.map((link, index) => (
		<NavbarLink
			{...link}
			key={link.label}
			active={index === active}
			onClick={() => {
				setActive(index);
				link.onClick();
			}}
		/>
	));

	return (
		<>
			<nav className={classes.navbar}>
				<div className={classes.navbarMain}>
					<Stack justify="center" gap={0}>
						{links}
					</Stack>
				</div>
				<Stack justify="center" gap={0}>
					<NavbarLink
						icon={IconSettings}
						label="Settings"
						onClick={() => setOpened(true)}
					/>
				</Stack>
			</nav>
			<Setting open={opened} close={() => setOpened(false)} />
		</>
	);
};
