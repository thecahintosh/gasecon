
export const foodJourneys = [
  {
    id:"chocolate",
    name:"The Chocolate Trail",
    ingredient:"COCOA",
    icon:"🍫",
    theme:"#D7A46E",
    question:"Who earns the money behind a chocolate bar?",
    intro:"Follow cocoa from West African production through international processing, branding and the environmental costs of chocolate.",
    related:"cocoa",
    stages:[
      {
        title:"The cocoa farmer",
        place:"Côte d'Ivoire",
        city:"Abidjan · Regional anchor",
        coordinates:[5.36,-4.008],
        chapter:"PRODUCTION",
        story:"Chocolate begins with agricultural work. Farmers cultivate, harvest and ferment cocoa, while weather, pests, land availability and international commodity markets influence the economics of production.",
        economics:"Cocoa farming involves uncertain yields, production costs and exposure to commodity price volatility. Farmgate prices are not equivalent to a producer's net profit.",
        actors:["Farmers","Local buyers","Agricultural cooperatives"],
        principle:"Commodity dependence",
        question:"Why can farmers face unstable earnings even when demand for chocolate is strong?",
        source:"https://www.icco.org/"
      },
      {
        title:"Trading and processing",
        place:"International value chain",
        city:"West Africa → Europe",
        coordinates:[25,-2],
        chapter:"TRANSFORMATION",
        story:"Cocoa beans are graded, traded and processed into cocoa liquor, butter and powder. Transport, quality control, financing and processing all create additional costs and economic value.",
        economics:"We must distinguish input costs, output revenues, gross value added and profit. Every stage creates its own costs and risks.",
        actors:["Exporters","Processors","Logistics businesses"],
        principle:"Global value chains",
        question:"Does adding value automatically mean earning higher profit?",
        source:"https://www.icco.org/"
      },
      {
        title:"The branded chocolate bar",
        place:"Belgium",
        city:"Brussels",
        coordinates:[50.850,4.352],
        chapter:"BRANDING",
        story:"Manufacturers combine cocoa products with ingredients, manufacturing, packaging and distribution. Some chocolate brands position themselves as premium products through reputation, experience and differentiation.",
        economics:"Final retail prices include many inputs beyond raw cocoa. Branding may increase willingness to pay, but retail revenue is not the same as profit.",
        actors:["Manufacturers","Brand owners","Retailers","Consumers"],
        principle:"Product differentiation",
        question:"What part of the final price reflects the ingredient, and what part reflects other services and costs?",
        source:"https://www.icco.org/"
      },
      {
        title:"The hidden environmental bill",
        place:"Global cocoa economy",
        city:"West Africa ↔ Europe",
        coordinates:[28,0],
        chapter:"CONFLICT",
        story:"Cocoa provides livelihoods, but expansion into forested areas can cause environmental harm. Regulations on deforestation create new compliance obligations and raise questions about who should bear the costs.",
        economics:"Environmental damage that is not fully included in market prices is a negative externality. Policy may try to internalize it, while changing incentives and compliance costs.",
        actors:["Farmers","Importers","Regulators","Consumers"],
        principle:"Negative externalities",
        question:"Can chocolate be both affordable and sustainably produced?",
        source:"https://environment.ec.europa.eu/topics/forests/deforestation/regulation-deforestation-free-products_en"
      }
    ]
  },
  {
    id:"coffee",
    name:"The Coffee Trail",
    ingredient:"COFFEE",
    icon:"☕",
    theme:"#B7A2DD",
    question:"Why is a café drink worth so much more than its raw coffee input?",
    intro:"From Ethiopian coffee-growing regions to export markets, roasting businesses and a New York café.",
    related:"coffee",
    stages:[
      {
        title:"Growing the coffee",
        place:"Ethiopia",
        city:"Addis Ababa · Regional anchor",
        coordinates:[9.03,38.74],
        chapter:"PRODUCTION",
        story:"Coffee farming requires land, labour and time. Harvest quality, weather and processing methods influence the value of the crop.",
        economics:"Farm income depends on yields, production expenses, market prices and the terms of sale. High final beverage prices do not imply similarly high farmer profits.",
        actors:["Farmers","Cooperatives","Local traders"],
        principle:"Agricultural livelihoods",
        question:"What risks remain with the farmer after the coffee is sold?",
        source:"https://www.ico.org/"
      },
      {
        title:"The international commodity",
        place:"International markets",
        city:"Ethiopia → Global trade",
        coordinates:[16,30],
        chapter:"EXPORT",
        story:"Coffee travels through sorting, grading, export preparation and international logistics. Buyers value characteristics such as origin, consistency and quality.",
        economics:"Trade connects producer prices, exchange rates, transportation expenses and commercial contracts. Export prices and farmgate prices represent different stages.",
        actors:["Exporters","Importers","Freight operators"],
        principle:"Trade and comparative advantage",
        question:"Why might different countries specialize in different stages of the coffee industry?",
        source:"https://www.ico.org/"
      },
      {
        title:"Roasting changes the product",
        place:"Consumer markets",
        city:"Global roasting businesses",
        coordinates:[37,-20],
        chapter:"TRANSFORMATION",
        story:"Roasting alters coffee's sensory characteristics. Roasters invest in equipment, energy, expertise, packaging and distribution.",
        economics:"Processing can create value added, but the economic return depends on efficiency, scale, differentiation and competition.",
        actors:["Roasters","Distributors","Retail brands"],
        principle:"Value addition",
        question:"When does processing become a source of competitive advantage?",
        source:"https://www.ico.org/"
      },
      {
        title:"The café experience",
        place:"United States",
        city:"New York",
        coordinates:[40.713,-74.006],
        chapter:"CONSUMPTION",
        story:"A cup of café coffee includes not just beans but also labour, rent, equipment, utilities, cups and the service experience.",
        economics:"A farmgate coffee price and a prepared beverage's retail price are not directly comparable without accounting for the remaining production and service costs.",
        actors:["Café owners","Baristas","Landlords","Consumers"],
        principle:"Services and retail pricing",
        question:"How much of a café's price reflects location and service rather than its raw ingredients?",
        source:"https://www.ico.org/"
      }
    ]
  },
  {
    id:"basmati",
    name:"The Basmati Trail",
    ingredient:"RICE",
    icon:"🍚",
    theme:"#E4C27F",
    question:"Can two nations share a grain's heritage and compete over its name?",
    intro:"Trace basmati through agriculture, processing, export branding and the legal politics of geographical identity.",
    related:"basmati",
    stages:[
      {
        title:"The growing region",
        place:"Indian subcontinent",
        city:"Punjab · India and Pakistan",
        coordinates:[31.25,74.7],
        chapter:"ORIGIN",
        story:"Basmati is associated with a broader agricultural and culinary heritage of the northern Indian subcontinent. Its geographic reputation predates today's national borders.",
        economics:"Origin-linked reputation can become an important product attribute when buyers associate geography with recognizable quality.",
        actors:["Rice farmers","Agricultural researchers","Local markets"],
        principle:"Geographic specialization",
        question:"Can geographic reputation itself become an economic asset?",
        source:"https://agriculture.ec.europa.eu/farming/geographical-indications-and-quality-schemes_en"
      },
      {
        title:"Milling and grading",
        place:"South Asian rice industry",
        city:"Regional milling centres",
        coordinates:[30.4,75.5],
        chapter:"PROCESSING",
        story:"Harvested rice is dried, milled, sorted and graded. Handling, storage, consistency, traceability and quality standards influence marketability.",
        economics:"Processing and quality assurance contribute costs and added value. A premium received by an exporter does not automatically become farmer income.",
        actors:["Millers","Quality inspectors","Exporters"],
        principle:"Quality differentiation",
        question:"How are gains from a premium product distributed through a supply chain?",
        source:"https://apeda.gov.in/"
      },
      {
        title:"Selling the name abroad",
        place:"International export markets",
        city:"South Asia → Europe",
        coordinates:[42,40],
        chapter:"TRADE",
        story:"Exporters compete not only through price, but also quality, reputation, certification, reliability and access to distribution networks.",
        economics:"A geographical indication can help consumers verify an origin claim, but premiums and market access depend on legal rules and market behaviour.",
        actors:["Exporters","Importers","Certification bodies"],
        principle:"Non-price competition",
        question:"Why might the same agricultural product sell at different prices under different branding?",
        source:"https://agriculture.ec.europa.eu/farming/geographical-indications-and-quality-schemes_en"
      },
      {
        title:"The basmati dispute",
        place:"European Union",
        city:"Brussels",
        coordinates:[50.85,4.352],
        chapter:"CONFLICT",
        story:"Indian and Pakistani interests have sought recognition for basmati's geographical identity in the European market. Application, opposition and registration are distinct stages; a filing does not establish final legal ownership.",
        economics:"Competing origin claims raise questions about market access, intellectual property, consumer information and distribution of the economic benefits of reputation.",
        actors:["Indian producers","Pakistani producers","EU authorities","Consumers"],
        principle:"Geographical indications",
        question:"Who should benefit when a product's reputation crosses a political border?",
        source:"https://agriculture.ec.europa.eu/farming/geographical-indications-and-quality-schemes/geographical-indications-registers_en"
      }
    ]
  },
  {
    id:"wheat",
    name:"The Wheat Trail",
    ingredient:"WHEAT",
    icon:"🌾",
    theme:"#D7C277",
    question:"How can conflict at a port affect bread markets thousands of kilometres away?",
    intro:"Follow Ukrainian grain through export terminals, the Black Sea corridor and international food security.",
    related:"grain",
    stages:[
      {
        title:"The wheat harvest",
        place:"Ukraine",
        city:"Ukrainian agricultural regions",
        coordinates:[48.1,32.3],
        chapter:"PRODUCTION",
        story:"Ukraine is an important agricultural exporter. Wheat production depends on farmland, labour, inputs and access to storage and transport.",
        economics:"A good harvest does not guarantee export revenue when transport infrastructure or ports are disrupted.",
        actors:["Farmers","Grain handlers","Agricultural traders"],
        principle:"Production versus market access",
        question:"What happens when production exists but delivery becomes difficult?",
        source:"https://www.fao.org/"
      },
      {
        title:"The export terminal",
        place:"Ukraine",
        city:"Odesa",
        coordinates:[46.482,30.723],
        chapter:"LOGISTICS",
        story:"Grain needs port handling, storage, shipping services and safe passage. War increases transport risks and may disrupt access to international buyers.",
        economics:"Logistics are a real production-chain input. Higher transport costs or restricted shipping capacity can influence traded prices and export profitability.",
        actors:["Port operators","Shipping firms","Exporters"],
        principle:"Supply-chain bottlenecks",
        question:"How does transport risk affect the effective supply available to overseas markets?",
        source:"https://www.un.org/en/black-sea-grain-initiative/faq"
      },
      {
        title:"The Black Sea corridor",
        place:"Türkiye",
        city:"Istanbul · Coordination centre",
        coordinates:[41.009,28.978],
        chapter:"DIPLOMACY",
        story:"The Black Sea Grain Initiative facilitated exports from three designated Ukrainian ports from August 2022 to July 2023, with coordination arrangements involving the UN and Türkiye.",
        economics:"The initiative illustrates how diplomatic arrangements can help reduce logistical barriers during a conflict.",
        actors:["Ukraine","Türkiye","United Nations","Shipping firms"],
        principle:"Trade facilitation",
        question:"Can diplomacy act as an economic input by enabling trade?",
        source:"https://www.un.org/en/black-sea-grain-initiative/update-15-july-2023",
        metric:{value:"32.8M",unit:"tonnes",label:"Cumulative food and grain exports under the initiative, reported July 2023"}
      },
      {
        title:"The global bread connection",
        place:"International grain markets",
        city:"Global food markets",
        coordinates:[25,15],
        chapter:"FOOD SECURITY",
        story:"Disruptions to a major export corridor may affect global availability, expectations, shipping costs and market prices. The actual effect depends on other producers, stocks, demand and substitute sources.",
        economics:"A negative supply shock can shift the supply curve and increase equilibrium prices, other things equal. An observed price change cannot be attributed to war alone without evidence.",
        actors:["Importing countries","Flour mills","Bakeries","Households"],
        principle:"International price transmission",
        question:"Why can households distant from a conflict experience economic consequences?",
        source:"https://www.fao.org/worldfoodsituation/foodpricesindex/en/"
      }
    ]
  },
  {
    id:"onions",
    name:"The Onion Trail",
    ingredient:"ONIONS",
    icon:"🧅",
    theme:"#DA9C91",
    question:"Who wins and loses when a government restricts food exports?",
    intro:"Follow onions from Nashik-area growers to domestic markets, trade policy and import-dependent buyers.",
    related:"onion",
    stages:[
      {
        title:"The onion harvest",
        place:"India",
        city:"Nashik",
        coordinates:[19.997,73.79],
        chapter:"PRODUCTION",
        story:"Growers face yield uncertainty, post-harvest losses, storage costs and changing wholesale prices. A strong selling price may help producers while raising concerns over consumer affordability.",
        economics:"Farmers and households can have different preferences about prices because farmers are sellers while most households are buyers.",
        actors:["Farmers","Storage operators","Agricultural traders"],
        principle:"Producer versus consumer welfare",
        question:"Why can a high onion price be good news for one group and bad news for another?",
        source:"https://www.pib.gov.in/Pressreleaseshare.aspx?PRID=1985229"
      },
      {
        title:"The wholesale market",
        place:"India",
        city:"Domestic distribution networks",
        coordinates:[21,76],
        chapter:"DISTRIBUTION",
        story:"Onions are sorted, stored, transported and traded through wholesale markets before reaching shops and kitchens. Price changes depend on harvest arrivals, storage, transport and demand.",
        economics:"Wholesale and retail prices differ because of distribution costs, spoilage, market conditions and retail services.",
        actors:["Wholesalers","Transporters","Retailers"],
        principle:"Price transmission",
        question:"Why might a wholesale price change fail to reach consumers immediately?",
        source:"https://consumeraffairs.gov.in/"
      },
      {
        title:"An export prohibition",
        place:"India",
        city:"National trade policy",
        coordinates:[28.614,77.209],
        chapter:"POLICY",
        story:"India prohibited specified onion exports effective December 8, 2023, citing domestic availability and consumer affordability. The restrictions changed in 2024, including a May reopening with price and duty conditions.",
        economics:"An export restriction can redirect some supply to domestic markets, while reducing export opportunities and potentially putting upward pressure on prices in importing markets.",
        actors:["Government","Farmers","Indian consumers","Exporters"],
        principle:"Trade restrictions",
        question:"Can protecting consumers at home disadvantage farmers or buyers abroad?",
        source:"https://commerce.gov.in/wp-content/uploads/2024/12/LS-SQ-No.-318-dt-17.12.2024.pdf",
        events:[
          "8 Dec 2023 — Export prohibition effective",
          "4 May 2024 — Reopening with floor price and duty",
          "13 Sep 2024 — Floor price removed and duty reduced"
        ]
      },
      {
        title:"Across the border",
        place:"Bangladesh",
        city:"Dhaka · Import-market anchor",
        coordinates:[23.81,90.413],
        chapter:"CROSS-BORDER EFFECT",
        story:"Import-dependent buyers can become vulnerable when a supplier country restricts exports. Bangladesh's onion market illustrates why trade links matter for the availability and pricing of everyday staples.",
        economics:"A reduction in available imports may shift an importing market's supply inward. The actual price effect depends on stocks, domestic production and alternative suppliers.",
        actors:["Importers","Bangladeshi consumers","Domestic producers","Traders"],
        principle:"Trade dependency",
        question:"How can countries reduce vulnerability to sudden restrictions by trading partners?",
        source:"https://www.pib.gov.in/Pressreleaseshare.aspx?PRID=1985229"
      }
    ]
  }
];
