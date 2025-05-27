export type Practitioner = {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    country: string;
    city: string;
    neighbourhood: string;
    workType: string;
    featured?: false,
    favorites?: string[],
}

export type PractitionersArray = {
    practitioners: Practitioner[]
}