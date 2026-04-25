/**
 * @param {number[]} nums
 * @return {number}
 */
function findMin(nums) {
	let left = 0,
		right = nums.length - 1;

	while (left < right) {
		const mid = left + Math.floor((right - left) / 2);

		// if the number in the middle is greater than nums[right] then
		// min should be on the left side
		if (nums[mid] > nums[right]) {
			left = mid + 1;
		} else {
			right = mid;
		}
	}

	return nums[left];
}

export { findMin };
