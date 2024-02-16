const isValidDate = (date: any): boolean => {
	return (
		date &&
		Object.prototype.toString.call(date) === '[object Date]' &&
		!isNaN(date)
	)
}
