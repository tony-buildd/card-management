# Card Dashboard v0 Design

## Summary

Card Dashboard v0 is a desktop-first web app for managing existing debit and credit cards in one place. The product is a premium, Wallet-inspired dashboard with a management-first structure: users can see every card they hold, key dates, fees, and reminders without logging into multiple bank portals.

This version is intentionally not a fintech integration product. Users manually add and maintain card records. The app does not connect to banks, import transactions, or store highly sensitive card credentials.

## Product Goal

Give users one clear control panel to answer:

- What cards do I have?
- What matters about each card?
- What needs attention next?

## Product Positioning

"Your personal card operating system. Track every debit and credit card, due date, fee, and benefit in one clean dashboard."

## Target User

Consumers who hold multiple debit and credit cards across banks and want a cleaner way to manage card details, due dates, fees, benefits, and reminders.

## MVP Scope

v0 focuses on existing-card management only.

Included:

- Manual card entry and editing
- Desktop-first web dashboard
- Overview metrics and attention panels
- Card grid with search and filters
- Card detail view
- Reminder-oriented metadata such as due dates, annual fees, expiration, and autopay status

Excluded:

- Bank integrations
- Transaction sync
- Statement imports
- Full card numbers
- CVV storage
- Credit score tracking
- Bill payment execution
- Browser extension
- Offer recommendation engine
- Household or team sharing

## Core Screens

### 1. Overview Dashboard

Primary purpose: give users a quick operational summary.

Sections:

- Summary metrics: total cards, credit cards, debit cards, due soon, annual fees upcoming
- Needs attention: missing autopay, missing due date, expiring cards, annual fee soon
- Quick actions: add card, edit card, jump to reminders

### 2. Cards Page

Primary purpose: show all cards in a premium but scannable grid.

Features:

- Glass-style card grid
- Search by nickname, issuer, product name, or last 4
- Filters for debit/credit, issuer, network, active/inactive
- Fast scan of important metadata per tile

Each card tile should show:

- Issuer
- Card product name or nickname
- Last 4
- Debit/credit tag
- Network
- Due date
- Autopay badge
- Annual fee badge if present
- Status signal

### 3. Card Detail Panel

Primary purpose: provide richer metadata without overloading the grid.

Recommended interaction:

- Open as a right-side detail panel from the selected card
- Expand to a full page later if needed

Fields:

- Issuer
- Card product name
- Nickname
- Card type
- Network
- Last 4
- Expiration month/year
- Due day
- Autopay enabled
- Annual fee
- Rewards summary
- Benefits summary
- Bank login URL
- Support phone
- Status
- Notes

### 4. Add/Edit Card Flow

Primary purpose: fast manual data entry.

Recommended interaction:

- Modal or lightweight form
- Clear section grouping
- Optimized for speed over formality

## Visual Direction

The app should be Apple Wallet-inspired, but not a Wallet clone. The design needs to balance premium presentation with high information clarity.

Visual principles:

- Large rounded card tiles with tactile depth
- Frosted glass for major containers, not every element
- Subtle gradients and highlights on card surfaces
- Thin borders, restrained shadows, soft layering
- Strong spacing and clear typography
- Minimal visual noise
- Readability prioritized over decorative blur

Design rule:

Glass is the atmosphere. Information hierarchy does the real work.

## Interaction Model

- Desktop-first layout
- Card grid as the main browsing surface
- Selection opens detail panel
- Filters and search persist while browsing
- Alerts should be actionable and easy to dismiss or resolve later

## Data Model

Each card record should store:

- `id`
- `nickname`
- `issuer`
- `card_product_name`
- `card_type` (`credit` or `debit`)
- `network`
- `last4`
- `expiration_month`
- `expiration_year`
- `due_day`
- `autopay_enabled`
- `annual_fee`
- `rewards_summary`
- `benefits_summary`
- `bank_login_url`
- `support_phone`
- `status` (`active`, `inactive`, `replaced`, `closed`)
- `notes`
- `created_at`
- `updated_at`

## Technical Direction

Recommended v0 stack:

- Next.js web app
- Local database and simple CRUD backend
- SQLite or Postgres with Prisma or Drizzle
- Authentication deferred if this starts as a personal prototype

Recommended build order:

1. Design system and layout shell
2. Card data model and storage
3. Card CRUD flows
4. Overview dashboard
5. Detail panel and reminder surfaces
6. Seed/demo data for realistic presentation

## Product Risks

### Low Repeat Usage

Risk:
If the app is only a static card list, users may not return often.

Mitigation:
Emphasize attention surfaces such as due dates, annual fee reminders, expiring cards, and missing autopay signals.

### Visual Overdesign

Risk:
Heavy glass effects can reduce readability and make the dashboard feel like a concept rather than a tool.

Mitigation:
Keep data dense areas crisp and use glass mostly for framing surfaces.

### Security Scope Creep

Risk:
The product may drift toward storing sensitive financial data that materially increases trust and compliance burden.

Mitigation:
Avoid full credentials and treat the product as a management dashboard, not a banking interface.

## Success Criteria For v0

- Users can manually add and edit all of their cards in one place
- Users can quickly scan all cards from the grid view
- Users can identify what needs attention next from the overview
- The interface feels premium and differentiated while remaining easy to read

## Future Expansion

If v0 proves useful, later versions can explore:

- Browser extension for card and offer guidance
- Smarter recommendations on which card to use
- Reminder automation
- Offer tracking
- Secure integrations with external financial data providers
