const LinksSocialMedia = {
  github: 'jandersoncampolina',
  youtube: 'jandersoncampolina',
  facebook: 'jandersoncampolina',
  instagram: 'jandersoncampolina',
  twitter: 'jandersoncampolina'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}
changeSocialMediaLinks()

function getgitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getgitHubProfileInfos()
