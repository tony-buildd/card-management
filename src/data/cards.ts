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
    accent: "rgba(120, 124, 255, 0.92)",
    surface: "linear-gradient(135deg, rgba(22, 38, 92, 0.98), rgba(95, 94, 187, 0.92) 58%, rgba(172, 190, 255, 0.82))",
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
    accent: "rgba(113, 148, 255, 0.92)",
    surface: "linear-gradient(135deg, rgba(15, 30, 76, 0.98), rgba(47, 89, 188, 0.9) 54%, rgba(155, 198, 255, 0.82))",
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
    accent: "rgba(160, 137, 255, 0.9)",
    surface: "linear-gradient(135deg, rgba(33, 27, 87, 0.98), rgba(92, 71, 181, 0.9) 56%, rgba(193, 174, 255, 0.8))",
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
    accent: "rgba(101, 196, 255, 0.92)",
    surface: "linear-gradient(135deg, rgba(16, 48, 98, 0.98), rgba(48, 120, 198, 0.9) 58%, rgba(151, 223, 255, 0.82))",
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
    accent: "rgba(148, 130, 255, 0.92)",
    surface: "linear-gradient(135deg, rgba(17, 20, 61, 0.98), rgba(73, 61, 162, 0.92) 52%, rgba(175, 181, 255, 0.82))",
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
    accent: "rgba(137, 164, 255, 0.92)",
    surface: "linear-gradient(135deg, rgba(24, 42, 90, 0.98), rgba(76, 96, 190, 0.9) 54%, rgba(177, 197, 255, 0.82))",
  },
];
