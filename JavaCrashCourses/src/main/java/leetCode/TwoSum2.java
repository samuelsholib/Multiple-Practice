package leetCode;

import java.util.HashMap;
import java.util.Map;

public class TwoSum2 {
    public int[] twoSum (int[] nums, int target) {
        Map<Integer, Integer> compNums = new HashMap<>();

        for (int i = 0; i < nums.length; i++) {
            Integer compIndex = compNums.get(nums[i]);
            if (compIndex != null) {
                return new int[] {i, compIndex, i};
            }
            compNums.put(target- nums[i], i);

        }
        return nums;
    }
}
