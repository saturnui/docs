const url = 'https://ipapi.co/8.8.8.8/json/'

export interface Location {
  region: string
  country_name: string
  postal: string
  org: string
}

const getLocation = async(): Promise<Location> => {
  return (await fetch(url)) as unknown as Location
}

export const useLocation = () => {
  return {
    getLocation,
  }
}
