var maxProfit = function(prices) {
    let buy = 0; 
    let sell = 1;
    let Maxprofit = 0;
    
    while (sell < prices.length) { 
        let profit = prices[sell] - prices[buy]; 
        
        if (profit > 0) { 
            Maxprofit = Math.max(Maxprofit, profit);
        } else {
            buy = sell;
        }
        sell++;  
    }
    return Maxprofit; 
};