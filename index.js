const indian_companies_array = ["20 Microns Limited", "21st Century Management Services Limited", "3i Infotech Limited", "3M India Limited", "3P Land Holdings Limited", "5Paisa Capital Limited", "63 moons technologies limited", "A2Z Infra Engineering Limited", "Aarti Drugs Limited", "Aarti Industries Limited", "Aarvee Denims & Exports Limited", "Aavas Financiers Limited", "Aban Offshore Limited", "ABB India Limited", "Abbott India Limited", "Aditya Birla Capital Limited", "Aditya Birla Fashion and Retail Limited", "ABM International Limited", "ACC Limited", "Accelya Solutions India Limited", "Action Construction Equipment Limited", "Adani Enterprises Limited", "Adani Gas Limited", "Adani Green Energy Limited", "Adani Ports and Special Economic Zone Limited", "Adani Power Limited", "Adani Transmission Limited", "ADF Foods Limited", "Adhunik Metaliks Limited", "Adhunik Industries Limited", "Adlabs Entertainment Limited", "Ador Welding Limited", "Adroit Infotech Limited", "Allied Digital Services Limited", "Advani Hotels & Resorts (India) Limited", "Advanced Enzyme Technologies Limited", "Aegis Logistics Limited", "Affle (India) Limited", "Agarwal Industrial Corporation Limited", "AGC Networks Limited", "Agri-Tech (India) Limited", "Agro Phos India Limited", "Asian Hotels (East) Limited", "Ahluwalia Contracts (India) Limited", "Asian Hotels (West) Limited", "AIA Engineering Limited", "Monnet Ispat & Energy Limited", "Airan Limited", "Ajanta Pharma Limited", "Ajmera Realty & Infra India Limited", "Akash Infra-Projects Limited", "AksharChem India Limited", "Aksh Optifibre Limited", "Akzo Nobel India Limited", "Alankit Limited", "Albert David Limited", "Allahabad Bank", "Alchemist Limited", "Alembic Limited", "Alicon Castalloy Limited", "Alkali Metals Limited", "Alkem Laboratories Limited", "Alkyl Amines Chemicals Limited", "Allcargo Logistics Limited", "Allsec Technologies Limited", "Almondz Global Securities Limited", "Alok Industries Limited", "Alpa Laboratories Limited", "Alphageo (India) Limited", "Alps Industries Limited", "Amara Raja Batteries Limited", "Amber Enterprises India Limited", "Ambika Cotton Mills Limited", "Ambuja Cements Limited", "AMD Industries Limited", "Amj Land Holdings Limited", "Amrutanjan Health Care Limited", "Anant Raj Limited", "Andhra Bank", "Andhra Cements Limited", "The Andhra Sugars Limited", "Anik Industries Limited", "Ankit Metal & Power Limited", "Ansal Properties & Infrastructure Limited", "Ansal Housing Limited", "Antarctica Limited", "The Anup Engineering Limited", "Apar Industries Limited", "Anjani Portland Cement Limited", "Apcotex Industries Limited", "Apex Frozen Foods Limited", "APL Apollo Tubes Limited", "Alembic Pharmaceuticals Limited", "Apollo Micro Systems Limited", "Apollo Hospitals Enterprise Limited", "Apollo Pipes Limited", "Apollo Tyres Limited", "Apollo Sindoori Hotels Limited", "Aptech Limited", "Archidply Industries Limited", "Archies Limited", "Arcotech Limited", "Rajdarshan Industries Limited", "Aries Agro Limited", "Arihant Foundations & Housing Limited", "Arihant Superstructures Limited", "Arman Financial Services Limited", "Aro Granite Industries Limited", "Arrow Greentech Limited", "Arrow Textiles Limited", "Arshiya Limited", "ARSS Infrastructure Projects Limited", "Arvind Limited", "Arvind Fashions Limited", "Arvind SmartSpaces Limited", "Asahi India Glass Limited", "Asahi Songwon Colors Limited", "Automotive Stampings and Assemblies Limited", "Ashapura Minechem Limited", "Ashiana Housing Limited", "Ashima Limited", "Ashoka Buildcon Limited", "Ashok Leyland Limited", "Asian Hotels (North) Limited", "Asian Paints Limited", "Asian Granito India Limited", "Aspinwall and Company Limited", "Astec LifeSciences Limited", "Aster DM Healthcare Limited", "Astral Poly Technik Limited", "Astra Microwave Products Limited", "AstraZeneca Pharma India Limited", "Astron Paper & Board Mill Limited", "Agro Tech Foods Limited", "Atlanta  Limited", "Atlas Cycles (Haryana) Limited", "Atul Limited", "Atul Auto Limited", "AU Small Finance Bank Limited", "Aurionpro Solutions Limited", "Aurobindo Pharma Limited", "Ausom Enterprise Limited", "Automotive Axles Limited", "Autoline Industries Limited", "Autolite (India) Limited", "Avadh Sugar & Energy Limited", "Avanti Feeds Limited", "AVT Natural Products Limited", "Axis Bank Limited", "AXISCADES Engineering Technologies Limited", "AYM Syntex Limited", "B.A.G Films and Media Limited", "Bajaj Auto Limited", "Bajaj Consumer Care Limited", "Bajaj Electricals Limited", "Bajaj Finserv Limited", "Bajaj Hindusthan Sugar Limited", "Bajaj Holdings & Investment Limited", "Bajaj Finance Limited", "Balaji Telefilms Limited", "Balaji Amines Limited", "Balaxi Ventures Limited", "Balkrishna Paper Mills Limited", "Balkrishna Industries Limited", "Ballarpur Industries Limited", "Balmer Lawrie & Company Limited", "Bal Pharma Limited", "Balrampur Chini Mills Limited", "Banaras Beads Limited", "Bannari Amman Sugars Limited", "Banco Products (I) Limited", "Bandhan Bank Limited", "Bang Overseas Limited", "Bank of Baroda", "Bank of India", "Banswara Syntex Limited", "Bartronics India Limited", "BASF India Limited", "Bannari Amman Spinning Mills Limited", "Bata India Limited", "Bayer Cropscience Limited", "Bharat Bijlee Limited", "Bombay Burmah Trading Corporation Limited", "Brightcom Group Limited", "B.C. Power Controls Ltd", "Bharat Dynamics Limited", "Beardsell Limited", "Bedmutha Industries Limited", "Bharat Electronics Limited", "BEML Limited", "Bhansali Engineering Polymers Limited", "Berger Paints (I) Limited", "BF Investment Limited", "BF Utilities Limited", "Bharatiya Global Infomedia Limited", "BGR Energy Systems Limited", "Bhageria Industries Limited", "Bhagyanagar India Limited", "Bhagyanagar Properties Limited", "Bhandari Hosiery Exports Limited", "Bharat Forge Limited", "Bharat Gears Limited", "Bharat Rasayan Limited", "Bharat Wire Ropes Limited", "Bharti Airtel Limited", "Bharat Heavy Electricals Limited", "Bigbloc Construction Limited", "Bhartiya International Limited", "Bil Energy Systems Limited", "Oswal Chemicals & Fertilizers Limited", "Biocon Limited", "Biofil Chemicals & Pharmaceuticals Limited", "Birla Cable Limited", "Birla Corporation Limited", "Aditya Birla Money Limited", "Bkm Industries Limited", "BLB Limited", "Bliss GVS Pharma Limited", "B. L. Kashyap and Sons Limited", "BLS International Services Limited", "Blue Blends (I) Limited", "Blue Coast Hotels Limited", "Blue Dart Express Limited", "Blue Star Limited", "Bodal Chemicals Limited", "Bombay Dyeing & Mfg Company Limited", "Borosil Glass Works Limited", "Bosch Limited", "Bharat Petroleum Corporation Limited", "BPL Limited", "Bombay Rayon Fashions Limited", "Brigade Enterprises Limited", "Britannia Industries Limited", "Bharat Road Network Limited", "Brooks Laboratories Limited", "BSE Limited", "BSEL Infrastructure Realty Limited", "BSL Limited", "BIRLASOFT LIMITED", "Burnpur Cement Limited", "Butterfly Gandhimathi Appliances Limited", "Barak Valley Cements Limited", "The Byke Hospitality Ltd", "Cadila Healthcare Limited", "California Software Company Limited", "Camlin Fine Sciences Limited", "Canara Bank", "C & C Constructions Limited", "Can Fin Homes Limited", "Cantabil Retail India Limited", "Capacit'e Infraprojects Limited", "Caplin Point Laboratories Limited", "Capital Trust Limited", "Carborundum Universal Limited", "Career Point Limited", "CARE Ratings Limited", "Castex Technologies Limited", "Castrol India Limited", "Country Club Hospitality & Holidays Limited", "CCL Products (India) Limited", "Central Depository Services (India) Limited", "CEAT Limited", "Commercial Engineers & Body Builders Co Limited", "Celebrity Fashions Limited", "Celestial Biolabs Limited", "Century Enka Limited", "Century Extrusions Limited", "Central Bank of India", "Centrum Capital Limited", "Centum Electronics Limited", "Century Plyboards (India) Limited", "Century Textiles & Industries Limited", "Cera Sanitaryware Limited", "Cerebra Integrated Technologies Limited", "CESC Limited", "CESC Ventures Limited", "Capri Global Capital Limited", "CG Power and Industrial Solutions Limited", "Chalet Hotels Limited", "Chambal Fertilizers & Chemicals Limited", "Chemfab Alkalis Limited", "Chennai Petroleum Corporation Limited", "Cholamandalam Investment and Finance Company Limited", "Cholamandalam Financial Holdings Limited", "Chromatic India Limited", "Cigniti Technologies Limited", "Cimmco Limited", "Cineline India Limited", "Cinevista Limited", "Cipla Limited", "Cox & Kings Financial Service Limited", "CL Educate Limited", "Clariant Chemicals (India) Limited", "CMI Limited", "CIL Nova Petrochemicals Limited", "Coal India Limited", "Cochin Shipyard Limited", "Coffee Day Enterprises Limited", "Colgate Palmolive (India) Limited", "Compuage Infocom Limited", "Compucom Software Limited", "Container Corporation of India Limited", "Confidence Petroleum India Limited", "Consolidated Finvest & Holdings Limited", "Control Print Limited", "Coral India Finance & Housing Limited", "Cords Cable Industries Limited", "Coromandel International Limited", "Corporation Bank", "Cosmo Films Limited", "Country Condo's Limited", "Cox & Kings Limited", "Creative Peripherals and Distribution Limited", "Creative Eye Limited", "CREDITACCESS GRAMEEN LIMITED", "Crest Ventures Limited", "CRISIL Limited", "Crompton Greaves Consumer Electricals Limited", "Cambridge Technology Enterprises Limited", "City Union Bank Limited", "Cubex Tubings Limited", "Cummins India Limited", "Cupid Limited", "Cura Technologies Limited", "Cyber Media (India) Limited", "Cybertech Systems And Software Limited", "Cyient Limited", "LT Foods Limited", "Dabur India Limited", "Dalmia Bharat Limited", "Dalmia Bharat Sugar and Industries Limited", "Damodar Industries Limited", "Datamatics Global Services Limited", "D.B.Corp Limited", "Dilip Buildcon Limited", "D B Realty Limited", "DB (International) Stock Brokers Limited", "Dishman Carbogen Amcis Limited", "DCB Bank Limited", "DCM  Limited", "DCM Financial Services Limited", "DCM Nouvelle Limited", "DCM Shriram Limited", "DCW Limited", "Deccan Cements Limited", "Deepak Fertilizers and Petrochemicals Corporation Limited", "Deepak Nitrite Limited", "Deep Industries Limited", "Delta Corp Limited", "Delta Magnets Limited", "Den Networks Limited", "De Nora India Limited", "DFM Foods Limited", "Digicontent Limited", "Dhampur Sugar Mills Limited", "Dhanlaxmi Bank Limited", "Dhanuka Agritech Limited", "Dharani Sugars & Chemicals Limited", "Dewan Housing Finance Corporation Limited", "Dhunseri Investments Limited", "Prataap Snacks Limited", "Diamond Power Infra Ltd", "DIC India Limited", "DiGiSPICE Technologies Limited", "Digjam Limited", "Dish TV India Limited", "Divi's Laboratories Limited", "Dixon Technologies (India) Limited", "DLF Limited", "D-Link (India) Limited", "Avenue Supermarts Limited", "Diligent Media Corporation Limited", "Dolat Investments Limited", "Dollar Industries Limited", "Donear Industries Limited", "DPSC Limited", "DQ Entertainment (International) Limited", "Dredging Corporation of India Limited", "Dr. Reddy's Laboratories Limited", "Dynacons Systems & Solutions Limited", "Dhunseri Tea & Industries Limited", "Ducon Infratechnologies Limited", "Dhunseri Ventures Limited", "Dwarikesh Sugar Industries Limited", "Dynamatic Technologies Limited", "Dynemic Products Limited", "Eastern Silk Industries Limited", "Easun Reyrolle Limited", "eClerx Services Limited", "Edelweiss Financial Services Limited", "Empee Distilleries Limited", "Educomp Solutions Limited", "Eicher Motors Limited", "EID Parry India Limited", "EIH Associated Hotels Limited", "EIH Limited", "Eimco Elecon (India) Limited", "Everest Kanto Cylinder Limited", "Elecon Engineering Company Limited", "Electrosteel Castings Limited", "Electrotherm (India) Limited", "Elgi Equipments Limited", "Elgi Rubber Company Limited", "Emami Limited", "Emami Paper Mills Limited", "Emami Realty Limited", "Emco Limited", "Emkay Global Financial Services Limited", "Emmbi Industries Limited", "Endurance Technologies Limited", "Energy Development Company Limited", "Engineers India Limited", "Entertainment Network (India) Limited", "Eon Electric Limited", "Equitas Holdings Limited", "Eris Lifesciences Limited", "Eros International Media Limited", "Esab India Limited", "Escorts Limited", "Essar Shipping Limited", "Essel Propack Limited", "Ester Industries Limited", "Euro Ceramics Limited", "Euro Multivision Limited", "Eurotex Industries and Exports Limited", "Eveready Industries India Limited", "Everest Industries Limited", "Excel Realty N Infra Limited", "Excel Industries Limited", "Exide Industries Limited", "Expleo Solutions Limited", "Fertilizers and Chemicals Travancore Limited", "Fairchem Speciality Limited", "Fineotex Chemical Limited", "Future Consumer Limited", "FCS Software Solutions Limited", "FDC Limited", "The Federal Bank  Limited", "Future Enterprises Limited", "Future Enterprises Limited", "Fiem Industries Limited", "Filatex India Limited", "Finolex Cables Limited", "Fine Organic Industries Limited", "Finolex Industries Limited", "Flexituff Ventures International Limited", "Future Lifestyle Fashions Limited", "Gujarat Fluorochemicals Limited", "Federal-Mogul Goetze (India) Limited.", "Future Market Networks Limited", "FORCE MOTORS LTD", "Fortis Healthcare Limited", "Foseco India Limited", "Future Retail Limited", "Future Supply Chain Solutions Limited", "Firstsource Solutions Limited", "Gabriel India Limited", "Gujarat Ambuja Exports Limited", "GAIL (India) Limited", "Gyscoal Alloys Limited", "Galaxy Surfactants Limited", "Gallantt Metal Limited", "Gallantt Ispat Limited", "Gammon Infrastructure Projects Limited", "Gandhi Special Tubes Limited", "Ganesha Ecosphere Limited", "Ganesh Housing Corporation Limited", "Ganges Securities Limited", "Gangotri Textiles Limited", "Garden Silk Mills Limited", "Garware Technical Fibres Limited", "GATI Limited", "Gayatri Highways Limited", "Gayatri Projects Limited", "Gateway Distriparks Limited", "GeeCee Ventures Limited", "Genesys International Corporation Limited", "Genus Paper & Boards Limited", "Genus Power Infrastructures Limited", "Geojit Financial Services Limited", "GE Power India Limited", "The Great Eastern Shipping Company Limited", "GE T&D India Limited", "GFL Limited", "GHCL Limited", "GIC Housing Finance Limited", "General Insurance Corporation of India", "Gillanders Arbuthnot & Company Limited", "Gillette India Limited", "Ginni Filaments Limited", "Gujarat Industries Power Company Limited", "GI Engineering Solutions Limited", "GKW Limited", "GlaxoSmithKline Pharmaceuticals Limited", "Glenmark Pharmaceuticals Limited", "Gujarat Lease Financing Limited", "Global Vectra Helicorp Limited", "Global Offshore Services Limited", "Globus Spirits Limited", "GM Breweries Limited", "Gujarat Mineral Development Corporation Limited", "GMM Pfaudler Limited", "GMR Infrastructure Limited", "GNA Axles Limited", "Gujarat Narmada Valley Fertilizers and Chemicals Limited", "Goa Carbon Limited", "GOCL Corporation Limited", "Godfrey Phillips India Limited", "Godrej Agrovet Limited", "Godrej Consumer Products Limited", "Godrej Industries Limited", "Godrej Properties Limited", "Goenka Diamond and Jewels Limited", "Gokaldas Exports Limited", "Gokul Refoils and Solvent Limited", "Gokul Agro Resources Limited", "Golden Tobacco Limited", "Goldiam International Limited", "Goldstone Technologies Limited", "Goodluck India Limited", "Godawari Power And Ispat limited", "Gujarat Pipavav Port Limited", "GPT Infraprojects Limited", "Granules India Limited", "Graphite India Limited", "Grasim Industries Limited", "Gravita India Limited", "Greaves Cotton Limited", "Greenlam Industries Limited", "Greenpanel Industries Limited", "Greenply Industries Limited", "Orient Green Power Company Limited", "Grindwell Norton Limited", "The Grob Tea Company Limited", "GRP Limited", "Garden Reach Shipbuilders & Engineers Limited", "Gujarat Sidhee Cement Limited", "Gujarat State Fertilizers & Chemicals Limited", "GlaxoSmithKline Consumer Healthcare Limited", "Gujarat State Petronet Limited", "GSS Infotech Limited", "GTL Limited", "GTL Infrastructure Limited", "GTN Industries Limited", "GTN Textiles Limited", "GTPL Hathway Limited", "Gufic Biosciences Limited", "Gujarat Alkalies and Chemicals Limited", "Gujarat Apollo Industries Limited", "Gujarat Gas Limited", "Gujarat Raffia Industries Limited", "Gulf Oil Lubricants India Limited", "GP Petroleums Limited", "Gulshan Polyols Limited", "GVK Power & Infrastructure Limited", "Hindustan Aeronautics Limited", "Harita Seating Systems Limited", "Harrisons  Malayalam Limited", "Hathway Cable & Datacom Limited", "Hatsun Agro Product Limited", "Havells India Limited", "Sri Havisha Hospitality and Infrastructure Limited", "HBL Power Systems Limited", "HB Stockholdings Limited", "Hindustan Construction Company Limited", "Healthcare Global Enterprises Limited", "HCL Infosystems Limited", "HCL Technologies Limited", "Housing Development Finance Corporation Limited", "HDFC Asset Management Company Limited", "HDFC Bank Limited", "HDFC Life Insurance Company Limited", "Housing Development and Infrastructure Limited", "HEG Limited", "HeidelbergCement India Limited", "Hercules Hoists Limited", "Heritage Foods Limited", "Hero MotoCorp Limited", "Hester Biosciences Limited", "Hexa Tradex Limited", "Hexaware Technologies Limited", "HFCL Limited", "H.G. Infra Engineering Limited", "Hinduja Global Solutions Limited", "Hikal Limited", "HIL Limited", "Hilton Metal Forging Limited", "Himatsingka Seide Limited", "Hindalco Industries Limited", "Hindustan Composites Limited", "Hindustan Copper Limited", "Hindustan Motors Limited", "Hindusthan National Glass & Industries Limited", "Hindustan Oil Exploration Company Limited", "Hindustan Petroleum Corporation Limited", "Hind Syntex Limited", "Hindustan Unilever Limited", "Hindustan Zinc Limited", "Hind Rectifiers Limited", "Hisar Metal Industries Limited", "Hi-Tech Pipes Limited", "Hitech Corporation Limited", "The Hi-Tech Gears Limited", "HMT Limited", "Hindustan Media Ventures Limited", "Hindustan Foods Limited", "Honeywell Automation India Limited", "Honda Siel Power Products Limited", "Hotel Leela Venture Limited", "Hotel Rugby Limited", "HOV Services Limited", "HPL Electric & Power Limited", "Himadri Speciality Chemical Limited", "HSIL Limited", "HT Media Limited", "Hubtown Limited", "Housing & Urban Development Corporation Limited", "Indiabulls Real Estate Limited", "Indiabulls Housing Finance Limited", "Indiabulls Integrated Services Limited", "Indiabulls Ventures Limited", "ICICI Bank Limited", "ICICI Lombard General Insurance Company Limited", "ICICI Prudential Life Insurance Company Limited", "Indo Count Industries Limited", "ICRA Limited", "IDBI Bank Limited", "Vodafone Idea Limited", "IDFC Limited", "IDFC First Bank Limited", "Indian Energy Exchange Limited", "IFB Agro Industries Limited", "IFB Industries Limited", "IFCI Limited", "IFGL Refractories Limited", "Igarashi Motors India Limited", "Indraprastha Gas Limited", "IG Petrochemicals Limited", "IIFL Finance Limited", "IIFL Securities Limited", "Iifl Wealth Management Limited", "Industrial Investment Trust Limited", "IL&FS Engineering and Construction Company Limited", "IL&FS Transportation Networks Limited", "Indian Metals & Ferro Alloys Limited", "India Motor Parts and Accessories Limited", "Impex Ferro Tech Limited", "Indbank Merchant Banking Services Limited", "The Indian Hotels Company Limited", "The India Cements Limited", "India Glycols Limited", "Indiamart Intermesh Limited", "Indian Bank", "Indian Card Clothing Company Limited", "Indian Hume Pipe Company Limited", "InterGlobe Aviation Limited", "IMP Powers Limited", "India Nippon Electricals Limited", "Indoco Remedies Limited", "Indo Rama Synthetics (India) Limited", "Indosolar Limited", "IndoStar Capital Finance Limited", "Indo Tech Transformers Limited", "Indo Thai Securities Limited", "Indowind Energy Limited", "Indraprastha Medical Corporation Limited", "Ind-Swift Laboratories Limited", "Ind-Swift Limited", "Indian Terrain Fashions Limited", "IndusInd Bank Limited", "INEOS Styrolution India Limited", "Infibeam Avenues Limited", "InfoBeans Technologies Limited", "Bharti Infratel Limited", "Infosys Limited", "Ingersoll Rand (India) Limited", "INOX Leisure Limited", "Inox Wind Limited", "Insecticides (India) Limited", "Inspirisys Solutions Limited", "Integra Garments and Textiles Limited", "Intellect Design Arena Limited", "Intense Technologies Limited", "Inventure Growth & Securities Limited", "Indian Overseas Bank", "Indian Oil Corporation Limited", "IOL Chemicals and Pharmaceuticals Limited", "International Paper APPM Limited", "IPCA Laboratories Limited", "IRB Infrastructure Developers Limited", "Ircon International Limited", "Indian Railway Catering And Tourism Corporation Limited", "ICICI Securities Limited", "Intrasoft Technologies Limited", "ISMT Limited", "ITC Limited", "India Tourism Development Corporation Limited", "ITD Cementation India Limited", "ITI Limited", "IL&FS Investment Managers Limited", "IVP Limited", "IVRCL Limited", "IZMO Limited", "The Jammu & Kashmir Bank Limited", "Jagran Prakashan Limited", "Jagsonpal Pharmaceuticals Limited", "Jai Balaji Industries Limited", "Jai Corp Limited", "Jaihind Projects Limited", "Jain Studios Limited", "Jamna Auto Industries Limited", "Jash Engineering Limited", "Jayant Agro Organics Limited", "Jay Bharat Maruti Limited", "Jayaswal Neco Industries Limited", "Jayshree Tea & Industries Limited", "JB Chemicals & Pharmaceuticals Limited", "JBF Industries Limited", "JBM Auto Limited", "Johnson Controls – Hitachi Air Conditioning India Limited", "Jet Airways (India) Limited", "JHS Svendgaard Laboratories Limited", "JIK Industries Limited", "Jindal Photo Limited", "Jindal Poly Films Limited", "Jindal Saw Limited", "Jindal Steel & Power Limited", "Jindal Cotex Limited", "Jindal Drilling And Industries Limited", "Jindal Worldwide Limited", "Jain Irrigation Systems Limited", "Jain Irrigation Systems Limited", "JITF Infralogistics Limited", "Jiya Eco-Products Limited", "JK Cement Limited", "J.Kumar Infraprojects Limited", "JK Lakshmi Cement Limited", "JK Paper Limited", "JK Tyre & Industries Limited", "Jullundur Motor Agency (Delhi) Limited", "JMC Projects (India)  Limited", "JM Financial Limited", "JMT Auto Limited", "Jocil Limited", "Jaiprakash Associates Limited", "Jaypee Infratech Limited", "Jindal Poly Investment and Finance Company Limited", "Jaiprakash Power Ventures Limited", "Jindal Stainless Limited", "Jindal Stainless (Hisar) Limited", "JSW Energy Limited", "JSW Holdings Limited", "JSW Steel Limited", "Jtekt India Limited", "Jubilant Life Sciences Limited", "Jubilant Foodworks Limited", "Jubilant Industries Limited", "Jump Networks Limited", "Just Dial Limited", "JVL Agro Industries Limited", "Jyothy Labs Limited", "Kabra Extrusion Technik Limited", "Kajaria Ceramics Limited", "Kakatiya Cement Sugar & Industries Limited", "Kalpataru Power Transmission Limited", "Kalyani Commercials Limited", "Kalyani Forge Limited", "Kamat Hotels (I) Limited", "Kamdhenu Limited", "Kanani Industries Limited", "Kanoria Chemicals & Industries Limited", "Kansai Nerolac Paints Limited", "Karda Constructions Limited", "Karma Energy Limited", "Karur Vysya Bank Limited", "Kaushalya Infrastructure Development Corporation Limited", "Kavveri Telecom Products Limited", "Kaya Limited", "KCP Limited", "KCP Sugar and Industries Corporation Limited", "KDDL Limited", "KEC International Limited", "Kirloskar Electric Company Limited", "KEI Industries Limited", "Kellton Tech Solutions Limited", "Kennametal India Limited", "Kernex Microsystems (India) Limited", "Kesar Enterprises Limited", "Kesoram Industries Limited", "Keynote Financial Services Limited", "Karuturi Global Limited", "Khadim India Limited", "Khaitan (India) Limited", "Khandwala Securities Limited", "Kalyani Investment Company Limited", "Kilitch Drugs (India) Limited", "Kingfa Science & Technology (India) Limited", "KIOCL Limited", "Kiri Industries Limited", "Kirloskar Brothers Limited", "Kirloskar Oil Engines Limited", "Kirloskar Industries Limited", "Kitex Garments Limited", "Kewal Kiran Clothing Limited", "K.M.Sugar Mills Limited", "KNR Constructions Limited", "Kohinoor Foods Limited", "Kokuyo Camlin Limited", "Kolte – Patil Developers Limited", "Kopran Limited", "Kotak Mahindra Bank Limited", "Kothari Sugars And Chemicals Limited", "Kothari Petrochemicals Limited", "Kothari Products Limited", "KPIT Technologies Limited", "K.P.R. Mill Limited", "KRBL Limited", "Krebs Biochemicals and Industries Limited", "Kridhan Infra Limited", "Krishana Phoschem Limited", "Ksb Limited", "Kaveri Seed Company Limited", "KSS Limited", "KSK Energy Ventures Limited", "Kalyani Steels Limited", "Kesar Terminals & Infrastructure Limited", "The Karnataka Bank Limited", "Kuantum Papers Limited", "kwality limited", "L&T Finance Holdings Limited", "Lakshmi Precision Screws Limited", "Lakshmi Vilas Bank Limited", "Dr. Lal Path Labs Ltd.", "Lambodhara Textiles Limited", "La Opala RG Limited", "Lasa Supergenerics Limited", "Laurus Labs Limited", "Lakshmi Machine Works Limited", "Lemon Tree Hotels Limited", "Lakshmi Finance & Industrial Corporation Limited", "LG Balakrishnan & Bros Limited", "LGB Forge Limited", "Libas Designs Limited", "Libas Designs Limited", "Liberty Shoes Limited", "LIC Housing Finance Limited", "Lincoln Pharmaceuticals Limited", "Linc Pen & Plastics Limited", "Linde India Limited", "Lokesh Machines Limited", "Lotus Eye Hospital and Institute Limited", "Lovable Lingerie Limited", "Landmark Property Development Company Limited", "Lloyds Steels Industries Limited", "Larsen & Toubro Limited", "Larsen & Toubro Infotech Limited", "L&T Technology Services Limited", "Lumax Industries Limited", "Lumax Auto Technologies Limited", "Lupin Limited", "Lux Industries Limited", "Lyka Labs Limited", "Lypsa Gems & Jewellery Limited", "Mahindra & Mahindra Limited", "Mahindra & Mahindra Financial Services Limited", "Maan Aluminium Limited", "Madhav Marbles and Granites Limited", "Madhucon Projects Limited", "Madras Fertilizers Limited", "Magadh Sugar & Energy Limited", "Magma Fincorp Limited", "Magnum Ventures Limited", "Bank of Maharashtra", "Maha Rashtra Apex Corporation Limited", "Mahamaya Steel Industries Limited", "Maheshwari Logistics Limited", "Mahindra CIE Automotive Limited", "Mahindra Lifespace Developers Limited", "Mahindra Logistics Limited", "Maharashtra Scooters Limited", "Maharashtra Seamless Limited", "Maithan Alloys Limited", "Majesco Limited", "Malu Paper Mills Limited", "Manaksia Aluminium Company Limited", "Manaksia Coated Metals & Industries Limited", "Manaksia Limited", "Manaksia Steels Limited", "Manali Petrochemicals Limited", "Manappuram Finance Limited", "Mangalam Drugs And Organics Limited", "Mangalore Chemicals & Fertilizers Limited", "Mangalam Cement Limited", "Mangalam Timber Products Limited", "Man Industries (India) Limited", "Man Infraconstruction Limited", "Manpasand Beverages Limited", "Manugraph India Limited", "Maral Overseas Limited", "Marathon Nextgen Realty Limited", "Marico Limited", "Marksans Pharma Limited", "Maruti Suzuki India Limited", "MAS Financial Services Limited", "Mask Investments Limited", "Mastek Limited", "Matrimony.Com Limited", "Mawana Sugars Limited", "Max India Limited", "Max Ventures and Industries Limited", "Mayur Uniquoters Ltd", "Mazda Limited", "Madhya Bharat Agro Products Limited", "Mcnally Bharat Engineering Company Limited", "MBL Infrastructures Limited", "McDowell Holdings Limited", "United Spirits Limited", "Mcleod Russel India Limited", "Multi Commodity Exchange of India Limited", "Megasoft Limited", "Meghmani Organics Limited", "Melstar Information Technologies Limited", "Menon Bearings Limited", "MEP Infrastructure Developers Limited", "Mercator Limited", "Metalyst Forgings Limited", "Metkore Alloys & Industries Limited", "Metropolis Healthcare Limited", "Max Financial Services Limited", "Mahanagar Gas Limited", "Mahindra Holidays & Resorts India Limited", "MIC Electronics Limited", "Mishra Dhatu Nigam Limited", "Minda Corporation Limited", "Minda Industries Limited", "Mindteck (India) Limited", "MindTree Limited", "MIRC Electronics Limited", "Mirza International Limited", "MM Forgings Limited", "MMTC Limited", "Modi Rubber Limited", "Mohit Industries Limited", "Mohota Industries Limited", "MOIL Limited", "Mold-Tek Technologies Limited", "Mold-Tek Packaging Limited", "Monte Carlo Fashions Limited", "Morarjee Textiles Limited", "Morepen Laboratories Limited", "Motherson Sumi Systems Limited", "Motilal Oswal Financial Services Limited", "The Motor & General Finance Limited", "MphasiS Limited", "MPS Limited", "MRF Limited", "MRO-TEK Realty Limited", "Mangalore Refinery and Petrochemicals Limited", "MSP Steel & Power Limited", "Mstc Limited", "MT Educare Limited", "Mahanagar Telephone Nigam Limited", "Mukand Engineers Limited", "Mukand Limited", "Mukta Arts Limited", "Munjal Auto Industries Limited", "Munjal Showa Limited", "Murudeshwar Ceramics Limited", "Muthoot Capital Services Limited", "Muthoot Finance Limited", "MVL Limited", "NACL Industries Limited", "Nagarjuna Fertilizers and Chemicals Limited", "Nagarjuna Oil Refinery Limited", "Nagreeka Capital & Infrastructure Limited", "Nagreeka Exports Limited", "Nahar Capital and Financial Services Limited", "Nahar Industrial Enterprises Limited", "Nahar Poly Films Limited", "Nahar Spinning Mills Limited", "Natco Pharma Limited", "Nath Bio-Genes (India) Limited", "National Aluminium Company Limited", "National Steel And Agro Industries Limited", "Info Edge (India) Limited", "Navin Fluorine International Limited", "Navkar Corporation Limited", "Navneet Education Limited", "NBCC (India) Limited", "N. B. I. Industrial Finance Company Limited", "Nava Bharat Ventures Limited", "NCC Limited", "NCL Industries Limited", "Naga Dhunseri Group Limited", "Nandan Denim Limited", "New Delhi Television Limited", "North Eastern Carrying Corporation Limited", "Nectar Lifesciences Limited", "Nelcast Limited", "NELCO Limited", "Neogen Chemicals Limited", "Nesco Limited", "Nestle India Limited", "Network18 Media & Investments Limited", "Neuland Laboratories Limited", "Newgen Software Technologies Limited", "Next Mediaworks Limited", "National Fertilizers Limited", "Narayana Hrudayalaya Ltd.", "NHPC Limited", "The New India Assurance Company Limited", "NRB Industrial Bearings Limited", "NIIT Limited", "NIIT Technologies Limited", "Nila Infrastructures Limited", "Nila Spaces Limited", "Nilkamal Limited", "Indo-National Limited", "Niraj Ispat Industries Limited", "Nitco Limited", "Nitin Fire Protection Industries Limited", "Nitin Spinners Limited", "NK Industries Limited", "NLC India Limited", "NMDC Limited", "NOCIL Limited", "Noida Toll Bridge Company Limited", "Norben Tea & Exports Limited", "N R Agarwal Industries Limited", "NRB Bearing Limited", "Nalwa Sons Investments Limited", "Neueon Towers Limited", "NTPC Limited", "Nucleus Software Exports Limited", "NXTDIGITAL LIMITED", "Oriental Aromatics Limited", "Oberoi Realty Limited", "Oriental Carbon & Chemicals Limited", "Oracle Financial Services Software Limited", "Oil India Limited", "Oil Country Tubular Limited", "OCL Iron and Steel Limited", "Olectra Greentech Limited", "Omax Autos Limited", "Omaxe Limited", "Omkar Speciality Chemicals Limited", "OM Metals Infraprojects Limited", "Onelife Capital Advisors Limited", "One Point One Solutions Limited", "Oil & Natural Gas Corporation Limited", "OnMobile Global Limited", "Onward Technologies Limited", "Optiemus Infracom Limited", "Opto Circuits (India) Limited", "Orbit Exports Limited", "Oricon Enterprises Limited", "Orient Abrasives Limited", "Oriental Trimex Limited", "Oriental Bank of Commerce", "Orient Bell Limited", "Orient Cement Limited", "Orient Electric Limited", "Oriental Hotels Limited", "Orient Press Limited", "Orient Paper & Industries Limited", "Orient Refractories Limited", "The Orissa Minerals Development Company Limited", "Ortel Communications Limited", "Ortin Laboratories Limited", "Oswal Agro Mills Limited", "PAE Limited", "Page Industries Limited", "Paisalo Digital Limited", "Palash Securities Limited", "Palred Technologies Limited", "Panacea Biotec Limited", "Panama Petrochem Limited", "Huhtamaki PPL Limited", "Parabolic Drugs Limited", "Paramount Communications Limited", "Parag Milk Foods Limited", "Parsvnath Developers Limited", "Patel Engineering Limited", "Patel Integrated Logistics Limited", "Patspin India Limited", "PC Jeweller Limited", "Pudumjee Paper Products Limited", "Parenteral Drugs (India) Limited", "PDS Multinational Fashions Limited", "Pearl Polymers Limited", "Piramal Enterprises Limited", "Pennar Industries Limited", "Peninsula Land Limited", "Persistent Systems Limited", "Petron Engineering Construction Limited", "Petronet LNG Limited", "Power Finance Corporation Limited", "Pfizer Limited", "Prime Focus Limited", "PTC India Financial Services Limited", "PG Electroplast Limited", "Procter & Gamble Hygiene and Health Care Limited", "Procter & Gamble Health Limited", "Pearl Global Industries Limited", "Phillips Carbon Black Limited", "The Phoenix Mills Limited", "Pidilite Industries Limited", "PI Industries Limited", "Pilani Investment and Industries Corporation Limited", "PIL ITALICA LIFESTYLE LIMITED", "Pioneer Distilleries Limited", "Pioneer Embroideries Limited", "Piramal Phytocare Limited", "Pitti Engineering Limited", "The Peria Karamalai Tea & Produce Company Limited", "Plastiblends India Limited", "Punjab National Bank", "PNB Gilts Limited", "PNB Housing Finance Limited", "Pritish Nandy Communications Limited", "PNC Infratech Limited", "Poddar Housing and Development Limited", "Poddar Pigments Limited", "Pokarna Limited", "Polycab India Limited", "Poly Medicure Limited", "Polyplex Corporation Limited", "Ponni Sugars (Erode) Limited", "Power Grid Corporation of India Limited", "Power Mech Projects Limited", "PPAP Automotive Limited", "Prakash Pipes Limited", "Prabhat Dairy Limited", "Pradip Overseas Limited", "Prajay Engineers Syndicate Limited", "Praj Industries Limited", "Prakash Industries Limited", "Prakash Steelage Limited", "Praxis Home Retail Limited", "Precision Camshafts Limited", "Precot Meridian Limited", "Precision Wires India Limited", "Premier Explosives Limited", "Premier Limited", "Premier Polyfilm Limited", "Pressman Advertising Limited", "Prestige Estates Projects Limited", "Pricol Limited", "Prime Securities Limited", "Proseed India Limited", "Provogue (India) Limited", "Prozone Intu Properties Limited", "Prism Johnson Limited", "Punjab & Sind Bank", "PSL Limited", "PSP Projects Limited", "PTC India Limited", "PTL Enterprises Limited", "Punjab Chemicals & Crop Protection Limited", "Punj Lloyd Limited", "Puravankara Limited", "PVR Limited", "Quess Corp Limited", "Quick Heal Technologies Limited", "Radaan Mediaworks India Limited", "Radico Khaitan Limited", "Music Broadcast Limited", "Rain Industries Limited", "Rajesh Exports Limited", "Raj Rayon Industries Limited", "Rajshree Sugars & Chemicals Limited", "Raj Television Network Limited", "Rajvir Industries Limited", "Rallis India Limited", "Shree Rama Newsprint Limited", "Rama Steel Tubes Limited", "The Ramco Cements Limited", "Ramco Industries Limited", "Ramco Systems Limited", "Ramky Infrastructure Limited", "Ramsarup Industries Limited", "Rana Sugars Limited", "Rane Engine Valve Limited", "Rane Holdings Limited", "Ratnamani Metals & Tubes Limited", "Raymond Limited", "Rane Brake Lining Limited", "RBL Bank Limited", "Rashtriya Chemicals and Fertilizers Limited", "Reliance Communications Limited", "REC Limited", "Redington (India) Limited", "Refex Industries Limited", "Regency Ceramics Limited", "Relaxo Footwears Limited", "Reliance Capital Limited", "Reliance Industries Limited", "Religare Enterprises Limited", "Reliance Infrastructure Limited", "Remsons Industries Limited", "Shree Renuka Sugars Limited", "Repco Home Finance Limited", "Repro India Limited", "Responsive Industries Limited", "Revathi Equipment Limited", "Renaissance Global Limited", "Reliance Home Finance Limited", "Rico Auto Industries Limited", "Reliance Industrial Infrastructure Limited", "RITES Limited", "Ravi Kumar Distilleries Limited", "Ramkrishna Forgings Limited", "Radha Madhav Corporation Limited", "Rane (Madras) Limited", "Reliance Nippon Life Asset Management Limited", "Reliance Naval and Engineering Limited", "Rohit Ferro-Tech Limited", "Royal Orchid Hotels Limited", "Rollatainers Limited", "Rolta India Limited", "Rossell India Limited", "RPG Life Sciences Limited", "Reliance Power Limited", "R.P.P. Infra Projects Limited", "R. S. Software (India) Limited", "RSWM Limited", "R Systems International Limited", "RattanIndia Infrastructure Limited", "RattanIndia Power Limited", "The Ruby Mills Limited", "Ruchi Infrastructure Limited", "Ruchira Papers Limited", "Ruchi Soya Industries Limited", "Rupa & Company Limited", "Rushil Decor Limited", "Rail Vikas Nigam Limited", "Sab Events & Governance Now Media Limited", "Sri Adhikari Brothers Television Network Limited", "Sadbhav Engineering Limited", "Sadbhav Infrastructure Project Limited", "Safari Industries (India) Limited", "Sagardeep Alloys Limited", "Sagar Cements Limited", "Steel Authority of India Limited", "Sakar Healthcare Limited", "Sakthi Sugars Limited", "Saksoft Limited", "Sakuma Exports Limited", "Salasar Techno Engineering Limited", "Salona Cotspin Limited", "S.A.L. Steel Limited", "Salzer Electronics Limited", "Sambhaav Media Limited", "Sanco Industries Limited", "The Sandesh Limited", "Sandhar Technologies Limited", "Sangam (India) Limited", "Sanghi Industries Limited", "Sanghvi Forging and Engineering Limited", "Sanghvi Movers Limited", "Sanginita Chemicals Limited", "Sanofi India Limited", "Sanwaria Consumer Limited", "Sarda Energy & Minerals Limited", "Saregama India Limited", "Sarla Performance Fibers Limited", "Sasken Technologies Limited", "Sastasundar Ventures Limited", "Sathavahana Ispat Limited", "Satia Industries Limited", "Satin Creditcare Network Limited", "SBI Life Insurance Company Limited", "State Bank of India", "Stampede Capital Limited", "Schaeffler India Limited", "S Chand And Company Limited", "Schneider Electric Infrastructure Limited", "Shipping Corporation Of India Limited", "Som Distilleries & Breweries Limited", "Seamec Limited", "Selan Exploration Technology Limited", "SEL Manufacturing Company Limited", "S.E. Power Limited", "Sequent Scientific Limited", "Seshasayee Paper and Boards Limited", "Setco Automotive Limited", "Setubandhan Infrastructure Limited", "Seya Industries Limited", "Sezal Glass Limited", "Sheela Foam Limited", "STL Global Limited", "Shah Alloys Limited", "Shakti Pumps (India) Limited", "Shalby Limited", "Shalimar Paints Limited", "Shankara Building Products Limited", "Shanthi Gears Limited", "Sharda Cropchem Limited", "Sharda Motor Industries Limited", "Shemaroo Entertainment Limited", "Shilpa Medicare Limited", "Shirpur Gold Refinery Limited", "Shivam Autotech Limited", "Shiva Mills Limited", "Shiva Texyarn Limited", "S H Kelkar and Company Limited", "Shoppers Stop Limited", "Shree Digvijay Cement Co.Ltd", "SHREE CEMENT LIMITED", "Shree Pushkar Chemicals & Fertilisers Limited", "Shree Rama Multi-Tech Limited", "Shrenik Limited", "Shreyans Industries Limited", "Shreyas Shipping & Logistics Limited", "Shriram Pistons & Rings Limited", "Shriram City Union Finance Limited", "Shriram EPC Limited", "Shyam Century Ferrous Limited", "Shyam Telecom Limited", "Sicagen India Limited", "Sical Logistics Limited", "Siemens Limited", "Signet Industries Limited", "Standard Industries Limited", "SIL Investments Limited", "Simbhaoli Sugars Limited", "Simplex Infrastructures Limited", "Sintex Industries Limited", "Sirca Paints India Limited", "Security and Intelligence Services (India) Limited", "Siti Networks Limited", "Siyaram Silk Mills Limited", "SJVN Limited", "SKF India Limited", "SKIL Infrastructure Limited", "Skipper Limited", "SKM Egg Products Export (India) Limited", "Smartlink Holdings Limited", "SML Isuzu Limited", "Splendid Metal Products Limited", "SMS Lifesciences India Limited", "SMS Pharmaceuticals Limited", "Snowman Logistics Limited", "Sobha Limited", "Solara Active Pharma Sciences Limited", "Solar Industries India Limited", "Somany Ceramics Limited", "Soma Textiles & Industries Limited", "Somi Conveyor Beltings Limited", "Sonata Software Limited", "SORIL Infra Resources Limited", "Savita Oil Technologies Limited", "The South Indian Bank Limited", "South West Pinnacle Exploration Limited", "S. P. Apparels Limited", "Spandana Sphoorty Financial Limited", "Sun Pharma Advanced Research Company Limited", "Spacenet Enterprises India Limited", "Speciality Restaurants Limited", "Spencer's Retail Limited", "Spentex Industries Limited", "Southern Petrochemicals Industries Corporation  Limited", "SPICEJET LTD", "SPL Industries Limited", "SPML Infra Limited", "Sintex Plastics Technology Limited", "Shekhawati Poly-Yarn Limited", "Sreeleathers Limited", "SREI Infrastructure Finance Limited", "SRF Limited", "Sree Rayalaseema Hi-Strength Hypo Limited", "Srikalahasthi Pipes Limited", "Shriram Transport Finance Company Limited", "Steel Strips Wheels Limited", "Stampede Capital Limited", "Strides Pharma Science Limited", "Star Cement Limited", "Star Paper Mills Limited", "The State Trading Corporation of India Limited", "Steel City Securities Limited", "STEEL EXCHANGE INDIA LIMITED", "Stel Holdings Limited", "Sterling Tools Limited", "STI India Limited", "Sterlite Technologies Limited", "International Constructions Limited", "Subex Limited", "Subros Limited", "Sudarshan Chemical Industries Limited", "Sujana Universal Industries Limited", "Sumeet Industries Limited", "Sumit Woods Limited", "Summit Securities Limited", "Sundaram Clayton Limited", "Sundaram Multi Pap Limited", "Sundaram Finance Limited", "Sundaram Finance Holdings Limited", "Sundaram Brake Linings Limited", "Sundram Fasteners Limited", "Sunflag Iron And Steel Company Limited", "Sun Pharmaceutical Industries Limited", "Sunteck Realty Limited", "Sun TV Network Limited", "Superhouse Limited", "Super Spinning Mills Limited", "Supreme Petrochem Limited", "Suprajit Engineering Limited", "Supreme Industries Limited", "Supreme Infrastructure India Limited", "Surana Solar Limited", "Surana Telecom and Power Limited", "Suryalakshmi Cotton Mills Limited", "Surya Roshni Limited", "Sutlej Textiles and Industries Limited", "Suven Life Sciences Limited", "Suzlon Energy Limited", "Swan Energy Limited", "Swaraj Engines Limited", "Swelect Energy Systems Limited", "Sterling And Wilson Solar Limited", "Symphony Limited", "Syncom Healthcare Limited", "Syndicate Bank", "Syngene International Limited", "Tainwala Chemical and Plastic (I) Limited", "Taj GVK Hotels & Resorts Limited", "Take Solutions Limited", "Talbros Automotive Components Limited", "Talwalkars Better Value Fitness Limited", "Talwalkars Healthclubs Limited", "Tanla Solutions Limited", "Tantia Constructions Limited", "Tarapur Transformers Limited", "Tarmat Limited", "Tasty Bite Eatables Limited", "Tata Chemicals Limited", "Tata Coffee Limited", "Tata Communications Limited", "Tata Elxsi Limited", "Tata Global Beverages Limited", "Tata Investment Corporation Limited", "Tata Metaliks Limited", "Tata Motors Limited", "Tata Motors Limited", "Tata Power Company Limited", "Tata Steel Limited", "Tata Steel Bsl Limited", "Tata Steel Long Products Limited", "Tribhovandas Bhimji Zaveri Limited", "Transport Corporation of India Limited", "TCI Developers Limited", "TCI Express Limited", "TCI Finance Limited", "TCNS Clothing Co. Limited", "TCPL Packaging Limited", "Tata Consultancy Services Limited", "TD Power Systems Limited", "Teamlease Services Limited", "Techindia Nirman Limited", "Tech Mahindra Limited", "Techno Electric & Engineering Company Limited", "Technofab Engineering Limited", "Tejas Networks Limited", "Tera Software Limited", "Texmaco Infrastructure & Holdings Limited", "Texmo Pipes and Products Limited", "Texmaco Rail & Engineering Limited", "Texmaco Rail & Engineering Limited", "Tourism Finance Corporation of India Limited", "Transwarranty Finance Limited", "TGB Banquets And Hotels Limited", "TGB Banquets And Hotels Limited", "Thangamayil Jewellery Limited", "The Investment Trust Of India Limited", "Themis Medicare Limited", "Thermax Limited", "Thiru Arooran Sugars Limited", "Thomas Cook  (India)  Limited", "Thomas Scott (India) Limited", "Thyrocare Technologies Limited", "Tilaknagar Industries Limited", "Tide Water Oil Company (India) Limited", "Technocraft Industries (India) Limited", "Tube Investments of India Limited", "Tijaria Polypipes Limited", "TIL Limited", "Times Guaranty Limited", "Time Technoplast Limited", "Timken India Limited", "The Tinplate Company of India Limited", "TIPS Industries Limited", "Thirumalai Chemicals Limited", "Titan Company Limited", "The Mandhana Retail Ventures Limited", "Tamilnadu PetroProducts Limited", "Tamil Nadu Newsprint & Papers Limited", "Tamilnadu Telecommunication Limited", "Tokyo Plast International Limited", "Torrent Pharmaceuticals Limited", "Torrent Power Limited", "TPL Plastech Limited", "Tree House Education & Accessories Limited", "TREJHARA SOLUTIONS LIMITED", "Trent Limited", "TRF Limited", "Trident Limited", "Trigyn Technologies Limited", "Transformers And Rectifiers (India) Limited", "Triveni Turbine Limited", "Triveni Engineering & Industries Limited", "TTK Healthcare Limited", "TTK Prestige Limited", "T T Limited", "Tata Teleservices (Maharashtra) Limited", "TV18 Broadcast Limited", "TVS Electronics Limited", "TVS Motor Company Limited", "TVS Srichakra Limited", "TV Today Network Limited", "TV Vision Limited", "Titagarh Wagons Limited", "United Breweries Limited", "Ucal Fuel Systems Limited", "UCO Bank", "UFLEX Limited", "UFO Moviez India Limited", "The Ugar Sugar Works Limited", "Ujaas Energy Limited", "Ujjivan Financial Services Limited", "UltraTech Cement Limited", "Umang Dairies Limited", "Usha Martin Education & Solutions Limited", "Unichem Laboratories Limited", "Uniphos Enterprises Limited", "Union Bank of India", "Uniply Industries Limited", "Unitech Limited", "United Bank of India", "The United Nilgiri Tea Estates Company Limited", "Unity Infraprojects Limited", "Universal Cables Limited", "UPL Limited", "Urja Global Limited", "Usha Martin Limited", "Uttam Galva Steels Limited", "Uttam Sugar Mills Limited", "Uttam Value Steels Limited", "V2 Retail Limited", "Vadilal Industries Limited", "Vaibhav Global Limited", "Vakrangee Limited", "Vardhman Acrylics Limited", "Vardhman Polytex Limited", "Varroc Engineering Limited", "Vascon Engineers Limited", "Vaswani Industries Limited", "Varun Beverages Limited", "Vedanta Limited", "Venky's (India) Limited", "Venus Remedies Limited", "Vesuvius India Limited", "Veto Switchgears And Cables Limited", "V-Guard Industries Limited", "Vardhman Holdings Limited", "Viceroy Hotels Limited", "Videocon Industries Limited", "Vidhi Specialty Food Ingredients Limited", "Viji Finance Limited", "Vikas EcoTech Limited", "Vikas Multicorp Limited", "Vikas Proppant & Granite Limited", "Vikas WSP Limited", "Vimal Oil & Foods Limited", "Vimta Labs Limited", "Vinati Organics Limited", "Vindhya Telelinks Limited", "Vinyl Chemicals (India) Limited", "VIP Clothing Limited", "VIP Industries Limited", "Vipul Limited", "Visaka Industries Limited", "Visa Steel Limited", "Visesh Infotecnics Limited", "Vishal Fabrics Limited", "Vishnu Chemicals Limited", "Vishwaraj Sugar Industries Limited", "Visagar Polytex Limited", "Vivimed Labs Limited", "VLS Finance Limited", "V-Mart Retail Limited", "Voltamp Transformers Limited", "Voltas Limited", "VRL Logistics Limited", "Vardhman Special Steels Limited", "VST Industries Limited", "V.S.T Tillers Tractors Limited", "Vardhman Textiles Limited", "VA Tech Wabag Limited", "WABCO India Limited", "Walchandnagar Industries Limited", "Wanbury Limited", "Waterbase Limited", "Websol Energy System Limited", "Weizmann Forex Limited", "Weizmann Limited", "Welspun Corp Limited", "Welspun Enterprises Limited", "Welspun Investments and Commercials Limited", "Welspun India Limited", "Wendt (India) Limited", "Westlife Development Ltd", "Wheels India Limited", "Whirlpool of India Limited", "Williamson Magor & Company Limited", "Windsor Machines Limited", "Winsome Yarns Limited", "The Western India Plywoods Limited", "Wipro Limited", "Wockhardt Limited", "Wonderla Holidays Limited", "W S Industries (I) Limited", "West Coast Paper Mills Limited", "Xchanging Solutions Limited", "Xelpmoc Design And Tech Limited", "XL Energy Limited", "Xpro India Limited", "Yes Bank Limited", "Zee Entertainment Enterprises Limited", "Zee Learn Limited", "Zee Media Corporation Limited", "Zenith Birla (India) Limited", "Zenith Exports Limited", "Zensar Technologies Limited", "Zen Technologies Limited", "Zicom Electronic Security Systems Limited", "Zodiac Clothing Company Limited", "Zodiac JRD- MKJ Limited", "Zota Health Care LImited", "Zuari Agro Chemicals Limited", "Zuari Global Limited", "Zydus Wellness Limited"];

