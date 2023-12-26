export const getLocationTitle = ({
	city,
	country,
}: {
	city: string
	country: string
}): string => {
	return `${city}, ${country}`
}
