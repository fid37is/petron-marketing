// All content below was taken from petron.com (and its linked official pages) on October 27, 2026.
// Re-check against the official site before changing or adding anything.

export const SITE = 'https://www.petron.com'
export const LOGO = 'https://www.petron.com/wp-content/uploads/2018/06/petron-logo@2x.png'
export const p = (path = '') => `${SITE}${path}`

export const social = [
  { label: 'Facebook', href: 'https://www.facebook.com/PetronCorporation' },
  { label: 'Instagram', href: 'https://www.instagram.com/petroncorporation/' },
  { label: 'X', href: 'https://twitter.com/Petron_Corp' },
  { label: 'LinkedIn', href: 'https://ph.linkedin.com/company/petron-corporation' },
  { label: 'YouTube', href: 'https://www.youtube.com/user/PetronCorp' },
]

export const nav = [
  ['About', '/#about'],
  ['Products', '/products'],
  ['Cards', '/#cards'],
  ['Car Care Center', '/#carcare'],
  ['Partner With Us', '/#partner'],
  ['Petron Foundation', '/#foundation'],
  ['Leadership', '/leadership'],
  ['Contact', '/#contact'],
]

export const hero = {
  eyebrow: 'Petron Corporation',
  title: 'The largest oil company in the Philippines.',
  text:
    'Our world-class petroleum products and petrochemicals fuel industries and the daily lives of millions of Filipinos and Malaysians, enabling growth and success in the communities we are proud to serve.',
}

export const stats = [
  { value: '90+', label: 'years as a partner in the country’s growth' },
  { value: '268,000', label: 'barrels per day combined refining capacity, Philippines and Malaysia' },
  { value: '180,000', label: 'barrels per day at the Petron Bataan Refinery, the country’s only remaining refinery' },
  { value: '~30', label: 'terminals across the archipelago' },
]

export const about = [
  'Petron supplies around 40% of the nation’s fuel needs through its refinery in Bataan, one of the most advanced in the region. The refinery processes crude oil into gasoline, diesel, LPG, jet fuel, kerosene and petrochemicals.',
  'From Bataan, products move mainly by sea to nearly 30 terminals across the archipelago. Through this distribution network Petron ensures reliable fuel supply to motorists, households, businesses and key industries, and supplies jet fuel to major international and domestic airlines at key airports.',
  'Our service station network, the widest in the country, brings Blaze 100, XCS, Xtra Advance, Turbo Diesel and Diesel Max to motorists and the public transport sector. Households and commercial users rely on our LPG brands, Gasul and Fiesta Gas, and Treats convenience stores offer food, beverages and personal items for motorists on the go.',
]

export const malaysia =
  'In Malaysia, Petron operates an 88,000-barrel-per-day refinery in Port Dickson, the Lumut PME Plant, 10 terminals including four affiliates, and a retail network of about 800 service stations.'

