/**
 * @param {number[]} nums
 * @return {number[]}
 */
function findValidElements(nums) {
	const result = [];

	for (let i = 0; i < nums.length; i++) {
		if (i === 0 || i === nums.length - 1) {
			result.push(nums[i]);
		} else {
			let allGreaterInLeft = true;
			for (let j = i - 1; j >= 0; j--) {
				if (nums[j] >= nums[i]) {
					allGreaterInLeft = false;
					break;
				}
			}

			let allGreaterInRight = true;
			for (let j = i + 1; j < nums.length; j++) {
				if (nums[j] >= nums[i]) {
					allGreaterInRight = false;
					break;
				}
			}

			if (allGreaterInLeft || allGreaterInRight) {
				result.push(nums[i]);
			}
		}
	}

	return result;
}

export { findValidElements };
