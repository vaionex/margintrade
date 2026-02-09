export const countries = [
	{
		slug: 'usa',
		name: 'United States',
		flag: '🇺🇸',
		metaDescription: 'Best margin trading platforms available in the USA. Understand US regulations, PDT rules, and find licensed exchanges for leveraged trading.',
		regulation: {
			overview: 'Margin trading in the USA is heavily regulated by the SEC, FINRA, and CFTC. Stock margin requires Reg T compliance (50% initial margin). Crypto margin is limited to regulated platforms like Kraken. Offshore exchanges like Binance and Bybit are not available to US residents.',
			regulator: 'SEC, FINRA, CFTC, NFA',
			status: 'Legal with restrictions'
		},
		topPlatforms: ['kraken', 'interactive-brokers', 'robinhood'],
		restrictions: [
			'Pattern Day Trader (PDT) rule: $25,000 minimum for active margin day trading',
			'Reg T limits stock margin to 2x leverage (50% initial margin)',
			'Most offshore crypto exchanges are not available (Binance, Bybit, OKX)',
			'Forex leverage capped at 50:1 for major pairs, 20:1 for minors',
			'Crypto derivatives access limited to Kraken, CME, and select platforms'
		],
		tax: {
			summary: 'Short-term capital gains taxed as ordinary income (10-37%). Long-term gains (held >1 year) taxed at 0-20%. Crypto treated as property. Section 1256 contracts get favorable 60/40 treatment. Losses can offset gains with $3,000 annual deduction.',
			rate: '0-37% depending on holding period and income'
		}
	},
	{
		slug: 'uk',
		name: 'United Kingdom',
		flag: '🇬🇧',
		metaDescription: 'Margin trading in the UK: regulations, platforms, and tax-free spread betting. Find the best FCA-regulated brokers for leveraged trading.',
		regulation: {
			overview: 'The UK has a well-regulated margin trading environment overseen by the FCA. Retail leverage is capped under FCA rules (30:1 forex, 2:1 crypto). A unique advantage is spread betting, which is tax-free. Crypto CFDs are banned for retail consumers since January 2021.',
			regulator: 'FCA (Financial Conduct Authority)',
			status: 'Legal, well-regulated'
		},
		topPlatforms: ['ig-markets', 'interactive-brokers', 'etoro'],
		restrictions: [
			'Crypto CFDs banned for retail traders since January 2021',
			'Leverage caps: 30:1 forex, 20:1 indices, 5:1 stocks, 2:1 crypto',
			'Spread betting only available to UK/Ireland residents',
			'Professional client status available for higher leverage (must qualify)',
			'FCA-regulated platforms required'
		],
		tax: {
			summary: 'Capital Gains Tax at 10% (basic rate) or 20% (higher rate) above £6,000 annual allowance. Spread betting profits are TAX-FREE. CFD profits subject to CGT. Margin interest may be deductible.',
			rate: '10-20% CGT (spread betting: 0%)'
		}
	},
	{
		slug: 'eu',
		name: 'European Union',
		flag: '🇪🇺',
		metaDescription: 'Margin trading in the EU: ESMA regulations, leverage limits, and the best platforms for European traders.',
		regulation: {
			overview: 'The EU regulates margin trading through ESMA (European Securities and Markets Authority). Leverage is capped for retail traders: 30:1 for forex, 2:1 for crypto CFDs. Individual member states may have additional rules. Professional accounts can access higher leverage.',
			regulator: 'ESMA + National regulators (BaFin, AMF, CySEC, etc.)',
			status: 'Legal with ESMA leverage limits'
		},
		topPlatforms: ['interactive-brokers', 'etoro', 'ig-markets'],
		restrictions: [
			'ESMA leverage caps: 30:1 forex, 20:1 indices, 10:1 commodities, 5:1 stocks, 2:1 crypto',
			'Negative balance protection mandatory for retail clients',
			'Risk warnings required on all marketing materials',
			'Binary options banned for retail traders',
			'Professional client reclassification available for higher leverage'
		],
		tax: {
			summary: 'Varies significantly by member state. Most countries apply capital gains tax on trading profits. Some use flat rates (e.g., Germany ~26.4%), others use progressive rates. Consult a local tax advisor.',
			rate: 'Varies by country (15-45%)'
		}
	},
	{
		slug: 'australia',
		name: 'Australia',
		flag: '🇦🇺',
		metaDescription: 'Margin trading in Australia: ASIC regulations, available platforms, and tax implications for Australian margin traders.',
		regulation: {
			overview: 'Australia regulates margin trading through ASIC (Australian Securities and Investments Commission). From March 2021, ASIC imposed leverage limits similar to ESMA for retail CFD traders. Crypto exchanges operate under AUSTRAC.',
			regulator: 'ASIC, AUSTRAC',
			status: 'Legal, ASIC-regulated'
		},
		topPlatforms: ['interactive-brokers', 'ig-markets', 'etoro'],
		restrictions: [
			'ASIC leverage caps: 30:1 forex, 20:1 indices, 15:1 commodities, 5:1 stocks, 2:1 crypto',
			'Negative balance protection mandatory',
			'CFD providers must be ASIC-licensed',
			'Professional client accounts available for higher leverage',
			'Crypto exchanges must register with AUSTRAC'
		],
		tax: {
			summary: 'Trading profits are subject to Capital Gains Tax. Assets held >12 months get a 50% CGT discount. Short-term gains taxed at marginal income tax rate (up to 45%). Crypto is treated as a CGT asset.',
			rate: '0-45% (50% discount for assets held >12 months)'
		}
	},
	{
		slug: 'singapore',
		name: 'Singapore',
		flag: '🇸🇬',
		metaDescription: 'Margin trading in Singapore: MAS regulations, available platforms, and the tax-friendly environment for traders.',
		regulation: {
			overview: 'Singapore is regulated by MAS (Monetary Authority of Singapore). The city-state has a progressive approach to crypto regulation with the Payment Services Act. Several major exchanges (Bybit, Bitget) are headquartered in Singapore.',
			regulator: 'MAS (Monetary Authority of Singapore)',
			status: 'Legal, progressive regulation'
		},
		topPlatforms: ['interactive-brokers', 'ig-markets', 'bybit'],
		restrictions: [
			'MAS-regulated platforms required for fiat-to-crypto services',
			'Crypto advertising restricted to the public',
			'Leverage limits for retail: 50:1 forex (MAS-regulated brokers)',
			'Professional investors may access higher leverage',
			'Payment Services Act covers crypto exchanges'
		],
		tax: {
			summary: 'Singapore has NO capital gains tax. Trading profits from margin trading are generally tax-free unless you are classified as carrying on a trade or business. This makes Singapore one of the most tax-friendly jurisdictions for traders.',
			rate: '0% (no capital gains tax)'
		}
	},
	{
		slug: 'uae',
		name: 'United Arab Emirates',
		flag: '🇦🇪',
		metaDescription: 'Margin trading in the UAE: VARA and DFSA regulations, Dubai crypto hub status, and the best platforms for UAE traders.',
		regulation: {
			overview: 'The UAE has emerged as a major crypto hub, particularly Dubai. VARA (Virtual Assets Regulatory Authority) in Dubai regulates crypto exchanges. Several major exchanges (Bybit, OKX, Binance) have obtained VARA licenses. Traditional trading is regulated by SCA and DFSA.',
			regulator: 'VARA (Dubai), SCA, DFSA (DIFC)',
			status: 'Legal, crypto-friendly hub'
		},
		topPlatforms: ['bybit', 'binance', 'interactive-brokers'],
		restrictions: [
			'VARA license required for crypto exchanges operating in Dubai',
			'DFSA regulates financial services in DIFC',
			'Forex and CFD brokers must be SCA or DFSA licensed',
			'No specific leverage caps (depends on regulator)',
			'Rapidly evolving regulatory framework'
		],
		tax: {
			summary: 'The UAE has NO personal income tax and NO capital gains tax. Trading profits from margin trading are tax-free for individuals. A 9% corporate tax applies to businesses with profits over AED 375,000, but individual trading remains untaxed.',
			rate: '0% (no personal income or capital gains tax)'
		}
	},
	{
		slug: 'canada',
		name: 'Canada',
		flag: '🇨🇦',
		metaDescription: 'Margin trading in Canada: CSA/IIROC regulations, available platforms, and tax treatment for Canadian traders.',
		regulation: {
			overview: 'Canada regulates financial markets through provincial securities regulators coordinated by the CSA (Canadian Securities Administrators). IIROC oversees investment dealers. Crypto exchanges must register with provincial regulators.',
			regulator: 'CSA, IIROC, Provincial regulators',
			status: 'Legal, provincially regulated'
		},
		topPlatforms: ['interactive-brokers', 'kraken', 'ig-markets'],
		restrictions: [
			'Crypto exchanges must register with provincial securities regulators',
			'Several exchanges (Binance, Bybit) have exited or restricted Canadian services',
			'Stock margin follows IIROC rules (similar to US Reg T)',
			'Forex leverage varies by broker (typically 50:1 max)',
			'IIROC member firms required for stock margin trading'
		],
		tax: {
			summary: 'Only 50% of capital gains are taxable, included as income at your marginal tax rate. Day trading profits may be treated as business income (100% taxable). Crypto treated as a commodity for tax purposes.',
			rate: '25-27% effective on capital gains (50% inclusion rate)'
		}
	},
	{
		slug: 'india',
		name: 'India',
		flag: '🇮🇳',
		metaDescription: 'Margin trading in India: SEBI regulations, available platforms, and the 30% crypto tax. What Indian traders need to know.',
		regulation: {
			overview: 'India regulates traditional margin trading through SEBI (Securities and Exchange Board of India). Crypto regulation is evolving, with a 30% tax on crypto gains and 1% TDS on crypto transactions. International crypto exchanges operate in a regulatory gray area.',
			regulator: 'SEBI, RBI',
			status: 'Legal for stocks; crypto in gray area'
		},
		topPlatforms: ['interactive-brokers', 'binance', 'kraken'],
		restrictions: [
			'SEBI regulates stock market margin trading (max 5x for intraday)',
			'30% flat tax on all crypto gains (no deductions except acquisition cost)',
			'1% TDS on all crypto transactions above ₹10,000',
			'Crypto losses cannot be offset against other income',
			'Forex trading restricted to INR pairs through SEBI-registered brokers',
			'International exchanges operate in regulatory uncertainty'
		],
		tax: {
			summary: 'Stock trading: Short-term (held <1 year) at 15%, Long-term at 10% above ₹1 lakh. Crypto: Flat 30% tax on all gains with 1% TDS on transfers. Crypto losses cannot offset other income or be carried forward.',
			rate: '10-30% (crypto: flat 30%)'
		}
	},
	{
		slug: 'japan',
		name: 'Japan',
		flag: '🇯🇵',
		metaDescription: 'Margin trading in Japan: FSA regulations, leverage limits, and the best platforms for Japanese traders.',
		regulation: {
			overview: 'Japan has one of the most comprehensive crypto regulatory frameworks globally, overseen by the FSA (Financial Services Agency) and JFSA. All crypto exchanges must be registered. Leverage on crypto margin trading was reduced to 2x in 2020.',
			regulator: 'FSA/JFSA (Financial Services Agency)',
			status: 'Legal, strictly regulated'
		},
		topPlatforms: ['binance', 'interactive-brokers', 'ig-markets'],
		restrictions: [
			'Crypto margin leverage capped at 2x (reduced from 4x in 2020)',
			'All crypto exchanges must register with FSA',
			'Forex leverage capped at 25:1',
			'Strict customer protection requirements',
			'Self-regulatory organization (JVCEA) oversees crypto industry'
		],
		tax: {
			summary: 'Crypto profits classified as "miscellaneous income" and taxed at progressive rates (15-55% including local taxes). Forex and stock trading have separate flat rates. High tax rates are a major pain point for Japanese crypto traders.',
			rate: '15-55% (crypto as miscellaneous income)'
		}
	},
	{
		slug: 'global',
		name: 'Global / Offshore',
		flag: '🌍',
		metaDescription: 'Global margin trading platforms with no geographic restrictions. Compare offshore exchanges offering high leverage to traders worldwide.',
		regulation: {
			overview: 'Several major crypto exchanges operate globally with minimal geographic restrictions. While they may hold licenses in certain jurisdictions, they primarily serve traders in countries without strict crypto regulations. Traders should understand the risks of using less-regulated platforms.',
			regulator: 'Various / Minimal oversight',
			status: 'Available globally (varies by platform)'
		},
		topPlatforms: ['binance', 'bybit', 'okx', 'mexc', 'bitget'],
		restrictions: [
			'KYC requirements vary by platform and trading limits',
			'Some platforms restrict specific countries (USA, UK, Canada)',
			'No deposit insurance or government-backed protection',
			'Terms of service may change with evolving regulations',
			'Traders are responsible for compliance with local laws'
		],
		tax: {
			summary: 'Tax obligations depend on your country of residence, not where the exchange is located. Most countries require reporting of all trading profits regardless of which platform you use. Use of offshore exchanges does not exempt you from local tax obligations.',
			rate: 'Depends on your country of tax residence'
		}
	}
];

export function getCountry(slug) {
	return countries.find(c => c.slug === slug);
}

export function getCountries() {
	return countries;
}
