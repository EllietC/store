class Incident {
  status: string;
  description: string;
  createDate: Date;
  closeDate?: Date;

  constructor(status: string, description:string, createDate: Date, closeDate?: Date) {
    this.status = status;
    this.description = description;
    this.createDate = createDate;
    this.closeDate = closeDate;
  }

  get solutionTime(): number | undefined {
    if (this.status === 'solved' && this.closeDate) {
      return this.closeDate.getTime() - this.createDate.getTime();
    }
    return undefined;
  }

  setSolved(closeDate: Date): void {
    this.status = "solved";
    this.closeDate = closeDate;
  }
}

export default Incident;
