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
                if (response.ok)
                    window.location = "/registration?type=registration&success=true";
                else
                    window.location = "/registration?type=registration&success=false";
            })
            .catch(result => {
                window.location = "/registration?type=registration&success=false";                
            })
    }

    const login = function () {

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
                if (response.ok) {
                    window.location = "?type=login&success=true";
                } else
                    window.location = "/registration?type=login&success=false";
            })
            .catch(result => window.location = "/registration?type=login&success=false")
    }
})