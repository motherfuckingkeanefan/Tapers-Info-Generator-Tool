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
    const downloadBtn = document.getElementById('downloadBtn');
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
        { select: conversionSoftwareSelect, customInputId: 'customConversion' },
        { select: outputFormatSelect, customInputId: 'customOutputFormat' }
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
        const songTitle = document.getElementById('setlistSong').value;
        if (songTitle) {
            const songEntry = document.createElement('div');
            songEntry.textContent = songTitle;
            setlistContainer.appendChild(songEntry);
            document.getElementById('setlistSong').value = ''; // Clear input
        }
    }

    // Function to clear the tracklist
    window.clearTracklist = function() {
        setlistContainer.innerHTML = ''; // Clear all tracks
    }

    // Function to generate the text file for download
    window.generateFile = function() {
        const artist = artistSelect.value === "Other" ? customArtistInput.value : artistSelect.value;
        const concertDate = document.getElementById('concertDate').value;
        const formattedDate = new Date(concertDate).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        const venue = venueSelect.value === "Other" ? customVenueInput.value : venueSelect.value;
        const city = document.getElementById('city').value;
        const state = stateInput.style.display === 'block' ? stateInput.value : '';
        const country = countrySelect.value === "Other" ? customCountryInput.value : countrySelect.value;

        const sourceMic = sourceMicSelect.value === "Other" ? customMicInput.value : sourceMicSelect.value;
        const tapingLocationValue = tapingLocation.value;
        const micOrientationValue = micOrientation.value;
        const sourcePreamp = sourcePreampSelect.value === "Other" ? customPreampInput.value : sourcePreampSelect.value;
        const recorder = recorderSelect.value === "Other" ? customRecorderInput.value : recorderSelect.value;
        const sourceBitrate = document.getElementById('sourceBitrate').value;

        const transferMedia = transferMediaSelect.value === "Other" ? customMediaInput.value : transferMediaSelect.value;
        const processingSoftware = processingSoftwareSelect.value === "Other" ? customProcessingInput.value : processingSoftwareSelect.value;
        const trackingSoftware = trackingSoftwareSelect.value === "Other" ? customTrackingInput.value : trackingSoftwareSelect.value;  // Fix applied here
        const conversionSoftware = conversionSoftwareSelect.value === "Other" ? customConversionInput.value : conversionSoftwareSelect.value;
        const outputFormat = outputFormatSelect.value;
        const transferBitrate = document.getElementById('transferBitrate').value;

        const runTimeHours = document.getElementById('runTimeHours').value;
        const runTimeMinutes = document.getElementById('runTimeMinutes').value;

        // Generate formatted text for download
        const runtime = runTimeHours || runTimeMinutes ? 
            `run time: ${runTimeHours} hr ${runTimeMinutes} min` : '';

        const setlistItems = Array.from(setlistContainer.children).map((item, index) => `${(index + 1).toString().padStart(2, '0')} ${item.textContent}`).join('\n');

        // Build output text
        let locationText = '';
        if (country === 'US') {
            locationText = `${city}, ${state}`;
        } else {
            locationText = `${city}, ${state ? state + ', ' : ''}${country}`;
        }

        const outputText = `
${artist || 'N/A'}
${formattedDate || 'N/A'}
${venue || 'N/A'}
${locationText || 'N/A'}

source: ${sourceMic || 'N/A'} (${tapingLocationValue}/${micOrientationValue}) > ${sourcePreamp || 'N/A'} > ${recorder || 'N/A'} (${sourceBitrate || 'N/A'})
transfer: ${transferMedia || 'N/A'} > ${processingSoftware || 'N/A'} > ${trackingSoftware || 'N/A'} > ${conversionSoftware || 'N/A'} > ${outputFormat || 'N/A'} (${transferBitrate || 'N/A'})

${setlistItems || 'N/A'}

${runtime}
        `.trim();

        // Download the file
        const blob = new Blob([outputText], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'info.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }
});
