export const languages = {
  zh: '中文',
  en: 'English',
};

export const defaultLang = 'zh';

export const ui = {
  zh: {
    'nav.home': '首页',
    'nav.about': '关于项目',
    'nav.team': '研究团队',
    'nav.news': '新闻动态',
    'nav.contact': '联系我们',
    'footer.copyright': '版权所有',
    'footer.all_rights_reserved': '保留所有权利',
    'home.hero.title': 'UOS',
    'home.hero.subtitle': '面向电力信息场景的人机物融合操作系统',
    'home.hero.description': '工业互联网软件平台发展的新阶段',
    'home.features.title': '核心特点',
    'home.features.ubiquitous.title': '泛在互联',
    'home.features.ubiquitous.desc': '支持全生产要素的有序互动',
    'home.features.software.title': '软件定义',
    'home.features.software.desc': '以软件驾驭系统复杂性',
    'home.features.intelligent.title': '智能驱动',
    'home.features.intelligent.desc': '实现智能化管控的资源管理',
    'about.title': '关于项目',
    'team.title': '研究团队',
    'news.title': '新闻动态',
    'news.read_more': '阅读更多',
    'news.back': '返回新闻列表',
    'contact.title': '联系我们',
    'contact.email': '邮箱',
    'contact.address': '地址',
    'contact.phone': '电话',
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.team': 'Team',
    'nav.news': 'News',
    'nav.contact': 'Contact',
    'footer.copyright': 'Copyright',
    'footer.all_rights_reserved': 'All rights reserved',
    'home.hero.title': 'UOS',
    'home.hero.subtitle': 'Human-Cyber-Physical Convergence Operating System for Power Information Scenarios',
    'home.hero.description': 'The New Stage of Industrial Internet Software Platform Development',
    'home.features.title': 'Core Features',
    'home.features.ubiquitous.title': 'Ubiquitous Connectivity',
    'home.features.ubiquitous.desc': 'Supporting orderly interaction of all production elements',
    'home.features.software.title': 'Software-Defined',
    'home.features.software.desc': 'Controlling system complexity through software',
    'home.features.intelligent.title': 'Intelligence-Driven',
    'home.features.intelligent.desc': 'Implementing intelligent resource management',
    'about.title': 'About the Project',
    'team.title': 'Research Team',
    'news.title': 'News',
    'news.read_more': 'Read More',
    'news.back': 'Back to News',
    'contact.title': 'Contact Us',
    'contact.email': 'Email',
    'contact.address': 'Address',
    'contact.phone': 'Phone',
  },
} as const;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

