export interface ServiceAreaDetail {
  slug: string;
  name: string;
  county: string;
  metaTitle: string;
  metaDescription: string;
  badge: string;
  heroHighlight: string;
  heroDescription: string;
  bgImage: string;
  overview: string;
  stats: { value: string; label: string; sublabel?: string }[];
  architecturalContext: {
    heading: string;
    description: string;
    challenges: { title: string; desc: string }[];
  };
  popularServices: {
    title: string;
    description: string;
    link: string;
  }[];
  nearbyCommunities: string[];
  faq: {
    question: string;
    answer: string;
  }[];
}

export const serviceAreasData: Record<string, ServiceAreaDetail> = {
  pittsburgh: {
    slug: "pittsburgh",
    name: "Pittsburgh (Citywide)",
    county: "Allegheny County",
    metaTitle: "Carpentry & Remodeling in Pittsburgh, PA | Envision Carpentry LLC",
    metaDescription:
      "Master residential carpentry, architectural trim, multi-tier decks, and whole-home remodeling across Pittsburgh, PA. PA License #184291. Call (412) 536-8229.",
    badge: "Citywide Master Craftsmen • PA License #184291",
    heroHighlight: "Historic Craft & Structural Precision",
    heroDescription:
      "Providing master carpentry, architectural millwork, load-bearing renovations, and hillside timber framing throughout the City of Pittsburgh.",
    bgImage: "/cta-banner-bg.jpg",
    overview:
      "From Victorian rowhomes in Lawrenceville and Bloomfield to historic residences in Highland Park and Point Breeze, Pittsburgh architecture is defined by character, solid brick masonry, and age. For over 40 years, Envision Carpentry has worked on Pittsburgh homes, mastering out-of-square lath-and-plaster walls, settling foundations, and bespoke millwork replication.",
    stats: [
      { value: "40+ Years", label: "Pittsburgh Heritage", sublabel: "Working local homes since 1980" },
      { value: "PA #184291", label: "Licensed Contractor", sublabel: "City permit compliant" },
      { value: "100%", label: "Direct Craftsmen", sublabel: "No outsourced sales reps" },
      { value: "5.0 ★", label: "Client Rating", sublabel: "Verified local homeowner reviews" },
    ],
    architecturalContext: {
      heading: "Mastering Pittsburgh's Century-Old Housing Stock",
      description:
        "Building in Pittsburgh requires deep knowledge of historical materials and masonry structures. Unlike modern suburban tract houses, older Pittsburgh homes demand custom scribing, laser leveling, and structural steel integrations.",
      challenges: [
        {
          title: "Masonry Brick & Lath-and-Plaster Settling",
          desc: "We hand-cope crown molding and custom built-ins so they seat flush against non-plumb historic plaster without wide caulk lines.",
        },
        {
          title: "Tight Urban Access & Dust Containment",
          desc: "We use sealed HEPA air scrubbers and floor-to-ceiling zip barriers to protect historic interiors during demolition and remodeling.",
        },
        {
          title: "City of Pittsburgh Permitting & Codes",
          desc: "Full coordination with the Pittsburgh Department of Permits, Licenses, and Inspections (PLI) for structural framing and deck sign-offs.",
        },
      ],
    },
    popularServices: [
      {
        title: "Whole-Home Remodeling & Open Concepts",
        description: "Removing load-bearing masonry walls to create open modern kitchens and living spaces.",
        link: "/services/remodeling",
      },
      {
        title: "Architectural Millwork & Built-Ins",
        description: "Custom bookcases, fireplace mantels, and period-accurate crown moldings.",
        link: "/services/carpentry",
      },
      {
        title: "Multi-Tier Hillside Decks",
        description: "Custom pressure-treated and composite decks engineered for steep Pittsburgh topography.",
        link: "/services/framing",
      },
      {
        title: "Precision Windows & Doors",
        description: "Re-squaring shifted masonry bucks and installing draft-free exterior entries.",
        link: "/services/doors-windows",
      },
    ],
    nearbyCommunities: ["Squirrel Hill", "Shadyside", "Lawrenceville", "Highland Park", "Point Breeze", "South Side", "Mt. Washington"],
    faq: [
      {
        question: "Do you pull permits with the City of Pittsburgh (PLI)?",
        answer: "Yes. We coordinate with the City of Pittsburgh Department of Permits, Licenses, and Inspections (PLI) for all structural framing, wall removals, and deck projects.",
      },
      {
        question: "How do you handle street parking and staging in dense city neighborhoods?",
        answer: "We arrange city parking variances when required, coordinate timely material deliveries, and maintain clean containment on site every single evening.",
      },
      {
        question: "Can you replicate historic 100-year-old moldings?",
        answer: "Yes. We frequently mill custom knife profiles to match original Pittsburgh casings, baseboards, and rosettes that are no longer commercially produced.",
      },
    ],
  },

  "squirrel-hill": {
    slug: "squirrel-hill",
    name: "Squirrel Hill",
    county: "Allegheny County",
    metaTitle: "Carpentry & Remodeling in Squirrel Hill, PA | Envision Carpentry LLC",
    metaDescription:
      "Premier carpentry, Victorian millwork, and hillside deck construction in Squirrel Hill, Pittsburgh. 40+ years experience. PA #184291. Call (412) 536-8229.",
    badge: "Squirrel Hill Master Craftsmen • PA License #184291",
    heroHighlight: "Victorian Millwork & Hillside Decks",
    heroDescription:
      "Preserving the stately architectural heritage of Squirrel Hill homes through master finish carpentry, custom built-ins, and engineered multi-level decks.",
    bgImage: "/custom-woodwork.jpg",
    overview:
      "Squirrel Hill features some of Pittsburgh's finest early-20th-century Victorians, Tudors, and Craftsman homes. Maintaining and remodeling these grand residences requires seasoned carpenters who understand antique hardwood species, settled lath-and-plaster walls, and steep yard drops leading down into city ravines.",
    stats: [
      { value: "40+ Years", label: "Local Experience", sublabel: "Hands-on trade mastery" },
      { value: "Victorian", label: "Millwork Specialists", sublabel: "Custom knife profile matching" },
      { value: "Hillside", label: "Deck Engineering", sublabel: "Deep caisson concrete piers" },
      { value: "100%", label: "Direct Accountability", sublabel: "Master builders on site" },
    ],
    architecturalContext: {
      heading: "Navigating Squirrel Hill's Unique Home Anatomy",
      description:
        "Homes near Forbes Avenue, Beechwood Boulevard, and Wightman Street feature rich architectural detailing—solid oak pocket doors, quarter-sawn wainscoting, and deep roof overhangs.",
      challenges: [
        {
          title: "Steep Lot Slope Deck Construction",
          desc: "Engineering heavy timber posts and diagonal sway bracing to construct stable outdoor living spaces on severe backyard slopes.",
        },
        {
          title: "Preserving Quarter-Sawn Oak & Chestnut Trim",
          desc: "Carefully sourcing and hand-fitting matching hardwoods when remodeling historic living rooms and staircases.",
        },
        {
          title: "Opening Up Cramped Historic Kitchens",
          desc: "Replacing structural bearing partitions with flush steel beams to connect vintage butler's pantries into open culinary spaces.",
        },
      ],
    },
    popularServices: [
      {
        title: "Architectural Millwork & Library Built-Ins",
        description: "Floor-to-ceiling bookshelves, library paneling, and coffered ceilings.",
        link: "/services/carpentry",
      },
      {
        title: "Two-Story Hillside Decks",
        description: "Engineered timber and Trex decks designed for Squirrel Hill's sloping grades.",
        link: "/services/framing",
      },
      {
        title: "Historic Kitchen & Bath Remodeling",
        description: "Modern luxury functionality blended seamlessly into century-old spaces.",
        link: "/services/remodeling",
      },
    ],
    nearbyCommunities: ["Shadyside", "Point Breeze", "Greenfield", "Oakland", "Highland Park"],
    faq: [
      {
        question: "Can you build a deck on my steep Squirrel Hill backyard?",
        answer: "Yes. We specialize in hillside engineering, digging 36-48 inch deep concrete piers anchored into stable subsoil and installing structural diagonal sway braces.",
      },
      {
        question: "Will new built-ins match my home's original 1920s oak woodwork?",
        answer: "Yes. We hand-select premium white oak, match the grain cut, and custom-blend stain to duplicate the warm patina of your existing woodwork.",
      },
    ],
  },

  shadyside: {
    slug: "shadyside",
    name: "Shadyside",
    county: "Allegheny County",
    metaTitle: "Carpentry & Historic Remodeling in Shadyside, PA | Envision Carpentry LLC",
    metaDescription:
      "High-end finish carpentry, historic crown molding, wainscoting, and bespoke remodeling in Shadyside, Pittsburgh. PA #184291. Call (412) 536-8229.",
    badge: "Shadyside Architectural Carpentry • PA License #184291",
    heroHighlight: "Historic Millwork & Luxury Interiors",
    heroDescription:
      "Crafting exquisite architectural moldings, wainscoting, custom cabinetry, and high-end residential renovations throughout Shadyside.",
    bgImage: "/trim-craft.jpg",
    overview:
      "Shadyside's tree-lined avenues showcase exquisite historic mansions, brownstones, and Victorian homes. Discerning homeowners here demand millimeter precision, impeccable dust containment, and architectural joinery that honors the neighborhood's prestigious pedigree.",
    stats: [
      { value: "40+ Years", label: "Trade Legacy", sublabel: "Historic district expertise" },
      { value: "Hand-Coped", label: "Precision Moldings", sublabel: "Zero caulk gap fillers" },
      { value: "HEPA", label: "Clean Containment", sublabel: "Negative air room protection" },
      { value: "Heirloom", label: "Custom Cabinetry", sublabel: "Built-in bookcases & mantels" },
    ],
    architecturalContext: {
      heading: "Exquisite Detailing for Historic Shadyside Mansions",
      description:
        "From Amberson Avenue to Walnut Street, Shadyside homes feature high plaster ceilings, intricate multi-piece crown moldings, and solid mahogany or walnut entries.",
      challenges: [
        {
          title: "Multi-Piece Crown Molding on Uneven Plaster",
          desc: "Hand-coping and scribing ornate 3-piece and 4-piece crown assemblies to fit wavy 12-foot plaster ceilings without cracking.",
        },
        {
          title: "High-Tolerance Dust & Interior Protection",
          desc: "Using hospital-grade HEPA air scrubbers and floor runners to protect delicate antique parquet floors and fine furnishings.",
        },
        {
          title: "Custom Fireplace Mantels & Hearth Overhauls",
          desc: "Handcrafting fluted pilaster mantels and paneled surrounds matching original Edwardian and Victorian designs.",
        },
      ],
    },
    popularServices: [
      {
        title: "Architectural Millwork & Wainscoting",
        description: "Raised panel wainscoting, picture rail molding, and custom coffered ceilings.",
        link: "/services/carpentry",
      },
      {
        title: "Luxury Kitchen & Bath Renovations",
        description: "Full interior overhauls with custom cabinetry and seamless marble/quartz integration.",
        link: "/services/remodeling",
      },
      {
        title: "Precision Windows & French Doors",
        description: "Energy-efficient insulated entries styled with historical exterior brickmould.",
        link: "/services/doors-windows",
      },
    ],
    nearbyCommunities: ["Squirrel Hill", "East Liberty", "Bloomfield", "Point Breeze", "Fox Chapel"],
    faq: [
      {
        question: "How do you protect my home during interior trim work?",
        answer: "We seal doorways with heavy-duty zipper dust walls, operate HEPA-filtered dust-extracted sanders, and mask all hardwood floors with heavy Ram Board.",
      },
      {
        question: "Can you install crown molding on 11-foot plaster ceilings?",
        answer: "Yes. We install solid wood backer blocking securely into ceiling joists and wall studs to ensure heavy crown moldings remain anchored for decades.",
      },
    ],
  },

  "mt-lebanon": {
    slug: "mt-lebanon",
    name: "Mt. Lebanon",
    county: "Allegheny County",
    metaTitle: "Carpentry & Home Remodeling in Mt. Lebanon, PA | Envision Carpentry LLC",
    metaDescription:
      "Trusted remodeling, kitchen wall removals, and custom carpentry in Mt. Lebanon, PA. 40+ years experience. PA #184291. Call (412) 536-8229 for a free estimate.",
    badge: "Mt. Lebanon Remodeling Specialists • PA License #184291",
    heroHighlight: "Open Concepts & Custom Additions",
    heroDescription:
      "Transforming classic Mt. Lebanon stone Tudors and mid-century colonials with open-concept kitchen wall removals, custom built-ins, and composite decks.",
    bgImage: "/service-remodel.jpg",
    overview:
      "Mt. Lebanon's charming stone homes and mid-century colonials frequently feature partitioned, compartmentalized floor plans. Envision Carpentry specializes in removing structural bearing walls, installing hidden steel beams, and modernizing living spaces while preserving the home's exterior character.",
    stats: [
      { value: "40+ Years", label: "Trade Mastery", sublabel: "Serving the South Hills" },
      { value: "Flush Beams", label: "Wall Removals", sublabel: "Seamless uninterrupted ceilings" },
      { value: "100%", label: "Itemized Proposals", sublabel: "Honest upfront pricing" },
      { value: "PA #184291", label: "Licensed Contractor", sublabel: "Mt. Lebanon township permits" },
    ],
    architecturalContext: {
      heading: "Modernizing Classic Mt. Lebanon Floor Plans",
      description:
        "Many Mt. Lebanon homes built between 1920 and 1950 have small, separated kitchens and dining rooms. Opening these spaces requires rigorous structural load calculations and point-load transfers to the basement.",
      challenges: [
        {
          title: "Recessed Load-Bearing Beam Installations",
          desc: "Tucking heavy engineered LVL or steel I-beams into the joist space above so the finished ceiling remains flat without a drop soffit.",
        },
        {
          title: "Stone Masonry & Chimney Interfaces",
          desc: "Framing around prominent stone fireplaces and blending hardwood flooring seamlessly into existing vintage oak floors.",
        },
        {
          title: "Elevated Rear Deck Construction",
          desc: "Building multi-level cedar and composite decks off elevated second-floor kitchens down into private suburban backyards.",
        },
      ],
    },
    popularServices: [
      {
        title: "Load-Bearing Wall Removals",
        description: "Transforming cramped rooms into expansive open-concept kitchen and entertaining areas.",
        link: "/services/remodeling",
      },
      {
        title: "Custom Kitchen Cabinetry & Islands",
        description: "Heirloom kitchen build-outs with custom walk-in pantries and quartz counters.",
        link: "/services/remodeling",
      },
      {
        title: "Composite Decks & Railings",
        description: "Low-maintenance outdoor entertaining decks engineered to PA structural code.",
        link: "/services/framing",
      },
    ],
    nearbyCommunities: ["Upper St. Clair", "Bethel Park", "Scott Township", "Dormont", "Castle Shannon"],
    faq: [
      {
        question: "Can you remove the wall between my kitchen and dining room without a dropped header?",
        answer: "Yes. By recessing an engineered LVL or steel beam flush into the ceiling joists above, we achieve a flat, seamless ceiling with zero bulkheads.",
      },
      {
        question: "Do you handle Mt. Lebanon municipal building permits?",
        answer: "Yes. We prepare the structural framing drawings, submit all required documentation to the Mt. Lebanon Inspection Office, and attend all inspections.",
      },
    ],
  },

  "fox-chapel": {
    slug: "fox-chapel",
    name: "Fox Chapel",
    county: "Allegheny County",
    metaTitle: "Carpentry & Estate Remodeling in Fox Chapel, PA | Envision Carpentry LLC",
    metaDescription:
      "Luxury architectural millwork, coffered ceilings, custom libraries, and whole-home remodeling in Fox Chapel, PA. PA #184291. Call (412) 536-8229.",
    badge: "Fox Chapel Estate Craftsmanship • PA License #184291",
    heroHighlight: "Estate Joinery & Coffered Ceilings",
    heroDescription:
      "Delivering high-end architectural millwork, custom wine cellars, executive library paneling, and luxury home expansions across Fox Chapel estates.",
    bgImage: "/service-carpentry.jpg",
    overview:
      "Fox Chapel's expansive acreage properties and custom estates demand master-level craftsmanship. From grand 2-story foyers and beamed cathedral ceilings to climate-controlled wine rooms and bespoke walnut executive libraries, Envision Carpentry provides the highest echelon of carpentry trade discipline.",
    stats: [
      { value: "40+ Years", label: "Trade Excellence", sublabel: "Generational woodcraft" },
      { value: "Bespoke", label: "Estate Millwork", sublabel: "Coffered ceilings & libraries" },
      { value: "Heirloom", label: "Hardwood Joinery", sublabel: "Walnut, cherry, maple & oak" },
      { value: "Turnkey", label: "Project Delivery", sublabel: "Zero subcontractor hand-offs" },
    ],
    architecturalContext: {
      heading: "Luxury Architectural Finishing for Fox Chapel Estates",
      description:
        "Fox Chapel homes are built on a grand scale with tall ceilings, expansive spans, and custom architectural specifications. Our team has the equipment, engineering knowledge, and joinery mastery to execute complex large-scale timber projects.",
      challenges: [
        {
          title: "Complex Coffered Ceilings & Box Beams",
          desc: "Framing, scribing, and finishing multi-tier grid coffered ceilings with integrated recessed cove lighting.",
        },
        {
          title: "Executive Libraries & Custom Wine Rooms",
          desc: "Designing solid hardwood shelving with fluted pilasters, rolling ladder rails, and insulated vapor-barrier wine enclosures.",
        },
        {
          title: "Massive Covered Porches & Timber Pavilions",
          desc: "Constructing heavy timber post-and-beam outdoor living pavilions with tongue-and-groove cedar ceilings and stone hearths.",
        },
      ],
    },
    popularServices: [
      {
        title: "Bespoke Library & Office Cabinetry",
        description: "Floor-to-ceiling solid walnut and oak bookcases, hidden doors, and executive desks.",
        link: "/services/carpentry",
      },
      {
        title: "Timber Pavilions & Covered Porches",
        description: "Grand post-and-beam timber structures engineered for outdoor estate entertaining.",
        link: "/services/framing",
      },
      {
        title: "Whole-Home Architectural Transformations",
        description: "Turnkey estate remodeling from structural engineering to furniture-grade spraying.",
        link: "/services/remodeling",
      },
    ],
    nearbyCommunities: ["O'Hara Township", "Aspinwall", "Shadyside", "Sewickley", "Wexford"],
    faq: [
      {
        question: "What wood species do you work with for estate projects?",
        answer: "We work with premium hardwoods including American Black Walnut, White Oak, Black Cherry, Hard Maple, and African Mahogany, sourced from sustainable North American sawmills.",
      },
      {
        question: "Can you create custom finishes matching existing antique furniture?",
        answer: "Yes. Our finish specialists custom-mix wood stains and apply hand-rubbed oil, satin lacquer, or catalyzed conversion varnish to match any existing patina.",
      },
    ],
  },

  sewickley: {
    slug: "sewickley",
    name: "Sewickley",
    county: "Allegheny County",
    metaTitle: "Carpentry & Heritage Restoration in Sewickley, PA | Envision Carpentry LLC",
    metaDescription:
      "Heirloom millwork, historic restoration carpentry, and luxury home remodeling in Sewickley, PA. 40+ years experience. PA #184291. Call (412) 536-8229.",
    badge: "Sewickley Heritage Joinery • PA License #184291",
    heroHighlight: "Historic Restoration & Heirloom Woodwork",
    heroDescription:
      "Honoring Sewickley's rich architectural legacy with hand-coped crown molding, custom porch restorations, and bespoke residential remodeling.",
    bgImage: "/custom-woodwork.jpg",
    overview:
      "The Village of Sewickley and Sewickley Heights are celebrated for timeless historic architecture. Working on these heritage properties requires patience, historic sensitivity, and the ability to replicate centuries-old carpentry joinery without modern shortcuts.",
    stats: [
      { value: "40+ Years", label: "Restoration Heritage", sublabel: "Working local homes since 1980" },
      { value: "Hand-Turned", label: "Porch Balusters", sublabel: "Historic replication" },
      { value: "Airtight", label: "Exterior Doors", sublabel: "Draft-free period accuracy" },
      { value: "100%", label: "Direct Craftsmen", sublabel: "Master builders on site" },
    ],
    architecturalContext: {
      heading: "Preserving Sewickley's Architectural Provenance",
      description:
        "Sewickley homes feature historic wrap-around front porches, intricate Victorian gingerbread brackets, heavy timber ceiling beams, and vintage hardware.",
      challenges: [
        {
          title: "Historic Front Porch Restoration",
          desc: "Rebuilding rotted timber porch framing, tongue-and-groove fir decking, turned newel posts, and historical handrails.",
        },
        {
          title: "Custom Window Sills & Casing Duplication",
          desc: "Milling custom wood drip sills and backband casings that perfectly match historical Sewickley preservation standards.",
        },
        {
          title: "Period-Accurate Interior Built-Ins",
          desc: "Handcrafting dining room corner hutches, fireplace mantels, and window benches that appear original to the build.",
        },
      ],
    },
    popularServices: [
      {
        title: "Historic Porch Rebuilding & Trim",
        description: "Restoring iconic wrap-around porches with rot-resistant woods and authentic profiles.",
        link: "/services/carpentry",
      },
      {
        title: "Bespoke Built-In Cabinetry",
        description: "Custom floor-to-ceiling cabinetry tailored to historic ceiling heights.",
        link: "/services/carpentry",
      },
      {
        title: "Custom Exterior Wood Doors",
        description: "Solid wood entries crafted with period iron hardware and modern weatherstripping.",
        link: "/services/doors-windows",
      },
    ],
    nearbyCommunities: ["Edgeworth", "Sewickley Heights", "Moon Township", "Fox Chapel", "Wexford"],
    faq: [
      {
        question: "Can you restore rotted historic porch columns?",
        answer: "Yes. We assess the structural core of the column. If the core is sound, we execute surgical timber Dutchman repairs. If compromised, we turn replica solid cedar columns matching the original profile.",
      },
      {
        question: "Do your restorations comply with local historic district guidelines?",
        answer: "Yes. We work closely with homeowners and local historical preservation commissions to ensure materials and profiles conform strictly to historic guidelines.",
      },
    ],
  },

  "upper-st-clair": {
    slug: "upper-st-clair",
    name: "Upper St. Clair",
    county: "Allegheny County",
    metaTitle: "Carpentry & Home Remodeling in Upper St. Clair, PA | Envision Carpentry LLC",
    metaDescription:
      "Whole-home remodeling, custom basement finishing, composite decks, and master carpentry in Upper St. Clair, PA. PA #184291. Call (412) 536-8229.",
    badge: "Upper St. Clair Remodeling • PA License #184291",
    heroHighlight: "Modern Living & Luxury Additions",
    heroDescription:
      "Elevating Upper St. Clair residences with custom finished basements, luxury master suite additions, chef's kitchens, and outdoor living decks.",
    bgImage: "/service-remodel.jpg",
    overview:
      "Upper St. Clair is renowned for premier residential neighborhoods with spacious homes and generous lots. Homeowners here frequently seek to expand their entertaining space through custom finished lower levels, high-end composite decks, and open-concept first-floor remodels.",
    stats: [
      { value: "40+ Years", label: "Trade Discipline", sublabel: "Master builders on site" },
      { value: "Custom", label: "Basement Theaters", sublabel: "Wet bars & entertaining spaces" },
      { value: "Multi-Tier", label: "Composite Decks", sublabel: "Trex & TimberTech certified" },
      { value: "PA #184291", label: "Licensed Contractor", sublabel: "Full liability coverage" },
    ],
    architecturalContext: {
      heading: "Custom Finishing for Upper St. Clair Residences",
      description:
        "USC homes feature expansive lower levels and walkout basements ideal for custom entertainment suites, guest wings, and full wet bars.",
      challenges: [
        {
          title: "Custom Lower-Level Entertainment Suites",
          desc: "Framing moisture-resistant thermal subfloors, acoustic insulation, walk-in wine displays, and custom bar cabinetry.",
        },
        {
          title: "High-Elevation Backyard Decks",
          desc: "Constructing multi-tier composite decks with integrated low-voltage lighting and outdoor kitchen prep areas.",
        },
        {
          title: "First-Floor Open Concept Layouts",
          desc: "Removing formal dining room partitions to create large continuous family gathering spaces.",
        },
      ],
    },
    popularServices: [
      {
        title: "Finished Lower Levels & Wet Bars",
        description: "Transforming raw basements into luxury home theaters, gyms, and entertaining spaces.",
        link: "/services/remodeling",
      },
      {
        title: "Composite Deck Systems & Patios",
        description: "Premium Trex and TimberTech decking built with hidden fasteners and cocktail rails.",
        link: "/services/framing",
      },
      {
        title: "Hardwood & Luxury Vinyl Flooring",
        description: "Laser-leveled subfloor prep and seamless hardwood installations.",
        link: "/services/flooring",
      },
    ],
    nearbyCommunities: ["Mt. Lebanon", "Bethel Park", "Peters Township", "South Fayette", "Bridgeville"],
    faq: [
      {
        question: "How do you prevent moisture issues when finishing a basement in Upper St. Clair?",
        answer: "We install continuous foam board thermal breaks along concrete walls, elevate subflooring with moisture-proof dimpled uncoupling membranes, and verify zero hydrostatic seepage before hanging drywall.",
      },
      {
        question: "Can you build a covered roof over our new deck?",
        answer: "Yes. We design and frame integrated timber gables and shed roofs tied seamlessly into your existing home roofline with full shingle matching.",
      },
    ],
  },

  "bethel-park": {
    slug: "bethel-park",
    name: "Bethel Park",
    county: "Allegheny County",
    metaTitle: "Carpentry & Remodeling in Bethel Park, PA | Envision Carpentry LLC",
    metaDescription:
      "Reliable carpentry, custom decks, kitchen remodeling, and door installations in Bethel Park, PA. 40+ years experience. PA #184291. Call (412) 536-8229.",
    badge: "Bethel Park Carpentry & Decks • PA License #184291",
    heroHighlight: "Composite Decks & Interior Remodeling",
    heroDescription:
      "Enhancing Bethel Park homes with durable composite decks, kitchen transformations, custom garage workshops, and precision exterior doors.",
    bgImage: "/deck-framing.jpg",
    overview:
      "Bethel Park's established suburban neighborhoods feature solid, well-built single-family homes that benefit greatly from modern deck expansions, updated open-plan kitchens, and energy-efficient window and door replacements.",
    stats: [
      { value: "40+ Years", label: "Trade Experience", sublabel: "South Hills residential mastery" },
      { value: "30+ Year", label: "Composite Decks", sublabel: "Zero splintering & no annual staining" },
      { value: "Upfront", label: "Itemized Pricing", sublabel: "No hidden change orders" },
      { value: "5.0 ★", label: "Homeowner Rating", sublabel: "Dedicated local service" },
    ],
    architecturalContext: {
      heading: "Upgrading Established Bethel Park Homes",
      description:
        "Many homes throughout Bethel Park were built in the 1960s through 1980s, featuring original builder decks and compartmentalized kitchens that are ready for modern upgrades.",
      challenges: [
        {
          title: "Replacing Aging Wood Decks with Composite",
          desc: "Tearing down decaying pressure-treated decks and pouring fresh concrete caisson footings for lifetime composite systems.",
        },
        {
          title: "Kitchen Updates & Structural Wall Removals",
          desc: "Removing walls separating kitchens and living rooms to bring natural light and modern flow into the home.",
        },
        {
          title: "Airtight Energy-Efficient Door Replacements",
          desc: "Replacing drafty builder-grade exterior doors with insulated fiberglass entries and rot-proof composite jambs.",
        },
      ],
    },
    popularServices: [
      {
        title: "Composite Deck Construction",
        description: "Custom Trex and TimberTech decks with ADA stairs and drink rails.",
        link: "/services/framing",
      },
      {
        title: "Kitchen & Bath Remodeling",
        description: "Full room overhauls with custom cabinetry and quartz surfaces.",
        link: "/services/remodeling",
      },
      {
        title: "Garage Workshop Build-Outs",
        description: "Insulating and outfitting garages with custom cabinetry and heavy workbenches.",
        link: "/services/garages",
      },
    ],
    nearbyCommunities: ["South Park", "Upper St. Clair", "Mt. Lebanon", "Pleasant Hills", "Peters Township"],
    faq: [
      {
        question: "Can you reuse my existing deck framing when switching to composite boards?",
        answer: "We inspect your framing thoroughly. Composite decking requires 12 to 16-inch joist spacing and sound structural timbers. If the existing framework is code-compliant and rot-free, we can re-deck it; if compromised, we rebuild the framework for lifetime safety.",
      },
    ],
  },

  "cranberry-township": {
    slug: "cranberry-township",
    name: "Cranberry Township",
    county: "Butler County",
    metaTitle: "Carpentry & Home Remodeling in Cranberry Township, PA | Envision Carpentry LLC",
    metaDescription:
      "Custom finish carpentry, basement finishing, multi-level decks, and home remodeling in Cranberry Township & Butler County. PA #184291. Call (412) 536-8229.",
    badge: "Cranberry Township Master Builders • PA License #184291",
    heroHighlight: "Custom Trim & Lower-Level Living",
    heroDescription:
      "Transforming Cranberry Township and Butler County residences with custom basement build-outs, architectural trim packages, and expansive composite decks.",
    bgImage: "/service-remodel.jpg",
    overview:
      "Cranberry Township is one of Western Pennsylvania's most vibrant residential communities. Many homeowners here live in newer, spacious suburban homes that have standard builder trim and unfinished basements. Envision Carpentry elevates these homes with custom architectural millwork, luxury home theaters, and expansive outdoor decks.",
    stats: [
      { value: "40+ Years", label: "Trade Experience", sublabel: "Butler County service" },
      { value: "Custom", label: "Trim Upgrades", sublabel: "Wainscoting & crown packages" },
      { value: "Turnkey", label: "Basements", sublabel: "Wet bars, theaters & gyms" },
      { value: "PA #184291", label: "Licensed & Insured", sublabel: "Township permit compliance" },
    ],
    architecturalContext: {
      heading: "Elevating Builder-Grade Homes with Master Craftsmanship",
      description:
        "Modern Cranberry Township homes have solid bones and tall ceilings, making them ideal canvases for custom woodwork, coffered ceilings, and full basement transformations.",
      challenges: [
        {
          title: "Full-Home Millwork Packages",
          desc: "Upgrading plain drywall with custom wainscoting, multi-piece crown molding, and custom fireplace surrounds.",
        },
        {
          title: "Walkout Basement Finishing",
          desc: "Constructing entertainment spaces, bedrooms, and bathrooms that look and feel identical to the upper living floors.",
        },
        {
          title: "Expansive Composite Decks",
          desc: "Building spacious outdoor living decks designed for entertaining large gatherings with built-in bench seating.",
        },
      ],
    },
    popularServices: [
      {
        title: "Custom Basement Finishing",
        description: "Transforming empty concrete basements into luxury living quarters and wet bars.",
        link: "/services/remodeling",
      },
      {
        title: "Architectural Trim & Wainscoting",
        description: "Upgrading builder homes with custom crown molding, mantels, and board-and-batten.",
        link: "/services/carpentry",
      },
      {
        title: "Composite Decking & Pergolas",
        description: "Low-maintenance composite decks with custom pergolas and privacy screening.",
        link: "/services/framing",
      },
    ],
    nearbyCommunities: ["Mars", "Adams Township", "Wexford", "Zelienople", "Seven Fields"],
    faq: [
      {
        question: "How long does a full basement finishing project take in Cranberry?",
        answer: "A complete basement transformation—including framing, electrical/plumbing rough-ins, drywall, custom bar millwork, bathroom, and flooring—typically takes 4 to 6 weeks from permit approval.",
      },
    ],
  },

  "moon-township": {
    slug: "moon-township",
    name: "Moon Township",
    county: "Allegheny County",
    metaTitle: "Carpentry & Remodeling in Moon Township, PA | Envision Carpentry LLC",
    metaDescription:
      "Expert garage construction, workshop build-outs, decks, and interior remodeling in Moon Township, PA. PA #184291. Call (412) 536-8229 for an estimate.",
    badge: "Moon Township Carpentry • PA License #184291",
    heroHighlight: "Garage Workshops & Home Remodeling",
    heroDescription:
      "Building custom detached garages, converting workshops, installing composite decks, and remodeling homes throughout Moon Township and the Airport corridor.",
    bgImage: "/service-garage.jpg",
    overview:
      "Moon Township properties often boast spacious acreage lots and private wooded settings. Envision Carpentry constructs ground-up detached garages, custom craftsman workshops, multi-level timber decks, and whole-home interior remodeling across the township.",
    stats: [
      { value: "Custom", label: "Stick-Built Garages", sublabel: "Built to architectural spec" },
      { value: "40+ Years", label: "Trade Heritage", sublabel: "Structural framing mastery" },
      { value: "Turnkey", label: "Workshops", sublabel: "Insulation, benches & storage" },
      { value: "PA #184291", label: "Licensed Contractor", sublabel: "Permits pulled & inspected" },
    ],
    architecturalContext: {
      heading: "Custom Building for Moon Township Acreage & Subdivisions",
      description:
        "With generous property setbacks, Moon Township homeowners frequently add detached 2-car or 3-car garages, workshop spaces, and expansive backyard deck complexes.",
      challenges: [
        {
          title: "Stick-Built Detached Garages",
          desc: "Framing code-certified detached residential garages with engineered roof trusses for overhead storage or bonus rooms.",
        },
        {
          title: "Wooded Lot Deck Engineering",
          desc: "Constructing elevated multi-tier decks taking full advantage of private wooded backyard views.",
        },
        {
          title: "Flooring & Interior Upgrades",
          desc: "Replacing worn carpets with solid hardwood or waterproof luxury vinyl plank (LVP).",
        },
      ],
    },
    popularServices: [
      {
        title: "Garage Construction & Workshops",
        description: "Ground-up detached garages and heated workshop build-outs.",
        link: "/services/garages",
      },
      {
        title: "Structural Decks & Framing",
        description: "Custom elevated timber and composite decks for hillside wooded lots.",
        link: "/services/framing",
      },
      {
        title: "Hardwood & Luxury Flooring",
        description: "Laser-leveled subfloor prep and premium hardwood plank installations.",
        link: "/services/flooring",
      },
    ],
    nearbyCommunities: ["Robinson Township", "Sewickley", "Coraopolis", "Hopewell", "Imperial"],
    faq: [
      {
        question: "Can you build a detached garage matching my existing house siding and roof pitch?",
        answer: "Yes. We match your home's roof pitch, siding color, trim details, and shingle profile so the new garage looks like an original part of your property.",
      },
    ],
  },

  wexford: {
    slug: "wexford",
    name: "Wexford",
    county: "Allegheny County",
    metaTitle: "Carpentry & Luxury Remodeling in Wexford, PA | Envision Carpentry LLC",
    metaDescription:
      "High-end custom trim, kitchen renovations, composite decks, and master carpentry in Wexford, PA. PA License #184291. Call (412) 536-8229.",
    badge: "Wexford Architectural Carpentry • PA License #184291",
    heroHighlight: "Luxury Remodeling & Architectural Trim",
    heroDescription:
      "Transforming Wexford residences with high-end kitchen remodels, bespoke architectural millwork, finished lower levels, and expansive outdoor living decks.",
    bgImage: "/service-carpentry.jpg",
    overview:
      "Wexford is one of North Hills' premier suburban enclaves. Homeowners here appreciate high-end finishes, clean job sites, and direct craftsman communication. Envision Carpentry delivers turnkey carpentry and remodeling projects tailored to Wexford's executive homes.",
    stats: [
      { value: "40+ Years", label: "Trade Legacy", sublabel: "Master builders on site" },
      { value: "Executive", label: "Custom Trim", sublabel: "Coffered ceilings & wainscoting" },
      { value: "Luxury", label: "Kitchen Remodeling", sublabel: "Open concepts & custom cabinetry" },
      { value: "5.0 ★", label: "Client Rating", sublabel: "Direct builder accountability" },
    ],
    architecturalContext: {
      heading: "Executive Finish Detailing for Wexford Residences",
      description:
        "Wexford homes feature tall ceiling plates and spacious open living areas that benefit from custom architectural trim, such as coffered ceilings and built-in home offices.",
      challenges: [
        {
          title: "Custom Coffered Ceilings & Beams",
          desc: "Designing and installing dramatic grid beam coffered ceilings that add warmth and architectural grandeur.",
        },
        {
          title: "Chef's Kitchen Expansions",
          desc: "Removing walls to build expansive culinary center islands, custom hoods, and walk-in pantries.",
        },
        {
          title: "Luxury Outdoor Composite Living",
          desc: "Building multi-level composite decks complete with integrated ambient lighting and cocktail drink rails.",
        },
      ],
    },
    popularServices: [
      {
        title: "Architectural Millwork & Coffered Ceilings",
        description: "Handcrafted box beams, crown molding, and custom home office built-ins.",
        link: "/services/carpentry",
      },
      {
        title: "Chef's Kitchen Remodeling",
        description: "Open-concept transformations with custom cabinetry and quartz islands.",
        link: "/services/remodeling",
      },
      {
        title: "Composite Entertaining Decks",
        description: "Engineered multi-level decks for outdoor summer dining and entertainment.",
        link: "/services/framing",
      },
    ],
    nearbyCommunities: ["Pine Township", "Franklin Park", "Marshall Township", "Fox Chapel", "Cranberry Township"],
    faq: [
      {
        question: "Can you install coffered ceilings in a finished room with drywall?",
        answer: "Yes. We locate all ceiling joists, install solid wood backer plates, and assemble hollow box beams with internal joinery so the ceiling looks factory-built without messy ceiling demolition.",
      },
    ],
  },

  murrysville: {
    slug: "murrysville",
    name: "Murrysville",
    county: "Westmoreland County",
    metaTitle: "Carpentry & Home Remodeling in Murrysville, PA | Envision Carpentry LLC",
    metaDescription:
      "Expert carpentry, hillside decks, kitchen renovations, and structural framing in Murrysville & Westmoreland County. PA #184291. Call (412) 536-8229.",
    badge: "Murrysville Master Craftsmen • PA License #184291",
    heroHighlight: "Hillside Decks & Custom Additions",
    heroDescription:
      "Serving Murrysville and Westmoreland County with multi-tier hillside decks, structural home additions, custom cabinetry, and whole-home remodeling.",
    bgImage: "/deck-framing.jpg",
    overview:
      "Murrysville combines scenic rolling hills, mature trees, and custom residential properties. Building here requires expertise in hillside slope stabilization, structural deck footings, and seamless home additions that blend with natural surroundings.",
    stats: [
      { value: "40+ Years", label: "Trade Experience", sublabel: "Master builders on site" },
      { value: "Hillside", label: "Deck Engineering", sublabel: "Deep caissons & sway bracing" },
      { value: "100%", label: "Direct Crew", sublabel: "No outsourced sales reps" },
      { value: "PA #184291", label: "Licensed Contractor", sublabel: "Westmoreland County coverage" },
    ],
    architecturalContext: {
      heading: "Building for Murrysville's Rolling Topography",
      description:
        "The hills of Westmoreland County require structural carpentry designed for lateral wind loads, freeze-thaw soil movement, and water drainage.",
      challenges: [
        {
          title: "Multi-Tier Hillside Deck Framework",
          desc: "Pouring concrete piers deep into stable subsoil and installing heavy timber posts with lateral sway braces.",
        },
        {
          title: "Custom Room Additions & Sunrooms",
          desc: "Framing year-round sunrooms and master suite additions that expand living square footage into scenic wooded yards.",
        },
        {
          title: "Whole-Home Interior Modernization",
          desc: "Opening up traditional floor plans, leveling subfloors, and installing hardwood and architectural trim.",
        },
      ],
    },
    popularServices: [
      {
        title: "Multi-Tier Hillside Decks",
        description: "Elevated timber and composite decks built for steep Murrysville yards.",
        link: "/services/framing",
      },
      {
        title: "Custom Home Additions & Sunrooms",
        description: "Year-round heated additions engineered to match your existing rooflines.",
        link: "/services/remodeling",
      },
      {
        title: "Hardwood & Luxury Flooring",
        description: "Subfloor leveling and solid hardwood or LVP installation.",
        link: "/services/flooring",
      },
    ],
    nearbyCommunities: ["Monroeville", "Greensburg", "Penn Township", "Plum", "Delmont"],
    faq: [
      {
        question: "Do you pull building permits in Murrysville and Westmoreland County?",
        answer: "Yes. We handle all zoning applications, structural deck drawings, and municipal inspections with the Murrysville Code Enforcement Department.",
      },
    ],
  },
};
