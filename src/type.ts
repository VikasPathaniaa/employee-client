interface Experience {
    id: number;
    companyName: string;
    experienceDesignation: string;
    timePeriod: string;
}

export interface InitialStateTypes {
    employeId: number | null;
    name: string;
    phoneNumber: string;
    email: string;
    address: string;
    designation: string;
    joiningDate: string;
    gender: string;
    experience: Experience[];
}
