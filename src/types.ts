export type Workstation = {
    name: string
}

export type Activity = {
    name: string,
    workstations: Workstation[];
}

export type Site = {
    name: string,
    activities: Activity[]
}

export type Region = {
    region: string,
    sites: Site[]
}