const linksSocialMedia = {
    github : "RickHub2002",
    youtube : "maykbrito",
    instagram : "maykbrito",
    facebook : "maykbrito",
    twitter : "maykbrito"
}

const changeSocialMediaLinks = () => {
    for(let li of socialLinks.children) {
        const social = li.getAttribute('class');

        li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`;
    }
}

changeSocialMediaLinks();

const getGithubProfileInfo = () => {
    const url = `https://api.github.com/users/${linksSocialMedia.github}` 

    fetch(url)
    .then(response => response.json())
    .then(data => {
        userImage.src = data.avatar_url;
        userName.textContent = data.name;
        userLink.textContent = data.login
        userNickName.href = data.html_url;
        userBio.textContent = data.bio;
    });
}

getGithubProfileInfo();

