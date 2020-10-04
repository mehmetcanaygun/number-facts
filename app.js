const randomBtn = document.getElementById("random-btn");
const numInput = document.getElementById("num-input");
const fact = document.getElementById("fact");

randomBtn.addEventListener("click", async () => {
  const checked = document.querySelector("input[name='r']:checked").value;

  const res = await fetch(`http://numbersapi.com/random/${checked}`);

  const numFact = await res.text();

  fact.innerHTML = numFact;
});

numInput.addEventListener("input", async () => {
  if (numInput.value !== "") {
    const checked = document.querySelector("input[name='r']:checked").value;

    const res = await fetch(
      `http://numbersapi.com/${numInput.value}/${checked}`
    );

    const numFact = await res.text();

    fact.innerHTML = numFact;
  } else {
    fact.innerHTML = "";
  }
});
