GET /api/artists -> Recupera todos los artistas
GET /api/artists/own -> Recupera los artistas de un usuario concreto
GET /api/artists/:id -> Recupera un artista por ID
GET /api/artists/songs/:id -> Recupera las canciones de aun artista concreto
POST /api/artists -> Crea un nuevo artista
POST /api/artists/search -> Hace una búsqueda entre todos los artistas

POST /api/songs/upload -> Sube y guarda una única canción
POST /api/songs/search -> Hace una búsqueda entre todas las canciones
DELETE /api/songs/:id -> Elimina una canción por su ID

POST /api/users/register -> Registra un usuario en la BD
POST /api/users/login -> Comprueba la autenticación del usuario