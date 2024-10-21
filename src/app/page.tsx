'use client'
import { useRouter } from 'next/navigation'
import {useEffect} from "react";
import PAGE_ROUTES from 'src/utils/constants/routes'


const Controller = () => {
  // const userStateData = useRecoilValue(userState)
  const router = useRouter()

  useEffect(() => {
    // userStateData.email === ''
    //     ? router.push(PAGE_ROUTES.AUTH.LOGIN)
    //     : router.push(PAGE_ROUTES.GENERAL.DASHBOARD)
      router.push(PAGE_ROUTES.GENERAL.DASHBOARD)
  }, [router])

  return (

      <div>
        {/*<Loading />*/}
      </div>

  )
}

export default Controller
