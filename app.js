const button = document.querySelector("button");
const email = document.getElementById("email");
button.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(`errro`);
  const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  if (!pattern.test(email.value)) {
    const input = document.querySelector("input");
    input.style.border = `1px solid var(--tomato)`;
    input.style.backgroundColor = ` hsla(4, 100%, 67%, .2)`;
    input.style.color = "var(--tomato)";
    const error = document.querySelector("#error");
    error.classList.remove("hide");
    setTimeout(() => {
      input.style.border = ``;
      input.style.backgroundColor = ``;
      input.style.color = "";
      error.classList.add("hide");
    }, 2000);
  } else {
    document.body.innerHTML = `
        <main class="dismiss-message">
      <img src="./assets/images/icon-list.svg" alt="check" />
      <h1>Thanks for subscribing!</h1>
      <p>
        A confirmation email has been sent to--> ash@loremcompany.com. Please
        open it and click the button inside to confirm your subscription.
      </p>
      <button>Dismiss message</button>
    </main>
      `;
  }
});
console.log(button);
