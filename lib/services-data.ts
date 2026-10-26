export interface ServiceDetail {
  slug: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  metaTitle: string;
  metaDescription: string;
  badge: string;
  heroHighlight: string;
  heroDescription: string;
  bgImage: string;
  overview: string;
  stats: { value: string; label: string; sublabel?: string }[];
  keyCapabilities: {
    title: string;
    description: string;
    specs: string[];
  }[];
  processSteps: {
    step: string;
    title: string;
    description: string;
  }[];
  regionalFocus: {
    title: string;
    description: string;
    points: string[];
  };
  faq: {
    question: string;
    answer: string;
  }[];
}

export const servicesData: Record<string, ServiceDetail> = {
  remodeling: {
    slug: "remodeling",
    title: "Whole-Home Remodeling & Renovations",
    shortTitle: "Remodeling & Renovations",
    subtitle: "Kitchens, Bathrooms & Open-Concept Transformations",
    metaTitle: "Whole-Home Remodeling & Renovations | Envision Carpentry LLC",
    metaDescription:
      "Expert whole-home remodeling in Pittsburgh & Western PA. Custom kitchens, luxury bathrooms, load-bearing wall removals, and seamless room additions. PA #184291.",
    badge: "Full-Spectrum Remodeling • PA License #184291",
    heroHighlight: "Renovations Engineered to Last",
    heroDescription:
      "Transforming Pittsburgh residences into functional, breathtaking architectural living spaces. From load-bearing wall removals to bespoke kitchen cabinetry and spa-grade bathrooms.",
    bgImage: "/service-remodel.jpg",
    overview:
      "Whole-home remodeling is where structural engineering meets luxury finish craftsmanship. Rather than managing disconnected subcontractors, Envision Carpentry provides a unified team of master builders who personally plan, frame, plumb, and finish your renovation with uncompromising attention to detail.",
    stats: [
      { value: "40+ Years", label: "Trade Experience", sublabel: "Master builders on site" },
      { value: "100%", label: "Direct Accountability", sublabel: "No third-party broker markups" },
      { value: "PA #184291", label: "Licensed & Insured", sublabel: "Code-compliant permits" },
      { value: "Guaranteed", label: "Itemized Proposals", sublabel: "Transparent milestone pricing" },
    ],
    keyCapabilities: [
      {
        title: "Load-Bearing Wall Removals & Open Concepts",
        description:
          "Safely removing structural partitions requires precise temporary shoring, load calculations, and recessed micro-lam (LVL) or steel beam integrations to achieve uninterrupted ceiling planes.",
        specs: [
          "Calculated point-load transfers to basement footings",
          "Recessed flush beam installations for smooth ceilings",
          "Code-approved permit drawings and engineering sign-offs",
        ],
      },
      {
        title: "Custom Kitchen Millwork & Cabinetry",
        description:
          "Designing and installing heirloom kitchen cabinetry with custom islands, paneled appliances, pantry built-ins, and quartz or granite countertop substrates.",
        specs: [
          "Solid wood dovetail joinery and soft-close hardware",
          "Custom cooktop hoods and decorative crown casing",
          "Concealed under-cabinet task lighting raceways",
        ],
      },
      {
        title: "Luxury Bathroom Suites & Moisture Sealing",
        description:
          "Complete bathroom reconstructions featuring waterproof Schluter membrane substrates, curbless walk-in showers, custom floating vanities, and precise tile alignment.",
        specs: [
          "100% waterproof uncoupling shower pan membranes",
          "Reinforced wall blocking for heavy glass doors & grab bars",
          "High-CFM quiet ventilation ducting preventing mold",
        ],
      },
      {
        title: "Finished Basements & Room Additions",
        description:
          "Expanding usable living square footage with moisture-resistant subfloors, sound-dampening insulation, in-law suites, and home entertainment theaters.",
        specs: [
          "Thermal vapor barrier framing on concrete foundation walls",
          "Acoustic insulation between floor joists",
          "Egress window cutouts and emergency exits",
        ],
      },
    ],
    processSteps: [
      {
        step: "01",
        title: "In-Person Site Walkthrough & Planning",
        description:
          "Our lead builders inspect your home's structural framing, plumbing chases, and electrical capacity to draft an accurate, transparent scope of work.",
      },
      {
        step: "02",
        title: "Itemized Proposal & Material Selection",
        description:
          "We provide a clear written estimate with guaranteed line items—no surprise change orders or hidden subcontractor fees.",
      },
      {
        step: "03",
        title: "Containment & Demolition",
        description:
          "We erect floor-to-ceiling HEPA dust barriers and floor protection to keep the rest of your home pristine throughout the teardown.",
      },
      {
        step: "04",
        title: "Structural Rough-In & Inspection",
        description:
          "Framing, beam installations, and MEP rough-ins are inspected and approved under local Pennsylvania municipal building codes.",
      },
      {
        step: "05",
        title: "Master Finish Detailing & Handover",
        description:
          "Custom trim, cabinetry, paint, and fixtures are installed with micrometric precision before conducting a comprehensive final walkthrough.",
      },
    ],
    regionalFocus: {
      title: "Built for Western Pennsylvania Homes",
      description:
        "Older homes in Pittsburgh, Mt. Lebanon, and Squirrel Hill feature uneven plaster, out-of-square corners, and settling brick. We specialize in laser-leveling subfloors and shimming framing so your new renovation looks flawless regardless of your home's age.",
      points: [
        "Handling 100-year-old plaster and masonry wall interfaces",
        "Navigating steep hillside load transfers and foundation settling",
        "Full compliance with Allegheny and surrounding county municipal codes",
      ],
    },
    faq: [
      {
        question: "Do you pull permits for structural wall removals?",
        answer:
          "Yes. Envision Carpentry is a licensed Pennsylvania contractor (PA #184291). We coordinate permit applications, prepare framing documentation, and schedule all municipal building inspections.",
      },
      {
        question: "Who will actually be working in my home?",
        answer:
          "Our own seasoned master craftsmen. We do not farm your project out to third-party sub-crews. You will work with the same trusted builders every single day.",
      },
      {
        question: "How do you control dust and debris during a major remodel?",
        answer:
          "We seal off the work zone using floor-to-ceiling heavy plastic zip-walls, negative air scrubbers when necessary, and protective heavy Ram Board over all walkways.",
      },
    ],
  },

  carpentry: {
    slug: "carpentry",
    title: "Architectural Millwork & Custom Wood Works",
    shortTitle: "Custom Carpentry & Millwork",
    subtitle: "Crown Molding, Built-Ins & Bespoke Joinery",
    metaTitle: "Architectural Millwork & Custom Carpentry | Envision Carpentry LLC",
    metaDescription:
      "Handcrafted architectural millwork in Pittsburgh. Custom built-in bookcases, multi-piece crown molding, wainscoting, and bespoke fireplace mantels. PA #184291.",
    badge: "Master Joinery • PA License #184291",
    heroHighlight: "Heirloom Precision Joinery",
    heroDescription:
      "Bringing warmth, architectural prestige, and custom character to your home. We hand-cope every corner joint and hand-craft built-ins that look native to your home's architecture.",
    bgImage: "/custom-woodwork.jpg",
    overview:
      "Finish carpentry is the soul of a fine home. While rough carpenters hide their work behind drywall, master trim carpenters expose every joint to the light. At Envision Carpentry, our craftsmen practice time-honored joinery techniques—hand-coping inside corners, biscuit-joining miters, and micro-planing trim to sit flush against irregular historic plaster walls.",
    stats: [
      { value: "40+ Years", label: "Trade Heritage", sublabel: "Generational wood science" },
      { value: "Hand-Coped", label: "Corner Joints", sublabel: "Never caulked gaps" },
      { value: "Custom", label: "Bespoke Millwork", sublabel: "Milled to exact dimensions" },
      { value: "5.0 ★", label: "Client Rating", sublabel: "Flawless attention to detail" },
    ],
    keyCapabilities: [
      {
        title: "Multi-Piece Architectural Crown Molding",
        description:
          "Elevating standard ceiling heights with 2-piece, 3-piece, or 4-piece crown assemblies, dentil molding, and decorative backer blocking.",
        specs: [
          "Hand-coped interior corners that stay tight through seasonal humidity",
          "Backer blocks secured directly to wall studs and ceiling joists",
          "Biscuited and glued scarf joints along long wall runs",
        ],
      },
      {
        title: "Custom Built-In Bookcases & Entertainment Centers",
        description:
          "Floor-to-ceiling cabinetry, library shelving with integrated rolling ladders, concealed media wiring, and adjustable solid-core shelves.",
        specs: [
          "Cabinet-grade maple and oak hardwood plywood carcasses",
          "Concealed soft-close European hinges and full-extension drawer slides",
          "Integrated cable raceways and recessed warm LED channels",
        ],
      },
      {
        title: "Wainscoting, Picture Rail & Coffered Ceilings",
        description:
          "Classic raised-panel, recessed flat-panel (Shaker), and board-and-batten wainscoting paired with dramatic grid coffered ceiling beams.",
        specs: [
          "Calculated wall proportioning tailored to room door and window heights",
          "Smooth MDF or premium solid poplar components",
          "Invisible fastener plugging and fine sanding",
        ],
      },
      {
        title: "Fireplace Mantels & Hearth Overhauls",
        description:
          "Transforming dated brick or drywall fireplace walls into architectural centerpieces with custom fluted pilasters, heavy timber mantels, and decorative corbels.",
        specs: [
          "Non-combustible clearance compliance with NFPA standards",
          "Sustainably sourced rough-sawn hardwood or crisp painted finishes",
          "Hidden French cleat mounting systems capable of supporting 300+ lbs",
        ],
      },
    ],
    processSteps: [
      {
        step: "01",
        title: "Architectural Consultation & Measurement",
        description:
          "We take laser-accurate room dimensions and analyze existing casings, baseboards, and ceiling heights to ensure historical harmony.",
      },
      {
        step: "02",
        title: "Design Rendering & Material Sourcing",
        description:
          "We help you select profile styles, hardwoods (oak, cherry, walnut, poplar), or paint-grade materials suited to your budget and aesthetic.",
      },
      {
        step: "03",
        title: "Precision Shop Pre-Fabrication",
        description:
          "Cabinet carcasses, face frames, and intricate moldings are machined in our workshop using calibrated saws and joinery equipment.",
      },
      {
        step: "04",
        title: "Surgical On-Site Scribe & Installation",
        description:
          "Our lead craftsmen scribe every piece to your home's unique walls and ceilings, ensuring zero unsightly gaps or silicone fills.",
      },
    ],
    regionalFocus: {
      title: "Preserving Western Pennsylvania's Historic Woodwork",
      description:
        "From Shadyside Victorians to Fox Chapel estates, we frequently replicate vintage molding profiles that haven't been manufactured in decades, allowing restorations to retain authentic historical provenance.",
      points: [
        "Custom knife milling to match 100-year-old casing profiles",
        "Adapting trim to non-plumb lath and plaster walls",
        "Expert wood species matching for natural stain preservation",
      ],
    },
    faq: [
      {
        question: "Why do you cope inside corners instead of miter them 45 degrees?",
        answer:
          "Mitering inside corners always opens up when winter heating dries out the wood. A coped joint overlaps the adjacent molding face, staying completely tight and invisible through all four seasons.",
      },
      {
        question: "Can you build around uneven walls in older homes?",
        answer:
          "Yes. We specialize in custom scribing. We use a compass to trace the exact wavy contour of your plaster wall onto the back of the wood, then plane it by hand so the joint sits airtight.",
      },
      {
        question: "Do you provide finish painting or staining?",
        answer:
          "Yes, we offer turnkey service from raw timber to furniture-grade cabinet spraying, priming, and hand-rubbed oil stain finishes.",
      },
    ],
  },

  framing: {
    slug: "framing",
    title: "Structural Timber Framing & Custom Decks",
    shortTitle: "Structural Framing & Decks",
    subtitle: "Two-Story Decks, Additions & Hillside Grade Engineering",
    metaTitle: "Structural Timber Framing & Decks | Envision Carpentry LLC",
    metaDescription:
      "Expert structural framing and multi-story deck construction in Pittsburgh. Hillside footings, post-and-beam framing, and home additions. PA #184291.",
    badge: "Heavy Structural • PA License #184291",
    heroHighlight: "Engineered for Pennsylvania Hillsides",
    heroDescription:
      "Building robust, code-certified structural decks, additions, and timber frameworks that comfortably withstand snow loads, steep grade erosion, and decades of use.",
    bgImage: "/deck-framing.jpg",
    overview:
      "Pittsburgh's rugged terrain presents unique challenges that off-the-shelf deck builders cannot safely address. Steep slope grades, rocky clay soil, and heavy winter snowpacks demand deep frost-line concrete piers, cross-braced heavy timber posts, and engineered ledger connections.",
    stats: [
      { value: "40+ Years", label: "Framing Mastery", sublabel: "Built to structural code" },
      { value: "100%", label: "Code Compliant", sublabel: "Permits pulled & inspected" },
      { value: "Deep Pier", label: "Concrete Footings", sublabel: "Engineered below frost line" },
      { value: "500+", label: "Decks Built", sublabel: "Across Western PA" },
    ],
    keyCapabilities: [
      {
        title: "Multi-Tier & Hillside Deck Construction",
        description:
          "Designing complex elevated decks that extend your living space outward over steep topography with rock-solid timber or steel post support.",
        specs: [
          "6x6 and 8x8 treated timber posts with diagonal sway bracing",
          "Engineered Simpson Strong-Tie hardware and tension ties",
          "Deep 36-42 inch concrete caisson footings anchored into stable subsoil",
        ],
      },
      {
        title: "Structural Home Additions & Framing",
        description:
          "Ground-up stick framing for second-story expansions, master suite wings, sunrooms, and garage-top living quarters.",
        specs: [
          "Engineered roof trusses and custom hand-cut valley rafters",
          "Advanced air-sealing and structural exterior sheathing",
          "Precise tie-ins to existing rooflines without leaks",
        ],
      },
      {
        title: "Composite Decking & Architectural Railings",
        description:
          "Installing ultra-low maintenance composite boards (Trex, TimberTech, Deckorators) with hidden fasteners, cocktail drink rails, and aluminum balusters.",
        specs: [
          "12-inch on-center joist spacing preventing board deflection",
          "Integrated low-voltage stair riser and post cap lighting",
          "Drink rail caps matching primary home millwork",
        ],
      },
      {
        title: "Rotten Framing Remediation & Sistering",
        description:
          "Jacking up sagging deck ledgers or floor joists and installing engineered steel flitch plates or sistered framing to restore structural integrity.",
        specs: [
          "Hydraulic leveling and temporary support cribbing",
          "Flashing replacement with copper or self-adhering membrane",
          "Elimination of moisture traps at house-to-ledger contact",
        ],
      },
    ],
    processSteps: [
      {
        step: "01",
        title: "Topography & Load Analysis",
        description:
          "We assess your property's soil condition, slope angles, setback boundaries, and drainage patterns.",
      },
      {
        step: "02",
        title: "Permit Filing & Engineering Plans",
        description:
          "We draft code-compliant framing drawings, post footing calculations, and handle all township zoning submittals.",
      },
      {
        step: "03",
        title: "Excavation & Footing Pouring",
        description:
          "Concrete piers are poured below the 36-inch regional frost line with rebar cages to eliminate settling or frost heaving.",
      },
      {
        step: "04",
        title: "Heavy Timber Post & Beam Assembly",
        description:
          "Beams are notched over solid posts—never hung purely by nails—ensuring maximum direct bearing capacity.",
      },
    ],
    regionalFocus: {
      title: "Allegheny County Hillside Engineering",
      description:
        "A large portion of Western PA homes sit on severe grade drops. We engineer custom sway bracing and structural retaining systems that hold stable against freeze-thaw cycles and ground settling.",
      points: [
        "Strict adherence to Allegheny County lateral load guidelines",
        "Waterproofing house ledger boards against masonry brick walls",
        "Integrated hillside drainage diverting stormwater away from footings",
      ],
    },
    faq: [
      {
        question: "How deep do deck footings have to be in Pittsburgh?",
        answer:
          "Pennsylvania building code requires footings to extend a minimum of 36 inches below ground to stay below the frost line. On hillside lots, we frequently excavate deeper to reach bedrock or undisturbed shale.",
      },
      {
        question: "Is composite decking worth the investment over pressure-treated wood?",
        answer:
          "Yes. While wood has lower initial material cost, it requires annual staining and can warp or splinter under PA weather. Premium composite lasts 30+ years with zero splinters and simple soap-and-water cleaning.",
      },
      {
        question: "Do you handle the building permits and inspections?",
        answer:
          "Always. We prepare the framing plans, submit permit applications to your local municipality, and meet with the building inspector on site for footing and final framing sign-offs.",
      },
    ],
  },

  flooring: {
    slug: "flooring",
    title: "Hardwood & Luxury Flooring Installation",
    shortTitle: "Flooring Installation & Repair",
    subtitle: "Solid Oak, Engineered Hardwood & Subfloor Leveling",
    metaTitle: "Hardwood & Luxury Flooring Installation | Envision Carpentry LLC",
    metaDescription:
      "Professional hardwood, engineered timber, and luxury vinyl plank flooring in Pittsburgh. Joist leveling, squeak elimination, and custom stair treads. PA #184291.",
    badge: "Precision Flooring • PA License #184291",
    heroHighlight: "Built on Level, Stable Foundations",
    heroDescription:
      "A gorgeous floor begins underneath the surface. We eliminate squeaks, level subfloors with laser precision, and install solid hardwood and luxury flooring built for decades of foot traffic.",
    bgImage: "/service-flooring.jpg",
    overview:
      "Flooring is one of the most high-traffic surfaces in your residence. In Western Pennsylvania, shifting humidity between muggy summers and dry winter heating causes wood flooring to expand and contract. Envision Carpentry approaches flooring through the lens of wood science—acclimating lumber properly, checking moisture content, and ensuring the subfloor is dead flat before the first plank is laid.",
    stats: [
      { value: "Laser", label: "Subfloor Leveling", sublabel: "Zero deflection tolerance" },
      { value: "100%", label: "Squeak Free", sublabel: "Joist screw reinforcement" },
      { value: "Hardwood", label: "Solid & Engineered", sublabel: "Oak, hickory, maple & walnut" },
      { value: "Custom", label: "Stair Treads", sublabel: "Matching seamless profiles" },
    ],
    keyCapabilities: [
      {
        title: "Solid Hardwood Flooring (Site-Finished & Pre-Finished)",
        description:
          "Classic 3/4-inch solid red oak, white oak, hickory, and maple tongue-and-groove flooring installed with tight expansion gap borders.",
        specs: [
          "Moisture testing of subfloor and flooring planks prior to nailing",
          "Blind cleat nailing at 6-8 inch intervals along joist alignments",
          "Custom picture-frame borders, herringbone, and flush wood heat registers",
        ],
      },
      {
        title: "Luxury Vinyl Plank (LVP) & Engineered Timber",
        description:
          "100% waterproof luxury vinyl plank systems featuring high-wear commercial ceramic bead coatings, ideal for kitchens, basements, and pet-friendly homes.",
        specs: [
          "Heavy 20mil+ commercial wear layer for maximum scratch protection",
          "Integrated acoustic cork or EVA foam underlayment",
          "Seamless transitions to adjacent tile and carpet surfaces",
        ],
      },
      {
        title: "Subfloor Laser Leveling & Squeak Elimination",
        description:
          "Correcting dipping, crowning, or sagging subfloors in older homes before laying new planks.",
        specs: [
          "Joist sistering to correct structural deflection",
          "Self-leveling underlayment compound poured over laser-shot datum lines",
          "Structural subfloor screw fastening eliminating nail squeaks",
        ],
      },
      {
        title: "Custom Staircases, Treads & Handrails",
        description:
          "Replacing carpeted stairs with solid hardwood treads, white risers, architectural newel posts, and wrought-iron or wood balusters.",
        specs: [
          "Solid single-piece hardwood treads milled to fit out-of-square stringers",
          "Code-compliant riser height uniformity across all steps",
          "Structural handrail anchoring supporting 200+ lbs of lateral force",
        ],
      },
    ],
    processSteps: [
      {
        step: "01",
        title: "Subfloor Inspection & Laser Survey",
        description:
          "We measure deflection across the room with digital laser levels, identifying high spots and sagging joists.",
      },
      {
        step: "02",
        title: "Subfloor Stabilization & Leveling",
        description:
          "Subfloor panels are screwed down tight, high spots are planed down, and low sections are filled with high-strength self-leveler.",
      },
      {
        step: "03",
        title: "Acclimation & Vapor Barrier Installation",
        description:
          "Wood planks acclimate in your home's conditioned air for 5-7 days while moisture-retarding underlayment is rolled out.",
      },
      {
        step: "04",
        title: "Precision Laydown & Custom Trim Detailing",
        description:
          "Planks are laid with staggered seams, followed by baseboards, shoe molding, and custom-milled thresholds.",
      },
    ],
    regionalFocus: {
      title: "Engineered for Pennsylvania's Seasonal Climate Shifts",
      description:
        "Pittsburgh experiences humidity swings from 80% in July to 25% in January. We calculate precise perimeter expansion gaps under baseboards to allow natural expansion without buckled planks or gaping winter joints.",
      points: [
        "Subfloor moisture meter testing before every installation",
        "Proper expansion gap spacing concealed beneath base shoe molding",
        "Specialized adhesives preventing hollow spots over concrete basements",
      ],
    },
    faq: [
      {
        question: "Can you fix the annoying squeaks in my existing floor?",
        answer:
          "Yes. Squeaks are caused by subfloors rubbing against loose nails or flexing joists. When replacing flooring, we screw down the subfloor directly into the joists and sister weak timbers to eliminate noise permanently.",
      },
      {
        question: "How long does solid hardwood need to acclimate before installation?",
        answer:
          "In Western PA, we recommend 5 to 7 days in the conditioned living space. We test both the lumber and the subfloor with a digital pinless moisture meter to ensure they are within 2-4% moisture content of each other.",
      },
      {
        question: "Is luxury vinyl plank suitable for finished basements?",
        answer:
          "LVP is the best choice for basements because it is 100% waterproof and unaffected by concrete moisture vapor that would ruin traditional solid hardwood.",
      },
    ],
  },

  "doors-windows": {
    slug: "doors-windows",
    title: "Precision Windows & Architectural Doors",
    shortTitle: "Windows & Precision Doors",
    subtitle: "Exterior Entries, French Doors & Historical Casings",
    metaTitle: "Precision Windows & Architectural Doors | Envision Carpentry LLC",
    metaDescription:
      "Expert window and door installation in Pittsburgh. Custom wood entry doors, French doors, historic casing replication, and airtight energy efficiency. PA #184291.",
    badge: "Airtight Joinery • PA License #184291",
    heroHighlight: "Airtight Fit & Historic Elegance",
    heroDescription:
      "Eliminating winter drafts and elevating curb appeal. We re-square out-of-plumb rough openings in older homes and install premium entries that close with bank-vault precision.",
    bgImage: "/service-doors.jpg",
    overview:
      "A door or window is only as good as the carpenter who frames the opening. In older Western Pennsylvania residences, settling brick and shifted headers mean almost no rough opening is truly plumb, level, or square. Low-bid installers simply shim the frame and mask huge gaps with expanding foam and caulk. Envision Carpentry rebuilds the rough opening to true square before setting the unit, guaranteeing smooth operation and superior weather sealing.",
    stats: [
      { value: "True-Square", label: "Rough Openings", sublabel: "Re-framed & shimmed right" },
      { value: "Airtight", label: "Thermal Flashing", sublabel: "Zero winter drafts" },
      { value: "Historic", label: "Casing Match", sublabel: "Replicating vintage trim" },
      { value: "Bank-Vault", label: "Door Feel", sublabel: "Smooth latching & heavy swing" },
    ],
    keyCapabilities: [
      {
        title: "Custom Exterior Wood & Fiberglass Entry Doors",
        description:
          "Heavy-duty statement front entries with sidelights, decorative transoms, multi-point locking mechanisms, and rot-resistant composite sills.",
        specs: [
          "Solid mahogany, oak, or high-definition textured fiberglass slabs",
          "Multi-point deadbolt hardware securing top, center, and bottom",
          "Thermal break sills preventing winter condensation transfer",
        ],
      },
      {
        title: "French Doors, Sliding Patio Doors & Multi-Slide Systems",
        description:
          "Opening interior rooms to exterior decks and patios with smooth-gliding patio doors and energy-efficient insulated low-E argon glass.",
        specs: [
          "Recessed structural headers supporting expansive 8-12ft spans",
          "Waterproof sill pan flashing directing driving rain outdoors",
          "Heavy stainless steel rollers engineered for effortless gliding",
        ],
      },
      {
        title: "Historic Casing & Trim Replication",
        description:
          "Replacing modern thin trim with period-accurate 4-6 inch exterior brickmould, interior backband casings, and rosettes matching vintage homes.",
        specs: [
          "Custom knife profiles matched to 100-year-old moldings",
          "Solid wood sills with calculated drip grooves beneath",
          "Blind pocket-hole assembly of interior trim frames",
        ],
      },
      {
        title: "Interior Solid-Core & Pocket Door Conversions",
        description:
          "Eliminating hollow-core builder doors in favor of heavy solid-core doors, and framing quiet sliding pocket doors to save space in compact bathrooms and pantries.",
        specs: [
          "Heavy-duty ball-bearing pocket door tracks rated for 200+ lbs",
          "Solid pine and poplars with acoustic sound-dampening core",
          "Solid brass architectural hinge hardware",
        ],
      },
    ],
    processSteps: [
      {
        step: "01",
        title: "Surgical Measurement & Jamb Depth Check",
        description:
          "We measure width, height, diagonal squareness, and exact wall jamb thickness (especially in older thick plaster and brick homes).",
      },
      {
        step: "02",
        title: "Careful Removal & Structural Prep",
        description:
          "Old frames are extracted without cracking surrounding interior plaster, and the rough opening is re-framed plumb and level.",
      },
      {
        step: "03",
        title: "Sill Pan Flashing & Weather Barrier",
        description:
          "A flexible waterproof sill pan is adhered to the rough sill, preventing driving rainwater from ever touching wood subfloors.",
      },
      {
        step: "04",
        title: "Precision Setting & Thermal Insulation",
        description:
          "The door or window is secured with structural screws through solid shims, insulated with low-expansion foam, and trimmed with custom casing.",
      },
    ],
    regionalFocus: {
      title: "Stopping Western Pennsylvania Winter Drafts",
      description:
        "Pittsburgh's freezing winters and driving rain demand proper thermal flashing. We use low-expansion door and window foam that creates a flexible thermal barrier without bowing jambs or binding door hinges.",
      points: [
        "Waterproof sill pans on every exterior door installation",
        "Low-expansion closed-cell foam insulation sealing all perimeter air gaps",
        "Historic brickmold scribing on masonry Victorian facades",
      ],
    },
    faq: [
      {
        question: "Why do my current doors stick in the summer but close loosely in the winter?",
        answer:
          "Western PA's high summer humidity swells wood doors, while winter dry air shrinks them. If a door was hung without proper clearances or painted unsealed on its bottom edge, it absorbs moisture and binds. We properly seal all six sides of every door slab.",
      },
      {
        question: "Can you install a new door in an old out-of-square brick opening?",
        answer:
          "Yes. That is our core specialty. We rebuild the wooden buck frame inside the masonry opening to be plumb and square, so the new pre-hung door operates smoothly without rubbing.",
      },
      {
        question: "Do you install pocket doors in existing walls?",
        answer:
          "Yes. We check for electrical or plumbing runs inside the wall, re-frame the opening with rigid steel-wrapped studs that prevent wall flexing, and install heavy-duty ball-bearing track hardware.",
      },
    ],
  },

  restoration: {
    slug: "restoration",
    title: "Damage Restoration & Structural Remediation",
    shortTitle: "Damage Restoration",
    subtitle: "Water, Moisture, Storm Wear & Sagging Joists",
    metaTitle: "Damage Restoration & Structural Remediation | Envision Carpentry LLC",
    metaDescription:
      "Expert structural restoration in Pittsburgh. Rotten timber replacement, joist sistering, subfloor rebuilding, and water damage remediation. PA #184291.",
    badge: "Structural Repair • PA License #184291",
    heroHighlight: "Restoring Structural Integrity",
    heroDescription:
      "When unexpected water damage, dry rot, or settling threaten your residence, our master builders step in with engineered timber repairs, joist reinforcement, and finish restoration.",
    bgImage: "/service-restore.jpg",
    overview:
      "Structural timber damage cannot be solved with cosmetic cosmetic patches. When a slow plumbing leak rots a subfloor or a sagging ceiling joist cracks plaster, you need master builders who understand load paths, foundation transfer, and wood science. Envision Carpentry provides permanent structural remediation—identifying the source of moisture, supporting the structure with hydraulic jacks, and replacing rotten framing with code-compliant timbers.",
    stats: [
      { value: "40+ Years", label: "Structural Expertise", sublabel: "Engineering load stabilization" },
      { value: "Permanent", label: "Framing Repairs", sublabel: "Zero temporary cosmetic patches" },
      { value: "Insurance", label: "Documentation", sublabel: "Detailed claim reports" },
      { value: "Turnkey", label: "Finish Restoration", sublabel: "Framing to final millwork" },
    ],
    keyCapabilities: [
      {
        title: "Rotten Timber & Sill Plate Replacement",
        description:
          "Replacing wood timbers and foundation mudsills destroyed by moisture, termites, or ground contact without causing wall cracking above.",
        specs: [
          "Hydraulic bottle jacking and temporary load-bearing cribbing",
          "Pressure-treated timber replacements with sill gaskets",
          "Anchor bolt drilling into masonry foundations",
        ],
      },
      {
        title: "Floor Joist Sistering & Sag Correction",
        description:
          "Straightening bouncy, sagging, or cracked floor joists by sandwiching new structural timbers or steel flitch plates alongside damaged members.",
        specs: [
          "Full-length sistering secured with structural timber screws and polyurethane glue",
          "Laser leveling to raise sagging floors back to datum plane",
          "Reinforcement under heavy kitchen islands and stone soaking tubs",
        ],
      },
      {
        title: "Water-Damaged Subfloor & Framing Rebuilds",
        description:
          "Excavating rotted subflooring beneath damaged bathrooms, laundry rooms, or exterior door entries and reinstalling rigid plywood substrates.",
        specs: [
          "Anti-microbial sanitization and moisture-meter drying verification",
          "Tongue-and-groove 3/4-inch exterior-grade subfloor replacement",
          "Moisture-proof uncoupling membranes protecting framing",
        ],
      },
      {
        title: "Post-Storm & Fallen Tree Structural Framing",
        description:
          "Rebuilding crushed roof trusses, wall headers, and exterior overhangs following severe Western PA weather events.",
        specs: [
          "Temporary weatherproofing tarps and structural shoring within 24 hours",
          "Engineered truss duplication complying with PA building codes",
          "Detailed photographic documentation for homeowner insurance claims",
        ],
      },
    ],
    processSteps: [
      {
        step: "01",
        title: "Structural Assessment & Root-Cause Analysis",
        description:
          "We inspect the damage, measure framing deflection with laser levels, and identify how moisture entered the structure.",
      },
      {
        step: "02",
        title: "Temporary Shoring & Load Stabilization",
        description:
          "Before cutting any damaged timber, we install temporary support walls and jacks to bear the upper structural load safely.",
      },
      {
        step: "03",
        title: "Surgical Removal & Framing Replacement",
        description:
          "Rotted lumber is cut out past the affected zone, treated against future fungal decay, and replaced with code-certified structural members.",
      },
      {
        step: "04",
        title: "Turnkey Finish Rebuilding",
        description:
          "We restore insulation, vapor barriers, subflooring, drywall, and custom trim so your home is whole again.",
      },
    ],
    regionalFocus: {
      title: "Addressing Western PA Soil & Moisture Challenges",
      description:
        "High clay content, poor basement foundation drainage, and freeze-thaw cycles frequently cause subfloor rot near exterior rim joists. We install preventative flashing and capillary breaks that keep your home dry permanently.",
      points: [
        "Sill plate replacement over stone and rubble foundation walls",
        "Remediating moisture damage caused by poor freeze-thaw gutter drainage",
        "Detailed itemized repair scopes for homeowner insurance claims",
      ],
    },
    faq: [
      {
        question: "Can a sagging floor be leveled without tearing down the ceiling below?",
        answer:
          "In many cases, yes. We can sister new floor joists or install supplemental support beams from the basement, gradually raising the floor back to level over several days to avoid cracking upper drywall.",
      },
      {
        question: "Do you work with homeowner insurance companies?",
        answer:
          "Yes. We provide clear, itemized repair estimates, structural photographs, and engineering scopes that insurance adjusters require for claim approvals.",
      },
      {
        question: "How do I know if moisture damage has compromised my home's framing?",
        answer:
          "Signs include bouncy or soft floors, doors that suddenly jam in their frames, musty smells near baseboards, or visible mold along drywall base edges. We inspect the underlying framing with moisture meters and optical scopes.",
      },
    ],
  },

  garages: {
    slug: "garages",
    title: "Garage Construction & Workshop Conversions",
    shortTitle: "Garage Builds & Conversions",
    subtitle: "Detached Builds, Attached Expansions & Man Caves",
    metaTitle: "Garage Construction & Workshop Conversions | Envision Carpentry LLC",
    metaDescription:
      "Custom garage construction and workshop conversions in Pittsburgh. Stick-built detached garages, bonus rooms, insulation, and craftsman cabinetry. PA #184291.",
    badge: "Custom Garage Builds • PA License #184291",
    heroHighlight: "Built for Storage, Craft & Living",
    heroDescription:
      "Transforming cold, cluttered vehicle space into fully insulated workshops, hobby rooms, or building custom detached and attached garages from excavation to shingles.",
    bgImage: "/service-garage.jpg",
    overview:
      "A garage shouldn't merely be a repository for lawnmowers and clutter. With high thermal insulation, custom cabinetry, heavy-duty timber workbenches, and proper electrical planning, a garage becomes one of the most versatile living and working zones in your home. Envision Carpentry designs and constructs detached and attached garages tailored to your property's topography.",
    stats: [
      { value: "Custom", label: "Stick-Built", sublabel: "Never flimsy pole barns" },
      { value: "40+ Years", label: "Trade Heritage", sublabel: "Roof & wall framing mastery" },
      { value: "Turnkey", label: "Workshop Fit-Out", sublabel: "Workbenches, power & heat" },
      { value: "PA #184291", label: "Licensed & Insured", sublabel: "Zoning & code compliance" },
    ],
    keyCapabilities: [
      {
        title: "Ground-Up Stick-Built Residential Garages",
        description:
          "Custom 1-car, 2-car, and 3-car detached or attached garages designed to mirror your home's roof pitch, siding color, and architectural trim.",
        specs: [
          "2x4 or 2x6 framing with engineered roof trusses or attic storage",
          "Engineered LVL overhead door headers accommodating 16ft+ doors",
          "Complete building permit and municipal zoning clearance",
        ],
      },
      {
        title: "Master Craftsman Workshop Build-Outs",
        description:
          "Creating functional workshops with heavy-duty hardwood workbenches, French cleat tool organization walls, dust collection ducting, and task lighting.",
        specs: [
          "Solid maple or butcher block bench tops capable of holding heavy vises",
          "Wall-to-wall modular plywood tool cabinets and deep pullout drawers",
          "Dedicated 20-amp and 220V tool circuit rough-ins",
        ],
      },
      {
        title: "Bonus Room & In-Law Suite Conversions",
        description:
          "Finishing the open space above a 2-car garage into an independent guest suite, home office, artist studio, or gym with dedicated mini-split heating and cooling.",
        specs: [
          "Sound-deadening floor insulation dampening garage vehicle noise",
          "Code-compliant fire-rated drywall separation between garage and living area",
          "Full plumbing and electrical rough-in for private bath and kitchenette",
        ],
      },
      {
        title: "Thermal Insulation & Finished Interior Walls",
        description:
          "Converting cold, drafty garages into heated 4-season rooms with high-R fiberglass or rockwool insulation, impact-resistant drywall, and epoxy floor coatings.",
        specs: [
          "R-15 to R-21 wall insulation and R-38 ceiling batts",
          "Moisture-resistant drywall with smooth painted finishes",
          "Sealed weatherstripped overhead door perimeters",
        ],
      },
    ],
    processSteps: [
      {
        step: "01",
        title: "Site Survey & Zoning Clearance",
        description:
          "We check your property boundary lines, setbacks, utility lines, and municipal height restrictions before drafting plans.",
      },
      {
        step: "02",
        title: "Concrete Foundation & Slab Pouring",
        description:
          "We coordinate reinforced concrete slab construction with monolithic footings designed to withstand heavy vehicle weight.",
      },
      {
        step: "03",
        title: "Structural Stick Framing & Trusses",
        description:
          "Walls and roof trusses are erected, sheathed, and waterproofed with synthetic housewrap and architectural shingles.",
      },
      {
        step: "04",
        title: "Interior Fit-Out & Custom Woodwork",
        description:
          "We install insulation, drywall, overhead doors, custom cabinetry, workbenches, and trim detailing.",
      },
    ],
    regionalFocus: {
      title: "Built for Western Pennsylvania Winters",
      description:
        "Cold Pittsburgh winters make uninsulated garages unusable for six months of the year. Our thermal air-sealing packages, insulated overhead door framing, and efficient heating solutions create comfortable year-round workspaces.",
      points: [
        "Heavy snow load engineering on all roof truss designs",
        "Moisture-resistant drywall preventing damage from melting car snow",
        "Sloped floor drainage guiding winter slush out of the building",
      ],
    },
    faq: [
      {
        question: "Do I need a building permit to build a detached garage?",
        answer:
          "Yes. In Pennsylvania, all detached garages require zoning and building permits. Envision Carpentry prepares the architectural drawings and coordinates all approvals with your township.",
      },
      {
        question: "Can I convert the attic space above my garage into a livable room?",
        answer:
          "Yes. If the garage was originally framed with attic storage trusses or if we reinforce the ceiling joists, we can install insulation, drywall, flooring, and climate control for a legal living space.",
      },
      {
        question: "How long does it take to build a 2-car detached garage?",
        answer:
          "From concrete curing to final siding and overhead doors, construction typically takes 3 to 4 weeks, depending on weather and municipal inspection schedules.",
      },
    ],
  },

  painting: {
    slug: "painting",
    title: "High-Grade Interior & Finish Painting",
    shortTitle: "Interior & Finish Painting",
    subtitle: "Cabinet Enameling, Trim Coating & Clean Spray Finishes",
    metaTitle: "High-Grade Interior & Finish Painting | Envision Carpentry LLC",
    metaDescription:
      "Professional interior painting and cabinet enameling in Pittsburgh. Ultra-smooth spray finishes, HEPA dust containment, and low-VOC Sherwin-Williams paints. PA #184291.",
    badge: "Fine Finish Coating • PA License #184291",
    heroHighlight: "Flawless Architectural Coating",
    heroDescription:
      "World-class carpentry deserves an equally flawless finish. We provide glass-smooth cabinet enameling, crisp trim lines, and HEPA-filtered clean room containment.",
    bgImage: "/service-paint.jpg",
    overview:
      "Painting is not just rolling color on drywall—it is the final protective armor and aesthetic signature of your home's woodwork. When we build custom crown molding, built-ins, or wainscoting, our dedicated finish painters ensure every nail hole is invisible, every seam is micro-sanded, and the coating has the silky sheen of factory fine furniture.",
    stats: [
      { value: "Glass-Smooth", label: "Spray Finishes", sublabel: "Zero brush marks on trim" },
      { value: "HEPA", label: "Clean Air Containment", sublabel: "Negative air scrubbers" },
      { value: "Low-VOC", label: "Premium Paints", sublabel: "Benjamin Moore & Sherwin-Williams" },
      { value: "100%", label: "Prep Focused", sublabel: "80% prep, 20% spray" },
    ],
    keyCapabilities: [
      {
        title: "Kitchen Cabinet Enameling & Spray Finishing",
        description:
          "Transforming dark or dated wood cabinets into factory-smooth, ultra-durable modern centerpieces using catalyzed polyurethane and fine enamel coatings.",
        specs: [
          "Doors and drawers removed and sprayed in controlled clean room tent",
          "Chemical degreasing, mechanical sanding, and high-bonding bonding primer",
          "Ultra-durable Italian lacquer or urethane enamel that resists chipping",
        ],
      },
      {
        title: "Architectural Trim & Millwork Spraying",
        description:
          "Applying a mirror-smooth satin or semi-gloss finish to crown molding, wainscoting, built-ins, and interior doors without brush strokes or roller stipple.",
        specs: [
          "Fine-finish airless and HVLP spray application",
          "Elastomeric caulking that never cracks along molding seams",
          "Micro-filler on every pin nail hole sanded flush with 320-grit paper",
        ],
      },
      {
        title: "Interior Wall & Ceiling Repainting",
        description:
          "Thorough wall prep, drywall skimming, and double-coat premium wall coverage producing laser-sharp cut lines at ceilings and trim edges.",
        specs: [
          "Skim coating over uneven plaster and drywall imperfections",
          "Premium washable matte and eggshell finishes from Benjamin Moore",
          "Two coats of solid pigment coverage guaranteed",
        ],
      },
      {
        title: "HEPA Dust & Odor Containment",
        description:
          "Protecting your home and family with negative air scrubbers, zipper dust walls, and floor-to-ceiling poly containment zones.",
        specs: [
          "Commercial HEPA air filtration scrubbing 99.97% of airborne particles",
          "Full floor masking with heavy protective Ram Board",
          "Zero-VOC and low-VOC paints ensuring clean indoor air quality",
        ],
      },
    ],
    processSteps: [
      {
        step: "01",
        title: "Comprehensive Masking & Containment",
        description:
          "Floors, furniture, lighting fixtures, and appliances are completely masked with plastic sheeting and heavy floor runners.",
      },
      {
        step: "02",
        title: "Rigorous Mechanical Surface Preparation",
        description:
          "Surfaces are cleaned, deglossed, filled with automotive-grade wood fillers, and sanded smooth with HEPA dust-extracted sanders.",
      },
      {
        step: "03",
        title: "High-Adhesion Stain-Blocking Primer",
        description:
          "We apply specialized primers that block wood tannins, knot bleeds, and provide an unbreakable bond for the topcoat.",
      },
      {
        step: "04",
        title: "Dual Enamel Topcoats & Detailed Inspection",
        description:
          "Two coats of premium enamel are applied with ultra-fine spray tips, followed by meticulous halogen-light quality inspection.",
      },
    ],
    regionalFocus: {
      title: "Clean Painting in Historic Pittsburgh Residences",
      description:
        "Older homes in Allegheny County often contain historic plaster that absorbs paint unevenly. We apply penetrating masonry and plaster conditioners to ensure uniform sheen and prevent flaking over time.",
      points: [
        "Plaster repair and stabilizing spiderweb hairline cracks",
        "Zero-VOC coatings safe for children, pets, and asthma sufferers",
        "Precision masking around original brass hardware and stain glass",
      ],
    },
    faq: [
      {
        question: "How durable is cabinet painting compared to buying new cabinets?",
        answer:
          "When done professionally with chemical degreasing, high-bonding primer, and catalyzed urethane enamel, the finish is as durable as factory-new cabinetry. It can withstand daily cleaning, grease, and moisture for 10+ years at a fraction of the cost of replacement.",
      },
      {
        question: "Will my house smell like paint fumes?",
        answer:
          "No. We use low-VOC and zero-VOC architectural coatings and run commercial HEPA air scrubbers with carbon filters that exhaust clean air and eliminate lingering odors.",
      },
      {
        question: "Do you spray or roll trim inside the house?",
        answer:
          "For new built-ins, wainscoting, and cabinet transformations, we mask the room completely and spray with fine-finish HVLP/airless equipment for a silky, brush-mark-free finish. For quick touch-ups, we use premium ultra-fine microfiber rollers.",
      },
    ],
  },
};
