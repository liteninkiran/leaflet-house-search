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
      .then(data => drawMap(properties, data))
      .catch(error => console.log(error));
  })
  .catch(error => console.log(error));

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
      property: prop.label,
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
  let groups = [];
  let group = undefined;

  Object.keys(rooms).forEach(room => {
    rooms[room].forEach(addMarker);
    group = new L.featureGroup(markers);
    groups.push(group);
    markers = [];
  });

  // Find a property
  const label = '';
  const property = properties.find(x => x.label === label);
  const marker = markers.find(x => x.options.property === label);

  if (property) {
    map.setView(property.coords, 19);
    marker.openPopup();
  } else {
    let bounds = L.latLngBounds(groups[0].getBounds());
    groups.forEach((group) => {
      bounds.extend(group.getBounds());
    });
    map.fitBounds(bounds);
  }

  if (addBoundaries) {
    const keys = Object.keys(geoJson);
    const addGeoJson = (key) => {
      const options = {
        style: (feature) => ({ color: '#000' }),
        weight: 2,
        onEachFeature: (feature, layer) => {
          console.log(feature);
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
