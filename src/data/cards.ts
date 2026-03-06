export type CardStatus = "active" | "review" | "inactive";
export type CardType = "credit" | "debit";

export type CardRecord = {
  id: string;
  nickname: string;
  issuer: string;
  cardProductName: string;
  cardType: CardType;
  network: string;
  last4: string;
  expirationMonth: string;
  expirationYear: string;
  dueDay: number | null;
  autopayEnabled: boolean;
  annualFee: number;
  rewardsSummary: string;
  benefitsSummary: string;
  bankLoginUrl: string;
  supportPhone: string;
  status: CardStatus;
  notes: string;
  accent: string;
  surface: string;
};

export const cardRecords: CardRecord[] = [
  {
    id: "amex-gold",
    nickname: "Dining Card",
    issuer: "American Express",
    cardProductName: "Gold Card",
    cardType: "credit",
    network: "Amex",
    last4: "8421",
    expirationMonth: "08",
    expirationYear: "28",
    dueDay: 17,
    autopayEnabled: true,
    annualFee: 325,
    rewardsSummary: "4x dining, 4x groceries, 3x flights",
    benefitsSummary: "Dining credit, Resy credit, travel protections",
    bankLoginUrl: "americanexpress.com",
    supportPhone: "800-528-4800",
    status: "active",
    notes: "Primary dining and grocery card. Review annual fee value each summer.",
    accent: "rgba(123, 78, 42, 0.9)",
    surface: "linear-gradient(135deg, rgba(94, 67, 33, 0.92), rgba(198, 164, 103, 0.86))",
  },
  {
    id: "chase-sapphire",
    nickname: "Travel Core",
    issuer: "Chase",
    cardProductName: "Sapphire Preferred",
    cardType: "credit",
    network: "Visa",
    last4: "1174",
    expirationMonth: "02",
    expirationYear: "29",
    dueDay: 12,
    autopayEnabled: true,
    annualFee: 95,
    rewardsSummary: "3x dining, 2x travel, portal bonuses",
    benefitsSummary: "Primary rental coverage, hotel credit, transfer partners",
    bankLoginUrl: "chase.com",
    supportPhone: "800-493-3319",
    status: "active",
    notes: "Keep for travel transfers and backup dining.",
    accent: "rgba(41, 58, 96, 0.92)",
    surface: "linear-gradient(135deg, rgba(16, 29, 56, 0.96), rgba(92, 121, 168, 0.9))",
  },
  {
    id: "bofa-checking",
    nickname: "Daily Debit",
    issuer: "Bank of America",
    cardProductName: "Advantage Debit",
    cardType: "debit",
    network: "Visa",
    last4: "5509",
    expirationMonth: "11",
    expirationYear: "27",
    dueDay: null,
    autopayEnabled: false,
    annualFee: 0,
    rewardsSummary: "ATM access and direct checking access",
    benefitsSummary: "Used for cash access only",
    bankLoginUrl: "bankofamerica.com",
    supportPhone: "800-432-1000",
    status: "review",
    notes: "Confirm replacement timeline and lock if unused.",
    accent: "rgba(106, 32, 43, 0.92)",
    surface: "linear-gradient(135deg, rgba(66, 9, 21, 0.94), rgba(170, 47, 74, 0.88))",
  },
  {
    id: "citi-custom",
    nickname: "Flexible Bonus",
    issuer: "Citi",
    cardProductName: "Custom Cash",
    cardType: "credit",
    network: "Mastercard",
    last4: "2308",
    expirationMonth: "04",
    expirationYear: "27",
    dueDay: 24,
    autopayEnabled: false,
    annualFee: 0,
    rewardsSummary: "5% top eligible category each billing cycle",
    benefitsSummary: "Useful for rotating everyday category spend",
    bankLoginUrl: "citi.com",
    supportPhone: "800-950-5114",
    status: "review",
    notes: "Set autopay after next statement and decide recurring category.",
    accent: "rgba(19, 88, 112, 0.92)",
    surface: "linear-gradient(135deg, rgba(16, 58, 76, 0.96), rgba(70, 168, 191, 0.9))",
  },
  {
    id: "capitalone-venturex",
    nickname: "Premium Travel",
    issuer: "Capital One",
    cardProductName: "Venture X",
    cardType: "credit",
    network: "Visa",
    last4: "3916",
    expirationMonth: "09",
    expirationYear: "30",
    dueDay: 3,
    autopayEnabled: true,
    annualFee: 395,
    rewardsSummary: "2x everywhere, 5x flights, 10x hotels",
    benefitsSummary: "Lounge access, travel credit, anniversary miles",
    bankLoginUrl: "capitalone.com",
    supportPhone: "800-227-4825",
    status: "active",
    notes: "Use for premium travel benefits and lounge access.",
    accent: "rgba(64, 53, 116, 0.9)",
    surface: "linear-gradient(135deg, rgba(22, 23, 52, 0.96), rgba(95, 76, 178, 0.88))",
  },
  {
    id: "discover-it",
    nickname: "Legacy Rotator",
    issuer: "Discover",
    cardProductName: "Discover it",
    cardType: "credit",
    network: "Discover",
    last4: "6147",
    expirationMonth: "01",
    expirationYear: "26",
    dueDay: 6,
    autopayEnabled: true,
    annualFee: 0,
    rewardsSummary: "5% rotating categories, 1% everything else",
    benefitsSummary: "Keep category activation calendar visible",
    bankLoginUrl: "discover.com",
    supportPhone: "800-347-2683",
    status: "inactive",
    notes: "Good backup for rotating bonus calendar. Not a primary card.",
    accent: "rgba(140, 88, 17, 0.92)",
    surface: "linear-gradient(135deg, rgba(74, 32, 7, 0.96), rgba(214, 126, 24, 0.88))",
  },
];
