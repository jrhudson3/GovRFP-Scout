// =====================================================
// GovRFP Scout — Data & Application Logic
// =====================================================

// ——— STATE PORTALS DATA ———
const STATE_PORTALS = [
    { state: 'Arizona', abbr: 'AZ', flag: '🌵', name: 'AZ ProcureAZ', url: 'https://procureaz.az.gov/bso/view/login/login.xhtml' },
    { state: 'Alabama', abbr: 'AL', flag: '🌿', name: 'AL STAARS Procurement', url: 'https://vendor.staars.alabama.gov/' },
    { state: 'Connecticut', abbr: 'CT', flag: '⚓', name: 'CT BizNet eProcurement', url: 'https://biznet.ct.gov/SCP_Main/default.asp' },
    { state: 'Georgia', abbr: 'GA', flag: '🍑', name: 'GA Team Georgia Market', url: 'https://ssl.doas.state.ga.us/PRSapp/PR_MainMenu.do' },
    { state: 'Indiana', abbr: 'IN', flag: '🌽', name: 'IN IPAS Procurement', url: 'https://www.in.gov/idoa/procurement/' },
    { state: 'Maryland', abbr: 'MD', flag: '🦀', name: 'MD eMaryland Market', url: 'https://emaryland.buyspeed.com/bso/' },
    { state: 'Massachusetts', abbr: 'MA', flag: '🦞', name: 'MA COMMBUYS', url: 'https://www.commbuys.com/' },
    { state: 'New Jersey', abbr: 'NJ', flag: '🌊', name: 'NJ NJSTART', url: 'https://www.njstart.gov/bso/' },
    { state: 'North Carolina', abbr: 'NC', flag: '🌲', name: 'NC IPS eProcurement', url: 'https://vendor.ncgov.com/vendor/login' },
    { state: 'North Dakota', abbr: 'ND', flag: '🌾', name: 'ND SFN Bids', url: 'https://www.nd.gov/omb/agency/procurement/solicit-rfp' },
    { state: 'Ohio', abbr: 'OH', flag: '🌰', name: 'OH Ohio Buys', url: 'https://ohiobuys.ohio.gov/page.aspx/en/rfq/request_browse_public' },
    { state: 'Pennsylvania', abbr: 'PA', flag: '🔔', name: 'PA eMarketplace', url: 'https://www.emarketplace.state.pa.us/Solicitations.aspx' },
    { state: 'South Carolina', abbr: 'SC', flag: '🌴', name: 'SC Procurement Services', url: 'https://admin.sc.gov/procurement/solicit' },
    { state: 'Texas', abbr: 'TX', flag: '⭐', name: 'TX ESBD', url: 'https://www.txsmartbuy.com/esbd' },
];