const indian_symbols_array = ["20MICRONS", "21STCENMGM", "3IINFOTECH", "3MINDIA", "3PLAND", "5PAISA", "63MOONS", "A2ZINFRA", "AARTIDRUGS", "AARTIIND", "AARVEEDEN", "AAVAS", "ABAN", "ABB", "ABBOTINDIA", "ABCAPITAL", "ABFRL", "ABMINTLTD", "ACC", "ACCELYA", "ACE", "ADANIENT", "ADANIGAS", "ADANIGREEN", "ADANIPORTS", "ADANIPOWER", "ADANITRANS", "ADFFOODS", "ADHUNIK", "ADHUNIKIND", "ADLABS", "ADORWELD", "ADROITINFO", "ADSL", "ADVANIHOTR", "ADVENZYMES", "AEGISCHEM", "AFFLE", "AGARIND", "AGCNET", "AGRITECH", "AGROPHOS", "AHLEAST", "AHLUCONT", "AHLWEST", "AIAENG", "AIONJSW", "AIRAN", "AJANTPHARM", "AJMERA", "AKASH", "AKSHARCHEM", "AKSHOPTFBR", "AKZOINDIA", "ALANKIT", "ALBERTDAVD", "ALBK", "ALCHEM", "ALEMBICLTD", "ALICON", "ALKALI", "ALKEM", "ALKYLAMINE", "ALLCARGO", "ALLSEC", "ALMONDZ", "ALOKTEXT", "ALPA", "ALPHAGEO", "ALPSINDUS", "AMARAJABAT", "AMBER", "AMBIKCO", "AMBUJACEM", "AMDIND", "AMJLAND", "AMRUTANJAN", "ANANTRAJ", "ANDHRABANK", "ANDHRACEMT", "ANDHRSUGAR", "ANIKINDS", "ANKITMETAL", "ANSALAPI", "ANSALHSG", "ANTGRAPHIC", "ANUP", "APARINDS", "APCL", "APCOTEXIND", "APEX", "APLAPOLLO", "APLLTD", "APOLLO", "APOLLOHOSP", "APOLLOPIPE", "APOLLOTYRE", "APOLSINHOT", "APTECHT", "ARCHIDPLY", "ARCHIES", "ARCOTECH", "ARENTERP", "ARIES", "ARIHANT", "ARIHANTSUP", "ARMANFIN", "AROGRANITE", "ARROWGREEN", "ARROWTEX", "ARSHIYA", "ARSSINFRA", "ARVIND", "ARVINDFASN", "ARVSMART", "ASAHIINDIA", "ASAHISONG", "ASAL", "ASHAPURMIN", "ASHIANA", "ASHIMASYN", "ASHOKA", "ASHOKLEY", "ASIANHOTNR", "ASIANPAINT", "ASIANTILES", "ASPINWALL", "ASTEC", "ASTERDM", "ASTRAL", "ASTRAMICRO", "ASTRAZEN", "ASTRON", "ATFL", "ATLANTA", "ATLASCYCLE", "ATUL", "ATULAUTO", "AUBANK", "AURIONPRO", "AUROPHARMA", "AUSOMENT", "AUTOAXLES", "AUTOIND", "AUTOLITIND", "AVADHSUGAR", "AVANTIFEED", "AVTNPL", "AXISBANK", "AXISCADES", "AYMSYNTEX", "BAGFILMS", "BAJAJ-AUTO", "BAJAJCON", "BAJAJELEC", "BAJAJFINSV", "BAJAJHIND", "BAJAJHLDNG", "BAJFINANCE", "BALAJITELE", "BALAMINES", "BALAXI", "BALKRISHNA", "BALKRISIND", "BALLARPUR", "BALMLAWRIE", "BALPHARMA", "BALRAMCHIN", "BANARBEADS", "BANARISUG", "BANCOINDIA", "BANDHANBNK", "BANG", "BANKBARODA", "BANKINDIA", "BANSWRAS", "BARTRONICS", "BASF", "BASML", "BATAINDIA", "BAYERCROP", "BBL", "BBTC", "BCG", "BCP", "BDL", "BEARDSELL", "BEDMUTHA", "BEL", "BEML", "BEPL", "BERGEPAINT", "BFINVEST", "BFUTILITIE", "BGLOBAL", "BGRENERGY", "BHAGERIA", "BHAGYANGR", "BHAGYAPROP", "BHANDARI", "BHARATFORG", "BHARATGEAR", "BHARATRAS", "BHARATWIRE", "BHARTIARTL", "BHEL", "BIGBLOC", "BIL", "BILENERGY", "BINDALAGRO", "BIOCON", "BIOFILCHEM", "BIRLACABLE", "BIRLACORPN", "BIRLAMONEY", "BKMINDST", "BLBLIMITED", "BLISSGVS", "BLKASHYAP", "BLS", "BLUEBLENDS", "BLUECOAST", "BLUEDART", "BLUESTARCO", "BODALCHEM", "BOMDYEING", "BOROSIL", "BOSCHLTD", "BPCL", "BPL", "BRFL", "BRIGADE", "BRITANNIA", "BRNL", "BROOKS", "BSE", "BSELINFRA", "BSL", "BSOFT", "BURNPUR", "BUTTERFLY", "BVCL", "BYKE", "CADILAHC", "CALSOFT", "CAMLINFINE", "CANBK", "CANDC", "CANFINHOME", "CANTABIL", "CAPACITE", "CAPLIPOINT", "CAPTRUST", "CARBORUNIV", "CAREERP", "CARERATING", "CASTEXTECH", "CASTROLIND", "CCHHL", "CCL", "CDSL", "CEATLTD", "CEBBCO", "CELEBRITY", "CELESTIAL", "CENTENKA", "CENTEXT", "CENTRALBK", "CENTRUM", "CENTUM", "CENTURYPLY", "CENTURYTEX", "CERA", "CEREBRAINT", "CESC", "CESCVENT", "CGCL", "CGPOWER", "CHALET", "CHAMBLFERT", "CHEMFAB", "CHENNPETRO", "CHOLAFIN", "CHOLAHLDNG", "CHROMATIC", "CIGNITITEC", "CIMMCO", "CINELINE", "CINEVISTA", "CIPLA", "CKFSL", "CLEDUCATE", "CLNINDIA", "CMICABLES", "CNOVAPETRO", "COALINDIA", "COCHINSHIP", "COFFEEDAY", "COLPAL", "COMPINFO", "COMPUSOFT", "CONCOR", "CONFIPET", "CONSOFINVT", "CONTROLPR", "CORALFINAC", "CORDSCABLE", "COROMANDEL", "CORPBANK", "COSMOFILMS", "COUNCODOS", "COX&KINGS", "CREATIVE", "CREATIVEYE", "CREDITACC", "CREST", "CRISIL", "CROMPTON", "CTE", "CUB", "CUBEXTUB", "CUMMINSIND", "CUPID", "CURATECH", "CYBERMEDIA", "CYBERTECH", "CYIENT", "DAAWAT", "DABUR", "DALBHARAT", "DALMIASUG", "DAMODARIND", "DATAMATICS", "DBCORP", "DBL", "DBREALTY", "DBSTOCKBRO", "DCAL", "DCBBANK", "DCM", "DCMFINSERV", "DCMNVL", "DCMSHRIRAM", "DCW", "DECCANCE", "DEEPAKFERT", "DEEPAKNTR", "DEEPIND", "DELTACORP", "DELTAMAGNT", "DEN", "DENORA", "DFMFOODS", "DGCONTENT", "DHAMPURSUG", "DHANBANK", "DHANUKA", "DHARSUGAR", "DHFL", "DHUNINV", "DIAMONDYD", "DIAPOWER", "DICIND", "DIGISPICE", "DIGJAMLTD", "DISHTV", "DIVISLAB", "DIXON", "DLF", "DLINKINDIA", "DMART", "DNAMEDIA", "DOLAT", "DOLLAR", "DONEAR", "DPSCLTD", "DQE", "DREDGECORP", "DRREDDY", "DSSL", "DTIL", "DUCON", "DVL", "DWARKESH", "DYNAMATECH", "DYNPRO", "EASTSILK", "EASUNREYRL", "ECLERX", "EDELWEISS", "EDL", "EDUCOMP", "EICHERMOT", "EIDPARRY", "EIHAHOTELS", "EIHOTEL", "EIMCOELECO", "EKC", "ELECON", "ELECTCAST", "ELECTHERM", "ELGIEQUIP", "ELGIRUBCO", "EMAMILTD", "EMAMIPAP", "EMAMIREAL", "EMCO", "EMKAY", "EMMBI", "ENDURANCE", "ENERGYDEV", "ENGINERSIN", "ENIL", "EON", "EQUITAS", "ERIS", "EROSMEDIA", "ESABINDIA", "ESCORTS", "ESSARSHPNG", "ESSELPACK", "ESTER", "EUROCERA", "EUROMULTI", "EUROTEXIND", "EVEREADY", "EVERESTIND", "EXCEL", "EXCELINDUS", "EXIDEIND", "EXPLEOSOL", "FACT", "FAIRCHEM", "FCL", "FCONSUMER", "FCSSOFT", "FDC", "FEDERALBNK", "FEL", "FELDVR", "FIEMIND", "FILATEX", "FINCABLES", "FINEORG", "FINPIPE", "FLEXITUFF", "FLFL", "FLUOROCHEM", "FMGOETZE", "FMNL", "FORCEMOT", "FORTIS", "FOSECOIND", "FRETAIL", "FSC", "FSL", "GABRIEL", "GAEL", "GAIL", "GAL", "GALAXYSURF", "GALLANTT", "GALLISPAT", "GAMMNINFRA", "GANDHITUBE", "GANECOS", "GANESHHOUC", "GANGESSECU", "GANGOTRI", "GARDENSILK", "GARFIBRES", "GATI", "GAYAHWS", "GAYAPROJ", "GDL", "GEECEE", "GENESYS", "GENUSPAPER", "GENUSPOWER", "GEOJITFSL", "GEPIL", "GESHIP", "GET&D", "GFLLIMITED", "GHCL", "GICHSGFIN", "GICRE", "GILLANDERS", "GILLETTE", "GINNIFILA", "GIPCL", "GISOLUTION", "GKWLIMITED", "GLAXO", "GLENMARK", "GLFL", "GLOBALVECT", "GLOBOFFS", "GLOBUSSPR", "GMBREW", "GMDCLTD", "GMMPFAUDLR", "GMRINFRA", "GNA", "GNFC", "GOACARBON", "GOCLCORP", "GODFRYPHLP", "GODREJAGRO", "GODREJCP", "GODREJIND", "GODREJPROP", "GOENKA", "GOKEX", "GOKUL", "GOKULAGRO", "GOLDENTOBC", "GOLDIAM", "GOLDTECH", "GOODLUCK", "GPIL", "GPPL", "GPTINFRA", "GRANULES", "GRAPHITE", "GRASIM", "GRAVITA", "GREAVESCOT", "GREENLAM", "GREENPANEL", "GREENPLY", "GREENPOWER", "GRINDWELL", "GROBTEA", "GRPLTD", "GRSE", "GSCLCEMENT", "GSFC", "GSKCONS", "GSPL", "GSS", "GTL", "GTLINFRA", "GTNIND", "GTNTEX", "GTPL", "GUFICBIO", "GUJALKALI", "GUJAPOLLO", "GUJGASLTD", "GUJRAFFIA", "GULFOILLUB", "GULFPETRO", "GULPOLY", "GVKPIL", "HAL", "HARITASEAT", "HARRMALAYA", "HATHWAY", "HATSUN", "HAVELLS", "HAVISHA", "HBLPOWER", "HBSL", "HCC", "HCG", "HCL-INSYS", "HCLTECH", "HDFC", "HDFCAMC", "HDFCBANK", "HDFCLIFE", "HDIL", "HEG", "HEIDELBERG", "HERCULES", "HERITGFOOD", "HEROMOTOCO", "HESTERBIO", "HEXATRADEX", "HEXAWARE", "HFCL", "HGINFRA", "HGS", "HIKAL", "HIL", "HILTON", "HIMATSEIDE", "HINDALCO", "HINDCOMPOS", "HINDCOPPER", "HINDMOTORS", "HINDNATGLS", "HINDOILEXP", "HINDPETRO", "HINDSYNTEX", "HINDUNILVR", "HINDZINC", "HIRECT", "HISARMETAL", "HITECH", "HITECHCORP", "HITECHGEAR", "HMT", "HMVL", "HNDFDS", "HONAUT", "HONDAPOWER", "HOTELEELA", "HOTELRUGBY", "HOVS", "HPL", "HSCL", "HSIL", "HTMEDIA", "HUBTOWN", "HUDCO", "IBREALEST", "IBULHSGFIN", "IBULISL", "IBVENTURES", "ICICIBANK", "ICICIGI", "ICICIPRULI", "ICIL", "ICRA", "IDBI", "IDEA", "IDFC", "IDFCFIRSTB", "IEX", "IFBAGRO", "IFBIND", "IFCI", "IFGLEXPOR", "IGARASHI", "IGL", "IGPL", "IIFL", "IIFLSEC", "IIFLWAM", "IITL", "IL&FSENGG", "IL&FSTRANS", "IMFA", "IMPAL", "IMPEXFERRO", "INDBANK", "INDHOTEL", "INDIACEM", "INDIAGLYCO", "INDIAMART", "INDIANB", "INDIANCARD", "INDIANHUME", "INDIGO", "INDLMETER", "INDNIPPON", "INDOCO", "INDORAMA", "INDOSOLAR", "INDOSTAR", "INDOTECH", "INDOTHAI", "INDOWIND", "INDRAMEDCO", "INDSWFTLAB", "INDSWFTLTD", "INDTERRAIN", "INDUSINDBK", "INEOSSTYRO", "INFIBEAM", "INFOBEAN", "INFRATEL", "INFY", "INGERRAND", "INOXLEISUR", "INOXWIND", "INSECTICID", "INSPIRISYS", "INTEGRA", "INTELLECT", "INTENTECH", "INVENTURE", "IOB", "IOC", "IOLCP", "IPAPPM", "IPCALAB", "IRB", "IRCON", "IRCTC", "ISEC", "ISFT", "ISMTLTD", "ITC", "ITDC", "ITDCEM", "ITI", "IVC", "IVP", "IVRCLINFRA", "IZMO", "J&KBANK", "JAGRAN", "JAGSNPHARM", "JAIBALAJI", "JAICORPLTD", "JAIHINDPRO", "JAINSTUDIO", "JAMNAAUTO", "JASH", "JAYAGROGN", "JAYBARMARU", "JAYNECOIND", "JAYSREETEA", "JBCHEPHARM", "JBFIND", "JBMA", "JCHAC", "JETAIRWAYS", "JHS", "JIKIND", "JINDALPHOT", "JINDALPOLY", "JINDALSAW", "JINDALSTEL", "JINDCOT", "JINDRILL", "JINDWORLD", "JISLDVREQS", "JISLJALEQS", "JITFINFRA", "JIYAECO", "JKCEMENT", "JKIL", "JKLAKSHMI", "JKPAPER", "JKTYRE", "JMA", "JMCPROJECT", "JMFINANCIL", "JMTAUTOLTD", "JOCIL", "JPASSOCIAT", "JPINFRATEC", "JPOLYINVST", "JPPOWER", "JSL", "JSLHISAR", "JSWENERGY", "JSWHL", "JSWSTEEL", "JTEKTINDIA", "JUBILANT", "JUBLFOOD", "JUBLINDS", "JUMPNET", "JUSTDIAL", "JVLAGRO", "JYOTHYLAB", "KABRAEXTRU", "KAJARIACER", "KAKATCEM", "KALPATPOWR", "KALYANI", "KALYANIFRG", "KAMATHOTEL", "KAMDHENU", "KANANIIND", "KANORICHEM", "KANSAINER", "KARDA", "KARMAENG", "KARURVYSYA", "KAUSHALYA", "KAVVERITEL", "KAYA", "KCP", "KCPSUGIND", "KDDL", "KEC", "KECL", "KEI", "KELLTONTEC", "KENNAMET", "KERNEX", "KESARENT", "KESORAMIND", "KEYFINSERV", "KGL", "KHADIM", "KHAITANLTD", "KHANDSE", "KICL", "KILITCH", "KINGFA", "KIOCL", "KIRIINDUS", "KIRLOSBROS", "KIRLOSENG", "KIRLOSIND", "KITEX", "KKCL", "KMSUGAR", "KNRCON", "KOHINOOR", "KOKUYOCMLN", "KOLTEPATIL", "KOPRAN", "KOTAKBANK", "KOTARISUG", "KOTHARIPET", "KOTHARIPRO", "KPITTECH", "KPRMILL", "KRBL", "KREBSBIO", "KRIDHANINF", "KRISHANA", "KSB", "KSCL", "KSERASERA", "KSK", "KSL", "KTIL", "KTKBANK", "KUANTUM", "KWALITY", "L&TFH", "LAKPRE", "LAKSHVILAS", "LALPATHLAB", "LAMBODHARA", "LAOPALA", "LASA", "LAURUSLABS", "LAXMIMACH", "LEMONTREE", "LFIC", "LGBBROSLTD", "LGBFORGE", "LIBAS", "LIBAS", "LIBERTSHOE", "LICHSGFIN", "LINCOLN", "LINCPEN", "LINDEINDIA", "LOKESHMACH", "LOTUSEYE", "LOVABLE", "LPDC", "LSIL", "LT", "LTI", "LTTS", "LUMAXIND", "LUMAXTECH", "LUPIN", "LUXIND", "LYKALABS", "LYPSAGEMS", "M&M", "M&MFIN", "MAANALU", "MADHAV", "MADHUCON", "MADRASFERT", "MAGADSUGAR", "MAGMA", "MAGNUM", "MAHABANK", "MAHAPEXLTD", "MAHASTEEL", "MAHESHWARI", "MAHINDCIE", "MAHLIFE", "MAHLOG", "MAHSCOOTER", "MAHSEAMLES", "MAITHANALL", "MAJESCO", "MALUPAPER", "MANAKALUCO", "MANAKCOAT", "MANAKSIA", "MANAKSTEEL", "MANALIPETC", "MANAPPURAM", "MANGALAM", "MANGCHEFER", "MANGLMCEM", "MANGTIMBER", "MANINDS", "MANINFRA", "MANPASAND", "MANUGRAPH", "MARALOVER", "MARATHON", "MARICO", "MARKSANS", "MARUTI", "MASFIN", "MASKINVEST", "MASTEK", "MATRIMONY", "MAWANASUG", "MAXINDIA", "MAXVIL", "MAYURUNIQ", "MAZDA", "MBAPL", "MBECL", "MBLINFRA", "MCDHOLDING", "MCDOWELL-N", "MCLEODRUSS", "MCX", "MEGASOFT", "MEGH", "MELSTAR", "MENONBE", "MEP", "MERCATOR", "METALFORGE", "METKORE", "METROPOLIS", "MFSL", "MGL", "MHRIL", "MIC", "MIDHANI", "MINDACORP", "MINDAIND", "MINDTECK", "MINDTREE", "MIRCELECTR", "MIRZAINT", "MMFL", "MMTC", "MODIRUBBER", "MOHITIND", "MOHOTAIND", "MOIL", "MOLDTECH", "MOLDTKPAC", "MONTECARLO", "MORARJEE", "MOREPENLAB", "MOTHERSUMI", "MOTILALOFS", "MOTOGENFIN", "MPHASIS", "MPSLTD", "MRF", "MRO-TEK", "MRPL", "MSPL", "MSTCLTD", "MTEDUCARE", "MTNL", "MUKANDENGG", "MUKANDLTD", "MUKTAARTS", "MUNJALAU", "MUNJALSHOW", "MURUDCERA", "MUTHOOTCAP", "MUTHOOTFIN", "MVL", "NACLIND", "NAGAFERT", "NAGAROIL", "NAGREEKCAP", "NAGREEKEXP", "NAHARCAP", "NAHARINDUS", "NAHARPOLY", "NAHARSPING", "NATCOPHARM", "NATHBIOGEN", "NATIONALUM", "NATNLSTEEL", "NAUKRI", "NAVINFLUOR", "NAVKARCORP", "NAVNETEDUL", "NBCC", "NBIFIN", "NBVENTURES", "NCC", "NCLIND", "NDGL", "NDL", "NDTV", "NECCLTD", "NECLIFE", "NELCAST", "NELCO", "NEOGEN", "NESCO", "NESTLEIND", "NETWORK18", "NEULANDLAB", "NEWGEN", "NEXTMEDIA", "NFL", "NH", "NHPC", "NIACL", "NIBL", "NIITLTD", "NIITTECH", "NILAINFRA", "NILASPACES", "NILKAMAL", "NIPPOBATRY", "NIRAJISPAT", "NITCO", "NITINFIRE", "NITINSPIN", "NKIND", "NLCINDIA", "NMDC", "NOCIL", "NOIDATOLL", "NORBTEAEXP", "NRAIL", "NRBBEARING", "NSIL", "NTL", "NTPC", "NUCLEUS", "NXTDIGITAL", "OAL", "OBEROIRLTY", "OCCL", "OFSS", "OIL", "OILCOUNTUB", "OISL", "OLECTRA", "OMAXAUTO", "OMAXE", "OMKARCHEM", "OMMETALS", "ONELIFECAP", "ONEPOINT", "ONGC", "ONMOBILE", "ONWARDTEC", "OPTIEMUS", "OPTOCIRCUI", "ORBTEXP", "ORICONENT", "ORIENTABRA", "ORIENTALTL", "ORIENTBANK", "ORIENTBELL", "ORIENTCEM", "ORIENTELEC", "ORIENTHOT", "ORIENTLTD", "ORIENTPPR", "ORIENTREF", "ORISSAMINE", "ORTEL", "ORTINLABSS", "OSWALAGRO", "PAEL", "PAGEIND", "PAISALO", "PALASHSECU", "PALREDTEC", "PANACEABIO", "PANAMAPET", "PAPERPROD", "PARABDRUGS", "PARACABLES", "PARAGMILK", "PARSVNATH", "PATELENG", "PATINTLOG", "PATSPINLTD", "PCJEWELLER", "PDMJEPAPER", "PDPL", "PDSMFL", "PEARLPOLY", "PEL", "PENIND", "PENINLAND", "PERSISTENT", "PETRONENGG", "PETRONET", "PFC", "PFIZER", "PFOCUS", "PFS", "PGEL", "PGHH", "PGHL", "PGIL", "PHILIPCARB", "PHOENIXLTD", "PIDILITIND", "PIIND", "PILANIINVS", "PILITA", "PIONDIST", "PIONEEREMB", "PIRPHYTO", "PITTIENG", "PKTEA", "PLASTIBLEN", "PNB", "PNBGILTS", "PNBHOUSING", "PNC", "PNCINFRA", "PODDARHOUS", "PODDARMENT", "POKARNA", "POLYCAB", "POLYMED", "POLYPLEX", "PONNIERODE", "POWERGRID", "POWERMECH", "PPAP", "PPL", "PRABHAT", "PRADIP", "PRAENG", "PRAJIND", "PRAKASH", "PRAKASHSTL", "PRAXIS", "PRECAM", "PRECOT", "PRECWIRE", "PREMEXPLN", "PREMIER", "PREMIERPOL", "PRESSMN", "PRESTIGE", "PRICOLLTD", "PRIMESECU", "PROSEED", "PROVOGE", "PROZONINTU", "PRSMJOHNSN", "PSB", "PSL", "PSPPROJECT", "PTC", "PTL", "PUNJABCHEM", "PUNJLLOYD", "PURVA", "PVR", "QUESS", "QUICKHEAL", "RADAAN", "RADICO", "RADIOCITY", "RAIN", "RAJESHEXPO", "RAJRAYON", "RAJSREESUG", "RAJTV", "RAJVIR", "RALLIS", "RAMANEWS", "RAMASTEEL", "RAMCOCEM", "RAMCOIND", "RAMCOSYS", "RAMKY", "RAMSARUP", "RANASUG", "RANEENGINE", "RANEHOLDIN", "RATNAMANI", "RAYMOND", "RBL", "RBLBANK", "RCF", "RCOM", "RECLTD", "REDINGTON", "REFEX", "REGENCERAM", "RELAXO", "RELCAPITAL", "RELIANCE", "RELIGARE", "RELINFRA", "REMSONSIND", "RENUKA", "REPCOHOME", "REPRO", "RESPONIND", "REVATHI", "RGL", "RHFL", "RICOAUTO", "RIIL", "RITES", "RKDL", "RKFORGE", "RMCL", "RML", "RNAM", "RNAVAL", "ROHITFERRO", "ROHLTD", "ROLLT", "ROLTA", "ROSSELLIND", "RPGLIFE", "RPOWER", "RPPINFRA", "RSSOFTWARE", "RSWM", "RSYSTEMS", "RTNINFRA", "RTNPOWER", "RUBYMILLS", "RUCHINFRA", "RUCHIRA", "RUCHISOYA", "RUPA", "RUSHIL", "RVNL", "SABEVENTS", "SABTN", "SADBHAV", "SADBHIN", "SAFARI", "SAGARDEEP", "SAGCEM", "SAIL", "SAKAR", "SAKHTISUG", "SAKSOFT", "SAKUMA", "SALASAR", "SALONA", "SALSTEEL", "SALZERELEC", "SAMBHAAV", "SANCO", "SANDESH", "SANDHAR", "SANGAMIND", "SANGHIIND", "SANGHVIFOR", "SANGHVIMOV", "SANGINITA", "SANOFI", "SANWARIA", "SARDAEN", "SAREGAMA", "SARLAPOLY", "SASKEN", "SASTASUNDR", "SATHAISPAT", "SATIA", "SATIN", "SBILIFE", "SBIN", "SCAPDVR", "SCHAEFFLER", "SCHAND", "SCHNEIDER", "SCI", "SDBL", "SEAMECLTD", "SELAN", "SELMCL", "SEPOWER", "SEQUENT", "SESHAPAPER", "SETCO", "SETUINFRA", "SEYAIND", "SEZAL", "SFL", "SGL", "SHAHALLOYS", "SHAKTIPUMP", "SHALBY", "SHALPAINTS", "SHANKARA", "SHANTIGEAR", "SHARDACROP", "SHARDAMOTR", "SHEMAROO", "SHILPAMED", "SHIRPUR-G", "SHIVAMAUTO", "SHIVAMILLS", "SHIVATEX", "SHK", "SHOPERSTOP", "SHREDIGCEM", "SHREECEM", "SHREEPUSHK", "SHREERAMA", "SHRENIK", "SHREYANIND", "SHREYAS", "SHRIPISTON", "SHRIRAMCIT", "SHRIRAMEPC", "SHYAMCENT", "SHYAMTEL", "SICAGEN", "SICAL", "SIEMENS", "SIGIND", "SIL", "SILINV", "SIMBHALS", "SIMPLEXINF", "SINTEX", "SIRCA", "SIS", "SITINET", "SIYSIL", "SJVN", "SKFINDIA", "SKIL", "SKIPPER", "SKMEGGPROD", "SMARTLINK", "SMLISUZU", "SMPL", "SMSLIFE", "SMSPHARMA", "SNOWMAN", "SOBHA", "SOLARA", "SOLARINDS", "SOMANYCERA", "SOMATEX", "SOMICONVEY", "SONATSOFTW", "SORILINFRA", "SOTL", "SOUTHBANK", "SOUTHWEST", "SPAL", "SPANDANA", "SPARC", "SPCENET", "SPECIALITY", "SPENCERS", "SPENTEX", "SPIC", "SPICEJET", "SPLIL", "SPMLINFRA", "SPTL", "SPYL", "SREEL", "SREINFRA", "SRF", "SRHHYPOLTD", "SRIPIPES", "SRTRANSFIN", "SSWL", "STAMPEDE", "STAR", "STARCEMENT", "STARPAPER", "STCINDIA", "STEELCITY", "STEELXIND", "STEL", "STERTOOLS", "STINDIA", "STRTECH", "SUBCAPCITY", "SUBEX", "SUBROS", "SUDARSCHEM", "SUJANAUNI", "SUMEETINDS", "SUMIT", "SUMMITSEC", "SUNCLAYLTD", "SUNDARAM", "SUNDARMFIN", "SUNDARMHLD", "SUNDRMBRAK", "SUNDRMFAST", "SUNFLAG", "SUNPHARMA", "SUNTECK", "SUNTV", "SUPERHOUSE", "SUPERSPIN", "SUPPETRO", "SUPRAJIT", "SUPREMEIND", "SUPREMEINF", "SURANASOL", "SURANAT&P", "SURYALAXMI", "SURYAROSNI", "SUTLEJTEX", "SUVEN", "SUZLON", "SWANENERGY", "SWARAJENG", "SWELECTES", "SWSOLAR", "SYMPHONY", "SYNCOM", "SYNDIBANK", "SYNGENE", "TAINWALCHM", "TAJGVK", "TAKE", "TALBROAUTO", "TALWALKARS", "TALWGYM", "TANLA", "TANTIACONS", "TARAPUR", "TARMAT", "TASTYBITE", "TATACHEM", "TATACOFFEE", "TATACOMM", "TATAELXSI", "TATAGLOBAL", "TATAINVEST", "TATAMETALI", "TATAMOTORS", "TATAMTRDVR", "TATAPOWER", "TATASTEEL", "TATASTLBSL", "TATASTLLP", "TBZ", "TCI", "TCIDEVELOP", "TCIEXP", "TCIFINANCE", "TCNSBRANDS", "TCPLPACK", "TCS", "TDPOWERSYS", "TEAMLEASE", "TECHIN", "TECHM", "TECHNOE", "TECHNOFAB", "TEJASNET", "TERASOFT", "TEXINFRA", "TEXMOPIPES", "TEXRAIL", "TEXRAIL", "TFCILTD", "TFL", "TGBHOTELS", "TGBHOTELS", "THANGAMAYL", "THEINVEST", "THEMISMED", "THERMAX", "THIRUSUGAR", "THOMASCOOK", "THOMASCOTT", "THYROCARE", "TI", "TIDEWATER", "TIIL", "TIINDIA", "TIJARIA", "TIL", "TIMESGTY", "TIMETECHNO", "TIMKEN", "TINPLATE", "TIPSINDLTD", "TIRUMALCHM", "TITAN", "TMRVL", "TNPETRO", "TNPL", "TNTELE", "TOKYOPLAST", "TORNTPHARM", "TORNTPOWER", "TPLPLASTEH", "TREEHOUSE", "TREJHARA", "TRENT", "TRF", "TRIDENT", "TRIGYN", "TRIL", "TRITURBINE", "TRIVENI", "TTKHLTCARE", "TTKPRESTIG", "TTL", "TTML", "TV18BRDCST", "TVSELECT", "TVSMOTOR", "TVSSRICHAK", "TVTODAY", "TVVISION", "TWL", "UBL", "UCALFUEL", "UCOBANK", "UFLEX", "UFO", "UGARSUGAR", "UJAAS", "UJJIVAN", "ULTRACEMCO", "UMANGDAIRY", "UMESLTD", "UNICHEMLAB", "UNIENTER", "UNIONBANK", "UNIPLY", "UNITECH", "UNITEDBNK", "UNITEDTEA", "UNITY", "UNIVCABLES", "UPL", "URJA", "USHAMART", "UTTAMSTL", "UTTAMSUGAR", "UVSL", "V2RETAIL", "VADILALIND", "VAIBHAVGBL", "VAKRANGEE", "VARDHACRLC", "VARDMNPOLY", "VARROC", "VASCONEQ", "VASWANI", "VBL", "VEDL", "VENKEYS", "VENUSREM", "VESUVIUS", "VETO", "VGUARD", "VHL", "VICEROY", "VIDEOIND", "VIDHIING", "VIJIFIN", "VIKASECO", "VIKASMCORP", "VIKASPROP", "VIKASWSP", "VIMALOIL", "VIMTALABS", "VINATIORGA", "VINDHYATEL", "VINYLINDIA", "VIPCLOTHNG", "VIPIND", "VIPULLTD", "VISAKAIND", "VISASTEEL", "VISESHINFO", "VISHAL", "VISHNU", "VISHWARAJ", "VIVIDHA", "VIVIMEDLAB", "VLSFINANCE", "VMART", "VOLTAMP", "VOLTAS", "VRLLOG", "VSSL", "VSTIND", "VSTTILLERS", "VTL", "WABAG", "WABCOINDIA", "WALCHANNAG", "WANBURY", "WATERBASE", "WEBELSOLAR", "WEIZFOREX", "WEIZMANIND", "WELCORP", "WELENT", "WELINV", "WELSPUNIND", "WENDT", "WESTLIFE", "WHEELS", "WHIRLPOOL", "WILLAMAGOR", "WINDMACHIN", "WINSOME", "WIPL", "WIPRO", "WOCKPHARMA", "WONDERLA", "WSI", "WSTCSTPAPR", "XCHANGING", "XELPMOC", "XLENERGY", "XPROINDIA", "YESBANK", "ZEEL", "ZEELEARN", "ZEEMEDIA", "ZENITHBIR", "ZENITHEXPO", "ZENSARTECH", "ZENTEC", "ZICOM", "ZODIACLOTH", "ZODJRDMKJ", "ZOTA", "ZUARI", "ZUARIGLOB", "ZYDUSWELL"];

