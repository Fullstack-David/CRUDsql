export interface User {
  id: string
  name: string
  email: string
  password: string
  campaign: Campaign[]
}

export interface Email {
  id: string
  subject: string
  content: string
  campaignId: string
  campaign: Campaign[]
  recipients: string[]
}

export interface Campaign {
  id: string
  companyName: string
  companyDescription: string
  productDescription: string
  targetAudience: string
  userId: string
  user: User
  emails: Email[]
}
export interface RequestCampaign {
  id: string
  companyName: string
  companyDescription: string
  productDescription: string
  targetAudience: string
  userId: string
  user: string
  emails: string
}

