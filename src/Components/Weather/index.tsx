import {
	Card,
	Container,
	Flex,
	Group,
	Skeleton,
	Stack,
	Text,
} from '@mantine/core';
import {
	IconBolt,
	IconCloud,
	IconCloudFog,
	IconCloudRain,
	IconSnowflake,
	IconSun,
} from '@tabler/icons-react';
import React, { useEffect, useState } from 'react';

export interface WeatherData {
	temperature: number;
	windspeed: number;
	weathercode: number;
}

export interface LocationData {
	city?: string;
	state?: string;
	country?: string;
}

const getWeatherDetails = (code: number) => {
	if (code === 0)
		return { label: 'Clear sky', icon: IconSun, color: '#fcc419' }; // yellow
	if (code === 1 || code === 2 || code === 3)
		return { label: 'Cloudy', icon: IconCloud, color: '#868e96' }; // gray
	if (code >= 40 && code <= 49)
		return { label: 'Fog', icon: IconCloudFog, color: '#868e96' };
	if ((code >= 50 && code <= 59) || (code >= 60 && code <= 69))
		return { label: 'Rain', icon: IconCloudRain, color: '#339af0' }; // blue
	if (code >= 70 && code <= 79)
		return { label: 'Snow', icon: IconSnowflake, color: '#22b8cf' }; // cyan
	if (code >= 80 && code <= 99)
		return { label: 'Thunderstorm', icon: IconBolt, color: '#cc5de8' }; // grape
	return { label: 'Unknown', icon: IconCloud, color: '#868e96' };
};

export const Weather: React.FC = () => {
	const [weather, setWeather] = useState<WeatherData | null>(null);
	const [location, setLocation] = useState<LocationData | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	useEffect(() => {
		if ('geolocation' in navigator) {
			setLoading(true);
			navigator.geolocation.getCurrentPosition(
				async (position) => {
					try {
						const { latitude, longitude } = position.coords;
						// Using Open-Meteo free API
						const res = await fetch(
							`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
						);
						const data = await res.json();

						try {
							// Free reverse geocoding API to get state and city
							const geoRes = await fetch(
								`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
							);
							const geoData = await geoRes.json();
							setLocation({
								city: geoData.locality || geoData.city,
								state: geoData.principalSubdivision,
								country: geoData.countryName,
							});
						} catch (e) {
							console.error('Failed to parse location', e);
						}

						if (data?.current_weather) {
							setWeather(data.current_weather);
						} else {
							setError('Failed to fetch weather data');
						}
					} catch (err: any) {
						setError(err.message);
						setWeather(null);
					} finally {
						setLoading(false);
					}
				},
				(err: any) => {
					// Handling geolocation errors (e.g. timeout, denied) gracefully
					setError(err.message || 'Location unavailable');
					setLoading(false);
				}
			);
		} else {
			setError('Geolocation is not supported by your browser');
			setLoading(false);
			window.location.reload();
		}
	}, []);

	const {
		label,
		icon: Icon,
		color,
	} = weather
		? getWeatherDetails(weather.weathercode)
		: { label: '--', icon: IconSun, color: '#fcc419' };

	return (
		<Container mt="md">
			<Card w={350} p={'md'}>
				<Flex gap="lg" align={'center'} justify="space-evenly">
					<Group gap="lg" justify="space-evenly" wrap="nowrap">
						{loading ? (
							<Skeleton height={30} width={30} circle />
						) : (
							<Icon size={50} color={color} stroke={1.5} />
						)}

						<Stack gap={6} justify="center">
							{loading ? (
								<>
									<Skeleton height={24} width={50} radius="sm" />
									<Skeleton height={14} width={70} radius="sm" />
									<Skeleton height={12} width={90} radius="sm" />
								</>
							) : (
								<>
									<Text size="xl" fw={700} lh={1}>
										{weather ? `${Math.round(weather.temperature)}°C` : '-- °C'}
									</Text>
									<Text
										size="sm"
										c={error ? 'red' : 'dimmed'}
										lh={1}
										style={{
											whiteSpace: 'nowrap',
											overflow: 'hidden',
											textOverflow: 'ellipsis',
											maxWidth: 200,
										}}>
										{error || label}
									</Text>
									<Text size="xs" c="dimmed" lh={1}>
										Wind: {weather ? `${weather.windspeed} km/h` : '-- km/h'}
									</Text>
								</>
							)}
						</Stack>
					</Group>
					<Flex direction="column" gap={2}>
						{loading ? (
							<>
								<Skeleton height={28} width={100} radius="sm" />
								<Skeleton height={24} width={80} radius="sm" />
							</>
						) : location ? (
							<>
								<Text size="xl" fw={700} lh={1.2}>
									{location.state || location.country || '--'}
								</Text>
								<Text size="lg" c="dimmed" lh={1.2}>
									{location.city || 'Unknown Location'}
								</Text>
							</>
						) : null}
					</Flex>
				</Flex>
			</Card>
		</Container>
	);
};
