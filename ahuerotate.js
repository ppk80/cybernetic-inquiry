        // Get all anchor elements with the class "anchor"
        const anchors = document.querySelectorAll('.anchor');

        anchors.forEach((anchor, index) => {
            // Define a unique hue shift for each anchor
            const hueRotation = index * 2; // Each anchor gets a different hue shift

            // Apply the hue-rotate filter to the background-image
            anchor.style.filter = `hue-rotate(${hueRotation}deg)`;
        });
