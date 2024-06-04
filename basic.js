document.getElementById("menu").innerHTML = `
<div class="container-fluid">
  <a class="navbar-brand" href="index.html" id="logo">Benjámin Állatkert</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="collapsibleNavbar">
    <ul class="navbar-nav me-auto">     
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Menüpontok</a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="allatok.html">Állatok</a></li>
              <li><a class="dropdown-item" href="terkep.html">Térkép</a></li>
              <li><a class="dropdown-item" href="arak.html">Árlista</a></li>
              <li><a class="dropdown-item" href="kapcsolat.html">Kapcsolat</a></li>
            </ul>
          </li>
      </ul>
    <form class="d-flex">
        <input class="form-control me-2" id="kereses" type="text" placeholder="Keresés...">
        <button class="btn btn-success" id="kereses_gomb" onclick="Kereses(document.getElementById('kereses').value)" type="button">Keresés</button>
      </form>
  </div>
</div>`

document.getElementById("lablec").innerHTML = `
<p>© 2024 Benjámin Állatkert. Minden jog fenntartva.</p>`