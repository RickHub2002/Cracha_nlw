const linksSocialMedia = {
    github : "RickHub2002",
    youtube : "channel/UCpCMvDa3tjnFs71ljet_UgA",
    instagram : "/",
    facebook : "/",
    twitter : "/"
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
        userName.textContent = data.name;
        userBio.textContent = data.bio;
        userLink.href = data.html_url;
        userImage.src = data.avatar_url;
        userLogin.textContent = data.login;
    });
}

getGithubProfileInfo();

