import {
	Button,
	Card,
	Container,
	FileInput,
	Flex,
	Modal,
	TextInput,
	Typography,
} from '@mantine/core';
import React, { useState } from 'react';
import { IoSettings } from 'react-icons/io5';

import {
	resetBackgroundImage,
	setBackgroundImage,
} from '~src/Store/Slice/settingSlicer';
import { useAppDispatch } from '~src/Store/store';

export const Setting: React.FC = () => {
	const [opened, setOpened] = useState(false);
	const [bgInput, setBgInput] = useState('');

	const dispatch = useAppDispatch();
	const handleApplyUrl = () => {
		dispatch(setBackgroundImage(bgInput));
		setOpened(false);
	};

	const handleFileUpload = (file: File | null) => {
		if (file) {
			const reader = new FileReader();
			reader.onload = (e) => {
				if (e.target?.result) {
					dispatch(setBackgroundImage(e.target.result as string));
					setOpened(false);
				}
			};
			reader.readAsDataURL(file);
		}
	};

	const handleReset = () => {
		dispatch(resetBackgroundImage());
		setBgInput('');
		setOpened(false);
	};

	return (
		<>
			<Flex align={'flex-end'}>
				<Card style={{ cursor: 'pointer' }} onClick={() => setOpened(true)}>
					<IoSettings />
				</Card>
			</Flex>
			<Modal
				opened={opened}
				onClose={() => setOpened(false)}
				title="Custom Background"
				centered>
				<Flex direction="column" gap="md">
					<TextInput
						placeholder="Enter Image URL (e.g., https://...)"
						value={bgInput}
						onChange={(e) => setBgInput(e.target.value)}
					/>
					<Button onClick={handleApplyUrl} disabled={!bgInput}>
						Apply URL
					</Button>

					<Typography style={{ textAlign: 'center' }}>OR</Typography>

					<FileInput
						placeholder="Upload an image or video from your PC"
						accept="image/*,video/*"
						onChange={handleFileUpload}
					/>

					<Button color="red" variant="outline" onClick={handleReset}>
						Reset to Default Gradient
					</Button>
				</Flex>
			</Modal>
		</>
	);
};
