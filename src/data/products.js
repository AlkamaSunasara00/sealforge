import balancedSealImg from "@/assets/products/mechenical-seals/Balanced Mechanical Seal.webp";
import unbalancedSealImg from "@/assets/products/mechenical-seals/Unbalanced Mechanical Seal.webp";
import ptfeBellowsSealImg from "@/assets/products/mechenical-seals/PTFE-Teflon-Bellows-Seal.webp";
import singleCoilSpringSealImg from "@/assets/products/mechenical-seals/Single-Coil-Spring-Seal.webp";
import taperedCoilSpringSealImg from "@/assets/products/mechenical-seals/Tapered-Coil-Spring-Seal.webp";
import rubberBellowsSealImg from "@/assets/products/mechenical-seals/Rubber-Bellows-Seal.webp";
import grundfosReplacementSealImg from "@/assets/products/mechenical-seals/Grundfos-Pump-Replacement-Seals.webp";
import openImpellerPumpImg from "@/assets/products/pumps/Open Semi-Open Impeller-Overhung-Pumps.webp";
import closedImpellerPumpImg from "@/assets/products/pumps/Closed-Impeller-Overhung-Pumps.webp";
import solidPolymerPumpImg from "@/assets/products/pumps/Solid-Polymer-Moulded-Overhung-Pumps.webp";
import armouredPolymerPumpImg from "@/assets/products/pumps/Armoured-Solid-Polymer-Moulded-Overhung-Pumps.webp";
import polymerLinedPumpImg from "@/assets/products/pumps/Polymer-Lined-Overhung-End-Suction-Pumps.webp";
import cutlassBearingImg from "@/assets/products/cutlass-bearing/cutlass-bearing.webp";
import flutedProfileImg from "@/assets/products/cutlass-bearing/Fluted-Profile.webp";
import spiralProfileImg from "@/assets/products/cutlass-bearing/Spiral-Profile.webp";
import circularProfileImg from "@/assets/products/cutlass-bearing/Circular-Profile.webp";
import polygonProfileImg from "@/assets/products/cutlass-bearing/Polygon-Profile.webp";
import cylindricalShellImg from "@/assets/products/cutlass-bearing/CylindricalShell.webp";
import flangedShellImg from "@/assets/products/cutlass-bearing/Flanged-Shell.webp";

