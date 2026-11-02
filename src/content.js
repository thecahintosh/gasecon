
import { stories as originalStories, getCity } from "./data.js";

const japanSource = {
  label: "Japanese Fisheries Agency — Fisheries White Paper",
  url: "https://www.jfa.maff.go.jp/j/kikaku/wpaper/r06_h/trend/1/t1_6_3.html"
};

const unSource = {
  label: "United Nations — Black Sea Grain Initiative",
  url: "https://www.un.org/en/black-sea-grain-initiative/faq"
};

const onionSource = {
  label: "Government of India — Onion export policy",
  url: "https://commerce.gov.in/wp-content/uploads/2024/12/LS-SQ-No.-318-dt-17.12.2024.pdf"
};

const unescoSource = {
  label: "UNESCO — Intangible Cultural Heritage",
  url: "https://ich.unesco.org/"
};

const giSource = {
  label: "European Commission — GI registers",
  url: "https://agriculture.ec.europa.eu/farming/geographical-indications-and-quality-schemes/geographical-indications-registers_en"
};

export const chapters = [
  { id:"everyday", title:"The Economics of Everyday Food",
    subtitle:"Why food prices matter to everyday lives." },
  { id:"value", title:"From Farms to Fortunes",
    subtitle:"Where does the money go?" },
  { id:"partition", title:"A Border Through the Kitchen",
    subtitle:"India, Pakistan, heritage and identity." },
  { id:"japan", title:"When Noodles Become Nationalism",
    subtitle:"Food, diplomacy and consumer nationalism." },
  { id:"trade", title:"Food as a Weapon, Food as a Border",
    subtitle:"How policies and wars change food markets." },
  { id:"future", title:"The Future of the Plate",
    subtitle:"Affordability, sustainability and food security." }
];

const extraStories = [
  {
    id:"mumbai-vada", title:"The Vada Pav Economy",
    subtitle:"How a small snack supports a large economic network.",
    chapter:"The Economics of Everyday Food",
    category:"trade", from:"mumbai",to:"mumbai",
    local:true, focus:"Informal markets and price elasticity",
    year:"Contemporary",
    hook:"A vada pav is inexpensive, but the economy behind it involves far more than the street vendor.",
    narrative:"The vendor purchases potatoes, bread, cooking oil, fuel and condiments. Suppliers, delivery workers, landlords and customers participate in the local market. When input costs rise, vendors face choices about menu prices, portion sizes and margins. Price-sensitive buyers may reduce purchases or switch to alternatives.",
    takeaway:"Low-priced food can generate livelihoods across a complex local supply network.",
    mechanisms:["Informal-sector employment","Input costs and margins","Price elasticity of demand","Competition and substitution"]
  },
  {
    id:"bangkok-tourism",title:"When Cuisine Becomes Tourism",
    subtitle:"Street food as an engine of visitor spending.",
    chapter:"The Economics of Everyday Food",
    category:"trade",from:"bangkok",to:"bangkok",local:true,
    focus:"Tourism and multiplier effects",year:"Contemporary",
    hook:"A tourist's street-food purchase can generate spending beyond one stall.",
    narrative:"Culinary tourism connects food vendors to farms, transport providers, markets, hotels and other services. Direct tourist expenditure becomes income for local businesses. Some recipients may spend part of that income locally, producing further rounds of economic activity.",
    takeaway:"Food tourism can spread economic benefits, but multiplier effects depend on local sourcing and spending patterns.",
    mechanisms:["Direct and indirect expenditure","Local multiplier effects","Leakages","Employment in tourism"]
  },
  {
    id:"singapore-hawker",title:"The Hawker Economy",
    subtitle:"Public infrastructure meets everyday dining.",
    chapter:"The Economics of Everyday Food",
    category:"culture",from:"singapore",to:"singapore",local:true,
    focus:"Food infrastructure and affordability",year:"Contemporary",
    hook:"What makes a city's street-food culture part of its public life?",
    narrative:"Singapore's hawker culture combines small food businesses, shared dining spaces and culinary traditions. UNESCO inscribed Hawker Culture in Singapore on its Representative List in 2020. The economic story includes stall rents, labour costs, consumer affordability and the social value of accessible public dining.",
    takeaway:"Food infrastructure shapes both business economics and everyday urban life.",
    mechanisms:["Small-business operating costs","Public infrastructure","Consumer affordability","Cultural value"],
    source:unescoSource
  },
  {
    id:"newyork-pizza",title:"The Price of a Pizza Slice",
    subtitle:"Why identical ingredients can produce different prices.",
    chapter:"The Economics of Everyday Food",
    category:"trade",from:"newyork",to:"newyork",local:true,
    focus:"Costs, prices and competition",year:"Contemporary",
    hook:"Flour, cheese and tomatoes are only part of the cost of running a pizza shop.",
    narrative:"A restaurant must cover its ingredients, staff, premises, energy, equipment and other expenses. Location, convenience, reputation and nearby alternatives influence what buyers will pay. The price of a slice therefore reflects both production costs and market conditions.",
    takeaway:"Retail food prices cannot be explained by ingredient prices alone.",
    mechanisms:["Fixed and variable costs","Wages and commercial rent","Competition","Willingness to pay"]
  },
  {
    id:"tokyo-sushi",title:"The Price of Scarcity",
    subtitle:"Why premium seafood can command exceptional prices.",
    chapter:"From Farms to Fortunes",
    category:"trade",from:"tokyo",to:"tokyo",local:true,
    focus:"Scarcity and willingness to pay",year:"Contemporary",
    hook:"Why are some seafood products treated as luxury goods?",
    narrative:"Quality grading, freshness, reputation, seasonal availability and specialized distribution can all affect seafood prices. A limited supply combined with strong demand can generate a substantial premium. Individual ceremonial auction prices, however, should not be confused with normal market prices.",
    takeaway:"Scarcity matters, but price also reflects quality, reputation and buyer preferences.",
    mechanisms:["Scarcity","Demand and willingness to pay","Product differentiation","Market signalling"]
  },
  {
    id:"deforestation",title:"Chocolate Versus the Forest",
    subtitle:"Who should bear the costs of sustainable production?",
    chapter:"The Future of the Plate",
    category:"conflict",from:"abidjan",to:"brussels",
    local:false,focus:"Negative externalities",
    year:"Contemporary regulation",
    hook:"Chocolate creates income, but agricultural land expansion can impose environmental costs.",
    narrative:"Cocoa cultivation provides livelihoods and export earnings. When land-use decisions produce environmental damage not fully reflected in market prices, economists describe the resulting costs as negative externalities. Deforestation-related import rules seek to address some of these concerns, while compliance also creates costs for producers and businesses.",
    takeaway:"A market price may fail to include all the environmental costs of producing food.",
    mechanisms:["Negative externalities","Social versus private cost","Environmental regulation","Compliance and market access"]
  },
  {
    id:"food-security",title:"The Global Hunger Paradox",
    subtitle:"Why food availability is not the same as affordability.",
    chapter:"The Future of the Plate",
    category:"conflict",from:"dhaka",to:"dhaka",local:true,
    focus:"Food security and purchasing power",
    year:"Global structural challenge",
    hook:"Food can exist in a market while remaining financially inaccessible to people who need it.",
    narrative:"Food security depends on more than aggregate agricultural production. Household income, prices, physical access, stability and dietary needs all matter. Global commodity-price changes, local wages, conflict and distribution systems influence the real affordability of food.",
    takeaway:"Ending hunger requires attention to access and purchasing power, not production alone.",
    mechanisms:["Purchasing power","Food access","Real income","Food security"]
  }
];

