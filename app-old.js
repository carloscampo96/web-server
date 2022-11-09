import http from 'http'

const server = http.createServer( (req, res) => {
    
    res.writeHead(200, { 'Content-type': 'application/json' })

    const persona = {
        id: 1,
        nombre: 'Fernando'
    };

    res.write(JSON.stringify(persona));
    res.end();

})
.listen( 8080 );

console.log('Escuchando en el puerto', 8080 );