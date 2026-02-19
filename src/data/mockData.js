// GroowXPro Mock Data

export const marketData = [
  {
    id: 1,
    name: "Bitcoin",
    symbol: "BTC",
    price: "₹54,32,450",
    change: "+2.45%",
    isPositive: true,
    icon: "₿",
    color: "#f7931a",
    chartData: [42000, 43500, 42800, 44200, 43800, 45000, 44500, 45200, 44800, 45500, 44000, 43500, 44800, 45200, 44500, 43800, 44200, 45000, 44800, 45500, 44000, 43500, 44800, 45200, 44500, 43800, 44200, 45000, 44800, 45500]
  },
  {
    id: 2,
    name: "Ethereum",
    symbol: "ETH",
    price: "₹2,85,340",
    change: "+1.87%",
    isPositive: true,
    icon: "Ξ",
    color: "#627eea",
    chartData: [3200, 3350, 3280, 3420, 3380, 3500, 3450, 3520, 3480, 3550, 3400, 3350, 3480, 3520, 3450, 3380, 3420, 3500, 3480, 3550, 3400, 3350, 3480, 3520, 3450, 3380, 3420, 3500, 3480, 3550]
  },
  {
    id: 3,
    name: "Gold",
    symbol: "XAU",
    price: "₹62,450",
    change: "+0.52%",
    isPositive: true,
    icon: "Au",
    color: "#ffd700",
    chartData: [1950, 1965, 1958, 1972, 1968, 1980, 1975, 1982, 1978, 1985, 1970, 1965, 1978, 1982, 1975, 1968, 1972, 1980, 1978, 1985, 1970, 1965, 1978, 1982, 1975, 1968, 1972, 1980, 1978, 1985]
  },
  {
    id: 4,
    name: "Silver",
    symbol: "XAG",
    price: "₹74,820",
    change: "-0.34%",
    isPositive: false,
    icon: "Ag",
    color: "#c0c0c0",
    chartData: [24.5, 24.8, 24.3, 25.0, 24.7, 25.2, 25.0, 25.3, 24.9, 25.5, 24.6, 24.4, 24.9, 25.1, 24.8, 24.5, 25.0, 25.2, 24.9, 25.4, 24.7, 24.3, 24.8, 25.1, 24.7, 24.4, 24.9, 25.2, 25.0, 25.3]
  },
  {
    id: 5,
    name: "Crude Oil",
    symbol: "CL",
    price: "₹6,340",
    change: "-1.23%",
    isPositive: false,
    icon: "CL",
    color: "#333333",
    chartData: [78, 79.5, 78.8, 80.2, 79.5, 81, 80.2, 81.5, 80.8, 82, 79.5, 78.8, 80.2, 81, 80.2, 79.5, 80.2, 81, 80.5, 81.5, 79.8, 78.5, 80.0, 81.2, 80.0, 79.2, 80.5, 81.0, 80.8, 81.5]
  },
  {
    id: 6,
    name: "USD/INR",
    symbol: "USDINR",
    price: "₹83.24",
    change: "+0.12%",
    isPositive: true,
    icon: "$",
    color: "#22c55e",
    chartData: [83.0, 83.1, 83.05, 83.2, 83.15, 83.25, 83.2, 83.3, 83.22, 83.35, 83.1, 83.05, 83.2, 83.25, 83.2, 83.15, 83.22, 83.28, 83.24, 83.32, 83.12, 83.08, 83.18, 83.26, 83.2, 83.14, 83.22, 83.28, 83.24, 83.3]
  }
];

