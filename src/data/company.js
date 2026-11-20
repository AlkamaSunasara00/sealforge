export const companyInfo = {
  name: "SealForge",
  legalName: "SealForge Engineering",
  tagline: "PRECISION . PERFORMANCE . TRUST .",
  vision: "ENGINEERED FOR A BETTER TOMORROW.",
  subheading: "Indian Engineering For A Better Tomorrow",
  phone: "+91 99878 15272",
  phoneDisplay: "+91 99878 15272",
  email: "sales@sealforge.in",
  website: "www.sealforge.in",
  address: {
    line1: "A1 Chunawala Compound, LBS Marg",
    line2: "Kurla (West), Mumbai 400 070",
    state: "Maharashtra",
    country: "India",
    full: "A1 Chunawala Compound, LBS Marg, Kurla (West), Mumbai 400 070, Maharashtra, India"
  },
  operatingHours: "Monday – Saturday: 9:00 AM – 7:00 PM IST",
  stats: [
    { label: "Shaft Diameters", value: "25 – 400+ mm", desc: "Standard & Custom engineered" },
    { label: "Pumping Capacity", value: "Up to 600 m³/hr", desc: "ISO 5199 / 2858 compliant" },
    { label: "Operating Temps", value: "-30°C to +260°C", desc: "Elastomer & face options" },
    { label: "Testing Rigor", value: "100% Tested", desc: "Hydrostatic & dynamic bench tested" }
  ]
};

export const cataloguesData = [
  {
    id: "mechanical-seals",
    title: "Mechanical Seals Catalogue",
    series: "SF-B, SF-U, SF-C, SF-S, SF-M, SF-G",
    tagline: "Engineered For A Better Tomorrow",
    desc: "Complete technical reference for balanced, unbalanced, single coil, multi-spring, cartridge, and OEM replacement mechanical seals. Includes fluid compatibility guide, API flush plans, and face material limits.",
    pages: 12,
    size: "11.1 MB",
    pdfPath: "/downloads/sealforge-mechanical-seals-catalogue.pdf",
    coverImg: "/images/catalogue/mechanical-seals-p1.webp",
    previewPages: [
      "/images/catalogue/mechanical-seals-p1.webp",
      "/images/catalogue/mechanical-seals-p2.webp",
      "/images/catalogue/mechanical-seals-p6.webp",
      "/images/catalogue/mechanical-seals-p8.webp"
    ],
    highlights: [
      "Face materials: Carbon, Silicon Carbide (SSiC), Tungsten Carbide",
      "Metallurgy: SS 316, Hastelloy C-276 springs",
      "Secondary seals: NBR, EPDM, FKM, FFKM, PTFE, Graphite",
      "Full API 682 flush plan guidelines & dimensional tables"
    ]
  },
  {
    id: "cutlass-bearings",
    title: "Cutlass Bearings Catalogue",
    series: "Water-Lubricated Sleeve & Flanged Bearings",
    tagline: "Reliable Support For Rotating Shafts",
    desc: "Engineered water-lubricated sleeve bearings designed to provide dependable support for rotating shafts with ultra-low friction, high abrasion resistance, and long-term durability in marine and pump applications.",
    pages: 6,
    size: "13.1 MB",
    pdfPath: "/downloads/sealforge-cutlass-bearings-catalogue.pdf",
    coverImg: "/images/catalogue/cutlass-bearings-p1.webp",
    previewPages: [
      "/images/catalogue/cutlass-bearings-p1.webp",
      "/images/catalogue/cutlass-bearings-p2.webp",
      "/images/catalogue/cutlass-bearings-p3.webp",
      "/images/catalogue/cutlass-bearings-p5.webp"
    ],
    highlights: [
      "Shaft sizes from 25 mm to 400 mm standard (custom larger on request)",
      "Metallic shells: Bronze, Stainless Steel, Mild Steel",
      "Non-metallic shells: Phenolic & reinforced composites",
      "Specially formulated fluted nitrile rubber lining for hydrodynamic water film"
    ]
  },
  {
    id: "industrial-pumps",
    title: "Industrial Process Pumps Catalogue",
    series: "Metallic, Non-Metallic & Polymer-Lined Overhung",
    tagline: "Engineered For Severe Fluid Handling",
    desc: "Robust centrifugal overhung and end-suction process pumps built according to ISO 5199 / 2858 and ANSI B16.5 standards for corrosive acids, aggressive chemicals, slurry, and high-purity industrial transfers.",
    pages: 10,
    size: "16.5 MB",
    pdfPath: "/downloads/sealforge-industrial-pumps-catalogue.pdf",
    coverImg: "/images/catalogue/industrial-pumps-p1.webp",
    previewPages: [
      "/images/catalogue/industrial-pumps-p1.webp",
      "/images/catalogue/industrial-pumps-p2.webp",
      "/images/catalogue/industrial-pumps-p3.webp",
      "/images/catalogue/industrial-pumps-p5.webp"
    ],
    highlights: [
      "Open, semi-open, and closed impeller configurations",
      "Capacities up to 600 m³/hr and differential heads up to 160 m",
      "Solid polymer (PP, PVDF, UHMWPE) for corrosive acid transfers",
      "Polymer-lined (PP / PVDF / FEP / PFA) with ductile iron armor"
    ]
  }
];

