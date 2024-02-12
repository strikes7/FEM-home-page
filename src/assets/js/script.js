window.onload = initialSetup();

function initialSetup() {
  retrieveAdvice();
  selectElements();
}

function selectElements() {
  document
    .getElementById("get-advice")
    .addEventListener("click", retrieveAdvice);
}

async function retrieveAdvice() {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");

    if (!response.ok) {
      throw new Error("Network response error");
    }

    const advice = await response.json();
    updateElements(advice.slip);
  } catch (error) {
    console.error("There has been a problem with fetch operation: ", error);
  }
}

function updateElements(quote) {
  document.getElementById("advice__id").innerHTML = quote.id;
  document.getElementById("advice__quote").innerHTML = quote.advice;
}
