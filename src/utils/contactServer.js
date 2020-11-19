import axios from 'axios'

export const uploadContent = async ({ key, content }) => {
  const {data} = await axios.post('http://localhost:8080/save', {
      key,
      content
  })
  return data
}

export const getData = async (key) => {
  const {data} = await axios.post('http://localhost:8080/data', {
    key
  })

  return data
}
