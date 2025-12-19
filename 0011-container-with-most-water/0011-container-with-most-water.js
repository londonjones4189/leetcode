/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    left = 0; 
    right = height.length - 1; 
    MaxArea = 0; 
    while(left < right){ 
        area = Math.min(height[left], height[right]) * (right - left); 
        if (height[left] < height[right]){ 
            left++;
        } else { 
            right--;
        }
        MaxArea = Math.max(MaxArea, area); 
    }
    return MaxArea;
};