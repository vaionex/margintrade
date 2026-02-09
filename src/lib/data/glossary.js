export const glossaryTerms = [
	{
		slug: 'margin-call',
		term: 'Margin Call',
		shortDefinition: 'A demand from a broker to deposit additional funds when your account equity falls below the required maintenance margin level.',
		fullDefinition: `A margin call occurs when the value of your margin trading account falls below the broker's required maintenance margin level. When this happens, the broker demands that you deposit additional funds or close positions to bring your account back to the minimum requirement.

## How Margin Calls Work

When you open a leveraged position, you must maintain a minimum amount of equity in your account known as the maintenance margin. If your positions move against you and your equity drops below this threshold, you receive a margin call.

### The Margin Call Process:

1. **Position moves against you** — Your unrealized losses increase
2. **Equity drops below maintenance margin** — The trigger point
3. **Margin call issued** — Broker notifies you (or auto-liquidates in crypto)
4. **You must act** — Deposit more funds, close positions, or face liquidation

## Margin Call in Traditional vs Crypto Markets

In traditional finance (stocks, forex), margin calls often come with a grace period — you might have 2-5 business days to deposit additional funds. Your broker calls or emails you with the specific amount needed.

In cryptocurrency margin trading, margin calls are typically automated. Most crypto exchanges skip the "call" entirely and proceed directly to liquidation when your margin falls below the maintenance level. This is because crypto markets operate 24/7 with extreme volatility.

## Example of a Margin Call

Let's say you have $10,000 in your margin account and open a $50,000 long position on BTC with 5x leverage:

- **Initial margin**: $10,000 (20%)
- **Maintenance margin**: 10% = $5,000
- If BTC drops 10%, your position loses $5,000
- Your equity is now $5,000 — right at the maintenance margin
- **Margin call triggered!**

If you don't add funds, further price drops will lead to liquidation.

## How to Avoid Margin Calls

- **Use lower leverage** — The less leverage you use, the more room for price movement
- **Set stop-loss orders** — Automatically close positions before reaching margin call levels
- **Monitor positions actively** — Keep an eye on your margin ratio
- **Maintain excess margin** — Keep more collateral than the minimum required
- **Diversify positions** — Don't concentrate risk in a single trade

## Key Takeaways

Margin calls are a critical risk management mechanism. In crypto trading, they happen automatically and often result in immediate liquidation. Understanding and preparing for margin calls is essential for any margin trader.`,
		relatedTerms: ['liquidation', 'maintenance-margin', 'initial-margin', 'leverage'],
		faq: [
			{ q: 'What happens if I ignore a margin call?', a: 'In traditional markets, the broker will liquidate your positions to cover the shortfall. In crypto markets, liquidation is usually automatic — there is no grace period.' },
			{ q: 'Can I get a margin call in crypto?', a: 'Yes, though in crypto it is typically automatic. When your equity falls below maintenance margin, your position is liquidated without a phone call or email notification.' },
			{ q: 'How much do I need to deposit for a margin call?', a: 'You need to deposit enough to bring your account equity back above the maintenance margin level. The exact amount depends on your position size and current losses.' }
		]
	},
	{
		slug: 'liquidation',
		term: 'Liquidation',
		shortDefinition: 'The forced closure of a leveraged trading position by the exchange when the trader\'s margin falls below the maintenance requirement.',
		fullDefinition: `Liquidation is the automatic closure of a trader's leveraged position by the exchange or broker when the account equity falls below the required maintenance margin. It is the final step after a margin call and serves to protect both the trader and the exchange from further losses.

## How Liquidation Works

When you trade with leverage, you borrow funds from the exchange to amplify your position. The exchange requires you to maintain a minimum amount of collateral (maintenance margin). If your losses eat into this collateral beyond the maintenance level, the exchange forcefully closes your position — this is liquidation.

### Liquidation Process:

1. **Price moves against your position** significantly
2. **Margin ratio drops** below maintenance margin requirement  
3. **Exchange's liquidation engine activates** automatically
4. **Position is closed** at the current market price
5. **Remaining collateral** (if any) is returned minus liquidation fees

## Calculating Liquidation Price

For a **long position**:
Liquidation Price = Entry Price × (1 - 1/Leverage + Maintenance Margin Rate)

For a **short position**:
Liquidation Price = Entry Price × (1 + 1/Leverage - Maintenance Margin Rate)

### Example:
- Entry price: $50,000 (BTC)
- Leverage: 10x
- Maintenance margin: 0.5%
- **Long liquidation price** ≈ $45,250 (roughly 9.5% below entry)

## Partial vs Full Liquidation

Some exchanges use **partial liquidation** to reduce your position size instead of closing it entirely. This can help you maintain a portion of your trade:

- **Binance**: Uses multi-tier liquidation, reducing position incrementally
- **Bybit**: Partial liquidation engine reduces position to lower risk
- **Kraken**: Full liquidation at maintenance margin level

## Liquidation Fees

Most exchanges charge a liquidation fee, typically 0.5% to 1.5% of the position value. This fee is deducted from your remaining collateral.

## How to Avoid Liquidation

- **Use lower leverage** — 3-5x instead of 50-100x
- **Set stop-loss orders** well above your liquidation price
- **Add margin** to your position when it moves against you
- **Use isolated margin** to limit losses to that position only
- **Monitor your margin ratio** and act before it's too late

## Insurance Funds and ADL

Exchanges maintain **insurance funds** to cover losses when liquidated traders' positions can't be closed at a favorable price. If the insurance fund is depleted, **Auto-Deleveraging (ADL)** may occur, where profitable traders' positions are automatically reduced.`,
		relatedTerms: ['margin-call', 'maintenance-margin', 'leverage', 'isolated-margin', 'cross-margin'],
		faq: [
			{ q: 'Do I lose all my money when liquidated?', a: 'Not necessarily. You lose the margin allocated to that position. With isolated margin, losses are limited to the position margin. With cross margin, your entire account balance is at risk.' },
			{ q: 'Can I be liquidated with low leverage?', a: 'Yes, but it requires a much larger price movement. At 2x leverage, the price needs to move roughly 50% against you. At 100x, just 1% can trigger liquidation.' },
			{ q: 'What is the liquidation fee?', a: 'Most exchanges charge 0.5% to 1.5% of the position value as a liquidation fee. This is deducted from your remaining collateral.' }
		]
	},
	{
		slug: 'leverage',
		term: 'Leverage',
		shortDefinition: 'A trading mechanism that allows you to control a larger position than your actual capital by borrowing funds, expressed as a ratio like 10x or 100x.',
		fullDefinition: `Leverage in trading refers to using borrowed funds to increase the size of a trading position beyond what your own capital would allow. Expressed as a multiplier (e.g., 2x, 10x, 100x), leverage amplifies both potential profits and potential losses proportionally.

## How Leverage Works

When you trade with 10x leverage, you can control a position worth 10 times your deposited capital (margin):

- **Your capital**: $1,000
- **Leverage**: 10x
- **Position size**: $10,000
- **If price goes up 5%**: You profit $500 (50% return on your $1,000)
- **If price goes down 5%**: You lose $500 (50% loss on your $1,000)

## Leverage Across Markets

| Market | Typical Leverage | Max Leverage |
|--------|-----------------|--------------|
| Crypto (offshore) | 1-125x | 200x (MEXC) |
| Crypto (regulated) | 1-5x | 50x (Kraken) |
| Forex (EU/UK) | 1-30x | 30x (retail) |
| Forex (unregulated) | 1-500x | 1000x |
| Stocks (USA) | 1-2x | 4x (portfolio margin) |
| Futures | 1-20x | Varies by contract |

## The Leverage Spectrum

### Low Leverage (2-5x)
- Suitable for beginners and swing traders
- Price can move 20-50% before liquidation
- Lower fees from smaller borrowed amounts
- Recommended for most traders

### Medium Leverage (5-20x)
- For experienced traders with risk management
- Price can move 5-20% before liquidation
- Common for day trading strategies
- Requires active position monitoring

### High Leverage (20-100x+)
- For expert traders only
- Price moves of 0.5-5% can cause liquidation
- Primarily used for scalping very small moves
- Extremely high risk of total loss

## Why High Leverage Is Dangerous

A common misconception is that high leverage means high profits. In reality:

- **100x leverage**: A 1% price move against you = liquidation
- **99% of traders** using 100x+ leverage lose their entire position
- Fees and slippage are proportionally larger
- Emotional decision-making increases with higher stakes

## Leverage and Margin Relationship

Leverage and margin are inversely related:
- **2x leverage** = 50% initial margin required
- **10x leverage** = 10% initial margin required
- **100x leverage** = 1% initial margin required

The less margin you put up, the higher your leverage — and the closer you are to liquidation.`,
		relatedTerms: ['margin-call', 'liquidation', 'initial-margin', 'maintenance-margin', 'cross-margin', 'isolated-margin'],
		faq: [
			{ q: 'What leverage should beginners use?', a: 'Beginners should start with 2-3x leverage maximum. This provides some amplification while keeping liquidation risk manageable. As you gain experience, you can gradually increase leverage.' },
			{ q: 'Is 100x leverage a good idea?', a: 'Almost never. At 100x leverage, a mere 1% price movement against you leads to liquidation. It is only used by experienced scalpers for very short-term trades with tight stop-losses.' },
			{ q: 'Does leverage cost money?', a: 'Yes. When you use leverage, you borrow funds and pay interest (funding rates in crypto, margin interest in traditional markets). Higher leverage means higher borrowing costs.' }
		]
	},
	{
		slug: 'cross-margin',
		term: 'Cross Margin',
		shortDefinition: 'A margin mode where your entire account balance is used as collateral for all open positions, sharing margin across trades.',
		fullDefinition: `Cross margin is a margin trading mode where your entire available account balance serves as collateral for all open positions. All positions share the same margin pool, which means profits from one position can prevent liquidation of another.

## How Cross Margin Works

In cross margin mode:
- **All funds** in your margin account back all positions
- **Profits** from winning trades offset losses from losing trades
- **Liquidation** occurs only when your total account equity falls below the combined maintenance margin
- Your **entire balance is at risk** if positions go badly wrong

### Example:
- Account balance: $10,000
- Position A (BTC Long): Using $3,000 margin
- Position B (ETH Short): Using $2,000 margin
- Remaining balance: $5,000

If Position A loses $4,000, the extra $5,000 in your account prevents liquidation. Your total equity is $6,000, which may still be above the maintenance margin for both positions combined.

## Cross Margin vs Isolated Margin

| Feature | Cross Margin | Isolated Margin |
|---------|-------------|-----------------|
| Collateral | Entire account balance | Position-specific |
| Liquidation risk | Total account | Limited to position |
| Capital efficiency | Higher | Lower |
| Risk management | More complex | Simpler |
| Best for | Hedging, experienced traders | Beginners, risk control |

## When to Use Cross Margin

- **Hedging**: When you have opposing positions that offset risk
- **Multiple correlated positions**: When positions are likely to move together
- **Experienced traders**: Who can manage overall portfolio risk
- **Lower leverage**: When using conservative leverage levels

## When NOT to Use Cross Margin

- **High leverage trading**: Risk of losing entire account
- **Experimental trades**: When testing new strategies
- **Beginners**: Until you understand portfolio risk management
- **Volatile markets**: When unexpected moves could wipe your account

## Cross Margin on Major Exchanges

- **Binance**: Cross margin across USDT-M futures
- **Bybit**: Unified cross margin account
- **OKX**: Multi-currency cross margin mode
- **Kraken**: Cross margin for spot margin trading`,
		relatedTerms: ['isolated-margin', 'margin-call', 'liquidation', 'maintenance-margin', 'leverage'],
		faq: [
			{ q: 'Is cross margin safer than isolated margin?', a: 'It depends. Cross margin provides more buffer against liquidation for individual positions but risks your entire account balance. Isolated margin limits losses per position but may liquidate faster on that specific trade.' },
			{ q: 'Can I switch between cross and isolated margin?', a: 'Most exchanges allow switching between margin modes, but typically only when you have no open positions in that mode. Check your exchange\'s specific rules.' },
			{ q: 'Which is better for beginners?', a: 'Isolated margin is generally recommended for beginners because it limits the maximum loss to the margin assigned to each individual position.' }
		]
	},
	{
		slug: 'isolated-margin',
		term: 'Isolated Margin',
		shortDefinition: 'A margin mode where each position has its own dedicated collateral, limiting potential losses to only the margin assigned to that specific trade.',
		fullDefinition: `Isolated margin is a margin trading mode where each position has its own separate pool of collateral. Unlike cross margin, your other funds and positions are not affected if one position gets liquidated.

## How Isolated Margin Works

In isolated margin mode:
- Each position has **dedicated collateral**
- **Only the assigned margin** is at risk per position
- Liquidation of one position **doesn't affect** others
- You can **add or remove margin** from individual positions

### Example:
- Account balance: $10,000
- Position A: $2,000 isolated margin (BTC Long 10x)
- Position B: $1,000 isolated margin (ETH Long 10x)
- Remaining balance: $7,000 (safe from both positions)

If Position A is liquidated, you lose only $2,000. Your $7,000 balance and Position B are unaffected.

## Benefits of Isolated Margin

1. **Risk containment** — Maximum loss is predetermined
2. **Position independence** — Each trade is separate
3. **Clearer risk management** — Know exactly how much you can lose
4. **Better for beginners** — Simpler to understand and manage
5. **Strategy testing** — Test new strategies without risking entire account

## Drawbacks of Isolated Margin

1. **More easily liquidated** — Less collateral backing each position
2. **Lower capital efficiency** — Funds are locked per position
3. **Manual margin management** — Need to add margin manually
4. **No hedging benefit** — Profitable positions don't help losing ones

## When to Use Isolated Margin

- You're a **beginner** learning margin trading
- Making **high-leverage** trades
- **Testing** new strategies
- Trading **volatile** or unfamiliar assets
- You want to **limit maximum loss** on a trade`,
		relatedTerms: ['cross-margin', 'margin-call', 'liquidation', 'maintenance-margin', 'leverage'],
		faq: [
			{ q: 'What happens when an isolated margin position is liquidated?', a: 'You lose only the margin assigned to that specific position. Your remaining account balance and other positions are completely unaffected.' },
			{ q: 'Can I add more margin to an isolated position?', a: 'Yes, most exchanges allow you to add margin to an isolated position to prevent liquidation. You can also remove excess margin from profitable positions.' },
			{ q: 'Should beginners use isolated margin?', a: 'Yes. Isolated margin is strongly recommended for beginners because it provides clear, limited risk per trade and prevents a single bad trade from wiping your entire account.' }
		]
	},
	{
		slug: 'maintenance-margin',
		term: 'Maintenance Margin',
		shortDefinition: 'The minimum amount of equity you must maintain in your margin account to keep positions open and avoid liquidation.',
		fullDefinition: `Maintenance margin is the minimum equity level required to keep a leveraged position open. When your account equity falls below this threshold, you face a margin call or automatic liquidation.

## How Maintenance Margin Works

Every exchange and broker sets maintenance margin requirements, typically expressed as a percentage of the position value:

- **Crypto exchanges**: Usually 0.4% - 5% depending on leverage and position size
- **US stocks (Reg T)**: Minimum 25% (FINRA requirement)
- **Forex**: Varies by pair, typically 1-5%
- **CFD brokers**: 50% of initial margin (common EU regulation)

### Example:
- Position value: $100,000
- Maintenance margin rate: 1%
- **Required maintenance margin: $1,000**
- If your equity drops below $1,000, liquidation is triggered

## Maintenance Margin vs Initial Margin

| Aspect | Initial Margin | Maintenance Margin |
|--------|---------------|-------------------|
| When | To open a position | To keep it open |
| Amount | Higher | Lower |
| Purpose | Entry collateral | Minimum to avoid liquidation |
| Example (10x) | 10% ($10,000) | ~5% ($5,000) |

## Tiered Maintenance Margin

Most crypto exchanges use tiered maintenance margins based on position size:

| Position Size | Maintenance Margin |
|--------------|-------------------|
| $0 - $50,000 | 0.4% |
| $50,000 - $250,000 | 0.5% |
| $250,000 - $1M | 1.0% |
| $1M - $5M | 2.5% |
| $5M+ | 5.0% |

Larger positions require higher maintenance margins because they are harder to liquidate without slippage.`,
		relatedTerms: ['initial-margin', 'margin-call', 'liquidation', 'leverage'],
		faq: [
			{ q: 'What happens when I hit maintenance margin?', a: 'In crypto, your position is typically liquidated automatically. In traditional markets, you receive a margin call with a grace period to deposit more funds.' },
			{ q: 'Why does maintenance margin increase with position size?', a: 'Larger positions are harder to close quickly without affecting the market price (slippage). Higher maintenance margins provide a buffer for this risk.' },
			{ q: 'Can I check my current margin level?', a: 'Yes, all exchanges show your margin ratio or margin level in real-time. Monitor this regularly, especially during volatile markets.' }
		]
	},
	{
		slug: 'initial-margin',
		term: 'Initial Margin',
		shortDefinition: 'The minimum amount of collateral required to open a new leveraged trading position.',
		fullDefinition: `Initial margin is the minimum collateral you must deposit to open a leveraged trading position. It determines how much leverage you can use and represents your "skin in the game" for the trade.

## How Initial Margin Is Calculated

Initial margin is inversely proportional to leverage:

**Initial Margin = Position Size / Leverage**

### Examples:
- **10x leverage**: Initial margin = 10% of position → $1,000 opens a $10,000 position
- **20x leverage**: Initial margin = 5% of position → $500 opens a $10,000 position
- **100x leverage**: Initial margin = 1% of position → $100 opens a $10,000 position

## Initial Margin in Different Markets

### Crypto Exchanges
- Calculated dynamically based on leverage selected
- Typically 0.8% to 100% of position value
- Can be adjusted per trade on most platforms

### US Stock Markets (Reg T)
- **Initial margin**: 50% for long positions
- **Short selling**: 150% (50% margin + 100% of proceeds)
- **Portfolio margin**: Can be as low as 15%

### Forex Markets
- EU/UK retail: 3.33% (30:1 leverage) for major pairs
- Professional accounts: As low as 0.5% (200:1)

## Initial vs Maintenance Margin

Initial margin is always higher than maintenance margin:
- **Initial**: What you need to enter a trade
- **Maintenance**: What you need to keep it open

The gap between initial and maintenance margin determines how much the market can move against you before liquidation after opening a position.`,
		relatedTerms: ['maintenance-margin', 'leverage', 'margin-call', 'liquidation'],
		faq: [
			{ q: 'Is initial margin my maximum loss?', a: 'With isolated margin, yes — your initial margin (plus any added margin) is the maximum you can lose. With cross margin, your entire account balance is at risk.' },
			{ q: 'Can I use less than the required initial margin?', a: 'No. The initial margin is the minimum required. You can deposit more for a larger buffer against liquidation.' },
			{ q: 'Does initial margin earn interest?', a: 'No, your deposited margin does not earn interest. In fact, you pay interest on the borrowed portion of your leveraged position.' }
		]
	},
	{
		slug: 'funding-rate',
		term: 'Funding Rate',
		shortDefinition: 'A periodic payment exchanged between long and short traders on perpetual futures contracts to keep the contract price close to the spot price.',
		fullDefinition: `The funding rate is a mechanism used in perpetual futures contracts to ensure the contract price stays close to the underlying asset's spot price. It is a periodic payment between long and short position holders — not a fee paid to the exchange.

## How Funding Rates Work

Perpetual futures contracts have no expiration date (unlike traditional futures). Without an expiry mechanism to converge the price, funding rates serve this purpose:

- **When funding rate is positive**: Longs pay shorts (contract price > spot price)
- **When funding rate is negative**: Shorts pay longs (contract price < spot price)
- **Payments occur** every 8 hours on most exchanges (00:00, 08:00, 16:00 UTC)

### Example:
- BTC perpetual contract price: $51,000
- BTC spot price: $50,000
- Funding rate: +0.01% (positive)
- Your long position: $100,000
- **You pay**: $100,000 × 0.01% = $10 every 8 hours

## Funding Rate Calculation

Most exchanges use this formula:

**Funding Rate = Premium Index + clamp(Interest Rate - Premium Index, -0.05%, 0.05%)**

Where:
- **Premium Index**: Difference between contract price and spot price
- **Interest Rate**: Usually 0.01% per 8 hours (0.03% daily)

## Why Funding Rates Matter for Margin Traders

1. **Cost of holding positions**: Positive funding on longs = ongoing expense
2. **Income opportunity**: Being on the receiving side earns you money
3. **Market sentiment indicator**: High positive rates = bullish sentiment
4. **Strategy component**: Funding rate arbitrage strategies exist

## Typical Funding Rates

| Market Condition | Typical Rate | Annualized |
|-----------------|-------------|------------|
| Normal market | 0.01% / 8hr | ~11% |
| Bullish market | 0.05-0.1% / 8hr | ~55-110% |
| Extreme greed | 0.1-0.5% / 8hr | ~110-550% |
| Bearish market | -0.01% / 8hr | ~-11% |

## Funding Rate Arbitrage

Traders can profit from high funding rates by:
1. Going **long** on spot (buy the asset)
2. Going **short** on perpetual futures
3. **Collecting** the positive funding rate from short position
4. The positions hedge each other, and you earn funding

This is called a "cash and carry" or "basis trade" and is common among institutional traders.`,
		relatedTerms: ['leverage', 'mark-price', 'unrealized-pnl', 'liquidation'],
		faq: [
			{ q: 'Do I have to pay funding rates?', a: 'Only if you hold a perpetual futures position when funding is settled (every 8 hours). If you close your position before the funding timestamp, you don\'t pay or receive funding.' },
			{ q: 'Can funding rates make me money?', a: 'Yes! If you\'re on the receiving side of funding (e.g., short when funding is positive), you receive payments from other traders. Some traders build strategies around collecting funding.' },
			{ q: 'Are funding rates the same on all exchanges?', a: 'No, funding rates vary by exchange based on their own order book supply/demand dynamics. Checking rates across exchanges can reveal arbitrage opportunities.' }
		]
	},
	{
		slug: 'mark-price',
		term: 'Mark Price',
		shortDefinition: 'A fair price calculation used by exchanges to prevent unfair liquidations, typically based on spot price index and funding rate.',
		fullDefinition: `Mark price is a calculated fair value price used by cryptocurrency exchanges to determine unrealized P&L and trigger liquidations. Unlike the last traded price, the mark price is resistant to market manipulation and sudden price wicks.

## Why Mark Price Exists

Without mark price, liquidations would be based on the last traded price on a single exchange. This creates problems:

- **Market manipulation**: A whale could briefly crash the price to liquidate others
- **Low liquidity wicks**: Thin order books could cause unreasonable price spikes
- **Exchange-specific anomalies**: One exchange's price might diverge temporarily

Mark price solves these by using a broader, manipulation-resistant price calculation.

## How Mark Price Is Calculated

**Mark Price = Spot Index Price + Decaying Funding Basis**

Where:
- **Spot Index Price**: Weighted average of spot prices across multiple major exchanges
- **Funding Basis**: Adjusts for the premium/discount of the contract relative to spot

### Example:
- Spot index (average of Binance, Coinbase, Kraken spot): $50,000
- Current contract price on this exchange: $50,100
- Mark price might be: $50,050 (between index and contract price)

## Mark Price vs Last Price

| Aspect | Mark Price | Last Price |
|--------|-----------|------------|
| Basis | Multi-exchange index | Single exchange last trade |
| Manipulation resistant | Yes | No |
| Used for | P&L and liquidation | Order execution |
| Stability | More stable | Can be volatile |

## Why Mark Price Matters for Margin Traders

1. **Liquidation is based on mark price**, not last traded price
2. Your **unrealized P&L** is typically calculated using mark price
3. It **protects you** from being unfairly liquidated by price manipulation
4. Understanding mark price helps you **predict liquidation levels** more accurately`,
		relatedTerms: ['liquidation', 'funding-rate', 'unrealized-pnl', 'maintenance-margin'],
		faq: [
			{ q: 'Can I be liquidated even if the last price hasn\'t reached my liquidation level?', a: 'Yes. Liquidation is based on mark price, not last traded price. If the mark price reaches your liquidation level, you will be liquidated even if the last trade on that exchange was at a different price.' },
			{ q: 'Why is my P&L different from what I expect?', a: 'Your unrealized P&L is calculated using the mark price, which may differ from the last traded price. This ensures a fair valuation based on the broader market.' },
			{ q: 'Do all exchanges use mark price?', a: 'All major crypto derivatives exchanges (Binance, Bybit, OKX, etc.) use mark price for liquidation calculations. The specific calculation may vary slightly between exchanges.' }
		]
	},
	{
		slug: 'unrealized-pnl',
		term: 'Unrealized PnL',
		shortDefinition: 'The paper profit or loss on an open trading position that has not yet been realized through closing the trade.',
		fullDefinition: `Unrealized PnL (Profit and Loss), also called "paper profit/loss" or "floating P&L," represents the current profit or loss on an open position based on the current mark price. It becomes realized PnL only when you close the position.

## Calculating Unrealized PnL

### For Long Positions:
**Unrealized PnL = (Mark Price - Entry Price) × Position Size**

### For Short Positions:
**Unrealized PnL = (Entry Price - Mark Price) × Position Size**

### Example (Long):
- Entry price: $50,000
- Current mark price: $52,000
- Position size: 1 BTC
- **Unrealized PnL = ($52,000 - $50,000) × 1 = +$2,000**

### Example (Short):
- Entry price: $50,000
- Current mark price: $48,000
- Position size: 1 BTC
- **Unrealized PnL = ($50,000 - $48,000) × 1 = +$2,000**

## Unrealized PnL and Margin

Your unrealized PnL directly affects your:
- **Available margin**: Profits increase it, losses decrease it
- **Margin ratio**: Determines how close you are to liquidation
- **Liquidation price**: Based on when unrealized losses exceed your margin

In **cross margin** mode, unrealized profits from one position can help maintain margin on another losing position.

## ROI vs Unrealized PnL

**ROI (Return on Investment)** considers your leverage:
- Unrealized PnL: +$2,000
- Initial margin (10x leverage on $50,000 position): $5,000
- **ROI: $2,000 / $5,000 = 40%**

A 4% price move with 10x leverage gives you a 40% ROI — this shows why leverage amplifies both gains and losses.

## Tax Implications

In most jurisdictions, unrealized PnL is **not taxable** — you only owe taxes on realized gains (when you close the position). However, tax rules vary by country. Consult a tax professional for your specific situation.`,
		relatedTerms: ['mark-price', 'liquidation', 'leverage', 'cross-margin', 'isolated-margin'],
		faq: [
			{ q: 'Is unrealized PnL taxable?', a: 'In most countries, unrealized PnL is not taxable. You only owe taxes when you close a position and realize the profit or loss. Tax rules vary by jurisdiction.' },
			{ q: 'Does unrealized PnL affect my margin?', a: 'Yes. Unrealized losses reduce your available margin and can trigger liquidation. Unrealized profits increase your available margin in cross margin mode.' },
			{ q: 'Can unrealized PnL disappear?', a: 'Yes. Unrealized PnL fluctuates with the market. A profit can turn into a loss and vice versa. Only closing the position locks in (realizes) the PnL.' }
		]
	}
];

	{
		slug: 'realized-pnl',
		term: 'Realized PnL',
		shortDefinition: 'The actual profit or loss that has been locked in by closing a trading position, as opposed to unrealized (paper) gains or losses.',
		fullDefinition: `Realized PnL (Profit and Loss) is the actual profit or loss from a trade that has been closed. Unlike unrealized PnL, which fluctuates with market price while a position is open, realized PnL is final and permanent once the position is closed.

## Calculation

**Long Position**: Realized PnL = (Exit Price - Entry Price) × Position Size - Fees
**Short Position**: Realized PnL = (Entry Price - Exit Price) × Position Size - Fees

### Example:
- Buy 1 BTC at $50,000
- Sell 1 BTC at $53,000
- Fees: $50 total
- **Realized PnL = ($53,000 - $50,000) × 1 - $50 = $2,950**

## Tax Implications
Realized PnL is taxable in most jurisdictions. Unrealized PnL is not. This is why some traders prefer to hold winning positions (unrealized gains) while realizing losses for tax benefits.`,
		relatedTerms: ['unrealized-pnl', 'leverage', 'liquidation'],
		faq: [
			{ q: 'When does PnL become realized?', a: 'PnL becomes realized the moment you close (fully or partially) a trading position. Until then, it remains unrealized and can change.' },
			{ q: 'Is realized PnL taxable?', a: 'Yes, in most countries realized trading profits are subject to capital gains tax or income tax.' }
		]
	},
	{
		slug: 'open-interest',
		term: 'Open Interest',
		shortDefinition: 'The total number of outstanding derivative contracts (futures or options) that have not been settled or closed.',
		fullDefinition: `Open interest represents the total number of active contracts in a derivatives market. Each contract requires both a buyer and a seller, so open interest counts the number of unique contracts, not the number of participants.

## How Open Interest Changes

- **New buyer + New seller** → Open interest increases by 1
- **Existing buyer sells to new buyer** → Open interest unchanged
- **Existing buyer sells to existing seller** → Open interest decreases by 1

## Open Interest vs Volume

| Metric | Open Interest | Volume |
|--------|--------------|--------|
| Measures | Outstanding contracts | Contracts traded in a period |
| Resets | Never (cumulative) | Resets each period |
| Indicates | Market participation | Trading activity |

## Why Open Interest Matters for Margin Traders

1. **Liquidity indicator**: Higher OI = more liquid market
2. **Trend confirmation**: Rising OI + rising price = strong bullish trend
3. **Reversal signal**: Falling OI + rising price = weakening trend
4. **Squeeze potential**: Very high OI with concentrated positions = squeeze risk`,
		relatedTerms: ['perpetual-contract', 'futures-contract', 'funding-rate'],
		faq: [
			{ q: 'Is high open interest bullish or bearish?', a: 'High open interest itself is neither bullish nor bearish. It indicates strong market participation. Combined with price direction, it helps confirm trends.' },
			{ q: 'Where can I check open interest?', a: 'Most derivatives exchanges display OI for each trading pair. Third-party tools like Coinglass aggregate OI across exchanges.' }
		]
	},
	{
		slug: 'long-position',
		term: 'Long Position',
		shortDefinition: 'A trading position that profits when the price of the asset increases. Going long means buying with the expectation that the price will rise.',
		fullDefinition: `A long position (or "going long") is a trade that profits when the asset\'s price increases. It is the most intuitive form of trading — buy low, sell high.

## How Long Positions Work in Margin Trading

1. You deposit margin (collateral)
2. You open a long position at the current price
3. If the price rises, you profit
4. If the price falls, you lose
5. You close the position to realize profit/loss

### Example (10x Leverage):
- Margin: $1,000
- Entry: BTC at $50,000 (position size: $10,000 = 0.2 BTC)
- BTC rises to $55,000 (+10%)
- Profit: $10,000 × 10% = $1,000 (100% return on margin)

## Long vs Short

| Aspect | Long | Short |
|--------|------|-------|
| Profits when | Price goes up | Price goes down |
| Theoretical max profit | Unlimited | 100% (price to zero) |
| Theoretical max loss | 100% of margin | Unlimited (price can rise infinitely) |
| Market sentiment | Bullish | Bearish |`,
		relatedTerms: ['short-position', 'leverage', 'margin-call', 'liquidation'],
		faq: [
			{ q: 'What does going long mean?', a: 'Going long means buying an asset or opening a position that profits when the price increases. It expresses a bullish view on the market.' },
			{ q: 'Can I go long with leverage?', a: 'Yes. Margin trading and futures allow you to go long with leverage, amplifying both potential profits and losses.' }
		]
	},
	{
		slug: 'short-position',
		term: 'Short Position',
		shortDefinition: 'A trading position that profits when the price of the asset decreases. Going short means selling with the expectation that the price will fall.',
		fullDefinition: `A short position (or "going short" / "shorting") is a trade that profits when an asset\'s price decreases. It allows traders to make money in falling markets — something impossible with simple buy-and-hold investing.

## How Short Positions Work

### Via Futures (Most Common in Crypto):
1. Open a short contract at the current price
2. If the price falls, the contract gains value
3. Close the contract to realize profit

### Via Spot Margin:
1. Borrow the asset from the exchange
2. Sell it at the current price
3. Buy it back later at a lower price
4. Return the borrowed asset, keep the difference

### Example:
- Open short BTC at $50,000 with 10x leverage
- Margin: $1,000 → Position: $10,000
- BTC drops to $45,000 (-10%)
- Profit: $10,000 × 10% = $1,000 (100% return on margin)

## Risks of Short Positions
- **Unlimited theoretical loss**: Prices can rise indefinitely
- **Short squeeze**: Rapid price increases force shorts to close, accelerating the rise
- **Funding costs**: In bullish markets, shorting can be expensive due to positive funding rates`,
		relatedTerms: ['long-position', 'leverage', 'liquidation', 'funding-rate'],
		faq: [
			{ q: 'Can you lose more than you invest shorting?', a: 'On most crypto exchanges, no — liquidation prevents losses beyond your margin. In traditional markets, short losses can theoretically exceed your initial investment.' },
			{ q: 'Is shorting crypto legal?', a: 'Yes, shorting crypto is legal in most jurisdictions. It is a standard feature on all major crypto exchanges.' }
		]
	},
	{
		slug: 'stop-loss',
		term: 'Stop Loss',
		shortDefinition: 'An order that automatically closes a position at a predetermined price to limit potential losses.',
		fullDefinition: `A stop-loss order is a risk management tool that automatically closes your position when the price reaches a specified level, limiting your maximum loss on a trade. It is the single most important tool for margin traders.

## How Stop-Losses Work

1. You open a long BTC position at $50,000
2. You set a stop-loss at $49,000 (2% below entry)
3. If BTC drops to $49,000, your position is automatically closed
4. Your loss is limited to $1,000 per BTC (2%)

## Types of Stop-Loss Orders

### Market Stop-Loss
Triggers a market order when the stop price is reached. Guarantees execution but not price (slippage possible).

### Limit Stop-Loss
Triggers a limit order at a specified price. No slippage, but may not fill if the price gaps through.

### Trailing Stop-Loss
Automatically moves the stop-loss as the price moves in your favor. Locks in profits while allowing the position to run.

### Guaranteed Stop-Loss
Available on some CFD brokers (IG, Plus500). Guarantees execution at the exact stop price, even through gaps. Extra fee applies.

## Stop-Loss Best Practices
- **Always use one**: Never enter a trade without a stop-loss
- **Set before entering**: Decide your stop-loss level before you trade
- **Don't move it further away**: Only move stop-losses in your favor
- **Account for volatility**: Don't set stops too tight (normal fluctuations will trigger them)
- **Use with position sizing**: Stop-loss distance determines your position size`,
		relatedTerms: ['take-profit', 'liquidation', 'margin-call', 'leverage'],
		faq: [
			{ q: 'Can a stop-loss prevent liquidation?', a: 'Yes! A properly placed stop-loss closes your position before the liquidation price is reached, preserving most of your margin.' },
			{ q: 'Can a stop-loss fail?', a: 'Market stop-losses can experience slippage during extreme volatility or gaps, executing at a worse price. Limit stop-losses may not fill at all if price gaps through.' }
		]
	},
	{
		slug: 'take-profit',
		term: 'Take Profit',
		shortDefinition: 'An order that automatically closes a position when a predetermined profit target is reached.',
		fullDefinition: `A take-profit order automatically closes your position when the price reaches your target profit level. It locks in gains without requiring you to monitor the market constantly.

## How Take-Profit Works

1. You open a long BTC position at $50,000
2. You set a take-profit at $55,000 (10% above entry)
3. If BTC rises to $55,000, your position automatically closes
4. Your profit of $5,000 per BTC is locked in

## Take-Profit and Risk-Reward Ratio

The relationship between your stop-loss and take-profit determines your risk-reward ratio:

- **Stop-loss**: $49,000 (risk: $1,000)
- **Take-profit**: $52,000 (reward: $2,000)
- **Risk-reward ratio**: 1:2

A minimum 1:2 risk-reward ratio means you can be wrong 60% of the time and still profit.

## Best Practices
- Set take-profit at logical levels (resistance, round numbers)
- Use with stop-loss for complete risk management
- Consider partial take-profits (close 50% at first target, let rest run)
- Don't be too greedy — taking consistent smaller profits beats hoping for home runs`,
		relatedTerms: ['stop-loss', 'unrealized-pnl', 'realized-pnl'],
		faq: [
			{ q: 'Should I always set a take-profit?', a: 'It is recommended, especially for leveraged positions. A take-profit ensures you lock in gains rather than watching profits evaporate if the market reverses.' },
			{ q: 'Can I use both stop-loss and take-profit?', a: 'Yes, and you should. Most platforms allow setting both simultaneously. One cancels the other when triggered (OCO - One Cancels Other).' }
		]
	},
	{
		slug: 'margin-requirement',
		term: 'Margin Requirement',
		shortDefinition: 'The minimum amount of funds that must be deposited as collateral to open or maintain a leveraged trading position.',
		fullDefinition: `Margin requirement refers to the amount of capital a trader must deposit to open and maintain a leveraged position. It is set by the exchange or broker and varies by asset, leverage level, and regulatory jurisdiction.

## Types of Margin Requirements

### Initial Margin Requirement
The minimum collateral needed to open a new position. Inversely proportional to leverage:
- 2x leverage → 50% initial margin
- 10x leverage → 10% initial margin
- 100x leverage → 1% initial margin

### Maintenance Margin Requirement
The minimum equity needed to keep a position open. Lower than initial margin. Falling below triggers liquidation.

## Margin Requirements by Market

| Market | Typical Requirement | Regulator |
|--------|-------------------|-----------|
| US Stocks | 50% initial, 25% maintenance | FINRA/Fed |
| EU Forex | 3.33% (30x) for majors | ESMA |
| EU Crypto CFD | 50% (2x) | ESMA |
| Crypto (offshore) | 0.5-10% | Exchange policy |`,
		relatedTerms: ['initial-margin', 'maintenance-margin', 'leverage'],
		faq: [
			{ q: 'Who sets margin requirements?', a: 'Regulators set minimum requirements (e.g., FINRA for US stocks). Exchanges and brokers can set higher requirements but not lower than regulatory minimums.' }
		]
	},
	{
		slug: 'buying-power',
		term: 'Buying Power',
		shortDefinition: 'The total value of positions you can open based on your available margin and leverage, representing your maximum trading capacity.',
		fullDefinition: `Buying power (also called "purchasing power") is the total amount you can trade based on your account equity and available leverage. It represents the maximum position size you could theoretically open.

## Calculating Buying Power

**Buying Power = Available Margin × Maximum Leverage**

### Example:
- Account balance: $10,000
- Maximum leverage: 10x
- **Buying power: $100,000**

This means you could open positions worth up to $100,000. However, using your full buying power is extremely risky.

## Buying Power in Different Markets

### US Stock Margin (Reg T)
- Cash account: Buying power = cash balance (1x)
- Margin account: Buying power = 2x equity (standard)
- Portfolio margin: Buying power = up to 6.7x equity

### Crypto Exchange
- Buying power = balance × selected leverage
- Changes based on leverage chosen per trade
- Not recommended to use more than 20-30% of buying power

## Best Practice
Never use more than 20-30% of your buying power. This leaves buffer for:
- Adding margin to existing positions
- Absorbing unrealized losses
- Opening new opportunities`,
		relatedTerms: ['leverage', 'initial-margin', 'margin-requirement'],
		faq: [
			{ q: 'Should I use all my buying power?', a: 'No. Using 100% of buying power leaves no buffer for losses or new opportunities. Most professionals use 20-30% maximum.' }
		]
	},
	{
		slug: 'portfolio-margin',
		term: 'Portfolio Margin',
		shortDefinition: 'An advanced margin methodology that calculates requirements based on the overall risk of a portfolio rather than individual positions, offering greater capital efficiency.',
		fullDefinition: `Portfolio margin is an advanced margining system that evaluates risk across your entire portfolio rather than calculating margin for each position independently. This results in lower margin requirements for hedged or diversified portfolios.

## How Portfolio Margin Works

Instead of requiring fixed percentages per position, portfolio margin uses risk-based models:
- Simulates how your portfolio would perform under various market scenarios
- Considers correlations and offsets between positions
- Hedged positions require significantly less margin
- Result: More capital efficiency for sophisticated traders

### Example:
**Standard Margin**: Long 1 BTC ($50K margin) + Short 1 ETH ($15K margin) = $65K total margin
**Portfolio Margin**: Since BTC and ETH are correlated, the net risk is lower → might require only $20K margin

## Availability

| Platform | Min Balance | Max Leverage |
|----------|-----------|-------------|
| Interactive Brokers | $110,000 | ~6.7x |
| OKX | $10,000 | Varies |
| Bybit | $1,000+ | Varies |
| Binance | VIP accounts | Varies |

## Who Should Use Portfolio Margin?
- Traders running multiple offsetting positions
- Options traders with complex strategies
- Hedgers who want capital efficiency
- NOT beginners`,
		relatedTerms: ['cross-margin', 'initial-margin', 'maintenance-margin', 'buying-power'],
		faq: [
			{ q: 'Is portfolio margin safer than standard margin?', a: 'Portfolio margin is more capital-efficient but not inherently safer. The higher effective leverage means larger potential losses if your hedges fail.' }
		]
	},
	{
		slug: 'maintenance-margin-ratio',
		term: 'Maintenance Margin Ratio',
		shortDefinition: 'The percentage of position value that must be maintained as equity to avoid liquidation, expressed as a ratio.',
		fullDefinition: `The maintenance margin ratio (MMR) is the minimum ratio of equity to position value required to keep a position open. When your equity falls below this ratio, liquidation is triggered.

## Formula

**Margin Ratio = (Account Equity / Total Position Value) × 100%**

If margin ratio ≤ maintenance margin ratio → **Liquidation triggered**

### Example:
- Position value: $100,000
- Maintenance margin ratio: 1%
- Minimum equity needed: $1,000
- If equity drops below $1,000 → position is liquidated

## Tiered Maintenance Margin

Most crypto exchanges use tiered MMR based on position size. Larger positions require higher maintenance margins because they are harder to liquidate without market impact.`,
		relatedTerms: ['maintenance-margin', 'liquidation', 'leverage'],
		faq: [
			{ q: 'How do I check my margin ratio?', a: 'All major exchanges display your current margin ratio in real-time on the trading interface. Monitor it especially during volatile markets.' }
		]
	},
	{
		slug: 'auto-deleverage',
		term: 'Auto-Deleverage (ADL)',
		shortDefinition: 'A mechanism where an exchange automatically reduces the positions of profitable traders when the insurance fund cannot cover liquidation losses.',
		fullDefinition: `Auto-Deleveraging (ADL) is a last-resort risk management mechanism used by crypto exchanges when a liquidated position cannot be closed at the bankruptcy price and the insurance fund is depleted.

## How ADL Works

1. A trader's position is liquidated
2. The liquidation engine cannot close the position at a favorable price (market is moving too fast)
3. The insurance fund covers the shortfall
4. If the insurance fund is depleted, ADL activates
5. Profitable traders on the opposite side are forcefully closed at the bankruptcy price
6. Priority: Most profitable + highest leverage traders are de-leveraged first

## ADL Priority Ranking
Exchanges rank traders for ADL based on:
- **Profit percentage**: More profitable = higher priority
- **Effective leverage**: Higher leverage = higher priority
- Both factors combined determine who gets de-leveraged first

## Why ADL Exists
Without ADL, exchanges could become insolvent during extreme market events. ADL distributes the risk of socialized losses across the most profitable participants rather than letting the exchange go bankrupt.

## How to Reduce ADL Risk
- Use lower leverage
- Take profits regularly (reduce your profit ranking)
- Diversify across exchanges
- Monitor the ADL indicator on your exchange`,
		relatedTerms: ['liquidation', 'insurance-fund', 'leverage'],
		faq: [
			{ q: 'Can my profitable position be closed by ADL?', a: 'Yes. In extreme market conditions, if the insurance fund is depleted, your profitable position may be automatically closed. This is rare but possible.' }
		]
	},
	{
		slug: 'insurance-fund',
		term: 'Insurance Fund',
		shortDefinition: 'A reserve fund maintained by a crypto exchange to cover losses when liquidated positions cannot be closed at the bankruptcy price.',
		fullDefinition: `An insurance fund is a safety net maintained by crypto derivatives exchanges. It absorbs losses that occur when liquidated positions are closed at prices worse than the bankruptcy price, preventing socialized losses among other traders.

## How Insurance Funds Work

1. Trader is liquidated at their liquidation price
2. The exchange tries to close the position at the bankruptcy price
3. If the position is closed at a better price → excess goes to the insurance fund
4. If the position is closed at a worse price → the insurance fund covers the shortfall
5. If the fund is depleted → Auto-Deleveraging (ADL) activates

## Insurance Fund Sizes (Approximate)

| Exchange | Fund Size | Notes |
|----------|----------|-------|
| Binance | $1B+ | Largest in industry |
| Bybit | $300M+ | Growing steadily |
| OKX | $400M+ | Transparent reporting |
| Bitget | $300M+ | Protection fund |

## Why It Matters
A large, healthy insurance fund means:
- Lower chance of ADL affecting your positions
- Better market stability during extreme events
- More confidence in the exchange's risk management`,
		relatedTerms: ['auto-deleverage', 'liquidation', 'maintenance-margin'],
		faq: [
			{ q: 'Where does the insurance fund money come from?', a: 'Insurance funds grow when liquidated positions are closed at prices better than the bankruptcy price. The excess is added to the fund.' }
		]
	},
	{
		slug: 'perpetual-contract',
		term: 'Perpetual Contract',
		shortDefinition: 'A type of futures contract with no expiration date that tracks the price of an underlying asset through a funding rate mechanism.',
		fullDefinition: `A perpetual contract (or "perpetual swap" / "perp") is a derivative product unique to cryptocurrency markets. Unlike traditional futures that expire on a set date, perpetual contracts have no expiration and can be held indefinitely.

## How Perpetuals Work

Perpetual contracts track the price of an underlying asset (e.g., BTC) through the funding rate mechanism:
- When the perp price > spot price: Longs pay shorts (positive funding)
- When the perp price < spot price: Shorts pay longs (negative funding)
- This incentive mechanism keeps the perp price close to spot

## Key Features

- **No expiry**: Hold as long as you have sufficient margin
- **Funding rate**: Periodic payments every 8 hours
- **Mark price**: Used for liquidation calculations
- **High leverage**: Up to 125-200x on major exchanges
- **24/7 trading**: Available around the clock

## Perpetual vs Traditional Futures

| Feature | Perpetual | Traditional Futures |
|---------|-----------|-------------------|
| Expiry | None | Fixed date |
| Funding | Every 8 hours | None |
| Settlement | Continuous | At expiry |
| Basis | Minimal (funding keeps it close) | Can have significant premium/discount |
| Popularity | Dominant in crypto | Common in traditional markets |

Perpetual contracts are the most traded product in cryptocurrency, accounting for over 70% of all crypto derivatives volume.`,
		relatedTerms: ['futures-contract', 'funding-rate', 'mark-price', 'leverage'],
		faq: [
			{ q: 'Do perpetual contracts expire?', a: 'No. Perpetual contracts have no expiration date. You can hold a position as long as you maintain sufficient margin.' },
			{ q: 'Are perpetuals available in traditional markets?', a: 'Perpetual contracts are primarily a crypto innovation. Traditional markets use expiring futures contracts. Some forex brokers offer similar products (rolling spot FX).' }
		]
	},
	{
		slug: 'futures-contract',
		term: 'Futures Contract',
		shortDefinition: 'A standardized agreement to buy or sell an asset at a predetermined price on a specific future date.',
		fullDefinition: `A futures contract is a legally binding agreement to buy or sell an asset at a specified price on a future date. Originally developed for commodities (wheat, oil), futures are now traded across stocks, currencies, and cryptocurrencies.

## How Futures Work

1. Two parties agree on a price for future delivery
2. Each party posts margin (collateral)
3. The contract is marked-to-market daily
4. At expiry: Physical delivery or cash settlement
5. Profit/loss = Difference between agreed price and market price at settlement

## Futures in Crypto

Crypto futures come in two forms:
- **Delivery (Quarterly)**: Settle at expiry (e.g., BTC-0328 settles March 28)
- **Perpetual**: No expiry (see "Perpetual Contract")

### Delivery Futures Advantages:
- No funding rate costs
- Known settlement date for planning
- Premium/discount provides trading opportunities

### Delivery Futures Disadvantages:
- Need to roll positions at expiry
- Less liquid than perpetuals
- Fewer available on most exchanges

## Futures vs Spot

| Aspect | Futures | Spot |
|--------|---------|------|
| Ownership | Contract only | Actual asset |
| Leverage | Built-in | Cash or margin |
| Costs | Margin requirements | Full purchase price |
| Settlement | Future date | Immediate |
| Short selling | Native | Requires borrowing |`,
		relatedTerms: ['perpetual-contract', 'funding-rate', 'leverage', 'open-interest'],
		faq: [
			{ q: 'What happens when a futures contract expires?', a: 'At expiry, the contract is settled either by physical delivery of the asset or cash settlement (paying/receiving the price difference). Most crypto futures are cash-settled.' }
		]
	},
	{
		slug: 'basis',
		term: 'Basis (Futures Premium/Discount)',
		shortDefinition: 'The difference between the futures contract price and the spot price of the underlying asset, representing the cost of carry or market sentiment.',
		fullDefinition: `Basis (also called "futures premium" or "futures discount") is the price difference between a futures contract and the current spot price of the underlying asset.

## Formula

**Basis = Futures Price - Spot Price**

- **Positive basis (contango)**: Futures price > Spot price (premium) — common in bullish markets
- **Negative basis (backwardation)**: Futures price < Spot price (discount) — common in bearish markets
- **Zero basis**: Futures price = Spot price (convergence at expiry)

## Why Basis Exists

The basis reflects:
1. **Cost of carry**: Interest costs of holding the position until expiry
2. **Market sentiment**: Bullish = premium, bearish = discount
3. **Time to expiry**: Basis converges to zero as expiry approaches

## Basis Trading

Traders can profit from basis through:
- **Cash and carry**: Buy spot + sell futures = collect premium
- **Reverse cash and carry**: Short spot + buy futures = collect discount
- These are relatively low-risk "arbitrage" strategies

## Basis in Perpetual Futures

For perpetual contracts, the "basis" is kept minimal by the funding rate mechanism. However, during extreme sentiment, perp prices can still deviate from spot, leading to very high funding rates.

### Annualized Basis Rates:
| Market Condition | Typical Basis |
|-----------------|---------------|
| Normal | 5-15% annualized |
| Bull market | 20-50% annualized |
| Extreme greed | 50-100%+ annualized |
| Bear market | -5% to -20% annualized |`,
		relatedTerms: ['futures-contract', 'perpetual-contract', 'funding-rate'],
		faq: [
			{ q: 'What does contango mean?', a: 'Contango (positive basis) means the futures price is higher than spot. This is the normal state in most markets and reflects the cost of carry and bullish sentiment.' },
			{ q: 'Can I profit from basis?', a: 'Yes. Basis trading (cash and carry) is a common institutional strategy that profits from the premium/discount between spot and futures prices.' }
		]
	}
];

export function getGlossaryTerm(slug) {
	return glossaryTerms.find(t => t.slug === slug);
}

export function getGlossaryTerms() {
	return glossaryTerms;
}
