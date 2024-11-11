export enum PAGE_ROUTE {
  HOMEPAGE = "/",
  SIGN_IN = "/sign-in",
  FORGOT_PASSWORD = "/forgot-password",
  FIND_BUILDER = "/find-builder",
}

export enum ADMIN_ROUTE {
  DASHBOARD = "/dashboard",
  MILESTONES = `${ADMIN_ROUTE.DASHBOARD}/milestones`,
  PROGRESS_REPORTS = `${ADMIN_ROUTE.DASHBOARD}/progress-reports`,
  DEFECTS = `${ADMIN_ROUTE.DASHBOARD}/defects`,
  PROJECT_IMAGES = `${ADMIN_ROUTE.DASHBOARD}/project-images`,
}

export const ICON_SIZE = 20

export enum COLOR {}

export const HEADER_LINKS = [
  { label: "About", href: PAGE_ROUTE.HOMEPAGE },
  { label: "How it works", href: "/how-it-work" },
  { label: "Our Team", href: "/our-team" },
  { label: "Find a builder", href: PAGE_ROUTE.FIND_BUILDER },
  { label: "Get in touch", href: "/get-in-touch" },
]
