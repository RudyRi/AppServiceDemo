document.getElementById('connectButton').addEventListener('click', async () => {
    try {
        const response = await fetch('/connect');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.text();
        document.getElementById('responseMessage').innerText = data;
    } catch (error) {
        document.getElementById('responseMessage').innerText = `Failed to connect: ${error.message}`;
    }
});