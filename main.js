const menuIcon = document.querySelector('#menu img')
const nav = document.querySelector('#menu nav')
const textonome = document.querySelector('header h1')

menuIcon.addEventListener('click', () => {
    nav.classList.toggle('active')
    menuIcon.classList.toggle('rotate')
    textonome.classList.toggle('active')
})

const emailcopy = document.querySelector('#email')

emailcopy.addEventListener('click', () => {
    navigator.clipboard.writeText(emailcopy.textContent)
    .then(() => {
        alert('Email copiado com sucesso.')
    })
    .catch(falha => {
        alert('Falha ao copiar o email.')
    })

})


// const lightModeIcon = document.getElementById('lightmode');
// const darkModeIcon = document.getElementById('darkmode');

// lightModeIcon.addEventListener('click', () => {
//     lightModeIcon.classList.add('clicked');
//     darkModeIcon.classList.add('clicked');
// });

// darkModeIcon.addEventListener('click', () => {
//   darkModeIcon.classList.remove('clicked');
// });     lightModeIcon.classList.remove('clicked');
//  