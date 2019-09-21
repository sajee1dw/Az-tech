export class InvestorRequest{
    location: String;
    subject: String;
    day: String;
    investor: String;
    professional: String;

    constructor(location: String, subject: String, day: String, investor: String, professional: String){
        this.investor = investor;
        this.professional = professional;
        this.location = location;
        this.subject = subject;
        this.day = day;
    }
}