const initView = [50.788, -1.075];

const properties = [
  {
    label: '5 Cromwell Rd',
    price: 1500,
    beds: 4,
    agent: {
      name: 'Robertsons',
      phone: '01329 640272',
    },
    coords: [50.78643, -1.05686],
    url: 'https://www.rightmove.co.uk/properties/152537516#',
  },
  {
    label: 'St Ronans Rd',
    price: 1695,
    beds: 4,
    agent: {
      name: 'Reeds Rains',
      phone: '023 9282 4521',
    },
    coords: [50.78605, -1.07275],
    url: 'https://www.rightmove.co.uk/properties/153376400#',
  },
  {
    label: 'Ashburton Rd',
    price: 1700,
    beds: 4,
    agent: {
      name: 'Fry & Kent',
      phone: '023 9281 5221',
    },
    coords: [50.78692, -1.09199],
    url: 'https://www.rightmove.co.uk/properties/153819809#',
  },
  {
    label: 'East Shore Way',
    price: 1600,
    beds: 4,
    agent: {
      name: 'Archbold & Edwards',
      phone: '023 9225 7999',
    },
    coords: [50.802670, -1.051970],
    url: 'https://www.rightmove.co.uk/properties/153260408#',
  },
  {
    label: 'Warren Av',
    price: 1600,
    beds: 4,
    agent: {
      name: 'Soane',
      phone: '023 9200 0333',
    },
    coords: [50.79946, -1.05063],
    url: 'https://www.rightmove.co.uk/properties/154488806#',
  },
  {
    label: 'Winter Rd',
    price: 1750,
    beds: 3,
    agent: {
      name: 'Jeffries & Dibbens',
      phone: '023 9264 7171',
    },
    coords: [50.78861, -1.06454],
    url: 'https://www.rightmove.co.uk/properties/154436864#',
  },
  {
    label: 'Kimberley Rd',
    price: 1200,
    beds: 3,
    agent: {
      name: 'Archbold & Edwards',
      phone: '023 9225 7999',
    },
    coords: [50.78609, -1.06322],
    url: 'https://www.rightmove.co.uk/properties/154418909#',
  },
  {
    label: 'Walmer Rd',
    price: 1350,
    beds: 3,
    agent: {
      name: 'Archbold & Edwards',
      phone: '023 9225 7999',
    },
    coords: [50.79687, -1.07412],
    url: 'https://www.rightmove.co.uk/properties/153874727#',
  },
  {
    label: 'Grayshott Rd',
    price: 1375,
    beds: 3,
    agent: {
      name: 'New Era Agency',
      phone: '023 9281 1854',
    },
    coords: [50.79413, -1.06662],
    url: 'https://www.rightmove.co.uk/properties/152978771#',
  },
  {
    label: 'Godwit Rd',
    price: 1400,
    beds: 3,
    agent: {
      name: 'Morris Dibben',
      phone: '023 8098 7741',
    },
    coords: [50.80014, -1.04519],
    url: 'https://www.rightmove.co.uk/properties/153841661#/?channel=RES_LET',
  },
  {
    label: 'St Augustine Rd',
    price: 1400,
    beds: 3,
    agent: {
      name: 'Christies',
      phone: '023 9283 0888',
    },
    coords: [50.79044, -1.0683],
    url: 'https://www.rightmove.co.uk/properties/153568313#',
  },
  {
    label: 'Lindley Av',
    price: 1475,
    beds: 3,
    agent: {
      name: 'Pearsons',
      phone: '023 9273 5558',
    },
    coords: [50.78473, -1.06181],
    url: 'https://www.rightmove.co.uk/properties/154247555#',
  },
  {
    label: 'Collingwood Rd',
    price: 1500,
    beds: 3,
    agent: {
      name: 'Bernards',
      phone: '023 9286 4974',
    },
    coords: [50.78612, -1.07875],
    url: 'https://www.rightmove.co.uk/properties/153836924#',
  },
  {
    label: 'Fernhurst Rd',
    price: 1500,
    beds: 3,
    agent: {
      name: 'Open Rent',
    },
    coords: [50.79248, -1.06853],
    url: 'https://www.rightmove.co.uk/properties/153257531#',
  },
  {
    label: 'Pretoria Rd',
    price: 1550,
    beds: 3,
    agent: {
      name: 'Mann',
      phone: '023 8181 0680',
    },
    coords: [50.79055, -1.06783],
    url: 'https://www.rightmove.co.uk/properties/154090148#',
  },
  {
    label: 'Horse Sands Cl',
    price: 1550,
    beds: 3,
    agent: {
      name: 'Beals',
      phone: '023 9271 5715',
    },
    coords: [50.79064, -1.03788],
    url: 'https://www.rightmove.co.uk/properties/154334480#',
  },
  {
    label: 'St Ronans Rd',
    price: 1595,
    beds: 3,
    agent: {
      name: 'Reeds Rains',
      phone: '023 9282 4521',
    },
    coords: [50.78622, -1.07272],
    url: 'https://www.rightmove.co.uk/properties/154131683#',
  },
  {
    label: '5 St Augustine Rd',
    price: 1650,
    beds: 3,
    agent: {
      name: 'Bernards',
      phone: '023 9286 4974',
    },
    coords: [50.78677, -1.0698],
    url: 'https://www.rightmove.co.uk/properties/153837857#',
  },
  {
    label: 'Moorland Rd',
    price: 1700,
    beds: 3,
    agent: {
      name: 'Cubitt & West',
      phone: '023 9229 6396',
    },
    coords: [50.80247, -1.07289],
    url: 'https://www.rightmove.co.uk/properties/153449039#',
  },
];

properties.sort((a, b) => a.beds - b.beds || a.price - b.price);

const getLabelHtml = (prop, full = false) => {
  const css = `popup-label pl-${prop.beds === 4 ? 'medium' : 'small'}`;
  const extraHtml = `
      <p>${prop.beds} Bedrooms</p>
      <p>£${prop.price.toLocaleString()} PCM</p>
      <hr />
      <p>${prop.agent.name}</p>
      <p>${prop.agent.phone ?? ''}</p>
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
  const label = getLabelHtml(prop);
  const options = { autoClose: false }
  const markerOptions = {
    icon: prop.beds === 3 ? redIcon : blueIcon,
    property: prop.label,
  }
  const marker = L.marker(prop.coords, markerOptions)
    .addTo(map)
    .bindPopup(label, options);
  markers.push(marker);
}

// Map
const map = L.map('map');
const url = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';
const options = { maxZoom: 19 }
const tiles = L.tileLayer(url, options).addTo(map);

const blueIcon = L.icon({
  iconUrl: 'map-marker-blue.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
});

const redIcon = L.icon({
  iconUrl: 'map-marker-red.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
});

const roomGroups = Object.groupBy(properties, ({ beds }) => '_' + beds.toString());
const agentGroups = Object.groupBy(properties, (props) => props.agent.name);

// console.log(roomGroups);
// console.log(agentGroups);

// Markers
const markers = [];
properties.forEach(addMarker);
const group = new L.featureGroup(markers);

// Find a property
const label = '';
const property = properties.find(x => x.label === label);
const marker = markers.find(x => x.options.property === label);

if (property) {
  map.setView(property.coords, 19);
  marker.openPopup();
} else {
  map.fitBounds(group.getBounds());
  markers.forEach(marker => marker.openPopup());
}
