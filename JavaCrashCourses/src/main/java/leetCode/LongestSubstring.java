package leetCode;

import java.util.HashSet;

public class LongestSubstring {
    public int lengthOfLongestSubstring(String S) {
        int initialPointer = 0;
        int secondPointer = 0;
        int maxChars = 0;
        HashSet<Character> hash_set = new HashSet<>();
        while (secondPointer < S.length()) {
            if (!hash_set.contains(S.charAt(secondPointer))) {
              hash_set.add(S.charAt(secondPointer));
              secondPointer++;
              maxChars = Math.max(hash_set.size(), maxChars);
            } else {
              hash_set.remove(S.charAt((initialPointer)));
              initialPointer++;
            }

        }
        return maxChars;
    }
}
