class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        unordered_map<char, int> charIndex;
        int maxLength = 0;
        int start = 0;
        //test
        for (int end = 0; end < s.length(); end++) {
            char currentChar = s[end];
            
            // If character is already in the window, move start pointer
            if (charIndex.find(currentChar) != charIndex.end() && 
                charIndex[currentChar] >= start) {
                start = charIndex[currentChar] + 1;
            }
            
            // Update the character's latest index
            charIndex[currentChar] = end;
            
            // Calculate max length
            maxLength = max(maxLength, end - start + 1);
        }
        
        return maxLength;
    }
};