export const productCategories = [
  {
    id: "mechanical-seals",
    title: "Mechanical Seals",
    tagline: "Engineered sealing solutions for high pressure, temperature & corrosive services",
    image: "/images/catalogue/mechanical-seals-p1.webp",
    badge: "API 682 & ISO Standards",
    catalogueLink: "/downloads/sealforge-mechanical-seals-catalogue.pdf",
    features: [
      "Balanced & Unbalanced Configurations",
      "Single Coil Spring & Multi-Spring Systems",
      "Cartridge Pre-Assembled Units",
      "OEM Interchangeable (Grundfos, Flowserve, EagleBurgmann)"
    ],
    products: [
      {
        name: "SF-B Series Balanced Mechanical Seal",
        code: "SF-B Series",
        specs: "Pressure: Up to 35 bar | Temp: -30°C to +220°C | Speed: Up to 25 m/s",
        desc: "Designed for high-pressure industrial pumps, hydrocarbons, and chemical transfer services where pressure balancing reduces frictional heat and face wear.",
        materials: "SS 316 Gland, SSiC / Carbon Faces, C-276 Springs, FKM / FFKM O-rings"
      },
      {
        name: "SF-U Series Unbalanced Seal",
        code: "SF-U Series",
        specs: "Pressure: Up to 12 bar | Temp: -20°C to +180°C | Speed: Up to 15 m/s",
        desc: "Rugged and versatile mechanical seal for standard industrial centrifugal pumps, clear liquids, and moderate operating duties.",
        materials: "316 Stainless Steel, Carbon vs Silicon Carbide, NBR / EPDM / FKM"
      },
      {
        name: "SF-C Series Cartridge Mechanical Seal",
        code: "SF-C Series",
        specs: "Pre-set axial clearance | Zero alignment error | Single & Dual seal",
        desc: "Pre-assembled cartridge package ready for quick bolt-on installation without sleeve or setting clips calculation errors.",
        materials: "Precision machined gland, integrated flush/quench ports, multi-spring design"
      },
      {
        name: "SF-S Series Single Coil Spring Seal",
        code: "SF-S Series",
        specs: "Non-clogging spring | Viscous fluids & slurries | Bi-directional options",
        desc: "Heavy-duty single coil spring seal resistant to clogging in dirty fluids, wastewater, paper pulp, and crystal-forming media.",
        materials: "Spring steel / SS316, Carbon / TC / SiC faces"
      },
      {
        name: "SF-G Series Grundfos Replacement Seals",
        code: "SF-G Series",
        specs: "Direct drop-in fit for CR, CRI, CRN series | 12mm, 16mm, 22mm shafts",
        desc: "Precision dimensional drop-in replacement seals engineered specifically for Grundfos vertical multistage and inline pumps.",
        materials: "Silicon carbide faces, Viton / EPDM elastomers, SS316 cartridge collar"
      }
    ]
  },
  {
    id: "cutlass-bearings",
    title: "Cutlass Bearings",
    tagline: "Water-lubricated sleeve bearings for marine propeller shafts & vertical pumps",
    image: "/images/catalogue/cutlass-bearings-p1.webp",
    badge: "25 mm to 400 mm+ Range",
    catalogueLink: "/downloads/sealforge-cutlass-bearings-catalogue.pdf",
    features: [
      "Water Lubricated — Zero Oil Contamination",
      "Brass, Bronze & Stainless Steel Outer Shells",
      "Non-Metallic Reinforced Composite Shells",
      "Hydrodynamic Fluted Lubrication Grooves"
    ],
    products: [
      {
        name: "Cylindrical Sleeve Cutlass Bearings",
        code: "CB-CYL Series",
        specs: "Shaft Dia: 25 mm to 400 mm | Marine & Industrial | Press-fit design",
        desc: "Full cylindrical sleeve bearings designed for stern tubes, strut brackets, rudder stocks, and vertical turbine submerged pump shafts.",
        materials: "Naval Brass / Gunmetal Bronze shell with molded oil-resistant nitrile rubber"
      },
      {
        name: "Flanged Cutlass Bearings",
        code: "CB-FLG Series",
        specs: "Integrated bolting flange | Axial retention | Marine propulsion shafts",
        desc: "Flanged sleeve bearings with precision bolt circles ensuring positive axial positioning and simplified extraction in stern tubes.",
        materials: "Heavy wall bronze casting or stainless steel casing with internal flutes"
      },
      {
        name: "Non-Metallic Composite Shell Bearings",
        code: "CB-NMC Series",
        specs: "Zero galvanic corrosion | Lightweight | Seawater & harsh brine service",
        desc: "Formulated with non-metallic phenolic / composite outer shells to completely eliminate galvanic corrosion between shell and aluminum or steel housings.",
        materials: "Reinforced synthetic resin shell with low-friction elastomer lining"
      }
    ]
  },
  {
    id: "industrial-pumps",
    title: "Industrial Process Pumps",
    tagline: "Heavy-duty metallic, solid polymer & polymer-lined centrifugal process pumps",
    image: "/images/catalogue/industrial-pumps-p1.webp",
    badge: "ISO 5199 / ISO 2858 / ANSI B16.5",
    catalogueLink: "/downloads/sealforge-industrial-pumps-catalogue.pdf",
    features: [
      "Metallic Overhung (Open & Closed Impellers)",
      "Solid Polymer Pumps (PP / PVDF / UHMWPE)",
      "Polymer-Lined End-Suction Pumps (PFA / FEP / PVDF)",
      "Capacities up to 600 m³/hr, Heads up to 160m"
    ],
    products: [
      {
        name: "Metallic Overhung Centrifugal Pumps",
        code: "SF-PUM-MET",
        specs: "Capacity: Up to 600 m³/hr | Head: Up to 160 m | ISO 5199 / 2858",
        desc: "Robust metallic overhung pumps with open, semi-open, or closed impellers for chemical, petrochemical, and general industrial liquid transfer.",
        materials: "Cast Iron, Cast Steel, SS 304, SS 316, Duplex SS, Alloy 20"
      },
      {
        name: "Solid Non-Metallic Chemical Pumps",
        code: "SF-PUM-POLY",
        specs: "100% Non-Metallic wetted parts | Hydrochloric, sulfuric, pickling acids",
        desc: "Engineered from massive compression-molded polypropylene or PVDF to handle aggressive acids and corrosive media without metallic contact.",
        materials: "Solid PP, PVDF, UHMWPE wetted casings and impellers"
      },
      {
        name: "Polymer-Lined Overhung Pumps",
        code: "SF-PUM-LINED",
        specs: "Ductile Iron armor casing | PFA / FEP / PVDF fluoropolymer lining",
        desc: "Combines the mechanical robustness and pressure containment of ductile iron with the universal chemical inertness of virgin fluoropolymers.",
        materials: "Ductile Iron armor, seamless transfer-molded PFA/FEP liner, ANSI B16.5 Class 150"
      }
    ]
  }
];