export const products = {
  Fuels: {
    intro: 'Three unleaded gasoline grades and two diesel products for motorists and the public transport sector.',
    items: [
      { name: 'Petron Blaze 100 Euro 6', tag: 'Gasoline', text: 'Our flagship brand and the only 100 RON (Research Octane Number) gasoline in the market.' },
      { name: 'Petron XCS', tag: 'Gasoline · 95 RON', text: 'Offers more engine protection with TriAction technology.' },
      { name: 'Petron Xtra Advance', tag: 'Gasoline · 91 RON', text: 'The same TriAction advantages with more focus on fuel economy.' },
      { name: 'Petron Turbo Diesel', tag: 'Diesel · Cetane 60', text: 'A high-performance diesel with a cetane number of 60, ideal for new-generation turbocharged diesel engines.' },
      { name: 'Petron Diesel Max', tag: 'Diesel', text: 'Everyday diesel for motorists and the public transport sector.' },
    ],
    href: p('/product_category/automotive-fuels/'),
  },
  'LPG': {
    intro: 'Petron Gasul is the leading LPG brand in the Philippine market, a clean-burning mixture of propane and butane used for cooking, lighting and industrial applications.',
    items: [
      { name: 'Gasul 2.7 kg', tag: 'Cylinder', text: 'Ideal for camping and outdoor use or for small families.' },
      { name: 'Gasul 7 kg', tag: 'Cylinder', text: 'Ideal for residential use. Available in snap-on and POL valve.' },
      { name: 'Gasul 11 kg and Gasul Elite 11 kg', tag: 'Cylinder', text: 'Ideal for residential and commercial use. Available in snap-on and POL valve.' },
      { name: 'Gasul 22 kg', tag: 'Cylinder', text: 'Ideal for commercial use.' },
      { name: 'Gasul 50 kg', tag: 'Cylinder', text: 'Ideal for industrial use.' },
      { name: 'Fiesta Gas', tag: 'LPG brand', text: 'Our second LPG brand for households and commercial users, sold through our nationwide retail presence.' },
    ],
    href: p('/product_category/liquefied-petroleum-gas-lpg/'),
  },
  Lubricants: {
    intro: 'Petron engine oils are available in Petron service stations, Petron Car Care Centers, participating workshops and spare parts shops, and other retail outlets.',
    items: [
      { name: 'Petron Blaze Racing', tag: 'Gasoline engine oil', text: 'Formulated with TS3 (Thermal Stress Stabilizing System). Range includes BR830 Fully Synthetic 5W-30, BR800 Fully Synthetic 5W-40, BR630 Synthetic Blend 5W-30, BR600 Synthetic Blend 10W-40, BR450 and BR400 Premium Multigrade, and BR200 Multigrade.' },
      { name: 'Petron Rev-X', tag: 'Diesel engine oil', text: 'Formulated with Dynamic Cleaning Technology (DC Tech). Includes Rev-X RX830 Fully Synthetic Diesel Engine Oil SAE 5W-30 for heavy-duty diesel engines.' },
      { name: 'Petron Sprint', tag: 'Motorcycle', text: 'Petron Sprint motorcycle oils and Sprint 4T scooter oils.' },
      { name: 'Specialty lubricants', tag: 'Other', text: 'Gear and transmission oils, high temperature protection, marine lubricants, industrial lubricants, aviation lubricants and Brake Fluid HTP DOT-4.' },
    ],
    href: p('/product_category/automotive-lubricants/'),
  },
  Industrial: {
    intro: 'Industrial petroleum products and petrochemicals for power generation, manufacturing, mining, agribusiness, aviation and marine customers.',
    items: [
      { name: 'Industrial fuels', tag: 'Fuel oil', text: 'Bunker Fuel Oil, Industrial Diesel Fuel, Special Fuel Oil (SFO), Intermediate Fuel Oil (IFO), LSFO-1 and IF-1 grades.' },
      { name: 'Aviation fuels', tag: 'Aviation', text: 'Jet A-1 and AVGAS.' },
      { name: 'Solvents and asphalt', tag: 'Specialty', text: 'Petron Gaas and Petron Asphalt.' },
      { name: 'Polypropylene', tag: 'Petrochemical', text: 'Biaxially Oriented Polypropylene (BOPP), Cast Polypropylene (CPP) and Inflated Polypropylene (IPP).' },
    ],
    href: p('/products/'),
  },
}

export const cards = [
  {
    name: 'Petron Value Card',
    text: 'Earn Petron Peso Points every time you buy Petron fuels, lubricants and Gasul LPG using cash, debit or credit cards (excluding the Petron Fleet Card). Points can be redeemed at Petron service stations nationwide, converted to Philippine Airlines Mabuhay Miles, AirAsia BIG points or Cebu Pacific GetGo points, or donated to Tulong Aral. A mobile app is available on iOS and Android.',
    facts: ['Available for ₱100 at participating service stations', 'petronvaluecard@petron.com', 'Hotline (02) 8-802-7777'],
    href: p('/petron-value-card/'),
  },
  {
    name: 'Petron Fleet Card',
    text: 'A smartchip-based fleet card for companies that want to manage and control their fleet of vehicles and move to cashless fuel transactions.',
    facts: ['PetronFleetCard@petron.com', 'Call (02) 8-802-7777'],
    href: p('/petron-fleet-card/'),
  },
  {
    name: 'Petron e-Fuel Card',
    text: 'A stored-value (prepaid) card to buy Petron fuels and lubricants at participating Petron stations nationwide. Reloadable, transferable, and your brand can be printed on it with prior arrangement.',
    facts: ['Minimum load ₱1,000 (₱50 card fee for less)', 'prepaidcard@petron.com', 'Call 8802-7777'],
    href: p('/petron-value-card/petron-e-fuel-card/'),
  },
  {
    name: 'Petron BPI Mastercard',
    text: 'A credit card for private motorists that combines Petron, BPI and Mastercard. Cardholders enjoy a 3% fuel rebate and ₱200 free fuel for newly approved principal cardholders.',
    facts: ['3% fuel rebate', '₱200 free fuel for new principal cardholders'],
    href: p('/petron-value-card/petron-bpi-mastercard/'),
  },
]

