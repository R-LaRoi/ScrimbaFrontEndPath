let fivePost = [];
const entryInput = document.getElementById("post-entry");
const titleInput = document.getElementById("blog-title");
const form = document.getElementById("form-submit");

function showBlogHtml() {
  let postHTML = "";
  for (let post of fivePost) {
    postHTML += `
        <div class="card">
        <h4> ${post.title} </h4>${post.body}</div>`;
    console.log(post.title);
  }
  document.getElementById("post").innerHTML = postHTML;
}

fetch("https://apis.scrimba.com/jsonplaceholder/posts", { method: "GET" })
  .then((response) => response.json())
  .then((data) => {
    fivePost = data.slice(0, 5);
    showBlogHtml();
  });

// Storing the user input and created an object to send to API
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const blogEntry = entryInput.value;
  const blogTitle = titleInput.value;

  const blogData = {
    title: blogTitle,
    body: blogEntry,
  };

  // Sends a request to API using the POST method, renders new post in DOM

  const method = {
    method: "POST",
    body: JSON.stringify(blogData),
    headers: { "Content-type": "application/json" },
  };

  fetch("https://apis.scrimba.com/jsonplaceholder/posts", method)
    .then((response) => response.json())
    .then((post) => {
      // document.getElementById("post").innerHTML += `
      //   <div class="card">
      //   <h4> ${post.title} </h4>${post.body}</div>`;

      fivePost.unshift(post);
      showBlogHtml();
      form.reset();

      // Alternative way to reset the form:
      // titleInput.value = "";
      // entryInput.value = "";
    });
});
