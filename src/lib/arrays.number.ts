export function isMonotonicallyIncreasing(nums: number[]) {
	for (let i = 1; i < nums.length; i++) {
		if (nums[i] <= nums[i - 1]) {
			return false;
		}
	}
	return true;
}

export function isMonotonicallyDecreasing(nums: number[]) {
	for (let i = 1; i < nums.length; i++) {
		if (nums[i] >= nums[i - 1]) {
			return false;
		}
	}
	return true;
}