// ——— RFP DATA ———
const RFP_DATA = [
    // ──── ARIZONA ────
    {
        id: 'az-001',
        state: 'Arizona', abbr: 'AZ',
        title: 'Behavioral Health Services for Children and Families',
        agency: 'AZ Dept. of Health Services / AHCCCS',
        category: 'behavioral-health',
        tags: ['children-family', 'behavioral-health'],
        status: 'recurring',
        deadline: 'Rolling / Annual',
        description: 'Arizona AHCCCS issues ongoing solicitations for licensed behavioral health providers to serve children and families enrolled in the RBHA (Regional Behavioral Health Authority) program, including intensive outpatient, residential, and community-based services.',
        portalUrl: 'https://procureaz.az.gov/bso/view/login/login.xhtml',
        agencyUrl: 'https://azahcccs.gov/PlansProviders/RatesAndBilling/RBHA.html',
        keywords: ['behavioral health', 'children', 'family', 'AHCCCS', 'outpatient'],
    },
    {
        id: 'az-002',
        state: 'Arizona', abbr: 'AZ',
        title: 'DDD Community Behavioral Support & Habilitation Services',
        agency: 'AZ Division of Developmental Disabilities (DDD)',
        category: 'idd',
        tags: ['idd', 'autism'],
        status: 'recurring',
        deadline: 'Rolling',
        description: 'ADDD continuously seeks contracted providers for supported living, day programs, and habilitation services for members with autism spectrum disorder, intellectual disabilities, and other developmental disabilities across all Arizona counties.',
        portalUrl: 'https://des.az.gov/services/developmental-disabilities',
        agencyUrl: 'https://des.az.gov/services/developmental-disabilities',
        keywords: ['IDD', 'autism', 'developmental disabilities', 'habilitation', 'DDD'],
    },
    {
        id: 'az-003',
        state: 'Arizona', abbr: 'AZ',
        title: 'Child Welfare Case Management Services RFP',
        agency: 'AZ Department of Child Safety (DCS)',
        category: 'children-family',
        tags: ['children-family', 'social-services'],
        status: 'active',
        deadline: 'Check AZ ProcureAZ portal',
        description: 'The Arizona DCS issues RFPs for foster care case management, family preservation, and kinship support services. Providers must be licensed under DCS standards and serve Maricopa and surrounding counties.',
        portalUrl: 'https://procureaz.az.gov/bso/view/login/login.xhtml',
        agencyUrl: 'https://dcs.az.gov/',
        keywords: ['foster care', 'child welfare', 'family preservation', 'DCS', 'case management'],
    },

    // ──── ALABAMA ────
    {
        id: 'al-001',
        state: 'Alabama', abbr: 'AL',
        title: 'Early Intervention & Autism Spectrum Disorder Services',
        agency: 'AL Dept. of Mental Health / Autism Division',
        category: 'autism',
        tags: ['autism', 'children-family'],
        status: 'recurring',
        deadline: 'Annual – Check STAARS',
        description: 'Alabama DMH solicits contracted providers for early intensive behavioral intervention (EIBI/ABA) for children ages 0–8 on the autism spectrum. Services include skill-building, parent training, and community inclusion.',
        portalUrl: 'https://vendor.staars.alabama.gov/',
        agencyUrl: 'https://mh.alabama.gov/autism-services/',
        keywords: ['autism', 'ABA', 'early intervention', 'children', 'behavioral'],
    },
    {
        id: 'al-002',
        state: 'Alabama', abbr: 'AL',
        title: 'IDD Residential & Day Habilitation Programs',
        agency: 'AL Department of Mental Health – IDD Division',
        category: 'idd',
        tags: ['idd', 'social-services'],
        status: 'recurring',
        deadline: 'Rolling – vendor enrollment',
        description: 'ADMH-IDD Division enrolls qualified providers for residential waiver services (SAIL), day habilitation, supported employment, and community-based habilitation for individuals with intellectual and developmental disabilities.',
        portalUrl: 'https://vendor.staars.alabama.gov/',
        agencyUrl: 'https://mh.alabama.gov/IDD/',
        keywords: ['IDD', 'residential', 'day habilitation', 'SAIL waiver', 'supported employment'],
    },
    {
        id: 'al-003',
        state: 'Alabama', abbr: 'AL',
        title: 'Title IV-E Child Welfare Training Academy',
        agency: 'AL Department of Human Resources (DHR)',
        category: 'children-family',
        tags: ['children-family', 'social-services'],
        status: 'upcoming',
        deadline: 'Check AL STAARS',
        description: 'Alabama DHR issues periodic RFPs for professional training services for foster care and child welfare workers, including trauma-informed care curricula, safety assessments, and family-centered practice training.',
        portalUrl: 'https://vendor.staars.alabama.gov/',
        agencyUrl: 'https://dhr.alabama.gov/',
        keywords: ['child welfare', 'foster care', 'training', 'Title IV-E', 'family'],
    },

    // ──── CONNECTICUT ────
    {
        id: 'ct-001',
        state: 'Connecticut', abbr: 'CT',
        title: 'CT DCF – Family Support & In-Home Services',
        agency: 'CT Dept. of Children and Families (DCF)',
        category: 'children-family',
        tags: ['children-family', 'social-services'],
        status: 'active',
        deadline: 'See CT BizNet RFP #2024-DCF-088',
        description: 'Connecticut DCF solicits providers for family support programs including family resource centers, voluntary family support services, respite care, and parent mentoring programs statewide.',
        portalUrl: 'https://biznet.ct.gov/SCP_Main/default.asp',
        agencyUrl: 'https://portal.ct.gov/dcf',
        keywords: ['family support', 'in-home services', 'respite care', 'DCF', 'Connecticut'],
    },
    {
        id: 'ct-002',
        state: 'Connecticut', abbr: 'CT',
        title: 'Home and Community-Based Autism & IDD Waiver Services',
        agency: 'CT Department of Developmental Services (DDS)',
        category: 'idd',
        tags: ['idd', 'autism'],
        status: 'recurring',
        deadline: 'Rolling provider enrollment',
        description: 'CT DDS manages Medicaid HCBS waiver programming for individuals with intellectual disabilities and autism. Provider applications are accepted on a rolling basis for residential support, day supports, and employment services.',
        portalUrl: 'https://biznet.ct.gov/SCP_Main/default.asp',
        agencyUrl: 'https://portal.ct.gov/dds',
        keywords: ['HCBS waiver', 'autism', 'IDD', 'developmental services', 'Medicaid'],
    },
    {
        id: 'ct-003',
        state: 'Connecticut', abbr: 'CT',
        title: 'Behavioral Health Managed Care – Children\'s Behavioral Health',
        agency: 'CT Department of Social Services (DSS)',
        category: 'behavioral-health',
        tags: ['behavioral-health', 'children-family'],
        status: 'active',
        deadline: 'See HUSKY Health portal',
        description: 'CT DSS periodically issues RFPs for the HUSKY Health behavioral health managed care network, seeking specialty providers for children and youth with serious behavioral health needs.',
        portalUrl: 'https://biznet.ct.gov/SCP_Main/default.asp',
        agencyUrl: 'https://portal.ct.gov/dss/health-and-home-care/husky-health',
        keywords: ['behavioral health', 'HUSKY', 'managed care', 'children', 'Medicaid'],
    },

    // ──── GEORGIA ────
    {
        id: 'ga-001',
        state: 'Georgia', abbr: 'GA',
        title: 'NOW/COMP Waiver Services – Autism & IDD Providers',
        agency: 'GA Department of Behavioral Health and Developmental Disabilities (DBHDD)',
        category: 'idd',
        tags: ['idd', 'autism'],
        status: 'recurring',
        deadline: 'Rolling enrollment',
        description: 'Georgia DBHDD coordinates the NOW and COMP Medicaid waivers for individuals with IDD and autism. Providers may enroll to offer community residential services, day supports, supported employment, and behavior supports.',
        portalUrl: 'https://ssl.doas.state.ga.us/PRSapp/PR_MainMenu.do',
        agencyUrl: 'https://dbhdd.georgia.gov/developmental-disabilities',
        keywords: ['NOW waiver', 'COMP waiver', 'IDD', 'autism', 'DBHDD', 'Georgia'],
    },
    {
        id: 'ga-002',
        state: 'Georgia', abbr: 'GA',
        title: 'Child Welfare Continuum of Care – Family Foster Care RFP',
        agency: 'GA Division of Family and Children Services (DFCS)',
        category: 'children-family',
        tags: ['children-family', 'social-services'],
        status: 'active',
        deadline: 'Check Team Georgia Marketplace',
        description: 'Georgia DFCS solicits qualified providers to operate therapeutic foster care homes, family reunification services, independent living programs for youth aging out, and kinship navigator programs.',
        portalUrl: 'https://ssl.doas.state.ga.us/PRSapp/PR_MainMenu.do',
        agencyUrl: 'https://dfcs.georgia.gov/',
        keywords: ['foster care', 'kinship', 'child welfare', 'DFCS', 'therapeutic'],
    },
    {
        id: 'ga-003',
        state: 'Georgia', abbr: 'GA',
        title: 'Community Behavioral Health Services for Children',
        agency: 'GA DBHDD – Child & Adolescent Services',
        category: 'behavioral-health',
        tags: ['behavioral-health', 'children-family'],
        status: 'active',
        deadline: 'Check Team Georgia Marketplace',
        description: 'DBHDD issues RFPs for children\'s behavioral health providers including intensive family intervention, multi-systemic therapy (MST), mobile crisis services, and psychiatric residential treatment facilities (PRTFs).',
        portalUrl: 'https://ssl.doas.state.ga.us/PRSapp/PR_MainMenu.do',
        agencyUrl: 'https://dbhdd.georgia.gov/behavioral-health',
        keywords: ['behavioral health', 'children', 'MST', 'crisis', 'PRTF', 'DBHDD'],
    },

    // ──── INDIANA ────
    {
        id: 'in-001',
        state: 'Indiana', abbr: 'IN',
        title: 'First Steps Early Intervention Program Providers',
        agency: 'IN Family and Social Services Administration (FSSA)',
        category: 'children-family',
        tags: ['children-family', 'autism', 'idd'],
        status: 'recurring',
        deadline: 'Rolling enrollment',
        description: 'Indiana First Steps seeks qualified early intervention service providers (speech, OT, PT, behavior analysts) to serve children birth to age 3 with developmental delays and disabilities, including autism spectrum disorder.',
        portalUrl: 'https://www.in.gov/idoa/procurement/',
        agencyUrl: 'https://www.in.gov/fssa/first-steps/',
        keywords: ['early intervention', 'First Steps', 'autism', 'children', 'ABA', 'developmental delay'],
    },
    {
        id: 'in-002',
        state: 'Indiana', abbr: 'IN',
        title: 'BDDS Medicaid Waiver – Residential & Day Services',
        agency: 'IN Bureau of Developmental Disability Services (BDDS)',
        category: 'idd',
        tags: ['idd'],
        status: 'recurring',
        deadline: 'Rolling provider certification',
        description: 'FSSA/BDDS certifies providers for the Indiana Medicaid Home and Community-Based Services waivers (FSW, CIH, FCP) serving individuals with intellectual and developmental disabilities. Services include group homes, supervised group living, and day services.',
        portalUrl: 'https://www.in.gov/idoa/procurement/',
        agencyUrl: 'https://www.in.gov/fssa/bdds/',
        keywords: ['BDDS', 'IDD', 'Medicaid waiver', 'residential', 'group home', 'day services'],
    },
    {
        id: 'in-003',
        state: 'Indiana', abbr: 'IN',
        title: 'Child Protective Services – Family Preservation RFP',
        agency: 'IN Department of Child Services (DCS)',
        category: 'children-family',
        tags: ['children-family', 'social-services'],
        status: 'active',
        deadline: 'Check IN IPAS portal',
        description: 'Indiana DCS solicits family preservation and reunification service providers offering intensive in-home counseling, parenting education, substance abuse support, and case management to prevent out-of-home placements.',
        portalUrl: 'https://www.in.gov/idoa/procurement/',
        agencyUrl: 'https://www.in.gov/dcs/',
        keywords: ['family preservation', 'child protective services', 'DCS', 'in-home', 'Indiana'],
    },

    // ──── MARYLAND ────
    {
        id: 'md-001',
        state: 'Maryland', abbr: 'MD',
        title: 'DDA Community Services – Autism Waiver Providers',
        agency: 'MD Developmental Disabilities Administration (DDA)',
        category: 'autism',
        tags: ['autism', 'idd'],
        status: 'recurring',
        deadline: 'Rolling DDA enrollment',
        description: 'Maryland DDA seeks providers for the Autism Waiver and Community Services programs. Services include intensive individual support services (IISS), therapeutic integration, family support, day habilitation, and residential support for individuals with autism.',
        portalUrl: 'https://emaryland.buyspeed.com/bso/',
        agencyUrl: 'https://dda.health.maryland.gov/Pages/Autism.aspx',
        keywords: ['autism waiver', 'DDA', 'IISS', 'habilitation', 'Maryland', 'residential'],
    },
    {
        id: 'md-002',
        state: 'Maryland', abbr: 'MD',
        title: 'DHR Child Welfare – Family Intervention & Support Services',
        agency: 'MD Department of Human Services (DHS)',
        category: 'children-family',
        tags: ['children-family', 'social-services'],
        status: 'active',
        deadline: 'Check eMaryland Marketplace',
        description: 'Maryland DHS issues solicitations for family support centers, respite care, out-of-school-time programs, and community supports for families involved with the child welfare system, including kinship placement support.',
        portalUrl: 'https://emaryland.buyspeed.com/bso/',
        agencyUrl: 'https://dhs.maryland.gov/',
        keywords: ['child welfare', 'family support', 'kinship', 'DHS', 'respite'],
    },
    {
        id: 'md-003',
        state: 'Maryland', abbr: 'MD',
        title: 'Behavioral Health Administrative Services Organization',
        agency: 'MD Behavioral Health Administration (BHA)',
        category: 'behavioral-health',
        tags: ['behavioral-health', 'children-family'],
        status: 'active',
        deadline: 'See eMaryland Marketplace',
        description: 'Maryland BHA issues periodic large-scale RFPs for behavioral health ASOs managing Medicaid mental health and substance use disorder benefits, including children\'s mobile crisis teams and school-based mental health services.',
        portalUrl: 'https://emaryland.buyspeed.com/bso/',
        agencyUrl: 'https://bha.health.maryland.gov/',
        keywords: ['behavioral health', 'ASO', 'Medicaid', 'children', 'crisis', 'Maryland'],
    },

    // ──── MASSACHUSETTS ────
    {
        id: 'ma-001',
        state: 'Massachusetts', abbr: 'MA',
        title: 'DDS – Adult Autism Support & Community Living',
        agency: 'MA Department of Developmental Services (DDS)',
        category: 'autism',
        tags: ['autism', 'idd'],
        status: 'active',
        deadline: 'Check COMMBUYS',
        description: 'Massachusetts DDS solicits vendors for residential services, day habilitation, and supported employment targeting adults with autism and IDD. DDS uses a competitive procurement model under Chapter 257 vendor contracts.',
        portalUrl: 'https://www.commbuys.com/',
        agencyUrl: 'https://www.mass.gov/orgs/department-of-developmental-services',
        keywords: ['autism', 'IDD', 'DDS', 'residential', 'Chapter 257', 'Massachusetts'],
    },
    {
        id: 'ma-002',
        state: 'Massachusetts', abbr: 'MA',
        title: 'DCF – Foster Care & Residential Treatment Services',
        agency: 'MA Department of Children and Families (DCF)',
        category: 'children-family',
        tags: ['children-family', 'social-services'],
        status: 'active',
        deadline: 'COMMBUYS – multiple open',
        description: 'Massachusetts DCF issues procurement for foster care, congregate care, family support and stabilization services, and therapeutic mentor programs. Providers must be licensed by DCF or EEC as applicable.',
        portalUrl: 'https://www.commbuys.com/',
        agencyUrl: 'https://www.mass.gov/dcf',
        keywords: ['foster care', 'DCF', 'residential', 'family support', 'therapeutic mentor'],
    },
    {
        id: 'ma-003',
        state: 'Massachusetts', abbr: 'MA',
        title: 'EOEA – Home Care & Elder Services Network',
        agency: 'MA Executive Office of Elder Affairs / OLTSS',
        category: 'social-services',
        tags: ['social-services', 'idd'],
        status: 'recurring',
        deadline: 'Annual COMMBUYS cycle',
        description: 'EOEA procures home care, adult day health, caregiver support, and protective services for elders and adults with disabilities including IDD through a statewide network of Aging Services Access Points (ASAPs).',
        portalUrl: 'https://www.commbuys.com/',
        agencyUrl: 'https://www.mass.gov/orgs/executive-office-of-elder-affairs',
        keywords: ['elder services', 'home care', 'IDD', 'ASAP', 'EOEA', 'Massachusetts'],
    },

    // ──── NEW JERSEY ────
    {
        id: 'nj-001',
        state: 'New Jersey', abbr: 'NJ',
        title: 'DDD Community Care Program – IDD Residential & Day Services',
        agency: 'NJ Division of Developmental Disabilities (DDD)',
        category: 'idd',
        tags: ['idd', 'autism'],
        status: 'recurring',
        deadline: 'Rolling NJ DDD enrollment',
        description: 'New Jersey DDD enrolls qualified providers through the Community Care Program (CCP) Medicaid waiver for residential, day, family support, and supported employment services for individuals with IDD and autism.',
        portalUrl: 'https://www.njstart.gov/bso/',
        agencyUrl: 'https://www.nj.gov/humanservices/ddd/',
        keywords: ['DDD', 'IDD', 'CCP waiver', 'autism', 'residential', 'supported employment'],
    },
    {
        id: 'nj-002',
        state: 'New Jersey', abbr: 'NJ',
        title: 'DCF – Child Welfare Family Success Centers',
        agency: 'NJ Department of Children and Families (DCF)',
        category: 'children-family',
        tags: ['children-family', 'social-services'],
        status: 'active',
        deadline: 'See NJSTART portal',
        description: 'NJ DCF solicits community-based family success centers and family resource programs to provide voluntary services including parenting classes, mental health linkages, ESL, crisis support, and youth programs.',
        portalUrl: 'https://www.njstart.gov/bso/',
        agencyUrl: 'https://www.nj.gov/dcf/',
        keywords: ['family success centers', 'DCF', 'child welfare', 'community', 'New Jersey'],
    },
    {
        id: 'nj-003',
        state: 'New Jersey', abbr: 'NJ',
        title: 'CSOC – Children\'s System of Care Behavioral Health Network',
        agency: 'NJ DHS/OAS – Children\'s System of Care (CSOC)',
        category: 'behavioral-health',
        tags: ['behavioral-health', 'children-family'],
        status: 'active',
        deadline: 'See NJSTART / Perform Care',
        description: 'NJ CSOC issues RFPs for youth mental health providers including mobile response and stabilization services (MRSS), intensive in-community (IIC), family support organizations (FSOs), and youth crisis services.',
        portalUrl: 'https://www.njstart.gov/bso/',
        agencyUrl: 'https://www.nj.gov/humanservices/csoc/',
        keywords: ['CSOC', 'behavioral health', 'MRSS', 'IIC', 'children', 'crisis'],
    },

    // ──── NORTH CAROLINA ────
    {
        id: 'nc-001',
        state: 'North Carolina', abbr: 'NC',
        title: 'Innovations Waiver – IDD & Autism Services Provider RFP',
        agency: 'NC Division of Mental Health, Developmental Disabilities & Substance Use Services',
        category: 'idd',
        tags: ['idd', 'autism'],
        status: 'recurring',
        deadline: 'Rolling LME-MCO credentialing',
        description: 'NC Innovations Waiver providers serve individuals with IDD and autism through Local Management Entities/Managed Care Organizations (LME-MCOs). Services include community networking, supported living, day supports, and residential supports.',
        portalUrl: 'https://vendor.ncgov.com/vendor/login',
        agencyUrl: 'https://www.ncdhhs.gov/divisions/mhddsus',
        keywords: ['Innovations waiver', 'IDD', 'autism', 'LME-MCO', 'North Carolina'],
    },
    {
        id: 'nc-002',
        state: 'North Carolina', abbr: 'NC',
        title: 'DSS – Child Welfare & Foster Care Services Contract',
        agency: 'NC Division of Social Services (DSS)',
        category: 'children-family',
        tags: ['children-family', 'social-services'],
        status: 'active',
        deadline: 'Check NC IPS portal',
        description: 'NC DSS issues solicitations for foster care recruitment and retention, family finding services, therapeutic foster care agencies, and child placement agency licenses for counties statewide.',
        portalUrl: 'https://vendor.ncgov.com/vendor/login',
        agencyUrl: 'https://www.ncdhhs.gov/divisions/social-services',
        keywords: ['foster care', 'DSS', 'child welfare', 'therapeutic', 'North Carolina'],
    },

    // ──── NORTH DAKOTA ────
    {
        id: 'nd-001',
        state: 'North Dakota', abbr: 'ND',
        title: 'Autism Spectrum Disorder Treatment Services',
        agency: 'ND Department of Human Services – Autism Program',
        category: 'autism',
        tags: ['autism', 'children-family'],
        status: 'active',
        deadline: 'See ND OMB Solicitations',
        description: 'North Dakota DHS solicits licensed ABA and autism treatment providers to serve children and adults with ASD under the ND Medicaid Autism Benefit. Providers offer skills training, behavior analysis, and family guidance.',
        portalUrl: 'https://www.nd.gov/omb/agency/procurement/solicit-rfp',
        agencyUrl: 'https://www.hhs.nd.gov/mental-health/autism',
        keywords: ['autism', 'ABA', 'Medicaid', 'North Dakota', 'ASD', 'children'],
    },
    {
        id: 'nd-002',
        state: 'North Dakota', abbr: 'ND',
        title: 'IDD Waiver Program – Home & Community-Based Providers',
        agency: 'ND Developmental Disabilities Division (DDD)',
        category: 'idd',
        tags: ['idd'],
        status: 'recurring',
        deadline: 'Rolling ND DDD enrollment',
        description: 'ND DDD approves qualified providers for Medicaid HCBS waiver services for individuals with developmental disabilities, including residential habilitation, day habilitation, respite, and customized employment supports.',
        portalUrl: 'https://www.nd.gov/omb/agency/procurement/solicit-rfp',
        agencyUrl: 'https://www.hhs.nd.gov/disabilities/programs-services',
        keywords: ['IDD', 'HCBS waiver', 'habilitation', 'residential', 'North Dakota'],
    },
    {
        id: 'nd-003',
        state: 'North Dakota', abbr: 'ND',
        title: 'Child and Family Services – Foster Care & Prevention Services',
        agency: 'ND Children and Family Services Division',
        category: 'children-family',
        tags: ['children-family', 'social-services'],
        status: 'active',
        deadline: 'See ND OMB portal',
        description: 'ND CFSD issues RFPs for family-centered prevention programs, family support services, and foster care agencies. Services include in-home family support, independent living for youth, and placement support services.',
        portalUrl: 'https://www.nd.gov/omb/agency/procurement/solicit-rfp',
        agencyUrl: 'https://www.hhs.nd.gov/childrenFamily',
        keywords: ['foster care', 'child welfare', 'family support', 'prevention', 'North Dakota'],
    },

    // ──── OHIO ────
    {
        id: 'oh-001',
        state: 'Ohio', abbr: 'OH',
        title: 'DODD – Individual Options Waiver & SELF Waiver Providers',
        agency: 'OH Dept. of Developmental Disabilities (DODD)',
        category: 'idd',
        tags: ['idd', 'autism'],
        status: 'recurring',
        deadline: 'Rolling DODD certification',
        description: 'Ohio DODD certifies providers to deliver HCBS waiver services under the Individual Options (IO) and SELF waivers. Services include residential supports, non-medical transportation, community inclusion, and supported employment.',
        portalUrl: 'https://ohiobuys.ohio.gov/page.aspx/en/rfq/request_browse_public',
        agencyUrl: 'https://dodd.ohio.gov/',
        keywords: ['DODD', 'IDD', 'Individual Options', 'SELF waiver', 'Ohio', 'residential'],
    },
    {
        id: 'oh-002',
        state: 'Ohio', abbr: 'OH',
        title: 'Ohio Autism Scholarship Program – Provider Opportunities',
        agency: 'OH Dept. of Education / ODE',
        category: 'autism',
        tags: ['autism', 'children-family'],
        status: 'recurring',
        deadline: 'Annual ODE cycle',
        description: 'Ohio ODE issues provider agreements for the Autism Scholarship Program (ASP) and Jon Peterson Special Needs (JPSN) Scholarship, allowing eligible schools and therapy centers to receive funding for autism-related educational and therapeutic services.',
        portalUrl: 'https://ohiobuys.ohio.gov/page.aspx/en/rfq/request_browse_public',
        agencyUrl: 'https://education.ohio.gov/Topics/Other-Resources/Scholarships/Autism-Scholarship',
        keywords: ['autism scholarship', 'ODE', 'education', 'Ohio', 'ASP'],
    },
    {
        id: 'oh-003',
        state: 'Ohio', abbr: 'OH',
        title: 'ODJFS – Child Care & Family Services RFP',
        agency: 'OH Dept. of Job and Family Services (ODJFS)',
        category: 'children-family',
        tags: ['children-family', 'social-services'],
        status: 'active',
        deadline: 'Check Ohio Buys portal',
        description: 'ODJFS issues solicitations for child care referral networks, family and children services agencies, independent living programs for youth aging out of care, and TANF program service providers.',
        portalUrl: 'https://ohiobuys.ohio.gov/page.aspx/en/rfq/request_browse_public',
        agencyUrl: 'https://jfs.ohio.gov/',
        keywords: ['child care', 'ODJFS', 'family services', 'TANF', 'Ohio', 'independent living'],
    },

    // ──── PENNSYLVANIA ────
    {
        id: 'pa-001',
        state: 'Pennsylvania', abbr: 'PA',
        title: 'ODP – Autism Waiver & Community Participation Supports',
        agency: 'PA Office of Developmental Programs (ODP)',
        category: 'autism',
        tags: ['autism', 'idd'],
        status: 'active',
        deadline: 'See PA eMarketplace',
        description: 'Pennsylvania ODP operates the Autism Spectrum Disorder (ASD) Waiver and Adult Autism Waiver, seeking enrolled providers to deliver behavioral support, community participation, residential habilitation, and job coaching for Pennsylvanians with autism.',
        portalUrl: 'https://www.emarketplace.state.pa.us/Solicitations.aspx',
        agencyUrl: 'https://www.dhs.pa.gov/Services/Disabilities-Special-Needs/Pages/Autism.aspx',
        keywords: ['autism waiver', 'ODP', 'ASD', 'behavioral support', 'Pennsylvania'],
    },
    {
        id: 'pa-002',
        state: 'Pennsylvania', abbr: 'PA',
        title: 'DHS – Child Welfare & CYS Service Provider RFP',
        agency: 'PA Dept. of Human Services – Office of Children, Youth & Families (OCYF)',
        category: 'children-family',
        tags: ['children-family', 'social-services'],
        status: 'active',
        deadline: 'Check PA eMarketplace',
        description: 'PA OCYF issues county-level and statewide RFPs for child welfare agencies, foster care support programs, family group decision-making facilitators, and evidence-based home visiting programs like Nurse-Family Partnership.',
        portalUrl: 'https://www.emarketplace.state.pa.us/Solicitations.aspx',
        agencyUrl: 'https://www.dhs.pa.gov/Services/Children/Pages/default.aspx',
        keywords: ['child welfare', 'OCYF', 'foster care', 'home visiting', 'Pennsylvania'],
    },
    {
        id: 'pa-003',
        state: 'Pennsylvania', abbr: 'PA',
        title: 'HealthChoices Behavioral Health Managed Care – Children\'s Track',
        agency: 'PA Dept. of Human Services – Office of Mental Health & Substance Abuse',
        category: 'behavioral-health',
        tags: ['behavioral-health', 'children-family'],
        status: 'active',
        deadline: 'BH-MCO enrollment cycles',
        description: 'PA DHS coordinates HealthChoices BH managed care procurements. Providers may join county MCO networks to offer children and family mental health services including family-based services, BHRS, and partial hospitalization.',
        portalUrl: 'https://www.emarketplace.state.pa.us/Solicitations.aspx',
        agencyUrl: 'https://www.dhs.pa.gov/Services/Mental-Health-And-Disability-Services/Pages/Behavioral-Health.aspx',
        keywords: ['HealthChoices', 'behavioral health', 'MCO', 'children', 'BHRS', 'Pennsylvania'],
    },

    // ──── SOUTH CAROLINA ────
    {
        id: 'sc-001',
        state: 'South Carolina', abbr: 'SC',
        title: 'DSN Board – IDD & Autism Community Supports',
        agency: 'SC Dept. of Disabilities and Special Needs (DDSN)',
        category: 'idd',
        tags: ['idd', 'autism'],
        status: 'recurring',
        deadline: 'Rolling DDSN enrollment',
        description: 'South Carolina DDSN seeks providers for its community programs serving individuals with intellectual disabilities, autism, head and spinal cord injuries. Services include community residential and day program supports, supported employment, and crisis services.',
        portalUrl: 'https://admin.sc.gov/procurement/solicit',
        agencyUrl: 'https://www.ddsn.sc.gov/',
        keywords: ['DDSN', 'IDD', 'autism', 'community residential', 'South Carolina'],
    },
    {
        id: 'sc-002',
        state: 'South Carolina', abbr: 'SC',
        title: 'DSS – Foster Care Recruitment & Family Support Services',
        agency: 'SC Department of Social Services (DSS)',
        category: 'children-family',
        tags: ['children-family', 'social-services'],
        status: 'active',
        deadline: 'See SC Procurement portal',
        description: 'SC DSS issues solicitations for foster care recruitment agencies, family preservation programs, and services for youth in care. RFPs cover therapeutic foster care, respite, and family resource center operations.',
        portalUrl: 'https://admin.sc.gov/procurement/solicit',
        agencyUrl: 'https://www.dss.sc.gov/',
        keywords: ['foster care', 'DSS', 'family support', 'South Carolina', 'therapeutic'],
    },

    // ──── TEXAS ────
    {
        id: 'tx-001',
        state: 'Texas', abbr: 'TX',
        title: 'DFPS – Foster Care & Residential Child Care Providers',
        agency: 'TX Dept. of Family & Protective Services (DFPS)',
        category: 'children-family',
        tags: ['children-family', 'social-services'],
        status: 'active',
        deadline: 'Check TX ESBD portal',
        description: 'Texas DFPS issues solicitations for foster care recruitment and retention, community-based care contractors (CBC), and residential child-care facilities for children in the conservatorship of the state.',
        portalUrl: 'https://www.txsmartbuy.com/esbd',
        agencyUrl: 'https://www.dfps.texas.gov/',
        keywords: ['foster care', 'DFPS', 'residential care', 'CBC', 'Texas', 'child welfare'],
    },
    {
        id: 'tx-002',
        state: 'Texas', abbr: 'TX',
        title: 'HHS – IDD Waiver Home & Community-Based Services',
        agency: 'TX Health and Human Services Commission (HHSC)',
        category: 'idd',
        tags: ['idd', 'autism'],
        status: 'recurring',
        deadline: 'Rolling HHSC enrollment',
        description: 'Texas HHSC manages multiple HCBS Medicaid waivers for individuals with IDD including the Home and Community-based Services (HCS) waiver and Community First Choice (CFC). Providers must enroll through the HHSC portal.',
        portalUrl: 'https://www.txsmartbuy.com/esbd',
        agencyUrl: 'https://www.hhs.texas.gov/providers/long-term-services-support-providers/intellectual-developmental-disability-idd-providers',
        keywords: ['IDD', 'HCS waiver', 'HCBS', 'HHSC', 'Texas', 'CFC'],
    },
    {
        id: 'tx-003',
        state: 'Texas', abbr: 'TX',
        title: 'BHIPS – Medicaid Behavioral Health Contracts',
        agency: 'TX HHSC Behavioral Health Services',
        category: 'behavioral-health',
        tags: ['behavioral-health', 'children-family', 'autism'],
        status: 'active',
        deadline: 'See TX ESBD / HHSC Contracts',
        description: 'HHSC contracts with Local Mental Health Authorities (LMHAs) and network providers for behavioral health services under Medicaid managed care, including children\'s services through STAR Health managed care for youth in foster care.',
        portalUrl: 'https://www.txsmartbuy.com/esbd',
        agencyUrl: 'https://www.hhs.texas.gov/providers/behavioral-health-services-providers',
        keywords: ['behavioral health', 'LMHA', 'Medicaid', 'STAR Health', 'foster care', 'Texas'],
    },
    {
        id: 'tx-004',
        state: 'Texas', abbr: 'TX',
        title: 'Autism Program – ABA & Behavioral Health Services for Children',
        agency: 'TX HHSC – Autism Program',
        category: 'autism',
        tags: ['autism', 'children-family'],
        status: 'recurring',
        deadline: 'Rolling HHSC credentialing',
        description: 'Texas HHSC Medicaid covers ABA therapy, speech, OT and PT for children with autism under the Early Childhood Intervention and STAR Kids programs. Providers can enroll to join the Texas Medicaid Network.',
        portalUrl: 'https://www.txsmartbuy.com/esbd',
        agencyUrl: 'https://www.hhs.texas.gov/providers/medicaid-supplemental-payment-quality-improvement/value-based-payments/autism-program',
        keywords: ['autism', 'ABA', 'Medicaid', 'STAR Kids', 'early childhood', 'Texas'],
    },
];

