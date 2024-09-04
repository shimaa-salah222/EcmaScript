class UserInterface {
    constructor() {
      this.users = [];
      this.tabs = [];
    }
  
    async getUsers() {
      return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
          this.users = data;
          return data;
        })
        .catch(error => console.error(error));
    }
  
    createTabs() {
      this.users.forEach((user) => {
        const tab = document.createElement('li');
        tab.textContent = user.name;
        tab.className = 'tab';
        document.getElementById('tabs').appendChild(tab);
        this.tabs.push(tab);
      });
    }

    addEventListenerToTabs() {
      this.tabs.forEach((tab) => {
        tab.addEventListener('click', () => {
          this.getPostsForUser(tab.textContent);
        });
      });
    }
  
    async getPostsForUser(username) {
      const user = this.users.find((user) => user.name === username);
      if (user) {
        const userId = user.id;
        const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
          .then(response => response.json())
          .then(data => data);
        this.displayPosts(posts);
      }
    }
  
    displayPosts(posts) {
      const postsList = document.getElementById('posts');
      postsList.innerHTML = '';
      posts.forEach((post) => {
        const postElement = document.createElement('li');
        postElement.textContent = post.title;
        postsList.appendChild(postElement);
      });
    }
  }

  const interface = new UserInterface();
  interface.getUsers()
    .then(() => {
      interface.createTabs();
      interface.addEventListenerToTabs();
    })
    .catch(error => console.error(error));