import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Testimonial {
  name: string;
  message: string;
  image: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  testimonials: Testimonial[] = [
    {
      name: 'ABC Orphanage',
      message:
        'FoodBridge has helped us serve hundreds of children every week. It is a blessing for NGOs like us.',
      image:
        'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=200&q=80'
    },
    {
      name: 'Hotel Green Park',
      message:
        'We are able to reduce food waste and help the community at the same time. Amazing platform!',
      image:
        'https://images.unsplash.com/photo-1559329007-40df8a9345d8?auto=format&fit=crop&w=200&q=80'
    },
    {
      name: 'Hope Old Age Home',
      message:
        'The food donations arrive on time and help us serve warm meals to our elders with dignity.',
      image:
        'https://ui-avatars.com/api/?name=Hope+Old+Age+Home&background=16a34a&color=fff&size=200'
    },
    {
      name: 'Green Leaf Restaurant',
      message:
        'Instead of wasting extra food, we now share it with people who truly need it. FoodBridge made it easy.',
      image:
        'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=200&q=80'
    },
    {
      name: 'Little Stars Home',
      message:
        'Our children receive regular food support from nearby donors. This platform creates real impact.',
      image:
        'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&w=200&q=80'
    },
    {
      name: 'City Care NGO',
      message:
        'Finding available food donations is faster now. We can reach more people every single week.',
      image:
        'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=200&q=80'
    }
  ];

  activeTestimonialSlide = 0;
  private testimonialTimer?: number;

  get testimonialSlides(): number[] {
    return [0, 1, 2];
  }

  get visibleTestimonials(): Testimonial[] {
    const start = this.activeTestimonialSlide * 2;
    return this.testimonials.slice(start, start + 2);
  }

  ngOnInit(): void {
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    this.stopAutoSlide();
  }

  setTestimonialSlide(index: number): void {
    this.activeTestimonialSlide = index;
    this.startAutoSlide();
  }

  private startAutoSlide(): void {
    this.stopAutoSlide();

    this.testimonialTimer = window.setInterval(() => {
      this.activeTestimonialSlide =
        (this.activeTestimonialSlide + 1) % this.testimonialSlides.length;
    }, 3000);
  }

  private stopAutoSlide(): void {
    if (this.testimonialTimer) {
      clearInterval(this.testimonialTimer);
    }
  }
 scrollTo(sectionId: string) {
  const element = document.getElementById(sectionId);

  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}
}
