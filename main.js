const input = document.querySelector("input");
const form = document.querySelector("form");
const chips = document.getElementById("chips");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const newChip = createChip(input.value);
  chips.appendChild(newChip);
  e.target.reset();
});

function createChip(name) {
  const container = document.createElement("div");
  container.className =
    "flex items-center border rounded-full gap-2 pr-2 shadow bg-green-200";

  const img = document.createElement("img");
  img.src = "avatar.png";
  container.appendChild(img);
  img.className = "h-14 w-14 rounded-full";

  const span = document.createElement("span");
  span.innerText = name;
  container.appendChild(span);

  const btn = document.createElement("button");
  btn.innerText = "X";
  btn.className = "text-red-500 font-bold";
  container.appendChild(btn);

  btn.addEventListener("click", (e) => {
    e.target.parentElement.remove();
  });

  return container;
}
