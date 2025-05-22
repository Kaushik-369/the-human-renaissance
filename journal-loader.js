
async function loadMarkdown(file) {
  const res = await fetch(file);
  const text = await res.text();
  const html = marked.parse(text);
  const container = document.getElementById("journal-container");
  const article = document.createElement("article");
  article.className = "prose lg:prose-xl mx-auto";
  article.innerHTML = html;
  container.appendChild(article);
}

// Load all journals
const journalFiles = ["journals/001-silence.md", "journals/002-wonder.md"];
journalFiles.forEach(loadMarkdown);
