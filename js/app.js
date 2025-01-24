fetch('https://api.github.com/users/bharishh') // Remplacez "github" par le nom d'utilisateur souhaité
  .then(response => {
    if (!response.ok) {
      throw new Error(`Erreur HTTP! statut : ${response.status}`); // Gestion des erreurs HTTP
    }
    return response.json(); // Parse la réponse JSON
  })
  .then(data => {
    // Affiche les données dans la console
    console.log(data);
    // Affiche les données sur la page HTML
    afficherDonnees(data);
  })
  .catch(error => {
    console.error('Erreur lors de la récupération des données :', error);
    afficherErreur(error); // Affiche un message d'erreur sur la page
  });

function afficherDonnees(data) {
  const container = document.getElementById('github-data'); // Récupère l'élément HTML où afficher les données
  if (!container) return; // Si l'élément n'existe pas, on sort de la fonction

  container.innerHTML = `
    <img src="${data.avatar_url}" alt="Avatar de ${data.login}" width="100">
    <h2>${data.name || data.login}</h2>
    <p>Bio : ${data.bio || "Non renseignée"}</p>
    <p>Nombre de followers : ${data.followers}</p>
    <p>Nombre de repos : ${data.public_repos}</p>
    <p>Profil GitHub : <a href="${data.html_url}" target="_blank">Voir le profil</a></p>
  `;
}

function afficherErreur(error) {
    const container = document.getElementById('github-data');
    if (!container) return;
    container.innerHTML = `<p style="color: red;">${error}</p>`;
}