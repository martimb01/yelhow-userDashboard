import type { Workstation, Activity, Site, Region} from "./types"
import { regions, sites, activities, workstations } from "./data"
import { useState } from "react"

export default function MainPage() {

    //site state vars
    const [isSiteClicked, setIsSiteClicked] = useState(false)
    const [clickedSite, setClickedSite] = useState<Site | null>(null)

    //activity state vars
    const [isActivityClicked, setIsActivityClicked] = useState(false)
    const [clickedActivity, setClickedActivity] = useState<Activity | null>(null)

    const handleSiteClick = (site: Site) => {
        if (isSiteClicked && clickedSite?.name === site.name) {
            setIsSiteClicked(false);
            setClickedSite(null);
        } else {
            setIsSiteClicked(true);
            setClickedSite(site);
        }
    }

    const handleActivityClick = (activity: Activity) => {
                if (isActivityClicked && clickedActivity?.name === activity.name) {
            setIsActivityClicked(false);
            setClickedActivity(null);
        } else {
            setIsActivityClicked(true);
            setClickedActivity(activity);
        }
    }

    return (
        <>
            <h1>Welcome!!!</h1>
            
            {sites.map((site) => {
                return <ul>
                            <li onClick={() => {handleSiteClick(site)}} key={site.name}>{site.name}</li>
                       </ul>
            })}

            {isSiteClicked && clickedSite ?
            
                clickedSite.activities.map((activity) => {
                    return <li onClick={() => {handleActivityClick(activity)}}>{activity.name}</li>

                }) : ''}

            {isActivityClicked && clickedActivity ?
                
                clickedActivity.workstations.map((workstation) => {
                    return <li>{workstation.name}</li>
                }) : ''}
        </>
    )
}