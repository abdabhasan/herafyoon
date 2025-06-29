

export type PractitionerInfoCard = {
    id: string;
    firstName: string;
    lastName: string;
    workType: string;
    country: string;
    city: string;
    neighbourhood: string;
    phoneNumber: string;
    status?: string;
}


export type UpdatedPractitionerInfo = {
    id: string;
    firstName: string;
    lastName: string;
    workType: string;
    country: string;
    city: string;
    neighbourhood: string;
    phoneNumber: string;
}

export type UpdatedNormalUserInfo = {
    id: string;
    firstName: string;
    lastName: string;
    country: string;
    city: string;
    neighbourhood: string;
    phoneNumber: string;
}



export type UserInfo = {
    city: string;
    country: string;
    createdAt: {
        seconds: number;
        nanoseconds: number;
    };
    email: string;
    favorites: string[];
    featured: boolean;
    firstName: string;
    lastName: string;
    neighbourhood: string;
    phoneNumber: string;
    userType: "practitioner" | "normal-user";
    workType?: string;
}


export type PractitionerInfo = UserInfo & {
    workType?: string;
}