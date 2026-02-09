export const exchanges = [
	{
		slug: 'binance',
		name: 'Binance',
		type: 'crypto',
		founded: 2017,
		headquarters: 'Global (Cayman Islands)',
		rating: 4.8,
		maxLeverage: 125,
		makerFee: 0.02,
		takerFee: 0.04,
		marginTypes: ['Cross Margin', 'Isolated Margin'],
		tradingPairs: 1800,
		minDeposit: 0,
		depositMethods: ['Crypto', 'Bank Transfer', 'Credit Card', 'P2P'],
		regulated: true,
		regulators: ['VASP (Multiple jurisdictions)', 'AMF France', 'FSRA Abu Dhabi'],
		marginAssets: ['BTC', 'ETH', 'USDT', 'BUSD', 'BNB', '50+ assets'],
		interestRate: '0.01% - 0.06% daily',
		liquidationFee: '0.5% - 1.5%',
		referralUrl: 'https://accounts.binance.com/register?ref=MARGINTRADE',
		referralBonus: '20% fee discount',
		description: 'Binance is the world\'s largest cryptocurrency exchange by trading volume, offering comprehensive margin trading with up to 125x leverage on futures. Founded by Changpeng Zhao (CZ) in 2017, it has grown to serve over 150 million users globally.',
		pros: [
			'Highest liquidity in crypto markets',
			'Up to 125x leverage on futures',
			'Lowest trading fees in the industry',
			'Extensive range of margin trading pairs',
			'Advanced trading tools and charting',
			'Cross-margin and isolated margin options',
			'Earn interest on margin collateral'
		],
		cons: [
			'Not available in USA (use Binance.US with limited features)',
			'Complex interface for beginners',
			'Regulatory scrutiny in multiple countries',
			'Customer support can be slow during peak times',
			'KYC required for higher leverage'
		],
		features: {
			spotMargin: true,
			futuresMargin: true,
			optionsTrading: true,
			copyTrading: true,
			botTrading: true,
			stakingRewards: true,
			mobilApp: true,
			api: true
		},
		marginTiers: [
			{ tier: 1, maxPosition: '$50,000', maxLeverage: 125, maintenanceMargin: '0.4%' },
			{ tier: 2, maxPosition: '$250,000', maxLeverage: 100, maintenanceMargin: '0.5%' },
			{ tier: 3, maxPosition: '$1,000,000', maxLeverage: 75, maintenanceMargin: '1.0%' },
			{ tier: 4, maxPosition: '$5,000,000', maxLeverage: 50, maintenanceMargin: '2.5%' },
			{ tier: 5, maxPosition: '$20,000,000', maxLeverage: 20, maintenanceMargin: '5.0%' }
		],
		signupSteps: [
			'Visit Binance through our referral link for a 20% fee discount',
			'Click "Register" and enter your email address and a strong password',
			'Complete email verification by entering the code sent to your inbox',
			'Complete KYC verification by uploading your ID and a selfie',
			'Enable 2FA (Two-Factor Authentication) for security',
			'Navigate to "Margin" section and enable margin trading',
			'Transfer funds from your Spot wallet to Margin wallet',
			'Start margin trading with your preferred leverage'
		],
		faq: [
			{ q: 'What is the maximum leverage on Binance?', a: 'Binance offers up to 10x leverage on spot margin trading and up to 125x leverage on USDT-M futures contracts. The exact leverage available depends on the trading pair and your account tier.' },
			{ q: 'Is Binance margin trading available in the USA?', a: 'Standard Binance margin trading is not available to US residents. However, Binance.US offers limited margin trading features. US traders may want to consider alternatives like Kraken or Coinbase.' },
			{ q: 'What are Binance margin trading fees?', a: 'Binance charges 0.02% maker and 0.04% taker fees for futures, with spot margin fees starting at 0.1%. Additional daily interest rates apply for borrowed funds, ranging from 0.01% to 0.06% depending on the asset.' },
			{ q: 'How does Binance liquidation work?', a: 'When your margin ratio falls below the maintenance margin requirement, Binance automatically liquidates your position. A liquidation fee of 0.5%-1.5% is charged. You can set stop-losses to avoid liquidation.' },
			{ q: 'Can I use cross margin on Binance?', a: 'Yes, Binance supports both cross margin (shared collateral across positions) and isolated margin (dedicated collateral per position). Cross margin is better for hedging, while isolated limits risk per trade.' }
		]
	},
	{
		slug: 'bybit',
		name: 'Bybit',
		type: 'crypto',
		founded: 2018,
		headquarters: 'Dubai, UAE',
		rating: 4.7,
		maxLeverage: 100,
		makerFee: 0.02,
		takerFee: 0.055,
		marginTypes: ['Cross Margin', 'Isolated Margin', 'Portfolio Margin'],
		tradingPairs: 1200,
		minDeposit: 0,
		depositMethods: ['Crypto', 'Bank Transfer', 'Credit Card', 'P2P', 'Apple Pay'],
		regulated: true,
		regulators: ['VARA Dubai', 'CySEC Cyprus'],
		marginAssets: ['BTC', 'ETH', 'USDT', 'USDC', '30+ assets'],
		interestRate: '0.01% - 0.05% daily',
		liquidationFee: '0.5%',
		referralUrl: 'https://www.bybit.com/register?affiliate_id=MARGINTRADE',
		referralBonus: '$30,000 welcome bonus',
		description: 'Bybit is a top-tier cryptocurrency derivatives exchange known for its lightning-fast matching engine and professional trading interface. Since its founding in 2018, Bybit has become one of the most popular platforms for margin and futures trading, processing over $10 billion in daily volume.',
		pros: [
			'Ultra-fast order matching engine (100,000 TPS)',
			'Up to 100x leverage on perpetual contracts',
			'Portfolio margin for capital efficiency',
			'Copy trading feature for beginners',
			'Testnet for practice trading',
			'Competitive fee structure',
			'24/7 multilingual customer support'
		],
		cons: [
			'Not available in USA, UK, and some other regions',
			'Fewer spot trading pairs than Binance',
			'Relatively newer exchange (since 2018)',
			'Limited fiat on-ramp options in some countries'
		],
		features: {
			spotMargin: true,
			futuresMargin: true,
			optionsTrading: true,
			copyTrading: true,
			botTrading: true,
			stakingRewards: true,
			mobilApp: true,
			api: true
		},
		marginTiers: [
			{ tier: 1, maxPosition: '$25,000', maxLeverage: 100, maintenanceMargin: '0.5%' },
			{ tier: 2, maxPosition: '$100,000', maxLeverage: 75, maintenanceMargin: '1.0%' },
			{ tier: 3, maxPosition: '$500,000', maxLeverage: 50, maintenanceMargin: '2.0%' },
			{ tier: 4, maxPosition: '$2,000,000', maxLeverage: 25, maintenanceMargin: '5.0%' }
		],
		signupSteps: [
			'Click our Bybit referral link to claim up to $30,000 in bonuses',
			'Enter your email address and create a secure password',
			'Verify your email with the confirmation code',
			'Complete identity verification (KYC Level 1)',
			'Set up Google Authenticator or SMS 2FA',
			'Deposit funds via crypto transfer or fiat gateway',
			'Navigate to Derivatives or Margin trading section',
			'Select your leverage and begin trading'
		],
		faq: [
			{ q: 'What leverage does Bybit offer?', a: 'Bybit offers up to 100x leverage on USDT perpetual contracts and up to 100x on inverse perpetual contracts. Spot margin trading supports up to 10x leverage.' },
			{ q: 'Is Bybit safe to use?', a: 'Bybit is considered one of the safer crypto exchanges with proof-of-reserves, cold storage for funds, and regulatory licenses in Dubai and Cyprus. They have never been hacked.' },
			{ q: 'What is Bybit Portfolio Margin?', a: 'Portfolio Margin on Bybit calculates margin requirements based on your overall portfolio risk rather than individual positions, allowing more capital-efficient trading for experienced traders.' },
			{ q: 'How do Bybit trading fees work?', a: 'Bybit charges 0.02% maker fees and 0.055% taker fees for perpetual contracts. VIP tiers offer reduced fees based on trading volume and asset balance.' }
		]
	},
	{
		slug: 'okx',
		name: 'OKX',
		type: 'crypto',
		founded: 2017,
		headquarters: 'Seychelles',
		rating: 4.6,
		maxLeverage: 125,
		makerFee: 0.02,
		takerFee: 0.05,
		marginTypes: ['Cross Margin', 'Isolated Margin', 'Portfolio Margin', 'Multi-currency Margin'],
		tradingPairs: 1500,
		minDeposit: 0,
		depositMethods: ['Crypto', 'Bank Transfer', 'Credit Card', 'P2P'],
		regulated: true,
		regulators: ['VARA Dubai', 'MAS Singapore (pending)'],
		marginAssets: ['BTC', 'ETH', 'USDT', 'USDC', '40+ assets'],
		interestRate: '0.01% - 0.05% daily',
		liquidationFee: '0.5% - 1.0%',
		referralUrl: 'https://www.okx.com/join/MARGINTRADE',
		referralBonus: 'Mystery box up to $10,000',
		description: 'OKX (formerly OKEx) is one of the world\'s leading cryptocurrency exchanges, offering advanced margin trading features including portfolio margin and multi-currency margin modes. With over $1 billion in daily derivatives volume, OKX is a favorite among professional traders.',
		pros: [
			'Advanced portfolio margin mode',
			'Multi-currency margin for flexibility',
			'Up to 125x leverage',
			'Excellent Web3 wallet integration',
			'Comprehensive trading tools',
			'Low fees with VIP program',
			'Strong institutional-grade API'
		],
		cons: [
			'Not available in USA',
			'Interface can be overwhelming for beginners',
			'Some features restricted by region',
			'Withdrawal delays reported occasionally'
		],
		features: {
			spotMargin: true,
			futuresMargin: true,
			optionsTrading: true,
			copyTrading: true,
			botTrading: true,
			stakingRewards: true,
			mobilApp: true,
			api: true
		},
		marginTiers: [
			{ tier: 1, maxPosition: '$50,000', maxLeverage: 125, maintenanceMargin: '0.4%' },
			{ tier: 2, maxPosition: '$200,000', maxLeverage: 100, maintenanceMargin: '0.6%' },
			{ tier: 3, maxPosition: '$1,000,000', maxLeverage: 75, maintenanceMargin: '1.0%' },
			{ tier: 4, maxPosition: '$5,000,000', maxLeverage: 50, maintenanceMargin: '2.5%' }
		],
		signupSteps: [
			'Visit OKX through our referral link for bonus rewards',
			'Sign up with your email or phone number',
			'Complete the email/SMS verification',
			'Pass identity verification (KYC)',
			'Enable 2FA for account security',
			'Deposit funds to your account',
			'Switch to margin trading mode in settings',
			'Select your margin mode and leverage, then trade'
		],
		faq: [
			{ q: 'What is OKX Portfolio Margin?', a: 'OKX Portfolio Margin uses a risk-based model to calculate margin across your entire portfolio, reducing margin requirements by offsetting hedged positions. This is ideal for sophisticated trading strategies.' },
			{ q: 'What leverage does OKX offer?', a: 'OKX offers up to 125x leverage on select USDT-M perpetual contracts. Spot margin supports up to 10x leverage. Available leverage varies by trading pair.' },
			{ q: 'Is OKX available in the USA?', a: 'No, OKX is not available to US residents. American traders should consider Kraken or Coinbase as regulated alternatives.' },
			{ q: 'What is multi-currency margin on OKX?', a: 'Multi-currency margin allows you to use multiple cryptocurrencies as collateral simultaneously, with automatic conversion calculations for margin requirements.' }
		]
	},
	{
		slug: 'kraken',
		name: 'Kraken',
		type: 'crypto',
		founded: 2011,
		headquarters: 'San Francisco, USA',
		rating: 4.5,
		maxLeverage: 50,
		makerFee: 0.02,
		takerFee: 0.05,
		marginTypes: ['Cross Margin', 'Isolated Margin'],
		tradingPairs: 600,
		minDeposit: 1,
		depositMethods: ['Crypto', 'Bank Transfer', 'Wire Transfer', 'ACH (US)'],
		regulated: true,
		regulators: ['FinCEN (USA)', 'FCA (UK)', 'FINTRAC (Canada)', 'ASIC (Australia)'],
		marginAssets: ['BTC', 'ETH', 'USDT', 'USD', 'EUR', '20+ assets'],
		interestRate: '0.01% - 0.02% per 4 hours',
		liquidationFee: '0.5%',
		referralUrl: 'https://www.kraken.com/sign-up?ref=MARGINTRADE',
		referralBonus: '$10 in BTC welcome bonus',
		description: 'Kraken is one of the oldest and most trusted cryptocurrency exchanges, founded in 2011. It\'s one of the few major exchanges offering margin trading to US customers (in eligible states). Known for its security and regulatory compliance, Kraken has never been hacked.',
		pros: [
			'Available in the USA (most states)',
			'One of the most trusted exchanges (13+ years)',
			'Strong regulatory compliance',
			'Never been hacked',
			'Good for beginners and pros',
			'Proof of reserves audited',
			'Excellent customer support'
		],
		cons: [
			'Lower leverage compared to offshore exchanges (50x max)',
			'Fewer trading pairs than Binance/OKX',
			'Higher fees without volume discounts',
			'No copy trading feature',
			'Limited deposit methods in some regions'
		],
		features: {
			spotMargin: true,
			futuresMargin: true,
			optionsTrading: false,
			copyTrading: false,
			botTrading: false,
			stakingRewards: true,
			mobilApp: true,
			api: true
		},
		marginTiers: [
			{ tier: 1, maxPosition: '$100,000', maxLeverage: 50, maintenanceMargin: '1.0%' },
			{ tier: 2, maxPosition: '$500,000', maxLeverage: 25, maintenanceMargin: '2.0%' },
			{ tier: 3, maxPosition: '$2,000,000', maxLeverage: 10, maintenanceMargin: '5.0%' }
		],
		signupSteps: [
			'Click our Kraken referral link to get started',
			'Create your account with email and username',
			'Verify your email address',
			'Complete Intermediate verification for margin trading',
			'Upload government ID and proof of residence',
			'Set up 2FA with Google Authenticator',
			'Fund your account via bank transfer or crypto',
			'Enable margin trading in account settings and start trading'
		],
		faq: [
			{ q: 'Can US residents use Kraken margin trading?', a: 'Yes! Kraken is one of the few major exchanges offering margin trading to eligible US residents. Availability varies by state, and some restrictions apply.' },
			{ q: 'What leverage does Kraken offer?', a: 'Kraken offers up to 5x leverage on spot margin trading and up to 50x on futures. This is lower than offshore exchanges but comes with stronger regulatory protections.' },
			{ q: 'Is Kraken safe?', a: 'Kraken is considered one of the safest crypto exchanges. It was founded in 2011, has never been hacked, conducts regular proof-of-reserves audits, and holds multiple regulatory licenses.' },
			{ q: 'What are Kraken margin trading fees?', a: 'Kraken charges an opening fee of 0.02% and a rollover fee of 0.01-0.02% per 4 hours. Futures fees are 0.02% maker and 0.05% taker.' }
		]
	},
	{
		slug: 'bitget',
		name: 'Bitget',
		type: 'crypto',
		founded: 2018,
		headquarters: 'Singapore',
		rating: 4.5,
		maxLeverage: 125,
		makerFee: 0.02,
		takerFee: 0.06,
		marginTypes: ['Cross Margin', 'Isolated Margin'],
		tradingPairs: 800,
		minDeposit: 0,
		depositMethods: ['Crypto', 'Credit Card', 'P2P', 'Bank Transfer'],
		regulated: true,
		regulators: ['MAS Singapore', 'MSB USA', 'DCE Australia'],
		marginAssets: ['BTC', 'ETH', 'USDT', 'USDC', 'BGB'],
		interestRate: '0.01% - 0.04% daily',
		liquidationFee: '0.5%',
		referralUrl: 'https://www.bitget.com/referral/register?from=MARGINTRADE',
		referralBonus: '$6,200 welcome package',
		description: 'Bitget is a rapidly growing cryptocurrency exchange that has become a leader in copy trading and social trading features. With over 20 million users and robust margin trading capabilities, Bitget offers an excellent platform for both beginners and experienced traders.',
		pros: [
			'Industry-leading copy trading platform',
			'Up to 125x leverage',
			'$300M+ protection fund',
			'User-friendly interface',
			'Competitive fee structure',
			'Strong mobile app experience',
			'Extensive educational resources'
		],
		cons: [
			'Smaller exchange compared to Binance/OKX',
			'Limited fiat deposit options',
			'Less liquidity on smaller pairs',
			'Relatively newer reputation'
		],
		features: { spotMargin: true, futuresMargin: true, optionsTrading: false, copyTrading: true, botTrading: true, stakingRewards: true, mobilApp: true, api: true },
		marginTiers: [
			{ tier: 1, maxPosition: '$50,000', maxLeverage: 125, maintenanceMargin: '0.4%' },
			{ tier: 2, maxPosition: '$200,000', maxLeverage: 100, maintenanceMargin: '0.5%' },
			{ tier: 3, maxPosition: '$500,000', maxLeverage: 50, maintenanceMargin: '1.0%' }
		],
		signupSteps: [
			'Visit Bitget through our referral link for up to $6,200 in bonuses',
			'Register with your email or phone number',
			'Complete email/SMS verification',
			'Pass KYC identity verification',
			'Enable two-factor authentication',
			'Deposit funds via crypto or fiat',
			'Navigate to Futures or Margin trading',
			'Select leverage and start trading or copy a top trader'
		],
		faq: [
			{ q: 'What makes Bitget different?', a: 'Bitget is best known for its copy trading feature, allowing beginners to automatically replicate trades from successful traders. It also offers competitive fees and a strong protection fund.' },
			{ q: 'What leverage does Bitget offer?', a: 'Bitget offers up to 125x leverage on major USDT-M perpetual contracts like BTC/USDT and ETH/USDT. Smaller pairs have lower leverage limits.' },
			{ q: 'Is Bitget safe?', a: 'Bitget maintains a $300M+ protection fund, uses cold storage for most assets, and holds regulatory licenses in multiple jurisdictions including Singapore and Australia.' }
		]
	},
	{
		slug: 'mexc',
		name: 'MEXC',
		type: 'crypto',
		founded: 2018,
		headquarters: 'Singapore',
		rating: 4.3,
		maxLeverage: 200,
		makerFee: 0.0,
		takerFee: 0.02,
		marginTypes: ['Cross Margin', 'Isolated Margin'],
		tradingPairs: 2300,
		minDeposit: 0,
		depositMethods: ['Crypto', 'Credit Card', 'P2P', 'Bank Transfer'],
		regulated: true,
		regulators: ['MSB Canada', 'Various regional licenses'],
		marginAssets: ['BTC', 'ETH', 'USDT', '50+ assets'],
		interestRate: '0.01% - 0.05% daily',
		liquidationFee: '0.5%',
		referralUrl: 'https://www.mexc.com/register?inviteCode=MARGINTRADE',
		referralBonus: '$1,000 futures bonus',
		description: 'MEXC Global is known for having the widest selection of trading pairs among major exchanges, with over 2,300 pairs available. It offers up to 200x leverage on select futures contracts and features zero maker fees, making it one of the most cost-effective platforms for active traders.',
		pros: [
			'Zero maker fees on futures',
			'Highest leverage available (200x)',
			'Largest selection of trading pairs (2300+)',
			'Early listing of new tokens',
			'Low taker fees (0.02%)',
			'No KYC required for basic trading',
			'Good for altcoin margin trading'
		],
		cons: [
			'Lower liquidity than top 3 exchanges',
			'Less regulatory oversight',
			'Customer support can be inconsistent',
			'Interface may feel cluttered',
			'Not available in USA'
		],
		features: { spotMargin: true, futuresMargin: true, optionsTrading: false, copyTrading: true, botTrading: true, stakingRewards: true, mobilApp: true, api: true },
		marginTiers: [
			{ tier: 1, maxPosition: '$20,000', maxLeverage: 200, maintenanceMargin: '0.5%' },
			{ tier: 2, maxPosition: '$100,000', maxLeverage: 125, maintenanceMargin: '0.8%' },
			{ tier: 3, maxPosition: '$500,000', maxLeverage: 50, maintenanceMargin: '2.0%' }
		],
		signupSteps: [
			'Click our MEXC referral link for bonus rewards',
			'Register with email or phone number',
			'Verify your email/phone',
			'Optional: Complete KYC for higher limits',
			'Deposit cryptocurrency to your account',
			'Navigate to Futures trading section',
			'Select your leverage (up to 200x) and start trading'
		],
		faq: [
			{ q: 'Why does MEXC have zero maker fees?', a: 'MEXC offers zero maker fees on futures to attract liquidity providers and maintain competitive order books. This makes it extremely cost-effective for limit order traders.' },
			{ q: 'Is 200x leverage safe?', a: 'While MEXC offers up to 200x leverage, it is extremely risky. A 0.5% price movement against you results in liquidation. Most experienced traders use 5-20x leverage. Only use high leverage with proper risk management.' },
			{ q: 'Does MEXC require KYC?', a: 'MEXC allows basic trading without KYC, but identity verification unlocks higher withdrawal limits and additional features.' }
		]
	},
	{
		slug: 'kucoin',
		name: 'KuCoin',
		type: 'crypto',
		founded: 2017,
		headquarters: 'Seychelles',
		rating: 4.4,
		maxLeverage: 100,
		makerFee: 0.02,
		takerFee: 0.06,
		marginTypes: ['Cross Margin', 'Isolated Margin'],
		tradingPairs: 900,
		minDeposit: 0,
		depositMethods: ['Crypto', 'Credit Card', 'P2P', 'Bank Transfer'],
		regulated: true,
		regulators: ['Various regional licenses'],
		marginAssets: ['BTC', 'ETH', 'USDT', 'KCS', '40+ assets'],
		interestRate: '0.01% - 0.05% daily',
		liquidationFee: '0.75%',
		referralUrl: 'https://www.kucoin.com/ucenter/signup?rcode=MARGINTRADE',
		referralBonus: '$700 welcome bonus',
		description: 'KuCoin, known as "The People\'s Exchange," is a global cryptocurrency exchange serving over 30 million users across 200+ countries. It offers a comprehensive margin trading experience with competitive fees and a wide selection of altcoins for margin trading.',
		pros: [
			'Wide altcoin selection for margin trading',
			'Competitive fees with KCS discounts',
			'Trading bot marketplace',
			'Lending market for passive income',
			'User-friendly interface',
			'KCS token holder benefits',
			'Good altcoin discovery platform'
		],
		cons: [
			'Experienced a security incident in 2020 (recovered)',
			'Lower leverage than some competitors',
			'Less liquidity on futures markets',
			'KYC now required in many regions',
			'Not available in USA'
		],
		features: { spotMargin: true, futuresMargin: true, optionsTrading: false, copyTrading: false, botTrading: true, stakingRewards: true, mobilApp: true, api: true },
		marginTiers: [
			{ tier: 1, maxPosition: '$50,000', maxLeverage: 100, maintenanceMargin: '0.5%' },
			{ tier: 2, maxPosition: '$200,000', maxLeverage: 50, maintenanceMargin: '1.0%' },
			{ tier: 3, maxPosition: '$1,000,000', maxLeverage: 25, maintenanceMargin: '2.5%' }
		],
		signupSteps: [
			'Visit KuCoin via our referral link for welcome bonuses',
			'Sign up with your email address',
			'Verify your email with the confirmation code',
			'Complete KYC verification if required',
			'Enable 2FA for account security',
			'Deposit funds to your trading account',
			'Transfer to Margin or Futures account',
			'Start trading with your selected leverage'
		],
		faq: [
			{ q: 'What makes KuCoin good for margin trading?', a: 'KuCoin offers margin trading on a wide range of altcoins that other exchanges don\'t support, combined with competitive fees and the ability to earn lending interest on unused margin assets.' },
			{ q: 'Was KuCoin hacked?', a: 'In September 2020, KuCoin experienced a $280M security breach. However, 84% of funds were recovered, and all affected users were fully compensated. Security has been significantly enhanced since.' },
			{ q: 'Does KuCoin offer lending?', a: 'Yes, KuCoin has a lending market where you can lend your crypto to margin traders and earn interest. Rates vary by asset and demand.' }
		]
	},
	{
		slug: 'gate-io',
		name: 'Gate.io',
		type: 'crypto',
		founded: 2013,
		headquarters: 'Grand Cayman',
		rating: 4.3,
		maxLeverage: 100,
		makerFee: 0.015,
		takerFee: 0.05,
		marginTypes: ['Cross Margin', 'Isolated Margin'],
		tradingPairs: 1700,
		minDeposit: 0,
		depositMethods: ['Crypto', 'Credit Card', 'P2P', 'Bank Transfer'],
		regulated: true,
		regulators: ['Various regional licenses', 'Malta MFSA'],
		marginAssets: ['BTC', 'ETH', 'USDT', 'GT', '50+ assets'],
		interestRate: '0.01% - 0.06% daily',
		liquidationFee: '0.75%',
		referralUrl: 'https://www.gate.io/signup?ref=MARGINTRADE',
		referralBonus: '$100 welcome bonus',
		description: 'Gate.io is one of the longest-running cryptocurrency exchanges, founded in 2013. Known for its extensive selection of tokens and early listings, Gate.io offers comprehensive margin trading with up to 100x leverage on futures contracts.',
		pros: [
			'One of the oldest exchanges (since 2013)',
			'Extensive token selection (1700+ pairs)',
			'Early listing of new projects',
			'Competitive maker fees (0.015%)',
			'Proof of reserves verified',
			'Copy trading available',
			'Startup/IEO platform for new tokens'
		],
		cons: [
			'Not available in USA',
			'Interface can be complex',
			'Lower liquidity than top exchanges',
			'Mixed customer support reviews',
			'Some withdrawal restrictions'
		],
		features: { spotMargin: true, futuresMargin: true, optionsTrading: true, copyTrading: true, botTrading: true, stakingRewards: true, mobilApp: true, api: true },
		marginTiers: [
			{ tier: 1, maxPosition: '$50,000', maxLeverage: 100, maintenanceMargin: '0.5%' },
			{ tier: 2, maxPosition: '$200,000', maxLeverage: 50, maintenanceMargin: '1.0%' },
			{ tier: 3, maxPosition: '$1,000,000', maxLeverage: 25, maintenanceMargin: '2.5%' }
		],
		signupSteps: [
			'Click our Gate.io referral link to get started',
			'Register with email and password',
			'Verify your email address',
			'Complete KYC if required in your region',
			'Set up 2FA authentication',
			'Deposit funds via crypto or fiat',
			'Navigate to Margin or Futures section',
			'Set leverage and begin trading'
		],
		faq: [
			{ q: 'How old is Gate.io?', a: 'Gate.io was founded in 2013, making it one of the oldest cryptocurrency exchanges still in operation with over 10 years of history.' },
			{ q: 'What leverage does Gate.io offer?', a: 'Gate.io offers up to 10x on spot margin and up to 100x on futures contracts. Available leverage varies by trading pair.' },
			{ q: 'Is Gate.io safe?', a: 'Gate.io publishes regular proof-of-reserves reports and has been operating since 2013 without major security incidents in recent years.' }
		]
	},
	{
		slug: 'bingx',
		name: 'BingX',
		type: 'crypto',
		founded: 2018,
		headquarters: 'Singapore',
		rating: 4.2,
		maxLeverage: 150,
		makerFee: 0.02,
		takerFee: 0.05,
		marginTypes: ['Cross Margin', 'Isolated Margin'],
		tradingPairs: 700,
		minDeposit: 0,
		depositMethods: ['Crypto', 'Credit Card', 'P2P'],
		regulated: true,
		regulators: ['CSEC Saint Vincent', 'Various regional'],
		marginAssets: ['BTC', 'ETH', 'USDT'],
		interestRate: '0.01% - 0.05% daily',
		liquidationFee: '0.5%',
		referralUrl: 'https://bingx.com/invite/MARGINTRADE',
		referralBonus: '$5,000 welcome package',
		description: 'BingX is a social trading-focused cryptocurrency exchange that combines copy trading with standard margin and futures trading. Founded in 2018, it serves over 10 million users and is particularly popular for its intuitive social trading features.',
		pros: [
			'Excellent copy/social trading features',
			'Up to 150x leverage',
			'User-friendly interface',
			'VST (Virtual Standard Token) demo trading',
			'Grid trading bots',
			'Good mobile experience',
			'Low minimum trade amounts'
		],
		cons: [
			'Lower liquidity than top exchanges',
			'Smaller trading pair selection',
			'Less established reputation',
			'Limited advanced trading features',
			'Not available in USA'
		],
		features: { spotMargin: true, futuresMargin: true, optionsTrading: false, copyTrading: true, botTrading: true, stakingRewards: true, mobilApp: true, api: true },
		marginTiers: [
			{ tier: 1, maxPosition: '$25,000', maxLeverage: 150, maintenanceMargin: '0.5%' },
			{ tier: 2, maxPosition: '$100,000', maxLeverage: 100, maintenanceMargin: '1.0%' },
			{ tier: 3, maxPosition: '$500,000', maxLeverage: 50, maintenanceMargin: '2.0%' }
		],
		signupSteps: [
			'Visit BingX through our referral link',
			'Register with email or phone',
			'Complete verification',
			'Set up 2FA security',
			'Deposit funds',
			'Explore copy trading or trade directly',
			'Set leverage and start trading'
		],
		faq: [
			{ q: 'What is BingX best for?', a: 'BingX excels at social/copy trading, making it ideal for beginners who want to follow experienced traders while learning margin trading strategies.' },
			{ q: 'What leverage does BingX offer?', a: 'BingX offers up to 150x leverage on major perpetual contracts. Most pairs support 50-100x leverage.' }
		]
	},
	{
		slug: 'phemex',
		name: 'Phemex',
		type: 'crypto',
		founded: 2019,
		headquarters: 'Singapore',
		rating: 4.3,
		maxLeverage: 100,
		makerFee: 0.01,
		takerFee: 0.06,
		marginTypes: ['Cross Margin', 'Isolated Margin'],
		tradingPairs: 350,
		minDeposit: 0,
		depositMethods: ['Crypto', 'Credit Card', 'Bank Transfer'],
		regulated: true,
		regulators: ['Various regional licenses'],
		marginAssets: ['BTC', 'ETH', 'USDT'],
		interestRate: '0.01% - 0.04% daily',
		liquidationFee: '0.5%',
		referralUrl: 'https://phemex.com/register?referralCode=MARGINTRADE',
		referralBonus: '$100 trial fund',
		description: 'Phemex was founded by former Morgan Stanley executives in 2019, bringing institutional-grade infrastructure to crypto derivatives trading. Known for its lightning-fast execution (sub-millisecond) and professional trading environment, Phemex is favored by experienced traders.',
		pros: [
			'Founded by ex-Morgan Stanley team',
			'Sub-millisecond order execution',
			'Low maker fees (0.01%)',
			'Clean professional interface',
			'Premium membership with zero spot fees',
			'Strong security infrastructure',
			'Testnet for practice'
		],
		cons: [
			'Smaller trading pair selection',
			'Lower trading volume',
			'Less altcoin variety',
			'Not available in USA',
			'Fewer features than larger exchanges'
		],
		features: { spotMargin: true, futuresMargin: true, optionsTrading: false, copyTrading: false, botTrading: false, stakingRewards: true, mobilApp: true, api: true },
		marginTiers: [
			{ tier: 1, maxPosition: '$50,000', maxLeverage: 100, maintenanceMargin: '0.5%' },
			{ tier: 2, maxPosition: '$200,000', maxLeverage: 50, maintenanceMargin: '1.0%' },
			{ tier: 3, maxPosition: '$1,000,000', maxLeverage: 25, maintenanceMargin: '2.5%' }
		],
		signupSteps: [
			'Click our Phemex referral link to get a trial fund',
			'Register with email and password',
			'Verify your email address',
			'Complete KYC verification',
			'Enable 2FA for security',
			'Deposit funds via crypto or fiat',
			'Navigate to Contract trading',
			'Set leverage and open your first position'
		],
		faq: [
			{ q: 'Who founded Phemex?', a: 'Phemex was founded in 2019 by Jack Tao and a team of 8 former Morgan Stanley executives, bringing Wall Street expertise to crypto trading.' },
			{ q: 'What is Phemex Premium?', a: 'Phemex Premium membership eliminates spot trading fees entirely and offers enhanced features for a monthly subscription fee.' }
		]
	},
	{
		slug: 'interactive-brokers',
		name: 'Interactive Brokers',
		type: 'traditional',
		founded: 1978,
		headquarters: 'Greenwich, Connecticut, USA',
		rating: 4.7,
		maxLeverage: 4,
		makerFee: 0.0,
		takerFee: 0.0,
		marginTypes: ['Reg T Margin', 'Portfolio Margin'],
		tradingPairs: 0,
		tradingProducts: 'Stocks, Options, Futures, Forex, Bonds, Funds, Crypto',
		minDeposit: 0,
		depositMethods: ['Bank Transfer', 'Wire Transfer', 'ACH'],
		regulated: true,
		regulators: ['SEC', 'FINRA', 'FCA', 'ASIC', 'MAS', 'IIROC'],
		marginAssets: ['USD', 'EUR', 'GBP', 'Multi-currency'],
		interestRate: 'Fed Funds +0.5% to +1.5% (tiered)',
		liquidationFee: 'Varies',
		referralUrl: 'https://www.interactivebrokers.com/referral/MARGINTRADE',
		referralBonus: 'Up to $1,000 in IBKR stock',
		description: 'Interactive Brokers (IBKR) is the gold standard for margin trading in traditional markets. Founded in 1978 by Thomas Peterffy, a pioneer of electronic trading, IBKR offers the lowest margin rates in the industry and access to 150+ markets across 33 countries. With over $400 billion in client equity, it is trusted by both retail and institutional traders worldwide.',
		pros: [
			'Lowest margin rates in the industry (5.33% benchmark)',
			'Access to 150+ global markets',
			'Portfolio margin for experienced traders',
			'Professional-grade trading platforms (TWS)',
			'Extensive range of tradable products',
			'45+ years of operational history',
			'Regulated in major jurisdictions worldwide'
		],
		cons: [
			'Complex platform not ideal for beginners',
			'Trader Workstation (TWS) has steep learning curve',
			'Inactivity fees may apply',
			'Customer service can be impersonal',
			'Account approval process can take time'
		],
		features: { spotMargin: false, futuresMargin: true, optionsTrading: true, copyTrading: false, botTrading: false, stakingRewards: false, mobilApp: true, api: true },
		marginTiers: [
			{ tier: 'Reg T', maxPosition: 'Varies', maxLeverage: 2, maintenanceMargin: '25%' },
			{ tier: 'Portfolio Margin', maxPosition: 'Varies', maxLeverage: 4, maintenanceMargin: '15%' }
		],
		signupSteps: [
			'Visit Interactive Brokers through our referral link',
			'Click "Open Account" and select Individual or Entity account',
			'Fill in personal information and financial details',
			'Select trading permissions for margin, options, futures',
			'Upload identity documents for verification',
			'Fund your account via bank transfer (no minimum for IBKR Lite)',
			'Download Trader Workstation (TWS) or use web portal',
			'Apply for margin in Account Settings, then begin trading'
		],
		faq: [
			{ q: 'What are Interactive Brokers margin rates?', a: 'IBKR offers the lowest margin rates in the industry, starting at the Fed Funds benchmark rate +0.5% for balances over $1M, up to benchmark +1.5% for smaller balances. This is significantly lower than most brokers.' },
			{ q: 'What is IBKR Portfolio Margin?', a: 'Portfolio Margin at IBKR uses risk-based calculations instead of fixed percentages, potentially offering 6:1 leverage on diversified portfolios. It requires a minimum $110,000 account balance and approval.' },
			{ q: 'Is Interactive Brokers safe?', a: 'IBKR is one of the safest brokerages globally, publicly traded (NASDAQ: IBKR), regulated by SEC/FINRA in the US, and insured by SIPC for up to $500,000 per account.' },
			{ q: 'What is the minimum deposit for IBKR?', a: 'IBKR has no minimum deposit for individual accounts. However, Portfolio Margin requires $110,000 minimum equity, and some features require minimum account values.' }
		]
	},
	{
		slug: 'etoro',
		name: 'eToro',
		type: 'traditional',
		founded: 2007,
		headquarters: 'Tel Aviv, Israel',
		rating: 4.3,
		maxLeverage: 30,
		makerFee: 0.0,
		takerFee: 0.0,
		marginTypes: ['CFD Margin'],
		tradingPairs: 0,
		tradingProducts: 'Stocks, ETFs, Crypto, Forex, Commodities, Indices (CFDs)',
		minDeposit: 50,
		depositMethods: ['Credit Card', 'PayPal', 'Bank Transfer', 'Skrill', 'Neteller'],
		regulated: true,
		regulators: ['FCA (UK)', 'CySEC (Cyprus)', 'ASIC (Australia)', 'FinCEN (USA)'],
		marginAssets: ['USD', 'EUR', 'GBP'],
		interestRate: 'Overnight fees vary by asset',
		liquidationFee: 'Automatic at margin call level',
		referralUrl: 'https://www.etoro.com/register?ref=MARGINTRADE',
		referralBonus: '$10 welcome bonus',
		description: 'eToro is a pioneering social trading platform that revolutionized retail investing with its CopyTrader feature. Founded in 2007, it serves over 30 million users globally and offers margin trading through CFDs on stocks, crypto, forex, and commodities. eToro is particularly popular among beginners due to its intuitive interface.',
		pros: [
			'Industry-leading social/copy trading',
			'Very beginner-friendly interface',
			'Commission-free stock trading',
			'Wide range of assets (stocks, crypto, forex, commodities)',
			'Regulated in multiple major jurisdictions',
			'CopyPortfolios for diversified strategies',
			'Large and active trading community'
		],
		cons: [
			'Higher spreads compared to dedicated platforms',
			'Withdrawal fees ($5)',
			'Limited leverage in EU/UK (regulatory caps)',
			'CFD-only for most margin trades',
			'No MetaTrader support',
			'Overnight fees can add up'
		],
		features: { spotMargin: false, futuresMargin: false, optionsTrading: false, copyTrading: true, botTrading: false, stakingRewards: true, mobilApp: true, api: false },
		marginTiers: [
			{ tier: 'Stocks CFD', maxPosition: 'Varies', maxLeverage: 5, maintenanceMargin: '20%' },
			{ tier: 'Forex', maxPosition: 'Varies', maxLeverage: 30, maintenanceMargin: '3.33%' },
			{ tier: 'Crypto CFD', maxPosition: 'Varies', maxLeverage: 2, maintenanceMargin: '50%' },
			{ tier: 'Commodities', maxPosition: 'Varies', maxLeverage: 10, maintenanceMargin: '10%' }
		],
		signupSteps: [
			'Visit eToro through our referral link',
			'Click "Join Now" and fill in your details',
			'Verify your email address',
			'Complete profile and answer suitability questions',
			'Upload ID and proof of address for verification',
			'Deposit funds (minimum $50 in most regions)',
			'Search for an asset and click "Trade"',
			'Set your leverage, stop-loss, and take-profit levels'
		],
		faq: [
			{ q: 'What leverage does eToro offer?', a: 'eToro leverage varies by asset class and region. EU/UK users get up to 30x on forex, 5x on stocks, and 2x on crypto due to ESMA regulations. Professional accounts may access higher leverage.' },
			{ q: 'What is eToro CopyTrader?', a: 'CopyTrader lets you automatically replicate the trades of successful investors on eToro. You can allocate funds to copy a trader and all their positions are mirrored in your account proportionally.' },
			{ q: 'Is eToro safe?', a: 'eToro is regulated by FCA (UK), CySEC (EU), ASIC (Australia), and FinCEN (US). Client funds are segregated and accounts are protected by ICF in Europe (up to €20,000).' },
			{ q: 'Does eToro charge commissions?', a: 'eToro offers zero-commission stock and ETF trading. For CFDs, revenue comes from spreads and overnight fees. Crypto trading has a 1% fee.' }
		]
	},
	{
		slug: 'plus500',
		name: 'Plus500',
		type: 'traditional',
		founded: 2008,
		headquarters: 'Haifa, Israel',
		rating: 4.1,
		maxLeverage: 30,
		makerFee: 0.0,
		takerFee: 0.0,
		marginTypes: ['CFD Margin'],
		tradingPairs: 0,
		tradingProducts: 'Stocks, Indices, Forex, Commodities, Crypto, ETFs, Options (all as CFDs)',
		minDeposit: 100,
		depositMethods: ['Credit Card', 'Bank Transfer', 'PayPal', 'Apple Pay'],
		regulated: true,
		regulators: ['FCA (UK)', 'CySEC (Cyprus)', 'ASIC (Australia)', 'MAS (Singapore)', 'FSCA (South Africa)'],
		marginAssets: ['USD', 'EUR', 'GBP', 'AUD'],
		interestRate: 'Overnight funding varies',
		liquidationFee: 'Margin close out at 50% maintenance',
		referralUrl: 'https://www.plus500.com?ref=MARGINTRADE',
		referralBonus: 'Demo account with $40,000 virtual funds',
		description: 'Plus500 is a publicly traded (LSE: PLUS) CFD provider offering margin trading on over 2,800 instruments. Known for its clean, simple platform and robust risk management tools, Plus500 is popular among traders who want a straightforward CFD experience without the complexity of advanced platforms.',
		pros: [
			'Very simple and clean interface',
			'Publicly traded on London Stock Exchange',
			'Zero commission (spread-based)',
			'Guaranteed stop-loss available',
			'Free unlimited demo account',
			'Negative balance protection',
			'Wide range of CFD instruments'
		],
		cons: [
			'CFD-only (no real asset ownership)',
			'No copy/social trading',
			'No MetaTrader support',
			'Limited educational resources',
			'No API for algorithmic trading',
			'Spreads can be wide during volatility'
		],
		features: { spotMargin: false, futuresMargin: false, optionsTrading: true, copyTrading: false, botTrading: false, stakingRewards: false, mobilApp: true, api: false },
		marginTiers: [
			{ tier: 'Forex Majors', maxPosition: 'Varies', maxLeverage: 30, maintenanceMargin: '3.33%' },
			{ tier: 'Forex Minors', maxPosition: 'Varies', maxLeverage: 20, maintenanceMargin: '5%' },
			{ tier: 'Indices', maxPosition: 'Varies', maxLeverage: 20, maintenanceMargin: '5%' },
			{ tier: 'Commodities', maxPosition: 'Varies', maxLeverage: 10, maintenanceMargin: '10%' },
			{ tier: 'Stocks', maxPosition: 'Varies', maxLeverage: 5, maintenanceMargin: '20%' },
			{ tier: 'Crypto', maxPosition: 'Varies', maxLeverage: 2, maintenanceMargin: '50%' }
		],
		signupSteps: [
			'Visit Plus500 via our link',
			'Click "Start Trading" and register with email',
			'You can start with a demo account immediately',
			'For real trading, complete identity verification',
			'Deposit a minimum of $100',
			'Search for an instrument and click Trade',
			'Set your position size, leverage, and stops',
			'Monitor your margin level and manage positions'
		],
		faq: [
			{ q: 'Is Plus500 a good broker?', a: 'Plus500 is a legitimate, publicly traded (LSE: PLUS) and well-regulated CFD provider. It\'s best suited for traders who want a simple, no-frills trading experience.' },
			{ q: 'Does Plus500 offer real stocks?', a: 'Plus500 primarily offers CFDs. Through Plus500 Invest (available in some regions), real stock trading is available. For most margin trading, positions are CFDs.' },
			{ q: 'What is Plus500 guaranteed stop loss?', a: 'Plus500 offers a guaranteed stop-loss feature that ensures your position closes at exactly the price you set, regardless of market gaps. An additional spread charge applies for this protection.' }
		]
	},
	{
		slug: 'ig-markets',
		name: 'IG Markets',
		type: 'traditional',
		founded: 1974,
		headquarters: 'London, UK',
		rating: 4.6,
		maxLeverage: 30,
		makerFee: 0.0,
		takerFee: 0.0,
		marginTypes: ['CFD Margin', 'Spread Betting (UK)'],
		tradingPairs: 0,
		tradingProducts: 'Stocks, Indices, Forex, Commodities, Crypto, Options, Bonds (17,000+ instruments)',
		minDeposit: 0,
		depositMethods: ['Credit Card', 'Bank Transfer', 'PayPal'],
		regulated: true,
		regulators: ['FCA (UK)', 'ASIC (Australia)', 'BaFin (Germany)', 'FINMA (Switzerland)', 'MAS (Singapore)', 'CFTC/NFA (USA)'],
		marginAssets: ['USD', 'EUR', 'GBP', 'AUD', 'Multi-currency'],
		interestRate: 'Tom-next rate + IG fee',
		liquidationFee: 'Margin close out at 50% maintenance',
		referralUrl: 'https://www.ig.com/signup?ref=MARGINTRADE',
		referralBonus: 'Free demo with $20,000 virtual funds',
		description: 'IG Markets (IG Group) is the world\'s oldest and largest CFD provider, founded in 1974 — that\'s 50+ years of operation. Listed on the London Stock Exchange (LON: IGG) with a market cap over $3 billion, IG offers margin trading on over 17,000 instruments across every major asset class. It\'s the benchmark for quality in the CFD industry.',
		pros: [
			'50+ years of operation (founded 1974)',
			'17,000+ tradable instruments',
			'Publicly traded on LSE (£3B+ market cap)',
			'Available in USA (limited products via Nadex/tastytrade)',
			'Professional-grade platforms including MT4',
			'Tax-free spread betting for UK residents',
			'Excellent educational resources',
			'Award-winning platform'
		],
		cons: [
			'Higher spreads than some competitors',
			'Inactivity fees ($12/month after 2 years)',
			'Limited product range for US clients',
			'No copy/social trading',
			'Can be overwhelming for absolute beginners'
		],
		features: { spotMargin: false, futuresMargin: true, optionsTrading: true, copyTrading: false, botTrading: false, stakingRewards: false, mobilApp: true, api: true },
		marginTiers: [
			{ tier: 'Forex Majors', maxPosition: 'Varies', maxLeverage: 30, maintenanceMargin: '3.33%' },
			{ tier: 'Indices', maxPosition: 'Varies', maxLeverage: 20, maintenanceMargin: '5%' },
			{ tier: 'Commodities', maxPosition: 'Varies', maxLeverage: 10, maintenanceMargin: '10%' },
			{ tier: 'Stocks', maxPosition: 'Varies', maxLeverage: 5, maintenanceMargin: '20%' },
			{ tier: 'Crypto', maxPosition: 'Varies', maxLeverage: 2, maintenanceMargin: '50%' }
		],
		signupSteps: [
			'Visit IG Markets through our link',
			'Click "Create Account" and fill in your details',
			'Answer financial suitability questions',
			'Verify identity with ID and proof of address',
			'Try the free demo account with $20,000 virtual funds',
			'Fund your live account via bank transfer or card',
			'Choose your instrument and market',
			'Set leverage, stop-loss, and take-profit, then place your trade'
		],
		faq: [
			{ q: 'Is IG Markets the oldest broker?', a: 'IG Group was founded in 1974 by Stuart Wheeler as the world\'s first financial spread betting firm. With over 50 years of history, it is one of the oldest and most established trading platforms globally.' },
			{ q: 'What is spread betting on IG?', a: 'Spread betting is available to UK and Ireland residents and allows you to speculate on price movements without owning the underlying asset. Profits are tax-free in the UK, making it a unique advantage.' },
			{ q: 'Is IG available in the USA?', a: 'IG offers limited services in the USA through its acquisition of tastytrade. US clients can trade options and futures but not traditional CFDs due to regulatory restrictions.' },
			{ q: 'What platforms does IG support?', a: 'IG offers its proprietary web/desktop platform, mobile app, MetaTrader 4 (MT4), ProRealTime for advanced charting, and L2 Dealer for direct market access.' }
		]
	},
	{
		slug: 'cmc-markets',
		name: 'CMC Markets',
		type: 'traditional',
		founded: 1989,
		headquarters: 'London, UK',
		rating: 4.4,
		maxLeverage: 30,
		makerFee: 0.0,
		takerFee: 0.0,
		marginTypes: ['CFD Margin', 'Spread Betting (UK)'],
		tradingPairs: 0,
		tradingProducts: 'Stocks, Indices, Forex, Commodities, Crypto, Treasuries (12,000+ instruments)',
		minDeposit: 0,
		depositMethods: ['Credit Card', 'Bank Transfer', 'PayPal'],
		regulated: true,
		regulators: ['FCA (UK)', 'ASIC (Australia)', 'BaFin (Germany)', 'MAS (Singapore)'],
		marginAssets: ['USD', 'EUR', 'GBP', 'AUD'],
		interestRate: 'Holding costs vary by instrument',
		liquidationFee: 'Margin close out at 50% maintenance',
		referralUrl: 'https://www.cmcmarkets.com/signup?ref=MARGINTRADE',
		referralBonus: 'Free demo account',
		description: 'CMC Markets is a publicly traded (LSE: CMCX) global CFD and spread betting provider founded in 1989. Known for its award-winning Next Generation trading platform, CMC offers margin trading on over 12,000 instruments with tight spreads and excellent analytical tools.',
		pros: [
			'Award-winning Next Generation platform',
			'12,000+ instruments available',
			'35+ years of operation',
			'Publicly traded (LSE: CMCX)',
			'Excellent charting and analysis tools',
			'Competitive spreads',
			'Free guaranteed stop-loss on some instruments',
			'No minimum deposit'
		],
		cons: [
			'Limited product range outside CFDs',
			'No copy trading feature',
			'Inactivity fee after 12 months ($10/month)',
			'Not available in USA',
			'Can be complex for beginners'
		],
		features: { spotMargin: false, futuresMargin: true, optionsTrading: false, copyTrading: false, botTrading: false, stakingRewards: false, mobilApp: true, api: true },
		marginTiers: [
			{ tier: 'Forex Majors', maxPosition: 'Varies', maxLeverage: 30, maintenanceMargin: '3.33%' },
			{ tier: 'Indices', maxPosition: 'Varies', maxLeverage: 20, maintenanceMargin: '5%' },
			{ tier: 'Commodities', maxPosition: 'Varies', maxLeverage: 10, maintenanceMargin: '10%' },
			{ tier: 'Stocks', maxPosition: 'Varies', maxLeverage: 5, maintenanceMargin: '20%' },
			{ tier: 'Crypto', maxPosition: 'Varies', maxLeverage: 2, maintenanceMargin: '50%' }
		],
		signupSteps: [
			'Visit CMC Markets via our link',
			'Click "Apply Now" for a live account or try the demo',
			'Fill in your personal and financial information',
			'Complete identity verification',
			'Deposit funds (no minimum required)',
			'Download the Next Generation platform or use web',
			'Search for your desired market',
			'Set your position size, leverage, and risk management orders'
		],
		faq: [
			{ q: 'What is CMC Markets Next Generation platform?', a: 'Next Generation is CMC\'s proprietary, award-winning trading platform featuring advanced charting with 115+ technical indicators, client sentiment data, pattern recognition, and customizable layouts.' },
			{ q: 'Is CMC Markets safe?', a: 'CMC Markets is publicly traded on the London Stock Exchange, regulated by FCA, ASIC, BaFin, and MAS, and has been operating since 1989. Client funds are held in segregated bank accounts.' },
			{ q: 'Does CMC Markets offer spread betting?', a: 'Yes, CMC Markets offers tax-free spread betting for UK and Ireland residents alongside its CFD products.' }
		]
	},
	{
		slug: 'dydx',
		name: 'dYdX',
		type: 'crypto',
		founded: 2017,
		headquarters: 'Decentralized (Cosmos)',
		rating: 4.2,
		maxLeverage: 20,
		makerFee: 0.02,
		takerFee: 0.05,
		marginTypes: ['Cross Margin', 'Isolated Margin'],
		tradingPairs: 180,
		minDeposit: 0,
		depositMethods: ['Crypto (USDC)', 'Bridge from Ethereum'],
		regulated: false,
		regulators: ['Decentralized — no central authority'],
		marginAssets: ['USDC'],
		interestRate: 'Funding rate based',
		liquidationFee: '1.0%',
		referralUrl: 'https://dydx.exchange/r/MARGINTRADE',
		referralBonus: 'Fee discounts for referrals',
		description: 'dYdX is the leading decentralized perpetual exchange, operating on its own Cosmos-based blockchain (dYdX Chain). Unlike centralized exchanges, dYdX offers non-custodial trading — you maintain control of your funds at all times. With an open-source order book and validator network, dYdX represents the future of decentralized margin trading.',
		pros: [
			'Fully decentralized and non-custodial',
			'No KYC required',
			'Open-source and transparent',
			'Own blockchain (dYdX Chain) for speed',
			'Community governance via DYDX token',
			'Resistant to exchange hacks/collapses',
			'Available globally (no geo-restrictions by protocol)'
		],
		cons: [
			'Lower liquidity than top centralized exchanges',
			'Limited trading pairs (~180)',
			'Maximum 20x leverage (lower than CEXs)',
			'Requires crypto wallet setup (not beginner-friendly)',
			'No fiat deposit options',
			'Regulatory gray area in some jurisdictions',
			'Smart contract risk'
		],
		features: { spotMargin: false, futuresMargin: true, optionsTrading: false, copyTrading: false, botTrading: true, stakingRewards: true, mobilApp: true, api: true },
		marginTiers: [
			{ tier: 1, maxPosition: '$100,000', maxLeverage: 20, maintenanceMargin: '3%' },
			{ tier: 2, maxPosition: '$500,000', maxLeverage: 15, maintenanceMargin: '4%' },
			{ tier: 3, maxPosition: '$2,000,000', maxLeverage: 10, maintenanceMargin: '5%' }
		],
		signupSteps: [
			'Install a compatible crypto wallet (e.g., MetaMask, Keplr)',
			'Visit dYdX through our referral link',
			'Connect your wallet to the dYdX interface',
			'Deposit USDC to your dYdX account',
			'Navigate to the trading interface',
			'Select your trading pair and leverage (up to 20x)',
			'Place your order — your funds remain in your control',
			'Manage positions and withdraw anytime'
		],
		faq: [
			{ q: 'Is dYdX truly decentralized?', a: 'Yes. dYdX v4 runs on its own Cosmos-based blockchain with independent validators. The order book, matching engine, and settlement are all on-chain. No single entity controls the protocol.' },
			{ q: 'Do I need KYC to use dYdX?', a: 'No. dYdX is a decentralized protocol that does not require identity verification. You trade directly from your crypto wallet.' },
			{ q: 'Is dYdX legal in the USA?', a: 'The dYdX protocol is accessible globally, but the dYdX Trading Inc. front-end has geo-restricted US users. US traders may access the protocol through alternative front-ends, though regulatory compliance remains a personal responsibility.' },
			{ q: 'How does dYdX compare to centralized exchanges?', a: 'dYdX offers lower leverage (20x max) and fewer pairs than CEXs, but provides non-custodial trading, no KYC, and elimination of exchange counterparty risk.' }
		]
	},
	{
		slug: 'htx',
		name: 'HTX (Huobi)',
		type: 'crypto',
		founded: 2013,
		headquarters: 'Seychelles',
		rating: 4.1,
		maxLeverage: 200,
		makerFee: 0.02,
		takerFee: 0.05,
		marginTypes: ['Cross Margin', 'Isolated Margin'],
		tradingPairs: 900,
		minDeposit: 0,
		depositMethods: ['Crypto', 'Credit Card', 'P2P', 'Bank Transfer'],
		regulated: true,
		regulators: ['Various regional licenses'],
		marginAssets: ['BTC', 'ETH', 'USDT', 'HT', '40+ assets'],
		interestRate: '0.01% - 0.05% daily',
		liquidationFee: '0.5%',
		referralUrl: 'https://www.htx.com/invite/en-us/1f?invite_code=MARGINTRADE',
		referralBonus: '$170 welcome bonus',
		description: 'HTX (formerly Huobi Global) is one of the longest-running cryptocurrency exchanges, founded in 2013. After rebranding to HTX in 2023, the exchange continues to offer comprehensive margin trading services including cross-margin with up to 200x leverage on futures. With a decade of operational history, HTX serves millions of users across 100+ countries.',
		pros: [
			'Established since 2013 (10+ years)',
			'Up to 200x leverage on futures',
			'Wide range of margin trading pairs',
			'Cross-margin lending market',
			'HT token for fee discounts',
			'Multiple margin account types',
			'Available in most regions'
		],
		cons: [
			'Rebranding confusion (Huobi → HTX)',
			'Reduced market share in recent years',
			'Not available in USA',
			'Customer support inconsistency',
			'Concerns about reserves transparency',
			'Lower liquidity than top 3 exchanges'
		],
		features: { spotMargin: true, futuresMargin: true, optionsTrading: false, copyTrading: true, botTrading: true, stakingRewards: true, mobilApp: true, api: true },
		marginTiers: [
			{ tier: 1, maxPosition: '$50,000', maxLeverage: 200, maintenanceMargin: '0.5%' },
			{ tier: 2, maxPosition: '$200,000', maxLeverage: 100, maintenanceMargin: '1.0%' },
			{ tier: 3, maxPosition: '$1,000,000', maxLeverage: 50, maintenanceMargin: '2.0%' }
		],
		signupSteps: [
			'Visit HTX through our referral link for welcome bonuses',
			'Register with your email or phone number',
			'Complete email/SMS verification',
			'Pass KYC identity verification',
			'Enable 2FA for account security',
			'Deposit funds via crypto or fiat methods',
			'Navigate to Futures or Margin trading section',
			'Select leverage and begin trading'
		],
		faq: [
			{ q: 'Is HTX the same as Huobi?', a: 'Yes. Huobi Global rebranded to HTX in September 2023. The platform, team, and services remain largely the same under the new name.' },
			{ q: 'Is HTX safe to use?', a: 'HTX has operated since 2013 with a generally positive security record. However, there have been concerns about transparency following leadership changes. Always use 2FA and only deposit what you can afford to trade.' },
			{ q: 'What leverage does HTX offer?', a: 'HTX offers up to 200x leverage on select USDT-M futures contracts and up to 5x on spot margin trading.' }
		]
	},
	{
		slug: 'xtb',
		name: 'XTB',
		type: 'traditional',
		founded: 2002,
		headquarters: 'Warsaw, Poland',
		rating: 4.4,
		maxLeverage: 30,
		makerFee: 0.0,
		takerFee: 0.0,
		marginTypes: ['CFD Margin'],
		tradingPairs: 0,
		tradingProducts: 'Stocks, ETFs, Forex, Indices, Commodities, Crypto (5,800+ instruments as CFDs)',
		minDeposit: 0,
		depositMethods: ['Bank Transfer', 'Credit Card', 'PayPal', 'Skrill'],
		regulated: true,
		regulators: ['FCA (UK)', 'KNF (Poland)', 'CySEC (Cyprus)', 'FSCA (South Africa)', 'DFSA (Dubai)'],
		marginAssets: ['USD', 'EUR', 'GBP', 'PLN'],
		interestRate: 'Overnight swap rates vary by instrument',
		liquidationFee: 'Margin close out at 50% maintenance',
		referralUrl: 'https://www.xtb.com/referral/MARGINTRADE',
		referralBonus: 'Zero commission stocks & ETFs',
		description: 'XTB is a publicly traded (WSE: XTB) European online brokerage founded in 2002. Regulated across multiple EU jurisdictions, XTB offers zero-commission stock and ETF trading alongside CFD margin trading on 5,800+ instruments. Its award-winning xStation 5 platform is praised for its balance of power and usability.',
		pros: [
			'Zero commission on real stocks & ETFs',
			'Publicly traded (Warsaw Stock Exchange)',
			'Award-winning xStation 5 platform',
			'Regulated by FCA, KNF, CySEC',
			'No minimum deposit',
			'Excellent educational content (Trading Academy)',
			'5,800+ instruments available',
			'Negative balance protection'
		],
		cons: [
			'Not available in USA',
			'Limited product range vs Interactive Brokers',
			'CFD-only for margin trading',
			'Inactivity fee after 12 months',
			'No MetaTrader 5 support',
			'Limited cryptocurrency selection'
		],
		features: { spotMargin: false, futuresMargin: false, optionsTrading: false, copyTrading: false, botTrading: false, stakingRewards: false, mobilApp: true, api: true },
		marginTiers: [
			{ tier: 'Forex Majors', maxPosition: 'Varies', maxLeverage: 30, maintenanceMargin: '3.33%' },
			{ tier: 'Forex Minors', maxPosition: 'Varies', maxLeverage: 20, maintenanceMargin: '5%' },
			{ tier: 'Indices', maxPosition: 'Varies', maxLeverage: 20, maintenanceMargin: '5%' },
			{ tier: 'Commodities', maxPosition: 'Varies', maxLeverage: 10, maintenanceMargin: '10%' },
			{ tier: 'Stocks CFD', maxPosition: 'Varies', maxLeverage: 5, maintenanceMargin: '20%' },
			{ tier: 'Crypto CFD', maxPosition: 'Varies', maxLeverage: 2, maintenanceMargin: '50%' }
		],
		signupSteps: [
			'Visit XTB through our link',
			'Click "Open Account" and fill in your details',
			'Complete the financial suitability questionnaire',
			'Upload ID for verification',
			'Deposit funds (no minimum required)',
			'Download xStation 5 or use the web platform',
			'Search for your instrument and set leverage',
			'Place your trade with stop-loss and take-profit'
		],
		faq: [
			{ q: 'Is XTB a good broker?', a: 'XTB is a well-regulated, publicly traded broker with over 20 years of history. It is especially strong for European traders with its zero-commission stock trading and award-winning platform.' },
			{ q: 'Does XTB charge commissions?', a: 'XTB offers zero-commission trading on real stocks and ETFs (up to €100,000 monthly turnover). CFD trading is spread-based with no direct commissions.' },
			{ q: 'Is XTB available in the USA?', a: 'No, XTB does not currently serve US clients. It is primarily available in Europe, the Middle East, and select other regions.' },
			{ q: 'What platform does XTB use?', a: 'XTB uses its proprietary xStation 5 platform, available as web, desktop, and mobile apps. It features advanced charting, market sentiment data, and a built-in trading calculator.' }
		]
	},
	{
		slug: 'robinhood',
		name: 'Robinhood',
		type: 'traditional',
		founded: 2013,
		headquarters: 'Menlo Park, California, USA',
		rating: 3.9,
		maxLeverage: 2,
		makerFee: 0.0,
		takerFee: 0.0,
		marginTypes: ['Reg T Margin'],
		tradingPairs: 0,
		tradingProducts: 'Stocks, ETFs, Options, Crypto (limited margin on stocks only)',
		minDeposit: 0,
		depositMethods: ['Bank Transfer', 'ACH', 'Wire Transfer'],
		regulated: true,
		regulators: ['SEC', 'FINRA', 'SIPC'],
		marginAssets: ['USD'],
		interestRate: '5.75% (Gold) — 12% (standard)',
		liquidationFee: 'Standard margin call procedures',
		referralUrl: 'https://robinhood.com/refer/MARGINTRADE',
		referralBonus: 'Free stock on signup',
		description: 'Robinhood democratized stock trading with its commission-free model and mobile-first design. While primarily known for beginner-friendly stock and crypto trading, Robinhood offers margin trading through its Robinhood Gold subscription ($5/month) with lower interest rates (5.75%) compared to traditional brokers. It is a simple entry point for US investors who want basic margin capabilities.',
		pros: [
			'Zero commission trading',
			'Very beginner-friendly mobile app',
			'Low margin rates with Gold (5.75%)',
			'Fractional share trading',
			'SIPC insured',
			'Available to most US residents',
			'Simple, clean interface',
			'Instant deposits'
		],
		cons: [
			'Maximum 2x leverage (Reg T only)',
			'No futures or advanced derivatives',
			'Limited order types',
			'No international markets',
			'Payment for order flow (PFOF) concerns',
			'Limited research and analysis tools',
			'Controversial history (GME restrictions)',
			'US only'
		],
		features: { spotMargin: false, futuresMargin: false, optionsTrading: true, copyTrading: false, botTrading: false, stakingRewards: false, mobilApp: true, api: false },
		marginTiers: [
			{ tier: 'Reg T Standard', maxPosition: 'Varies', maxLeverage: 2, maintenanceMargin: '25-50%' }
		],
		signupSteps: [
			'Download the Robinhood app or visit robinhood.com',
			'Sign up with your email and personal details',
			'Verify your identity (SSN required — US only)',
			'Link your bank account for deposits',
			'Upgrade to Robinhood Gold ($5/month) for margin trading',
			'Deposit funds (instant deposits available)',
			'Enable margin trading in account settings',
			'Start trading stocks on margin'
		],
		faq: [
			{ q: 'How does Robinhood margin work?', a: 'Robinhood offers margin through its Gold subscription ($5/month). You can borrow up to 2x your account value (Reg T margin). The first $1,000 of margin is included with Gold, with additional margin at 5.75% interest.' },
			{ q: 'What is Robinhood Gold margin rate?', a: 'Robinhood Gold members pay 5.75% annual interest on margin borrowing above $1,000. This is competitive compared to traditional brokers who often charge 8-13%.' },
			{ q: 'Is Robinhood safe for margin trading?', a: 'Robinhood is SEC/FINRA regulated and SIPC insured (up to $500,000). However, margin trading itself carries risk regardless of platform. Start with small amounts and understand the risks.' },
			{ q: 'Can I day trade on Robinhood margin?', a: 'Yes, but the Pattern Day Trader rule applies: if you make 4+ day trades in 5 business days, you need at least $25,000 in your account.' }
		]
	}
];

export function getExchange(slug) {
	return exchanges.find(e => e.slug === slug);
}

export function getCryptoExchanges() {
	return exchanges.filter(e => e.type === 'crypto');
}

export function getTraditionalExchanges() {
	return exchanges.filter(e => e.type === 'traditional');
}

export function getAllExchanges() {
	return exchanges;
}

export function getForexExchanges() {
	return exchanges.filter(e => e.type === 'traditional' && ['ig-markets', 'xtb', 'plus500', 'etoro'].includes(e.slug));
}

export function getStockExchanges() {
	return exchanges.filter(e => e.type === 'traditional' && ['interactive-brokers', 'robinhood', 'etoro'].includes(e.slug));
}