export const mechanicalSeals = [
  {
    id: "sf-b",
    series: "SF-B Series",
    name: "Balanced Mechanical Seal",
    tagline: "Hydraulically balanced for high-pressure & severe process duties.",
    image: balancedSealImg,
    stockImage: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    category: "mechanical-seals",
    badge: "Balanced | Single Acting",
    specs: {
      shaftDiameter: "14 mm – 100 mm",
      maxPressure: "Up to 25 bar",
      temperature: "-20 °C to +200 °C",
      speed: "Up to 20 m/s",
      standard: "EN 12756 (DIN 24960)",
    },
    materials: {
      rotaryFace: "Carbon standard; SSiC or Tungsten Carbide optional",
      stationaryFace: "Sintered Silicon Carbide standard; TC optional",
      elastomers: "FKM (Viton) standard; FFKM, EPDM, PTFE optional",
      springHardware: "Alloy C-276 (Hastelloy) springs, 316 Stainless Steel hardware",
    },
    features: [
      "Hydraulically balanced face profile reduces friction and heat generation under high pressure",
      "Single-acting, compact design with easily replaceable face components",
      "Standard anti-rotation pins prevent face spin-out during dynamic torque surges",
      "Heavy-duty drive lugs ensure positive torque transmission",
    ],
    applications: [
      "High-pressure centrifugal pumps",
      "Refinery & petrochemical process units",
      "Boiler feed and hot condensate circulation",
      "Chemical process transfer",
      "Demanding industrial utilities",
    ],
  },
  {
    id: "sf-u",
    series: "SF-U Series",
    name: "Unbalanced Mechanical Seal",
    tagline: "Cost-effective, dependable sealing for standard industrial pumps.",
    image: unbalancedSealImg,
    stockImage: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=800&q=80",
    category: "mechanical-seals",
    badge: "Unbalanced | Single Acting",
    specs: {
      shaftDiameter: "10 mm – 100 mm",
      maxPressure: "Up to 10–12 bar",
      temperature: "-20 °C to +180 °C",
      speed: "Up to 15–20 m/s",
      standard: "EN 12756 Standard",
    },
    materials: {
      rotaryFace: "Carbon Graphite (Resin / Antimony Impregnated)",
      stationaryFace: "High-Purity Alumina Ceramic standard; SSiC optional",
      elastomers: "NBR, EPDM, or FKM",
      springHardware: "304 or 316 Stainless Steel",
    },
    features: [
      "Rugged, economical unbalanced construction for low-to-medium pressure pumps",
      "Broad dimensional compatibility with standard stuffing boxes",
      "Quick component replacement during scheduled plant overhauls",
    ],
    applications: [
      "General centrifugal water pumps",
      "Cooling tower water circulation",
      "Mild chemical transfer",
      "Irrigation and wastewater booster pumps",
    ],
  },
  {
    id: "sf-p",
    series: "SF-P Series",
    name: "PTFE / Teflon Bellows Seal",
    tagline: "Outside-mounted design for highly corrosive & boiling acids.",
    image: ptfeBellowsSealImg,
    stockImage: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80",
    category: "mechanical-seals",
    badge: "Outside-Mounted | Chemical Bellows",
    specs: {
      shaftDiameter: "16 mm – 70 mm",
      maxPressure: "Up to 5 bar",
      temperature: "-20 °C to +120 °C",
      speed: "Up to 10–15 m/s",
      standard: "Chemical Equipment Fit",
    },
    materials: {
      rotaryFace: "Glass-Filled PTFE or Carbon",
      stationaryFace: "99.5% Alumina Ceramic or Sintered Silicon Carbide",
      elastomers: "Pure Virgin / Modified PTFE Bellows",
      springHardware: "316SS springs completely isolated outside the wetted fluid path",
    },
    features: [
      "Outside-mounted configuration isolates all metal springs from aggressive media",
      "Pure convoluted PTFE bellows provides universal chemical inertness",
      "Replaceable clamping rings and setting clips simplify installation on glass/plastic pumps",
    ],
    applications: [
      "Hydrochloric acid (HCl) & sulphuric acid (H2SO4)",
      "Nitric acid and aggressive chemical pickling",
      "Pharmaceutical batch reactors",
      "Glass-lined, plastic & fluoropolymer pumps",
    ],
  },
  {
    id: "sf-s",
    series: "SF-S Series",
    name: "Single Coil Spring Seal",
    tagline: "Heavy-duty non-clogging spring for slurries & viscous media.",
    image: singleCoilSpringSealImg,
    stockImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    category: "mechanical-seals",
    badge: "Non-Clogging | Single Spring",
    specs: {
      shaftDiameter: "10 mm – 100 mm",
      maxPressure: "Up to 10 bar",
      temperature: "-20 °C to +180 °C",
      speed: "Up to 15 m/s",
      standard: "Slurry & Process Fit",
    },
    materials: {
      rotaryFace: "Carbon, Silicon Carbide, or Tungsten Carbide",
      stationaryFace: "Silicon Carbide or Tungsten Carbide (hard-face pairing)",
      elastomers: "NBR, EPDM, or FKM",
      springHardware: "304 or 316 Stainless Steel heavy helical spring",
    },
    features: [
      "Large open single-coil spring prevents solids deposition and clogging",
      "Self-cleaning spring movement during rotational operation",
      "Available in right-hand or left-hand spring wind to match shaft rotation",
    ],
    applications: [
      "Raw sewage & effluent transfer",
      "Paper pulp and fibrous suspensions",
      "Sugar mill juice and molasses pumps",
      "Abrasive industrial washdown slurries",
    ],
  },
  {
    id: "sf-t",
    series: "SF-T Series",
    name: "Tapered Coil Spring Seal",
    tagline: "Compact axial fit with positive spring shaft drive.",
    image: taperedCoilSpringSealImg,
    stockImage: "https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf?auto=format&fit=crop&w=800&q=80",
    category: "mechanical-seals",
    badge: "Tapered Spring | Directional Drive",
    specs: {
      shaftDiameter: "12 mm – 90 mm",
      maxPressure: "Up to 10 bar",
      temperature: "-20 °C to +180 °C",
      speed: "Up to 20 m/s",
      standard: "Compact DIN Fit",
    },
    materials: {
      rotaryFace: "Carbon or Silicon Carbide",
      stationaryFace: "Ceramic or Silicon Carbide",
      elastomers: "NBR, EPDM, or FKM O-ring secondary seals",
      springHardware: "304 or 316 Stainless Steel",
    },
    features: [
      "Conical/tapered helical spring grips the shaft step to transmit torque without set screws",
      "Extremely compact axial length fits tight stuffing boxes",
      "Direction-dependent drive (RH wind clockwise, LH wind counter-clockwise)",
    ],
    applications: [
      "Water booster pumps & heating circulation",
      "Domestic & commercial building water systems",
      "Swimming pool and whirlpool circulation pumps",
      "Light industrial clean process pumps",
    ],
  },
  {
    id: "sf-mj",
    series: "SF-MJ Series",
    name: "Rubber Bellows Seal (MG & JC Type)",
    tagline: "Industry-standard elastomer bellows with self-aligning capabilities.",
    image: rubberBellowsSealImg,
    stockImage: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=800&q=80",
    category: "mechanical-seals",
    badge: "MG1 / MG12 / JC Style | Elastomer Bellows",
    specs: {
      shaftDiameter: "10 mm – 100 mm",
      maxPressure: "Up to 12–16 bar",
      temperature: "-20 °C to +140 °C",
      speed: "Up to 10–12 m/s",
      standard: "Metric EN 12756 Standard",
    },
    materials: {
      rotaryFace: "Carbon, Silicon Carbide, or Tungsten Carbide",
      stationaryFace: "Ceramic, Silicon Carbide, or Tungsten Carbide",
      elastomers: "NBR standard; EPDM, FKM, or HNBR optional",
      springHardware: "304 or 316 Stainless Steel single coil",
    },
    features: [
      "Elastomer bellows cushions shaft misalignment and absorbs axial play",
      "Non-clogging single spring provides uniform face pressure",
      "Direct dimensional replacement for common market codes (MG1, MG12, MG13, JC)",
    ],
    applications: [
      "Submersible borehole pumps",
      "HVAC chilled and hot water pumps",
      "Wastewater and sewage pump units",
      "General rotating equipment across utilities",
    ],
  },
  {
    id: "sf-g",
    series: "SF-G Series",
    name: "Grundfos Pump Replacement Seals",
    tagline: "Direct drop-in replacement seals for Grundfos multistage & centrifugal pumps.",
    image: grundfosReplacementSealImg,
    stockImage: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    category: "mechanical-seals",
    badge: "Grundfos CR / CRN / TP / NB Compatible",
    specs: {
      pumpModels: "CR, CRN, NB, NK, NKG, TP, TPE Series",
      sealConstructions: "Rubber Bellows, O-Ring Mounted, Balanced Cartridge",
      commonCodes: "HQQE, HQQV, BQQE, BQQV, DQQE, DQQV, SQQE, SQQV",
      speed: "Direct OEM Specifications",
      standard: "Model-by-Model Interchange",
    },
    materials: {
      rotaryFace: "Sintered Silicon Carbide standard",
      stationaryFace: "Sintered Silicon Carbide standard",
      elastomers: "EPDM (for water/glycol) or FKM (for oils/chemicals)",
      springHardware: "Stainless Steel cartridge sleeves and clips",
    },
    features: [
      "Exact dimensional interchange eliminates pump modification during maintenance",
      "Pre-assembled cartridge units (HQQE, HQQV) allow rapid, foolproof field replacement",
      "Silicon Carbide face pairings standard for superior wear life in abrasive/hot water",
    ],
    applications: [
      "CR / CRN vertical multistage booster pumps (CR1 through CR90)",
      "TP / TPE inline heating and chilled water circulation pumps",
      "NB / NK horizontal end-suction pumps",
      "Industrial boiler feed and water treatment systems",
    ],
    referenceTable: [
      {
        code: "HQQE",
        construction: "Balanced Cartridge Seal",
        combination: "Silicon Carbide / Silicon Carbide / EPDM",
        models: "CR / CRN 1, 3, 5, 10, 15, 20, 32, 45, 64, 90",
      },
      {
        code: "HQQV",
        construction: "Balanced Cartridge Seal",
        combination: "Silicon Carbide / Silicon Carbide / FKM",
        models: "CR / CRN Chemical & High Temp Duties",
      },
      {
        code: "BQQE",
        construction: "Rubber Bellows Unbalanced",
        combination: "Silicon Carbide / Silicon Carbide / EPDM",
        models: "NB / NK Centrifugal Water Pumps",
      },
      {
        code: "BQQV",
        construction: "Rubber Bellows Unbalanced",
        combination: "Silicon Carbide / Silicon Carbide / FKM",
        models: "NB / NK Hydrocarbon / Oil Duties",
      },
      {
        code: "DQQE",
        construction: "O-Ring Balanced Design",
        combination: "Silicon Carbide / Silicon Carbide / EPDM",
        models: "TP / TPE In-Line Circulation Pumps",
      },
      {
        code: "SQQE",
        construction: "Rubber Bellows Unbalanced",
        combination: "Silicon Carbide / Silicon Carbide / EPDM",
        models: "Selected Submersible & Multistage Pumps",
      },
    ],
  },
];

