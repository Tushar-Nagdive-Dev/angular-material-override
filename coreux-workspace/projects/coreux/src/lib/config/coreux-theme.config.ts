export interface CoreUXTheme {
  id: string;
  label: string;
  className: string;
  scssPath: string;
}

export const AVAILABLE_COREUX_THEMES: CoreUXTheme[] = [
  {
    id: 'minimal-zen',
    label: 'Minimal Zen',
    className: 'theme-zen',
    scssPath: '../../themes/minimal-zen.scss'
  },
  {
    id: 'glassmorphism',
    label: 'Glassmorphism',
    className: 'theme-glass',
    scssPath: '../../themes/glassmorphism.scss'
  },
  {
    id: 'neumorphism',
    label: 'Neumorphism',
    className: 'theme-neu',
    scssPath: '../../themes/neumorphism.scss'
  }
];
