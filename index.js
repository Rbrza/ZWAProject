function checkPassword(event) {
    event.preventDefault();

    const form = document.getElementById('form');
    const password = document.getElementById("password").value;
    const password2 = document.getElementById("password2").value;
    const password2Input = document.getElementById("password2");

    if (password === password2) {
        form.submit()
    } else if (password !== password2) {
        alert("Hesla se neshodují");
        const password2Wrapper = document.getElementById("password2-wrap");
        password2Wrapper.classList.add("error");
        password2Input.classList.add("error");
    }
}

function resetStyles() {
    const password2 = document.getElementById("password2");
    password2.classList.remove("error")
}

document.getElementById("form").addEventListener("submit", checkPassword);

document.getElementById("password2").addEventListener("focus", resetStyles)