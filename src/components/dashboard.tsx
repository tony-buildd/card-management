"use client";

import { useState } from "react";

import { cardRecords, type CardRecord, type CardStatus, type CardType } from "@/data/cards";
import { cn } from "@/lib/utils";

const attentionItems = [
  {
    label: "Due soon",
    value: "3 cards",
    note: "Next payment in 3 days",
  },
  {
    label: "Annual fees",
    value: "$720",
    note: "Two premium cards renew this quarter",
  },
  {
    label: "Autopay gaps",
    value: "2 cards",
    note: "Needs setup before the next cycle",
  },
];

const statusTone: Record<CardStatus, string> = {
  active: "bg-emerald-600",
  review: "bg-amber-500",
  inactive: "bg-slate-300",
};

const statusLabel: Record<CardStatus, string> = {
  active: "Active",
  review: "Needs review",
  inactive: "Inactive",
};

const cardTypeOptions: Array<CardType | "all"> = ["all", "credit", "debit"];

function formatDueDay(value: number | null) {
  return value ? `Day ${value}` : "No due date";
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

function buildMetrics(cards: CardRecord[]) {
  const creditCards = cards.filter((card) => card.cardType === "credit");
  const debitCards = cards.filter((card) => card.cardType === "debit");
  const autopayMissing = cards.filter((card) => !card.autopayEnabled).length;
  const feesTotal = creditCards.reduce((sum, card) => sum + card.annualFee, 0);

  return [
    { label: "Total cards", value: String(cards.length), note: "Across all issuers" },
    { label: "Credit cards", value: String(creditCards.length), note: "Rewards and charge cards" },
    { label: "Debit cards", value: String(debitCards.length), note: "Cash access and ATM cards" },
    { label: "Autopay gaps", value: String(autopayMissing), note: "Cards that need attention" },
    { label: "Annual fees", value: formatCurrency(feesTotal), note: "Current yearly fee exposure" },
  ];
}

export function Dashboard() {
  const [query, setQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState<CardType | "all">("all");
  const [activeCardId, setActiveCardId] = useState(cardRecords[0]?.id ?? "");
  const [detailFlipped, setDetailFlipped] = useState(false);

  const filteredCards = cardRecords.filter((card) => {
    const matchesType = typeFilter === "all" || card.cardType === typeFilter;
    const text = `${card.nickname} ${card.issuer} ${card.cardProductName} ${card.last4}`.toLowerCase();

    return matchesType && text.includes(query.toLowerCase());
  });

  const activeCard =
    filteredCards.find((card) => card.id === activeCardId) ??
    filteredCards[0] ??
    cardRecords[0];

  const metrics = buildMetrics(cardRecords);
  const visibleCards = filteredCards.slice(0, 6);

  function handleCardSelect(cardId: string) {
    if (cardId === activeCardId) {
      setDetailFlipped((current) => !current);
      return;
    }

    setActiveCardId(cardId);
    setDetailFlipped(false);
  }

  return (
    <main className="min-h-dvh overflow-hidden px-4 py-4 text-slate-950 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
      <div className="mx-auto max-w-[1720px]">
        <div className="floating-stage relative overflow-hidden rounded-[2.75rem] px-5 py-6 sm:px-7 sm:py-7 lg:px-9 lg:py-9 xl:px-10 xl:py-10">
          <div className="pointer-events-none absolute -left-24 top-12 h-72 w-72 rounded-full bg-white/32 blur-3xl" />
          <div className="pointer-events-none absolute right-12 top-0 h-64 w-64 rounded-full bg-[var(--frost-blue)]/60 blur-3xl" />
          <div className="pointer-events-none absolute bottom-12 right-24 h-72 w-72 rounded-full bg-[var(--frost-violet)]/48 blur-3xl" />

          <div className="relative flex w-full flex-col gap-8 xl:gap-10">
            <header className="glass-panel-strong rounded-[2.4rem] px-7 py-7 sm:px-8 sm:py-8 lg:px-10 lg:py-9">
              <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-3xl space-y-4">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/52 px-3 py-1 text-xs font-medium uppercase text-slate-600">
                    Wallet-inspired card control
                  </div>
                  <div className="space-y-3">
                    <p className="font-[family-name:var(--font-display)] text-4xl leading-none text-balance sm:text-5xl">
                      Manage every debit and credit card from one calm dashboard.
                    </p>
                    <p className="max-w-2xl text-base leading-7 text-ink-muted text-pretty">
                      Card Management is a premium command center for the cards you already have: due dates,
                      annual fees, autopay status, support details, and the notes you never want to lose.
                    </p>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  {attentionItems.map((item) => (
                    <section
                      key={item.label}
                      className="rounded-[1.65rem] border border-white/60 bg-white/58 px-5 py-5 shadow-[0_18px_40px_rgba(31,43,86,0.08)]"
                    >
                      <p className="text-sm text-ink-muted">{item.label}</p>
                      <p className="mt-3 text-2xl tabular-nums text-slate-900">{item.value}</p>
                      <p className="mt-2 text-sm text-ink-muted text-pretty">{item.note}</p>
                    </section>
                  ))}
                </div>
              </div>
            </header>

            <section className="grid gap-6 xl:grid-cols-[minmax(0,1.18fr)_440px] xl:items-start">
              <div className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
                  {metrics.map((metric) => (
                    <article key={metric.label} className="glass-panel rounded-[1.9rem] px-6 py-6">
                      <p className="text-sm text-ink-muted">{metric.label}</p>
                      <p className="mt-4 text-3xl tabular-nums text-slate-900">{metric.value}</p>
                      <p className="mt-2 text-sm text-ink-muted text-pretty">{metric.note}</p>
                    </article>
                  ))}
                </div>

                <section className="glass-panel rounded-[2.2rem] p-5 sm:p-6 lg:p-7">
                  <div className="mb-8 grid gap-6 xl:grid-cols-[minmax(0,1fr)_minmax(0,760px)] xl:items-end">
                    <div className="max-w-xl">
                      <p className="text-sm uppercase text-slate-500">Card inventory</p>
                      <h2 className="mt-2 font-[family-name:var(--font-display)] text-5xl leading-[0.95] text-balance">
                        Grid view for every card you manage
                      </h2>
                      <p className="mt-4 text-sm text-ink-muted">
                        Showing {visibleCards.length} of {filteredCards.length} cards in a 2-up layout.
                      </p>
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
                      <label className="rounded-full border border-white/70 bg-white/66 px-5 py-3.5 shadow-sm">
                        <span className="sr-only">Search cards</span>
                        <input
                          value={query}
                          onChange={(event) => setQuery(event.target.value)}
                          placeholder="Search issuer, card, or last four"
                          className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400 sm:w-80"
                        />
                      </label>

                      <div className="inline-flex rounded-full border border-white/70 bg-white/66 p-1.5 shadow-sm">
                        {cardTypeOptions.map((option) => (
                          <button
                            key={option}
                            type="button"
                            onClick={() => setTypeFilter(option)}
                            className={cn(
                              "rounded-full px-4 py-2.5 text-sm transition-colors",
                              typeFilter === option ? "bg-[color:var(--accent)] text-white" : "text-slate-600",
                            )}
                          >
                            {option === "all" ? "All cards" : `${option[0].toUpperCase()}${option.slice(1)}`}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-8 md:grid-cols-2">
                    {visibleCards.map((card) => (
                      <button
                        key={card.id}
                        type="button"
                        onClick={() => handleCardSelect(card.id)}
                        className={cn(
                          "group relative rounded-[2rem] text-left transition-all duration-150 ease-out hover:-translate-y-1",
                          activeCard?.id === card.id ? "-translate-y-0.5 opacity-100" : "opacity-95 hover:opacity-100",
                        )}
                      >
                        <article className="space-y-3">
                          <div
                            className={cn(
                              "relative aspect-[1.67/1] overflow-hidden rounded-[2rem] border border-white/45 px-7 py-6 text-white shadow-[0_28px_56px_rgba(31,43,86,0.2)]",
                              activeCard?.id === card.id ? "shadow-[0_38px_80px_rgba(31,43,86,0.24)]" : "",
                            )}
                            style={{ background: card.surface }}
                          >
                            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.32),transparent_34%)]" />
                            <div className="pointer-events-none absolute inset-y-0 right-0 w-2/5 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.14),transparent_62%)]" />
                            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/60" />

                            <div className="relative flex h-full flex-col">
                              <div className="flex items-start justify-between">
                                <div>
                                  <p className="text-sm text-white/72">{card.issuer}</p>
                                  <p className="mt-3 text-[2.15rem] leading-none text-white">{card.cardProductName}</p>
                                </div>
                                <div className="space-y-3 text-right">
                                  <div className="rounded-full border border-white/30 bg-black/10 px-3 py-1 text-xs uppercase text-white/80">
                                    {card.network}
                                  </div>
                                  <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-sm text-white/82">
                                    <span className={cn("status-dot", statusTone[card.status])} />
                                    <span>{statusLabel[card.status]}</span>
                                  </div>
                                </div>
                              </div>

                              <div className="mt-8 flex items-center gap-3">
                                <div
                                  className="h-10 w-14 rounded-2xl border border-white/25 bg-white/15"
                                  style={{ boxShadow: `inset 0 1px 1px rgba(255,255,255,0.22), 0 0 0 1px ${card.accent}` }}
                                />
                              </div>

                              <div className="mt-auto flex items-end justify-between gap-4">
                                <div className="space-y-2">
                                  <p className="text-[11px] uppercase text-white/62">
                                    {card.cardType === "credit" ? "Credit card" : "Debit card"}
                                  </p>
                                  <p className="text-[2.2rem] leading-none tabular-nums text-white">•••• {card.last4}</p>
                                </div>
                                <div className="min-w-28 space-y-2 text-right">
                                  {card.cardType === "credit" ? (
                                    <p className="text-sm text-white/74">
                                      Due {card.dueDay ? `day ${card.dueDay}` : "not set"}
                                    </p>
                                  ) : (
                                    <p className="text-sm text-white/60">No payment due</p>
                                  )}
                                  <p className="text-xs uppercase text-white/50">Tap once to inspect</p>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="glass-panel rounded-[1.45rem] px-4 py-3.5">
                            <div className="grid grid-cols-[1fr_auto] gap-2 text-sm">
                              <div>
                                <p className="text-[11px] uppercase text-slate-500">Card number</p>
                                <p className="mt-1 tabular-nums text-slate-900">•••• {card.last4}</p>
                              </div>
                              <p className="self-end text-sm text-[color:var(--accent)]">View details</p>
                            </div>
                            <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
                              <div>
                                <p className="text-[11px] uppercase text-slate-500">Card description</p>
                                <p className="mt-1 text-slate-900">{card.cardType === "credit" ? "Credit card" : "Debit card"}</p>
                              </div>
                              <div>
                                <p className="text-[11px] uppercase text-slate-500">Expires</p>
                                <p className="mt-1 tabular-nums text-slate-900">
                                  {card.expirationMonth}/{card.expirationYear}
                                </p>
                              </div>
                            </div>
                          </div>
                        </article>
                      </button>
                    ))}
                  </div>
                </section>
              </div>

              <aside className="glass-panel rounded-[2.2rem] p-6 sm:p-7 xl:sticky xl:top-8">
                {activeCard ? (
                  <div className="flex h-full flex-col gap-7">
                    <button
                      type="button"
                      onClick={() => setDetailFlipped((current) => !current)}
                      className="group text-left [perspective:1600px]"
                      aria-label="Flip selected card"
                    >
                      <div
                        className={cn(
                          "relative min-h-[300px] rounded-[2.15rem] transition-transform duration-300 [transform-style:preserve-3d]",
                          detailFlipped ? "[transform:rotateY(180deg)]" : "",
                        )}
                      >
                        <div
                          className="absolute inset-0 overflow-hidden rounded-[2.15rem] border border-white/45 p-6 text-white shadow-[0_32px_70px_rgba(31,43,86,0.2)] [backface-visibility:hidden]"
                          style={{ background: activeCard.surface }}
                        >
                          <div className="flex h-full flex-col">
                            <div className="flex items-start justify-between">
                              <div>
                                <p className="text-sm text-white/72">{activeCard.issuer}</p>
                                <h3 className="mt-2 font-[family-name:var(--font-display)] text-3xl text-balance">
                                  {activeCard.cardProductName}
                                </h3>
                              </div>
                              <span className="rounded-full border border-white/25 bg-black/10 px-3 py-1 text-xs uppercase text-white/84">
                                {activeCard.network}
                              </span>
                            </div>

                            <div className="mt-8 flex items-center gap-3">
                              <div
                                className="h-11 w-16 rounded-2xl border border-white/25 bg-white/15"
                                style={{
                                  boxShadow: `inset 0 1px 1px rgba(255,255,255,0.22), 0 0 0 1px ${activeCard.accent}`,
                                }}
                              />
                            </div>

                            <div className="mt-auto flex items-end justify-between gap-4">
                              <div className="space-y-2">
                                <p className="text-[11px] uppercase text-white/62">{activeCard.cardType}</p>
                                <p className="text-4xl tabular-nums text-white">•••• {activeCard.last4}</p>
                              </div>
                              <div className="space-y-2 text-right">
                                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-sm text-white/82">
                                  <span className={cn("status-dot", statusTone[activeCard.status])} />
                                  <span>{statusLabel[activeCard.status]}</span>
                                </div>
                                {activeCard.cardType === "credit" ? (
                                  <p className="text-sm text-white/74">
                                    Due {activeCard.dueDay ? `day ${activeCard.dueDay}` : "not set"}
                                  </p>
                                ) : (
                                  <p className="text-sm text-white/60">Debit card</p>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          className="absolute inset-0 overflow-hidden rounded-[2.15rem] border border-white/45 p-6 text-white shadow-[0_32px_70px_rgba(31,43,86,0.2)] [backface-visibility:hidden] [transform:rotateY(180deg)]"
                          style={{ background: activeCard.surface }}
                        >
                          <div className="flex h-full flex-col">
                            <div className="h-12 rounded-full bg-black/32" />
                            <div className="mt-6 rounded-[1.8rem] bg-white/88 px-4 py-4 text-slate-900">
                              <p className="text-xs uppercase text-slate-500">Card back</p>
                              <div className="mt-4 grid gap-3">
                                <div className="flex items-center justify-between rounded-2xl bg-slate-100/80 px-4 py-3">
                                  <span className="text-sm text-slate-500">Autopay</span>
                                  <span className="text-sm text-slate-900">
                                    {activeCard.autopayEnabled ? "Enabled" : "Missing"}
                                  </span>
                                </div>
                                <div className="flex items-center justify-between rounded-2xl bg-slate-100/80 px-4 py-3">
                                  <span className="text-sm text-slate-500">Annual fee</span>
                                  <span className="text-sm tabular-nums text-slate-900">
                                    {formatCurrency(activeCard.annualFee)}
                                  </span>
                                </div>
                                <div className="flex items-center justify-between rounded-2xl bg-slate-100/80 px-4 py-3">
                                  <span className="text-sm text-slate-500">Expires</span>
                                  <span className="text-sm tabular-nums text-slate-900">
                                    {activeCard.expirationMonth}/{activeCard.expirationYear}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <p className="mt-auto text-sm text-white/72">
                              Click the card again to return to the front.
                            </p>
                          </div>
                        </div>
                      </div>
                    </button>

                    <section className="space-y-5">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm uppercase text-slate-500">Card detail</p>
                          <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl text-balance">
                            Operational profile
                          </h2>
                        </div>
                        <button
                          type="button"
                          className="rounded-full border border-white/70 bg-white/80 px-4 py-2.5 text-sm shadow-sm"
                        >
                          Edit card
                        </button>
                      </div>

                      <dl className="grid gap-3">
                        {[
                          ["Nickname", activeCard.nickname],
                          ["Card type", activeCard.cardType],
                          ["Due date", formatDueDay(activeCard.dueDay)],
                          ["Autopay", activeCard.autopayEnabled ? "Enabled" : "Set this up"],
                          ["Annual fee", formatCurrency(activeCard.annualFee)],
                          ["Bank login", activeCard.bankLoginUrl],
                          ["Support", activeCard.supportPhone],
                        ].map(([label, value]) => (
                          <div
                            key={label}
                            className="flex items-center justify-between rounded-[1.65rem] border border-white/60 bg-white/66 px-4 py-4"
                          >
                            <dt className="text-sm text-ink-muted">{label}</dt>
                            <dd className="max-w-[60%] truncate text-right text-sm capitalize tabular-nums text-slate-900">
                              {value}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    </section>

                    <section className="grid gap-3.5">
                      <article className="rounded-[1.65rem] border border-white/60 bg-white/66 px-4 py-4">
                        <p className="text-sm text-ink-muted">Rewards summary</p>
                        <p className="mt-2 text-sm leading-7 text-pretty">{activeCard.rewardsSummary}</p>
                      </article>
                      <article className="rounded-[1.65rem] border border-white/60 bg-white/66 px-4 py-4">
                        <p className="text-sm text-ink-muted">Benefits summary</p>
                        <p className="mt-2 text-sm leading-7 text-pretty">{activeCard.benefitsSummary}</p>
                      </article>
                      <article className="rounded-[1.65rem] border border-white/60 bg-white/66 px-4 py-4">
                        <p className="text-sm text-ink-muted">Personal notes</p>
                        <p className="mt-2 text-sm leading-7 text-pretty">{activeCard.notes}</p>
                      </article>
                    </section>
                  </div>
                ) : (
                  <div className="flex h-full min-h-80 flex-col items-start justify-center rounded-[1.9rem] border border-dashed border-slate-300 px-5">
                    <p className="font-[family-name:var(--font-display)] text-2xl text-balance">
                      No cards match this filter.
                    </p>
                    <p className="mt-3 text-sm leading-7 text-ink-muted text-pretty">
                      Clear the search or switch the type filter to see your full card inventory again.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setQuery("");
                        setTypeFilter("all");
                      }}
                      className="mt-5 rounded-full bg-[color:var(--accent)] px-4 py-2 text-sm text-white"
                    >
                      Reset filters
                    </button>
                  </div>
                )}
              </aside>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