export const packages = [
  {
    id: 1,
    name: "Commodity",
    slug: "commodity",
    icon: "⚡",
    weeklyPrice: "₹35,499",
    monthlyPrice: "₹45,499",
    color: "#f59e0b",
    gradient: "from-amber-500/20 to-amber-700/20",
    borderColor: "#f59e0b",
    features: [
      "3-4 Free Trading Calls",
      "Weekly Package Analysis",
      "Monthly Package Analysis",
      "Market Analysis Reports",
      "Priority Support"
    ],
    badge: null,
    description: "Expert commodity trading signals covering MCX markets. Get accurate calls for gold, silver, crude oil, and natural gas with detailed entry, exit, and stop-loss levels.",
    dailyCalls: "3-4",
    analysis: "Technical",
    vipAccess: "No",
    coverage: "Market Hours",
    whatYouGet: [
      "Daily commodity market analysis",
      "Entry, exit, and stop-loss for every trade",
      "MCX market coverage",
      "Weekly market outlook reports",
      "Priority customer support"
    ]
  },
  {
    id: 2,
    name: "Crypto Premium",
    slug: "crypto-premium",
    icon: "👑",
    weeklyPrice: "₹42,999",
    monthlyPrice: "₹55,999",
    color: "#a855f7",
    gradient: "from-purple-500/20 to-purple-700/20",
    borderColor: "#a855f7",
    features: [
      "5-6 Premium Trading Calls",
      "Crypto Signals 24/7",
      "Portfolio Management",
      "Technical Analysis",
      "VIP Telegram Group"
    ],
    badge: "MOST POPULAR",
    description: "Premium cryptocurrency trading signals with 24/7 coverage. Get access to our VIP group with real-time alerts, portfolio management guidance, and detailed technical analysis from our expert crypto analysts.",
    dailyCalls: "5-6",
    analysis: "Technical",
    vipAccess: "Yes",
    coverage: "24/7",
    whatYouGet: [
      "Round-the-clock crypto market monitoring",
      "Entry, exit, and stop-loss for every trade",
      "Portfolio allocation recommendations",
      "Alt-coin gems and early signals",
      "Direct access to lead crypto analyst"
    ]
  },
  {
    id: 3,
    name: "Equity Master",
    slug: "equity-master",
    icon: "📊",
    weeklyPrice: "₹38,999",
    monthlyPrice: "₹49,999",
    color: "#06b6d4",
    gradient: "from-cyan-500/20 to-cyan-700/20",
    borderColor: "#06b6d4",
    features: [
      "4-5 Stock Recommendations",
      "Intraday & Swing Trading",
      "Research Reports",
      "Weekly Market Outlook",
      "Direct Chat Support"
    ],
    badge: null,
    description: "Master the equity markets with our premium stock recommendations. Get intraday and swing trading calls with detailed research reports and weekly market outlook.",
    dailyCalls: "4-5",
    analysis: "Fundamental + Technical",
    vipAccess: "Yes",
    coverage: "Market Hours",
    whatYouGet: [
      "Daily stock picks with detailed analysis",
      "Intraday and swing trading strategies",
      "Sector rotation recommendations",
      "Quarterly earnings analysis",
      "Weekly portfolio review sessions"
    ]
  },
  {
    id: 4,
    name: "Currency Pro",
    slug: "currency-pro",
    icon: "💱",
    weeklyPrice: "₹35,499",
    monthlyPrice: "₹45,499",
    color: "#22c55e",
    gradient: "from-green-500/20 to-green-700/20",
    borderColor: "#22c55e",
    features: [
      "3-4 Free Trading Calls",
      "Weekly Package: ₹35,499",
      "Monthly Package: ₹45,499",
      "Forex Analysis",
      "Risk Management Tips"
    ],
    badge: null,
    description: "Professional forex and currency trading signals. Get accurate calls for major currency pairs with detailed technical analysis and risk management strategies.",
    dailyCalls: "3-4",
    analysis: "Technical",
    vipAccess: "No",
    coverage: "Market Hours",
    whatYouGet: [
      "Major and minor currency pair coverage",
      "Entry, exit, and stop-loss levels",
      "Forex market daily analysis",
      "Economic calendar alerts",
      "Risk management strategies"
    ]
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Crypto Trader",
    avatar: "RK",
    content: "GroowXPro has completely transformed my trading journey. Their crypto signals are incredibly accurate and the 24/7 support is phenomenal!",
    rating: 5
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Equity Investor",
    avatar: "PS",
    content: "The equity package is worth every penny. The research reports are detailed and the stock picks have given me consistent returns.",
    rating: 5
  },
  {
    id: 3,
    name: "Amit Patel",
    role: "Commodity Trader",
    avatar: "AP",
    content: "Best commodity trading signals I've ever used. The accuracy rate is amazing and the support team is always available.",
    rating: 5
  },
  {
    id: 4,
    name: "Sneha Reddy",
    role: "Forex Trader",
    avatar: "SR",
    content: "Their currency trading calls have helped me make consistent profits. The risk management tips are a game changer!",
    rating: 4
  },
  {
    id: 5,
    name: "Vikram Singh",
    role: "Full-time Trader",
    avatar: "VS",
    content: "I've been using GroowXPro for 6 months now. The premium crypto package has given me returns I never thought possible.",
    rating: 5
  }
];

export const tradingPartnerStats = [
  { id: 1, label: "Happy Clients", value: 5000, suffix: "+" },
  { id: 2, label: "Trading Calls", value: 15000, suffix: "+" },
  { id: 3, label: "Accuracy Rate", value: 92, suffix: "%" },
  { id: 4, label: "Years Experience", value: 8, suffix: "+" }
];

export const weOfferCategories = [
  {
    id: 1,
    name: "Crypto",
    description: "Trade Bitcoin, Ethereum & more with expert signals",
    icon: "bitcoin",
    color: "#f7931a",
    gradient: "linear-gradient(135deg, #f7931a20, #f7931a05)"
  },
  {
    id: 2,
    name: "Currency",
    description: "Forex trading with major & minor currency pairs",
    icon: "currency",
    color: "#22c55e",
    gradient: "linear-gradient(135deg, #22c55e20, #22c55e05)"
  },
  {
    id: 3,
    name: "Commodity",
    description: "Gold, Silver, Crude Oil & Natural Gas signals",
    icon: "commodity",
    color: "#f59e0b",
    gradient: "linear-gradient(135deg, #f59e0b20, #f59e0b05)"
  },
  {
    id: 4,
    name: "Equity",
    description: "Stock market picks with research-backed analysis",
    icon: "equity",
    color: "#06b6d4",
    gradient: "linear-gradient(135deg, #06b6d420, #06b6d405)"
  }
];
