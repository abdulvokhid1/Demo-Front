import axios from 'axios'

export const convertUniqueArray = (originalArray: string[]) => {
  const ArraySet = new Set(originalArray)
  return Array.from(ArraySet)
}

let domain = process.env.NEXT_PUBLIC_API_URL_DEV

if (typeof window !== 'undefined') {
  if (process.env.NODE_ENV == 'production' && window.location.origin !== 'https://cms_dev.rudemy.org') {
    domain = process.env.NEXT_PUBLIC_API_URL
  }
}

export const numberToCurrency = (number: any) =>
  `${parseInt(number, 10)
    .toString()
    .replace(/[,]/g, '')
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`

export const uploadImageFile = async (fileImage: File) => {
  const formData = await new FormData()
  await formData.append('image', fileImage)
  try {
    const result = await axios.post(`${domain}api/v1/upload`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })

    return result.data
  } catch (error) {
    console.log(error)
  }
}

export const validateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    )
}
