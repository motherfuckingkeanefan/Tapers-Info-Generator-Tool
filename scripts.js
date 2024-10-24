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
    "DPA 40xx (compact series)", 
    "DPA 406x (mini series)", 
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
    "Studio Projects LSD2"
].sort(); // Sort microphones alphabetically


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
    "Denon DN-F20R", 
    "Edirol R1", 
    "Edirol R4", 
    "Edirol R-05", 
    "Edirol R-09", 
    "Edirol R-09HR", 
    "Edirol R09H", 
    "Edirol R4 Pro", 
    "Edirol R44", 
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
    "Sony D100", 
    "Sony D7", 
    "Sony D8", 
    "Sony M1", 
    "Sony M10", 
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



// Populate year and day dropdowns on page load
window.onload = function() {
    // Populate year dropdown
    const yearSelect = document.getElementById("year");
    const currentYear = new Date().getFullYear();
    
    // Add the current year first
    const currentYearOption = document.createElement("option");
    currentYearOption.value = currentYear;
    currentYearOption.textContent = currentYear;
    yearSelect.appendChild(currentYearOption);

    // Add previous years in descending order
    for (let i = currentYear - 1; i >= 1950; i--) {
        const option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        yearSelect.appendChild(option);
    }

    // Populate day dropdown
    const daySelect = document.getElementById("day");
    for (let i = 1; i <= 31; i++) {
        const option = document.createElement("option");
        option.value = String(i).padStart(2, '0'); // Ensure two digits
        option.textContent = i;
        daySelect.appendChild(option);
    }

    // Populate mic dropdown
    const micSelect = document.getElementById("mics");
    mics.forEach(mic => {
        const option = document.createElement("option");
        option.value = mic;
        option.textContent = mic;
        micSelect.appendChild(option);
    });

    // Populate power dropdown
    const powerSelect = document.getElementById("power");
    micPower.forEach(power => {
        const option = document.createElement("option");
        option.value = power;
        option.textContent = power;
        powerSelect.appendChild(option);
    });

    // Populate recorder dropdown
    const recorderSelect = document.getElementById("recorder");
    recorders.forEach(recorder => {
        const option = document.createElement("option");
        option.value = recorder;
        option.textContent = recorder;
        recorderSelect.appendChild(option);
    });

    // Call the function to display updates
    displayUpdates();
};

// Form submission event listener
document.getElementById("bootlegForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get values from the form (required fields)
    const artist = document.getElementById("artist").value.trim();
    const year = document.getElementById("year").value;
    const month = document.getElementById("month").value.padStart(2, '0'); // Ensure two digits for month
    const day = document.getElementById("day").value.padStart(2, '0'); // Ensure two digits for day
    const date = `${year}-${month}-${day}`; // Combine year, month, and day
    const venue = document.getElementById("venue").value.trim();
    const city = document.getElementById("city").value.trim();
    const state = document.getElementById("state").value.trim(); // Can be empty if not a US show
    const country = document.getElementById("country").value.trim();
    const finalFormat = document.getElementById("finalFormat").value.trim();

    // Optional fields
    const tour = document.getElementById("tour").value.trim(); // Get tour input (optional)
    const mics = document.getElementById("mics").value.trim(); // Get mics (optional)
    const power = document.getElementById("power").value.trim(); // Get power (optional)
    const recorder = document.getElementById("recorder").value.trim(); // Get recorder (optional)
    const media = document.getElementById("media").value.trim(); // Get media (optional)
    const device = document.getElementById("device").value.trim(); // Get device (optional)
    const initialFormat = document.getElementById("initialFormat").value.trim(); // Get initial format (optional)
    const processingSoftware = document.getElementById("processingSoftware").value.trim(); // Get processing software (optional)
    const trackSoftware = document.getElementById("trackSoftware").value.trim(); // Get track software (optional)
    const conversionSoftware = document.getElementById("conversionSoftware").value.trim(); // Get conversion software (optional)
    const recordedBy = document.getElementById("recordedBy").value.trim(); // Recorded by (optional)
    const tracklistInput = document.getElementById("tracklist").value.trim(); // Tracklist (optional)

    // Ensure required fields are filled out
    if (!artist || !date || !venue || !city || !country || !finalFormat) {
        alert("Please fill out the required fields: Artist, Date, Venue, City, Country, and Final Format.");
        return;
    }

    // Split tracklist by commas and trim spaces (if provided)
    const tracklist = tracklistInput ? tracklistInput.split(',').map(track => track.trim()) : [];

    // Generate info content
    let info = `${artist}\n${date}\n${venue}\n${city}${state ? ', ' + state : ''}, ${country}\n\n`; 

    // Add tour if provided
    if (tour) info += `Tour: ${tour}\n\n`;

    // Add source info dynamically (only if filled in)
    if (mics || power || recorder) {
        info += `Source: `;
        if (mics) info += `${mics} > `;
        if (power) info += `${power} > `;
        if (recorder) info += `${recorder}`;
        info += '\n\n'; // Add line break after source if any source info exists
    }

    // Add transfer process dynamically (optional fields)
    if (media || device || initialFormat || processingSoftware || trackSoftware || conversionSoftware || finalFormat) {
        info += `Transfer: `;
        if (media) info += `${media} > `;
        if (device) info += `${device} > `;
        if (initialFormat) info += `${initialFormat} > `;
        if (processingSoftware) info += `${processingSoftware} > `;
        if (trackSoftware) info += `${trackSoftware} > `;
        if (conversionSoftware) info += `${conversionSoftware} > `;
        info += `${finalFormat}\n\n`; // Always include final format
    }

    // Add recorded by if provided
    if (recordedBy) info += `Recorded and transferred by ${recordedBy}.\n\n`;

    // Add tracklist if provided
    if (tracklist.length > 0) {
        info += `Tracklist:\n`;
        tracklist.forEach((track, index) => {
            info += `${String(index + 1).padStart(2, '0')} ${track}\n`;
        });
    }

    // Get the current date for the footer
    const compilationDate = new Date().toLocaleDateString(); // Format: MM/DD/YYYY
    info += `\nTXT File compiled on ${compilationDate}.\n`;

    // Create a Blob for the text file
    const blob = new Blob([info], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    // Set up the download link
    const fileName = `${artist} - ${date} - ${venue}, ${city}${state ? ', ' + state : ''}, ${country} ${mics ? `{${mics}}` : ''}{${finalFormat}}.txt`;
    const downloadLink = document.getElementById("fileDownload");
    downloadLink.href = url;
    downloadLink.download = fileName;

    // Display the download link
    downloadLink.style.display = 'block';
});

// Updates array to hold the update entries
const updates = [
    {
        version: "v1.4",
        date: "2024-10-24",
        description: "Added dropdowns for Microphones, Power Supply, and Recorders selections to enhance data entry options."
    },
    {
        version: "v1.3",
        date: "2024-10-24",
        description: "Added a dynamic updates section for better tracking of changes."
    },
    {
        version: "v1.2",
        date: "2024-10-23",
        description: "Optional fields are now flexible, and users are not required to enter details like power or media. The only required fields are: Artist, Date, Venue, City, Country, and Final Format."
    },
    {
        version: "v1.1",
        date: "2024-10-22",
        description: "Initial release. Info TXT generator for AUD sources with flexible form fields."
    }
];

// Function to display updates
function displayUpdates() {
    const updatesList = document.getElementById("updatesList");
    
    // Clear existing list
    updatesList.innerHTML = '';

    // Append updates to the list
    updates.forEach(update => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<strong>${update.version} - ${update.date}</strong>: ${update.description}`;
        updatesList.appendChild(listItem);
    });
}
