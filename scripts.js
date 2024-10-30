// Gear lists (sorted A-Z)

const mics = [
    "AKG C1000S", 
    "AKG C3000B", 
    "AKG C414BULS", 
    "AKG C414B-XLII/ST", 
    "AKG C414B-XLS/ST", 
    "AKG C451B/ST", 
    "AKG C460-CKx", 
    "AKG C480-CKx", 
    "ADK A51TL", 
    "ADK SC-1", 
    "ADK TL", 
    "Audio Technica AT825", 
    "Audio Technica AT853a", 
    "Audio Technica AT853Rx", 
    "Audio Technica AT899", 
    "Audio Technica ES933/x", 
    "Audio Technica 40xx", 
    "Audix Micros 1245x", 
    "Audix Micros 1290x", 
    "Audix Micros SCX1x", 
    "Avantone CK-1", 
    "Busman BSC1", 
    "CA 11 Microphone", 
    "CA 14 Microphones – Omni", 
    "CA-11 Omni Microphones", 
    "CA-14 Cardioid", 
    "CAFS Microphones", 
    "Croakie Microphone", 
    "Core Sound Binaural", 
    "Core Sound Budget Binaural", 
    "Core Sound High End Binaural", 
    "Core Sound Low Cost Binaurals", 
    "Core Sound Low Cost Cardioids", 
    "Core Sound Stealthy Cardioid", 
    "DPA 4011", 
    "DPA 4021", 
    "DPA 4022",
    "DPA 4060", 
    "DPA 4061", 
    "DPA 4063", 
    "Earthworks QTC30", 
    "Earthworks SR-30", 
    "Earthworks SR-71", 
    "Earthworks SR-77", 
    "Giant Squid Cardioids", 
    "Giant Squid Omnis", 
    "Grace Design Lunatec V2", 
    "Grace Design Lunatec V3", 
    "Graham Patten ADC-20", 
    "Graham Patten ADC-24", 
    "Graham Patten DMIC-20", 
    "Graham Patten DMIC-24", 
    "Hosa MIT-176", 
    "Line Audio CM3",
    "Line Audio CM4",
    "MBHO 440", 
    "MBHO 603-KAx", 
    "MBHO 603A-KAx", 
    "MBHO MBP603A + KA", 
    "Microtech Gefell M300", 
    "Microtech Gefell SMS2000-Mx", 
    "Microtech-Gefell M930", 
    "Neumann KM100-AKx (aka KM1x)", 
    "Neumann KM184", 
    "Neumann KM18x", 
    "Neumann TLM103", 
    "Neumann TLM170", 
    "Neumann TLM170R", 
    "Neumann U89", 
    "Neumann U87Ai", 
    "Nakamichi CM100-CPx", 
    "Nakamichi CM300-CPx", 
    "Oktava MC012x (aka MK012x)", 
    "Oktava MK-012", 
    "Peluso CEMC6", 
    "Peluso P", 
    "Rode NT1-A", 
    "Rode NT4", 
    "Rode NT5", 
    "Schoeps CCM + MK", 
    "Schoeps CMC + MK", 
    "Schoeps CMC6+MKx", 
    "Sound Professionals SP-AT831", 
    "Sound Professionals SP-BMC-x", 
    "Sound Professionals SP-CMC-20", 
    "Sound Professionals SP-CMC-2", 
    "Sound Professionals SP-CMC-2A", 
    "Sound Professionals SP-CMC-4U", 
    "Sound Professionals SP-CMC-8", 
    "Sound Professionals SP-CMC-9", 
    "Superlux CM-H8K/x", 
    "Sennheiser MKH-8040", 
    "Studio Projects C4", 
    "Studio Projects LSD2",
    "Neumann km140",
    "Neumann km150",
    "Neumann kk184",
    "Neumann kk185"
].sort(); // Sort microphones alphabetically

const devices = [
    "Apple MacBook",
    "Apple iMac",
    "Apple Mac Pro",
    "Dell PC",
    "HP PC",
    "Lenovo PC",
    "ASUS PC",
    "Microsoft Surface",
    "Acer PC",
    "Alienware PC",
    "Razer PC",
    "Custom-built PC"
].sort(); // Sort recorders alphabetically

const mediaOptions = [
    "16GB SDHC Card",
    "32GB SDHC Card",
    "64GB SDXC Card",
    "128GB SDXC Card",
    "256GB SDXC Card",
    "MiniDisc",
    "DAT Tape",
    "Compact Flash",
    "MicroSD Card",
    "CD-R",
    "DVD-R"
]


