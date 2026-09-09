# EIFA Teatro

Sitio web público de EIFA Teatro. Es una aplicación de una sola página (SPA) construida con React 17 y Create React App. La aplicación se compila como archivos estáticos y se publica manualmente en el bucket de Amazon S3 `aws-eifa-teatro`.

## Requisitos

- Node.js instalado. Se recomienda una versión LTS compatible con Create React App.
- npm, incluido con Node.js.
- Acceso al repositorio y permisos para leer el bucket `aws-eifa-teatro` en AWS.
- Acceso a la consola de AWS para cargar archivos manualmente.

Para comprobar las versiones instaladas:

```bash
node --version
npm --version
```

## Instalación local

Desde la carpeta raíz del proyecto, donde se encuentra `package.json`, instalar las dependencias:

```bash
npm install
```

Las dependencias quedan instaladas en `node_modules/`. Esta carpeta no se sube a AWS.

## Levantar el proyecto en desarrollo

Ejecutar:

```bash
npm start
```

Luego abrir [http://localhost:3000](http://localhost:3000). El servidor se actualiza automáticamente al modificar el código.

Para detenerlo, presionar `Ctrl + C` en la terminal.

## Comandos disponibles

| Comando | Uso |
| --- | --- |
| `npm start` | Ejecuta el sitio en modo desarrollo. |
| `npm run build` | Genera la versión optimizada para producción en `build/`. |
| `npm test` | Ejecuta las pruebas configuradas por Create React App. |
| `npm run eject` | Expone la configuración interna de Create React App. No es necesario para el mantenimiento normal. |

## Estructura principal

```text
public/                  Archivos públicos y recursos estáticos.
public/assets/           Imágenes, logos y material usado por el sitio.
src/EifaTeatroApp.js     Enrutamiento principal de la aplicación.
src/visitorUser/         Pantallas y componentes visibles para visitantes.
src/index.js             Punto de entrada de React.
src/index.css            Estilos globales.
build/                   Resultado de producción; se crea al ejecutar npm run build.
```

Las rutas actualmente configuradas son:

- `/`
- `/teatro-musical`
- `/eifa-kids`
- `/casas`
- `/contacto`
- `/galeria`

## Crear una compilación de producción

Antes de publicar cambios:

1. Descargar o actualizar el código fuente.
2. Ejecutar `npm install` si cambiaron las dependencias o no existe `node_modules/`.
3. Ejecutar:

   ```bash
   npm run build
   ```

4. Confirmar que se creó la carpeta `build/` y que contiene `index.html`, `asset-manifest.json`, `static/` y los recursos públicos necesarios.
5. Probar la versión compilada antes de subirla. Como mínimo, revisar el sitio local con `npm start` y navegar por todas las rutas.

La carpeta que se publica es `build/`, no la carpeta raíz del proyecto. No subir `src/`, `node_modules/`, `package.json` ni el repositorio completo al bucket.

## Publicación manual en Amazon S3

El destino de publicación es el bucket:

```text
aws-eifa-teatro
```

La subida es manual desde la consola de AWS. No es necesario instalar AWS CLI ni configurar un pipeline de despliegue para este proyecto.

### Cargar una nueva versión

1. Entrar a la [Consola de AWS](https://console.aws.amazon.com/).
2. Abrir el servicio **S3** y seleccionar el bucket `aws-eifa-teatro`.
3. Abrir la pestaña **Objects**.
4. Seleccionar **Upload**.
5. En el explorador de archivos, abrir la carpeta `build/` generada en el paso anterior.
6. Seleccionar y cargar **el contenido de `build/`**, conservando su estructura de carpetas. El archivo `index.html` debe quedar en la raíz del bucket, no dentro de una carpeta `build`.
7. Confirmar la carga y esperar a que todos los archivos terminen correctamente.
8. Abrir la URL configurada para el sitio y verificar que carga el inicio, las imágenes, los estilos y cada una de las rutas.

Al publicar una versión nueva, reemplazar los archivos existentes cuando AWS lo solicite. No borrar archivos manualmente antes de la carga salvo que exista una instrucción específica, porque una eliminación previa puede dejar el sitio incompleto si la carga se interrumpe.

## Lista de verificación después de publicar

- [ ] `index.html` está en la raíz del bucket.
- [ ] La carpeta `static/` y los archivos de `build/` se cargaron completos.
- [ ] La portada abre sin errores.
- [ ] Las imágenes, logos, estilos y fuentes se muestran correctamente.
- [ ] Los enlaces a `/teatro-musical`, `/eifa-kids`, `/casas`, `/contacto` y `/galeria` funcionan.
- [ ] Al actualizar una ruta interna no aparece un 404.
- [ ] Se revisó la consola del navegador para detectar errores de archivos faltantes.

## Solución de problemas

### `npm install` falla

Verificar que Node.js y npm estén instalados, cerrar procesos de desarrollo activos y volver a ejecutar `npm install` desde la raíz del proyecto.

### `npm run build` falla

Revisar el error mostrado en la terminal. Normalmente indica un error de JavaScript, una importación incorrecta o un recurso faltante. Corregir el código y volver a ejecutar la compilación antes de publicar.

### El sitio carga, pero no aparecen imágenes

Confirmar que se cargó todo el contenido de `build/`, incluyendo las carpetas de recursos, y que las rutas distinguen correctamente entre mayúsculas y minúsculas.

### La portada abre, pero una ruta interna devuelve 404

Revisar la configuración de documento de error del sitio estático S3. Debe apuntar a `index.html`. Si se utiliza CloudFront, verificar también la respuesta de error personalizada y limpiar la caché después de cambiar la configuración.

## Buenas prácticas de mantenimiento

- Trabajar siempre desde una rama o copia controlada del repositorio.
- Probar los cambios localmente antes de crear la compilación.
- Publicar únicamente una compilación nueva y verificada de `build/`.
- No guardar credenciales de AWS, claves API ni archivos `.env` dentro del repositorio.
- Registrar la fecha de publicación y los cambios realizados para facilitar la reversión manual si fuera necesario.

## Versionamiento independiente

No es obligatorio trabajar sobre la misma rama de GitHub de este proyecto. Si se desea, el equipo encargado puede mantener su propio versionamiento utilizando un repositorio independiente, sus propias ramas y la estrategia de control de cambios que prefiera.

Lo importante para la publicación es que la versión seleccionada haya sido probada, se ejecute `npm run build` correctamente y se cargue el contenido generado dentro de `build/` al bucket `aws-eifa-teatro`. Se recomienda conservar una referencia de la versión publicada, por ejemplo mediante un tag, un commit o un registro interno de despliegues.