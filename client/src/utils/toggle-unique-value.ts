export const toggleUniqueValue = (
	value: string,
	array?: string[] | string
): any[] => {
	if (!array) {
		return [value]
	}

	const uniqueArray = typeof array === 'string' ? [array] : array

	const isExist = uniqueArray.find(v => v === value)

	if (isExist) {
		const filteredArray = uniqueArray.filter(v => v !== value)

		return filteredArray
	}

	return [...uniqueArray, value]
}
