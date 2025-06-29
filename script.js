const posts = [];

function showPostForm() {
  document.getElementById('postForm').classList.remove('hidden');
}
function showLogin() {
  document.getElementById('loginForm').classList.remove('hidden');
}
function hideModal(id) {
  document.getElementById(id).classList.add('hidden');
}

function submitPost() {
  const title = document.getElementById('postTitle').value;
  const content = document.getElementById('postContent').value;

  if (title && content) {
    const post = { title, content };
    posts.push(post);
    renderPosts();
    document.getElementById('postTitle').value = '';
    document.getElementById('postContent').value = '';
    hideModal('postForm');
  } else {
    alert('Please complete the post fields.');
  }
}

function renderPosts() {
  const postsContainer = document.getElementById('posts');
  postsContainer.innerHTML = '';

  posts.forEach(post => {
    const div = document.createElement('div');
    div.className = 'post';
    div.innerHTML = `<h3>${post.title}</h3><p>${post.content}</p>`;
    postsContainer.appendChild(div);
  });
}

function login() {
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;

  if (user && pass) {
    alert(`Welcome, ${user}!`);
    hideModal('loginForm');
  } else {
    alert('Please enter both username and password.');
  }
}

renderPosts();
