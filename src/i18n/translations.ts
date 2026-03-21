export type Locale = "ko" | "en";

export const translations: Record<Locale, Record<string, string | string[]>> = {
  ko: {
    // Navigation
    "nav.posts": "글",
    "nav.tags": "태그",
    "nav.about": "소개",
    "nav.archives": "아카이브",
    "nav.search": "검색",
    "nav.skipToContent": "본문으로 건너뛰기",
    "nav.openMenu": "메뉴 열기",
    "nav.closeMenu": "메뉴 닫기",
    "nav.toggleTheme": "라이트/다크 모드 전환",

    // Index page
    "index.greeting": "안녕하세요",
    "index.description":
      "뉴월드 인생2회차 그리고 ... 개발, 일상, 생각을 기록하는 블로그입니다.",
    "index.socialLinks": "소셜 링크:",
    "index.featured": "추천 글",
    "index.recentPosts": "최근 글",
    "index.allPosts": "모든 글",

    // Posts page
    "posts.title": "글",
    "posts.desc": "작성한 모든 글입니다.",

    // Tags page
    "tags.title": "태그",
    "tags.desc": "글에서 사용된 모든 태그입니다.",
    "tags.tagPrefix": "태그:",

    // Archives page
    "archives.title": "아카이브",
    "archives.desc": "보관된 모든 글입니다.",

    // Search page
    "search.title": "검색",
    "search.desc": "글 검색 ...",

    // Pagination
    "pagination.prev": "이전",
    "pagination.next": "다음",

    // Breadcrumb
    "breadcrumb.home": "홈",

    // Footer
    "footer.copyright": "Copyright",
    "footer.allRightsReserved": "All rights reserved.",

    // Back button
    "back.goBack": "돌아가기",
    "back.backToTop": "맨 위로",

    // Share links
    "share.shareOn": "이 글 공유하기:",

    // Post details
    "post.prevPost": "이전 글",
    "post.nextPost": "다음 글",
    "post.copy": "복사",
    "post.copied": "복사됨",
    "post.updated": "수정됨:",

    // 404
    "404.title": "페이지를 찾을 수 없습니다",
    "404.desc": "페이지를 찾을 수 없습니다.",
    "404.goHome": "홈으로 돌아가기",

    // Months
    "months.0": "1월",
    "months.1": "2월",
    "months.2": "3월",
    "months.3": "4월",
    "months.4": "5월",
    "months.5": "6월",
    "months.6": "7월",
    "months.7": "8월",
    "months.8": "9월",
    "months.9": "10월",
    "months.10": "11월",
    "months.11": "12월",

    // Language switcher
    "lang.switch": "EN",
  },
  en: {
    // Navigation
    "nav.posts": "Posts",
    "nav.tags": "Tags",
    "nav.about": "About",
    "nav.archives": "Archives",
    "nav.search": "Search",
    "nav.skipToContent": "Skip to content",
    "nav.openMenu": "Open Menu",
    "nav.closeMenu": "Close Menu",
    "nav.toggleTheme": "Toggles light & dark",

    // Index page
    "index.greeting": "Hello",
    "index.description":
      "New World, 2nd Playthrough, and ... A blog about development, daily life, and thoughts.",
    "index.socialLinks": "Social Links:",
    "index.featured": "Featured",
    "index.recentPosts": "Recent Posts",
    "index.allPosts": "All Posts",

    // Posts page
    "posts.title": "Posts",
    "posts.desc": "All the articles I've posted.",

    // Tags page
    "tags.title": "Tags",
    "tags.desc": "All the tags used in posts.",
    "tags.tagPrefix": "Tag:",

    // Archives page
    "archives.title": "Archives",
    "archives.desc": "All the articles I've archived.",

    // Search page
    "search.title": "Search",
    "search.desc": "Search any article ...",

    // Pagination
    "pagination.prev": "Prev",
    "pagination.next": "Next",

    // Breadcrumb
    "breadcrumb.home": "Home",

    // Footer
    "footer.copyright": "Copyright",
    "footer.allRightsReserved": "All rights reserved.",

    // Back button
    "back.goBack": "Go back",
    "back.backToTop": "Back To Top",

    // Share links
    "share.shareOn": "Share this post on:",

    // Post details
    "post.prevPost": "Previous Post",
    "post.nextPost": "Next Post",
    "post.copy": "Copy",
    "post.copied": "Copied",
    "post.updated": "Updated:",

    // 404
    "404.title": "Page Not Found",
    "404.desc": "Page not found.",
    "404.goHome": "Go back home",

    // Months
    "months.0": "January",
    "months.1": "February",
    "months.2": "March",
    "months.3": "April",
    "months.4": "May",
    "months.5": "June",
    "months.6": "July",
    "months.7": "August",
    "months.8": "September",
    "months.9": "October",
    "months.10": "November",
    "months.11": "December",

    // Language switcher
    "lang.switch": "KO",
  },
} as const;
