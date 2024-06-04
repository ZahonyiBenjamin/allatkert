function Kereses(keresett)
{
    keresett = keresett
    window.find(keresett);
}

function gridek(adatok, doboz)
{
    let allat_index = 0
    for (const item of adatok)
    {
        document.getElementById(doboz).innerHTML += `
        <div class="col-lg-3 col-md-6">
            <p class="allat_nevek">${item.nev}</p>
            <img type="button" src="${item.kep}" alt="${item.kep}" title="${item.nev}" class="img-fluid allat_kepek" data-bs-toggle="modal" data-bs-target="#myModal" onclick="modal_csere(${doboz},${allat_index})">
        </div>`
        allat_index++
    }
    console.log(adatok[0].nev)
}
gridek(afrikai_allatok, "afrikai_allatok")
gridek(azsiai_allatok, "azsiai_allatok")
gridek(ausztral_allatok, "ausztral_allatok")
gridek(europai_allatok, "europai_allatok")
gridek(del_amerikai_allatok, "del_amerikai_allatok")
gridek(vizi_allatok, "vizi_allatok")

function modal_csere(adatok, index)
{
    document.getElementById("mh").innerHTML = `
    <span class="nev ossz_nev">${adatok[index].nev}</span>
    <br>
    <span class="tudnev ossz_nev">${adatok[index].tudomanyos_nev}</span>`
    document.getElementById("mb").innerHTML = `
    <p><b>Leírás:</b> ${adatok[index].leiras}</p>
    <img src="${adatok[index].kep}" alt="${adatok[index].kep}" title="${adatok[index].nev}" class="img-fluid modal_kepek">
    `
}

