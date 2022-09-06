import { useRouter } from "next/router"

export default function Member () {
    const router = useRouter()
    const {
      query: { id },
    } = router
    return <div>Member ID : {id}</div>
}