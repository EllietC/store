import Store from "./store";
import Incident from "./incident";

const store = new Store();

const incident1 = new Incident(
    "open",
    "The floor in the fruit area is dirty",
    new Date("2023-04-15T09:00:00")
);
incident1.setSolved(new Date("2023-04-16T10:00:00"));

const incident2 = new Incident(
    "open",
    "The lights in the bakery section are flickering",
    new Date("2023-04-16T10:00:00")
);
store.addIncident(incident1);
store.addIncident(incident2);

const status = store.incident_status(
    new Date("2023-04-15T00:00:00"),
    new Date("2023-04-17T00:00:00")
);

console.log(status);