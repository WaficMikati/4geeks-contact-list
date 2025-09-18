export default [
  { path: '/', file: 'routes/_index.jsx' },
  { path: '/agenda/:slug', file: 'routes/agenda.$slug.jsx' },
  { path: '/agenda/:slug/add', file: 'routes/agenda.$slug.add.jsx' },
]