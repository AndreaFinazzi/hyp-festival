const endpoints = {
    userRegister: '/api/user/register',
    userLogin: '/api/user/login',
    userLogout: '/api/user/logout'
}

$(window).on('user-logged', function () {
    window.location = '/reservation';
})

$(window).load(function () {
    url = new URLSearchParams(window.location.search);

    var onForm = $("#on-form");
    var inForm = $("#in-form");
    
    if (url.has('type') && url.get('type') == 'login') {
        if (url.get('success') == 'false') {
            $('#in-message').text('Invalid credentials, try again.');
            $('#in-email').addClass('is-invalid');
            $('#in-password').addClass('is-invalid');
        } else {
            $('#in-message').text('');
            $('#in-email').removeClass('is-invalid');
            $('#in-password').removeClass('is-invalid');
        }
    }

    onForm.on('submit', function (event) {
        event.preventDefault();

        register();
    });

    inForm.on('submit', function (event) {
        event.preventDefault();

        login();
    });

    const register = function () {

        let body = '';
        let data = new FormData(onForm[0]);

        for (var pair of data.entries()) {
            body += pair[0] + '=' + pair[1] + '&';
        }

        fetch(endpoints.userRegister, {
            method: 'POST',
            body: body,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            redirect: 'follow'
        })
        .then(response => {
            window.location = response.url;
        })
        .catch(result => {
            console.log(result.text());
            window.location = response.url;
        })
    }

    const login = function () {
        // let xHRequest = new XMLHttpRequest();

        // xHRequest.addEventListener('load', event => {
        //     alert(event.target.responseText);
        // })

        // xHRequest.open("POST", endpoints.userRegister);
        // xHRequest.send(formData);
        let body = '';
        let data = new FormData(inForm[0]);

        for (var pair of data.entries()) {
            body += pair[0] + '=' + pair[1] + '&';
        }

        fetch(endpoints.userLogin, {
            method: 'POST',
            body: body,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            redirect: 'follow'
        })
        .then(response => {
            window.location = response.url;
        })
        .catch(result => console.log(result.text()))
    }
})