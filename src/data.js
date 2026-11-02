
export const COLORS = {
  culture: "#e1b66b",
  trade: "#64bfba",
  conflict: "#e57570",
  diplomacy: "#b49be8"
};

export const cities = [
  {id:"mumbai",name:"Mumbai",country:"India",lat:19.076, lng:72.878},
  {id:"nashik",name:"Nashik",country:"India",lat:19.997,lng:73.790},
  {id:"delhi",name:"Delhi",country:"India",lat:28.614,lng:77.209},
  {id:"amritsar",name:"Amritsar",country:"India",lat:31.634,lng:74.873},
  {id:"hyderabad",name:"Hyderabad",country:"India",lat:17.385,lng:78.487},
  {id:"lahore",name:"Lahore",country:"Pakistan",lat:31.520,lng:74.359},
  {id:"karachi",name:"Karachi",country:"Pakistan",lat:24.861,lng:67.010},
  {id:"dhaka",name:"Dhaka",country:"Bangladesh",lat:23.810,lng:90.413},
  {id:"tokyo",name:"Tokyo",country:"Japan",lat:35.676,lng:139.650},
  {id:"beijing",name:"Beijing",country:"China",lat:39.904,lng:116.407},
  {id:"shanghai",name:"Shanghai",country:"China",lat:31.230,lng:121.474},
  {id:"fukushima",name:"Fukushima Region",country:"Japan",lat:37.750,lng:140.467},
  {id:"bangkok",name:"Bangkok",country:"Thailand",lat:13.756,lng:100.502},
  {id:"singapore",name:"Singapore",country:"Singapore",lat:1.352,lng:103.820},
  {id:"brussels",name:"Brussels",country:"Belgium",lat:50.850,lng:4.352},
  {id:"parma",name:"Parma",country:"Italy",lat:44.801,lng:10.328},
  {id:"naples",name:"Naples",country:"Italy",lat:40.852,lng:14.268},
  {id:"odesa",name:"Odesa",country:"Ukraine",lat:46.482,lng:30.723},
  {id:"istanbul",name:"Istanbul",country:"Türkiye",lat:41.009,lng:28.978},
  {id:"abidjan",name:"Abidjan",country:"Côte d'Ivoire",lat:5.360,lng:-4.008},
  {id:"addis",name:"Addis Ababa",country:"Ethiopia",lat:9.030,lng:38.740},
  {id:"newyork",name:"New York",country:"United States",lat:40.713,lng:-74.006}
];