const micPower = [
    "Apogee AD1000", "Apogee AD500(e)", "Apogee MiniMe", 
    "Audio Technica CP8201", "Church Audio Ugly Battery Box", 
    "C-S Batt Box w/bass roll-off", "Core Sound (C-S) Battery Box", 
    "Core Sound HEB Batt Box", "C-S HEB Batt Box w/bass roll", 
    "Core Sound Low Cost Adapter", "Core Sound Mic2496", 
    "Denecke AD-20", "Denecke PS-2", "Edirol UA5 (digi/w/p/t-mod)", 
    "Giant Squid Battery Box", "Grace Design Lunatec V2", 
    "Grace Design Lunatec V3", "Graham Patten ADC-20", 
    "Graham Patten ADC-24", "Graham Patten DMIC-20", 
    "Graham Patten DMIC-24", "Hosa MIT-176", "Shure FP24", 
    "Sonosax SX-M2", "Sonosax SX-M2/LS2", "Sony Oade-modSBM-1", 
    "Sony SBM-1", "Sound Devices MP-2", "Sound Devices MixPre", 
    "Sound Pros (SP) SP-SPSB-1", "SP SP-SPSB-1 + bass rolloff", 
    "SP SP-SPSB-1 + gain", "SP SP-SPSB-1 + gain/bass roll", 
    "SP SP-SPSB-1 + low cut", "Sound Pros (SP) SP-SPSB-10", 
    "Sound Pros (SP) SP-SPSB-11", "Sound Pros (SP) SP-SPSB-12", 
    "Stewart BPS-1"
].sort(); // Sort power supplies alphabetically

// Gear lists (sorted A-Z)
const recorders = [
    "Aaton Cantar X", 
    "Alesis ProTrack [for iPod]", 
    "Core Sound PDAudio-CF", 
    "Creative Labs Nomad JB3", 
    "Deity PR-2", 
    "Sound Devices 788T",
    "Denon DN-F20R", 
    "Edirol R1", 
    "Edirol R4", 
    "Edirol R-05", 
    "Edirol R-09", 
    "Edirol R-09HR", 
    "Edirol R4 Pro", 
    "Edirol R44",
    "Roland R-26",
    "Fostex DCR302", 
    "Fostex FR-2", 
    "Fostex FR2LE", 
    "HHB PortaDAT", 
    "HHB PortaDrive", 
    "Korg MR-1000", 
    "Korg MR-1", 
    "Korg MR-2", 
    "Marantz PMD 620", 
    "Marantz PMD 660", 
    "Marantz PMD 661", 
    "Marantz PMD 670", 
    "Marantz PMD 671", 
    "M-Audio MicroTrack II", 
    "Mini-Disc, traditional", 
    "Mini-Disc, Hi-MD", 
    "Neuros HDxxGB Recorder", 
    "Nagra Audio Nagra V", 
    "Nagra VI", 
    "Olympus LS-10", 
    "Olympus LS-10S", 
    "Olympus LS-11", 
    "Olympus LS-12", 
    "Olympus LS-14", 
    "Olympus LS-20m", 
    "Olympus LS-100", 
    "Pyle Pro PPR80", 
    "Roland R-26", 
    "Roland R-88", 
    "Sound Devices 664", 
    "Sound Devices 702", 
    "Sound Devices 702t", 
    "Sound Devices 722", 
    "Sound Devices 744", 
    "Sound Devices 744T", 
    "Sound Devices MixPre-6",
    "Sony D100", 
    "Sony D7", 
    "Sony D8", 
    "Sony M1", 
    "Sony PCM-M10", 
    "Sony MZ-NH1 Hi-MD", 
    "Sony PCM-M1", 
    "Sony TCD-D8", 
    "Tascam DA-P1", 
    "Tascam DR-100", 
    "Tascam DR-100 mkII", 
    "Tascam DR-2d", 
    "Tascam DR-40", 
    "Tascam DR-40X", // 32-bit float recorder
    "Tascam FR-AV2", // Added Tascam FR-AV2
    "Tascam HSP82", 
    "Tascam HD-P2", 
    "Zoom F3", // 32-bit float recorder
    "Zoom F6", // 32-bit float recorder
    "Zoom h4/h4n"
].sort(); // Sort recorders alphabetically

