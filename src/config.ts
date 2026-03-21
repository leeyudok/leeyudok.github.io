export const SITE = {
  website: "https://leeyudok.github.io/",
  author: "leeyudok",
  profile: "https://github.com/leeyudok",
  desc: "뉴월드 인생2회차 그리고 ...",
  title: "덕삼이이야기",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true,
  editPost: {
    enabled: false,
    text: "Edit page",
    url: "https://github.com/leeyudok/leeyudok.github.io/edit/master/",
  },
  dynamicOgImage: true,
  dir: "ltr",
  lang: "ko",
  timezone: "Asia/Seoul",
} as const;
