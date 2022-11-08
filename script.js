const btnCadastrar = document.querySelector('.btnCadastrar');
const btnLogin = document.querySelector('.btnLogin');
const divInput = document.querySelector('.divInput');
const allPasswordInput = document.querySelectorAll('.password');

const accounts = [

];

let usernameInput = document.querySelector('.login');
let passwordInput = document.querySelector('.password');

btnCadastrar.addEventListener('click', function registerAccount ( event ){
    event.preventDefault();     
    let searchButton = divInput.childElementCount; /* Conta quantos elementos tem na div mãe */
    
    if ( searchButton > 2){
        checkPasswords();
    }else{
        createInput();
    }
    
})

btnLogin.addEventListener('click', function loginSite( event ){
    event.preventDefault();
    let searchButton = divInput.childElementCount;
    const newPass = document.querySelector('.passwordConfirm');

    if ( searchButton > 2 ){
        newPass.remove();
    }else{
        let usernameRegistred = localStorage.getItem('username');
        let passwordRegistred = localStorage.getItem('password');
        if ( usernameInput.value === usernameRegistred && passwordRegistred === passwordInput.value){
            window.location = 'pages/index_store.html';
        }else{
            alert('Usuário ou senha incorretos.')
        }
        
    }

})

const checkPasswords = () => {
    const newPass = document.querySelector('.passwordConfirm');
    const usernameValueLogin = usernameInput.value;
    const passwordValueLogin = passwordInput.value;

    if ( newPass.value === passwordInput.value ){
        alert('Usuário cadastrado! Clique em login para logar na sua conta')
        accounts.push({
            username: usernameValueLogin,
            password: passwordValueLogin,
        })
        localStorage.setItem('username', usernameValueLogin)
        localStorage.setItem('password', passwordValueLogin)
    }else{
        alert('Senhas não idênticas!')
    }
}

const createInput = () => {
    const inputConfirmPassword = document.createElement('input');
    divInput.appendChild(inputConfirmPassword)
    inputConfirmPassword.setAttribute('type', 'password');
    inputConfirmPassword.classList.add('passwordConfirm');
    inputConfirmPassword.setAttribute('placeholder', 'Confirmar senha');
    return inputConfirmPassword;
}