export const industrialPumps = [
  {
    id: "pump-open",
    subGroup: "1. Metallic Overhung Pumps",
    subNumber: "1.1",
    name: "Open / Semi-Open Impeller Overhung Pumps",
    designReference: "ANSI B73.1",
    tagline:
      "Designed for industrial services where flexibility in handling different process fluids and solids-containing or less-clean liquids is required.",
    image: openImpellerPumpImg,
    category: "industrial-pumps",
    badge: "1.1 Metallic Overhung | ANSI B73.1",
    specs: {
      pumpType: "Metallic overhung centrifugal pump",
      impellerType: "Open / Semi-open",
      standard: "ANSI B73.1",
      capacity: "Up to 120 m³/hr",
      head: "Up to 95 m",
      maxPressure: "Up to 16 bar",
      maxTemp: "Up to 175 °C",
      speed: "3600 rpm",
      flange: "ANSI B16.5 Class 150",
    },
    construction: {
      impellerType: "Open / Semi-open",
      sealing: "Inside-mounted Seal",
      moc: "Carbon Steel, Stainless Steel, Hastelloy and other metal alloy on request",
      options: "Cooling jacket, gland packing",
    },
    features: [
      "Open or semi-open impeller handles solids-containing and less-clean process liquids",
      "Metallic construction selected according to pumped medium and operating conditions",
      "Cost-effective and safe gland packing or inside-mounted mechanical seal options",
    ],
    applications: [
      "Chemical process transfer",
      "Water treatment",
      "Sugar processing",
      "Oil extraction",
      "General industrial fluid transfer",
      "Power plant services",
      "Oil & gas services",
      "Mining and mineral processing",
      "Irrigation",
      "Marine applications",
    ],
  },
  {
    id: "pump-closed",
    subGroup: "1. Metallic Overhung Pumps",
    subNumber: "1.2",
    name: "Closed Impeller Overhung Pumps",
    designReference: "ISO 5199 / 2858",
    tagline:
      "Intended for general industrial and process applications requiring higher hydraulic performance and a closed-impeller configuration.",
    image: closedImpellerPumpImg,
    category: "industrial-pumps",
    badge: "1.2 Metallic Overhung | ISO 5199 / 2858",
    specs: {
      pumpType: "Metallic overhung centrifugal pump",
      impellerType: "Closed",
      standard: "ISO 5199 / 2858",
      capacity: "Up to 600 m³/hr",
      head: "Up to 160 m",
      maxPressure: "Up to 21 bar",
      maxTemp: "Up to 175 °C",
      speed: "3600 rpm",
      flange: "ANSI B16.5 Class 150",
    },
    construction: {
      impellerType: "Closed",
      sealing: "Inside-mounted",
      moc: "Carbon Steel, Stainless Steel, Hastelloy and other metal alloy on request",
      options: "Cooling jacket, gland packing",
    },
    features: [
      "Precision closed impeller delivers higher hydraulic efficiency across continuous duties",
      "Engineered to ISO 5199 / 2858 dimensional and hydraulic standards",
      "Available with inside-mounted mechanical seal, cooling jacket, or gland packing",
    ],
    applications: [
      "Chemical process transfer",
      "Water treatment",
      "Sugar processing",
      "Oil extraction",
      "General industrial fluid transfer",
      "Power plant services",
      "Oil & gas services",
      "Mining and mineral processing",
      "Irrigation",
    ],
  },
  {
    id: "pump-polymer",
    subGroup: "2. Non-Metallic Overhung Pumps",
    subNumber: "2.1",
    name: "Solid Polymer Moulded Overhung Pumps",
    designReference: "ISO 5199 / 2858",
    tagline:
      "Intended for corrosive and chemically aggressive services where metallic construction may not provide the required material compatibility.",
    image: solidPolymerPumpImg,
    category: "industrial-pumps",
    badge: "2.1 Non-Metallic | Solid Polymer",
    specs: {
      pumpType: "Solid polymer moulded overhung centrifugal pump",
      impellerType: "Semi-open",
      standard: "ISO 5199 / 2858",
      capacity: "Up to 80 m³/hr",
      head: "Up to 60 m",
      maxPressure: "6 bar",
      maxTemp: "Up to 80 °C",
      speed: "3600 rpm",
      flange: "ANSI B16.5 Class 150",
    },
    construction: {
      impellerType: "Semi-open",
      sealing: "Outside-mounted seal",
      moc: "PP / GRPP / UHMWPE",
      options: "Gland packing",
    },
    features: [
      "100% solid polymer moulded wetted components eliminate metallic corrosion",
      "Outside-mounted mechanical seal isolates spring hardware from aggressive chemicals",
      "Available in PP, GRPP, and UHMWPE constructions",
    ],
    applications: [
      "Corrosive chemical transfer",
      "Aggressive chemical service",
      "Pharmaceutical processing",
      "Fertilizer processing",
      "Water treatment",
      "Power plant service",
      "Mining and mineral processing",
    ],
  },
  {
    id: "pump-armoured",
    subGroup: "2. Non-Metallic Overhung Pumps",
    subNumber: "2.2",
    name: "Armoured Solid Polymer Moulded Overhung Pumps",
    designReference: "ISO 5199 / 2858",
    tagline:
      "Intended for applications requiring the corrosion resistance of polymer construction together with additional structural support.",
    image: armouredPolymerPumpImg,
    category: "industrial-pumps",
    badge: "2.2 Non-Metallic | Armoured Polymer",
    specs: {
      pumpType: "Armoured solid polymer moulded overhung pump",
      standard: "ISO 5199 / 2858",
      capacity: "Up to 200 m³/hr",
      head: "Up to 200 m",
      maxPressure: "10 bar",
      maxTemp: "110 °C",
      speed: "2900 rpm",
      flange: "ANSI B16.5 Class 150",
    },
    construction: {
      sealing: "Fully enclosed seal",
      moc: "PP / GRPP / UHMWPE",
      options: "Lined polymer material with metal reinforcement",
    },
    features: [
      "Combines polymer chemical resistance with rigid external metal reinforcement",
      "Fully enclosed mechanical seal handles elevated pressure duties",
      "Designed to ISO 5199 / 2858 with ANSI B16.5 Class 150 flanges",
    ],
    applications: [
      "Corrosive chemical transfer",
      "Aggressive chemical service",
      "Pharmaceutical processing",
      "Fertilizer processing",
      "Water treatment",
      "Oil & gas services",
      "Power plant service",
    ],
  },
  {
    id: "pump-lined",
    subGroup: "3. Polymer-Lined Overhung / End-Suction Pumps",
    subNumber: "3.1",
    name: "Polymer-Lined Overhung / End-Suction Pumps",
    designReference: "ISO 5199 / 2858",
    tagline:
      "For highly corrosive process services using PP, PVDF, FEP, and PFA linings up to 230 °C and 16 bar.",
    image: polymerLinedPumpImg,
    category: "industrial-pumps",
    badge: "3. Polymer-Lined | PP / PVDF / FEP / PFA",
    specs: {
      pumpType: "Polymer-lined end-suction / Overhung pump with gland packing",
      impellerType: "Semi-open",
      standard: "ISO 5199 / 2858",
      capacity: "Up to 400–600 m³/hr",
      head: "Up to 100–120 m",
      maxPressure: "10 bar (16 bar for PVDF/FEP/PFA)",
      maxTemp: "Up to 120 °C (230 °C for PVDF/FEP/PFA)",
      speed: "3000 rpm",
      flange: "ANSI B16.5 Class 150",
    },
    construction: {
      impellerType: "Semi-open",
      sealing: "Inside / Outside mounted seal",
      moc: "PP / PVDF / FEP / PFA / PTFE",
      options: "Cooling jacket; single / double mechanical-seal options",
    },
    features: [
      "Suitable for highly corrosive liquids with PP, PVDF, FEP, and PFA lining options",
      "FEP/PFA/PVDF configurations rated up to 400 m³/hr, 100 m head, 16 bar, and 230 °C",
      "Inside or outside mounted mechanical seal with optional cooling jacket",
    ],
    applications: [
      "Chemical process transfer",
      "Pharmaceutical processing",
      "Fertilizer processing",
      "Power plant services",
      "Water treatment",
      "Food industry where applicable",
      "Oil & gas",
      "Mining & mineral processing",
    ],
  },
];

