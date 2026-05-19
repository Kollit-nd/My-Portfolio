import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface ShelfCheckResult {
  product: string;
  status: 'In Stock' | 'Out of Stock';
  store: string;
  distance: string;
  eta: string;
  keywords: string[];
}

const MOCK_RESULTS: ShelfCheckResult[] = [
  {
    product: 'Amul Butter',
    status: 'In Stock',
    store: 'Instamart Dark Store - Koramangala',
    distance: '1.2 km',
    eta: '10 mins',
    keywords: ['amul', 'butter']
  },
  {
    product: 'Aashirvaad Atta 5kg',
    status: 'In Stock',
    store: 'Instamart Dark Store - HSR Layout',
    distance: '2.1 km',
    eta: '14 mins',
    keywords: ['atta', 'aashirvaad', 'flour']
  },
  {
    product: 'Tata Salt 1kg',
    status: 'Out of Stock',
    store: 'Instamart Dark Store - Indiranagar',
    distance: '1.8 km',
    eta: 'Unavailable',
    keywords: ['salt', 'tata salt']
  },
  {
    product: 'Nandini Milk 1L',
    status: 'In Stock',
    store: 'Instamart Dark Store - BTM Layout',
    distance: '2.7 km',
    eta: '16 mins',
    keywords: ['milk', 'nandini']
  }
];

@Component({
  selector: 'app-shelfcheck',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './shelfcheck.component.html',
  styleUrl: './shelfcheck.component.scss'
})
export class ShelfcheckComponent {
  query = '';
  result: ShelfCheckResult | null = null;

  checkStock(): void {
    const normalizedQuery = this.query.trim().toLowerCase();

    if (!normalizedQuery) {
      this.result = null;
      return;
    }

    this.result =
      MOCK_RESULTS.find((item) =>
        item.keywords.some((keyword) => normalizedQuery.includes(keyword))
      ) ?? {
        product: 'Unknown Product',
        status: 'Out of Stock',
        store: 'Instamart Dark Store - Nearest Hub',
        distance: 'N/A',
        eta: 'Unavailable',
        keywords: []
      };
  }
}
