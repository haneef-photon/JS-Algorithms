/*

Maximum Profits

Instructions:
Suppose we could access yesterday’s prices for
a certain stock as a chronological list.
Write a function that takes the list and returns
the highest profit possible from one purchase
and one sale of the stock yesterday.

For example, a stock price list of [10, 7, 5, 8, 11, 9] 
shows that the stock started at 10 and ended at 9,
going through the numbers chronologically. There is at least
a 1-minute difference between the
stock prices.

Taking that array as input, our function should
return 6, the maximum possible profit from buying
when the price was 5 and selling when the price was 11.
If no profit can be made, return 0.

No “shorting” — you must buy before you sell.

Input: Array of Numbers
Output: Number

*/

console.log(maximumProfits1([10, 7, 5, 8, 11, 9])); // -> 6
console.log(maximumProfits2([10, 7, 5, 8, 11, 9])); // -> 6

function maximumProfits1(prices){
    const profits =[0];

    for( let i = 0; i < prices.length; i++){
        for( let j = i + 1; j < prices.length; j++){
            profits.push(prices[j] - prices[i]);
        }
    }
    return Math.max(...profits);
}

function maximumProfits2(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;
    // Loop through the prices find the min price on left of current price which will be the max profit
    for(let i = 0; i < prices.length; i++) { // O(n)
        const currentPrice = prices[i];
        minPrice = Math.min(minPrice, currentPrice);
        maxProfit = Math.max(maxProfit, currentPrice - minPrice);
    }
    
    return maxProfit;
}

// Time: O(n)
// Space: O(1)