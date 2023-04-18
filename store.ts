import Incident from "./incident";

class Store {
    incidents: Incident[];

    constructor(incidents: Incident[] = []) {
        this.incidents = incidents;
    }

    addIncident(incident: Incident): void {
        this.incidents.push(incident);
    }

    incident_status(startDate: Date, endDate: Date) {
        let openCases = 0;
        let solvedCases = 0;
        let totalSolutionTime = 0;
        let maxSolutionTime: number | undefined = undefined;
        const currentDate = new Date();

        for (const incident of this.incidents) {
            if (incident.createDate >= startDate && incident.createDate <= endDate) {
                if (incident.status === 'open') {
                    openCases++;
                    const solutionTime = currentDate.getTime() - incident.createDate.getTime();
                    if (maxSolutionTime === undefined || incident.createDate.getTime() + maxSolutionTime < currentDate.getTime()) {
                        maxSolutionTime = currentDate.getTime() - incident.createDate.getTime();
                    }
                } else if (incident.status === 'solved' && incident.closeDate && incident.closeDate >= startDate && incident.closeDate <= endDate) {
                    solvedCases++;
                    const solutionTime = incident.solutionTime;
                    if (solutionTime !== undefined) {
                        totalSolutionTime += solutionTime;
                        if (maxSolutionTime === undefined || solutionTime > maxSolutionTime) {
                            maxSolutionTime = solutionTime;
                        }
                    }
                }
            }
        }

        const averageSolutionTime = solvedCases > 0 ? totalSolutionTime / solvedCases : undefined;
        return {
            openCases,
            solvedCases,
            averageSolutionTime,
            currentMaxSolutionTime: maxSolutionTime
        };
    }
}

export default Store;
