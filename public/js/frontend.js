document.getElementById("connectButton").addEventListener("click", async () => {
  const secondAppUrl = document.getElementById("secondAppUrl").value;
  const responseMessageElement = document.getElementById("responseMessage");
  const connectButton = document.getElementById("connectButton");

  // Clear previous message and disable the button
  responseMessageElement.innerText = "Connecting...";
  connectButton.disabled = true;

  try {
    const response = await fetch("/connect", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url: secondAppUrl }),
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.text();
    responseMessageElement.innerText = data;
  } catch (error) {
    responseMessageElement.innerText = `Failed to connect: ${error.message}`;
  } finally {
    // Re-enable the button
    connectButton.disabled = false;
  }
});
