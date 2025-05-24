document.addEventListener('DOMContentLoaded', function() {
    // Background animation container
    const container = document.createElement('div');
    container.className = 'data-animation-container';
    document.body.insertBefore(container, document.body.firstChild);

    // Create initial data streams
    for (let i = 0; i < 8; i++) {
        createDataStream();
    }

    // Create initial data points
    for (let i = 0; i < 15; i++) {
        createDataPoint();
    }

    function createDataStream() {
        const stream = document.createElement('div');
        stream.className = 'data-stream';
        
        // Random position and delay
        stream.style.left = Math.random() * 100 + '%';
        stream.style.animationDelay = Math.random() * 8 + 's';
        
        container.appendChild(stream);
        
        // Remove and recreate stream after animation
        stream.addEventListener('animationend', function() {
            stream.remove();
            createDataStream();
        });
    }

    function createDataPoint() {
        const point = document.createElement('div');
        point.className = 'data-point';
        
        // Random position
        point.style.left = Math.random() * 100 + '%';
        point.style.top = Math.random() * 100 + '%';
        point.style.animationDelay = Math.random() * 3 + 's';
        
        container.appendChild(point);
        
        // Remove and recreate point after some time
        setTimeout(() => {
            point.remove();
            createDataPoint();
        }, Math.random() * 8000 + 8000);
    }
}); 