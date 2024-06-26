document.getElementById('search-button').addEventListener('click', function() {
    var username = document.getElementById('search-box').value.trim();

    if (username === '') {
        alert('Please enter a GitHub username');
        return;
    }

    var url = 'https://api.github.com/users/' + username;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            displayUserDetails(data);
        })
        .catch(error => {
            alert('Error fetching user data: ' + error.message);
        });
});

function displayUserDetails(user) {
    var userDetails = `
        <div>
            <img src="${user.avatar_url}" alt="${user.login}" style="width: 100px; height: 100px; border-radius: 50%;">
            <h2>${user.name}</h2>
            <p>${user.bio}</p>
            <ul>
                <li>Followers: ${user.followers}</li>
                <li>Following: ${user.following}</li>
                <li>Public Repositories: ${user.public_repos}</li>
            </ul>
            <a href="${user.html_url}" target="_blank">View profile on GitHub</a>
        </div>
    `;

    document.getElementById('user-details').innerHTML = userDetails;
}