export const materialMatrix = [
  {
    category: "Elastomers & Secondary Seals",
    items: [
      { name: "NBR (Nitrile)", temp: "-30°C to +120°C", fluids: "Clean water, cooling water, mineral oils, hydraulic fluids", rating: "Standard" },
      { name: "EPDM", temp: "-40°C to +150°C", fluids: "Hot water, steam, dilute alkalis, ketones, alcohols (not for oils)", rating: "High Steam" },
      { name: "FKM (Fluorocarbon / Viton)", temp: "-20°C to +200°C", fluids: "Hydrocarbons, fuels, mineral oils, dilute acids", rating: "Versatile" },
      { name: "PTFE (Teflon)", temp: "-50°C to +230°C", fluids: "Aggressive acids, corrosive chemicals, universal chemical resistance", rating: "Universal" },
      { name: "FFKM (Perfluoroelastomer)", temp: "-15°C to +300°C", fluids: "Extreme solvents, harsh chemical synthesis, aggressive oxidizers", rating: "Extreme Duty" },
      { name: "Flexible Graphite", temp: "-200°C to +450°C", fluids: "High temperature hydrocarbons, boiler feed, thermal fluids", rating: "High Temp" }
    ]
  },
  {
    category: "Seal Faces & Hard Materials",
    items: [
      { name: "Resin-Impregnated Carbon", desc: "Standard stationary/rotary face, self-lubricating, low friction", hardness: "Medium" },
      { name: "Sintered Silicon Carbide (SSiC)", desc: "Extreme hardness, chemical inertness, high thermal conductivity", hardness: "Ultra-Hard" },
      { name: "Tungsten Carbide (Nickel / Cobalt Binder)", desc: "High shock resistance, slurry, abrasive handling", hardness: "High Toughness" }
    ]
  },
  {
    category: "Metallurgy & Spring Hardware",
    items: [
      { name: "AISI 316 Stainless Steel", desc: "Standard glands, sleeves, drive rings, set screws", standard: "ASTM A276" },
      { name: "Hastelloy C-276 Springs", desc: "Standard multi-spring and single spring alloy for supreme corrosion resistance", standard: "UNS N10276" },
      { name: "Duplex & Super Duplex (2205 / 2507)", desc: "Seawater, high chloride environments, high strength applications", standard: "EN 1.4462" }
    ]
  }
];

