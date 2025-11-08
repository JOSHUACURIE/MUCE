import { type NavigationData } from '../types/navigation';

export const navigationData: NavigationData = {
  topNav: [
    {
      id: 'organization-name',
      label: 'Millimani United - Community Empowerment',
      href: '/'
    }
    // Remove the donate button from here since it's already in the TopBar component
  ],
  mainNav: [
    {
      id: 'about',
      label: 'About Us',
      children: [
        { id: 'who-we-are', label: 'Who We Are', href: '/about/who-we-are' },
        { id: 'our-journey', label: 'Our Journey', href: '/about/our-journey' },
        { id: 'vision-mission', label: 'Vision,Mission & Spirit', href: '/about/vision-mission' }
      ]
    },
    {
      id: 'governance',
      label: 'Governance',
      children: [
        { id: 'board-directors', label: 'Board of Directors', href: '/governance/board' },
        { id: 'senior-management', label: 'Senior Management', href: '/governance/management' }
      ]
    },
    {
      id: 'media',
      label: 'Media',
      children: [
        { id: 'videos', label: 'Videos', href: '/media/videos' },
        { id: 'gallery', label: 'Gallery', href: '/media/gallery' }
      ]
    },
    {
      id: 'knowledge-hub',
      label: 'Knowledge Hub',
      children: [
        { id: 'news', label: 'News & Stories', href: '/knowledge/news' },
        { id: 'publications', label: 'Publications', href: '/knowledge/publications' },
        { id: 'reports', label: 'Reports', href: '/knowledge/reports' },
        { id: 'newsletters', label: 'Newsletters', href: '/knowledge/newsletters' },
        { id: 'events', label: 'Events', href: '/knowledge/events' }
      ]
    },
    {
      id: 'opportunities',
      label: 'Opportunities',
      children: [
        { id: 'jobs', label: 'Jobs', href: '/opportunities/jobs' },
        { id: 'proposals', label: 'Proposals', href: '/opportunities/proposals' }
      ]
    },
    {
      id: 'associates',
      label: 'Associates',
      href: '/associates'
    },
    {
      id: 'partners',
      label: 'Partners',
      href: '/partners'
    },
    {
      id: 'contact',
      label: 'Contact Us',
      href: '/contact'
    }
  ]
};