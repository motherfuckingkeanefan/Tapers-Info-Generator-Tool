document.getElementById("bootlegForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get values from the form (no fields are required)
    const artist = document.getElementById("artist").value.trim();
    const year = document.getElementById("year").value;
    const month = document.getElementById("month").value.padStart(2, '0'); // Ensure two digits for month
    const day = document.getElementById("day").value.padStart(2, '0'); // Ensure two digits for day
    const date = year && month && day ? `${year}-${month}-${day}` : ''; // Combine year, month, and day if they exist
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

    // Generate info content
    let info = `${artist ? artist : 'Unknown Artist'}\n${date ? date : 'Unknown Date'}\n${venue ? venue : 'Unknown Venue'}\n${city ? city : 'Unknown City'}${state ? ', ' + state : ''}, ${country ? country : 'Unknown Country'}\n\n`; 

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
        if (finalFormat) info += `${finalFormat}`;
        info += '\n\n'; // Add line break after transfer if any transfer info exists
    }

    // Add recorded by info dynamically (optional field)
    if (recordedBy) {
        info += `Recorded By: ${recordedBy}\n\n`;
    }

    // Add tracklist if provided
    if (tracklistInput) {
        const tracklist = tracklistInput.split(',').map(track => track.trim()).filter(track => track !== '').join('\n');
        info += `Tracklist:\n${tracklist}\n`;
    }

    // Create a downloadable file link
    const fileName = `${artist ? artist.replace(/\s+/g, '_') : 'Taper_Info'}.txt`;
    const blob = new Blob([info], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    // Show the download link and update its href
    const downloadLink = document.getElementById("fileDownload");
    downloadLink.href = url;
    downloadLink.download = fileName;
    downloadLink.style.display = 'block'; // Show download link after generation
});
