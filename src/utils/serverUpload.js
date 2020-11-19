import axios from 'axios'

export const uploadContent = async ({ key, content }) => {
  const {data} = await axios.post('http://localhost:8080/save', {
      key,
      content
  })
  return data
}
