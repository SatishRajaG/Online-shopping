import { DiagnosticCenter } from "./diagnostic-center";
import { Patient } from "./patient";
import { TestResult } from "./test-result";


export class Appointment {
    appointmentid:number;
    patient:Patient;
   dtestid:number;
   appointmentdate:Date;
   approvalstatus:string;
	 testResult:TestResult;
	diagnosticCenter:DiagnosticCenter;
}
