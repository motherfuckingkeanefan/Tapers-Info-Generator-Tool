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
    const customTapingLocationInput = document.getElementById('customTapingLocation');
    const micOrientation = document.getElementById('micOrientation');
    const customMicOrientationInput = document.getElementById('customMicOrientation');

    // Show custom input when "Other" is selected
    function toggleCustomInput(selectElement, customInput) {
        customInput.style.display = selectElement.value === 'Other' ? 'block' : 'none';
    }

    const dropdowns = [
        { select: artistSelect, customInput: customArtistInput },
        { select: venueSelect, customInput: customVenueInput },
        { select: sourceMicSelect, customInput: customMicInput },
        { select: sourcePreampSelect, customInput: customPreampInput },
        { select: recorderSelect, customInput: customRecorderInput },
        { select: transferMediaSelect, customInput: customMediaInput },
        { select: processingSoftwareSelect, customInput: customProcessingInput },
        { select: trackingSoftwareSelect, customInput: customTrackingInput },
        { select: conversionSoftwareSelect, customInput: customConversionInput },
        { select: tapingLocation, customInput: customTapingLocationInput },
        { select: micOrientation, customInput: customMicOrientationInput }
    ];

    dropdowns.forEach(item => {
        item.select.addEventListener('change', () => {
            toggleCustomInput(item.select, item.customInput);
        });
    });

    // Location selection
    countrySelect.addEventListener('change', function() {
        stateInput.style.display = this.value === 'United States' ? 'block' : 'none';
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

        if (encoreCount === 1) {
            Array.from(setlistContainer.children).forEach(item => {
                if (item.textContent === "Encore:") {
                    item.textContent = "Encore 1:";
                }
            });
        }

        if (setlistContainer.lastChild && setlistContainer.lastChild.innerHTML !== '&nbsp;') {
            const blankLine = document.createElement('div');
            blankLine.innerHTML = '&nbsp;';
            setlistContainer.appendChild(blankLine);
        }

        const encoreLabel = document.createElement('div');
        encoreLabel.textContent = encoreCount === 0 ? "Encore:" : `Encore ${encoreCount + 1}:`;
        setlistContainer.appendChild(encoreLabel);
    };

    // Function to clear the tracklist
    window.clearTracklist = function() {
        setlistContainer.innerHTML = '';
    };

// Function to generate the text file for download
window.generateFile = function () {
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

    let location = city;
    if (country === 'United States') {
        location += state ? `, ${state}` : '';
    } else {
        location += `, ${country}`;
    }

    let sourceChain = "";
    const sourceMic = sourceMicSelect.value === "Other" ? customMicInput.value : sourceMicSelect.value;
    const tapingLocationValue = tapingLocation.value === "Other" ? customTapingLocationInput.value : tapingLocation.value;
    const micOrientationValue = micOrientation.value === "Other" ? customMicOrientationInput.value : micOrientation.value;
    const sourcePreamp = sourcePreampSelect.value === "Other" ? customPreampInput.value : sourcePreampSelect.value;
    const recorder = recorderSelect.value === "Other" ? customRecorderInput.value : recorderSelect.value;
    const sourceBitrate = document.getElementById('sourceBitrate').value;

    if (sourceMic) {
        sourceChain += sourceMic;
        if (tapingLocationValue || micOrientationValue) {
            sourceChain += ` (${tapingLocationValue || ''}${micOrientationValue ? `/${micOrientationValue}` : ''})`;
        }
    }
    if (sourcePreamp) sourceChain += sourceChain ? ` > ${sourcePreamp}` : sourcePreamp;
    if (recorder) sourceChain += sourceChain ? ` > ${recorder}` : recorder;
    if (sourceBitrate) sourceChain += sourceChain ? ` (${sourceBitrate})` : `(${sourceBitrate})`;

    let transferChain = "";
    const transferMedia = transferMediaSelect.value === "Other" ? customMediaInput.value : transferMediaSelect.value;
    const processingSoftware = processingSoftwareSelect.value === "Other" ? customProcessingInput.value : processingSoftwareSelect.value;
    const trackingSoftware = trackingSoftwareSelect.value === "Other" ? customTrackingInput.value : trackingSoftwareSelect.value;
    const conversionSoftware = conversionSoftwareSelect.value === "Other" ? customConversionInput.value : conversionSoftwareSelect.value;
    const outputFormat = outputFormatSelect.value;
    const transferBitrate = document.getElementById('transferBitrate').value;

    if (transferMedia) transferChain += transferMedia;
    if (processingSoftware) transferChain += transferChain ? ` > ${processingSoftware}` : processingSoftware;
    if (trackingSoftware) transferChain += transferChain ? ` > ${trackingSoftware}` : trackingSoftware;
    if (conversionSoftware) transferChain += transferChain ? ` > ${conversionSoftware}` : conversionSoftware;
    if (outputFormat) transferChain += transferChain ? ` > ${outputFormat}` : outputFormat;
    if (transferBitrate) transferChain += transferChain ? ` (${transferBitrate})` : `(${transferBitrate})`;

    const runTimeHours = parseInt(document.getElementById('runTimeHours').value) || 0;
    const runTimeMinutes = parseInt(document.getElementById('runTimeMinutes').value) || 0;
    const runTimeSeconds = parseInt(document.getElementById('runTimeSeconds').value) || 0;

    // Dynamically construct runtime string
    let runtime = '';
    if (runTimeHours > 0) runtime += `${runTimeHours} hr `;
    if (runTimeMinutes > 0) runtime += `${runTimeMinutes} min `;
    if (runTimeSeconds > 0) runtime += `${runTimeSeconds} sec`;
    runtime = runtime.trim(); // Remove any extra spaces

    let songNumber = 1;
    const setlistItems = Array.from(setlistContainer.children).map((item) => {
        const content = item.textContent.trim();
        if (content.startsWith("Encore")) return `\n${content}`;
        return content ? `${String(songNumber++).padStart(2, '0')} ${content}` : null;
    }).filter(Boolean).join('\n');

    const content = `
${artist || ''}
${formattedDate || ''}
${venue || ''}
${location || ''}

${sourceChain ? `source: ${sourceChain}` : ''}
${transferChain ? `transfer: ${transferChain}` : ''}

${setlistItems}

${runtime ? `run time: ${runtime}` : ''}
    `.trim();

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
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
