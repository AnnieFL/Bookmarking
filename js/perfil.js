//navbar
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});
});

//dropdown
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, {
        coverTrigger: false
    });
});