export const industriesData = [
  {
    title: "Chemical & Petrochemical",
    desc: "Engineered seals and lined pumps handling concentrated acids, aromatics, solvents, and hazardous hydrocarbons.",
    stat: "Zero-Leakage API 682"
  },
  {
    title: "Marine & Shipbuilding",
    desc: "Water-lubricated cutlass sleeve bearings and propulsion shaft seals for commercial vessels, tugs, and offshore craft.",
    stat: "Seawater Resistant"
  },
  {
    title: "Power Generation & Boilers",
    desc: "High-pressure boiler feed pumps, condensate extraction, and flue gas desulfurization (FGD) slurry seal systems.",
    stat: "High Temp & Pressure"
  },
  {
    title: "Water & Wastewater Management",
    desc: "Heavy-duty pumps and clog-free single spring mechanical seals for raw wastewater, sewage, and municipal water.",
    stat: "Abrasion Proof"
  },
  {
    title: "Pharmaceutical & Fine Chemicals",
    desc: "Sanitary grade cartridge seals and solid polymer chemical pumps ensuring non-contaminating fluid transfer.",
    stat: "FDA / USP Compliant"
  },
  {
    title: "Mining, Metals & Fertilizer",
    desc: "Extreme duty slurry seals and overhung pumps with silicon carbide / tungsten carbide faces resisting severe erosion.",
    stat: "Slurry & Acid Ready"
  }
];

