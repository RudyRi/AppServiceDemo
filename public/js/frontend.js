
document.getElementById('connectButton').addEventListener('click', async () => {
    const secondAppUrl = document.getElementById('secondAppUrl').value;
    try {
        const response = await fetch('/connect', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ url: secondAppUrl })
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.text();
        document.getElementById('responseMessage').innerText = data;
    } catch (error) {
        document.getElementById('responseMessage').innerText = `Failed to connect: ${error.message}`;
    }
});