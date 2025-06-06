import type { Workstation, Activity, Site, Region} from "./types"
import { regions, sites, activities, workstations } from "./data"
import { useState } from "react"

export default function MainPage() {
    const [isSiteClicked, setIsSiteClicked] = useState(false)
    const[clickedSiteName, setClickedSiteName] = useState('')

    const handleClick = (clickedSiteName: any) => {
        setIsSiteClicked(true)
        setClickedSiteName(clickedSiteName)

    }
    return (
        <>
            <h1>Welcome!!!</h1>
            <h2>{clickedSiteName}</h2>
            {sites.map((site) => {
                return <ul>
                            <li onClick={() => {handleClick(site.name)}} key={site.name}>{site.name}</li>

                       </ul>
            })}
        </>
    )
}