/**
 * This is just a greedy algorithm.
 * Everytime the current number is less than a previous number
 * we increase the number of operations based on the difference
 * of pairwise numbers
 *
 * @param {number[]} nums
 * @return {number}
 */
function minOperations(nums) {
	let ops = 0;

	for (let i = 1; i < nums.length; i++) {
		if (nums[i] < nums[i - 1]) {
			ops += nums[i - 1] - nums[i];
		}
	}

	return ops;
}

export { minOperations };
