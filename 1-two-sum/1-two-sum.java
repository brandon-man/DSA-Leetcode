class Solution {
    public int[] twoSum(int[] nums, int target) {
        HashMap<Integer, Integer> hash = new HashMap<>();
        
        for (int i = 0; i < nums.length; i++) {
            int diff = target - nums[i];
            if (hash.containsKey(diff)) {
                return new int[] { i, hash.get(diff) };
            }
            hash.put(nums[i], i);
        }
        return new int[] {};
    }
}