// Types pour les utilisateurs
export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  role: 'admin' | 'user' | 'manager'
  organizationId?: string
  createdAt: Date
  updatedAt: Date
}

// Types pour les organisations
export interface Organization {
  id: string
  name: string
  type: 'pro' | 'perso'
  industry?: string
  size?: '1-10' | '11-50' | '51-200' | '201-500' | '500+'
  createdAt: Date
  updatedAt: Date
}

// Types pour les fonctionnalités
export interface Feature {
  id: string
  name: string
  description: string
  icon: string
  category: 'core' | 'finance' | 'business'
  isActive: boolean
}

// Types pour les strats métier
export interface BusinessStrat {
  id: string
  name: string
  description: string
  industry: 'automobile' | 'immobilier' | 'batiment' | 'chr' | 'formation'
  features: string[]
  isActive: boolean
}

// Types pour les plans tarifaires
export interface PricingPlan {
  id: string
  name: string
  price: number
  currency: string
  interval: 'monthly' | 'yearly'
  features: string[]
  isPopular?: boolean
  maxUsers?: number
}

// Types pour les contacts
export interface Contact {
  id: string
  firstName: string
  lastName: string
  email: string
  phone?: string
  company?: string
  position?: string
  organizationId: string
  createdAt: Date
  updatedAt: Date
}

// Types pour les projets
export interface Project {
  id: string
  name: string
  description: string
  status: 'draft' | 'active' | 'completed' | 'archived'
  organizationId: string
  assignedTo?: string[]
  startDate?: Date
  endDate?: Date
  createdAt: Date
  updatedAt: Date
}

// Types pour les événements/rendez-vous
export interface Event {
  id: string
  title: string
  description?: string
  startDate: Date
  endDate: Date
  type: 'meeting' | 'task' | 'reminder'
  attendees?: string[]
  projectId?: string
  contactId?: string
  organizationId: string
  createdAt: Date
  updatedAt: Date
}

// Types pour les notifications
export interface Notification {
  id: string
  title: string
  message: string
  type: 'info' | 'success' | 'warning' | 'error'
  userId: string
  isRead: boolean
  createdAt: Date
}

// Types pour les formulaires
export interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  company?: string
  message: string
}

export interface SignupFormData {
  email: string
  password: string
  firstName: string
  lastName: string
  organizationName: string
  organizationType: 'pro' | 'perso'
}

// Types pour les réponses API
export interface ApiResponse<T> {
  data?: T
  error?: string
  success: boolean
}

// Types pour les métadonnées de page
export interface PageMetadata {
  title: string
  description: string
  keywords?: string[]
  ogImage?: string
} 