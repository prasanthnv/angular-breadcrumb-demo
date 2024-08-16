import { BreadcrumbService } from './shared/components/breadcrumb/breadcrumb.service';

export function initializeApp(breadcrumbService: BreadcrumbService) {
    return (): Promise<void> => {
      return breadcrumbService.initialize(); // Call the initialize method from the service
    };
  }