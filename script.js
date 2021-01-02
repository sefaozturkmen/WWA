ready();
loadUsers();

function ready() {
    document.querySelector('#getUser').addEventListener('click', getUser);
    document.querySelector('#getAll').addEventListener('click', loadUsers);
}

function loadUsers() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true)

    xhr.onload = function() {
        if (this.status === 200) {

            var userList = JSON.parse(this.responseText)
            var userValue = document.querySelector('#userValue');

            let html = '';

            userList.forEach(user => {

                html += `
            <div class="card my-2">
                <div class="card-header">
                    <h5> ${user.id} - ${user.username}</h5>
                </div>
                <ul class="list-group">
                    <li class="list-group-item ">
                        <span class="badge bg-primary">Name :</span> ${user.name}
                    </li>
                    <li class="list-group-item ">
                        <span class="badge bg-primary">email :</span> ${user.email}
                    </li>
                    <li class="list-group-item ">
                        <span class="badge bg-primary">city :</span> ${user.address.city}
                    </li>
                    <li class="list-group-item ">
                        <span class="badge bg-primary">phone :</span> ${user.phone}
                    </li>
                </ul>
            </div>`;
            });
            document.querySelector('#userList').innerHTML = html;
            userValue.value = '';
        } else {}
    }
    xhr.send();
}



function getUser() {
    var userValue = document.getElementById('userValue').value;
    if (userValue === '') {
        return alert('please enter a value')
    }

    var url = 'https://jsonplaceholder.typicode.com/users/' + userValue;

    const xhr = new XMLHttpRequest();

    xhr.open('GET', url, true)
    xhr.onload = function() {
        if (this.status === 200) {
            var user = JSON.parse(this.responseText)
            console.log(user);


            html = `
            <div class="card my-2">
                <div class="card-header">
                    <h5> ${user.id} - ${user.username}</h5>
                </div>
                <ul class="list-group">
                    <li class="list-group-item ">
                        <span class="badge bg-primary">Name :</span> ${user.name}
                    </li>
                    <li class="list-group-item ">
                        <span class="badge bg-primary">email :</span> ${user.email}
                    </li>
                    <li class="list-group-item ">
                        <span class="badge bg-primary">city :</span> ${user.address.city}
                    </li>
                    <li class="list-group-item ">
                        <span class="badge bg-primary">phone :</span> ${user.phone}
                    </li>
                </ul>
            </div>`;
            document.querySelector('#userList').innerHTML = html;
            var userValue = document.getElementById('userValue');
            userValue.value = '';
        } else {
            alert('please enter 1-10')
        }
    }

    xhr.send();

}