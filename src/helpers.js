export function formatNumber(number) {
	return new Intl.NumberFormat('nb-NO', {
		maximumFractionDigits: 0,
		minimumFractionDigits: 0
	}).format(number);
}
