# Evidencia de Desempeno 2 - Migracion a React

Este repositorio corresponde a la **evidencia de desempeno** del momento 2, y contiene la migracion de un proyecto maquetado en HTML/JavaScript hacia React.

## Proyecto migrado 

- **Ejercicio 2 (migrado en este repositorio):** [https://maquetacion-dos.netlify.app/](https://maquetacion-dos.netlify.app/)


## Entregable

- Enlace de repositorio GitHub con la migracion del proyecto asignado (este repositorio).

## Cumplimiento de requisitos obligatorios

- **Fidelidad visual:** el diseno fue migrado buscando mantener una apariencia lo mas identica posible al proyecto original en HTML/JS.
- **Arquitectura:** se utilizo el encarpetado base visto en clase (separacion en `pages`, `components`, `routes`, estilos globales y punto de entrada).
- **Enrutamiento:** se implemento navegacion con `react-router-dom`.
- **Componetizacion:** se desarrollaron y separaron correctamente mas de 5 componentes reutilizables.
- **Convenciones:** se aplican convenciones de nombres:
  - `PascalCase` para componentes.
  - `camelCase` para variables y funciones.
- **Control de versiones:** el repositorio debe evidenciar minimo 5 commits de desarrollo progresivo.
- **Formulario funcional:** el formulario permite capturar datos por teclado y almacenar la informacion en `localStorage`.

## Stack tecnologico

- React
- Vite
- React Router DOM
- Tailwind CSS

## Estructura base del proyecto

```txt
src/
  components/
  pages/
  routes/
  assets/
  main.jsx
  index.css
```

## Como ejecutar el proyecto

1. Instalar dependencias:

```bash
npm install
```

2. Ejecutar en modo desarrollo:

```bash
npm run dev
```

3. Generar build de produccion:

```bash
npm run build
```

## Nota final

Esta evidencia documenta la migracion del **Ejercicio 2** a una arquitectura React con navegacion por rutas, componetizacion, convenciones de codigo y persistencia basica en formulario, de acuerdo con los criterios solicitados.
