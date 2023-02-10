const http = require('http');

const indexPage = `
  <h2>Index sayfasına hoşgeldiniz</h2>
  <img src="https://maps.googleapis.com/maps/api/staticmap?center=Berkeley,CA&zoom=14&size=400x400&key=YOUR_API_KEY" alt="Harita">
`;

const aboutPage = `
  <h2>Hakkımda sayfasına hoşgeldiniz</h2>
`;

const contactPage = `
  <h2>İletişim sayfasına hoşgeldiniz</h2>
`;

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(indexPage);
  } else if (req.url === '/hakkimda') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(aboutPage);
  } else if (req.url === '/iletisim') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(contactPage);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Sayfa bulunamadı');
  }
});

const port = 5000;
server.listen(port, () => {
  console.log(`Sunucu ${port} portundan çalışıyor...`);
});