export const carCare = {
  text:
    'Petron Car Care Center (CCC) outlets offer a complete line of professional automotive maintenance and repair services, carried out by experienced technicians using modern tools and equipment. Customers enjoy “casa-like” quality services at reasonable prices. CCC is Petron’s automotive care brand and a one-stop shop for Petron’s full range of lubricants.',
  ccc: ['Change Oil', 'Brakes and Suspension', 'Underchassis and Transmission', 'Wheel Alignment and Balancing', 'Tire Change and Vulcanizing', 'ATF Exchanger'],
  express: ['Change Oil', 'Brakes and Suspension', 'Underchassis and Transmission', 'ATF Exchanger'],
  note:
    'CCC launched in 2007 and marked its 20th anniversary in 2026 with its first national franchisee convention on August 27 at the Sheraton Manila Hotel. Around 60 Car Care Centers operate nationwide, with a plan to grow to 100 outlets. CCC Express is a scaled-down, two-bay version focused on quick services.',
  email: 'carcarecenter@petron.com',
  href: p('/car-care-center/'),
}

export const partner = [
  {
    title: 'Dealership',
    text: 'Manage your own Petron service station. Download the dealership application form from petron.com and send it with the requirements. Only applications with complete requirements are reviewed.',
    lines: ['Email: Talk2Us@petron.com', 'Tel: #PETRON (#738766)', 'Luzon: Ground Floor, El Magnifico Building, Gen. Atienza St., San Antonio Village, Pasig 1605 Metro Manila', 'Visayas: Network Development Group, Petron Mandaue Terminal, Looc, Mandaue City, Cebu', 'Mindanao: Network Development Group, Petron Tagoloan Terminal, Casinglot, Tagoloan, Misamis Oriental'],
    href: p('/be-a-petron-partner/'),
    cta: 'Dealership details',
  },
  {
    title: 'Gasul and Fiesta Gas',
    text: 'For Gasul or Fiesta Gas dealership, franchise or outlet inquiries, call or text. Application forms are available through petron.com.',
    lines: ['Call #738766', 'Text 0919-160-7111', 'Gasul assistance: #88000 or text 0917-878-8000'],
    href: p('/faq_support/products-and-services/'),
    cta: 'Gasul FAQs',
  },
  {
    title: 'Car Care Center franchise',
    text: 'Interested in investing in your own CCC? Email your name, contact details, proposed location and lot plan for initial evaluation.',
    lines: ['carcarecenter@petron.com'],
    href: p('/car-care-center/'),
    cta: 'Car Care Center',
  },
  {
    title: 'Vendors and non-fuel business',
    text: 'Be a Petron business partner as a vendor, or explore non-fuel opportunities.',
    lines: ['nonfuelbusiness@petron.com'],
    href: p('/be-a-vendor-partner/'),
    cta: 'Be a vendor',
  },
  {
    title: 'Careers',
    text: 'Fuel your career with the industry leader.',
    lines: [],
    href: p('/careers/'),
    cta: 'View careers',
  },
]

export const foundation = {
  text:
    'Under the banner advocacy Fuel HOPE, Petron channels its resources into inclusive, sustainable change through Petron Foundation, Inc., its corporate social responsibility arm. Its flagship program, Tulong Aral ng Petron (TAP), fuels HOPE (Helping the Filipino Children and Youth Overcome Poverty through Education). With volunteerism as its backbone, Petron’s CSR programs have made a difference in over a million lives.',
  programs: ['Education', 'Environment', 'Health and Community Engagement', 'Livelihood'],
  stats: [
    { value: '2,433', label: 'Tulong Aral ng Petron scholars, elementary to college, SY 2023-2024' },
    { value: '4,320', label: 'beneficiaries of the Livelihood Loan Assistance Program since 2011' },
  ],
  href: p('/petron-foundation-inc/'),
}

export const board = [
  'Ramon S. Ang',
  'Lubin B. Nepomuceno',
  'Ron W. Haddock',
  'Mirzan Mahathir',
  'Aurora T. Calderon',
  'Francis H. Jardeleza',
  'Virgilio S. Jacinto',
  'Nelly Favis-Villafuerte',
  'John Paul L. Ang',
  'Emmanuel E. Eraña',
  'Jacqueline L. Ang',
  'Rey Leonardo B. Guerrero',
]

export const independents = ['Consuelo M. Ynares-Santiago', 'Teresita J. Leonardo-de Castro', 'Ricardo C. Marquez']

