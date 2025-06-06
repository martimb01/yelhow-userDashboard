import type { Workstation, Activity, Site, Region } from "./types";

// 1. Define all workstations
export const workstations: Workstation[] = [
  { name: "PT1001" },
  { name: "PT1002" },
  { name: "PT2001" },
  { name: "PT2002" },
  { name: "PT3001" },
  { name: "PT3002" },
  { name: "PT4001" },
  { name: "PT5001" },
  { name: "PT5002" },
  { name: "PT5003" },
];

// 2. Define activities, referencing workstations by name
export const activities: Activity[] = [
  { name: "A380", workstations: [workstations[0], workstations[1]] }, // PT1001, PT1002
  { name: "A320", workstations: [workstations[2], workstations[3]] }, // PT2001, PT2002
  { name: "A320", workstations: [workstations[4], workstations[5]] }, // PT3001, PT3002
  { name: "A380", workstations: [workstations[6]] },                  // PT4001
  { name: "A320", workstations: [workstations[7], workstations[8], workstations[9]] }, // PT5001, PT5002, PT5003
];

// 3. Define sites, referencing activities by index
export const sites: Site[] = [
  { name: "Hub Nazare", activities: [activities[0], activities[1]] }, // A380, A320
  { name: "Hub Lisbon", activities: [activities[2]] },                // A320
  { name: "Hub New York", activities: [activities[3]] },              // A380
  { name: "Hub Toronto", activities: [activities[4]] },               // A320
];

// 4. Define regions, referencing sites by index
export const regions: Region[] = [
  {
    region: "Europe",
    sites: [sites[0], sites[1]], // Hub Nazare, Hub Lisbon
  },
  {
    region: "North America",
    sites: [sites[2], sites[3]], // Hub New York, Hub Toronto
  },
];