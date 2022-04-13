const nepalMap = document.getElementById('nepal-map-svg');
const districtTable = document.getElementById('district-table');
const districtTableBody = document.querySelector('#district-table tbody');
const districtDetail = [
    {
        name: 'Kathmandu',
        province: 'Bagmati',
    },
    {
        name: 'Humla',
        province: 'Karnali',
    },
    {
        name: 'Mugu',
        province: 'Karnali'
    },
    {
        name: 'Dolpa',
        province: 'Karnali',
    },
    {
        name: 'Jumla',
        province: 'Karnali'
    },
    {
        name: 'Jajarkot',
        province: 'Karnali',
    },
    {
        name: 'Kalikot',
        province: 'Karnali'
    },
    {
        name: 'Dailekh',
        province: 'Karnali',
    },
    {
        name: 'Surkhet',
        province: 'Karnali'
    },
    {
        name: 'Salyan',
        province: 'Karnali'
    },
    {
        name: 'Rukum6',
        province: 'Karnali'
    },
]



nepalMap.querySelectorAll('#nepal-map-svg > g').forEach((district) => {
    district.addEventListener('mouseover', () => {
        district.style.opacity = 0.4;
        const districtValue = districtDetail.find((dist) => dist.name.toLocaleLowerCase() === district.getAttribute('id'));
        districtTable.style.display = 'block';
        if(districtValue) {
            districtTableBody.innerHTML = appendTr(districtValue);
        }
    })

    district.addEventListener('mouseleave', () => {
        district.style.opacity = 1;
        districtTable.style.display = 'none';
    })
})

function appendTr(data) {
    return `
        <tr>
            <td>${data.province}</td>
            <td>${data.name}</td>
        </tr>
    `
}