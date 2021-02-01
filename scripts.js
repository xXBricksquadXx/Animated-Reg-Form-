const text = document.getElementById("text");
window.addEventListener("scroll", () => {
  const value = window.scrollY;
  text.style.marginBottom = `${value * 2}px`;
});

const submitBtn = document.querySelector('button[type="submit"]');
const toggleBtn = document.querySelector("#toggle-btn");

const toggledInputs = Array.from(document.querySelectorAll("input")).slice(
  0,
  4
);

toggleBtn.addEventListener("click", function () {
  if (this.innerText === "Already have an account?") {
    for (let i = 0; i < toggledInputs.length; i += 1) {
      toggledInputs[i].classList.remove("is-visible");
      toggledInputs[i].classList.add("is-hidden");
    }
    this.innerText = "Need to create an account?";
    submitBtn.innerText = "Login!";
  } else {
    const hiddenInputs = document.querySelectorAll("input.is-hidden");
    for (let i = 0; i < hiddenInputs.length; i += 1) {
      toggledInputs[i].classList.remove("is-hidden");
      hiddenInputs[i].classList.add("is-visible");
    }

    this.innerText = "Already have an account?";
    submitBtn.innerText = "Register!";
  }
});