const artists = [
    "10cc", "2Pac", "50 Cent", "A", "A Thousand Horses", "ABBA", "ABC", "Aerosmith", "Agnetha Fältskog",
    "Alan Jackson", "Albert King", "Alice Cooper", "Alison Krauss", "The All-American Rejects",
    "The Allman Brothers Band", "Amy Winehouse", "Andre Rieu", "Andrea Bocelli", "Andrew W.K.",
    "Anthrax", "Antonio Carlos Jobim", "Apache Indian", "Arcade Fire", "Ariana Grande",
    "Arrested Development", "Ashley Campbell", "Astrud Gilberto", "Aswad", "Atlanta Rhythm Section",
    "Audioslave", "B.B. King", "Badfinger", "The Band", "Barclay James Harvest", "Barry White",
    "The Beach Boys", "Beastie Boys", "The Beatles", "Beck", "Bee Gees", "Belinda Carlisle", "Ben Harper",
    "Ben Howard", "Benny Andersson", "Big Country", "Big Star", "Bill Evans", "Billie Eilish",
    "Billie Holiday", "Billy Currington", "Billy Fury", "Billy Preston", "Björk", "Black Eyed Peas",
    "Black Sabbath", "Black Uhuru", "Blind Faith", "Blink-182", "Blondie", "Blue Cheer", "Bo Diddley",
    "Bob Dylan", "Bob Marley", "Bob Seger", "Bon Jovi", "Bonnie Raitt", "Booker T", "Boyz II Men",
    "Brantley Gilbert", "Brenda Holloway", "Brian Eno", "The Brothers Johnson", "Bruce Springsteen",
    "Bryan Adams", "Bryan Ferry", "Buddy Guy", "Buddy Holly", "Burning Spear", "Burt Bacharach",
    "The Cadillac Three", "Camel", "Canned Heat", "Captain Beefheart", "Caravan", "Carpenters",
    "Carrie Underwood", "Cat Stevens", "Charlie Parker", "Cheap Trick", "The Chemical Brothers",
    "Cher", "Chris Cornell", "Chris Stapleton", "Chuck Berry", "Cinderella", "The Clash",
    "Climax Blues Band", "Coleman Hawkins", "Commodores", "Common", "The Common Linnets",
    "Corinne Bailey Rae", "Count Basie", "Counting Crows", "Craig Armstrong", "The Cranberries",
    "Cream", "Creedence Clearwater Revival", "Crowded House", "Culture Club", "The Cure",
    "Cutting Crew", "D’Angelo", "DMX", "The Damned", "Daniel Hope", "Danny Wilson & Gary Clark",
    "David Bowie", "Dean Martin", "Debarge", "Deep Purple", "Def Leppard", "Demi Lovato",
    "Demis Roussos", "Derek And The Dominos", "Desmond Dekker", "Diana Krall", "Diana Ross",
    "Diana Ross & The Supremes", "Dierks Bentley", "Dinah Washington", "Dio", "Dire Straits",
    "Disclosure", "Don Henley", "Donna Summer", "The Doors", "Dr Dre", "Drake", "Duke Ellington",
    "Dusty Springfield", "EELS", "EPMD", "Eagles", "Eagles Of Death Metal", "Eazy-E", "Eddie Cochran",
    "Elbow", "Ella Fitzgerald", "Elliott Smith", "Elton John", "Elvis Costello", "Elvis Presley",
    "Emeli Sandé", "Eminem", "Enigma", "Eric B. & Rakim", "Eric Church", "Eric Clapton",
    "Etta James", "Evanescence", "Eve", "Extreme", "Fairport Convention", "Fats Domino",
    "Faust", "Fergie", "Fleetwood Mac", "Florence + The Machine", "The Flying Burrito Brothers",
    "Foo Fighters", "Four Tops", "Foxy Brown", "Frank Sinatra", "Frank Zappa", "Frankie Goes To Hollywood",
    "Freddie Mercury", "Free", "Frida Lyngstad", "The Game", "Gang Starr", "Gary Moore", "Gene Krupa",
    "Gene Vincent", "Genesis", "Gentle Giant", "George Benson", "George Harrison", "George Michael",
    "George Strait", "George Thorogood", "Georgie Fame", "Ghostface Killah", "Ginger Baker",
    "Glass Animals", "Glen Campbell", "The Go-Go’s", "Gong", "Grace Jones", "Graham Parker",
    "Grand Funk Railroad", "Gregory Isaacs", "Gregory Porter", "Guns N’ Roses", "Gwen Stefani",
    "Halsey", "Hank Williams", "Heart", "Heaven 17", "Helmet", "Herbie Hancock", "Hoobastank",
    "Howlin Wolf", "Hoyt Axton", "Huey Lewis & The News", "The Human League", "Humble Pie",
    "INXS", "Ice Cube", "Iggy Pop", "Imagine Dragons", "Iron Maiden", "Isaac Hayes",
    "The Isley Brothers", "It Bites", "J.J. Cale", "Jack Bruce", "Jack Johnson", "Jackson 5",
    "Jacques Brel", "Jadakiss", "The Jam", "James", "James Bay", "James Blake", "James Brown",
    "James Morrison", "James Taylor", "Jane’s Addiction", "Janet Jackson", "Japan & David Sylvian",
    "Jay-Z", "Jeezy", "Jeru the Damaja", "Jessie J", "Jimi Hendrix", "Jimmy Buffett", "Jimmy Cliff",
    "Jimmy Eat World", "Jimmy Ruffin", "Jimmy Smith", "Joan Armatrading", "Joan Baez", "Joe Cocker",
    "Joe Jackson", "Joe Sample", "Joe Walsh / The James Gang", "John Coltrane", "John Fogerty",
    "John Lee Hooker", "John Lennon", "John Martyn", "John Mayall", "John Mellencamp", "John Williams",
    "Johnny Cash", "Johnny Gill", "Joni Mitchell", "Jonny Lang", "Joss Stone", "Jr. Walker & The All Stars",
    "Julie London", "Jurassic 5", "Justin Bieber", "Kacey Musgraves", "Kaiser Chiefs", "Kate Bush",
    "Katy Perry", "Keane", "Keith Jarrett", "Keith Richards", "Keith Urban", "Kendrick Lamar",
    "Kenny Burrell", "Kevin Coyne", "The Killers", "Killing Joke", "Kim Carnes", "The Kinks",
    "Kip Moore", "Kiss", "The Kooks", "Kool And The Gang", "LL Cool J", "Lady A", "Lady GaGa",
    "Lana Del Rey", "Laura Marling", "Led Zeppelin", "Lee ‘Scratch’ Perry", "Lenny Kravitz",
    "Leon Russell", "Lester Young", "Level 42", "The Libertines", "Lightnin’ Hopkins", "Lil Wayne",
    "Linton Kwesi Johnson", "Lionel Richie", "Little Big Town", "Little Richard", "Little Steven",
    "Lloyd Cole", "Lorde", "Louis Armstrong", "Lucinda Williams", "Ludacris", "Ludovico Einaudi",
    "Luke Bryan", "Lulu", "The Lumineers", "Lynyrd Skynyrd", "Maddie & Tae", "Madonna", "Magazine",
    "The Mamas & The Papas", "Marc Almond", "Marilyn Manson", "Mark Knopfler", "Maroon 5",
    "Martha Reeves & The Vandellas", "The Marvelettes", "Marvin Gaye", "Mary Hopkin", "Mary J. Blige",
    "Mary Wells", "Massive Attack", "Master P", "The Mavericks", "Maxi Priest", "McCoy Tyner",
    "Meat Loaf", "Megadeth", "Melody Gardot", "Metallica", "Method Man", "Michael Jackson",
    "Michael Kiwanuka", "Michael Nyman", "Mike & the Mechanics", "Mike Oldfield", "Miles Davis",
    "Minnie Riperton", "The Moody Blues", "Morrissey", "Motörhead", "Muddy Waters", "Mumford & Sons",
    "Mötley Crüe", "N.W.A", "Nanci Griffith", "Nas", "Nat King Cole", "Nazareth", "Ne-Yo",
    "Neil Diamond", "Neil Young", "Nelly", "Neneh Cherry", "New Edition", "New York Dolls",
    "Nick Drake", "Nicki Minaj", "Nik Kershaw", "Nina Simone", "Nine Inch Nails", "Nirvana",
    "The Nitty Gritty Dirt Band", "No Doubt", "Norah Jones", "OMD", "Ocean Colour Scene",
    "OneRepublic", "Onyx", "Oscar Peterson", "Otis Redding", "The Ozark Mountain Daredevils",
    "PJ Harvey", "Papa Roach", "Pat Benatar", "Pato Banton", "Patsy Cline", "Patty Griffin",
    "Paul McCartney and Wings", "Paul Simon", "Paul Weller", "Peaches & Herb", "Pearl Jam",
    "Peggy Lee", "Pete Townshend", "Peter Frampton", "Phil Collins", "Phil Manzanera",
    "PiL (Public Image Ltd)", "Pink Floyd", "Placebo", "Poco", "Poison", "The Police", "Portishead",
    "Prince", "Public Enemy", "Pulp", "Queen", "Queens Of The Stone Age", "Quicksilver Messenger Service",
    "Quincy Jones", "R.E.M.", "Rainbow", "Rammstein", "Ray Charles", "Reba McEntire",
    "Red Hot Chili Peppers", "Redman", "Richie Havens", "Rick James", "Rick Nelson", "Rick Ross",
    "Rick Wakeman", "The Righteous Brothers", "Rihanna", "Ringo Starr", "Rise Against", "Rob Zombie",
    "Robbie Williams", "Robert Cray", "Robert Glasper", "Robert Palmer", "Robert Plant",
    "Rod Stewart", "Roger Daltrey", "The Rolling Stones", "Ronnie Lane", "Ronnie Wood",
    "Rory Gallagher", "The Roots", "Rosanne Cash", "Roxy Music", "Roy Orbison", "Ruff Ryders",
    "Rufus Wainwright", "Rush", "The Ruts", "Saint Etienne", "Salt-n-Pepa", "Sam Cooke", "Sam Hunt",
    "Sam Smith", "Sammy Hagar", "Sandy Denny", "Schiller", "Scorpions", "Scott Walker",
    "Secret Garden", "Selena Gomez", "Sensational Alex Harvey Band", "Serge Gainsbourg",
    "Sergio Mendes", "Sex Pistols", "Shaggy", "Sham 69", "Shania Twain", "Sheryl Crow",
    "Simple Minds", "Siouxsie & The Banshees", "Slayer", "Slick Rick", "Sly & Robbie", "Small Faces",
    "The Smashing Pumpkins", "Smokey Robinson", "Smokey Robinson & The Miracles", "Snoop Dogg",
    "Snow Patrol", "Soft Cell", "Sonic Youth", "Sonny Boy Williamson", "Soul II Soul", "Soundgarden",
    "Spandau Ballet", "Sparks", "Spice Girls", "Stan Getz", "The Statler Brothers", "Status Quo",
    "Steel Pulse", "Steely Dan", "Steppenwolf", "Stereo MCs", "Stereophonics", "Steve Earle",
    "Steve Hackett", "Steve Hillage", "Steve Miller Band", "Steve Winwood", "Steven Tyler",
    "Stevie Wonder", "Sting", "The Style Council", "Styx", "Sublime", "Sum 41", "Supertramp",
    "Suzanne Vega", "T-Bone Walker", "T. Rex", "Take That", "Tammi Terrell", "Tangerine Dream",
    "Taylor Swift", "Tears For Fears", "Teena Marie", "Temple Of The Dog", "The Temptations",
    "Tesla", "Texas", "Thelma Houston", "Thelonious Monk", "Thin Lizzy", "Thomas Rhett",
    "Three Dog Night", "Tim McGraw", "Toby Keith", "Tom Jones", "Tom Petty", "Tom Waits",
    "Toots & The Maytals", "Tori Amos", "Traffic", "The Tragically Hip", "Traveling Wilburys",
    "The Tubes", "U2", "UB40", "Ultravox", "Underworld", "Van der Graaf Generator", "Vangelis",
    "The Velvet Underground", "The Verve", "Vince Gill", "The Walker Brothers", "The Weeknd",
    "Weezer", "Wes Montgomery", "Wet Wet Wet", "will.i.am", "Whitesnake", "The Who", "William Orbit",
    "Willie Nelson", "Wilson Pickett", "Wishbone Ash", "Wolfmother", "Yeah Yeah Yeahs", "Yello",
    "Yes", "Zucchero"
].sort(); // Sort recorders alphabetically


