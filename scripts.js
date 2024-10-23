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

    // Call the function to display updates
    displayUpdates();
};

// Event listener for the Generate Info button
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
    downloadLink.style.display = 'block'; // Show the download link
});

// Updates array to hold the update entries
const updates = [
    {
        version: "v1.2",
        date: "2024-10-24", // Update with the current date
        description: "Added a dynamic updates section for better tracking of changes."
    },
    {
        version: "v1.1",
        date: "2024-10-23",
        description: "No required fields anymore. Optional fields now behave flexibly, and users are not forced to enter power, mics, or other info."
    },
    {
        version: "v1.0",
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
