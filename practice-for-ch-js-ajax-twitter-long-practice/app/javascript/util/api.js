const csrfToken = document.querySelector("meta[name=csrf-token]").content;

async function customFetch(url, options = {}) {
  options.headers = {
    // Your code here
    'X-CSRF-Token': csrfToken,
    ...options.headers
  };

  return await fetch(url, options);
}

function followUser(id) {
  return customFetch(`/users/${id}/follow`, {method: "POST"});

}

function unfollowUser(id) {
  return customFetch(`/users/${id}/follow`, {method: "DELETE"});

}

export const unfollow =  unfollowUser;
export const follow = followUser;
export const foo = "bar";