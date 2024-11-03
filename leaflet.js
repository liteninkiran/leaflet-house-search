const initView = [50.788, -1.075];

const properties = [
  {
    label: '5 Cromwell Rd',
    price: 1500,
    beds: 4,
    agent: 'Robertsons',
    agentPhone: '01329 640272',
    coords: [50.78643, -1.05686],
    url: 'https://www.rightmove.co.uk/properties/152537516#',
  },
  {
    label: 'St Ronans Rd',
    price: 1695,
    beds: 4,
    agent: 'Reeds Rains',
    agentPhone: '023 9282 4521',
    coords: [50.78605, -1.07275],
    url: 'https://www.rightmove.co.uk/properties/153376400#',
  },
  {
    label: 'Ashburton Rd',
    price: 1700,
    beds: 4,
    agent: 'Fry & Kent',
    agentPhone: '023 9281 5221',
    coords: [50.78692, -1.09199],
    url: 'https://www.rightmove.co.uk/properties/153819809#',
  },
  {
    label: 'East Shore Way',
    price: 1600,
    beds: 4,
    agent: 'Archbold & Edwards',
    agentPhone: '023 9225 7999',
    coords: [50.802670, -1.051970],
    url: 'https://www.rightmove.co.uk/properties/153260408#',
  },
  {
    label: 'Warren Av',
    price: 1600,
    beds: 4,
    agent: 'Soane',
    agentPhone: '023 9200 0333',
    coords: [50.79946, -1.05063],
    url: 'https://www.rightmove.co.uk/properties/154488806#',
  },
  {
    label: 'Winter Rd',
    price: 1750,
    beds: 3,
    agent: 'Jeffries & Dibbens',
    agentPhone: '023 9264 7171',
    coords: [50.78861, -1.06454],
    url: 'https://www.rightmove.co.uk/properties/154436864#',
  },
  {
    label: 'Kimberley Rd',
    price: 1200,
    beds: 3,
    agent: 'Archbold & Edwards',
    agentPhone: '023 9225 7999',
    coords: [50.78609, -1.06322],
    url: 'https://www.rightmove.co.uk/properties/154418909#',
  },
  {
    label: 'Walmer Rd',
    price: 1350,
    beds: 3,
    agent: 'Archbold & Edwards',
    agentPhone: '023 9225 7999',
    coords: [50.79687, -1.07412],
    url: 'https://www.rightmove.co.uk/properties/153874727#',
  },
  {
    label: 'Grayshott Rd',
    price: 1375,
    beds: 3,
    agent: 'New Era Agency',
    agentPhone: '023 9281 1854',
    coords: [50.79413, -1.06662],
    url: 'https://www.rightmove.co.uk/properties/152978771#',
  },
  {
    label: 'Godwit Rd',
    price: 1400,
    beds: 3,
    agent: 'Morris Dibben',
    agentPhone: '023 8098 7741',
    coords: [50.80014, -1.04519],
    url: 'https://www.rightmove.co.uk/properties/153841661#/?channel=RES_LET',
  },
  {
    label: 'St Augustine',
    price: 1400,
    beds: 3,
    agent: 'Christies',
    agentPhone: '023 9283 0888',
    coords: [50.79044, -1.06816],
    url: 'https://www.rightmove.co.uk/properties/153568313#',
  },
  {
    label: 'Lindley Av',
    price: 1475,
    beds: 3,
    agent: 'Pearsons',
    agentPhone: '023 9273 5558',
    coords: [50.78473, -1.06181],
    url: 'https://www.rightmove.co.uk/properties/154247555#',
  },
  {
    label: 'Collingwood Rd',
    price: 1500,
    beds: 3,
    agent: 'Bernards',
    agentPhone: '023 9286 4974',
    coords: [50.78612, -1.07875],
    url: 'https://www.rightmove.co.uk/properties/153836924#',
  },
  {
    label: '',
    price: 0,
    beds: 3,
    agent: '',
    agentPhone: '',
    coords: initView,
    url: '',
  },
];

properties.sort((a, b) => a.beds - b.beds || a.price - b.price);

const getLabelHtml = (prop, full = false) => {
  const css = `popup-label pl-${prop.beds === 4 ? 'medium' : 'small'}`;
  const extraHtml = `
      <p>${prop.beds} Bedrooms</p>
      <p>£${prop.price.toLocaleString()} PCM</p>
      <hr />
      <p>${prop.agent}</p>
      <p>${prop.agentPhone}</p>
    `;

  let html = `
    <div class="${css}">
      <h2><a href="${prop.url}" target="_blank">${prop.label}</a></h2>
      ${full ? extraHtml : ''}
    </div>
  `;

  return html;
}

const addMarker = (prop) => {
  if (!prop.label) {
    return;
  }
  const label = getLabelHtml(prop, true);
  const options = { autoClose: false }
  const marker = L.marker(prop.coords).addTo(map).bindPopup(label, options);
  markers.push(marker);
}

const map = L.map('map');
const url = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';
const options = { maxZoom: 19 }
const tiles = L.tileLayer(url, options).addTo(map);
const markers = [];
properties.forEach(addMarker);
const group = new L.featureGroup(markers);
map.fitBounds(group.getBounds());
markers.forEach(marker => marker.openPopup());

const groups = Object.groupBy(properties, ({ beds }) => '_' + beds.toString());

console.log(groups._3);
console.log(groups._4);
