const initView = [50.788, -1.075];

const properties = [
  {
    name: 'cromwellRoad',
    label: '5 Cromwell Road',
    price: 1500,
    beds: 4,
    group: 'fourBed',
    agent: 'Robertsons 01329 640272',
    coords: [50.78643, -1.05686],
    url: 'https://www.rightmove.co.uk/properties/152537516#',
  },
  {
    name: 'stRonansRoad',
    label: 'St Ronans Road',
    price: 1695,
    beds: 4,
    group: 'fourBed',
    agent: 'Reeds Rains 023 9282 4521',
    coords: [50.78605, -1.07275],
    url: 'https://www.rightmove.co.uk/properties/153376400#',
  },
  {
    name: 'ashburtonRoad',
    label: 'Ashburton Road',
    price: 1700,
    beds: 4,
    group: 'fourBed',
    agent: 'Fry & Kent 023 9281 5221',
    coords: [50.78692, -1.09199],
    url: 'https://www.rightmove.co.uk/properties/153819809#',
  },
  {
    name: 'eastShoreWay',
    label: 'East Shore Way',
    price: 1600,
    beds: 4,
    group: 'fourBed',
    agent: 'Archbold & Edwards 023 9225 7999',
    coords: [50.802670, -1.051970],
    url: 'https://www.rightmove.co.uk/properties/153260408#',
  },
  {
    name: 'warrenAvenue',
    label: 'Warren Avenue',
    price: 1600,
    beds: 4,
    group: 'fourBed',
    agent: 'Soane 023 9200 0333',
    coords: [50.79946, -1.05063],
    url: 'https://www.rightmove.co.uk/properties/154488806#',
  },
  {
    name: 'winterRoad',
    label: 'Winter Road',
    price: 1750,
    beds: 3,
    group: 'threeBed',
    agent: 'Jeffries & Dibbens 023 9264 7171',
    coords: [50.78861, -1.06454],
    url: 'https://www.rightmove.co.uk/properties/154436864#',
  },
  {
    name: 'kimberleyRoad',
    label: 'Kimberley Road',
    price: 1200,
    beds: 3,
    group: 'threeBed',
    agent: 'Archbold & Edwards 023 9225 7999',
    coords: [50.78609, -1.06322],
    url: 'https://www.rightmove.co.uk/properties/154418909#',
  },
  {
    name: 'walmerRoad',
    label: 'Walmer Road',
    price: 1350,
    beds: 3,
    group: 'threeBed',
    agent: 'Archbold & Edwards 023 9225 7999',
    coords: [50.79687, -1.07412],
    url: 'https://www.rightmove.co.uk/properties/153874727#',
  },
  {
    name: 'grayshottRoad',
    label: 'Grayshott Road',
    price: 1375,
    beds: 3,
    group: 'threeBed',
    agent: 'New Era Agency (023 9281 1854)',
    coords: [50.79413, -1.06662],
    url: 'https://www.rightmove.co.uk/properties/152978771#',
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
  const label = getLabelHtml(prop);
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

const groups = Object.groupBy(properties, ({ group }) => group);

console.log(groups.threeBed);
console.log(groups.fourBed);