export const cutlassBearings = {
  id: "cutlass-bearings",
  name: "Water-Lubricated Cutlass Bearings",
  tagline:
    "Dependable, low-friction sleeve bearings for rotating shafts in marine and industrial pump applications.",
  image: cutlassBearingImg,
  category: "cutlass-bearings",
  badge: "Zero Oil Pollution | 25 mm – 400 mm",
  overview: [
    "SealForge Cutlass Bearings are water-lubricated sleeve bearings designed to provide dependable support for rotating shafts while offering low friction, effective lubrication, and resistance to wear.",
    "A Cutlass Bearing typically consists of a resilient rubber lining bonded or fitted within a metallic or non-metallic outer shell. Specially designed internal grooves allow water to reach the shaft–bearing interface, supporting lubrication, heat dissipation, and removal of contaminants while accommodating minor shaft misalignment and absorbing vibration.",
  ],
  industries: [
    "Marine",
    "Pumps",
    "Water & Wastewater",
    "Power",
    "Irrigation",
    "Industrial",
    "Mining",
    "Dredging",
  ],
  specs: {
    shaftDiameter: "25 mm to 400 mm (Standard Metric & Imperial)",
    lubrication: "100% Process Water / Seawater",
    shellTypes: "Cylindrical Sleeve & Integral Flanged Shell",
    lining: "Resilient Rubber Lining (Fluted, Spiral, Circular, Polygon)",
  },
  shells: [
    {
      type: "Metallic Shell",
      materials: "Brass, Bronze, Stainless Steel / Mild Steel, Higher Alloys on Request",
      benefits:
        "Provides structural rigidity, press-fit retention, and dimensional stability in demanding housings.",
    },
    {
      type: "Non-Metallic Shell",
      materials:
        "Engineered Reinforced Thermoset Plastic, Phenolic Resin Composite, Fiberglass-Reinforced Laminate",
      benefits:
        "Selected where corrosion resistance, zero galvanic reaction, reduced weight, or electrical isolation is required.",
    },
  ],
  materialSelectionFactors: [
    "Load",
    "Corrosion",
    "Temperature",
    "Housing Material",
    "Lubrication Medium",
    "Installation Method",
    "Operating Environment",
  ],
  shellTypesCards: [
    {
      name: "Cylindrical Shell",
      image: cylindricalShellImg,
      features: [
        "Conventional sleeve configuration",
        "Designed for cylindrical housings",
        "Robust and versatile construction",
        "Standard and custom dimensions",
        "Metallic and non-metallic options",
      ],
    },
    {
      name: "Flanged Shell",
      image: flangedShellImg,
      features: [
        "Integral flange for positive positioning",
        "Additional axial support",
        "Suitable for pump and marine applications",
        "Custom flange dimensions available",
        "Selected metallic and non-metallic constructions",
      ],
    },
  ],
  profiles: [
    {
      name: "Fluted Profile",
      image: flutedProfileImg,
      description: "Straight longitudinal grooves along the bearing length.",
      function:
        "Water circulation, cooling, and continuous contaminant/grit flushing.",
    },
    {
      name: "Spiral Profile",
      image: spiralProfileImg,
      description: "Helically arranged grooves through the bearing.",
      function: "Controlled water movement and positive lubrication path.",
    },
    {
      name: "Circular Profile",
      image: circularProfileImg,
      description: "Circular internal bearing geometry.",
      function: "Uniform shaft support for selected low-speed applications.",
    },
    {
      name: "Polygon Profile",
      image: polygonProfileImg,
      description: "Polygonal internal land geometry.",
      function:
        "Application-specific load distribution and dynamic water passages.",
    },
  ],
  dimensionsTable: [
    { ds: 25, od: 40, l: 100, t: 2.5 },
    { ds: 30, od: 45, l: 120, t: 2.5 },
    { ds: 35, od: 50, l: 140, t: 3 },
    { ds: 40, od: 55, l: 160, t: 3 },
    { ds: 45, od: 60, l: 180, t: 3 },
    { ds: 50, od: 65, l: 200, t: 3 },
    { ds: 55, od: 70, l: 220, t: 3 },
    { ds: 60, od: 75, l: 240, t: 3 },
    { ds: 65, od: 80, l: 260, t: 3 },
    { ds: 70, od: 85, l: 280, t: 3 },
    { ds: 75, od: 90, l: 300, t: 3 },
    { ds: 80, od: 95, l: 320, t: 3 },
    { ds: 85, od: 100, l: 340, t: 3 },
    { ds: 90, od: 105, l: 360, t: 3 },
    { ds: 95, od: 110, l: 380, t: 3 },
    { ds: 100, od: 115, l: 400, t: 4.75 },
    { ds: 105, od: 120, l: 420, t: 4.75 },
    { ds: 110, od: 125, l: 440, t: 4.75 },
    { ds: 115, od: 130, l: 460, t: 4.75 },
    { ds: 120, od: 135, l: 480, t: 6.25 },
    { ds: 125, od: 140, l: 500, t: 6.25 },
    { ds: 130, od: 145, l: 520, t: 6.25 },
    { ds: 135, od: 150, l: 540, t: 6.25 },
    { ds: 140, od: 155, l: 560, t: 6.25 },
    { ds: 145, od: 160, l: 580, t: 6.25 },
    { ds: 150, od: 165, l: 600, t: 6.25 },
  ],
  applications: [
    "Marine propulsion and propeller shafts",
    "Stern tube bearing systems",
    "Vertical turbine and centrifugal pumps",
    "Submersible, borewell and deep-well pumps",
    "Water-handling and irrigation equipment",
    "Industrial rotating equipment",
    "Dredging and marine equipment",
  ],
};