// Updates array to hold the update entries
// Updates array to hold the update entries
// Updates array to hold the update entries
const updates = [

    {
        version: "v1.6",
        date: "2024-10-28",
        description: "Added 'Device' dropdown for PC brands like 'Dell PC', 'Apple MacBook', etc., with 'Other' option for custom input. Enhanced form functionality by including an 'Artist' dropdown populated with a comprehensive list of popular artists and an 'Other' option for custom entry."
    },
    {
        version: "v1.5",
        date: "2024-10-27",
        description: "Enabled 'Other' option for dropdowns, allowing custom gear entries in Microphones, Recorders, Power Supply, Processing Software, Tracking Software, and Conversion Software. The custom entries are now included in the source lineage."
    },
    {
        version: "v1.4",
        date: "2024-10-24",
        description: "Introduced dynamically populated dropdowns for Microphones, Power Supply, Recorders, and Media with predefined options."
    },
    {
        version: "v1.3",
        date: "2024-10-23",
        description: "Adjusted Transfer section for clearer lineage display, with Media positioned before the initial format in the lineage chain."
    },
    {
        version: "v1.2",
        date: "2024-10-22",
        description: "Form flexibility improvements: Optional fields like Power Supply and Media are now non-mandatory, with essential fields as Artist, Date, Venue, City, Country, and Final Format."
    },
    {
        version: "v1.1",
        date: "2024-10-21",
        description: "Initial release of the Info TXT generator for audience (AUD) sources with flexible, form-based inputs."
    }
];

