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
    id: "chime-debit",
    nickname: "Everyday Debit",
    issuer: "Chime",
    cardProductName: "Visa Debit",
    cardType: "debit",
    network: "Visa",
    last4: "1739",
    expirationMonth: "06",
    expirationYear: "29",
    dueDay: null,
    autopayEnabled: false,
    annualFee: 0,
    rewardsSummary: "Everyday spend from Chime checking",
    benefitsSummary: "No overdraft fee with SpotMe eligibility",
    bankLoginUrl: "chime.com",
    supportPhone: "844-244-6363",
    status: "active",
    notes: "Primary debit card for daily purchases.",
    accent: "rgba(147, 243, 201, 0.9)",
    surface: "linear-gradient(135deg, rgba(18, 122, 88, 0.98), rgba(21, 163, 115, 0.94) 54%, rgba(89, 223, 167, 0.85))",
  },
  {
    id: "bofa-debit",
    nickname: "Cash Access",
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
    rewardsSummary: "Checking account cash and ATM access",
    benefitsSummary: "Linked to primary Bank of America checking",
    bankLoginUrl: "bankofamerica.com",
    supportPhone: "800-432-1000",
    status: "review",
    notes: "Keep locked when not in use.",
    accent: "rgba(255, 184, 193, 0.9)",
    surface: "linear-gradient(135deg, rgba(122, 25, 45, 0.98), rgba(169, 37, 65, 0.95) 54%, rgba(216, 102, 124, 0.84))",
  },
  {
    id: "capitalone-venture",
    nickname: "Travel Core",
    issuer: "Capital One",
    cardProductName: "Venture Rewards",
    cardType: "credit",
    network: "Visa",
    last4: "3916",
    expirationMonth: "09",
    expirationYear: "30",
    dueDay: 3,
    autopayEnabled: true,
    annualFee: 95,
    rewardsSummary: "2x miles on every purchase",
    benefitsSummary: "Global Entry/TSA credit and transfer partners",
    bankLoginUrl: "capitalone.com",
    supportPhone: "800-227-4825",
    status: "active",
    notes: "Primary general spend travel card.",
    accent: "rgba(177, 184, 204, 0.9)",
    surface: "linear-gradient(135deg, rgba(36, 41, 54, 0.98), rgba(74, 82, 103, 0.94) 54%, rgba(144, 154, 177, 0.83))",
  },
  {
    id: "bofa-customized-cash",
    nickname: "Flexible Rewards",
    issuer: "Bank of America",
    cardProductName: "Customized Cash Rewards",
    cardType: "credit",
    network: "Visa",
    last4: "8421",
    expirationMonth: "08",
    expirationYear: "28",
    dueDay: 17,
    autopayEnabled: true,
    annualFee: 0,
    rewardsSummary: "3% category of choice, 2% groceries/wholesale",
    benefitsSummary: "Boosted rewards with Preferred Rewards tiers",
    bankLoginUrl: "bankofamerica.com",
    supportPhone: "800-732-9194",
    status: "active",
    notes: "Use for chosen 3% category each month.",
    accent: "rgba(255, 170, 182, 0.9)",
    surface: "linear-gradient(135deg, rgba(130, 30, 52, 0.98), rgba(180, 46, 73, 0.95) 54%, rgba(225, 118, 139, 0.84))",
  },
];
