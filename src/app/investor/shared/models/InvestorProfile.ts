export class InvestorProfile{
    fname: string;
    lname: string;
    mobile: string;
    location: string;
    subject: string;
    rate: string;
    imgUrl: string;

    reviews: Review[];
}

class Review{
    date: string;
    professonalName: string;
    content: string;
    professonalImgUrl: string;
}
