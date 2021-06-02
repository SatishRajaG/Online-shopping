export class Appointment {
    id:number;
    appointmentdate:Date;
    approvalstatus:string;
    centers:Centers;
constructor(id:number,appointmentdate:Date,approvalstatus:string,centers:Centers){
        this.id=id;
        this.appointmentdate=appointmentdate;
        this.approvalstatus=approvalstatus;
        this.centers=centers;
}
}
export class Centers{
id:number;
cname:string;
contactno:string;
address:string;
contactemail:string;
servicesoffered:string;
constructor(id:number,cname:string,contactno:string,address:string,contactemail:string,servicesoffered:string){
        this.id=id;
        this.cname=cname;
        this.contactno=contactno;
        this.address=address;
        this.contactemail=contactemail;
        this.servicesoffered=servicesoffered;
}
}