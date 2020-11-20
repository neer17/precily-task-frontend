import axios from 'axios'
import { backendUrl } from './domainConfig'

export const uploadContent = async ({ key, content }) => {
  const { data } = await axios.post(`${backendUrl}/save`, {
    key,
    content,
  })
  return data
}

export const getData = async key => {
  const { data } = await axios.post(`${backendUrl}/data`, {
    key,
  })

  return data
}