export const materialGuide = {
  primaryFaces: [
    {
      name: "Carbon Graphite (Resin Impregnated)",
      advantages: "Low friction, self-lubricating, excellent running properties",
      applications: "Clean water, mineral oils, hydrocarbons, general industrial liquids",
    },
    {
      name: "Carbon Graphite (Antimony Impregnated)",
      advantages: "Improved strength, higher thermal conductivity, enhanced wear resistance",
      applications: "Hot hydrocarbons, higher-duty water and chemical services",
    },
    {
      name: "High-Purity Alumina Ceramic (99.5%)",
      advantages: "Extremely hard, economical, chemically inert",
      applications: "Clean water, cooling circulation, mild chemicals",
    },
    {
      name: "Sintered Silicon Carbide (SSiC)",
      advantages: "Extreme hardness (2500+ HV), universal corrosion resistance, handles solids",
      applications: "Abrasive slurries, harsh chemicals, wastewater, high temperatures",
    },
    {
      name: "Tungsten Carbide (TC)",
      advantages: "Exceptional fracture toughness, resists mechanical and thermal shock",
      applications: "Viscous sludges, sewage, mining slurries, high torque duties",
    },
    {
      name: "Filled PTFE",
      advantages: "Broadest chemical inertness, low coefficient of friction",
      applications: "Aggressive boiling acids where metals and ceramics suffer attack",
    },
  ],
  secondaryElastomers: [
    {
      name: "NBR (Nitrile)",
      temp: "-30 °C to +120 °C",
      compatibility: "Water, mineral oils, fuels, general industrial fluids",
      limitation: "Avoid ozone, high temperatures, ketones, and concentrated acids",
    },
    {
      name: "EPDM",
      temp: "-40 °C to +150 °C",
      compatibility: "Hot water, steam, aqueous solutions, dilute acids and alkalis",
      limitation: "Unsuitable for mineral oils, hydrocarbons, and fuels",
    },
    {
      name: "FKM (Fluorocarbon / Viton)",
      temp: "-20 °C to +200 °C",
      compatibility: "Mineral oils, hydrocarbons, synthetic fuels, selected chemicals",
      limitation: "Not universally suitable for hot water/steam or low-temperature cryogenic duties",
    },
    {
      name: "FFKM (Perfluoroelastomer)",
      temp: "-15 °C to +300 °C",
      compatibility: "Extreme broad-spectrum chemical and solvent resistance",
      limitation: "Premium high-cost specialty material; selected for critical duties",
    },
    {
      name: "PTFE Bellows",
      temp: "-40 °C to +200 °C",
      compatibility: "Universal chemical resistance against concentrated aggressive acids",
      limitation: "Cold-flow / creep must be accounted for in mechanical clamp designs",
    },
  ],
  selectionRules: [
    "Always select sealing faces as a compatible pair (e.g. SSiC vs SSiC for abrasives, SSiC vs Carbon for clean duties).",
    "Select the secondary elastomer based on fluid chemistry, concentration, temperature, and pressure—never temperature alone.",
    "Use Silicon Carbide or Tungsten Carbide where solids, crystals, or abrasive particulates make carbon/ceramic unsuitable.",
    "Verify wetted casing metallurgy (Carbon Steel, 316SS, Hastelloy C) or fluoropolymer lining (PVDF, PFA) against fluid corrosiveness.",
  ],
};

export const allProducts = [
  ...mechanicalSeals.map((item) => ({
    ...item,
    slug: item.id,
    categoryLabel: "Mechanical Seals",
    subLabel: item.series,
  })),
  ...industrialPumps.map((item) => ({
    ...item,
    slug: item.id,
    categoryLabel: "Industrial Pumps",
    subLabel: item.designReference,
  })),
  {
    ...cutlassBearings,
    slug: cutlassBearings.id,
    categoryLabel: "Cutlass Bearings",
    subLabel: "25 mm – 400 mm",
  },
];

export function getProductBySlug(slug) {
  return allProducts.find((p) => p.slug === slug) || null;
}

export function getRelatedProducts(product, limit = 3) {
  if (!product) return [];
  const sameCategory = allProducts.filter(
    (p) => p.category === product.category && p.slug !== product.slug
  );
  if (sameCategory.length >= limit) {
    return sameCategory.slice(0, limit);
  }
  const others = allProducts.filter(
    (p) => p.category !== product.category && p.slug !== product.slug
  );
  return [...sameCategory, ...others].slice(0, limit);
}
