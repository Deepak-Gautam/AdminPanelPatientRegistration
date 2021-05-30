export interface Patient {
  id: number;
  firstName: string;
  lastName?: string;
  address: string;
  appointmentDate: string;
  assignedTo: string;
  reason?: string;
  caseDescription?: string;
}
