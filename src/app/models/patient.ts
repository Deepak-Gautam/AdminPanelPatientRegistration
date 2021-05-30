export interface Patient {
  id: number;
  firstName: string;
  lastName: string;
  address: string;
  appointmentDate: Date;
  assignedTo: string;
  reason: string;
  caseDescription: string;
}
