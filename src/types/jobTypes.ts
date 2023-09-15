export interface JobType {
  id: number;
  title: string;
  company: CompanyType;
  location: AddressType;
  job_type: string;
  job_category: string;
  descriptions: DescriptionType;
  salary: SalaryType;
  posted_at: string;
}

export interface CompanyType {
  name: string;
  address: AddressType;
  logo: string;
}

export interface AddressType {
  street: string;
  additional: string;
  city: string;
  state: string;
  postal_code: string;
}

export interface SalaryType {
  min: number;
  max: number;
  currency: string;
}

export interface DescriptionType {
  requirements: string;
  benefits: string;
  reponbilities: string;
}
