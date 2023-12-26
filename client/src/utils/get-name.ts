export const getName = ({
	firstName,
	surName,
}: {
	firstName: string
	surName: string
}): string => {
	return `${firstName} ${surName}`
}