export const management = [
  ['Ramon S. Ang', 'Chairman and Chief Executive Officer'],
  ['John Paul L. Ang', 'President and Chief Operating Officer'],
  ['Lubin B. Nepomuceno', 'General Manager'],
  ['Emmanuel E. Eraña', 'Senior Vice President and Chief Finance Officer'],
  ['Freddie P. Yumang', 'Senior Vice President and Chief Risk Officer'],
  ['Maria Rowena O. Cortez', 'Vice President, Supply'],
  ['Albertito S. Sarte', 'Vice President'],
  ['Jaime O. Lu', 'Vice President and Executive Assistant, Petron Malaysia Operations and External Projects'],
  ['Maria Rosario D. Vergel de Dios', 'Vice President, Human Resources Management'],
  ['Magnolia Cecilia D. Uy', 'Vice President, Retail Sales'],
  ['Myrna C. Geronimo', 'Vice President, Deputy Chief Finance Officer and Treasurer'],
  ['Allister J. Go', 'Vice President, Refinery Division'],
  ['Virgilio V. Centeno', 'Vice President, Industrial Sales'],
  ['Lemuel C. Cuezon', 'Vice President, Marketing'],
  ['Jhoanna Jasmine M. Javier-Elacio', 'Vice President, General Counsel and Corporate Secretary/Compliance Officer'],
]

export const news = [
  {
    date: 'September 2, 2026',
    title: 'Petron hosts national Car Care Center convention as CCC marks 20 years',
    text: 'Petron hosted a national convention for its CCC franchisees on August 27 at the Sheraton Manila Hotel, celebrating two decades of the automotive care brand.',
    href: p('/news/petron-hosts-national-car-care-center-convention-as-ccc-marks-20-years/'),
  },
  {
    date: 'August 4, 2026',
    title: 'Petron delivers P3.8 billion net income amid challenging first-half',
    text: 'Net income for the first half of 2026 was P3.8 billion, 27% lower than the same period last year, largely due to geopolitical tensions in the Middle East that pushed crude prices, import premiums and freight costs to record levels.',
    href: p('/news/petron-delivers-p3-8-billion-net-income-amid-challenging-first-half/'),
  },
  {
    date: 'June 25, 2026',
    title: 'Petron Bataan Refinery achieves triple ISO Recertification',
    text: 'The Refining Division successfully recertified its Integrated Management System for three ISO standards following an audit by TÜV SÜD Philippines.',
    href: p('/news/petron-bataan-refinery-achieves-triple-iso-recertification/'),
  },
]

export const contacts = [
  {
    title: 'Talk2Us (customer feedback)',
    lines: ['Email: talk2us@petron.com', 'SMS: (+63) 919-160-7111', 'Hotlines: (+632) 8802-7777 · #PETRON (#738766)'],
    href: p('/support'),
    cta: 'Petron Support page',
  },
  {
    title: 'Head office',
    lines: ['San Miguel Corp. Head Office Complex', '40 San Miguel Avenue, 1550 Mandaluyong City', '(632) 8-884-9200'],
  },
  {
    title: 'Investor Relations',
    lines: ['Email: investorrelations@petron.com', 'Tel: (632) 8-884-9200', '40 San Miguel Avenue, 1550 Mandaluyong City'],
    href: p('/investor-relations/'),
    cta: 'Investor Relations',
  },
  {
    title: 'Shareholder service',
    lines: ['SMC Stock Transfer Service Corporation', 'Tel: (632) 8-632-3450 to 52', 'Email: smc_stsc@sanmiguel.com.ph'],
  },
  {
    title: 'Data privacy',
    lines: ['Data Protection Officer', 'Email: dataprotectionofficer@petron.com', 'Tel: (632) 8-884-9200'],
    href: p('/data-privacy/'),
    cta: 'Privacy statement',
  },
  {
    title: 'Petron Malaysia',
    lines: ['Tel: +603-2082 8400 / +603-2082 8600', 'Email: petroncare@petron.com.my'],
    href: 'https://www.petron.com.my/web/',
    cta: 'petron.com.my',
  },
]

export const advisory =
  'We wish to remind the public to be wary of scammers using Petron Corporation. To protect yourself from fraudulent activities, visit our official websites and social media accounts for the list of our legitimate products, promos, and investment offers. Report any suspicious activity to Talk2Us@petron.com.'

export const parentLinks = [
  ['Who We Are', p('/who-we-are/')],
  ['Our History', p('/who-we-are/our-history/')],
  ['Our Facilities', p('/who-we-are/our-facilities/')],
  ['Our Distribution', p('/who-we-are/our-distribution/')],
  ['Board of Directors and Management', p('/who-we-are/our-board-of-directors/')],
  ['Products', p('/products/')],
  ['Promotions', p('/latest-promotions/')],
  ['Sustainability', p('/sustainability/')],
  ['Investor Relations', p('/investor-relations/')],
  ['Newsroom', p('/newsroom/')],
  ['Careers', p('/careers/')],
  ['Cyber Protection', p('/cyber-protection/')],
  ['Product Protection', p('/product-protection/')],
]
