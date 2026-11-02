
export const cinemaStories = [
  {
    id: "basmati",
    title: "The Basmati Battle",
    kicker: "INDIA × PAKISTAN",
    chapter: "A BORDER THROUGH THE KITCHEN",
    subtitle: "Two countries. One grain. Who owns the name?",
    accent: "#E7B66D",
    symbol: "◈",
    opening:
      "A grain shared across centuries becomes a dispute over geography, reputation, and economic value.",
    sources: [
      {
        label: "India GI Registry — Basmati, Application 145",
        url: "https://search.ipindia.gov.in/GIRPublicSearch/Application/Details/145"
      },
      {
        label: "EU Official Journal — Pakistan Basmati application, 2024",
        url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024D02995"
      },
      {
        label: "Pakistan Ministry of Commerce — Year Book 2024–25",
        url: "https://www.commerce.gov.pk/wp-content/uploads/2025/11/Year-Book-2024-25.pdf"
      }
    ],
    scenes: [
      {
        id: "heritage",
        eyebrow: "01 / SHARED ORIGINS",
        heading: "Before the border, there was the grain.",
        lead:
          "Basmati rice belongs to a wider agricultural and culinary history of the northern Indian subcontinent.",
        body:
          "The rice-growing regions, culinary practices, and reputations associated with basmati did not begin with modern national boundaries. Today, producers in India and Pakistan both participate in the commercial world of aromatic long-grain rice.",
        question:
          "Can countries share the heritage of a product while competing over its commercial identity?",
        visual: "heritage",
        insight: "Shared cultural origins do not imply a single modern commercial owner.",
        economics: [
          "Cultural capital and geographic reputation",
          "Path dependence in agricultural specialization",
          "Brand differentiation and consumer trust"
        ]
      },
      {
        id: "partition",
        eyebrow: "02 / 1947",
        heading: "A political border divides a culinary region.",
        lead:
          "Partition creates new nation-states, but shared food traditions persist.",
        body:
          "The 1947 Partition involved immense displacement and the redrawing of political and economic boundaries. Culinary skills and traditions continued on both sides, including rice dishes, breads, slow-cooked meats, and regional restaurant cultures. This background explains why national claims to cuisine can be emotionally powerful without establishing exclusive ownership of a recipe.",
        question:
          "What is the difference between cultural identity and intellectual-property protection?",
        visual: "partition",
        insight: "Political borders can separate markets without erasing shared food culture.",
        economics: [
          "Border effects and market segmentation",
          "Migration and transfer of human capital",
          "Cultural identity as an economic signal"
        ]
      },
      {
        id: "india-gi",
        eyebrow: "03 / INDIA'S GI REGISTRATION",
        heading: "Geography becomes a legal asset.",
        lead:
          "India records Basmati as a registered geographical indication.",
        body:
          "India's GI Registry lists Basmati under Application 145, filed in November 2008 and registered with a certificate dated 15 February 2016. The registration identifies specified Indian production regions. Such protection concerns the use of a geographical name in its particular jurisdiction; it does not amount to ownership of every basmati dish.",
        question:
          "Why might geographic certification increase the commercial value of agricultural output?",
        visual: "gi",
        insight: "A credible origin label can help distinguish products in a crowded market.",
        economics: [
          "Geographical indications",
          "Information asymmetry",
          "Reputation and price premiums"
        ],
        sourceIndex: 0
      },
      {
        id: "eu",
        eyebrow: "04 / THE EUROPEAN MARKET",
        heading: "A shared name enters a contested market.",
        lead:
          "The European GI process turns origin and naming into a trade issue.",
        body:
          "Pakistan submitted an EU application concerning the name Basmati in August 2023. The European Commission published the application in April 2024, enabling the opposition process. Pakistan's 2024–25 Ministry of Commerce year book describes ongoing consultations and competing claims. Publication of an application is not the same as final registration.",
        question:
          "How can a protected name affect competition between exporters?",
        visual: "eu",
        insight: "The economic stakes concern market access, reputation, and the right to market goods under protected terms.",
        economics: [
          "Territorial intellectual-property rights",
          "Export competition",
          "Non-price competition and barriers to entry"
        ],
        sourceIndex: 1
      },
      {
        id: "conclusion",
        eyebrow: "05 / THE ECONOMIC VERDICT",
        heading: "The dispute is not about who can cook rice.",
        lead:
          "It is about who can claim origin and capture the associated value.",
        body:
          "A geographical indication may strengthen trust and differentiation, but a price premium is not guaranteed and need not flow equally to farmers, traders, and retailers. The key issue is how the rules of certification and marketing influence the distribution of economic opportunities.",
        question:
          "Who should benefit when a product's reputation is shared across a region?",
        visual: "value",
        insight: "Culinary heritage becomes a commercial asset when institutions determine how origin claims can be used.",
        economics: [
          "Value capture",
          "Producer welfare",
          "Market access and distributional effects"
        ]
      }
    ]
  },
  {
    id: "seafood",
    title: "The Seafood Dispute",
    kicker: "JAPAN × CHINA",
    chapter: "WHEN NOODLES BECOME NATIONALISM",
    subtitle: "When geopolitics changes the price of a catch.",
    accent: "#72C6C8",
    symbol: "◉",
    opening:
      "Centuries of culinary exchange meet a sudden contraction in international seafood trade.",
    sources: [
      {
        label: "Japanese Fisheries Agency — 2024 White Paper",
        url: "https://www.jfa.maff.go.jp/j/kikaku/wpaper/r06_h/trend/1/t1_6_3.html"
      },
      {
        label: "FAO GLOBEFISH — Seafood trade shifts, December 2024",
        url: "https://www.fao.org/in-action/globefish/news-events/news/news-detail/major-changes-in-trade-flows-following-chinese-ban-on-japanese-seafood-imports/en"
      },
      {
        label: "Japan National Tourism Organization — Ramen history",
        url: "https://faq.japan-travel.jnto.go.jp/en/guide/a-guide-to-ramen-in-japan/"
      },
      {
        label: "Japanese Fisheries Agency — 2025 White Paper",
        url: "https://www.jfa.maff.go.jp/j/kikaku/wpaper/r07_h/trend/1/t1_1_4.html"
      }
    ],
    scenes: [
      {
        id: "exchange",
        eyebrow: "01 / THE SHARED TABLE",
        heading: "Cuisines travel more easily than politics.",
        lead:
          "Japanese ramen has roots in Chinese noodle traditions.",
        body:
          "Over time, Chinese-influenced noodle dishes were adapted into distinctive Japanese ramen styles, which later developed global commercial appeal. The cultural exchange is well documented, but it is not a formal ownership dispute between the Chinese and Japanese governments.",
        question:
          "How does adapting a foreign culinary idea create new economic value?",
        visual: "ramen",
        insight: "Culinary exchange can create innovation, new markets, and new identities.",
        economics: [
          "Technology and cultural diffusion",
          "Product differentiation",
          "Innovation and market formation"
        ],
        sourceIndex: 2
      },
      {
        id: "ban",
        eyebrow: "02 / AUGUST 2023",
        heading: "A seafood market suddenly closes.",
        lead:
          "China suspends Japanese aquatic-product imports.",
        body:
          "After Japan began releasing ALPS-treated water from Fukushima Daiichi in August 2023, China introduced a broad seafood import suspension. The dispute involved regulatory positions, public confidence, diplomacy, and economic costs. The existence of a restriction is distinct from a scientific conclusion that all affected seafood was unsafe.",
        question:
          "What happens when a major buyer stops importing a product?",
        visual: "ban",
        insight: "Regulatory decisions can produce abrupt trade shocks.",
        economics: [
          "Non-tariff trade barriers",
          "Market access risk",
          "Demand shocks and trade diversion"
        ],
        sourceIndex: 0
      },
      {
        id: "collapse",
        eyebrow: "03 / THE DATA",
        heading: "The numbers reveal the disruption.",
        lead:
          "China-bound Japanese seafood exports lost most of their 2022 value.",
        body:
          "According to Japan's Fisheries Agency, the value of seafood exports to China declined by 30% in 2023 and 93% in 2024, each relative to 2022. The chart indexes 2022 to 100, so the later values are approximately 70 and 7. These are export-value changes, not fish-production or export-volume measurements.",
        question:
          "How much exposure can a supplier afford to one export market?",
        visual: "exports",
        insight: "Market concentration can increase vulnerability to political shocks.",
        economics: [
          "Export concentration",
          "International demand shocks",
          "Revenue exposure and diversification"
        ],
        sourceIndex: 0
      },
      {
        id: "redirect",
        eyebrow: "04 / NEW ROUTES",
        heading: "Trade does not always disappear. It moves.",
        lead:
          "Exporters redirect products and reorganize supply chains.",
        body:
          "FAO GLOBEFISH reported that the United States, Viet Nam and Thailand became leading destinations for Japanese fishery and aquaculture exports during January–September 2024. Japan's overall seafood-export mix also shifted. Those figures describe a specific nine-month period, not every subsequent year.",
        question:
          "Can market diversification reduce exposure without eliminating costs?",
        visual: "redirect",
        insight: "New buyers can reduce dependence on a restricted market, but adaptation takes time and investment.",
        economics: [
          "Trade diversion",
          "Supply-chain adjustment costs",
          "Market diversification"
        ],
        sourceIndex: 1
      },
      {
        id: "verdict",
        eyebrow: "05 / THE ECONOMIC VERDICT",
        heading: "Political borders can reshape the dinner table.",
        lead:
          "Trade, safety governance, consumer confidence and diplomatic risk intersect.",
        body:
          "The seafood dispute illustrates how governments' regulatory decisions can affect producers and trade patterns, even when the underlying product and production methods have not changed. For any current-status claim, official restrictions must be checked against the relevant date rather than assumed unchanged since 2023.",
        question:
          "Should exporters treat geopolitical risk as seriously as ordinary price risk?",
        visual: "verdict",
        insight: "Food is both an economic commodity and a politically sensitive product.",
        economics: [
          "Political risk",
          "Resilience and trade policy",
          "Producer welfare"
        ],
        sourceIndex: 3
      }
    ]
  }
];

export const seafoodExports = [
  { year: "2022", index: 100 },
  { year: "2023", index: 70 },
  { year: "2024", index: 7 }
];

export const seafoodDestinations = [
  { name: "United States", share: 25.2 },
  { name: "Viet Nam", share: 14.0 },
  { name: "Thailand", share: 13.4 }
];
