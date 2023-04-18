export interface Compaign {
  requestId: number;
  advice: boolean;
  campaignName: string;
  campaignDescription: string;
  decisionDeadline: string;
  decisionDescription: string;
  key: string;
  numberOfAssets: number;
  createdDate: string;
  updatedDate: string;
  submittedDate: string;
  validatedDate: string;
  affiliate: Affiliate;
  brand: Brand;
  requestStatus: RequestStatus;
  createdBy: User;
  updatedBy: User;
  submittedBy: string;
  validatedBy: string;
  countries: Countire[];
  media: Media[];
}

// User interface
interface User {
  userInfoId: number;
  name: string;
  email: string;
}

// countrie interface
interface Countire {
  countryId: number;
  name: string;
  value: string;
}

export interface Media {
  mediaId: 1;
  name: string;
  value: string;
}

// Affiliate interface
interface Affiliate {
  affiliateId: number;
  name: string;
}

// Brand interface
interface Brand {
  brandId: number;
  name: string;
}

// RequestStatus interface
interface RequestStatus {
  requestStatusId: number;
  name: string;
  value: string;
  step: number;
}

export interface Filter {
  text: string;
  brand: string;
}