const additions = {
  basmati: {
    chapterId:"partition",
    question:"Can a food's geographical name become a competitive economic asset?",
    timeline:[
      {date:"Historical",title:"Shared growing heritage",text:"Basmati traditions are associated with rice-growing areas of the Indian subcontinent."},
      {date:"Modern era",title:"Export branding",text:"Quality, aroma and geographic reputation become commercially important in international rice markets."},
      {date:"EU proceedings",title:"GI applications and objections",text:"Indian and Pakistani interests contest the scope and recognition of geographical claims in European markets."}
    ],
    readingNote:"Do not interpret geographical indications as ownership of every basmati dish or recipe.",
    source:giSource
  },
  partition:{
    chapterId:"partition",
    question:"How does migration reshape national food identity?",
    timeline:[
      {date:"Before 1947",title:"Shared culinary regions",text:"Food traditions develop through long-running regional and cultural exchanges."},
      {date:"1947",title:"Partition and migration",text:"People carry knowledge, skills and food traditions across newly established borders."},
      {date:"Later decades",title:"New regional identities",text:"Restaurants and households preserve and adapt dishes within different national contexts."}
    ],
    readingNote:"Biryani and nihari traditions have complex regional histories; this is not a legal ownership dispute."
  },
  punjab:{
    chapterId:"partition",
    question:"How does a border affect neighbouring food economies?"
  },
  mango:{
    chapterId:"partition",
    question:"How can food work as a form of soft power?",
    readingNote:"Historical diplomatic gestures should not be confused with formal trade agreements."
  },
  ramen:{
    chapterId:"japan",
    question:"When does culinary adaptation become a new product identity?",
    readingNote:"Ramen's historical cultural connections are not evidence of a formal government ownership dispute."
  },
  seafood:{
    chapterId:"japan",
    question:"What happens when access to an export market suddenly contracts?",
    chart:{
      type:"bar",
      title:"Japan's seafood export value to China",
      subtitle:"Indexed: 2022 = 100",
      unit:"Index",
      data:[
        {label:"2022",value:100},
        {label:"2023",value:70},
        {label:"2024",value:7}
      ],
      note:"2023 and 2024 are derived from reported decreases of 30% and 93%, respectively, relative to 2022. These are value indices, not export volumes.",
      source:japanSource
    },
    timeline:[
      {date:"Aug 2023",title:"Import restrictions",text:"China imposes broad restrictions on Japanese aquatic products following the start of treated-water discharge."},
      {date:"2024",title:"Exports sharply lower",text:"Japanese Fisheries Agency reports China-bound seafood export value 93% below 2022."},
      {date:"Jun 2025",title:"Conditional reopening",text:"China announces conditional resumption for some regions with continued exclusions."}
    ],
    readingNote:"Import restrictions, scientific assessments, public perceptions and diplomatic positions must be evaluated separately.",
    source:japanSource
  },
  boycott:{
    chapterId:"japan",
    question:"Why can national politics alter demand for a restaurant?"
  },
  cocoa:{
    chapterId:"value",
    question:"Who captures the value created along a chocolate supply chain?",
    readingNote:"Retail price, value added, producer income and net profit are different measures. Do not assume a retail-price share is a profit share."
  },
  coffee:{
    chapterId:"value",
    question:"Why is the price of a café drink different from the price of raw coffee?"
  },
  cheese:{
    chapterId:"value",
    question:"Can origin certification support a premium?"
  },
  pizza:{
    chapterId:"value",
    question:"Can heritage and global commercialization coexist?",
    timeline:[
      {date:"Historical",title:"Neapolitan tradition",text:"Pizza-making evolves as an important local culinary practice."},
      {date:"20th century",title:"Global commercialization",text:"Pizza spreads through migration, restaurants and international business models."},
      {date:"2017",title:"UNESCO recognition",text:"The art of Neapolitan pizzaiuolo is inscribed as intangible cultural heritage."}
    ],
    source:unescoSource
  },
  onion:{
    chapterId:"trade",
    question:"Who wins and loses when a government restricts food exports?",
    timeline:[
      {date:"8 Dec 2023",title:"Export prohibition",text:"India prohibits exports of specified onions to address domestic availability and prices."},
      {date:"4 May 2024",title:"Policy changed",text:"Exports are permitted subject to a floor price and export duty."},
      {date:"13 Sep 2024",title:"Further relaxation",text:"The government removes the floor price and reduces the export duty."}
    ],
    chart:{
      type:"events",
      title:"India's onion export policy",
      subtitle:"Documented policy events, not retail-price measurements",
      data:[
        {label:"Dec 2023",value:"Prohibited"},
        {label:"May 2024",value:"Restricted reopening"},
        {label:"Sep 2024",value:"Further relaxation"}
      ],
      source:onionSource
    },
    source:onionSource
  },
  grain:{
    chapterId:"trade",
    question:"How does access to shipping routes affect food security?",
    timeline:[
      {date:"Feb 2022",title:"War disrupts shipping",text:"Russia's full-scale invasion creates severe disruption for Ukrainian Black Sea exports."},
      {date:"Jul 2022",title:"Grain initiative signed",text:"A UN- and Türkiye-brokered initiative establishes a maritime export mechanism."},
      {date:"Jul 2023",title:"Initiative ends",text:"The agreement expires without renewal after facilitating over 32 million tonnes of food and agricultural exports."}
    ],
    chart:{
      type:"metric",
      title:"Black Sea Grain Initiative",
      value:"32.8M",
      unit:"tonnes",
      subtitle:"Grain and foodstuffs exported through the initiative",
      note:"Cumulative reported shipment quantity by mid-July 2023; not the totality of Ukrainian grain exports in that period.",
      source:unSource
    },
    source:unSource
  }
};

export const allStories = [
  ...originalStories.map(s => ({
    ...s,
    chapterId: additions[s.id]?.chapterId || "value",
    ...additions[s.id]
  })),
  ...extraStories.map(s => ({
    ...s,
    chapterId:
      s.chapter === "The Economics of Everyday Food" ? "everyday" :
      s.chapter === "The Future of the Plate" ? "future" : "value"
  }))
];

export const storyById = Object.fromEntries(
  allStories.map(story => [story.id,story])
);

export const chapterStories = chapterId =>
  allStories.filter(s => s.chapterId === chapterId);

export const presentationSequence = [
  "mumbai-vada","bangkok-tourism","singapore-hawker","newyork-pizza",
  "cocoa","coffee","cheese","pizza","tokyo-sushi",
  "partition","punjab","basmati","mango",
  "ramen","boycott","seafood",
  "onion","grain","deforestation","food-security"
];

export const presentLocation = story => {
  const first = getCity(story.from);
  const second = getCity(story.to);
  return first?.name === second?.name
    ? first?.name
    : `${first?.name} → ${second?.name}`;
};
