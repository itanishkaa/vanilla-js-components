const locations = [
  { city: "New York", country: "United States" },
  { city: "London", country: "United Kingdom" },
  { city: "Paris", country: "France" },
  { city: "Tokyo", country: "Japan" },
  { city: "Delhi", country: "India" },
  { city: "Mumbai", country: "India" },
  { city: "Toronto", country: "Canada" },
  { city: "Sydney", country: "Australia" },
  { city: "Berlin", country: "Germany" },
  { city: "Madrid", country: "Spain" },
];

const input = document.getElementById("search-input");
const list = document.getElementById("suggestions-list");

function debounce(fn, delay = 300) {
  let timerId;
  return function (...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => fn.apply(this, args), delay);
  };
}

function getMatchingLocations(query) {
  const cleanQuery = query.toLowerCase().trim();
  if (!cleanQuery) return [];
  return locations.filter(
    (loc) =>
      loc.city.toLowerCase().includes(cleanQuery) ||
      loc.country.toLowerCase().includes(cleanQuery),
  );
}

function renderSuggestions(matches, query) {
  list.innerHTML = "";
  if (matches.length === 0) {
    list.style.display = "none";
    return;
  }
  const fragment = document.createDocumentFragment();
  matches.forEach((item) => {
    const li = document.createElement("li");
    const text = `${item.city}, ${item.country}`;
    const regex = new RegExp(`(${query})`, "gi");
    li.innerHTML = text.replace(regex, "<mark>$1</mark>");
    li.addEventListener("click", () => {
      input.value = `${item.city}, ${item.country}`;
      list.style.display = "none";
    });
    fragment.appendChild(li);
  });
  list.appendChild(fragment);
  list.style.display = "block";
}

function handleInput(e) {
  const query = e.target.value;
  if (!query.trim()) {
    list.innerHTML = "";
    list.style.display = "none";
    return;
  }
  const matches = getMatchingLocations(query);
  renderSuggestions(matches, query);
}

input.addEventListener("input", debounce(handleInput, 300));

document.addEventListener("click", (e) => {
  if (!e.target.closest(".search-container")) {
    list.style.display = "none";
  }
});
