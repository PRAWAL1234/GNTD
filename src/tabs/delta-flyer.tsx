import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import React from 'react';

import { HeroLayout } from '~src/Layout';
import { glassTheme } from '~src/utility/glassThemeSTyle';

// Custom Glassmorphic Theme configuration for Mantine

function DeltaFlyerPage() {
	return (
		<MantineProvider theme={glassTheme} defaultColorScheme="dark">
			<HeroLayout />
		</MantineProvider>
	);
}

export default DeltaFlyerPage;