const us_companies_array = ["Exxon Mobil Corporation", "General Electric Company", "Microsoft Corporation", "BP p.l.c.", "Citigroup Inc.", "Procter & Gamble Company (The)", "Wal-Mart Stores Inc.", "Pfizer Inc.", "HSBC Holdings plc.", "Toyota Motor Corporation", "JOHNSON & JOHNSON", "Bank of America Corporation", "American International Group Inc.", "TotalFinaElf S.A.", "Novartis AG", "Altria Group", "GLAXOSMITHKLINE PLC", "Mitsubishi UFJ Financial Group Inc", "J.P. Morgan Chase & Co.", "ROYAL DUTCH SHELL PLC", "ChevronTexaco Corporation", "Sanofi-Aventis SA", "Vodafone AirTouch Public Limited Company", "Intel Corporation", "International Business Machines Corporation", "ENI S.p.A.", "Cisco Systems Inc.", "Berkshire Hathaway Inc.", "UBS AG", "Wells Fargo Cap IX", "AT&T Inc.", "ROYAL DUTCH SHELL PLC", "Coca-Cola Company (The)", "China Mobile (Hong Kong) Ltd.", "Pepsico Inc.", "Verizon Communications Inc.", "CONOCOPHILLIPS", "Genentech Inc.", "Amgen Inc.", "Banco Santander Central Hispano S.A.", "Hewlett-Packard Company", "Google Inc.", "Home Depot Inc. (The)", "Wachovia Corporation", "Siemens AG", "Nokia Corporation", "UnitedHealth Group Incorporated", "Time Warner Inc.", "QUALCOMM Incorporated", "ING Group N.V.", "NTT Docomo Inc", "E.ON AG", "ASTRAZENECA PLC", "Merck & Company Inc.", "Schlumberger N.V.", "Telefonica SA", "Mobile TeleSystems", "Nippon Telegraph and Telephone Corporation", "BHP Billiton Limited", "CREDIT SUISSE GROUP", "Barclays PLC", "Dell Inc.", "Merrill Lynch & Co. Inc.", "Banco Bilbao Viscaya Argentaria S.A.", "Medtronic Inc.", "Abbott Laboratories", "Deutsche Telekom AG", "American Express Company", "Morgan Stanley", "SAP Aktiengesellschaft Systeme Anwendungen Produkt", "Sprint  Nextel Corporation", "Oracle Corporation", "Eli Lilly and Company", "Allianz Aktiengesellschaft", "Goldman Sachs Group Inc. (The)", "Apple Computer Inc.", "AXA", "American Home Products Corporation", "STATOIL ASA", "eBay Inc.", "Petroleo Brasileiro S.A.- Petrobras", "United Technologies Corporation", "France Telecom S.A.", "Anglo American plc", "DAIMLERCHRYSLER AG", "Deutsche Bank AG", "LM Ericsson Telephone Company", "Motorola Inc.", "Federal National Mortgage Association", "Boeing Company (The)", "3M Company", "SPDR Trust Series I", "Rio Tinto Plc", "U.S. Bancorp", "Canon Inc.", "Taiwan Semiconductor Manufacturing Company Limited", "Matsushita Electric Industrial Company Ltd.", "Tyco International Ltd.", "ABN Amro Holding N.V.", "Honda Motor Company Ltd.", "ENEL S.p.A.", "Structured Products Corp.", "LLOYDS TSB GROUP PLC", "Nissan Motor Co. Ltd.", "Royal Bank Of Canada", "Lowe's Companies Inc.", "Sony Corporation", "Yahoo! Inc.", "Walt Disney Company (The)", "Manulife Financial Corp", "Target Corporation", "Telefonica Moviles S.A.", "British American Tobacco  Industries p.l.c.", "United Parcel Service Inc.", "WellPoint Health Networks Inc.", "Texas Instruments Incorporated", "SUEZ ADS", "Federal Home Loan Mortgage Corporation", "BHP BILLITON PLC", "Caterpillar Inc.", "Lehman ABS Corporation", "Koninklijke Philips Electronics N.V.", "McDonald's Corporation", "Walgreen Company", "Diageo plc", "Encana Corporation", "Brown-Forman Corporation", "America Movil S.A. de C.V.", "Washington Mutual Inc.", "National Australia Bank Limited", "Halliburton Company", "Dow Chemical Company (The)", "Unilever NV", "BG Group plc", "PETROLEO BRASILEIRO SA PETRO", "Occidental Petroleum Corporation", "ALCON INC", "Bank of Nova Scotia (The)", "Valero Energy Corporation", "Cia Vale do Rio Doce", "Nomura Holdings Inc ADR", "EXELON CORP", "Prudential Financial Inc", "MetLife Inc.", "Toronto Dominion Bank (The)", "Comcast Corporation", "Lehman Brothers Fin SA", "Telecom Italia S.P.A.", "Corning Incorporated", "Suncor Energy  Inc.", "Vivendi Universal", "E.I. du Pont de Nemours and Company", "CNOOC Limited", "Australia & New Zealand Banking Group Limited", "News Corporation Limited (The)", "First Data Corporation", "Millea Holdings Inc. ADR", "Burlington Resources Inc.", "Allstate Corporation (The)", "Canadian Natural Resources Limited", "Repsol YPF S.A.", "Carnival Corporation", "Westpac Banking Corporation", "Honeywell International Inc.", "Anheuser-Busch Companies Inc.", "EMC Corporation", "Norsk Hydro ASA", "Emerson Electric Company", "St. Paul Companies Inc. (The)", "Applied Materials Inc.", "BT GROUP PLC", "Cardinal Health Inc.", "FedEx Corporation", "Bayer Aktiengesellschaft", "Unilever PLC", "Devon Energy Corporation", "Endesa S.A.", "Bank Of Montreal", "Burlington Northern Santa Fe Corporation", "GROUPE DANONE", "Viacom Inc.", "Lockheed Martin Corporation", "Korea Electric Power Corporation", "Colgate-Palmolive Company", "Schering-Plough Corp", "Marathon Oil Corporation", "National Grid Transco PLC", "Gilead Sciences Inc.", "Sasol Ltd.", "Aetna Inc.", "Alcoa Inc.", "Teva Pharmaceutical Industries Limited", "Kookmin Bank", "Transocean Inc.", "Kimberly-Clark Corporation", "Baker Hughes Incorporated", "Duke Energy Corporation", "Dominion Resources Inc.", "SunTrust Banks Inc.", "Southern Company (The)", "AEGON N.V.", "Sanpaolo IMI S.p.A.", "Newmont Mining Corporation (Holding Company)", "Franklin Resources Inc.", "Anadarko Petroleum Corporation", "Automatic Data Processing Inc.", "Apache Corporation", "Best Buy Co. Inc.", "Hartford Financial Services Group Inc. (The)", "Petro-Canada", "Sun Life Financial Incorporated", "Guidant Corporation", "Prudential Public Limited Company", "Berkshire Hathaway Inc.", "Cemex Sa De Cv A Ads", "Bank of New York Company Inc. (The)", "Starbucks Corporation", "TXU Corporation", "Canadian National Railway Company", "Adobe Systems Incorporated", "Hitachi Ltd.", "Illinois Tool Works Inc.", "Costco Wholesale Corporation", "AFLAC Incorporated", "Union Pacific Corporation", "Canadian Imperial Bank of Commerce", "SLM Corporation", "THOMSON CORP", "Orix Corp Ads", "General Dynamics Corporation", "ALLTEL Corporation", "Baxter International Inc.", "Mitsui & Company Ltd.", "Monsanto Company", "ABB LTD", "CVS Corporation", "BCE Inc.", "Liberty Media Corporation", "Talisman Energy Inc.", "Capital One Financial Corporation", "Caremark Rx Inc.", "Comcast Corporation", "Northrop Grumman Corporation", "Golden West Financial Corporation", "NASDAQ-100 Index Tracking Stock", "Norfolk Souther Corporation", "BB&T Corporation", "National City Corporation", "YPF Sociedad Anonima", "PetroChina Company Limited", "Wipro Limited", "Imperial Tobacco Group plc", "iShares MSCI EAFE Index Fund", "Royal KPN N.V.", "Fifth Third Bancorp", "Vivendi Environnement Ord", "Cadbury Schweppes PLC", "Progressive Corporation (The)", "Infosys Technologies Limited", "Archer-Daniels-Midland Company", "HCA Inc.", "EOG Resources Inc.", "Stryker Corporation", "Pohang Iron & Steel Co. Ltd.", "Structured Products Inc 8% CorTS", "State Street Corp", "Symantec Corporation", "Broadcom Corporation", "Allied Irish Banks p.l.c.", "Banco Bradesco Sa", "Marvell Technology Group Ltd.", "Sears Holdings Corporation", "The DirecTV Group Inc", "Tenaris S.A.", "Accenture Ltd.", "ALCATEL", "McGraw-Hill Companies Inc. (The)", "Charles Schwab Corporation (The)", "Scottish Power pls", "Sysco Corporation", "PNC Bank Corp.", "SWISSCOM AG", "Chubb Corporation (The)", "Advanced Micro Devices Inc.", "Moody's Corporation", "Simon Property Group Inc.", "Amazon.com Inc.", "Lafarge S.A.", "CBS Corporation", "COMPANHIA VALE DO RIO DOCE", "Telstra Corporation Limited", "Loews Corporation", "Genzyme General", "Raytheon Company", "Telenor ASA", "Las Vegas Sands Corp.", "Federated Department Stores Inc.", "ALCAN Inc.", "St. Jude Medical Inc.", "Chunghwa Telecom Co Ltd", "Boston Scientific Corporation", "Fuji Photo Film Co. Ltd.", "XTO Energy Inc.", "Kellogg Company", "Ace Limited", "Waste Management Inc.", "Staples Inc.", "General Mills Inc.", "Danaher Corporation", "SK Telecom Corporation Ltd.", "Cendant Corporation", "Zimmer Holdings Inc.", "News Corporation Limited (The)", "CRH PLC", "Praxair Inc.", "Weyerhaeuser Company", "Kyocera Corporation", "Deere & Company", "Novo Nordisk A/S", "STMicroelectronics N.V.", "Governor and Company of the Bank of Ireland (The)", "Public Service Enterprise Group Incorporated", "MedcoHealth Solutions Inc", "Marsh & McLennan Companies Inc.", "Telefonos de Mexico SA de CV Ser A Spons ADR", "FirstEnergy Corporation", "FPL Group Inc.", "Electronic Arts Inc.", "LG.PHILIPS", "PUBLIC SVC ELEC & GAS CO", "McKesson Corporation", "Phelps Dodge Corporation", "AngloGold Ashanti Ltd.", "Becton Dickinson and Company", "Banco Itau Holding Financeira SA (Holding Co)", "International Paper Company", "British Sky Broadcasting Group plc", "Woori Finance Holdings Co Ltd", "Computer Associates International Inc.", "Clear Channel Communications Inc.", "Gap Inc. (The)", "Nike Inc.", "Forest Laboratories Inc.", "Allergan Inc.", "Weatherford International Inc.", "Natl Bk Greece Ads", "Sun Microsystems Inc.", "Ford Motor Credit Company", "Kohl's Corporation", "Shinhan Financial Group Co Ltd", "CIGNA Corporation", "Transcananda Pipelines Ltd.", "Biogen Idec Inc", "Regions Financing Tr I", "TPG N.V.", "Nexen Inc.", "REYNOLDS AMERICAN INC", "Gannett Co. Inc.", "Legg Mason Inc.", "Kraft Foods Inc.", "Omnicom Group Inc.", "Mellon Financial Corporation", "Harley-Davidson Inc.", "American Electric Power Company Inc.", "Chicago Mercantile Exchange Holdings", "Analog Devices Inc.", "Agilent Technologies Inc.", "Entergy Corporation", "Amerada Hess Corporation", "KeyCorp", "WOLSELEY PLC", "Bear Stearns Companies Inc (The)", "Santa Fe International Corporation", "TELECOM ITALIA S P A NEW", "Edison International", "Williams Companies Inc. (The)", "AB Volvo", "Yum! Brands Inc.", "Pacific Gas & Electric Co.", "ICICI Bank Limited", "P.T. Telekomunikasi Indonesia Tbk.", "Marriot International", "Sara Lee Corporation", "Akzo Nobel N.V.", "Cameco Corporation", "Paychex Inc.", "Air Products and Chemicals Inc.", "Coach Inc.", "General Motors Corporation", "Syngenta AG", "Harrah's Entertainment Inc.", "Entergy Mississippi Inc.", "iShares S&P 500 Index Fund", "Maxim Integrated Products Inc.", "Johnson Controls Inc.", "BOC Group plc (The)", "Kroger Company (The)", "Starwood Hotels & Resorts Worldwide Inc.", "Xerox Corporation", "Telkom SA Ltd", "Express Scripts Inc.", "Schering Aktiengesellschaft", "National-Oilwell Inc.", "Southwest Airlines Company", "Principal Financial Group Inc", "WPP Group plc", "Nidec Corporation (Nihon Densan Kabushiki Kaisha)", "Electronic Data Systems Corporation", "Peabody Energy Corporation", "BJ Services Company", "Nucor Corporation", "Nortel Networks Corporation", "Ingersoll-Rand Company", "Avon Products Inc.", "United Microelectronics Corporation", "Sunoco Inc.", "J.C. Penney Company Inc. Holding Company", "Chesapeake Energy Corporation", "Turkcell Iletisim Hizmetleri AS", "Equity Office Properties Trust", "Research in Motion Limited", "Companhia de Bebidas das Americas - AmBev", "Kerr-McGee Corporation", "Southern Peru Copper Corporation", "Nabors Industries Inc.", "Tennessee Valley Authority", "American Tower Corporation", "Seagate Technology Holdings", "Tele Danmark A/S", "Kubota Corporation", "Electricidade de Portugal S.A.", "Masco Corporation", "Genworth Financial Inc", "NEC Corporation", "ProLogis", "Vornado Realty Trust", "SanDisk Corporation", "Campbell Soup Company", "SEMPRA ENERGY", "General Growth Properties Inc.", "Advantest Corporation (Kabushiki Kaisha Advantest) ADS", "North Fork Bancorporation Inc.", "EQUITY RESIDENTIAL", "Wm. Wrigley Jr. Company", "TRANSCANADA CORP", "Reed Elsevier PLC", "M&T Bank Corporation", "Kirin Brewery Company Limited", "TELEKOM AUSTRIA AG", "Celgene Corporation", "International Game Technology", "Koninklijke Ahold N.V.", "Korea Telecom Corporation", "Freeport-McMoRan Copper & Gold Inc.", "COMPANHIA DE BEBIDAS DAS AME", "Luxottica Group S.p.A.", "Carnival Plc ADS", "XL CAPITAL LIMITED", "PACCAR Inc.", "Lucent Technologies Inc.", "Portugal Telecom SGPS S.A .", "TJX Companies Inc. (The)", "Kinder Morgan Inc.", "Rinker Group Limited", "ROCKWELL AUTOMATION INC", "D.R. Horton Inc.", "Gold Fields Ltd.", "CSX Corporation", "Network Appliance Inc.", "Consolidated Edison Inc.", "PP&L Corporation", "Hellenic Telecommunication Organization S.A.", "Northern Trust Corporation", "Rogers Communication Inc.", "H.J. Heinz Company", "Linear Technology Corporation", "Rohm and Haas Company", "Nordstrom Inc.", "Placer Dome Incorporated", "China Netcom Group Corporation (Hong Kong) Limited", "Qwest Communications International Inc.", "iShares MSCI Japan Index Fund", "CHINA UNICOM LTD", "Textron Inc.", "Aes Trust", "Bed Bath & Beyond Inc.", "ENBRIDGE INC", "Noble Corporation", "PROGRESS ENERGY INC", "Fortune Brands Inc.", "Aon Corporation", "ASML Holding N.V.", "Diamond Offshore Drilling Inc.", "Reuters Group PLC", "FIAT S.p.A.", "ConAgra Foods Inc.", "UPM-Kymmene Oyj", "United Utilities plc.", "CIT Group Inc (DEL)", "Murphy Oil Corporation", "MGM MIRAGE", "Safeway Inc.", "Reed Elsevier NV", "Adecco SA", "FORD MTR CO DEL", "Pearson Plc", "Constellation Energy Group Inc.", "Ameren Corporation", "China Petroleum & Chemical Corporation", " Pulte Homes Inc.", "KLA-Tencor Corporation", "Juniper Networks Inc.", "Office Depot Inc.", "AMERIPRISE FINANCIAL SERVICES INC.", "Gallaher Group PLC", "Whole Foods Market Inc.", "Quest Diagnostics Incorporated", "T. Rowe Price Group Inc.", "PPG Industries Inc.", "Archstone Communities Trust", "E*TRADE Financial Corporation", "Marshall & Ilsley Corporation", "Coles Meyer Limited", "Enterprise Products Partners L.P.", "Xilinx Inc.", "Eaton Corporation", "Apollo Group Inc.", "PITNEY BOWES INC", "L-3 Communications Holdings Inc.", "Inco Ltd.", "TDK Corporation", "Coventry Health Care Inc.", "UnionBanCal Corporation", "Open Joint Stock Company Vimpel-Communications", "AmSouth Bancorporation", "Smith International Inc.", "National Semiconductor Corporation", "Hilton Hotels Corporation", "Limited Brands Inc.", "ITT Industries Inc.", "Lincoln National Corporation", "Biomet Inc.", "Public Storage Inc.", "Smith & Nephew SNATS Inc.", "Autodesk Inc.", "Computer Sciences Corporation", "A.O. Tatneft", "Coca-Cola Enterprises Inc.", "Potash Corporation of Saskatchewan Inc.", "Dover Corporation", "Grupo Televisa S.A.", "Goldcorp Incorporated", "Albertson's Inc.", "Intuit Inc.", "Hershey Foods Corporation", "Mittal Steel Company NV", "Ecolab Inc.", "Centex Corporation", "Stora Enso Oyj", "Micron Technology Inc.", "Humana Inc.", "Parker-Hannifin Corporation", "Comerica Incorporated", "Banco Santiago S.A.", "Clorox Company (The)", "Tribune Company", "AU OPTRONICS CORP", "El Paso Corporation", "Boston Properties Inc.", "Cinergy Corporation", "Empresa Nacional de Electricidad S.A.", "Synovus Financial Corporation", "iShares MSCI Emerging Index Fund", "Chiron Corporation", "Royal Caribbean Cruises Ltd.", "MidCap SPDR Trust Series I", "IAC/InterActiveCorp", "Mirant Corp", "MedImmune Inc.", "Ryanair Holdings plc", "Hanson plc.(Holding Company)", "Jabil Circuit Inc.", "Zions Bancorporation", "Expedia Inc.", "IVAX Corporation", "MBIA Inc.", "iShares Russell 2000 Index Fund", "Serono International S.A.", "Fisher Scientific International Inc.", "TD Ameritrade Holding Corporation", "Ambac Financial Group Inc.", "Fiserv Inc.", "Noble Energy Inc.", "CNA Financial Corporation", "Rockwell Collins Inc.", "Ultra Petroleum Corp.", "H&R Block Inc.", "Magna International Inc.", "Kimco Realty Corporation", "Cincinnati Financial Corporation", "Varian Medical Systems Inc.", "Hutchison Telecommunications International Limited", "ENERSIS S A", "Companhia Siderurgica Nacional S.A.", "Microchip Technology Incorporated", "Chico's FAS Inc.", "Shire plc", "Expeditors International of Washington Inc.", "ENSCO International Incorporated", "Lennar Corporation", "Asco Plc Ads", "Xcel Energy Inc.", "Jefferson-Pilot Corporation", "Laboratory Corporation of America Holdings", "Telecomunicacoes de Sao Paulo S.A.", "Sovereign Bancorp Inc.", "Imperial Chemical Industries Plc", "NVIDIA Corporation", "Kinder Morgan Energy Partners L.P.", "DIAMONDS Trust Series I", "Fluor Corporation", "Canadian Pacific Railway Limited", "Telecom Corporation of New Zealand Limited", "China Life Insurance Company Limited", "Univision Communications Inc.", "American Standard Companies Inc.", "Sirius Satellite Radio Inc.", "DTE Energy Company", "AutoZone Inc.", "Amvescap Plc", "Cooper Industries Ltd.", "NII Holdings Inc.", "Publicis Groupe S.A.", "Fresenius Medical Care Corporation", "Hudson City Bancorp Inc.", "Genuine Parts Company", "Affiliated Computer Services Inc.", "KB HOME", "Harmony Gold Mining Co. Ltd.", "AvalonBay Communities Inc.", "Vulcan Materials Company", "International Power Plc", "Sherwin-Williams Company (The)", "Cognizant Technology Solutions Corporation", "Harman International Industries Incorporated", "COCA COLA HELLENIC BOTTLING CO", "Eastman Kodak Company", "Southwestern Energy Company", "iShares Dow Jones Select Dividend Index Fund", "HOSPIRA INC", "SODEXHO ALLIANCE SA", "Cintas Corporation", "Barr Pharmaceuticals Inc.", "Host Marriott Financial Trust", "INFINEON TECHNOLOGIES AG", "R.R. Donnelley & Sons Company", "Altera Corporation", "Brookfield Properties Corporation", "Pepsi Bottling Group Inc. (The)", "Questar Corporation", "C.H. Robinson Worldwide Inc.", "Pixar", "CPFL Energia S.A.", "Wendy's International Inc.", "Fidelity National Financial Inc.", "Pioneer Natural Resources Company", "NCR Corporation", "FREESCALE SEMICONDUCTOR INC", "Plum Creek Timber Company Inc.", "Dassault Systemes S.A.", "Elan Corporation plc", "USX Corporation", "Black & Decker Corporation (The)", "Crown Castle International Corporation", "CONSOL Energy Inc.", "ALUMINA LTD", "Garmin Ltd.", "Newfield Exploration Company", "Intercontinental Hotels Group", "Mattel Inc.", "C.R. Bard Inc.", "Precision Castparts Corporation", "Scientific-Atlanta Inc.", "Technip", "Bunge Limited", "British Airways plc", "Telus Corporation", "Joy Global Inc.", "Royal & SunAlliance Insurance Group PLC", "Etablissements Delhaize Freres et Cie Le Lion' S.A.", "Newell Rubbermaid Inc.", "Patterson-UTI Energy Inc.", "Amdocs Limited", "SAFECO Corporation", "Grant Prideco Inc.", "Wynn Resorts Limited", "UST Inc.", "W.W. Grainger Inc.", "Satyam Computer Services Limited", "Gerdau S.A.", "Lam Research Corporation", "W.R. Berkley Corporation", "KeySpan Corporation", "Philippine Long Distance Telephone Company", "Enerplus Resources Fund", "Harris Corporation", "Robert Half International Inc.", "HDFC Bank Limited", "V.F. Corporation", "Darden Restaurants Inc.", "Air France ADS", "Suntech Power Holdings Co. LTD.", "E.W. Scripps Company (The)", "America Movil S.A. de C.V.", "VeriSign Inc.", "Compass Bancshares Inc.", "UnumProvident Corporation", "Tata Motors Ltd", "Sepracor Inc.", "Assurant Inc.", "Washington Post Company (The)", "MEMC Electronic Materials Inc.", "Flextronics International Ltd.", "MGIC Investment Corporation", "Everest Re Group Ltd.", "Avery Dennison Corporation", "Omnicare Inc.", "Lyondell Chemical Company", "Mosaic Company (The)", "AutoNation Inc.", "EchoStar Communications Corporation", "Torchmark Corporation", "Abercrombie & Fitch Company", "XM Satellite Radio Holdings Inc.", "Commerce Bancorp Inc.", "Santos Ltd.", "Fastenal Company", "Mohawk Industries Inc.", "Tellabs Inc.", "Telewest Global Inc", "White Mountains Insurance Group Ltd.", "Pride International Inc.", "IMS Health Incorporated", "Leucadia National Corporation", "Allegheny Energy Inc.", "Health Net Inc.", "Formento Economico Mexicano S.A. de C.V.", "Lexmark International Inc.", "iShares Russell 1000 Value Index Fund", "THOMSON multimedia S.A.", "Arch Coal Inc.", "Northern Indiana Public Service Company", "CBOT Holdings Inc.", "DaVita Inc.", "Cablevision Systems Corporation", "CORUS GROUP PLC", "Comverse Technology Inc.", "Cooper Cameron Corporation", "Iron Mountain Incorporated", "Willis Group Holdings Limited", "Thermo Electron Corporation", "Whirlpool Corporation", "Citrix Systems Inc.", "Popular Inc.", "NTL Incorporated", "Tiffany & Co.", "Developers Diversified Realty Corporation", "Dollar General Corporation", "Vanguard Total Stock Market VIPERs", "Applera Corporation", "Huntington Bancshares Incorporated", "China Telecom Corp Ltd", "Constellation Brands Inc.", "Toll Brothers Inc.", "Temple-Inland Inc.", "Check Point Software Technologies Ltd.", "Republic Services Inc.", "Nextel Partners Inc.", "Red Hat Inc.", "Dean Foods Company", "Allegheny Technologies Incorporated", "Rexam Plc", "Macerich Company (The)", "Getty Images Inc.", "Health Management Associates Inc.", "Monster Worldwide Inc.", "Shaw Communications Inc.", "Cadence Design Systems Inc.", "Tesoro Petroleum Corporation", "Equifax Inc.", "JDS Uniphase Corporation", "Avaya Inc.", "Alliance Capital Management Holding L.P.", "Old Republic International Corporation", "Liberty Global Inc.", "Rowan Companies Inc.", "Duke Realty Corporation", "Intuitive Surgical Inc.", "BANCO DE CHILE", "Embraer-Empresa Brasileira de Aeronautica", "Wisconsin Energy Corporation", "Jacobs Engineering Group Inc.", "Weight Watchers International Inc", "Meadwestvaco Corporation", "Goodrich Corporation (The)", "Engelhard Corporation", "Matav", "Dun & Bradstreet Corporation (The)", "Liberty Global Inc.", "BMC Software Inc.", "iShares Russell 1000 Growth Index Fund", "St. Joe Company (The)", "Sanyo Electric Co. Ltd.", "First Tennessee National Corporation", "Huntsman Corporation", "Patterson Companies Inc.", "Radian Group Inc.", "Ashland Inc.", "Western Digital Corporation", "ADVANCE AUTO PARTS INC", "CheckFree Corporation", "Manpower Inc", "Mercantile Bankshares Corporation", "Amylin Pharmaceuticals Inc.", "Waters Corporation", "Metso Corporation", "Tele Norte Leste Participacoes S.A.", "Brown-Forman Corporation", "Estee Lauder Companies Inc. (The)", "American Power Conversion Corporation", "CB Richard Ellis Group Inc", "Hormel Foods Corporation", "Associated Banc-Corp", "New York Community Bancorp Inc.", "SCANA Corporation", "Williams-Sonoma Inc.", "Knight-Ridder Inc.", "Sealed Air Corporation", "BEA Systems Inc.", "Station Casinos Inc.", "Cummins Inc.", "Amcor Limited", "King Pharmaceuticals Inc.", "Leggett & Platt Incorporated", "Amphenol Corporation", "Stilwell Financial Inc.", "Michaels Stores Inc.", "Urban Outfitters Inc.", "ATI Technologies Inc.", "First American Corporation (The)", "Axis Capital Holdings Limited", "CDW Corporation", "Circuit City Stores Inc.", "AMB Property Corporation", "Equitable Resources Inc.", "Trend Micro Incorporated", "IPSCO Inc.", "Salesforce.com Inc", "Lafarge Corporation", "NVR Inc.", "Pacific Century CyberWorks Limited", "Ciba Specialty Chemicals Holding Inc.", "Student Loan Corporation (The)", "Regency Centers Corporation", "Sigma-Aldrich Corporation", "CenturyTel Inc.", "Potomac Electric Power Company", "SuperValu Inc.", "Interpublic Group of Companies Inc. (The)", "People's Bank", "MDU RES GROUP INC", "Comp En De Mn Cemig ADS", "Tomkins PLC", "Mylan Laboratories Inc.", "USG Corporation", "iShares Lehman 1-3 Year Treasury Bond Fund", "GTECH Holdings Corporation", "DENTSPLY International Inc.", "Pinnacle West Capital Corporation", "Glamis Gold Ltd.", "Ball Corporation", "Transatlantic Holdings Inc.", "Precision Drilling Corporation", "Brown-Forman Corporation", "Lamar Advertising Company", "Advanced Semiconductor Engineering Inc.", "Federated Investors Inc.", "Makita Corp.", "Ross Stores Inc.", "Cephalon Inc.", "Intersil Corporation", "Lincare Holdings Inc.", "Arrow Electronics Inc.", "Autoliv Inc.", "Stanley Works (The)", "NAVTEQ CORP", "Citizens Communications Company", "SEI Investments Company", "TransAlta Corporation", "iShares S&P SmallCap 600 Index Fund", "Helmerich & Payne Inc.", "New York Times Company (The)", "Alberto-Culver Company", "AMR Corporation", "Apartment Investment and Management Company", "Henry Schein Inc.", "Discovery Holding Co", "ENERGY TRANSFER PARTNERS", "iStar Financial Inc.", "Global Payments Inc.", "Boyd Gaming Corporation", "American Eagle Outfitters Inc.", "Mechel Steel Group OAO", "Pharmaceutical Product Development Inc.", "Liberty Property Trust", "Brown & Brown Inc.", "CenterPoint Energy Inc (Holding Co)", "Arch Capital Group Ltd.", "AmeriCredit Corporation", "Eastman Chemical Company", "Martin Marietta Materials Inc.", "Novellus Systems Inc.", "Activision Inc.", "DST Systems Inc.", "NRG Energy Inc.", "Networks Associates Inc.", "Allied Capital Corporation", "Pentair Inc.", "Bunzl plc", "Range Resources Corporation", "Total System Services Inc.", "PMI Group Inc. (The)", "American Capital Strategies Ltd.", "Molson Coors Brewing  Company", "Colonial BancGroup Inc. (The)", "Millicom International Cellular S.A.", "Quicksilver Resources Inc.", "Compania Mina Buenaventura S.A.", "Indiana Michigan Power Co.", "Endo Pharmaceuticals Holdings Inc.", "Vertex Pharmaceuticals Incorporated", "Hasbro Inc.", "Novell Inc.", "Health Care Property Investors Inc.", "ServiceMaster Company (The)", "Logitech International S.A.", "Cimarex Energy Co", "McDermott International Inc.", "Eaton Vance Corporation", "Family Dollar Stores Inc.", "Liz Claiborne Inc.", "Beckman Coulter Inc.", "ChoicePoint Inc.", "Conseco Inc.", "City National Corporation", "J.B. Hunt Transport Services Inc.", "Merrill Lynch & Co. Inc.", "O'Reilly Automotive Inc.", "Energy East Corporation", "Watson Pharmaceuticals Inc.", "Jones Apparel Group Inc.", "Invitrogen Corporation", "TRIZEC PROPERTIES INC", "CNX Gas Corporation", "Brunswick Corporation", "Oshkosh Truck Corporation", "Tyson Foods Inc.", "Aqua America Inc.", "Bausch & Lomb Incorporated", "Weingarten Realty Investors", "WestCorp", "Biovail Corporation", "A.G. Edwards Inc.", "Pogo Producing Company", "PETsMART Inc.", "Pall Corporation", "Ceridian Corporation", "LSI Logic Corporation", "Millipore Corporation", "Western Gas Resources Inc.", "McCormick & Company Incorporated", "Avnet Inc.", "SL Green Realty Corporation", "FMC Technologies Inc.", "TECO Energy Inc.", "Covance Inc.", "Venator Group Inc.", "Florida Rock Industries Inc.", "REEBOK INTL LTD", "Triad Hospitals Inc.", "Freescale Semiconductor Inc", "Federal Realty Investment Trust", "Enterprise GP Holdings L.P.", "Plains Exploration & Production Company", "John Nuveen Company (The)", "Brinker International Inc.", "PartnerRe Ltd.", "iShares Lehman TIPS Bond Fund", "Polo Ralph Lauren Corporation", "United Dominion Realty Trust Inc.", "Terex Corporation", "Siliconware Precision Industries Company Ltd.", "Alliant Energy Corporation", "Alliance Data Systems Corporation", "Roper Industries Inc.", "Commerce Bancshares Inc.", "Dade Behring Holdings Inc", "Cognos Incorporated", "Outback Steakhouse Inc.", "Cerner Corporation", "Nasdaq Stock Market Inc. (The)", "HCC Insurance Holdings Inc.", "Teradyne Inc.", "Cytyc Corporation", "Solectron Corporation", "Tenet Healthcare Corporation", "Denbury Resources Inc. (Holding Company)", "Camden Property Trust", "Energizer Holdings Inc.", " Community Health Systems Inc.", "Ryland Group Inc. (The)", "Inamed Corporation", "Scotts Company (The)", "Tidewater Inc.", "Owens-Illinois Inc.", "Perusahaan Satlt Cp", "Timken Company (The)", "TCF Financial Corporation", "Charles River Laboratories International Inc.", "Akamai Technologies Inc.", "Corporate Executive Board Company (The)", "GLOBAL SIGNAL INC", "UTi Worldwide Inc.", "Harsco Corporation", "Streettracks Gold Trust", "Reckson Associates Realty Corporation", "PDL BioPharma Inc.", "Independence Community Bank Corp.", "Erie Indemnity Company", "Markel Corporation", "Whitman Corporation", "DPL Inc.", "Cal Dive International Inc.", "WFS Financial Inc.", "Raymond James Financial Inc.", "Smurfit-Stone Container Corporation", "Celanese Corporation", "Rayonier Inc. REIT", "Renal Care Group Inc.", "RenaissanceRe Holdings Ltd.", "Sabre Holdings Corporation", "Bemis Company Inc.", "Millennium Pharmaceuticals Inc.", "Dai'ei Inc.", "Forest Oil Corporation", "Compuware Corporation", "QLogic Corporation", "Synopsys Inc.", "Canadian Pac Ltd", "Pactiv Corporation", "CMS Energy Corporation", "Career Education Corporation", "Aramark Corporation", "Massey Energy Company", "Zebra Technologies Corporation", "iShares S&P MidCap 400 Index Fund", "Jefferies Group Inc.", "HON INDUSTRIES Inc.", "Signet Group plc", "Ventas Inc.", "ITT Educational Services Inc.", "Affiliated Managers Group Inc.", "Plains All American Pipeline L.P.", "Konami Corporation", "Loews Corporation", "BorgWarner Inc.", "SPX Corporation", "American National Insurance Company", "CARMAX INC", "Protective Life Corporation", "Sappi Limited", "Pittston Company (The)", "Agrium Inc.", "Crown Cork & Seal Company Inc.", "Rhodia SA", "Ingram Micro Inc.", "Louisiana-Pacific Corporation", "Lubrizol Corporation (The)", "Choice Hotels International Inc.", "Symbol Technologies Inc.", "James Hardie Industries NV", "Hughes Supply Inc.", "CGI Group Inc.", "Hospitality Properites Trust", "Reliant Resources Inc.", "CAPITALSOURCE INC", "Manor Care Inc.", "Mercury General Corporation", "iShares S&P 500/BARRA Growth Index Fund", "NSTAR", "Sonoco Products Company", "Level 3 Communications Inc.", "Semiconductor  Manufacturing International Corporation", "Alamosa Holdings Inc.", "Internationa Flavors & Fragrances Inc.", "iShares S&P 500/BARRA Value Index Fund", "Aluminum Corporation of China Ltd", "Investors Financial Services Corp.", "Molex Incorporated", "Unitrin Inc.", "Arden Realty Inc.", "Reinsurance Group of America Incorporated", "BOK Financial Corporation", "Panamsat Holding Corporation", "ImClone Systems Incorporated", "Astoria Financial Corporation", "Advanced Medical Optics Inc.", "Hillenbrand Industries Inc.", "Crompton Corporation", "Chicago Bridge & Iron Company N.V.", "Allied Waste Industries Inc.", "Beazer Homes USA Inc.", "Frontline Ltd.", "Radioshack Corporation", "Airgas Inc.", "Claire's Stores Inc.", "Northeast Utilities", "Warner Music Group Corp.", "Smithfield Foods Inc.", "PerkinElmer Inc.", "ADC Telecommunications Inc.", "Select Sector SPDR Fund - Energy Select Sector", "Teekay Shipping Corporation", "Cullen/Frost Bankers Inc.", "Rambus Inc.", "American Financial Group Inc.", "General Motors Corporation", "NISSIN CO LTD", "YRC Worldwide Inc.", "Cheesecake Factory Incorporated (The)", "FORD MTR CO CAP TR II", "Gildan Activewear Inc.", "AMTEK Inc.", "Scientific Games Corp", "AVX Corporation", "Ryder System Inc.", "Fair Isaac and Company Incorporated", "Brandywine Realty Trust", "Energen Corporation", "iShares Russell 2000 Value Index Fund", "Nova Chemicals Corporation", "Donaldson Company Inc.", "Alliant Techsystems Inc.", "West Corporation", "Forest City Enterprises Inc", "M.D.C. Holdings Inc.", "Shurgard Storage Centers Inc.", "Shaw Group Inc. (The)", "Intercontinentalexchange Inc.", "Fulton Financial Corporation", "Pan Pacific Retail Properties Inc.", "JLG Industries Inc.", "Wilmington Trust Corporation", "Buhrmann Nv", "Credicorp Ltd.", "Southern Union Company", "ResMed Inc.", "Barnes & Noble Inc.", "AGL Resources Inc.", "National Fuel Gas Company", "Arthur J. Gallagher & Co.", "Sky Financial Group Inc.", "Integrated Device Technology Inc.", "Commercial Metals Company", "Mack-Cali Realty Corporation", "Foster Wheeler Ltd.", "Goodyear Tire & Rubber Company (The)", "ONEOK Inc.", "Unit Corporation", "Graco Inc.", "Valspar Corporation (The)", "TODCO", "MDS Inc.", "Laidlaw International Inc.", "Viacom Inc.", "Business Objects S.A.", "Meridian Gold Inc.", "Thomas & Betts Corporation", "StanCorp Financial Group Inc.", "Petrobras Energia Participaciones SA", "CBL & Associates Properties Inc.", "United States Cellular Corporation", "Diebold Incorporated", "Titanium Metals Corporation", "Thornburg Mortgage Inc.", "Saks Incorporated", "Vishay Intertechnology Inc.", "CNF Inc.", "Frontier Oil Corporation", "Penn National Gaming Inc.", "Bank of Hawaii Corporation", "Standard Pacific Lp", "Silicon Laboratories Inc.", "Sierra Pacific Resources", "iShares Lehman Aggregate Bond Fund", "Dollar Tree Stores Inc.", "Stericycle Inc.", "W&T Offshore Inc.", "Nalco Holding Company", "Reliance Steel & Aluminum Company", "Kinder Morgan Management LLC", "IndyMac Bancorp Inc.", "National Instruments Corporation", "FRESENIUS MED CARE AG", "BlackRock Inc.", "Gol Linhas Aereas Inteligentes S.A.", "Valley National Bancorp", "Allmerica Financial Corporation", "Emdeon Corporation", "Respironics Inc.", "Gentex Corporation", "Laureate Education Inc.", "TEPPCO Partners L.P.", "Fairfax Financial Holdings Ltd", "PrimeWest Energy Trust", "International Rectifier Corporation", "New Plan Excel Realty Trust Inc.", "Gen-Probe Incorporated", "F5 Networks Inc.", "BRE Properties Inc.", "Teleflex Incorporated", "Edwards Lifesciences Corporation", "Videsh Sanchar Nigam Limited", "TRW Automotive Holdings Corporation", "Kinetic Concepts Inc.", "Flowserve Corporation", "J.M. Smucker Company (The)", "Affymetrix Inc.", "Webster Financial Corporation", "Cabot Oil & Gas Corporation", "CNH Global N.V.", "Trinity Industries Inc.", "Wesco Financial Corporation", "Packaging Corporation of America", "SCOR S.A.", "Landstar System Inc.", "Methanex Corporation", "Pioneer Corporation", "St. Mary Land", "Cooper Companies Inc. (The)", "Cabot Corporation", "Walter Industries Inc.", "IDEXX Laboratories Inc.", "OGE Energy Corporation", "Danielson Holding Corporation", "Duff & Phelps Utilities Income Inc.", "Nationwide Financial Services Inc.", "Puget Sound Energy", "Stolt Offshore S.A.", "Service Corporation International", "ARM Holdings plc", "Aber Diamond Corporation", "AnnTaylor Stores Corporation", "American Pharmaceutical Partners Inc.", "Universal Health Services Inc.", "Thor Industries Inc.", "CenterPoint Properties Trust", "Herbalife LTD.", "Havas", "Lan Chile S.A.", "Lihir Gold Limited", "Convergys Corporation", "Tektronix Inc.", "IDEX Corporation", "Mettler-Toledo International Inc.", "Companhia Brasileira de Distribuicao", "Agnico-Eagle Mines Limited", "Fairchild Semiconductor International Inc.", "iShares Russell 2000 Growth Index Fund", "US Airways Group Inc. New", "Molex Incorporated", "Kerzner International Limited", "Amerus Group Company", "Dow Jones & Company Inc.", "Church & Dwight Company Inc.", "Cleveland-Cliffs Inc.", "iShares Russell 1000 Index Fund", "Companhia de saneamento Basico Do Estado De Sao Pa", "iShares S&P MidCap 400/Barra Value Index Fund", "Mills Corporation (The)", "TM Corporate Bond Fund", "Maxtor Corporation", "Harte-Hanks Inc.", "Capitol Federal Financial", "Tech Data Corporation", "Enbridge Energy Limited Partnership", "Snap-On Incorporated", "CIENA Corporation", "Cypress Semiconductor Corporation", "Mahanagar Telephone Nigam Ltd", "Hubbell Inc A", "Hologic Inc.", "Alexander & Baldwin Inc.", "Education Management Corporation", "Dresser-Rand Group Inc.", "Netease.com Inc.", "Adesa Inc", "Alleghany Corporation", "Cytec Industries Inc.", "VCA Antech Inc.", "Unisys Corporation", "United Rentals Inc.", "Copart Inc.", "Sierra Health Services Inc.", "HOVNANIAN ENTERPRISES INC", "Polaris Industries Inc.", "Carpenter Technology Corporation", "Essex Property Trust Inc.", "WESCO International Inc.", "Lennox International Inc.", "Leap Wireless International Inc.", "Moneygram International Inc.", "New Century Financial Corp.", "Kennametal Inc.", "UGI Corporation", "HRPT Properties Trust", "Crane Company", "JetBlue Airways Corporation", "Neurocrine Biosciences Inc.", "WPS Resources Corporation", "Philadelphia Consolidated Holding Corp.", "RPM Inc.", "Cogent Inc.", "ADTRAN Inc.", "CNET Networks Inc.", "Sanmina-SCI Corporation", "Agere Systems Inc", "Compagnie Generale de Geophysique", "Alkermes Inc.", "Techne Corporation", "Benetton Group SPA", "Holly Corporation", "ROYAL BK SCOTLAND GROUP PLC", "Brookdale Senior Living Inc.", "Tri Continental Corporation", "Travelers Property Casualty Corporation", "UNOVA Inc.", "BJ's Wholesale Club Inc.", "Endurance Specialty Holdings Ltd", "Meredith Corporation", "Calamos Strategic Total Return", "Pediatrix Medical Group Inc.", "Telephone and Data Systems Inc.", "Tele Celular Sul Participacoes S.A.", "Petroleum Geo-Services Asa", "Superior Energy Services Inc.", "Belo Corporation", "Trimble Navigation Limited", "Health Care REIT Inc.", "FMC Corporation", "Crescent Real Estate Equities Company", "CarrAmerica Realty Corporation", "Merrill Lynch Biotech HOLDRS", "American Real Estate Partners L.P.", "Valhi Inc.", "Del Monte Foods Company", "Great Plains Energy Inc", "RPC Inc.", "URS Corporation", "Carlisle Companies Incorporated", "Atmos Energy Corporation", "Hawaiian Electric Industries Inc.", "Huaneng Power Intl", "Aracruz Celulose S.A.", "Foundry Networks Inc.", "Chartered Semiconductor Manufacturing Ltd.", "MSC Industrial Direct Company Inc.", "Interactive Data Corporation", "San Juan Basin Royalty Trust", "CAE INC", "Washington Federal Inc.", "FirstMerit Corporation", "R.H. Donnelley Corporation", "Whitney Holding Corporation", "Vectren Corporation", "SCP Pool Corporation", "TELEPHONE & DATA SYS INC", "East West Bancorp Inc.", "Colonial Properties Trust", "Andrew Corporation", "Avid Technology Inc.", "Northern Border Partners L.P.", "Jones Lang LaSalle Incorporated", "Maverick Tube Corporation", "Herman Miller Inc.", "Anteon International Corporation", "Seaboard Corporation", "CBRL Group Inc.", "Hyperion Solutions Corporation", "Westlake Chemical Corporation", "Albemarle Corporation", "Overseas Shipholding Group Inc.", "Kos Pharmaceuticals Inc.", "First Marblehead Corporation (The)", "Panera Bread Company", "Focus Media Holding Limited", "Boise Cascade Corporation", "Distribucion y Servicio", "Aspen Insurance Holdings Limited", "Acxiom Corporation", "Manitowoc Company Inc.", "Zenith National Insurance Corporation", "Corn Products International Inc.", "GATX Corporation", "Tractor Supply Company", "Oil States International Inc.", "Foundation Coal Holdings Inc.", "Steel Dynamics Inc.", "Burlington Coat Factory Corporation", "Abgenix Inc.", "First Industrial Realty Trust Inc.", "Palm Inc.", "Korea Fund Inc. (The)", "Telesp Celular Participacoes S.A.", "Alexandria Real Estate Equities Inc.", "MetLife Inc.", "Cree Inc.", "Microsemi Corporation", "AptarGroup Inc.", "Mentor Corporation", "National Financial Partners Corporation", "Wacoal Holdings Corporation", "Neustar Inc.", "Celestica Inc.", "CompuCredit Corporation", "Carter's Inc.", "Dr. Reddy's Laboratories Ltd", "Magellan Midstream Partners L.P.", "Columbia Sportswear Company", "Kilroy Realty Corporation", "Sybase Inc.", "Realty Income Corporation", "South Financial Group Inc. (The)", "Hansen Natural Corporation", "Desarrolladora Homex", "Dillard's Inc.", "Compania de Telecomunicaciones de Chile S.A.", "FactSet Research Systems Inc.", "Hexcel Corporation", "ON Semiconductor Corporation", "Ohio Casualty Corporation", "Cheniere Energy Inc.", "ASSURED GUARANTY LTD", "Toro Company (The)", "Nuveen Municipal Value Fund Inc.", "NFJ Dividend Interest & Premium Strategy Fund", "Atmel Corporation", "Fremont General Corporation", "Alliance Capital Management Holding L.P.", "Taubman Centers Inc.", "Kansas City Southern", "Navistar International Corporation", "Valero LP", "Investment Technology Group Inc.", "Four Seasons Hotels Inc.", "LENNAR CORP", "Select Sector SPDR Fund - Financial", "iShares Russell 3000 Index Fund", "ValueClick Inc.", "Guess? Inc.", "Rite Aid Corporation", "Coldwater Creek Inc.", "Varian Semiconductor Equipment Associates Inc.", "Lincoln Electric Holdings Inc.", "Jack Henry & Associates Inc.", "HUDSON UNITED BANCORP", "Waddell & Reed Financial Inc.", "SBA Communications Corporation", "Simpson Manufacturing Company Inc.", "International Bancshares Corporation", "Copene-Petroquimica do Nordeste", "Timberland Company (The)", "SEACOR SMIT Inc.", "Piedmont Natural Gas Company Inc.", "iShares Russell MidCap Value Index Fund", "Central European Media Enterprises Ltd.", "STERIS Corporation", "Friedman Billings Ramsey Group Inc.", "bebe stores inc.", "Select Sector SPDR Fund - Health Care", "Applebee's International Inc.", "Stolt-Nielsen S.A.", "Downey Financial Corporation", "Polycom Inc.", "Worthington Industries Inc.", "Pacific Sunwear of California Inc.", "Brady Corporation", "Commerce Group Inc. (The)", "Eaton Vance Corporation", "optionsXpress Holdings Inc.", "Kyphon Inc.", "Nicor Inc.", "Men's Wearhouse Inc. (The)", "BancorpSouth Inc.", "Equity One Inc.", "Briggs & Stratton Corporation", "KKR Financial Corp.", "Aktieselskabet Dampskibsselskabet Torm", "John Wiley & Sons Inc.", "United Auto Group Inc.", "Houston Exploration Company (The)", "Cathay General Bancorp", "CORUS Bankshares Inc.", "Westar Energy Inc.", "Encore Acquisition Company", "NCE Petrofund", "Continental Airlines Inc.", "3Com Corporation", "Platinum Underwriters Holdings Ltd", "Anixter International Inc.", "Reynolds and Reynolds Company (The)", "MICROS Systems Inc.", "CLARCOR Inc.", "LifePoint Hospitals Inc.", "Nuveen Preferred and Convertible Income Fund 2", "Perot Systems Corporation", "Regis Corporation", "SVB Financial Group", "Qiagen N.V.", " BISYS Group Inc. (The)", "Knight Transportation Inc.", "Lone Star Technologies Inc.", "Select Sector SPDR Fund - Utilities", "Parametric Technology Corporation", "PMC - Sierra Inc.", "Eaton Vance Limited Duration Income Fund", "Gaylord Entertainment Company", "IPC Holdings Limited", "Nektar Therapeutics", "Psychiatric Solutions Inc.", "Swift Transportation Co. Inc.", "Baidu.com Inc.", "Westamerica Bancorporation", "Veriphone Holdings Inc.", "Amerco", "CBS CORP NEW", "Pimco High Income Fund", "Sybron Dental Specialties Inc.", "Montpelier RE Holdings Ltd", "CACI International Inc.", "Heartland Express Inc.", "General Motors Corporation Ser B Conv Sr Dbs due 2032", "AmeriGas Partners L.P.", "United Surgical Partners International Inc.", "Werner Enterprises Inc.", "Buckeye Partners L.P.", "Gamestop Corporation", "Nutri/System Inc", "Abitibi-Consolidated Inc.", "Whiting Petroleum Corporation", "Odyssey Re Holdings Corporation", "Highwoods Properties Inc.", "Lear Corporation", "aQuantive Inc.", "Quiksilver Inc.", "ACUITY BRANDS INC", "Greenhill", "Pacific Capital Bancorp", "TIBCO Software Inc.", "SkyWest Inc.", "Hanover Compressor Company", "PNM Resources Inc. (Holding Co.)", "Granite Construction Incorporated", "UICI", "Heritage Property Investment Trust Inc", "First Citizens BancShares Inc.", "Fossil Inc.", "Medicis Pharmaceutical Corporation", "Berry Petroleum Company", "Corrections Corporation of America", "Eaton Vance Tax Advantaged Dividend Income Fund", "Hewitt Associates Inc", "Jarden Corporation", "Smedvig Asa Ads Cla", "Dynegy Inc.", "Nuveen Quality Preferred Income Fund 2", "Healthcare Realty Trust Incorporated", "Flowers Foods Inc.", "Sonic Corp.", "Payless Shoesource Inc.", "NewAlliance Bancshares Inc.", "Bill Barrett Corporation", "SiRF Technology Holdings Inc.", "GRUMA S.A. de C.V.", "Valeant Pharmaceuticals International", "Armor Holdings Inc.", "Domino's Pizza Inc", "Ruby Tuesday Inc.", "Watsco Inc.", "Plantronics Inc.", "Post Properties Inc.", "Meritage Corporation", "THQ Inc.", "Rostelecom", "FLIR Systems Inc.", "Borders Group Inc.", "Aeropostale Inc", "BEARINGPOINT INC", "Brasil Telecom Participacoes S.A.", "Hydril", "Selective Insurance Group Inc.", "Nelnet Inc.", "Quanta Services Inc.", "Converium Holding AG", "ABN AMRO CAP FDG TR VII", "iShares Small Cap 600/BARRA Value Index Fund", "AGCO Corporation", "MI Developments Inc", "Avocent Corporation", "Syniverse Holdings Inc.", "Carbo Ceramics Inc.", "DeVry Inc.", "Waste Connections Inc.", "Pilgrim's Pride Corporation", "Marvel Enterprises Inc.", "United Stationers Inc.", "Pan American Silver Corp.", "UCBH Holdings Inc.", "Powerwave Technologies Inc.", "Genlyte Group Incorporated (The)", "OSI Pharmaceuticals Inc.", "Cymer Inc.", "Eaton Vance Tax-Advantaged Global Dividend Income Fu", "Florida East Coast Industries Inc.", "iShares MSCI Pacific Ex-Japan Index Fund", "EGL Inc.", "Global Industries Ltd.", "iShares Cohen & Steers Realty Majors Index Fund", "Corporate Office Properties Trust", "iShares NASDAQ Biotechnology Index Fund", "American Financial Realty Trust", "SOCIEDAD QUIMICA Y MINERA DE", "Compania Cervecerias Unidas S.A.", "Conexant Systems Inc.", "Brookfield Homes Corp", "ICOS Corporation", "Pro-Assurance Corporation", "COLT Telecom Group plc", "Oceaneering International Inc.", "Wellcare Group", "First Midwest Bancorp Inc.", "Trustmark Corporation", "Cousins Properties Incorporated", "Highveld Steel and Vanadium Corporation Limited", "METLIFE INC", "Openwave Systems Inc", "American Medical Systems Holdings Inc.", "Veritas DGC Inc.", "iShares S&P MidCap 400/BARRA Growth Index Fund", "Quest Software Inc.", "Washington Group International Inc.", "United Bankshares Inc.", "IKON Office Solutions Inc.", "Websense Inc.", "Speedway Motorsports Inc.", "iShares Russell MidCap Index Fund", "Rockwood Holdings Inc.", "Reader's Digest Association Inc. (The)", "AMERADA HESS CORP", "Gemplus International S.A.", "Gabelli Dividend", "First Niagara Financial Group Inc.", "Gartner Inc.", "Park National Corporation", "Medarex Inc.", "Quanex Corporation", "Sunrise Senior Living Inc.", "Imation Corporation", "State Auto Financial Corporation", "India Fund Inc. (The)", "ViroPharma Incorporated", "Actuant Corporation", "BE Aerospace Inc.", "Myogen Inc.", "Ritchie Bros. Auctioneers Incorporated", "Nationwide Health Properties Inc.", "Morningstar Inc.", "International Coal Group Inc.", "Hugoton Royalty Trust", "Oce NV", "Annaly Mortgage Management Inc.", "KRONOS WORLDWIDE INC", "ING Clarion Global Real Estate Income Fund", "Emulex Corporation", "PHH CORP", "Benchmark Electronics Inc.", "Salomon Brothers Fund Inc.", "Ceradyne Inc.", "Texas Regional Bancshares Inc.", "Phillips-Van Heusen Corporation", "Bowater Incorporated", "Tommy Hilfiger USA Inc", "Big Lots Inc.", "Washington Gas Light Company", "Electronics for Imaging Inc.", "Alpha Natural Resources inc.", "BP Prudhoe Bay Royalty Trust", "Cedar Fair L.P.", "Max Re Capital Ltd.", "Westinghouse Air Brake Technologies Corporation", "GFI Group Inc.", "Potlatch Corporation", "Yanzhou Coal Mining Company Limited", "Netflix Inc.", "Aberdeen Asia-Pacific Income Fund Inc", "Diagnostic Products Corporation", "Atwood Oceanics Inc.", "United Therapeutics Corporation", "National Australia Bank Limited", "Pennsylvania Real Estate Investment Trust", "Maguire Properties Inc", "EarthLink Inc.", "AirTran Holdings Inc.", "Talbots Inc. (The)", "Nordson Corporation", "Energy Conversion Devices Inc.", "Charming Shoppes Inc.", "Olin Corporation", "Rollins Inc.", "Partner Communications Company Ltd.", "Oregon Steel Mills Inc.", "Grey Wolf Inc.", "ZymoGenetics Inc.", "Van Kampen Senior Income Trust", "KCS Energy Inc.", "Home Properties Inc.", "Mine Safety Appliances Company", "Perrigo Company", "Ventana Medical Systems Inc.", "Rent-A-Center Inc.", "BanColombia S.A.", "UMB Financial Corporation", "Patni Computer Systems Limited", "Headwaters Incorporated", "Tessera Technologies Inc.", "Human Genome Sciences Inc.", "Adams Respiratory Therapeutics Inc.", "Citadel Broadcasting Corporation", "Modis Professional Services Inc.", "Sociedad Quimica y Minera S.A.", "Phoenix Companies Inc. (The)", "Kirby Corporation", "Universal Compression Holdings Inc.", "Sadia S.A.", "Entegris Inc.", "Arrow International Inc.", "Peoples Energy Corporation", "American Home Mortgage Investment Corp", "Ethan Allen Interiors Inc.", "Swift Energy Company", "Old National Bancorp Capital Trust I", "Select Sector SPDR Fund - Technology", "Eagle Materials Inc", "Sunstone Hotel Investors Inc.", "W Holding Company Incorporated", "Komag Inc. New", "Silgan Holdings Inc.", "Lancaster Colony Corporation", "Gemstar-TV Guide International Inc.", "Semtech Corporation", "Dress Barn Inc. (The)", "Duquesne Light Holdings Inc.", "ANSYS Inc.", "Dreamworks Animation SKG Inc.", "Internation Securities Exchange Inc.", "Guitar Center Inc.", "RLI Corporation", "DRS Technologies Inc.", "21st Century Insurance Group", "Investors Bancorp Inc.", "InterDigital Communications Corp.", "Hilb Rogal and Hamilton Company", "Alpharma Inc.", "NBTY Inc.", "Washington Real Estate Investment Trust", "Iamgold Corporation", "Trident Microsystems Inc.", "International Speedway Corporation", "Jack In The Box Inc.", "Maytag Corporation", "Cognex Corporation", "MAF Bancorp Inc.", "W-H Energy services Inc.", "Alliance Resource Partners L.P.", "RF Micro Devices Inc.", "Tetra Technologies Inc.", "Haemonetics Corporation", "Gardner Denver Inc.", "Intrawest Corporation", "CITIGROUP CAP VIII", "Sycamore Networks Inc.", "Roto-Rooter Inc", "Nuance Communications Inc.", "Nu Skin Enterprises Inc.", "Wolverine World Wide Inc.", "Delphi Financial Group Inc.", "AQUILA INC", "Lee Enterprises Incorporated", "Alfa Corporation", "STATS ChipPAC Ltd.", "Remington Oil and Gas Corporation", "Deluxe Corporation", "Life Time Fitness", "Pinnacle Entertainment Inc.", "Comstock Resources Inc.", "P.F.Chang's China Bistro Inc.", "Technical Olympic USA Inc", "Ship Finance International", "RealNetworks Inc.", "Stone Energy Corporation", "Lazard LTD.", "IDACORP Inc.", "United Natural Foods Inc.", "Dick's Sporting Goods Inc", "Immucor Inc.", "Fresh Del Monte Produce Inc.", "Beverly Enterprises. Inc.", "Tupperware Corporation", "Allete Inc.", "EAGLE MATERIALS INC", "Chittenden Corporation", "Valassis Communications Inc.", "Wells Fargo Cap IX", "Hancock Holding Company", "Westwood One Inc.", "OmniVision Technologies Inc.", "USEC Inc.", "Hercules Incorporated", "Stillwater Mining Company", "Brasil Telecom Participacoes S.A.", "Ferrellgas Partners L.P.", "Longs Drug Stores Corporation", "Resources Connection Inc.", "Greater Bay Bancorp", "iShares Small Cap 600/BARRA Growth Index Fund", "Multi-Fineline Electronix Inc.", "Cohen & Steers Reit and Preferred Income Fund Inc", "Quilmes Industrial (Quinsa) S.A.", "HealthExtras Inc.", "Aleris International Inc.", "Acco Brands Corporation", "Coeur d'Alene Mines Corporation", "Informatica Corporation", "BOARDWALK PIPELINE PARTNERS", "MGI PHARMA Inc.", "Curtiss-Wright Corporation", "Baxter International Inc.", "Andrx Group", "General Maritime Corporation", "Senior Housing Properties Trust", "Provident Financial Services", "Watson Wyatt & Company Holdings", "IShares Trust FTSE-Xinhua China 25 Index Fund", "SCHERING PLOUGH CORP", "Thoratec Corporation", "Casey's General Stores Inc.", "Scottish RE Group Limited", "Equinix Inc.", "Net 1 UEPS Technologies Inc.", "Alexander's Inc.", "Corus Entertainmt Incorporated", "Wintrust Financial Corporation", "EMCOR Group Inc.", "Great Atlantic & Pacific Tea Company Inc. (The)", "Quinenco SA", "Liberty All-Star Equity Fund", "Orient-Express Hotels Ltd.", "Strayer Education Inc.", "ATMI Inc.", "Empresas Ica Soc Contrladora", "Ansell Limited", "CORPBANCA", "Idenix Pharmaceuticals Inc.", "PETCO Animal Supplies Inc.", "SRA International Inc", "Nuveen Preferred and Convertible Income Fund", "AK Steel Holding Corporation", "Bio-Rad Laboratories Inc.", "Global Cash Access Holdings Inc.", "OMI Corporation", "Embratel Participacoes SA", "CVB Financial Corporation", "ESCO Technologies Inc.", "Brooks Automation Inc.", "Ameristar Casinos Inc.", "Brocade Communications Systems Inc.", "hanarotelecom incorporated", "Umpqua Holdings Corporation", "Bucyrus International Inc.", "Strategic Hotel Capital Inc", "Linens 'n Things Inc.", "Kronos Incorporated", "NewJersey Resources Corporation", "Biomed Realty Trust", "Perdigao S.A.", "Applied Industrial Technologies Inc.", "Owens & Minor Inc.", "Under Armour Inc.", "Plexus Corp.", "LaSalle Hotel Properties", "ATP Oil & Gas Corporation", "Commercial Net Lease Realty Inc.", "Texas Industries Inc.", "Labor Ready Inc.", "Rydex ETF Trust", "Spansion Inc.", "Tele Centro Oest Celular Participacoes S.A.", "Arris Group Inc", "Merrill Lynch Semiconductor HOLDRS", "Nuveen Insured Municipal Opportunity Fund Inc.", "Sina Corporation", "Digital Insight Corporation", "Hearst-Argyle Television Inc.", "ArvinMeritor Inc.", "CEC Entertainment Inc.", "Transaction Systems Architects  Inc.", "Banta Corporation", "Masisa Sa Ads", "Arbitron Inc.", "iShares Dow Jones U.S. Health Care Index Fund", "Furniture Brands International Inc.", "Pantry Inc. (The)", "WCI Communities Inc", "Randgold Resources Limited", "Domtar Incorporated", "Forward Air Corporation", "U-Store-It Trust", "ABN AMRO CAP FDG TR V", "Children's Place Retail Stores Inc. (The)", "CommScope Inc.", "Penn Virginia Corporation", "Theravance Inc.", "Universal Corporation", "MERRILL LYNCH & CO INC", "Nuveen Equity Premium Opportunity Fund", "Putnam Premier Income Trust", "New River Pharmaceuticals Inc.", "American Greetings Corporation", "Dril-Quip Inc.", "American Reporgraphics Company", "Apria Healthcare Group Inc.", "Provident Bankshares Corporation", "VistaPrint Limited", "Bois D'Arc Energy Inc.", "iShares S&P Europe 350 Index Fund", "Scholastic Corporation", "CCE Spinco Inc.", "Zale Corporation", "Citizens Banking Corporation", "Matthews International Corporation", "Magellan Health Services Inc.", "FelCor Lodging Trust Incorporated", "FormFactor Inc.", "Newcastle Investment Corporation", "Gabelli Equity Trust Inc. (The)", "SANTANDER BANCORP", "Midway Games Inc.", "Varian Inc.", "China Medical Technologies Inc.", "Alabama National BanCorporation", "SSA Global Technologies Inc.", "Companhia Paranaense de Energia (COPEL)", "Kingsway Financial Services Inc.", "Eldorado Gold Corp", "Itron Inc.", "Digital River Inc.", "Delta Petroleum Corporation", "j2 Global Communications Inc", "MKS Instruments Inc.", "Black Hills Corporation", "Aviall Inc.", "Revlon Inc.", "Petrohawk Energy Corporation", "Belden CDT Inc", "Doral Financial Corporation", "Shanda Interactive Entertainment Limited", "Advance America Cash Advance Centers Inc.", "Parker Drilling Company", "Digitas Inc.", "PSS World Medical Inc.", "FileNet Corporation", "iShares Lehman 7-10 Year Treasury Bond Fund", "Quality Systems Inc.", "Callaway Golf Company", "Sonus Networks Inc.", "Verint Systems Inc.", "Georgia Gulf Corporation", "Knight Capital Group Inc.", "BBVA Banco Frances S.A."];

