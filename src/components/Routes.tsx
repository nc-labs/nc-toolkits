import { useRoutes } from 'react-router-dom'
import { getRoutes } from '../utils/getRoutes'

const { routes, routePreloads } = getRoutes()
const Routes = () => useRoutes(routes)

export { Routes, routePreloads, routes }
