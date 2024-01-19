export const toggleUniqueValue = (
	value: string,
	array: string[] | string | undefined
): any[] => {
	if (!array || typeof array === 'string') {
		return [value]
	}

	const isExist = array.some(v => v === value)

	if (isExist) {
		const filteredArray = array.filter(v => v !== value)

		return filteredArray
	}

	return [...array, value]
}