export const stories = [
  {
    id:"basmati",
    title:"The Basmati Battle",
    subtitle:"Two countries. One grain. Who owns the name?",
    chapter:"A Border Through the Kitchen",
    category:"conflict",
    from:"amritsar",to:"lahore",
    focus:"Geographical indications",
    year:"Ongoing dispute",
    hook:"Basmati connects Indian and Pakistani agricultural heritage, yet its geographical identity has become a commercially consequential issue.",
    narrative:"Rice is ordinary on the dinner table, but basmati carries an extraordinary reputation. Farmers, millers and exporters in India and Pakistan participate in markets that value its aroma, grain characteristics and geographic associations. Competing claims for geographical-indication recognition in Europe place a shared culinary heritage inside the machinery of international trade law.",
    takeaway:"The name attached to food can have commercial value even before its ingredients change.",
    mechanisms:[
      "Geographical indications and origin-linked reputation",
      "Product differentiation and information asymmetry",
      "Export competitiveness and market access",
      "Producer interests versus competing national claims"
    ],
    source:{
      name:"EU eAmbrosia GI register",
      url:"https://agriculture.ec.europa.eu/farming/geographical-indications-and-quality-schemes/geographical-indications-registers_en"
    }
  },
  {
    id:"partition",
    title:"A Border Through the Kitchen",
    subtitle:"Shared recipes. Divided nations.",
    chapter:"A Border Through the Kitchen",
    category:"culture",
    from:"delhi",to:"karachi",
    focus:"Migration and cultural economics",
    year:"1947 onward",
    hook:"Partition divided territory, but people carried culinary skills, recipes and food businesses across the new borders.",
    narrative:"Biryani, nihari and many North Indian and Pakistani food traditions cannot be explained through a simple modern-nationality label. Communities and food cultures evolved through centuries of exchange. Partition-era migration then reshaped the restaurants and kitchens of cities on both sides of the border.",
    takeaway:"Political borders can divide markets without erasing shared cultural heritage.",
    mechanisms:[
      "Migration of skills and human capital",
      "Cultural diffusion",
      "Restaurant entrepreneurship",
      "Nation branding and product differentiation"
    ]
  },
  {
    id:"punjab",
    title:"The Punjabi Food Divide",
    subtitle:"Amritsar and Lahore: close in culture, divided by borders.",
    chapter:"A Border Through the Kitchen",
    category:"culture",
    from:"amritsar",to:"lahore",
    focus:"Border effects on markets",
    year:"Contemporary",
    hook:"What happens when two neighbouring culinary centres are separated by a politically sensitive international border?",
    narrative:"Amritsar and Lahore retain strong connections through Punjabi food traditions, including tandoor cooking, breads and shared culinary vocabulary. Yet the political boundary affects how people and businesses can travel, trade and engage with one another.",
    takeaway:"Cultural proximity does not guarantee economic integration.",
    mechanisms:[
      "Border costs and market segmentation",
      "Cultural tourism",
      "Shared heritage and national identity"
    ]
  },
  {
    id:"ramen",
    title:"From Chinese Noodles to Japanese Ramen",
    subtitle:"Where does culinary influence end and reinvention begin?",
    chapter:"When Noodles Become Nationalism",
    category:"culture",
    from:"shanghai",to:"tokyo",
    focus:"Innovation and cultural diffusion",
    year:"Historical evolution",
    hook:"Japanese ramen developed through Chinese culinary influence and ultimately became a distinctive global Japanese food product.",
    narrative:"The history of ramen reveals that famous national cuisines are often products of exchange. Japanese cooks adapted noodle dishes to local ingredients, techniques, tastes and commercial opportunities. Over time, ramen developed distinctive regional varieties and international recognition.",
    takeaway:"Adapting an existing idea can create substantial cultural and economic value.",
    mechanisms:[
      "Innovation through adaptation",
      "Brand identity",
      "Product differentiation",
      "International culinary diffusion"
    ]
  },
  {
    id:"seafood",
    title:"The Fukushima Seafood Dispute",
    subtitle:"When a geopolitical dispute changes an export market.",
    chapter:"When Noodles Become Nationalism",
    category:"conflict",
    from:"fukushima",to:"beijing",
    focus:"Non-tariff trade barriers",
    year:"2023 onward",
    hook:"Following the beginning of treated-water discharge in 2023, China suspended imports of Japanese aquatic products.",
    narrative:"Seafood producers became exposed to decisions beyond their control. Regulatory restrictions, consumer confidence, government positions and shifting diplomatic relations changed access to a major export market. The episode also encouraged efforts to diversify markets.",
    takeaway:"A product's export demand can change because of political and regulatory decisions, not only its price or quality.",
    mechanisms:[
      "Non-tariff trade barriers",
      "Trade diversion and market diversification",
      "Demand and export revenue shocks",
      "Political and regulatory risk"
    ],
    metric:{label:"2024 export value index",value:7,baseline:100,description:"China-bound Japanese seafood exports relative to 2022 = 100; based on a reported 93% fall."},
    source:{
      name:"Japanese Fisheries Agency",
      url:"https://www.jfa.maff.go.jp/"
    }
  },
  {
    id:"boycott",
    title:"When Politics Enters a Restaurant",
    subtitle:"The Japan–China restaurant boycotts.",
    chapter:"When Noodles Become Nationalism",
    category:"conflict",
    from:"tokyo",to:"shanghai",
    focus:"Consumer nationalism",
    year:"2012 case study",
    hook:"During the 2012 territorial dispute, anti-Japanese protests in China affected Japanese businesses and restaurants.",
    narrative:"A restaurant may offer the same food, at the same price, with the same workers, yet its demand can change when consumers associate it with a foreign government. Some businesses faced closures, disruption or hostility during the protests.",
    takeaway:"National identity and political sentiment can influence consumer demand independently of product characteristics.",
    mechanisms:[
      "Consumer boycotts",
      "Political risk",
      "Demand shocks",
      "Reputation externalities"
    ]
  },
  {
    id:"cocoa",
    title:"The Chocolate Inequality",
    subtitle:"From cocoa farms to premium chocolate.",
    chapter:"From Farms to Fortunes",
    category:"trade",
    from:"abidjan",to:"brussels",
    focus:"Global value chains",
    year:"Structural case study",
    hook:"Why can the final retail product be worth so much more than the cocoa that helped create it?",
    narrative:"Cocoa production is an important part of the economy of Côte d'Ivoire, while European companies participate in processing, manufacturing, distribution and branding. Each stage adds costs and functions, and the resulting rewards are not evenly distributed among participants.",
    takeaway:"Final retail price is not the same as farmer income or profit, and bargaining power matters.",
    mechanisms:[
      "Global value chains",
      "Value added versus revenue",
      "Bargaining power",
      "Producer income and price volatility"
    ],
    source:{
      name:"International Cocoa Organization",
      url:"https://www.icco.org/"
    }
  },
  {
    id:"coffee",
    title:"The Journey of Coffee",
    subtitle:"From Ethiopian farms to a New York café.",
    chapter:"From Farms to Fortunes",
    category:"trade",
    from:"addis",to:"newyork",
    focus:"Commodity versus service pricing",
    year:"Structural case study",
    hook:"Why does a prepared coffee cost considerably more than its raw coffee-bean input?",
    narrative:"Producing, trading, roasting and serving coffee involve different businesses, costs and risks. The café price pays not only for beans but also rent, labour, equipment, service, taxes and other inputs.",
    takeaway:"Comparing a raw commodity price with a final service price requires accounting for the full production chain.",
    mechanisms:[
      "Value addition",
      "Agricultural export markets",
      "Operating costs",
      "Market differentiation"
    ]
  },
  {
    id:"onion",
    title:"The Onion Paradox",
    subtitle:"Making onions cheaper at home can affect prices abroad.",
    chapter:"Food as a Weapon, Food as a Border",
    category:"conflict",
    from:"nashik",to:"dhaka",
    focus:"Export restrictions",
    year:"2023–2024 case study",
    hook:"India restricted onion exports in December 2023 to address domestic supply and price concerns.",
    narrative:"Farmers, domestic consumers, traders and overseas buyers had different interests. Restrictions could increase domestic availability while limiting foreign supplies, potentially benefiting some groups at the expense of others.",
    takeaway:"Trade policy redistributes economic incentives and can transmit price pressure across borders.",
    mechanisms:[
      "Export restrictions",
      "Domestic versus world prices",
      "Consumer and producer welfare",
      "Policy spillovers"
    ]
  },
  {
    id:"grain",
    title:"The Grain Corridor",
    subtitle:"How a war can reshape the price of bread.",
    chapter:"Food as a Weapon, Food as a Border",
    category:"conflict",
    from:"odesa",to:"istanbul",
    focus:"Supply shocks and food security",
    year:"2022–2023 initiative",
    hook:"War disrupted Ukraine's agricultural exports, while the Black Sea Grain Initiative temporarily facilitated shipments.",
    narrative:"Ukraine is an important agricultural exporter. Conflict, port access, shipping risk and international agreements all influenced the ability to move grain. The UN-backed initiative facilitated exports before it ended in July 2023.",
    takeaway:"Food security depends on logistics, geopolitical stability and reliable access to international markets.",
    mechanisms:[
      "Supply disruptions",
      "Shipping risk",
      "Commodity price transmission",
      "Trade corridors"
    ],
    source:{
      name:"United Nations — Black Sea Grain Initiative",
      url:"https://www.un.org/en/black-sea-grain-initiative"
    }
  },
  {
    id:"pizza",
    title:"Who Owns Pizza?",
    subtitle:"From Naples to New York.",
    chapter:"From Farms to Fortunes",
    category:"culture",
    from:"naples",to:"newyork",
    focus:"Authenticity and branding",
    year:"Historical and contemporary",
    hook:"A traditional culinary craft can inspire an enormous international commercial market.",
    narrative:"Neapolitan pizza-making is a distinctive culinary tradition, while pizza has developed countless commercial forms around the world. Heritage, certification, local adaptation and business models all influence how consumers value different products.",
    takeaway:"Cultural heritage and commercial innovation can coexist without implying exclusive legal ownership of a global dish.",
    mechanisms:[
      "Cultural capital",
      "Brand differentiation",
      "Authenticity premiums",
      "Franchising and scale"
    ],
    source:{
      name:"UNESCO Intangible Cultural Heritage",
      url:"https://ich.unesco.org/"
    }
  },
  {
    id:"cheese",
    title:"The Price of Authenticity",
    subtitle:"Why does origin matter for Parmigiano Reggiano?",
    chapter:"From Farms to Fortunes",
    category:"trade",
    from:"parma",to:"brussels",
    focus:"Protected geographical origin",
    year:"Contemporary",
    hook:"A cheese's place of production can be part of its economic value.",
    narrative:"Parmigiano Reggiano is associated with defined production rules and geographic origins. Certification and reputation can help buyers distinguish it from alternatives, supporting product identity and price differentiation.",
    takeaway:"Trust, origin and reputation are economically valuable product attributes.",
    mechanisms:[
      "Geographical indications",
      "Certification",
      "Information asymmetry",
      "Product differentiation"
    ]
  },
  {
    id:"mango",
    title:"Mango Diplomacy",
    subtitle:"When food becomes a diplomatic gift.",
    chapter:"A Border Through the Kitchen",
    category:"diplomacy",
    from:"delhi",to:"lahore",
    focus:"Food as soft power",
    year:"Historical diplomatic episodes",
    hook:"India and Pakistan have used mangoes as gestures of goodwill despite political tensions.",
    narrative:"A familiar seasonal fruit can carry symbolism far beyond its market value. Diplomatic gifting allows governments to communicate goodwill through culture, hospitality and shared tastes.",
    takeaway:"Food can act as an instrument of soft power rather than only a source of competition.",
    mechanisms:[
      "Cultural diplomacy",
      "Nation branding",
      "Agricultural reputation",
      "Soft power"
    ]
  }
];

