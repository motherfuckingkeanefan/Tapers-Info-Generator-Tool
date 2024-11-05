document.addEventListener('DOMContentLoaded', () => {
    const artistSelect = document.getElementById('artist');
    const customArtistInput = document.getElementById('customArtist');
    const venueSelect = document.getElementById('venue');
    const customVenueInput = document.getElementById('customVenue');
    const sourceMicSelect = document.getElementById('sourceMic');
    const customMicInput = document.getElementById('customMic');
    const sourcePreampSelect = document.getElementById('sourcePreamp');
    const customPreampInput = document.getElementById('customPreamp');
    const recorderSelect = document.getElementById('recorder');
    const customRecorderInput = document.getElementById('customRecorder');
    const transferMediaSelect = document.getElementById('transferMedia');
    const customMediaInput = document.getElementById('customMedia');
    const processingSoftwareSelect = document.getElementById('processingSoftware');
    const customProcessingInput = document.getElementById('customProcessing');
    const trackingSoftwareSelect = document.getElementById('trackingSoftware');
    const customTrackingInput = document.getElementById('customTracking');
    const conversionSoftwareSelect = document.getElementById('conversionSoftware');
    const customConversionInput = document.getElementById('customConversion');
    const outputFormatSelect = document.getElementById('outputFormat');
    const setlistContainer = document.getElementById('setlistContainer');
    const countrySelect = document.getElementById('country');
    const stateInput = document.getElementById('state');
    const customCountryInput = document.getElementById('customCountry');
    const tapingLocation = document.getElementById('tapingLocation');
    const micOrientation = document.getElementById('micOrientation');

    // Show custom input when "Other" is selected
    function toggleCustomInput(selectElement, customInputId) {
        const customInput = document.getElementById(customInputId);
        customInput.style.display = selectElement.value === 'Other' ? 'block' : 'none';
    }

    // Event listeners for gear dropdowns and other fields
    const dropdowns = [
        { select: artistSelect, customInputId: 'customArtist' },
        { select: venueSelect, customInputId: 'customVenue' },
        { select: sourceMicSelect, customInputId: 'customMic' },
        { select: sourcePreampSelect, customInputId: 'customPreamp' },
        { select: recorderSelect, customInputId: 'customRecorder' },
        { select: transferMediaSelect, customInputId: 'customMedia' },
        { select: processingSoftwareSelect, customInputId: 'customProcessing' },
        { select: trackingSoftwareSelect, customInputId: 'customTracking' },
        { select: conversionSoftwareSelect, customInputId: 'customConversion' }
    ];

    dropdowns.forEach(item => {
        item.select.addEventListener('change', () => {
            toggleCustomInput(item.select, item.customInputId);
        });
    });

    // Location selection
    countrySelect.addEventListener('change', function() {
        stateInput.style.display = this.value === 'US' ? 'block' : 'none';
        customCountryInput.style.display = this.value === 'Other' ? 'block' : 'none';
    });

    // Function to add songs to the setlist
    window.addSong = function() {
        const songTitle = document.getElementById('setlistSong').value.trim();
        if (songTitle) {
            const songEntry = document.createElement('div');
            songEntry.textContent = songTitle;
            setlistContainer.appendChild(songEntry);
            document.getElementById('setlistSong').value = ''; // Clear input
        }
    };

    // Function to add encore to the setlist
    window.addEncore = function() {
        const encoreCount = Array.from(setlistContainer.children).filter(item => item.textContent.startsWith("Encore")).length;

        // Only add a blank line if the last item is not already a blank line
        if (setlistContainer.lastChild && setlistContainer.lastChild.innerHTML !== '&nbsp;') {
            const blankLine = document.createElement('div');
            blankLine.innerHTML = '&nbsp;';
            setlistContainer.appendChild(blankLine);
        }

        const encoreLabel = document.createElement('div');
        encoreLabel.textContent = `Encore ${encoreCount + 1}:`;
        setlistContainer.appendChild(encoreLabel);
    };

    // Function to clear the tracklist
    window.clearTracklist = function() {
        setlistContainer.innerHTML = ''; // Clear all tracks
    };

    // Function to generate the text file for download
window.generateFile = function() {
    const artist = artistSelect.value === "Other" ? customArtistInput.value : artistSelect.value;
    const concertDate = document.getElementById('concertDate').value;
    const formattedDate = concertDate ? new Date(concertDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }) : '';

    const venue = venueSelect.value === "Other" ? customVenueInput.value : venueSelect.value;
    const city = document.getElementById('city').value.trim();
    const state = stateInput.style.display === 'block' ? stateInput.value.trim() : '';
    const country = countrySelect.value === "Other" ? customCountryInput.value : countrySelect.value;

    // Construct the source chain conditionally
    const sourceMic = sourceMicSelect.value === "Other" ? customMicInput.value : sourceMicSelect.value;
    const tapingLocationValue = tapingLocation.value;
    const micOrientationValue = micOrientation.value ? `/${micOrientation.value}` : ''; // Only add slash if orientation is selected
    const sourcePreamp = sourcePreampSelect.value === "Other" ? customPreampInput.value : sourcePreampSelect.value;
    const recorder = recorderSelect.value === "Other" ? customRecorderInput.value : recorderSelect.value;
    const sourceBitrate = document.getElementById('sourceBitrate').value;

    // Construct source chain based on selected inputs
    let sourceChain = "";
    if (sourceMic) {
        sourceChain += sourceMic;
        if (tapingLocationValue) {
            sourceChain += ` (${tapingLocationValue}${micOrientationValue})`;
        }
        if (sourcePreamp) sourceChain += ` > ${sourcePreamp}`;
        if (recorder) sourceChain += ` > ${recorder}`;
        if (sourceBitrate) sourceChain += ` (${sourceBitrate})`;
    }

    // Construct the transfer chain conditionally
    const transferMedia = transferMediaSelect.value === "Other" ? customMediaInput.value : transferMediaSelect.value;
    const processingSoftware = processingSoftwareSelect.value === "Other" ? customProcessingInput.value : processingSoftwareSelect.value;
    const trackingSoftware = trackingSoftwareSelect.value === "Other" ? customTrackingInput.value : trackingSoftwareSelect.value;
    const conversionSoftware = conversionSoftwareSelect.value === "Other" ? customConversionInput.value : conversionSoftwareSelect.value;
    const outputFormat = outputFormatSelect.value;
    const transferBitrate = document.getElementById('transferBitrate').value;

    // Construct transfer chain based on selected inputs
    let transferChain = "";
    if (transferMedia) transferChain += transferMedia;
    if (processingSoftware) transferChain += ` > ${processingSoftware}`;
    if (trackingSoftware) transferChain += ` > ${trackingSoftware}`;
    if (conversionSoftware) transferChain += ` > ${conversionSoftware}`;
    if (outputFormat) transferChain += ` > ${outputFormat}`;
    if (transferBitrate) transferChain += ` (${transferBitrate})`;

    const runTimeHours = document.getElementById('runTimeHours').value;
    const runTimeMinutes = document.getElementById('runTimeMinutes').value;
    const runtime = runTimeHours || runTimeMinutes ? `run time: ${runTimeHours} hr ${runTimeMinutes} min` : '';

    // Setlist with numbering and "Encore X:" labels with spaces before encores
    let songNumber = 1;
    const setlistItems = Array.from(setlistContainer.children).map((item) => {
        const content = item.textContent.trim();
        if (content.startsWith("Encore")) {
            return `\n${content}`; // Add extra newline before "Encore X:"
        } else if (content) {
            return `${String(songNumber++).padStart(2, '0')} ${content}`; // Number only songs
        }
    }).filter(Boolean).join('\n'); // Filter out any undefined entries

    // Concatenate all parts without labels for Artist, Date, Venue, Location, etc.
    const content = `
${artist || ''}
${formattedDate || ''}
${venue || ''}
${city}${state ? `, ${state}` : ''}${country ? `, ${country}` : ''}

${sourceChain ? `source: ${sourceChain}` : ''}
${transferChain ? `transfer: ${transferChain}` : ''}

${setlistItems}

${runtime}
    `.trim();

    // Download the file
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'info.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
};

});
