/*
Input: prices-array of nums 
output: max profit: int 
edge cases: buy day < sell day 
            buy day != sell day
 */
class Solution {
    public int maxProfit(int[] prices) {
        int maxprofit = 0; 
        //Selecting Buy and sell days
        int buy = 0; 
        int sell = buy + 1; 
        
        while (sell < prices.length) { 
            int profit = prices[sell] - prices[buy];
            System.out.println(prices[sell]); 
            System.out.println(prices[buy]); 
            System.out.println(profit); 
            
            if (profit >= 0) { 
                maxprofit = Math.max(profit, maxprofit);
            } else { 
                buy = sell;
            }
            sell++;
        }
        return maxprofit;
    }
}