export const journeys = [
  {
    id:"chocolate", name:"The Chocolate Trail", emoji:"🍫",
    description:"From cocoa production to the politics of premium chocolate.",
    cities:["abidjan","brussels"],
    storyIds:["cocoa"]
  },
  {
    id:"coffee",name:"The Coffee Trail",emoji:"☕",
    description:"A journey from Ethiopian producers to global café culture.",
    cities:["addis","newyork"],
    storyIds:["coffee"]
  },
  {
    id:"basmati",name:"The Basmati Trail",emoji:"🍚",
    description:"A grain linking shared heritage with commercial identity.",
    cities:["amritsar","lahore","brussels"],
    storyIds:["basmati","punjab"]
  },
  {
    id:"wheat",name:"The Wheat Trail",emoji:"🌾",
    description:"Grain, shipping corridors and international food security.",
    cities:["odesa","istanbul"],
    storyIds:["grain"]
  },
  {
    id:"onions",name:"The Onion Trail",emoji:"🧅",
    description:"Follow a staple ingredient through agricultural policy.",
    cities:["nashik","dhaka"],
    storyIds:["onion"]
  }
];

export const presenterSequence = [
  "partition","basmati","mango","ramen","seafood",
  "boycott","cocoa","coffee","onion","grain","pizza","cheese"
];

export const getCity = id => cities.find(city=>city.id===id);
