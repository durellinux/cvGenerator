export interface Updatable {
    updated: boolean;
}


export interface PersonalData extends Updatable {
    name: string;
    surname: string;
    address: string;
    cap: string;
    city: string;
    country: string;
    email: string;
    website: string;
    phoneNumber: string;
}

export interface EducationData extends Updatable {
    from: string;
    to: string;
    title: string;
    institution: string;
    finalGrade: string;
    eqfLevel: string;
    shortDescription: string;
    longDescription: string;
    includeInCv: boolean;
}

export interface WorkExperienceData extends Updatable  {
    from: string;
    to: string;
    role: string;
    company: string;
    shortDescription: string;
    longDescription: string;
    includeInCv: boolean;
}

export interface SecondLanguageData extends Updatable {
    language: string;
    reading: string;
    writing: string;
    spokenInteraction: string;
    spokenProduction: string;
    certification: string;
    includeInCv: boolean;
}

export interface LanguageData extends Updatable  {
    motherLanguage: string;
    otherLanguages: ListData<SecondLanguageData>;
}

export interface SkillData extends Updatable  {
    name: string;
    level: number;
    isMainSkill: boolean;
    includeInCv: boolean;
}

export interface ListData<T extends Updatable> extends Updatable{
    list: T[];
}

export interface ValueData<T> extends Updatable {
    value: T;
}

export interface CvData extends Updatable  {
    personal: PersonalData;
    bio: ValueData<string>;
    education: ListData<EducationData>;
    workExperience: ListData<WorkExperienceData>;
    language: LanguageData;
    skills: ListData<SkillData>;
}

export const cvEmpty: CvData = {
    bio: {
        updated: false, value: ""
    },
    education: { list: [], updated: false },
    language: {
        motherLanguage: "",
        otherLanguages: { list: [], updated: false },
        updated: false
    },
    personal: {
        address: "", cap: "", city: "", country: "", email: "", name: "", surname: "", website: "", phoneNumber: "", updated: false
    },
    skills: { list: [], updated: false },
    workExperience: { list: [], updated: false },
    updated: false
};

export const educationEmpty: EducationData = {
    eqfLevel: "", finalGrade: "", from: "", includeInCv: false, institution: "", longDescription: "", shortDescription: "", title: "", to: "", updated: true
};

export const workEmpty: WorkExperienceData = { company: "", from: "", includeInCv: false, longDescription: "", role: "", shortDescription: "", to: "", updated: true };

export const secondLanguageEmpty: SecondLanguageData = { certification: "", includeInCv: false, language: "", reading: "", spokenInteraction: "", spokenProduction: "", updated: true, writing: "" };

export const skillEmpty: SkillData = { includeInCv: false, isMainSkill: false, level: 0, name: "", updated: true };
