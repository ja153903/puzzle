/**
 * @param {number[]} height
 * @return {number}
 */
function maxArea(height) {
	let left = 0,
		right = height.length - 1;
	let resultingMaxArea = 0;

	while (left < right) {
		const area = Math.min(height[left], height[right]) * (right - left);
		resultingMaxArea = Math.max(resultingMaxArea, area);

		if (height[left] > height[right]) {
			right--;
		} else if (height[left] < height[right]) {
			left++;
		} else {
			right--;
			left++;
		}
	}

	return resultingMaxArea;
}

export { maxArea };
