const url = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';
const geoUrl = './ward.json';
//const geoUrl = './middle-super.json';
const initView = [50.788, -1.075];
const addBoundaries = true;
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

fetch('./properties.json')
  .then(response => response.json())
  .then(({ properties }) => {
    fetch(geoUrl)
      .then(response => response.json())
      .then(data => drawMap(properties, data));
  });

const drawMap = (properties, geoJson) => {
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
      id: prop.id,
    }
    const marker = L.marker(prop.coords, markerOptions)
      .addTo(map)
      .bindPopup(label, options);
    markers.push(marker);
  }

  properties.sort((a, b) => a.beds - b.beds || a.price - b.price);

  // Map
  const map = L.map('map');
  const options = { maxZoom: 19 }
  const tiles = L.tileLayer(url, options).addTo(map);

  const rooms = Object.groupBy(properties, ({ beds }) => '_' + beds.toString());
  const agents = Object.groupBy(properties, (props) => props.agent.name);

  // Markers
  let markers = [];

  properties.forEach(addMarker);

  // Find a property
  const id = 0;
  const property = properties.find(x => x.id === id);
  const marker = markers.find(x => x.options.id === id);

  if (property) {
    map.setView(property.coords, 19);
    marker.openPopup();
  } else {
    const group = new L.featureGroup(markers);
    map.fitBounds(group.getBounds());
  }

  if (addBoundaries) {
    const keys = Object.keys(geoJson);
    const addGeoJson = (key) => {
      const options = {
        style: (feature) => ({ color: '#000' }),
        weight: 2,
        onEachFeature: (feature, layer) => {
          // console.log(feature);
          if (feature.geometry.type = 'Point') {
            layer.bindPopup(feature.properties.name);
          }
        }
      }
      L.geoJson(geoJson[key], options).addTo(map);
    }
    keys.forEach(addGeoJson);
  }
}
