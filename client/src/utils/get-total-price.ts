export const getTotalPrice = ({
	price,
	nights,
}: {
	price: number
	nights: number
}): number => {
	return price * nights
}