const us_symbols_array = ["XOM", "GE", "MSFT", "BP", "C", "PG", "WMT", "PFE", "HBC", "TM", "JNJ", "BAC", "AIG", "TOT", "NVS", "MO", "GSK", "MTU", "JPM", "RDS/A", "CVX", "SNY", "VOD", "INTC", "IBM", "E", "CSCO", "BRK/A", "UBS", "WFC", "T", "RDS/B", "KO", "CHL", "PEP", "VZ", "COP", "DNA", "AMGN", "STD", "HPQ", "GOOG", "HD", "WB", "SI", "NOK", "UNH", "TWX", "QCOM", "ING", "DCM", "EON", "AZN", "MRK", "SLB", "TEF", "MBT", "NTT", "BHP", "CSR", "BCS", "DELL", "MER", "BBV", "MDT", "ABT", "DT", "AXP", "MS", "SAP", "S", "ORCL", "LLY", "AZ", "GS", "AAPL", "AXA", "WYE", "STO", "EBAY", "PBR", "UTX", "FTE", "AAUK", "DCX", "DB", "ERICY", "MOT", "FNM", "BA", "MMM", "SPY", "RTP", "USB", "CAJ", "TSM", "MC", "TYC", "ABN", "HMC", "EN", "BLS", "LYG", "NSANY", "RY", "LOW", "SNE", "YHOO", "DIS", "MFC", "TGT", "TEM", "BTI", "UPS", "WLP", "TXN", "SZE", "FRE", "BBL", "CAT", "BMY", "PHG", "MCD", "WAG", "DEO", "ECA", "BF", "AMX", "WM", "NAB", "HAL", "DOW", "UN", "BRG", "PBR/A", "OXY", "ACL", "BNS", "VLO", "RIO", "NMR", "EXC", "PRU", "MET", "TD", "CMCSA", "LEH", "TI", "GLW", "SU", "V", "DD", "CEO", "ANZ", "NWS/A", "FDC", "MLEA", "BR", "ALL", "CNQ", "REP", "CCL", "WBK", "HON", "BUD", "EMC", "NHY", "EMR", "STA", "AMAT", "BT", "CAH", "FDX", "BAY", "UL", "DVN", "ELE", "BMO", "BNI", "DA", "VIA/B", "LMT", "KEP", "CL", "SGP", "MRO", "NGG", "GILD", "SSL", "AET", "AA", "TEVA", "KB", "RIG", "KMB", "BHI", "DUK", "D", "STI", "SO", "AEG", "IMI", "NEM", "BEN", "APC", "ADP", "APA", "BBY", "HIG", "PCZ", "SLF", "GDT", "PUK", "BRK/B", "CX", "BK", "SBUX", "TXU", "CNI", "ADBE", "HIT", "ITW", "COST", "AFL", "UNP", "BCM", "SLM", "TOC", "IX", "GD", "AT", "BAX", "MITSY", "MON", "ABB", "CVS", "BCE", "L", "TLM", "COF", "CMX", "CMCSK", "NOC", "GDW", "QQQQ", "NSC", "BBT", "NCC", "YPF", "PTR", "WIT", "ITY", "EFA", "KPN", "FITB", "VE", "CSG", "PGR", "INFY", "ADM", "HCA", "EOG", "SYK", "PKX", "CFC", "STT", "SYMC", "BRCM", "AIB", "BBD", "MRVL", "SHLD", "DTV", "TS", "ACN", "ALA", "MHP", "SCHW", "SPI", "SYY", "PNC", "SCM", "CB", "AMD", "MCO", "SPG", "AMZN", "LR", "CBS", "RIO^", "TLS", "LTR", "GENZ", "RTN", "TELN", "LVS", "FD", "AL", "STJ", "CHT", "BSX", "FUJIY", "XTO", "K", "ACE", "WMI", "SPLS", "GIS", "DHR", "SKM", "CD", "ZMH", "NWS", "CRHCY", "PX", "WY", "KYO", "DE", "NVO", "STM", "IRE", "PEG", "MHS", "MMC", "TMX", "FE", "FPL", "ERTS", "LPL", "PEG^A", "MCK", "PD", "AU", "BDX", "ITU", "IP", "BSY", "WF", "CA", "CCU", "GPS", "NKE", "FRX", "AGN", "WFT", "NBG", "SUNW", "F", "KSS", "SHG", "CI", "TRP", "BIIB", "RF", "TP", "NXY", "RAI", "GCI", "LM", "KFT", "OMC", "MEL", "HDI", "AEP", "CME", "ADI", "A", "ETR", "AHC", "KEY", "WOS", "BSC", "GSF", "TI/A", "EIX", "WMB", "VOLVY", "YUM", "PCG", "IBN", "TLK", "MAR", "SLE", "AKZOY", "CCJ", "PAYX", "APD", "COH", "GM", "SYT", "HET", "EMQ", "IVV", "MXIM", "JCI", "BOX", "KR", "HOT", "XRX", "TKG", "ESRX", "SHR", "NOV", "LUV", "PFG", "WPPGY", "NJ", "EDS", "BTU", "BJS", "NUE", "NT", "IR", "AVP", "UMC", "SUN", "JCP", "CHK", "TKC", "EOP", "RIMM", "ABV", "KMG", "PCU", "NBR", "TVE", "AMT", "STX", "TLD", "KUB", "EDP", "MAS", "GNW", "NIPNY", "PLD", "VNO", "SNDK", "CPB", "SRE", "GGP", "ATE", "NFB", "EQR", "WWY", "TCA^", "RUK", "MTB", "KNBWY", "TKA", "CELG", "IGT", "AHO", "KTC", "FCX", "ABV/C", "LUX", "CUK", "XL", "PCAR", "LU", "PT", "TJX", "KMI", "RIN", "ROK", "DHI", "GFI", "CSX", "NTAP", "ED", "PPL", "OTE", "NTRS", "RG", "HNZ", "LLTC", "ROH", "JWN", "PDG", "CN", "Q", "EWJ", "CHU", "TXT", "AES", "BBBY", "ENB", "NE", "PGN", "FO", "AOC", "ASML", "DO", "RTRSY", "FIA", "CAG", "UPM", "UU", "CIT", "MUR", "MGM", "SWY", "ENL", "ADO", "F^A", "PSO", "CEG", "AEE", "SNP", "PHM", "KLAC", "JNPR", "ODP", "AMP", "GLH", "WFMI", "DGX", "TROW", "PPG", "ASN", "ET", "MI", "CM", "EPD", "XLNX", "ETN", "APOL", "PBI", "LLL", "N", "TDK", "CVH", "UB", "VIP", "ASO", "SII", "NSM", "HLT", "LTD", "ITT", "LNC", "BMET", "PSA", "SNN", "ADSK", "CSC", "TNT", "CCE", "POT", "DOV", "TV", "GG", "ABS", "INTU", "HSY", "MT", "ECL", "CTX", "SEO", "MU", "HUM", "PH", "CMA", "SAN", "CLX", "TRB", "AUO", "EP", "BXP", "CIN", "EOC", "SNV", "EEM", "CHIR", "RCL", "MDY", "IACI", "MIR", "MEDI", "RYAAY", "HAN", "JBL", "ZION", "EXPE", "IVX", "MBI", "IWM", "SRA", "FSH", "AMTD", "ABK", "FISV", "NBL", "CNA", "COL", "UPL", "HRB", "MGA", "KIM", "CINF", "VAR", "HTX", "ENI", "SID", "MCHP", "CHS", "SHPGY", "EXPD", "ESV", "LEN", "AAA", "XEL", "JP", "LH", "TSP", "SOV", "ICI", "NVDA", "KMP", "DIA", "FLR", "CP", "NZT", "LFC", "UVN", "ASD", "SIRI", "DTE", "AZO", "AVZ", "CBE", "NIHD", "PUB", "FMS", "HCBK", "GPC", "ACS", "KBH", "HMY", "AVB", "VMC", "IPR", "SHW", "CTSH", "HAR", "CCH", "EK", "SWN", "DVY", "HSP", "SDX", "CTAS", "BRL", "HMT", "IFX", "RRD", "ALTR", "BPO", "PBG", "STR", "CHRW", "PIXR", "CPL", "WEN", "FNF", "PXD", "NCR", "FSL/B", "PCL", "DASTY", "ELN", "X", "BDK", "CCI", "CNX", "AWC", "GRMN", "NFX", "IHG", "MAT", "BCR", "PCP", "SFA", "TKP", "BG", "BAB", "TU", "JOYG", "RSA", "DEG", "NWL", "PTEN", "DOX", "SAFC", "GRP", "WYNN", "UST", "GWW", "SAY", "GGB", "LRCX", "BER", "KSE", "PHI", "ERF", "HRS", "RHI", "HDB", "VFC", "DRI", "AKH", "STP", "SSP", "AMOV", "VRSN", "CBSS", "UNM", "TTM", "SEPR", "AIZ", "WPO", "WFR", "FLEX", "MTG", "RE", "AVY", "OCR", "LYO", "MOS", "AN", "DISH", "TMK", "ANF", "XMSR", "CBH", "STOSY", "FAST", "MHK", "TLAB", "TLWT", "WTM", "PDE", "RX", "LUK", "AYE", "HNT", "FMX", "LXK", "IWD", "TMS", "ACI", "NI", "BOT", "DVA", "CVC", "CGA", "CMVT", "CAM", "IRM", "WSH", "TMO", "WHR", "CTXS", "BPOP", "NTLI", "TIF", "DDR", "DG", "VTI", "ABI", "HBAN", "CHA", "STZ", "TOL", "TIN", "CHKP", "RSG", "NXTP", "RHAT", "DF", "ATI", "REXMY", "MAC", "GYI", "HMA", "MNST", "SJR", "CDNS", "TSO", "EFX", "JDSU", "AV", "AC", "ORI", "LBTYA", "RDC", "DRE", "ISRG", "BCH", "ERJ", "WEC", "JEC", "WTW", "MWV", "GR", "EC", "MTA", "DNB", "LBTYK", "BMC", "IWF", "JOE", "SANYY", "FHN", "HUN", "PDCO", "RDN", "ASH", "WDC", "AAP", "CKFR", "MAN", "MRBK", "AMLN", "WAT", "MX", "TNE", "BF/B", "EL", "APCC", "CBG", "HRL", "ASBC", "NYB", "SCG", "WSM", "KRI", "SEE", "BEAS", "STN", "CMI", "AMCR", "KG", "LEG", "APH", "JNS", "MIK", "URBN", "ATYT", "FAF", "AXS", "CDWC", "CC", "AMB", "EQT", "TMIC", "IPS", "CRM", "LAF", "NVR", "PCW", "CSB", "STU", "REG", "SIAL", "CTL", "POM", "SVU", "IPG", "PBCT", "MDU", "CIG", "TKS", "MYL", "USG", "SHY", "GTK", "XRAY", "PNW", "GLG", "BLL", "TRH", "PDS", "BF/A", "LAMR", "ASX", "FII", "MKTAY", "ROST", "CEPH", "ISIL", "LNCR", "ARW", "ALV", "SWK", "NVT", "CZN", "SEIC", "TAC", "IJR", "HP", "NYT", "ACV", "AMR", "AIV", "HSIC", "DISCA", "ETP", "SFI", "GPN", "BYD", "AEOS", "MTL", "PPDI", "LRY", "BRO", "CNP", "ACGL", "ACF", "EMN", "MLM", "NVLS", "ATVI", "DST", "NRG", "MFE", "ALD", "PNR", "BNL", "RRC", "TSS", "PMI", "ACAS", "TAP", "CNB", "MICC", "KWK", "BVN", "IJD", "ENDP", "VRTX", "HAS", "NOVL", "HCP", "SVM", "LOGI", "XEC", "MDR", "EV", "FDO", "LIZ", "BEC", "CPS", "CNO", "CYN", "JBHT", "BDM", "ORLY", "EAS", "WPI", "JNY", "IVGN", "TRZ", "CXG", "BC", "OSK", "TSN", "WTR", "BOL", "WRI", "WES", "BVF", "AGE", "PPP", "PETM", "PLL", "CEN", "LSI", "MIL", "WGR", "MKC", "AVT", "SLG", "FTI", "TE", "CVD", "FL", "FRK", "RBK", "TRI", "FSL", "FRT", "EPE", "PXP", "JNC", "EAT", "PRE", "TIP", "RL", "UDR", "TEX", "SPIL", "LNT", "ADS", "ROP", "CBSH", "DADE", "COGN", "OSI", "CERN", "NDAQ", "HCC", "TER", "CYTC", "SLR", "THC", "DNR", "CPT", "ENR", "CYH", "RYL", "IMDC", "SMG", "TDW", "OI", "IIT", "TKR", "TCB", "CRL", "AKAM", "EXBD", "GSL", "UTIW", "HSC", "GLD", "RA", "PDLI", "ICBC", "ERIE", "MKL", "PAS", "DPL", "CDIS", "WFSI", "RJF", "SSCC", "CE", "RYN", "RCI", "RNR", "TSG", "BMS", "MLNM", "DAIEY", "FST", "CPWR", "QLGC", "SNPS", "FHR", "PTV", "CMS", "CECO", "RMK", "MEE", "ZBRA", "IJH", "JEF", "HNI", "SIG", "VTR", "ESI", "AMG", "PAA", "KNM", "CG", "BWA", "SPW", "ANAT", "KMX", "PL", "SPP", "BCO", "AGU", "CCK", "RHA", "IM", "LPX", "LZ", "CHH", "SBL", "JHX", "HUG", "GIB", "HPT", "RRI", "CSE", "HCR", "MCY", "IVW", "NST", "SON", "LVLT", "SMI", "APCS", "IFF", "IVE", "ACH", "IFIN", "MOLX", "UTR", "ARI", "RGA", "BOKF", "PA", "IMCL", "AF", "EYE", "HB", "CEM", "CBI", "AW", "BZH", "FRO", "RSH", "ARG", "CLE", "NU", "WMG", "SFD", "PKI", "ADCT", "XLE", "TK", "CFR", "RMBS", "AFG", "GPM", "NIS", "YRCW", "CAKE", "F^S", "GIL", "AME", "SGMS", "AVX", "R", "FIC", "BDN", "EGN", "IWN", "NCX", "DCI", "ATK", "WSTC", "FCE/A", "MDC", "SHU", "SGR", "ICE", "FULT", "PNP", "JLG", "WL", "BUH", "BAP", "SUG", "RMD", "BKS", "ATG", "NFG", "AJG", "SKYF", "IDTI", "CMC", "CLI", "FWLT", "GT", "OKE", "UNT", "GGG", "VAL", "THE", "MDZ", "LI", "VIA", "BOBJ", "MDG", "TNB", "SFG", "PZE", "CBL", "USM", "DBD", "TIE", "TMA", "SKS", "VSH", "CNF", "FTO", "PENN", "BOH", "SPF", "SLAB", "SRP", "AGG", "DLTR", "SRCL", "WTI", "NLC", "RS", "KMR", "NDE", "NATI", "FMS^", "BLK", "GOL", "VLY", "THG", "HLTH", "RESP", "GNTX", "LAUR", "TPP", "FFH", "PWI", "IRF", "NXL", "GPRO", "FFIV", "BRE", "TFX", "EW", "VSL", "TRW", "KCI", "FLS", "SJM", "AFFX", "WBS", "COG", "CNH", "TRN", "WSC", "PKG", "SCO", "LSTR", "MEOH", "PIO", "SM", "COO", "CBT", "WLT", "IDXX", "OGE", "CVA", "DNP", "NFS", "PSD", "SOSA", "SCI", "ARMHY", "ABER", "ANN", "APPX", "UHS", "THO", "CNT", "HLF", "HAVS", "LFL", "LIHRY", "CVG", "TEK", "IEX", "MTD", "CBD", "AEM", "FCS", "IWO", "LCC", "MOLXA", "KZL", "AMH", "DJ", "CHD", "CLF", "IWB", "SBS", "IJJ", "MLS", "LQD", "MXO", "HHS", "CFFN", "TECD", "EEP", "SNA", "CIEN", "CY", "MTE", "HUB/B", "HOLX", "ALEX", "EDMC", "DRC", "NTES", "KAR", "Y", "CYT", "WOOF", "UIS", "URI", "CPRT", "SIE", "HOV", "PII", "CRS", "ESS", "WCC", "LII", "LEAP", "MGI", "NEW", "KMT", "UGI", "HRP", "CR", "JBLU", "NBIX", "WPS", "PHLY", "RPM", "COGT", "ADTN", "CNET", "SANM", "AGR", "GGY", "ALKS", "TECH", "BNG", "HOC", "RBS^F", "BKD", "TY", "TPK", "IN", "BJ", "ENH", "MDP", "CSQ", "PDX", "TDS", "TSU", "PGS", "SPN", "BLC", "TRMB", "HCN", "FMC", "CEI", "CRE", "BBH", "ACP", "VHI", "DLM", "GXP", "RES", "URS", "CSL", "ATO", "HE", "HNP", "ARA", "FDRY", "CHRT", "MSM", "IDC", "SJT", "CGT", "WFSL", "FMER", "RHD", "WTNY", "VVC", "POOL", "TDS/S", "EWBC", "CLP", "ANDW", "AVID", "NBP", "JLL", "MVK", "MLHR", "ANT", "SEB", "CBRL", "HYSL", "WLK", "ALB", "OSG", "KOSP", "FMD", "PNRA", "FMCN", "OMX", "DYS", "AHL", "ACXM", "MTW", "ZNT", "CPO", "GMT", "TSCO", "OIS", "FCL", "STLD", "BCF", "ABGX", "FR", "PALM", "KF", "TCP", "ARE", "MEU", "CREE", "MSCC", "ATR", "MNT", "NFP", "WACLY", "NSR", "CLS", "CCRT", "CRI", "RDY", "MMP", "COLM", "KRC", "SY", "O", "TSFG", "HANS", "HXM", "DDS", "CTC", "FDS", "HXL", "ONNN", "OCAS", "LNG", "AGO", "TTC", "NUV", "NFJ", "ATML", "FMT", "ACG", "TCO", "KSU", "NAV", "VLI", "ITG", "FS", "LEN/B", "XLF", "IWV", "VCLK", "GES", "RAD", "CWTR", "VSEA", "LECO", "JKHY", "HU", "WDR", "SBAC", "SSD", "IBOC", "BAK", "TBL", "CKH", "PNY", "IWS", "CETV", "STE", "FBR", "BEBE", "XLV", "APPB", "SNSA", "DSL", "PLCM", "WOR", "PSUN", "BRC", "CGI", "ETW", "OXPS", "KYPH", "GAS", "MW", "BXS", "EQY", "BGG", "KFN", "TRMD", "JW/A", "UAG", "THX", "CATY", "CORS", "WR", "EAC", "PTF", "CAL", "COMS", "PTP", "AXE", "REY", "MCRS", "CLC", "LPNT", "JQC", "PER", "RGS", "SIVB", "QGEN", "BSG", "KNX", "LSS", "XLU", "PMTC", "PMCS", "EVV", "GET", "IPCR", "NKTR", "PSYS", "SWFT", "BIDU", "WABC", "PAY", "UHAL", "CBS/A", "PHK", "SYD", "MRH", "CAI", "HTLD", "GBM", "APU", "USPI", "WERN", "BPL", "GME", "NTRI", "ABY", "WLL", "ORH", "HIW", "LEA", "AQNT", "ZQK", "AYI", "GHL", "PCBC", "TIBX", "SKYW", "HC", "PNM", "GVA", "UCI", "HTG", "FCNCA", "FOSL", "MRX", "BRY", "CXW", "EVT", "HEW", "JAH", "SMV/A", "DYN", "JPS", "HR", "FLO", "SONC", "PSS", "NAL", "BBG", "SIRF", "GMK", "VRX", "AH", "DPZ", "RI", "WSO", "PLT", "PPS", "MTH", "THQI", "ROS", "FLIR", "BGP", "ARO", "BE", "BRP", "HYDL", "SIGI", "NNI", "PWR", "CHR", "ABN^G", "IJS", "AG", "MIM", "AVCT", "SVR", "CRR", "DV", "WCN", "PPC", "MVL", "USTR", "PAAS", "UCBH", "PWAV", "GLYT", "OSIP", "CYMI", "ETG", "FLA", "EPP", "EAGL", "GLBL", "ICF", "OFC", "IBB", "AFR", "SQM/A", "CU", "CNXT", "BHS", "ICOS", "PRA", "COLT", "OII", "WCG", "FMBI", "TRMK", "CUZ", "HSVLY", "MET^B", "OPWV", "AMMD", "VTS", "IJK", "QSFT", "WGII", "UBSI", "IKN", "WBSN", "TRK", "IWR", "ROC", "RDA", "AHC^", "GEMP", "GDV", "FNFG", "IT", "PRK", "MEDX", "NX", "SRZ", "IMN", "STFC", "IFN", "VPHM", "ATU", "BEAV", "MYOG", "RBA", "NHP", "MORN", "ICO", "HGT", "OCENY", "NLY", "KRO", "IGR", "ELX", "PHH", "BHE", "SBF", "CRDN", "TRBS", "PVH", "BOW", "TOM", "BLI", "WGL", "EFII", "ANR", "BPT", "FUN", "MXRE", "WAB", "GFIG", "PCH", "YZC", "NFLX", "FAX", "DP", "ATW", "UTHR", "NAU", "PEI", "MPG", "ELNK", "AAI", "TLB", "NDSN", "ENER", "CHRS", "OLN", "ROL", "PTNR", "OS", "GW", "ZGEN", "VVR", "KCS", "HME", "MSA", "PRGO", "VMSI", "RCII", "CIB", "UMBF", "PTI", "HW", "TSRA", "HGSI", "ARXT", "CDL", "MPS", "SQM", "PNX", "KEX", "UCO", "SDA", "ENTG", "ARRO", "PGL", "AHM", "ETH", "SFY", "ONB", "XLK", "EXP", "SHO", "WHI", "KOMG", "SLGN", "LANC", "GMST", "SMTC", "DBRN", "DQE", "ANSS", "DWA", "ISE", "GTRC", "RLI", "DRS", "TW", "ISBC", "IDCC", "HRH", "ALO", "NTY", "WRE", "IAG", "TRID", "ISCA", "JBX", "MYG", "CGNX", "MAFB", "WHQ", "ARLP", "RFMD", "TTI", "HAE", "GDI", "IDR", "C^Z", "SCMR", "CHE", "NUAN", "NUS", "WWW", "DFG", "ILA", "LEE", "ALFA", "STTS", "REM", "DLX", "LTM", "PNK", "CRK", "PFCB", "TOA", "SFL", "RNWK", "SGY", "LAZ", "IDA", "UNFI", "DKS", "BLUD", "FDP", "BEV", "TUP", "ALE", "EXP/B", "CHZ", "VCI", "WSF", "HBHC", "WON", "OVTI", "USU", "HPC", "SWC", "BTM", "FGP", "LDG", "RECN", "GBBK", "IJT", "MFLX", "RNP", "LQU", "HLEX", "ARS", "ABD", "CDE", "INFA", "BWP", "MOGN", "CW", "BAX^", "ADRX", "GMR", "SNH", "PFS", "WW", "FXI", "SGP^M", "THOR", "CASY", "SCT", "EQIX", "UEPS", "ALX", "CJR", "WTFC", "EME", "GAP", "LQ", "USA", "OEH", "STRA", "ATMI", "ICA", "ANSL", "BCA", "IDIX", "PETC", "SRX", "JPC", "AKS", "BIO", "GCA", "OMM", "EMT", "CVBF", "ESE", "BRKS", "ASCA", "BRCD", "HANA", "UMPQ", "BUCY", "SLH", "LIN", "KRON", "NJR", "BMR", "PDA", "AIT", "OMI", "UARM", "PLXS", "LHO", "ATPG", "NNN", "TXI", "LRW", "RSP", "SPSN", "TRO", "ARRS", "SMH", "NIO", "SINA", "DGIN", "HTV", "ARM", "CEC", "TSAI", "BN", "MYS", "ARB", "IYH", "FBN", "PTRY", "WCI", "GOLD", "DTC", "FWRD", "YSI", "ABN^E", "PLCE", "CTV", "PVA", "THRX", "UVV", "MER^H", "JSN", "PPT", "NRPH", "AM", "DRQ", "ARP", "AHG", "PBKS", "VPRT", "BDE", "IEV", "SCHL", "LYV", "ZLC", "CBCF", "MATW", "MGLN", "FCH", "FORM", "NCT", "GAB", "SBP", "MWY", "VARI", "CMED", "ALAB", "SSAG", "ELP", "KFS", "EGO", "ITRI", "DRIV", "DPTR", "JCOM", "MKSI", "BKH", "AVL", "REV", "HAWK", "BDC", "DRL", "SNDA", "AEA", "PKD", "DTAS", "PSSI", "FILE", "IEF", "QSII", "ELY", "SONS", "VRNT", "GGC", "NITE", "BFR"];

