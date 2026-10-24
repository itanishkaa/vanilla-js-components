const MAX_LIMIT = 20;

const textarea = document.getElementById("tweetInput");
const backdrop = document.getElementById("backdrop");
const charCount = document.getElementById("charCount");
const progressCircle = document.getElementById("progressCircle");
const submitBtn = document.getElementById("submitBtn");
const feed = document.getElementById("feed");

const radius = progressCircle.r.baseVal.value;
const circumference = 2 * Math.PI * radius;
progressCircle.style.strokeDasharray = `${circumference} ${circumference}`;
progressCircle.style.strokeDashoffset = circumference;

function setProgess(percent) {
  const offset = circumference - (percent / 100) * circumference;
  progressCircle.style.strokeDashoffset = offset;
}

function escapeHTML(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function formatEntities(text) {
  const safeText = escapeHTML(text);
  return safeText
    .replace(/(^|\s)(#[a-zA-Z0-9_]+)/g, '$1<span class="hashtag">$2</span>')
    .replace(/(^|\s)(@[a-zA-Z0-9_]+)/g, '$1<span class="mention">$2</span>');
}

function handleInput() {
  const text = textarea.value;
  const currentLength = text.length;
  const remaining = MAX_LIMIT - currentLength;
  const warnThreshold = Math.floor(MAX_LIMIT * 0.1);
  let backdropHTML = "";
  if (currentLength > MAX_LIMIT) {
    const validPart = text.substring(0, MAX_LIMIT);
    const overflowPart = text.substring(MAX_LIMIT);
    backdropHTML =
      formatEntities(validPart) +
      `<mark class="overflow">${escapeHTML(overflowPart)}</mark>`;
  } else {
    backdropHTML = formatEntities(text);
  }
  if (text.endsWith("\n")) {
    backdropHTML += "<br>";
  }
  backdrop.innerHTML = backdropHTML;
  charCount.textContent = remaining;
  const percentage = Math.min((currentLength / MAX_LIMIT) * 100, 100);
  setProgess(percentage);
  charCount.classList.remove("warn", "error");
  progressCircle.setAttribute("stroke", "#1d9bf0");
  if (remaining <= 0) {
    charCount.classList.add("error");
    progressCircle.setAttribute("stroke", "#f4212e");
  } else if (remaining <= warnThreshold) {
    charCount.classList.add("warn");
    progressCircle.setAttribute("stroke", "#f7931a");
  }
  submitBtn.disabled = currentLength === 0 || remaining < 0;
}

function handleSubmit() {
  const rawText = textarea.value;
  if (!rawText.trim() || rawText.length > MAX_LIMIT) return;
  const safeText = escapeHTML(rawText);
  const formattedPost = safeText
    .replace(
      /(^|\s)(#[a-zA-Z0-9_]+)/g,
      '$1<a href="https://twitter.com/hashtag/$2" target="_blank">$2</a>',
    )
    .replace(
      /(^|\s)(@[a-zA-Z0-9_]+)/g,
      '$1<a href="https://twitter.com/$2" target="_blank">$2</a>',
    );
  const postElement = document.createElement("div");
  postElement.className = "post-card";
  postElement.innerHTML = formattedPost.replace(/\n/g, "<br>");
  feed.prepend(postElement);
  textarea.value = "";
  handleInput();
}

textarea.addEventListener("scroll", () => {
  backdrop.scrollTop = textarea.scrollTop;
});

textarea.addEventListener("input", handleInput);
submitBtn.addEventListener("click", handleSubmit);
