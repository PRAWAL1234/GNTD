import { Card, Container, Flex, Image, Typography } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import { FaEdit, FaPlus, FaTrash } from 'react-icons/fa';
import { MdOutlineCancel } from 'react-icons/md';

import { useFavApp } from '~src/Store/Hook/useFavApp';
import { truncateText } from '~src/utility';

import { AddFavAppModal } from './AddFavApps';

export const FavoritesApp: React.FC = () => {
	const { addFavApp, removeFavApp, state } = useFavApp();
	const [opened, setOpened] = useState(false);
	const [editMode, setEditMode] = useState(false);
	const [apps, setApps] = useState<{ name: string; url: string }[]>([
		{ name: 'Youtube', url: 'https://youtube.com' },
		{ name: 'Gmail', url: 'https://mail.google.com' },
	]);

	useEffect(() => {
		if (state && state.length > 0) {
			setApps(state);
		}
	}, [state]);

	const handleAddApp = (newApp: { name: string; url: string }) => {
		addFavApp(newApp);
	};
	const handleRemoveApp = (removeApp: { name: string; url: string }) => {
		removeFavApp(removeApp.url);
	};

	return (
		<>
			<Container mt="md">
				<Card h={300} w={340}>
					<Flex gap={'lg'} direction={'column'} h="100%">
						<Flex justify={'space-between'} align={'center'}>
							<Typography variant="h1">Favorites Apps</Typography>
							<Flex gap={'lg'} align={'center'}>
								{!editMode ? (
									<FaEdit
										onClick={() => setEditMode(true)}
										size={18}
										style={{ cursor: 'pointer' }}
									/>
								) : (
									<MdOutlineCancel
										onClick={() => setEditMode(false)}
										size={18}
										style={{ cursor: 'pointer' }}
									/>
								)}
								<FaPlus
									onClick={() => setOpened(true)}
									size={18}
									style={{ cursor: 'pointer' }}
								/>
							</Flex>
						</Flex>
						<Flex
							gap={'md'}
							wrap={'wrap'}
							justify={'center'}
							align={'flex-start'}
							p={'md'}
							style={{
								flex: 1,
								overflowY: 'auto',
								alignContent: 'flex-start',
							}}>
							{apps.map((app, index) => (
								<div style={{ position: 'relative' }}>
									{editMode && (
										<FaTrash
											onClick={() => handleRemoveApp(app)}
											size={12}
											style={{
												cursor: 'pointer',
												position: 'absolute',
												top: -5,
												right: -5,
											}}
										/>
									)}
									<a href={app.url} target="_blank" rel="noopener noreferrer">
										<Flex
											key={index}
											direction={'column'}
											gap={'sm'}
											align={'center'}
											style={{ cursor: 'pointer' }}>
											<Card p="xs" w={50} h={50} radius="md" withBorder>
												<Image
													src={`https://www.google.com/s2/favicons?domain=${app.url}&sz=128`}
													alt={app.name}
													width={30}
													height={30}
													fit="contain"
												/>
											</Card>
											<Typography
												style={{
													color: 'white',
													fontStyle: 'normal',
													fontSize: '14px',
												}}>
												{truncateText(app.name, 5)}
											</Typography>
										</Flex>
									</a>
								</div>
							))}
						</Flex>
					</Flex>
				</Card>
			</Container>
			<AddFavAppModal
				opened={opened}
				setOpened={setOpened}
				onAddApp={handleAddApp}
			/>
		</>
	);
};
