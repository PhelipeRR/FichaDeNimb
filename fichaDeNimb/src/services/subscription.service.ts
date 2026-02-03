/* eslint-disable */
import {
  Subscription,
  PricingPlan,
  Invoice,
  SubscriptionTier,
  SupportLevel,
  SupportLevelInfo,
} from '../types/subscription.types';

class SubscriptionService {
  async getCurrentSubscription(): Promise<Subscription | null> {
    return null;
  }

  async getPricingPlans(): Promise<PricingPlan[]> {
    return [];
  }

  async getInvoices(limit: number = 10): Promise<Invoice[]> {
    return [];
  }

  async redirectToCheckout(tier: SubscriptionTier): Promise<void> {
    console.log('Redirecting to checkout for tier:', tier);
    alert('Feature unavailable');
  }

  async cancelSubscription(): Promise<Subscription> {
    throw new Error('Feature unavailable');
  }

  async reactivateSubscription(): Promise<Subscription> {
    throw new Error('Feature unavailable');
  }

  async openCustomerPortal(): Promise<void> {
    console.log('Opening customer portal');
    alert('Feature unavailable');
  }

  getSupportLevels(): SupportLevelInfo[] {
    return [
      {
        level: SupportLevel.NIVEL_1,
        name: 'Apoiador Nível 1',
        price: 10,
        description: 'Apoio básico',
        features: ['Feature 1'],
        limits: {
          maxSheets: 10,
          maxMenaceSheets: 5,
          canComment: true,
          maxGameTables: 0,
          maxPlayersPerTable: 0,
        },
        badgeVariant: 'silver',
      },
      {
        level: SupportLevel.NIVEL_2,
        name: 'Apoiador Nível 2',
        price: 20,
        description: 'Apoio intermediário',
        features: ['Feature 1', 'Feature 2'],
        limits: {
          maxSheets: 20,
          maxMenaceSheets: 10,
          canComment: true,
          maxGameTables: 1,
          maxPlayersPerTable: 5,
        },
        badgeVariant: 'gold',
      },
      {
        level: SupportLevel.NIVEL_3,
        name: 'Apoiador Nível 3',
        price: 50,
        description: 'Apoio avançado',
        features: ['Feature 1', 'Feature 2', 'Feature 3'],
        limits: {
          maxSheets: 50,
          maxMenaceSheets: 20,
          canComment: true,
          maxGameTables: 3,
          maxPlayersPerTable: 10,
        },
        badgeVariant: 'diamond',
      },
    ];
  }
}

const service = new SubscriptionService();

export const getCurrentSubscription =
  service.getCurrentSubscription.bind(service);
export const getPricingPlans = service.getPricingPlans.bind(service);
export const getInvoices = service.getInvoices.bind(service);
export const redirectToCheckout = service.redirectToCheckout.bind(service);
export const cancelSubscription = service.cancelSubscription.bind(service);
export const reactivateSubscription =
  service.reactivateSubscription.bind(service);
export const openCustomerPortal = service.openCustomerPortal.bind(service);
export const getSupportLevels = service.getSupportLevels.bind(service);

export default service;
