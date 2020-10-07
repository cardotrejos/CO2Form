# Calculo de huella de carbono

Proyecto con backend en nodejs y reactjs para calcular y visualizar la huella de carbono producida por los empleados de una compañia.

## Correr el proyecto de forma local

1. Clonar el repositorio 
```bash
git clone https://github.com/cardotrejos/CO2Form.git
```
2. Iniciar el backend
```bash
cd backend
```
```bash
npm install
```
```bash
npm run dev
```
3. Iniciar el frontend
```bash
cd frontend
```
```bash
npm install
```
```bash
npm start
```

## To do list

- [ ] Agregar docker containers and docker compose
- [ ] Despliegue en AWS 
- [ ] Algunas gráficas estadisticas
- [ ] Mejoras en UI


## Supuestos

- No requiere login 
- Las direcciones se ingresan manualmente
- La distancia se ingresa manualmente

## Mejoras

- Ambientes dockerizados
- Agregar variables de entorno para mejorar seguridad
- Hacer testing tanto en el backend como en el frontend
- Al ingresar las direcciones autocompletar con Google maps API // [Documentacion para esta implementacion](https://developers.google.com/maps/documentation/javascript/places-autocomplete)
- Cálculo automático de la distancia entre direcciones // [Documentacion para esta implementacion](https://developers.google.com/maps/documentation/distance-matrix/overview)