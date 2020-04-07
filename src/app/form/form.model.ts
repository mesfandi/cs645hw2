export interface Form {
  suggest: string;
  content: string;
  raffle: string;
  // firstName: string;
  // lastName: string;
  // street: string;
  // city: string;
  // state: string;
  // zip: string;
  // tel: string;
  // email: string;
  // db: string;
  // student: boolean;
  // location: boolean;
  // campus: boolean;
  // atmosphere: boolean;
  // doreroom: boolean;
  // sports: boolean;
  intrested: string;

  personalInfo: {
    firstName: string;
    lastName: string;
    db: string;
  };
  address: {
    city: string;
    state: string;
    zip: string;
    tel: string;
    email: string;
  };
  liked: {
    student: boolean;
    location: boolean;
    campus: boolean;
    atmosphere: boolean;
    doreroom: boolean;
    sports: boolean;
  };
}
