/**
 * 2nd International Biotechnology Conference 2026 (IBC 2026)
 * University of Chittagong, Bangladesh
 * 
 * CENTRAL CONFIGURATION & CONTENT STORE
 * Organizers can replace any dates, fees, speaker info, contacts, or guidelines directly in this file.
 */

export interface Speaker {
  id: string;
  name: string;
  role: string;
  institution: string;
  country: string;
  researchArea: string;
  bio: string;
  presentationTitle: string;
  sessionType: 'Keynote' | 'Plenary' | 'Invited' | 'Oral Presentation';
  avatarUrl: string;
  isKeynote?: boolean;
}

export interface AgendaItem {
  id: string;
  day: number; // 1, 2, or 3
  time: string;
  title: string;
  type: 'Keynote' | 'Oral Presentation' | 'Poster' | 'Workshop' | 'Networking' | 'Ceremony';
  speaker: string;
  venue: string;
  description?: string;
  track?: string;
}

export interface ConferenceTheme {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ImportantDate {
  id: string;
  title: string;
  date: string;
  isTBA: boolean;
  status: 'upcoming' | 'open' | 'closed';
  description: string;
}

export interface Announcement {
  id: string;
  date: string;
  category: 'Call for Papers' | 'Registration' | 'Program' | 'General';
  title: string;
  description: string;
  fullContent?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Conference' | 'Presentations' | 'Participants' | 'Campus';
  caption: string;
  imageUrl: string;
}

export interface RegistrationCategory {
  id: string;
  name: string;
  feeDemo: string;
  description: string;
  benefits: string[];
}

export interface DemoSubmissionResult {
  submissionId: string;
  email: string;
  title: string;
  authors: string;
  category: string;
  presentationType: 'Oral Presentation' | 'Poster Presentation';
  status: 'Accepted — Oral' | 'Accepted — Poster' | 'Under Review' | 'Revision Required' | 'Not Accepted';
  reviewComments: string;
  assignedSession?: string;
  dateChecked: string;
}

export const CONFERENCE_INFO = {
  name: "2nd International Biotechnology Conference 2026",
  shortName: "IBC 2026",
  edition: "2nd International Edition",
  theme: "Next Generation Biotechnology: Exploring Emerging Frontiers & Global Collaboration",
  organizedBy: "Department of Genetic Engineering & Biotechnology",
  institution: "University of Chittagong",
  country: "Bangladesh",
  collaboratingPartner: "National Institute of Biotechnology (NIB) [Partner Placeholder]",
  academicSponsor: "University Grants Commission (UGC) Bangladesh [Courtesy Placeholder]",
  datesDisplay: "December 2026 — [Date to Be Announced]",
  countdownTarget: "2026-12-10T09:00:00+06:00", // Configurable target for countdown
  isCountdownDemo: true,
  venue: "Faculty of Biological Sciences Auditorium, University of Chittagong, Chattogram 4331, Bangladesh",
  contactEmail: "[Official Email — conference.geb@cu.ac.bd]",
  contactPhone: "[Official Phone — +880 17XXXXXXXX]",
  contactWebsite: "https://cu.ac.bd/geb",
  submissionDeadlineNotice: "[Submission Deadline — To Be Announced]",
};

export const IMPORTANT_DATES: ImportantDate[] = [
  {
    id: "date-1",
    title: "Call for Abstracts Open",
    date: "[Date — To Be Announced]",
    isTBA: true,
    status: "open",
    description: "Online submission portal opens for oral and poster abstract submissions.",
  },
  {
    id: "date-2",
    title: "Abstract Submission Deadline",
    date: "[Date — To Be Announced]",
    isTBA: true,
    status: "upcoming",
    description: "Final deadline for 250-word structured scientific abstracts.",
  },
  {
    id: "date-3",
    title: "Notification of Acceptance",
    date: "[Date — To Be Announced]",
    isTBA: true,
    status: "upcoming",
    description: "Peer-review results and acceptance letters sent via registered email.",
  },
  {
    id: "date-4",
    title: "Early Registration Deadline",
    date: "[Date — To Be Announced]",
    isTBA: true,
    status: "upcoming",
    description: "Discounted registration deadline for students and early researchers.",
  },
  {
    id: "date-5",
    title: "Final Registration Deadline",
    date: "[Date — To Be Announced]",
    isTBA: true,
    status: "upcoming",
    description: "Closing date for delegate, speaker, and participant registration.",
  },
  {
    id: "date-6",
    title: "Conference Inauguration",
    date: "December 2026 [Date — TBA]",
    isTBA: true,
    status: "upcoming",
    description: "Opening ceremony, plenary keynote addresses, and scientific sessions.",
  },
];

export const CONFERENCE_THEMES: ConferenceTheme[] = [
  {
    id: "theme-1",
    title: "Medical & Pharmaceutical Biotechnology",
    description: "Biologics, drug discovery, cancer therapeutics, immunotechnology, and targeted gene therapy.",
    iconName: "Stethoscope",
  },
  {
    id: "theme-2",
    title: "Agricultural Biotechnology",
    description: "Crop genetics, stress tolerance, molecular breeding, and sustainable agro-biotech innovations.",
    iconName: "Sprout",
  },
  {
    id: "theme-3",
    title: "Environmental Biotechnology",
    description: "Bioremediation, wastewater bioprocessing, environmental genomics, and circular bio-economy.",
    iconName: "Leaf",
  },
  {
    id: "theme-4",
    title: "Industrial Biotechnology",
    description: "Enzyme engineering, bioplastics, microbial fermentation, and industrial biomanufacturing.",
    iconName: "Factory",
  },
  {
    id: "theme-5",
    title: "Food & Nutritional Biotechnology",
    description: "Nutraceuticals, functional food security, fermentation technology, and probiotic strains.",
    iconName: "Apple",
  },
  {
    id: "theme-6",
    title: "Molecular Biology",
    description: "Cell signaling, macromolecular structures, gene expression control, and epigenetic dynamics.",
    iconName: "Dna",
  },
  {
    id: "theme-7",
    title: "Genetic Engineering",
    description: "CRISPR-Cas genome editing, synthetic biology, recombinant protein systems, and cloning.",
    iconName: "Binary",
  },
  {
    id: "theme-8",
    title: "Bioinformatics",
    description: "High-throughput sequence analysis, phylogenetics, protein structural modeling, and pipelines.",
    iconName: "Cpu",
  },
  {
    id: "theme-9",
    title: "Computational Biology",
    description: "Machine learning in genomics, molecular docking simulations, and biological network dynamics.",
    iconName: "Network",
  },
  {
    id: "theme-10",
    title: "Microbial Biotechnology",
    description: "Metagenomics, antimicrobial resistance (AMR), extremophiles, and microbial bioprospecting.",
    iconName: "Microscope",
  },
  {
    id: "theme-11",
    title: "Plant Biotechnology",
    description: "Plant tissue culture, secondary metabolite production, functional genomics, and GM traits.",
    iconName: "Trees",
  },
  {
    id: "theme-12",
    title: "Emerging Biotechnology",
    description: "Nanobiotechnology, single-cell multiomics, biosensors, and translational biotechnology.",
    iconName: "Sparkles",
  },
];

export const FEATURED_KEYNOTE_SPEAKER: Speaker = {
  id: "speaker-keynote",
  name: "Dr. [Keynote Speaker Name — TBA]",
  role: "Professor of Molecular Genetics & Biotechnology",
  institution: "[Distinguished University / Research Institute]",
  country: "[Country — To Be Announced]",
  researchArea: "[Genomic Medicine & CRISPR Translational Biology]",
  bio: "This is a placeholder profile for the keynote speaker of the 2nd International Biotechnology Conference 2026. The organizing committee at the University of Chittagong is finalizing invitations with prominent global biotech scholars and institutional partners. Once confirmed, the full curriculum vitae, keynote title, and abstract will be updated here.",
  presentationTitle: "[Keynote Address: Emerging Frontiers in Molecular Genetics & Sustainable Bioeconomy]",
  sessionType: "Keynote",
  avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
  isKeynote: true,
};

export const SPEAKERS: Speaker[] = [
  {
    id: "speaker-1",
    name: "Prof. [Distinguished Speaker 1 — TBA]",
    role: "Professor of Agricultural Biotechnology",
    institution: "[International Agricultural University]",
    country: "[Japan / International]",
    researchArea: "[Climate-Resilient Crop Genomics]",
    bio: "Placeholder bio for an invited plenary speaker specializing in plant functional genomics, climate-resilient crop bioengineering, and molecular breeding techniques.",
    presentationTitle: "[Plenary: Developing Salinity and Drought Tolerant Crops Through Molecular Interventions]",
    sessionType: "Plenary",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "speaker-2",
    name: "Dr. [Distinguished Speaker 2 — TBA]",
    role: "Senior Scientist & Director of Research",
    institution: "[National Institute of Biotechnology / Partner Institute]",
    country: "[Bangladesh]",
    researchArea: "[Microbial Enzymes & Industrial Bioprocesses]",
    bio: "Placeholder bio for an expert biochemist and bioprocess engineer focused on thermostable industrial enzymes and green biomanufacturing scale-up.",
    presentationTitle: "[Invited: Industrial Bioprospecting from Native Extremophilic Microorganisms]",
    sessionType: "Invited",
    avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "speaker-3",
    name: "Prof. [Distinguished Speaker 3 — TBA]",
    role: "Head of Department & Professor of Bioinformatics",
    institution: "[Global Genomics Centre]",
    country: "[United Kingdom / International]",
    researchArea: "[Deep Learning for Protein Structure Prediction]",
    bio: "Placeholder bio for a pioneer in computational structural biology, multi-omics data integration, and algorithmic drug discovery pipelines.",
    presentationTitle: "[Invited: Next-Generation Computational Pipelines in Personalized Biomedicine]",
    sessionType: "Invited",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "speaker-4",
    name: "Dr. [Distinguished Speaker 4 — TBA]",
    role: "Associate Professor of Pharmaceutical Sciences",
    institution: "[Biomedical Research Center]",
    country: "[Singapore / International]",
    researchArea: "[Nano-formulations & Biotherapeutic Delivery]",
    bio: "Placeholder bio for a biopharmaceutical scientist researching targeted lipid nanoparticles for mRNA vaccine and CRISPR-Cas9 in vivo delivery.",
    presentationTitle: "[Invited: Targeted Nanocarriers for Nucleic Acid Therapeutics]",
    sessionType: "Invited",
    avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "speaker-5",
    name: "Prof. [Distinguished Speaker 5 — TBA]",
    role: "Senior Professor of Environmental Sciences",
    institution: "[University of Chittagong]",
    country: "[Bangladesh]",
    researchArea: "[Coastal & Marine Bioremediation]",
    bio: "Placeholder bio for an academic researcher studying microbial degradation of persistent pollutants in the Bay of Bengal coastal ecosystem.",
    presentationTitle: "[Invited: Marine Microbial Communities for Plastic and Hydrocarbon Bioremediation]",
    sessionType: "Invited",
    avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "speaker-6",
    name: "Dr. [Distinguished Speaker 6 — TBA]",
    role: "Principal Investigator in Synthetic Biology",
    institution: "[Institute of Molecular Systems]",
    country: "[Australia / International]",
    researchArea: "[Engineered Metabolic Pathways & Biosensors]",
    bio: "Placeholder bio for an expert in synthetic genetic circuits, cell-free diagnostic biosensors, and metabolic engineering for fine biochemical synthesis.",
    presentationTitle: "[Invited: Programmable Cell-Free Biosensors for Rapid Field Diagnostics]",
    sessionType: "Invited",
    avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80",
  },
];

export const AGENDA_DAYS = [
  { dayNumber: 1, label: "Day 01", dateLabel: "Day 1 — Inauguration & Keynotes" },
  { dayNumber: 2, label: "Day 02", dateLabel: "Day 2 — Technical Sessions & Posters" },
  { dayNumber: 3, label: "Day 03", dateLabel: "Day 3 — Symposiums & Concluding Ceremony" },
];

export const AGENDA_ITEMS: AgendaItem[] = [
  // Day 1
  {
    id: "ag-101",
    day: 1,
    time: "08:30 AM – 09:45 AM",
    title: "Registration & Conference Kit Collection",
    type: "Registration" as any,
    speaker: "Conference Secretariat Desk",
    venue: "Main Foyer, Biological Sciences Faculty",
    description: "Delegate credential pickup, conference bag distribution, and welcome refreshment.",
  },
  {
    id: "ag-102",
    day: 1,
    time: "10:00 AM – 11:30 AM",
    title: "Grand Inaugural Ceremony & Welcome Addresses",
    type: "Ceremony",
    speaker: "Chief Guest, Vice-Chancellor, & Organizing Chair",
    venue: "Faculty Auditorium",
    description: "Official opening addresses by university leadership, academic heads, and conference committee chairs.",
  },
  {
    id: "ag-103",
    day: 1,
    time: "11:45 AM – 01:00 PM",
    title: "Opening Keynote Address: Next-Gen Biotechnology Frontiers",
    type: "Keynote",
    speaker: "Dr. [Keynote Speaker Name — TBA]",
    venue: "Faculty Auditorium",
    description: "Foundational keynote exploring breakthroughs in gene editing, global food systems, and translational medicine.",
  },
  {
    id: "ag-104",
    day: 1,
    time: "01:00 PM – 02:00 PM",
    title: "Networking Lunch & Exhibition Preview",
    type: "Networking",
    speaker: "All Registered Delegates & Guests",
    venue: "Central Dining Hall & Poster Exhibition Hall",
    description: "Delegates meet with institutional exhibitors, industry partners, and peer research groups.",
  },
  {
    id: "ag-105",
    day: 1,
    time: "02:15 PM – 04:00 PM",
    title: "Oral Session I: Medical & Pharmaceutical Biotechnology",
    type: "Oral Presentation",
    speaker: "Contributed Papers (6 Selected Presentations)",
    venue: "Hall A (Biological Sciences)",
    description: "Peer-reviewed oral presentations covering oncology targets, vaccines, and molecular therapeutics.",
  },
  {
    id: "ag-106",
    day: 1,
    time: "04:15 PM – 05:30 PM",
    title: "Poster Session I & Tea Reception",
    type: "Poster",
    speaker: "Poster Presenters (Posters P-01 to P-40)",
    venue: "Exhibition Hall Foyer",
    description: "Interactive author presentations and evaluations by scientific jury panel.",
  },

  // Day 2
  {
    id: "ag-201",
    day: 2,
    time: "09:00 AM – 10:15 AM",
    title: "Plenary Lecture II: Agricultural & Plant Biotechnology",
    type: "Keynote",
    speaker: "Prof. [Distinguished Speaker 1 — TBA]",
    venue: "Faculty Auditorium",
    description: "Strategies for sustaining agricultural yield under shifting climate regimes using CRISPR interventions.",
  },
  {
    id: "ag-202",
    day: 2,
    time: "10:30 AM – 12:30 PM",
    title: "Oral Session II: Bioinformatics & Computational Genomics",
    type: "Oral Presentation",
    speaker: "Contributed Papers (8 Selected Presentations)",
    venue: "Hall B (Seminar Complex)",
    description: "Computational models, genomic sequencing workflows, and machine learning in biology.",
  },
  {
    id: "ag-203",
    day: 2,
    time: "01:30 PM – 03:00 PM",
    title: "Hands-on Workshop: Molecular Docking & Sequence Analysis",
    type: "Workshop",
    speaker: "Lead Workshop Facilitator [To Be Announced]",
    venue: "Bioinformatics Computing Lab, GEB",
    description: "Practical tutorial on open-source molecular visualization tools and genome alignment pipelines.",
  },
  {
    id: "ag-204",
    day: 2,
    time: "03:15 PM – 05:00 PM",
    title: "Oral Session III: Microbial, Environmental & Food Biotech",
    type: "Oral Presentation",
    speaker: "Contributed Papers (7 Selected Presentations)",
    venue: "Hall A (Biological Sciences)",
    description: "Bioremediation, food biotechnology, fermentation breakthroughs, and waste-to-energy pathways.",
  },

  // Day 3
  {
    id: "ag-301",
    day: 3,
    time: "09:30 AM – 11:00 AM",
    title: "Young Emerging Biotechnologists Spotlight & Career Forum",
    type: "Oral Presentation",
    speaker: "Finalist Young Investigators & Industry Panel",
    venue: "Faculty Auditorium",
    description: "Highlighting trailblazing research by student scholars and graduate researchers, followed by an industry career panel.",
  },
  {
    id: "ag-302",
    day: 3,
    time: "11:15 AM – 12:45 PM",
    title: "Roundtable: Fostering International Collaborations in South Asia",
    type: "Workshop",
    speaker: "Panel of International & Regional Deans",
    venue: "Hall A (Biological Sciences)",
    description: "Institutional partnerships, cross-border research funding, and biotechnology policy roadmap.",
  },
  {
    id: "ag-303",
    day: 3,
    time: "02:30 PM – 04:30 PM",
    title: "Valedictory Ceremony, Award Giving & Closing Banquet",
    type: "Ceremony",
    speaker: "Organizing Committee & Honorable Guests",
    venue: "Faculty Auditorium",
    description: "Best Oral & Best Poster Award distributions, conference communique adoption, and vote of thanks.",
  },
];

export const ANNOUNCEMENTS: Announcement[] = [
  {
    id: "ann-1",
    date: "[DEMO Notice — October 2026]",
    category: "Call for Papers",
    title: "Call for Abstracts Officially Opened for 2nd IBC 2026",
    description: "The Department of Genetic Engineering & Biotechnology invites faculty, scientists, and students to submit abstracts for Oral and Poster sessions.",
    fullContent: "Authors can submit structured 250-word abstracts across 12 multidisciplinary biotechnology themes. Each accepted abstract will be published in the conference proceedings with an assigned reference number.",
  },
  {
    id: "ann-2",
    date: "[DEMO Notice — October 2026]",
    category: "Registration",
    title: "Early Registration Tiers & Participant Categories Announced",
    description: "Special discounted registration rates will be available for enrolled undergraduate and postgraduate students upon verification.",
    fullContent: "Registration includes conference kit, lunch/refreshments, entry to all technical sessions, abstract proceedings volume, and official certificate of participation.",
  },
  {
    id: "ann-3",
    date: "[DEMO Notice — September 2026]",
    category: "Program",
    title: "Young Emerging Biotechnologists Spotlight Session Introduced",
    description: "A special competitive forum dedicated to showcasing breakthrough postgraduate and doctoral dissertations has been added to the Day 3 program.",
    fullContent: "Selected student presenters will be eligible for the Best Young Researcher Award, evaluated by an independent jury of international biotechnology scholars.",
  },
  {
    id: "ann-4",
    date: "[DEMO Notice — September 2026]",
    category: "General",
    title: "Conference Proceedings Indexed Publication Partnership",
    description: "Selected high-impact oral papers will be recommended for peer-reviewed journal special issue consideration.",
    fullContent: "The editorial board is liaising with indexed scientific journals to curate high-quality full papers expanding on the presented conference proceedings.",
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Plenary Keynote Session (NBC 2023 Archive)",
    category: "Conference",
    caption: "Distinguished scholars addressing the audience during the previous biotechnology conference session.",
    imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "gal-2",
    title: "Genetics & Molecular Laboratory Research",
    category: "Campus",
    caption: "GEB departmental laboratory facility at the University of Chittagong with advanced molecular research equipment.",
    imageUrl: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "gal-3",
    title: "Scientific Poster Evaluation & Discussion",
    category: "Presentations",
    caption: "Researchers presenting experimental findings to the scientific panel during the interactive poster session.",
    imageUrl: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "gal-4",
    title: "University of Chittagong Campus Scenery",
    category: "Campus",
    caption: "The verdant landscape and academic architecture of the University of Chittagong, Bangladesh.",
    imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "gal-5",
    title: "Interactive Scientific Delegation & Audience",
    category: "Participants",
    caption: "Conference delegates, professors, and student researchers engaged during the technical symposium.",
    imageUrl: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "gal-6",
    title: "Microbiological & DNA Gel Electrophoresis Analysis",
    category: "Conference",
    caption: "Researchers analyzing DNA band patterns and bio-molecular assays in the specialized biotechnology laboratory.",
    imageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "gal-7",
    title: "Oral Research Presentation & Defense",
    category: "Presentations",
    caption: "Scholar delivering a presentation on molecular therapeutic targets in the faculty auditorium.",
    imageUrl: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "gal-8",
    title: "Young Researchers & Student Investigators",
    category: "Participants",
    caption: "Emerging biotechnologists exchanging research ideas during the collaborative conference networking break.",
    imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
  },
];

export const REGISTRATION_CATEGORIES: RegistrationCategory[] = [
  {
    id: "cat-student",
    name: "Student (Undergraduate / Postgraduate)",
    feeDemo: "BDT [Fee TBA — e.g. 800-1000]",
    description: "For active students enrolled in recognized universities or research colleges.",
    benefits: [
      "Access to all 3-day technical & plenary sessions",
      "Official conference delegate kit & abstract book",
      "Lunch, refreshments & high tea on all conference days",
      "Certificate of Participation / Attendance",
      "Eligibility for Young Investigator awards",
    ],
  },
  {
    id: "cat-researcher",
    name: "Faculty Member / Research Scholar",
    feeDemo: "BDT [Fee TBA — e.g. 1500-2000]",
    description: "For academic faculty, postdoctoral fellows, and institutional research scientists.",
    benefits: [
      "Full conference accreditation & delegate privileges",
      "Oral/poster presentation scheduling & certificate",
      "Official printed conference proceedings book",
      "Lunch, gala tea & networking reception access",
      "Certificate of Paper Presentation",
    ],
  },
  {
    id: "cat-industry",
    name: "Industry Professional / Corporate Delegate",
    feeDemo: "BDT [Fee TBA — e.g. 3000-4000]",
    description: "For professionals from pharmaceutical, diagnostic, agricultural, and biotech enterprises.",
    benefits: [
      "Full access to scientific sessions & industry exhibition",
      "B2B networking sessions with academic researchers",
      "Exclusive conference kit & documentation",
      "VIP dining access during all conference days",
      "Corporate delegate certificate",
    ],
  },
  {
    id: "cat-international",
    name: "International Delegate (Overseas)",
    feeDemo: "USD [Fee TBA — e.g. $100-150]",
    description: "For overseas professors, researchers, and international delegate participants.",
    benefits: [
      "Full international accreditation & conference kit",
      "Official visa recommendation letter support",
      "Oral/poster session presentation slot & certificate",
      "All meals, tea receptions, and conference banquets",
      "Campus & local heritage guided excursion option",
    ],
  },
];

export const DEMO_RESULTS: DemoSubmissionResult[] = [
  {
    submissionId: "IBC26-DEMO-00123",
    email: "researcher@example.com",
    title: "CRISPR-Cas9 Mediated Targeted Mutagenesis in Submergence-Tolerant Rice Cultivars",
    authors: "Dr. A. Rahman, S. Begum, T. Ahmed",
    category: "Agricultural Biotechnology",
    presentationType: "Oral Presentation",
    status: "Accepted — Oral",
    reviewComments: "The peer-review committee commend the rigorous experimental design and significance for climate-resilient agriculture. Accepted for an Oral Presentation in Session II.",
    assignedSession: "Day 02 · Hall A · 02:15 PM",
    dateChecked: "Reviewed October 2026",
  },
  {
    submissionId: "IBC26-DEMO-00456",
    email: "biotech.student@example.com",
    title: "Metagenomic Characterization of Novel Cellulolytic Bacterial Communities from Sunderbans Mangroves",
    authors: "F. Hossain, M. Islam, K. Das",
    category: "Microbial Biotechnology",
    presentationType: "Poster Presentation",
    status: "Accepted — Poster",
    reviewComments: "Well-structured scientific abstract with novel enzyme activity assays. Accepted for Poster Presentation. Please format according to standard 36x48 inch poster dimensions.",
    assignedSession: "Day 01 · Poster Foyer · Board P-18",
    dateChecked: "Reviewed October 2026",
  },
  {
    submissionId: "IBC26-DEMO-00789",
    email: "pharma.lab@example.com",
    title: "Molecular Docking and In Vitro Evaluation of Bioactive Marine Compounds Against Multidrug Resistant Acinetobacter baumannii",
    authors: "N. Sultana, R. K. Chowdhury",
    category: "Medical & Pharmaceutical Biotechnology",
    presentationType: "Oral Presentation",
    status: "Under Review",
    reviewComments: "Your abstract is currently with two independent expert peer-reviewers. Formal decision notification will be transmitted to the corresponding author email.",
    dateChecked: "Evaluation in progress",
  },
  {
    submissionId: "IBC26-DEMO-00999",
    email: "scholar@example.com",
    title: "In Silico Profiling of Plant-Derived Secondary Metabolites in Neuroprotective Signaling Pathways",
    authors: "H. Kabir, Z. Alam",
    category: "Computational Biology",
    presentationType: "Poster Presentation",
    status: "Revision Required",
    reviewComments: "Reviewers suggest clarifying the binding affinity metrics and statistical controls in the methodology section. Please resubmit revised abstract within 5 days.",
    dateChecked: "Minor revisions requested",
  }
];

export const SUBMISSION_GUIDELINES = {
  abstractLength: "Maximum 250 words (structured body)",
  fontRecommendation: "Times New Roman or Calibri, 12 pt",
  structure: "Background / Objective, Methodology, Results / Findings, Conclusion",
  categories: ["Oral Presentation", "Poster Presentation"],
  rules: [
    "Abstract submission must be performed by the corresponding / presenting author. The presenting author's name must be marked in bold.",
    "No submission fee is required for submitting an abstract.",
    "Category and research area must be selected clearly during submission.",
    "Abstract body must not exceed 250 words excluding title, author names, and affiliations.",
    "Each author of accepted abstracts must complete individual delegate registration prior to final presentation scheduling.",
    "All submissions must report original, previously unpublished scientific research findings."
  ]
};
