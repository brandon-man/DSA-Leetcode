class Solution {
    public int[] twoSum(int[] nums, int target) {
        HashMap<Integer, Integer> hash = new HashMap<>();
        
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (hash.containsKey(nums[i])) {
                return new int[] { hash.get(nums[i]), i };
            }
            hash.put(complement, i);
        }
        return new int[] {};
    }
}