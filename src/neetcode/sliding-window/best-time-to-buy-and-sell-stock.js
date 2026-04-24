/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
	if (prices.length === 0) {
		return 0;
	}

	let profit = 0;
	let currentMin = prices[0];

	for (let i = 1; i < prices.length; i++) {
		profit = Math.max(profit, prices[i] - currentMin);
		currentMin = Math.min(currentMin, prices[i]);
	}

	return profit;
}

export { maxProfit };