// Function to display updates
function displayUpdates() {
    const updatesList = document.getElementById("updatesList");
    updatesList.innerHTML = ''; // Clear existing list

    updates.forEach(update => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<strong>${update.version} - ${update.date}</strong>: ${update.description}`;
        updatesList.appendChild(listItem);
    });
}

// Single window.onload function to initialize everything on page load
window.onload = function() {
    // Populate year and day dropdowns, and dropdowns with "Other" option for dynamic input
    populateYearDay();
    populateDropdown("mics", mics, "otherMic");
    populateDropdown("power", micPower, "otherPower");
    populateDropdown("recorders", recorders, "otherRecorder");
    populateDropdown("device", devices, "otherDevice"); // Device dropdown with Other option
    populateDropdown("artist", artists, "otherArtist"); // Artist dropdown with Other option
    setupSoftwareDropdown("processingSoftware", "otherProcessingSoftware");
    setupSoftwareDropdown("trackingSoftware", "otherTrackingSoftware");
    setupSoftwareDropdown("conversionSoftware", "otherConversionSoftware");

    // Populate Media dropdown without "Other" option
    const mediaSelect = document.getElementById("media");
    mediaOptions.forEach(media => {
        const option = document.createElement("option");
        option.value = media;
        option.textContent = media;
        mediaSelect.appendChild(option);
    });

    // Display updates on page load
    displayUpdates();
};

// Helper function for year and day dropdowns
function populateYearDay() {
    const yearSelect = document.getElementById("year");
    const currentYear = new Date().getFullYear();
    for (let i = currentYear; i >= 1950; i--) {
        const option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        yearSelect.appendChild(option);
    }

    const daySelect = document.getElementById("day");
    for (let i = 1; i <= 31; i++) {
        const option = document.createElement("option");
        option.value = String(i).padStart(2, '0');
        option.textContent = i;
        daySelect.appendChild(option);
    }
}

// Helper function to populate dropdowns with "Other" option
function populateDropdown(elementId, optionsArray, otherElementId) {
    const selectElement = document.getElementById(elementId);
    optionsArray.forEach(option => {
        const opt = document.createElement("option");
        opt.value = option;
        opt.textContent = option;
        selectElement.appendChild(opt);
    });
    selectElement.appendChild(new Option("Other", "other"));
    selectElement.addEventListener("change", function() {
        document.getElementById(otherElementId).style.display = this.value === "other" ? "block" : "none";
    });
}

// Specific function for Processing, Tracking, and Conversion Software dropdowns
function setupSoftwareDropdown(elementId, otherElementId) {
    const selectElement = document.getElementById(elementId);
    selectElement.addEventListener("change", function() {
        document.getElementById(otherElementId).style.display = this.value === "other" ? "block" : "none";
    });
}

// Form submission event listener
document.getElementById("bootlegForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Collect selected or custom values for each field
    const selectedMic = document.getElementById("mics").value === "other"
        ? document.getElementById("otherMic").value.trim()
        : document.getElementById("mics").value.trim();
    const selectedRecorder = document.getElementById("recorders").value === "other"
        ? document.getElementById("otherRecorder").value.trim()
        : document.getElementById("recorders").value.trim();
    const selectedPower = document.getElementById("power").value === "other"
        ? document.getElementById("otherPower").value.trim()
        : document.getElementById("power").value.trim();
    const selectedArtist = document.getElementById("artist").value === "other"
        ? document.getElementById("otherArtist").value.trim()
        : document.getElementById("artist").value.trim();

    // Additional form fields
    const year = document.getElementById("year").value;
    const month = document.getElementById("month").value.padStart(2, '0');
    const day = document.getElementById("day").value.padStart(2, '0');
    const date = `${year}-${month}-${day}`;
    const venue = document.getElementById("venue").value.trim();
    const city = document.getElementById("city").value.trim();
    const state = document.getElementById("state").value.trim();
    const country = document.getElementById("country").value;
    const tour = document.getElementById("tour").value.trim();
    const finalBitDepth = document.getElementById("finalBitDepth")?.value.trim();
    const finalSampleRate = document.getElementById("finalSampleRate")?.value.trim();
    const initialBitDepth = document.getElementById("initialBitDepth")?.value.trim();
    const initialSampleRate = document.getElementById("initialSampleRate")?.value.trim();
    const selectedMedia = document.getElementById("media").value.trim();
    const device = document.getElementById("device").value === "other"
        ? document.getElementById("otherDevice").value.trim()
        : document.getElementById("device").value.trim();
    const processingSoftware = document.getElementById("processingSoftware").value === "other"
        ? document.getElementById("otherProcessingSoftware").value.trim()
        : document.getElementById("processingSoftware").value.trim();
    const trackingSoftware = document.getElementById("trackingSoftware").value === "other"
        ? document.getElementById("otherTrackingSoftware").value.trim()
        : document.getElementById("trackingSoftware").value.trim();
    const conversionSoftware = document.getElementById("conversionSoftware").value === "other"
        ? document.getElementById("otherConversionSoftware").value.trim()
        : document.getElementById("conversionSoftware").value.trim();
    const recordedBy = document.getElementById("recordedBy").value.trim();
    const tracklistInput = document.getElementById("tracklist").value.trim();
    const tracklist = tracklistInput ? tracklistInput.split(',').map(track => track.trim()) : [];

    // Construct the info text content
    let info = `${selectedArtist}\n${date}\n${venue}\n${city}${state ? ', ' + state : ''}, ${country}\n\n`;
    if (tour) info += `Tour: ${tour}\n\n`;

    // Tracklist section if provided
    if (tracklist.length > 0) {
        info += `Tracklist:\n`;
        tracklist.forEach((track, index) => {
            info += `${String(index + 1).padStart(2, '0')} ${track}\n`;
        });
        info += '\n';
    }

    // Source section with all custom options included if provided
    let sourceInfo = "Source: ";
    sourceInfo += selectedMic ? `${selectedMic} > ` : "";
    sourceInfo += selectedPower ? `${selectedPower} > ` : "";
    sourceInfo += selectedRecorder ? `${selectedRecorder}` : "";
    info += `${sourceInfo}\n\n`;

    // Transfer section with all provided options
    let transferInfo = "Transfer: ";
    transferInfo += selectedMedia ? `${selectedMedia} > ` : "";
    transferInfo += initialBitDepth && initialSampleRate ? `${initialBitDepth}/${initialSampleRate} WAV > ` : "";
    transferInfo += device ? `${device} > ` : "";
    transferInfo += processingSoftware ? `${processingSoftware} > ` : "";
    transferInfo += trackingSoftware ? `${trackingSoftware} > ` : "";
    transferInfo += conversionSoftware ? `${conversionSoftware} > ` : "";
    transferInfo += finalBitDepth && finalSampleRate ? `${finalBitDepth}/${finalSampleRate} FLAC` : "";
    info += `${transferInfo}\n\n`;

    // Add recorded by information if provided
    if (recordedBy) info += `Recorded and transferred by ${recordedBy}.\n\n`;

    // Footer with the current date
    const compilationDate = new Date().toLocaleDateString();
    info += `TXT File compiled on ${compilationDate}.\n`;

    // Create Blob and setup download link
    const blob = new Blob([info], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const downloadLink = document.getElementById("fileDownload");
    downloadLink.href = url;
    downloadLink.download = `${selectedArtist} - ${date} - ${city}, ${country} - AUD.txt`;
    downloadLink.style.display = 'block';
});