// let text = prompt("Enter the Company Name : ");
// let text_string = text.toLowerCase();

// us_companies_array.forEach(us_element => {
//   let element = us_element.toLowerCase().includes(text_string);
//   if (element) {
//     let index = us_companies_array.indexOf(us_element);
//     symbol = us_symbols_array[index];
//   }
// });

// indian_companies_array.forEach(indian_element => {
//   let element1 = indian_element.toLowerCase().includes(text_string);
//   if (element1) {
//     let index = indian_companies_array.indexOf(indian_element);
//     symbol = indian_symbols_array[index] + ".BO";
//   }
// });

// const url = 'https://alpha-vantage.p.rapidapi.com/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=' + symbol + '&outputsize=compact&datatype=json';
// console.log(url);

// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': 'd8dd6cf6a7msha9a35b77edc055ep190fd9jsnbea0221c9988',
//     'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
//   }
// };

// let products = fetch(url, options);

// products.then((response) => response.json())
//     .then((data) => getStocksData(data))
//     .catch((err) => console.log(err))


// const getStocksData = (data) => {
//   let len_data = data['Time Series (Daily)'];
  
//   let len = len_data.length();
//   console.log(len)
//   console.log(data['Time Series (Daily)'][len - 1]);
// }

const ob = {
  "2022-07-26": {
      "1. open": "115.79",
      "2. high": "118.15",
      "3. low": "114.53",
      "4. close": "114.81",
      "5. adjusted close": "114.81",
      "6. volume": "67075064",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "1.0"
  },
  "2022-07-25": {
      "1. open": "122.695",
      "2. high": "123.64",
      "3. low": "120.03",
      "4. close": "121.14",
      "5. adjusted close": "121.14",
      "6. volume": "50221259",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "1.0"
  },
  "2022-07-22": {
      "1. open": "125.01",
      "2. high": "125.5",
      "3. low": "121.3504",
      "4. close": "122.42",
      "5. adjusted close": "122.42",
      "6. volume": "51463797",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "1.0"
  },
  "2022-07-21": {
      "1. open": "123.2",
      "2. high": "124.85",
      "3. low": "121.26",
      "4. close": "124.63",
      "5. adjusted close": "124.63",
      "6. volume": "60239892",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "1.0"
  },
  "2022-07-20": {
      "1. open": "118.615",
      "2. high": "123.475",
      "3. low": "118.32",
      "4. close": "122.77",
      "5. adjusted close": "122.77",
      "6. volume": "71268322",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "1.0"
  },
  "2022-07-19": {
      "1. open": "115.7",
      "2. high": "118.95",
      "3. low": "114.03",
      "4. close": "118.21",
      "5. adjusted close": "118.21",
      "6. volume": "60990043",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "1.0"
  },
  "2022-07-18": {
      "1. open": "115.0",
      "2. high": "117.24",
      "3. low": "113.15",
      "4. close": "113.76",
      "5. adjusted close": "113.76",
      "6. volume": "59115419",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "1.0"
  },
  "2022-07-15": {
      "1. open": "112.5",
      "2. high": "115.59",
      "3. low": "111.59",
      "4. close": "113.55",
      "5. adjusted close": "113.55",
      "6. volume": "84317816",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "1.0"
  },
  "2022-07-14": {
      "1. open": "110.24",
      "2. high": "111.18",
      "3. low": "107.58",
      "4. close": "110.63",
      "5. adjusted close": "110.63",
      "6. volume": "51163140",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "1.0"
  },
  "2022-07-13": {
      "1. open": "107.03",
      "2. high": "111.78",
      "3. low": "106.01",
      "4. close": "110.4",
      "5. adjusted close": "110.4",
      "6. volume": "61353812",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "1.0"
  },
  "2022-07-12": {
      "1. open": "112.16",
      "2. high": "113.23",
      "3. low": "108.34",
      "4. close": "109.22",
      "5. adjusted close": "109.22",
      "6. volume": "54280257",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "1.0"
  },
  "2022-07-11": {
      "1. open": "114.08",
      "2. high": "114.3",
      "3. low": "110.87",
      "4. close": "111.75",
      "5. adjusted close": "111.75",
      "6. volume": "53540019",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "1.0"
  },
  "2022-07-08": {
      "1. open": "114.6",
      "2. high": "116.58",
      "3. low": "113.69",
      "4. close": "115.54",
      "5. adjusted close": "115.54",
      "6. volume": "45719694",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "1.0"
  },
  "2022-07-07": {
      "1. open": "113.85",
      "2. high": "116.99",
      "3. low": "113.49",
      "4. close": "116.33",
      "5. adjusted close": "116.33",
      "6. volume": "57872323",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "1.0"
  },
  "2022-07-06": {
      "1. open": "113.21",
      "2. high": "115.48",
      "3. low": "112.01",
      "4. close": "114.33",
      "5. adjusted close": "114.33",
      "6. volume": "66958884",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "1.0"
  },
  "2022-07-05": {
      "1. open": "107.6",
      "2. high": "114.08",
      "3. low": "106.3242",
      "4. close": "113.5",
      "5. adjusted close": "113.5",
      "6. volume": "76684414",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "1.0"
  },
  "2022-07-01": {
      "1. open": "106.29",
      "2. high": "109.75",
      "3. low": "105.8469",
      "4. close": "109.56",
      "5. adjusted close": "109.56",
      "6. volume": "73021171",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "1.0"
  },
  "2022-06-30": {
      "1. open": "108.11",
      "2. high": "108.18",
      "3. low": "102.52",
      "4. close": "106.21",
      "5. adjusted close": "106.21",
      "6. volume": "97679401",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "1.0"
  },
  "2022-06-29": {
      "1. open": "107.38",
      "2. high": "110.99",
      "3. low": "106.91",
      "4. close": "108.92",
      "5. adjusted close": "108.92",
      "6. volume": "66375341",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "1.0"
  },
  "2022-06-28": {
      "1. open": "113.5",
      "2. high": "114.85",
      "3. low": "107.04",
      "4. close": "107.4",
      "5. adjusted close": "107.4",
      "6. volume": "75172028",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "1.0"
  },
  "2022-06-27": {
      "1. open": "117.09",
      "2. high": "117.98",
      "3. low": "112.7",
      "4. close": "113.22",
      "5. adjusted close": "113.22",
      "6. volume": "62133240",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "1.0"
  },
  "2022-06-24": {
      "1. open": "112.38",
      "2. high": "116.71",
      "3. low": "111.43",
      "4. close": "116.46",
      "5. adjusted close": "116.46",
      "6. volume": "69867618",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "1.0"
  },
  "2022-06-23": {
      "1. open": "110.39",
      "2. high": "113.0",
      "3. low": "107.93",
      "4. close": "112.44",
      "5. adjusted close": "112.44",
      "6. volume": "64345300",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "1.0"
  },
  "2022-06-22": {
      "1. open": "107.43",
      "2. high": "112.13",
      "3. low": "107.02",
      "4. close": "108.95",
      "5. adjusted close": "108.95",
      "6. volume": "60040131",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "1.0"
  },
  "2022-06-21": {
      "1. open": "108.2",
      "2. high": "111.6299",
      "3. low": "103.56",
      "4. close": "108.68",
      "5. adjusted close": "108.68",
      "6. volume": "70901245",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "1.0"
  },
  "2022-06-17": {
      "1. open": "102.8",
      "2. high": "106.98",
      "3. low": "102.51",
      "4. close": "106.22",
      "5. adjusted close": "106.22",
      "6. volume": "99772147",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "1.0"
  },
  "2022-06-16": {
      "1. open": "104.47",
      "2. high": "104.58",
      "3. low": "102.01",
      "4. close": "103.66",
      "5. adjusted close": "103.66",
      "6. volume": "82186301",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "1.0"
  },
  "2022-06-15": {
      "1. open": "103.86",
      "2. high": "109.06",
      "3. low": "103.53",
      "4. close": "107.67",
      "5. adjusted close": "107.67",
      "6. volume": "85011060",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "1.0"
  },
  "2022-06-14": {
      "1. open": "104.19",
      "2. high": "104.88",
      "3. low": "101.43",
      "4. close": "102.31",
      "5. adjusted close": "102.31",
      "6. volume": "69728761",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "1.0"
  },
  "2022-06-13": {
      "1. open": "104.19",
      "2. high": "106.54",
      "3. low": "101.86",
      "4. close": "103.67",
      "5. adjusted close": "103.67",
      "6. volume": "99277742",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "1.0"
  },
  "2022-06-10": {
      "1. open": "113.415",
      "2. high": "114.5",
      "3. low": "109.05",
      "4. close": "109.65",
      "5. adjusted close": "109.65",
      "6. volume": "87412245",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "1.0"
  },
  "2022-06-09": {
      "1. open": "119.99",
      "2. high": "121.3",
      "3. low": "116.1",
      "4. close": "116.15",
      "5. adjusted close": "116.15",
      "6. volume": "67029842",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "1.0"
  },
  "2022-06-08": {
      "1. open": "122.61",
      "2. high": "123.75",
      "3. low": "120.75",
      "4. close": "121.18",
      "5. adjusted close": "121.18",
      "6. volume": "64926594",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "1.0"
  },
  "2022-06-07": {
      "1. open": "122.005",
      "2. high": "124.1",
      "3. low": "120.63",
      "4. close": "123.0",
      "5. adjusted close": "123.0",
      "6. volume": "85156712",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "1.0"
  },
  "2022-06-06": {
      "1. open": "125.245",
      "2. high": "128.99",
      "3. low": "123.81",
      "4. close": "124.79",
      "5. adjusted close": "124.79",
      "6. volume": "134271125",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "20.0"
  },
  "2022-06-03": {
      "1. open": "2484.0",
      "2. high": "2488.0",
      "3. low": "2420.929",
      "4. close": "2447.0",
      "5. adjusted close": "122.35",
      "6. volume": "4880166",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "1.0"
  },
  "2022-06-02": {
      "1. open": "2433.68",
      "2. high": "2512.2",
      "3. low": "2400.9",
      "4. close": "2510.22",
      "5. adjusted close": "125.511",
      "6. volume": "5028034",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "1.0"
  },
  "2022-06-01": {
      "1. open": "2445.12",
      "2. high": "2503.58",
      "3. low": "2412.445",
      "4. close": "2433.68",
      "5. adjusted close": "121.684",
      "6. volume": "6376449",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "1.0"
  },
  "2022-05-31": {
      "1. open": "2325.6",
      "2. high": "2439.8899",
      "3. low": "2313.5",
      "4. close": "2404.19",
      "5. adjusted close": "120.2095",
      "6. volume": "7231708",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "1.0"
  },
  "2022-05-27": {
      "1. open": "2271.0",
      "2. high": "2303.74",
      "3. low": "2252.56",
      "4. close": "2302.93",
      "5. adjusted close": "115.1465",
      "6. volume": "4683008",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "1.0"
  },
  "2022-05-26": {
      "1. open": "2159.4",
      "2. high": "2253.3099",
      "3. low": "2149.07",
      "4. close": "2221.55",
      "5. adjusted close": "111.0775",
      "6. volume": "4650130",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "1.0"
  },
  "2022-05-25": {
      "1. open": "2073.11",
      "2. high": "2163.4999",
      "3. low": "2073.0",
      "4. close": "2135.5",
      "5. adjusted close": "106.775",
      "6. volume": "4656005",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "1.0"
  },
  "2022-05-24": {
      "1. open": "2080.5",
      "2. high": "2108.0",
      "3. low": "2025.2",
      "4. close": "2082.0",
      "5. adjusted close": "104.1",
      "6. volume": "5146734",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "1.0"
  },
  "2022-05-23": {
      "1. open": "2169.22",
      "2. high": "2176.375",
      "3. low": "2079.0",
      "4. close": "2151.14",
      "5. adjusted close": "107.557",
      "6. volume": "5389868",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "1.0"
  },
  "2022-05-20": {
      "1. open": "2191.37",
      "2. high": "2197.9599",
      "3. low": "2100.1868",
      "4. close": "2151.82",
      "5. adjusted close": "107.591",
      "6. volume": "4975032",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "1.0"
  },
  "2022-05-19": {
      "1. open": "2125.61",
      "2. high": "2200.68",
      "3. low": "2123.8581",
      "4. close": "2146.38",
      "5. adjusted close": "107.319",
      "6. volume": "4407127",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "1.0"
  },
  "2022-05-18": {
      "1. open": "2228.79",
      "2. high": "2257.06",
      "3. low": "2124.975",
      "4. close": "2142.25",
      "5. adjusted close": "107.1125",
      "6. volume": "5418959",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "1.0"
  },
  "2022-05-17": {
      "1. open": "2265.5",
      "2. high": "2316.0",
      "3. low": "2225.53",
      "4. close": "2307.37",
      "5. adjusted close": "115.3685",
      "6. volume": "3822387",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "1.0"
  },
  "2022-05-16": {
      "1. open": "2262.0",
      "2. high": "2279.85",
      "3. low": "2207.0827",
      "4. close": "2216.21",
      "5. adjusted close": "110.8105",
      "6. volume": "3728287",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "1.0"
  },
  "2022-05-13": {
      "1. open": "2181.38",
      "2. high": "2263.68",
      "3. low": "2156.0",
      "4. close": "2261.1",
      "5. adjusted close": "113.055",
      "6. volume": "4684228",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "1.0"
  },
  "2022-05-12": {
      "1. open": "2055.0",
      "2. high": "2215.615",
      "3. low": "2048.11",
      "4. close": "2138.61",
      "5. adjusted close": "106.9305",
      "6. volume": "6601257",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "1.0"
  },
  "2022-05-11": {
      "1. open": "2162.07",
      "2. high": "2203.12",
      "3. low": "2088.57",
      "4. close": "2107.44",
      "5. adjusted close": "105.372",
      "6. volume": "5485182",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "1.0"
  },
  "2022-05-10": {
      "1. open": "2225.0",
      "2. high": "2252.85",
      "3. low": "2143.42",
      "4. close": "2177.18",
      "5. adjusted close": "108.859",
      "6. volume": "5271691",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "1.0"
  },
  "2022-05-09": {
      "1. open": "2226.25",
      "2. high": "2280.0",
      "3. low": "2159.14",
      "4. close": "2175.78",
      "5. adjusted close": "108.789",
      "6. volume": "6406219",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "1.0"
  },
  "2022-05-06": {
      "1. open": "2297.0",
      "2. high": "2381.01",
      "3. low": "2261.625",
      "4. close": "2295.45",
      "5. adjusted close": "114.7725",
      "6. volume": "6212995",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "1.0"
  },
  "2022-05-05": {
      "1. open": "2460.0",
      "2. high": "2469.98",
      "3. low": "2301.45",
      "4. close": "2328.14",
      "5. adjusted close": "116.407",
      "6. volume": "7219561",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "1.0"
  },
  "2022-05-04": {
      "1. open": "2472.0",
      "2. high": "2520.0",
      "3. low": "2383.66",
      "4. close": "2518.57",
      "5. adjusted close": "125.9285",
      "6. volume": "5508760",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "1.0"
  },
  "2022-05-03": {
      "1. open": "2481.07",
      "2. high": "2524.41",
      "3. low": "2456.5",
      "4. close": "2485.07",
      "5. adjusted close": "124.2535",
      "6. volume": "3956668",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "1.0"
  },
  "2022-05-02": {
      "1. open": "2448.02",
      "2. high": "2493.365",
      "3. low": "2367.5",
      "4. close": "2490.0",
      "5. adjusted close": "124.5",
      "6. volume": "7439449",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "1.0"
  },
  "2022-04-29": {
      "1. open": "2596.98",
      "2. high": "2615.22",
      "3. low": "2432.5",
      "4. close": "2485.63",
      "5. adjusted close": "124.2815",
      "6. volume": "13633086",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "1.0"
  },
  "2022-04-28": {
      "1. open": "2843.56",
      "2. high": "2918.75",
      "3. low": "2806.0",
      "4. close": "2891.93",
      "5. adjusted close": "144.5965",
      "6. volume": "5865847",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "1.0"
  },
  "2022-04-27": {
      "1. open": "2803.83",
      "2. high": "2838.97",
      "3. low": "2715.67",
      "4. close": "2763.34",
      "5. adjusted close": "138.167",
      "6. volume": "3566815",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "1.0"
  },
  "2022-04-26": {
      "1. open": "2896.0",
      "2. high": "2897.115",
      "3. low": "2778.59",
      "4. close": "2787.82",
      "5. adjusted close": "139.391",
      "6. volume": "3781514",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "1.0"
  },
  "2022-04-25": {
      "1. open": "2880.46",
      "2. high": "2924.43",
      "3. low": "2846.1309",
      "4. close": "2921.48",
      "5. adjusted close": "146.074",
      "6. volume": "3093749",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "1.0"
  },
  "2022-04-22": {
      "1. open": "2965.0",
      "2. high": "2992.3",
      "3. low": "2873.9501",
      "4. close": "2887.0",
      "5. adjusted close": "144.35",
      "6. volume": "3653929",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "1.0"
  },
  "2022-04-21": {
      "1. open": "3094.28",
      "2. high": "3134.76",
      "3. low": "2951.79",
      "4. close": "2965.92",
      "5. adjusted close": "148.296",
      "6. volume": "3198466",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "1.0"
  },
  "2022-04-20": {
      "1. open": "3152.05",
      "2. high": "3152.05",
      "3. low": "3072.07",
      "4. close": "3079.96",
      "5. adjusted close": "153.998",
      "6. volume": "2958600",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "1.0"
  },
  "2022-04-19": {
      "1. open": "3040.59",
      "2. high": "3172.98",
      "3. low": "3031.01",
      "4. close": "3162.31",
      "5. adjusted close": "158.1155",
      "6. volume": "2746321",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "1.0"
  },
  "2022-04-18": {
      "1. open": "3030.47",
      "2. high": "3080.79",
      "3. low": "3005.01",
      "4. close": "3055.7",
      "5. adjusted close": "152.785",
      "6. volume": "2325676",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "1.0"
  },
  "2022-04-14": {
      "1. open": "3107.8",
      "2. high": "3117.94",
      "3. low": "3029.435",
      "4. close": "3034.13",
      "5. adjusted close": "151.7065",
      "6. volume": "2579907",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "1.0"
  },
  "2022-04-13": {
      "1. open": "3000.37",
      "2. high": "3120.5",
      "3. low": "2992.0",
      "4. close": "3110.82",
      "5. adjusted close": "155.541",
      "6. volume": "2669544",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "1.0"
  },
  "2022-04-12": {
      "1. open": "3073.85",
      "2. high": "3101.98",
      "3. low": "3007.66",
      "4. close": "3015.75",
      "5. adjusted close": "150.7875",
      "6. volume": "2758872",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "1.0"
  },
  "2022-04-11": {
      "1. open": "3054.26",
      "2. high": "3082.7299",
      "3. low": "3010.69",
      "4. close": "3022.44",
      "5. adjusted close": "151.122",
      "6. volume": "2605617",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "1.0"
  },
  "2022-04-08": {
      "1. open": "3135.0",
      "2. high": "3147.37",
      "3. low": "3084.615",
      "4. close": "3089.21",
      "5. adjusted close": "154.4605",
      "6. volume": "2300083",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "1.0"
  },
  "2022-04-07": {
      "1. open": "3168.0",
      "2. high": "3201.58",
      "3. low": "3090.23",
      "4. close": "3155.69",
      "5. adjusted close": "157.7845",
      "6. volume": "3406839",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "1.0"
  },
  "2022-04-06": {
      "1. open": "3233.01",
      "2. high": "3244.0",
      "3. low": "3145.09",
      "4. close": "3175.12",
      "5. adjusted close": "158.756",
      "6. volume": "3952788",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "1.0"
  },
  "2022-04-05": {
      "1. open": "3354.83",
      "2. high": "3362.21",
      "3. low": "3265.3201",
      "4. close": "3281.1",
      "5. adjusted close": "164.055",
      "6. volume": "2619553",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "1.0"
  },
  "2022-04-04": {
      "1. open": "3282.5",
      "2. high": "3367.89",
      "3. low": "3264.11",
      "4. close": "3366.93",
      "5. adjusted close": "168.3465",
      "6. volume": "2500398",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "1.0"
  },
  "2022-04-01": {
      "1. open": "3282.99",
      "2. high": "3316.54",
      "3. low": "3246.39",
      "4. close": "3271.2",
      "5. adjusted close": "163.56",
      "6. volume": "2854475",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "1.0"
  },
  "2022-03-31": {
      "1. open": "3328.895",
      "2. high": "3329.9",
      "3. low": "3259.07",
      "4. close": "3259.95",
      "5. adjusted close": "162.9975",
      "6. volume": "2998289",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "1.0"
  },
  "2022-03-30": {
      "1. open": "3370.19",
      "2. high": "3379.01",
      "3. low": "3310.0",
      "4. close": "3326.02",
      "5. adjusted close": "166.301",
      "6. volume": "2808363",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "1.0"
  },
  "2022-03-29": {
      "1. open": "3407.68",
      "2. high": "3416.63",
      "3. low": "3357.37",
      "4. close": "3386.3",
      "5. adjusted close": "169.315",
      "6. volume": "3307680",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "1.0"
  },
  "2022-03-28": {
      "1. open": "3299.5",
      "2. high": "3380.75",
      "3. low": "3298.0",
      "4. close": "3379.81",
      "5. adjusted close": "168.9905",
      "6. volume": "2992691",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "1.0"
  },
  "2022-03-25": {
      "1. open": "3280.0",
      "2. high": "3307.37",
      "3. low": "3245.0",
      "4. close": "3295.47",
      "5. adjusted close": "164.7735",
      "6. volume": "2355611",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "1.0"
  },
  "2022-03-24": {
      "1. open": "3274.99",
      "2. high": "3282.37",
      "3. low": "3201.0",
      "4. close": "3272.99",
      "5. adjusted close": "163.6495",
      "6. volume": "2839903",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "1.0"
  },
  "2022-03-23": {
      "1. open": "3274.1",
      "2. high": "3327.4",
      "3. low": "3253.74",
      "4. close": "3268.16",
      "5. adjusted close": "163.408",
      "6. volume": "2790593",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "1.0"
  },
  "2022-03-22": {
      "1. open": "3236.11",
      "2. high": "3323.34",
      "3. low": "3233.98",
      "4. close": "3297.78",
      "5. adjusted close": "164.889",
      "6. volume": "3147275",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "1.0"
  },
  "2022-03-21": {
      "1. open": "3222.415",
      "2. high": "3261.68",
      "3. low": "3191.06",
      "4. close": "3229.83",
      "5. adjusted close": "161.4915",
      "6. volume": "3283142",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "1.0"
  },
  "2022-03-18": {
      "1. open": "3136.26",
      "2. high": "3231.88",
      "3. low": "3120.22",
      "4. close": "3225.01",
      "5. adjusted close": "161.2505",
      "6. volume": "5063616",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "1.0"
  },
  "2022-03-17": {
      "1. open": "3052.81",
      "2. high": "3149.97",
      "3. low": "3042.8",
      "4. close": "3144.78",
      "5. adjusted close": "157.239",
      "6. volume": "3646742",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "1.0"
  },
  "2022-03-16": {
      "1. open": "2970.0",
      "2. high": "3063.0",
      "3. low": "2947.07",
      "4. close": "3062.08",
      "5. adjusted close": "153.104",
      "6. volume": "4247884",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "1.0"
  },
  "2022-03-15": {
      "1. open": "2857.0",
      "2. high": "2959.7",
      "3. low": "2840.0",
      "4. close": "2947.33",
      "5. adjusted close": "147.3665",
      "6. volume": "3779230",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "1.0"
  },
  "2022-03-14": {
      "1. open": "2919.62",
      "2. high": "2949.0",
      "3. low": "2817.68",
      "4. close": "2837.06",
      "5. adjusted close": "141.853",
      "6. volume": "3704305",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "1.0"
  },
  "2022-03-11": {
      "1. open": "2991.49",
      "2. high": "2993.5",
      "3. low": "2907.38",
      "4. close": "2910.49",
      "5. adjusted close": "145.5245",
      "6. volume": "3445028",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "1.0"
  },
  "2022-03-10": {
      "1. open": "2913.7",
      "2. high": "2973.485",
      "3. low": "2879.56",
      "4. close": "2936.35",
      "5. adjusted close": "146.8175",
      "6. volume": "6753145",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "1.0"
  },
  "2022-03-09": {
      "1. open": "2790.0",
      "2. high": "2805.0",
      "3. low": "2736.56",
      "4. close": "2785.58",
      "5. adjusted close": "139.279",
      "6. volume": "4132833",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "1.0"
  },
  "2022-03-08": {
      "1. open": "2733.67",
      "2. high": "2813.99",
      "3. low": "2671.45",
      "4. close": "2720.29",
      "5. adjusted close": "136.0145",
      "6. volume": "4583129",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "1.0"
  },
  "2022-03-07": {
      "1. open": "2908.87",
      "2. high": "2921.89",
      "3. low": "2748.33",
      "4. close": "2749.06",
      "5. adjusted close": "137.453",
      "6. volume": "4346693",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "1.0"
  },
  "2022-03-04": {
      "1. open": "2943.18",
      "2. high": "2957.0",
      "3. low": "2876.14",
      "4. close": "2912.82",
      "5. adjusted close": "145.641",
      "6. volume": "3049156",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "1.0"
  },
  "2022-03-03": {
      "1. open": "3070.63",
      "2. high": "3078.58",
      "3. low": "2937.12",
      "4. close": "2957.97",
      "5. adjusted close": "147.8985",
      "6. volume": "3259860",
      "7. dividend amount": "0.0000",
      "8. split coefficient": "1.0"
  }
}

console.log(ob);

let keys = Object.keys(ob);
let len = keys.length;
console.log(len);