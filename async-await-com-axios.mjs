import axios from 'axios'

async function fetchRepos() {
  try {
    const user = await axios.get('https://api.github.com/users/leandro-araujo-silva')
    const repos = await axios.get(user.data.repos_url)
    console.log(repos)
  } catch(e) {
    console.log(e)
  }
  
}

fetchRepos()