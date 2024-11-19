export enum PAGE_ROUTE {
  HOMEPAGE = "/",
  SIGN_IN = "/sign-in",
  FORGOT_PASSWORD = "/forgot-password",
  UPDATE_PASSWORD = "/update-password",
  FIND_BUILDER = "/find-builder",
}

export enum ADMIN_ROUTE {
  ADMIN = "/admin",
  MILESTONES = `${ADMIN_ROUTE.ADMIN}/milestones`,
  PROGRESS_REPORTS = `${ADMIN_ROUTE.ADMIN}/progress-reports`,
  DEFECTS = `${ADMIN_ROUTE.ADMIN}/defects`,
  PROJECT_IMAGES = `${ADMIN_ROUTE.ADMIN}/project-images`,
}

export enum ICON_SIZE {
  LARGE = 24,
  MEDIUM = 20,
  SMALL = 16,
}

export enum COLOR {
  DARK_ORANGE = "#ff7338",
  LIGHT_ORANGE = "#ffb945",
}

export const HEADER_LINKS = [
  { label: "About", href: PAGE_ROUTE.HOMEPAGE },
  { label: "How it works", href: "/how-it-work" },
  { label: "Our Team", href: "/our-team" },
  { label: "Find a builder", href: PAGE_ROUTE.FIND_BUILDER },
  { label: "Get in touch", href: "/get-in-touch" },
]
