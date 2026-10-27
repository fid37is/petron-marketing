// Full product catalog, taken from the product categories published on petron.com (October 27, 2026).
// Each item is [name, detail]. Keep names exactly as petron.com lists them.

export const catalog = [
  {
    id: 'fuels',
    title: 'Automotive Fuels',
    intro: 'Unleaded gasoline and diesel for motorists and the public transport sector. Blaze 100 Euro 6 is our flagship and the only 100 RON gasoline in the market.',
    groups: [
      {
        name: 'Gasoline',
        items: [
          ['Petron Blaze 100 Euro 6', '100 RON · flagship gasoline'],
          ['Petron XCS', '95 RON · more engine protection with TriAction'],
          ['Petron Xtra Advance', '91 RON · TriAction with more focus on fuel economy'],
        ],
      },
      {
        name: 'Diesel',
        items: [
          ['Petron Turbo Diesel', 'Cetane number 60 · for new-generation turbocharged diesel engines'],
          ['Petron Diesel Max', 'Everyday diesel for motorists and public transport'],
        ],
      },
    ],
  },
  {
    id: 'lpg',
    title: 'Petron Gasul (LPG)',
    intro: 'The leading LPG brand in the Philippine market since the 1960s: clean-burning propane and butane for cooking, lighting and industrial applications. Cylinders carry a laser-printed seal for leak-free, exact-weight (saktong timbang) delivery.',
    groups: [
      {
        name: 'Gasul cylinders',
        items: [
          ['Petron Gasul 2.7 kg', 'Camping, outdoor use and small families · GS top and POL valve'],
          ['Petron Gasul 7 kg', 'Residential · snap-on and POL valve'],
          ['Petron Gasul 11 kg', 'Residential and commercial · snap-on and POL valve'],
          ['Petron Gasul Elite 11 kg', 'Residential and commercial'],
          ['Petron Gasul 22 kg', 'Commercial use'],
          ['Petron Gasul 50 kg', 'Industrial use'],
        ],
      },
      {
        name: 'Other LPG brand',
        items: [['Fiesta Gas', 'LPG for households and commercial users through our nationwide retail presence']],
      },
    ],
  },
  {
    id: 'gasoline-oils',
    title: 'Gasoline Engine Oils',
    intro: 'Petron Blaze Racing, formulated with TS3 (Thermal Stress Stabilizing System) for protection against engine stress.',
    groups: [
      {
        name: 'Petron Blaze Racing',
        items: [
          ['Blaze Racing BR830', 'Fully Synthetic · SAE 5W-30'],
          ['Blaze Racing BR800 (Ultron Race)', 'Fully Synthetic · SAE 5W-40'],
          ['Blaze Racing BR630', 'Synthetic Blend · SAE 5W-30'],
          ['Blaze Racing BR600', 'Synthetic Blend · SAE 10W-40'],
          ['Blaze Racing BR450 (Ultron Touring)', 'Premium Multigrade · SAE 20W-50'],
          ['Blaze Racing BR400 (Ultron Touring)', 'Premium Multigrade · SAE 15W-40'],
          ['Blaze Racing BR200 (Ultron Extra)', 'Multigrade · SAE 20W-40'],
        ],
      },
    ],
  },
  {
    id: 'diesel-oils',
    title: 'Diesel Engine Oils',
    intro: 'Petron Rev-X, formulated with Dynamic Cleaning Technology (DC Tech) for cleaner engines, more efficient operation and longer engine life.',
    groups: [
      {
        name: 'Petron Rev-X',
        items: [
          ['Rev-X RX830', 'Fully Synthetic · SAE 5W-30'],
          ['Rev-X RX800 (All Terrain)', 'Fully Synthetic · SAE 5W-40 · suited to vehicles with DPF and EGR'],
          ['Rev-X RX600', 'Synthetic Blend · SAE 10W-40'],
          ['Rev-X RX500', 'Premium Multigrade · SAE 15W-40 · API CK-4'],
          ['Rev-X RX400', 'Premium Multigrade · SAE 15W-40 · with DC Tech'],
          ['Rev-X HD 4X', 'Multigrade Mineral · SAE 15W-40'],
          ['Rev-X HD', 'Monograde Mineral · SAE 40'],
          ['Rev-X Hauler', 'Heavy-duty oil for diesel engines under severe conditions, mixed commercial fleets'],
        ],
      },
      { name: 'Other automotive oils', items: [['Petron STM 40', 'Listed under Other Automotive Oils']] },
    ],
  },
  {
    id: 'gear-oils',
    title: 'Gear and Transmission Oils',
    intro: 'Gear lubricants and transmission fluids for cars, trucks, heavy equipment and scooters.',
    groups: [
      {
        name: 'Gear oils and fluids',
        items: [
          ['Petron GX Series', 'Premium general-purpose gear lubricant · GX 80W-90 and GX 85W-140'],
          ['Petron GEP 90', 'General-purpose gear oil'],
          ['Petron Scooter Gear Oil', 'For gear boxes of automatic transmission motorcycles and scooters'],
          ['Petron ATF Premium', 'Mineral automatic and power-shift transmission fluid · Dexron III(H) and Ford Mercon'],
        ],
      },
    ],
  },
  {
    id: 'htp',
    title: 'High Temperature Protection (HTP)',
    intro: 'Premium products formulated for severe operating conditions and extreme temperatures.',
    groups: [
      {
        name: 'Petron HTP',
        items: [
          ['Petron ATF Premium HTP', 'Fully Synthetic · SAE 20 · high-temperature oxidation protection, smooth shifting'],
          ['Petron GHTP Gear Oil', 'SAE 75W-90 · low and high temperature application'],
          ['Petron Brake Fluid HTP', 'DOT-4'],
        ],
      },
    ],
  },
  {
    id: 'motorcycle',
    title: 'Motorcycle Lubricants',
    intro: 'Petron Sprint, a range of high-performance 4-stroke motorcycle oils with Thermal Control System (TCS) additive technology, plus a 2-stroke oil.',
    groups: [
      {
        name: 'Petron Sprint 4T motorcycle oils',
        items: [
          ['Sprint 4T HTP', 'Fully Synthetic · SAE 10W-40 · for big bikes, sports bikes and adventure bikes'],
          ['Sprint 4T SR800 (Racer)', 'Fully Synthetic · SAE 10W-40'],
          ['Sprint 4T SR600', 'Synthetic Blend · SAE 10W-40'],
          ['Sprint 4T SR400 (Enduro)', 'Premium Multigrade · SAE 15W-40'],
          ['Sprint 4T SR100', 'Monograde · SAE 40'],
        ],
      },
      {
        name: 'Petron Sprint 4T scooter oils',
        items: [
          ['Sprint 4T Scooter Fully Synthetic', 'SAE 5W-40 · automatic transmission motorcycles'],
          ['Sprint 4T SC600 Scooter Oil', 'Synthetic Blend · SAE 10W-40'],
          ['Sprint 4T Scooter Gear Oil', 'For four-stroke automatic transmission gear boxes'],
        ],
      },
      { name: 'Two-stroke', items: [['Petron 2T Premium', 'For 2-stroke motorcycles · 40 to 1 lube oil ratio']] },
    ],
  },
  {
    id: 'marine',
    title: 'Marine Lubricants',
    intro: 'Petromar and other marine lubricants.',
    groups: [
      {
        name: 'Marine range',
        items: [
          ['Petromar HF Series', 'HF (High TBN), HF (Low TBN), HF 1030, 1040, 1050, 1540, 2030, 2040, 3030, 3040, 4040 and 5040'],
          ['Petromar DCL 4040 and 4050', 'Marine lubricant'],
          ['Petromar 65', 'Marine lubricant'],
          ['MS 9250 and 9370', 'Marine lubricant'],
          ['Petron Marine HD Oil', 'Marine lubricant'],
        ],
      },
    ],
  },
  {
    id: 'industrial-lubes',
    title: 'Industrial Lubricants',
    intro: 'Circulating, turbine and hydraulic oils for power generation, marine and manufacturing customers.',
    groups: [
      {
        name: 'Hydrotur series',
        items: [
          ['Petron Hydrotur T', 'Turbine-grade circulating oil · ISO VG 32, 46 and 68 · steam turbines'],
          ['Petron Hydrotur AWGT', 'ISO VG 32 and 46 · recommended for gas turbines'],
          ['Petron Hydrotur TEP', 'ISO VG 68 and 77 · marine steam turbines and geared turbines'],
        ],
      },
    ],
  },
  {
    id: 'aviation',
    title: 'Aviation Lubricants',
    intro: 'Lubricants for aviation customers, listed with industrial petroleum products.',
    groups: [
      {
        name: 'Petron Aviation Lubricants',
        items: [
          ['Braycote 622', 'Aviation lubricant'],
          ['Nyco Grease GN 22', 'Aviation lubricant'],
          ['Hydraunycoil FH 51', 'Aviation lubricant'],
          ['Aviation Oil Elite 20W-50', 'Aviation lubricant'],
          ['Turbo Oil 2389 and Turbo Oil 2380', 'Aviation lubricant'],
          ['Turbonycoil 35 M and Turbonycoil 600', 'Aviation lubricant'],
        ],
      },
    ],
  },
  {
    id: 'industrial-fuels',
    title: 'Industrial Fuels and Asphalt',
    intro: 'Industrial petroleum products for power generation, manufacturing, mining, agribusiness, aviation and marine customers.',
    groups: [
      {
        name: 'Petron Fuels',
        items: [
          ['Bunker Fuel Oil (BFO)', 'Industrial petroleum product'],
          ['Industrial Diesel Fuel', 'Industrial petroleum product'],
          ['Special Fuel Oil (SFO)', 'SFO 60, 100, 200, 400, 600, 1100 and 1500'],
          ['Intermediate Fuel Oil (IFO) and LSFO-1', 'Industrial petroleum product'],
          ['IF-1 grades', 'IF-1, IF-30, IF-40, IF-60, IF-80, IF-100, IF-120, IF-150, IF-180, IF-240 and IF-380'],
          ['Jet A-1', 'Jet fuel supplied to international and domestic airlines at key airports'],
          ['AVGAS', 'Aviation fuel'],
          ['Petron Gaas', 'Industrial petroleum product'],
        ],
      },
      {
        name: 'Petron Asphalt',
        items: [
          ['Petromul CSS-1', 'Petron Asphalt'],
          ['Petropen 60/70 and 85/100', 'Petron Asphalt'],
          ['Petropen CB MC-70 and MC-250', 'Petron Asphalt'],
          ['Asphaltseal', 'Petron Asphalt'],
        ],
      },
    ],
  },
  {
    id: 'polypropylene',
    title: 'Polypropylene',
    intro: 'Petrolene polypropylene resins made from propylene produced at the Bataan refinery, in three product families.',
    groups: [
      {
        name: 'Product families',
        items: [
          ['Biaxially Oriented Polypropylene (BOPP)', 'Product family'],
          ['Cast Polypropylene (CPP)', 'Product family'],
          ['Inflated Polypropylene (IPP)', 'Product family'],
        ],
      },
      {
        name: 'Petrolene grades',
        items: [
          ['Petrolene 1100N', 'Polypropylene'],
          ['Petrolene 1102H, 1102K and 1102KL', 'Polypropylene'],
          ['Petrolene 1104JK and 1104M', 'Polypropylene'],
          ['Petrolene 1126N and 1129N', 'Inflated Polypropylene (IPP)'],
          ['Petrolene 1128N', 'IPP · water quenched blown film, medium slip and antiblocking · food and garment packaging film'],
        ],
      },
    ],
  },
]
