document.addEventListener('DOMContentLoaded', function() {
    const username = 'Sidnaik04'; // Replace with the GitHub username you want to fetch data for
    const url = "https://api.github.com/users/Sidnaik04";

    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById('name').textContent = data.name;
            document.getElementById('bio').textContent = data.bio;
            document.getElementById('avatar').src = data.avatar_url;
            document.getElementById('followers').textContent = data.followers;
            document.getElementById('following').textContent = data.following;
        })
        .catch(error => console.error('Error fetching data:', error));
});