// ——— ADDITIONAL RESOURCE LINKS ———
const ADDITIONAL_RESOURCES = [
    { name: 'SAM.gov Federal Grants', url: 'https://sam.gov/content/opportunities', desc: 'Federal contract and grant opportunities' },
    { name: 'Grants.gov', url: 'https://www.grants.gov/', desc: 'Federal grant listings across HHS, DoE, SAMHSA' },
    { name: 'SAMHSA Grant Opportunities', url: 'https://www.samhsa.gov/grants', desc: 'Substance Abuse & Mental Health Services funding' },
    { name: 'ACF Grants (HHS)', url: 'https://www.acf.hhs.gov/grants', desc: 'Administration for Children & Families grants' },
    { name: 'CMS Medicaid Contracting', url: 'https://www.medicaid.gov/medicaid/finance/index.html', desc: 'Medicaid MCO and waiver contracting info' },
];

// ——— APP STATE ———
let currentFilters = { search: '', state: 'all', category: 'all' };
let currentView = 'grid';
let filteredData = [...RFP_DATA];

// ——— INIT ———
document.addEventListener('DOMContentLoaded', () => {
    populateStateFilter();
    renderPortals();
    renderCards();
    bindEvents();
    setLastUpdate();
});

function setLastUpdate() {
    document.getElementById('lastUpdate').textContent = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

// ——— POPULATE STATE DROPDOWN ———
function populateStateFilter() {
    const sel = document.getElementById('stateFilter');
    STATE_PORTALS.forEach(p => {
        const opt = document.createElement('option');
        opt.value = p.state;
        opt.textContent = `${p.flag} ${p.state}`;
        sel.appendChild(opt);
    });
}

// ——— RENDER PORTALS ———
function renderPortals() {
    const grid = document.getElementById('portalsGrid');
    grid.innerHTML = STATE_PORTALS.map(p => `
    <a href="${p.url}" target="_blank" rel="noopener noreferrer" class="portal-card">
      <div class="portal-flag">${p.flag}</div>
      <div class="portal-info">
        <div class="portal-state">${p.state}</div>
        <div class="portal-name">${p.name}</div>
      </div>
    </a>
  `).join('');
}

// ——— FILTER LOGIC ———
function applyFilters() {
    const { search, state, category } = currentFilters;
    filteredData = RFP_DATA.filter(rfp => {
        const matchState = state === 'all' || rfp.state === state;
        const matchCat = category === 'all'
            || rfp.category === category
            || rfp.tags.includes(category);
        const matchSearch = !search || [
            rfp.title, rfp.agency, rfp.description, rfp.state, ...rfp.keywords
        ].some(s => s.toLowerCase().includes(search.toLowerCase()));
        return matchState && matchCat && matchSearch;
    });
    renderCards();
}

// ——— RENDER CARDS ———
function renderCards() {
    const grid = document.getElementById('rfpGrid');
    const empty = document.getElementById('emptyState');
    const count = document.getElementById('resultsCount');

    if (filteredData.length === 0) {
        grid.innerHTML = '';
        empty.style.display = 'block';
        count.textContent = 'No opportunities match your filters.';
        return;
    }

    empty.style.display = 'none';
    count.textContent = `Showing ${filteredData.length} of ${RFP_DATA.length} opportunities`;

    grid.innerHTML = filteredData.map((rfp, i) => {
        const statusLabel = { active: 'Active', upcoming: 'Upcoming', recurring: 'Rolling/Recurring' }[rfp.status];
        const accentMap = {
            'children-family': 'linear-gradient(90deg, #6C63FF, #a89aff)',
            'autism': 'linear-gradient(90deg, #ff7eb6, #ff9ecc)',
            'idd': 'linear-gradient(90deg, #3ecfcf, #5ee0e0)',
            'social-services': 'linear-gradient(90deg, #4ade80, #6ee77a)',
            'behavioral-health': 'linear-gradient(90deg, #fb923c, #fba655)',
        };
        return `
      <div class="rfp-card" 
           data-id="${rfp.id}" 
           role="button" 
           tabindex="0"
           style="--card-accent: ${accentMap[rfp.category] || accentMap['social-services']}; animation-delay: ${i * 0.04}s"
           onclick="openModal('${rfp.id}')"
           onkeydown="if(event.key==='Enter') openModal('${rfp.id}')">
        <div class="card-header">
          <span class="state-badge">${getStateFlag(rfp.state)} ${rfp.state}</span>
          <span class="status-dot ${rfp.status}" title="${statusLabel}"></span>
        </div>
        <div class="card-main">
          <h3 class="card-title">${rfp.title}</h3>
          <p class="card-agency">${rfp.agency}</p>
        </div>
        <p class="card-desc">${rfp.description}</p>
        <div class="card-tags">
          ${rfp.tags.map(t => `<span class="tag ${getTagClass(t)}">${getTagLabel(t)}</span>`).join('')}
        </div>
        <div class="card-footer">
          <div class="card-deadline">Deadline: <strong>${rfp.deadline}</strong></div>
          <div class="card-cta">View Details →</div>
        </div>
      </div>
    `;
    }).join('');
}

function getStateFlag(state) {
    return STATE_PORTALS.find(p => p.state === state)?.flag || '🏛️';
}

function getTagClass(tag) {
    const map = {
        'children-family': 'tag-children',
        'autism': 'tag-autism',
        'idd': 'tag-idd',
        'social-services': 'tag-social',
        'behavioral-health': 'tag-behavioral',
    };
    return map[tag] || 'tag-social';
}

function getTagLabel(tag) {
    const map = {
        'children-family': '👨‍👩‍👧 Children & Family',
        'autism': '🧩 Autism',
        'idd': '♿ IDD',
        'social-services': '🤝 Social Services',
        'behavioral-health': '🧠 Behavioral Health',
    };
    return map[tag] || tag;
}

// ——— MODAL ———
function openModal(id) {
    const rfp = RFP_DATA.find(r => r.id === id);
    if (!rfp) return;

    document.getElementById('modalBadge').innerHTML = `
    <span class="state-badge">${getStateFlag(rfp.state)} ${rfp.state}</span>
    <span class="status-dot ${rfp.status}"></span>
  `;
    document.getElementById('modalTitle').textContent = rfp.title;
    document.getElementById('modalMeta').innerHTML = `
    <span>🏛️ ${rfp.agency}</span>
    <span>📅 ${rfp.deadline}</span>
    <span>📍 ${rfp.state}</span>
  `;
    document.getElementById('modalDesc').textContent = rfp.description;
    document.getElementById('modalTags').innerHTML = rfp.tags
        .map(t => `<span class="tag ${getTagClass(t)}">${getTagLabel(t)}</span>`)
        .join('');
    document.getElementById('modalPortalLink').href = rfp.portalUrl;
    document.getElementById('modalAgencyLink').href = rfp.agencyUrl;

    document.getElementById('modalOverlay').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('modalOverlay').classList.remove('open');
    document.body.style.overflow = '';
}

// ——— BIND EVENTS ———
function bindEvents() {
    // Search
    const searchInput = document.getElementById('searchInput');
    const clearBtn = document.getElementById('searchClear');

    searchInput.addEventListener('input', e => {
        currentFilters.search = e.target.value.trim();
        clearBtn.classList.toggle('visible', currentFilters.search.length > 0);
        applyFilters();
    });

    clearBtn.addEventListener('click', () => {
        searchInput.value = '';
        currentFilters.search = '';
        clearBtn.classList.remove('visible');
        applyFilters();
    });

    // State filter
    document.getElementById('stateFilter').addEventListener('change', e => {
        currentFilters.state = e.target.value;
        applyFilters();
    });

    // Category filter
    document.getElementById('categoryFilter').addEventListener('change', e => {
        currentFilters.category = e.target.value;
        syncPills(e.target.value);
        applyFilters();
    });

    // Category pills
    document.querySelectorAll('.pill').forEach(pill => {
        pill.addEventListener('click', () => {
            const cat = pill.dataset.cat;
            currentFilters.category = cat;
            document.getElementById('categoryFilter').value = cat;
            syncPills(cat);
            applyFilters();
        });
    });

    // Reset
    ['resetFilters', 'emptyReset'].forEach(id => {
        document.getElementById(id)?.addEventListener('click', resetAll);
    });

    // View toggle
    document.getElementById('viewGrid').addEventListener('click', () => setView('grid'));
    document.getElementById('viewList').addEventListener('click', () => setView('list'));

    // Modal
    document.getElementById('modalClose').addEventListener('click', closeModal);
    document.getElementById('modalOverlay').addEventListener('click', e => {
        if (e.target === document.getElementById('modalOverlay')) closeModal();
    });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
}

function syncPills(cat) {
    document.querySelectorAll('.pill').forEach(p => {
        p.classList.toggle('pill-active', p.dataset.cat === cat);
    });
}

function resetAll() {
    currentFilters = { search: '', state: 'all', category: 'all' };
    document.getElementById('searchInput').value = '';
    document.getElementById('stateFilter').value = 'all';
    document.getElementById('categoryFilter').value = 'all';
    document.getElementById('searchClear').classList.remove('visible');
    syncPills('all');
    applyFilters();
}

function setView(view) {
    currentView = view;
    const grid = document.getElementById('rfpGrid');
    const gridBtn = document.getElementById('viewGrid');
    const listBtn = document.getElementById('viewList');

    if (view === 'list') {
        grid.classList.add('list-view');
        listBtn.classList.add('active');
        gridBtn.classList.remove('active');
    } else {
        grid.classList.remove('list-view');
        gridBtn.classList.add('active');
        listBtn.classList.remove('active');
    }
}
