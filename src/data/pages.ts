import type { CollectionEntry } from "astro:content";
import {
  serviceAiEngineering,
  serviceAiGoToMarket,
  serviceAiProductStrategy,
  serviceMobileApps,
  serviceWebApps,
  site,
  socialLinks,
  type ServiceDelivery,
} from "./site";
import { blogPostThumbnailUrl, imageUrl } from "../lib/links";

export type PageCategory = "services" | "company" | "legal";

export interface OpenGraph {
  og: {
    url: string;
    locale: string;
    title: string;
    description: string;
    type: string;
    imageUrl: string;
    imageAlt: string;
  };
  twitterX: {
    title: string;
    description: string;
    imageUrl: string;
    imageAlt: string;
    site: string;
    card: string;
  };
}

export interface PageData {
  category: PageCategory;
  name: string;
  url: string;
  title: string;
  description: string;
  openGraph: OpenGraph;
}

const SOCIAL_CARD = "/website_social_card.png";

const siteTitle = (pageName?: string) => (pageName ? `${site.title} - ${pageName}` : site.title);

function openGraph(title: string, description: string, image: string): OpenGraph {
  return {
    og: {
      url: site.url,
      locale: "en",
      title,
      description,
      type: "website",
      imageUrl: image,
      imageAlt: description,
    },
    twitterX: {
      title,
      description,
      imageUrl: image,
      imageAlt: description,
      site: socialLinks.twitter,
      card: "summary_large_image",
    },
  };
}

const pageOpenGraph = (pageName: string) =>
  openGraph(siteTitle(pageName), site.description, imageUrl(SOCIAL_CARD));

const serviceOpenGraph = (service: ServiceDelivery) =>
  openGraph(siteTitle(service.name), service.description, imageUrl(SOCIAL_CARD));

function companyPage(name: string, url: string, title: string, description: string): PageData {
  return {
    category: "company",
    name,
    url,
    title: siteTitle(title),
    description,
    openGraph: pageOpenGraph(title),
  };
}

function servicePage(service: ServiceDelivery, url: string): PageData {
  return {
    category: "services",
    name: service.name,
    url,
    title: siteTitle(service.name),
    description: service.description,
    openGraph: serviceOpenGraph(service),
  };
}

function legalPage(name: string, url: string): PageData {
  return {
    category: "legal",
    name,
    url,
    title: siteTitle(name),
    description: name,
    openGraph: pageOpenGraph(name),
  };
}

export const pages = {
  blog: companyPage("Blog", "/blog", "Blog", "Our blog"),
  aboutUs: companyPage("About us", "/page/lets_talk", "About us", "About us"),
  letsTalk: companyPage("Let's talk", "/page/lets_talk", "Let's talk", "Let's talk about your project"),
  clients: companyPage("Clients", "/page/clients", "Clients", "Our clients"),
  cases: companyPage("Cases", "/page/cases", "Case studies", "Case studies"),
  nativedsd: companyPage("NativeDSD", "/page/nativedsd", "NativeDSD", "Nativedsd"),
  signetta: companyPage("Signetta", "/page/signetta", "Signetta", "Signetta"),
  fontdue: companyPage("Font Due", "/page/fontdue", "FontDue", "FontDue"),
  burohelp: companyPage("Burohelp", "/page/burohelp", "Burohelp", "Burohelp"),
  whatWeDo: companyPage(
    "About",
    "/page/what_we_do",
    "About",
    "We are a software development company that builds custom software solutions for businesses.",
  ),
  aiProductStrategy: servicePage(serviceAiProductStrategy, "/page/ai_product_strategy"),
  aiGoToMarket: servicePage(serviceAiGoToMarket, "/page/ai_go_to_market"),
  aiEngineering: servicePage(serviceAiEngineering, "/page/ai_engineering"),
  mobileApps: servicePage(serviceMobileApps, "/page/mobile_apps"),
  webApps: servicePage(serviceWebApps, "/page/web_apps"),
  privacyPolicy: legalPage("Privacy Policy", "/page/privacy_policy"),
  cookiePolicy: legalPage("Cookie Policy", "/page/cookie_policy"),
} satisfies Record<string, PageData>;

/** Service pages rendered by `src/pages/page/[service].astro`. */
export const servicePages = [
  { slug: "ai_product_strategy", service: serviceAiProductStrategy, page: pages.aiProductStrategy },
  { slug: "ai_go_to_market", service: serviceAiGoToMarket, page: pages.aiGoToMarket },
  { slug: "ai_engineering", service: serviceAiEngineering, page: pages.aiEngineering },
  { slug: "mobile_apps", service: serviceMobileApps, page: pages.mobileApps },
  { slug: "web_apps", service: serviceWebApps, page: pages.webApps },
];

export const topNavigation = [pages.whatWeDo, pages.clients, pages.cases, pages.blog];

export const footerNavigation = [
  pages.whatWeDo,
  pages.aiProductStrategy,
  pages.aiGoToMarket,
  pages.aiEngineering,
  pages.webApps,
  pages.mobileApps,
  pages.letsTalk,
  pages.clients,
  pages.cases,
  pages.blog,
  pages.privacyPolicy,
  pages.cookiePolicy,
];

/** Pages listed in the sitemap. */
export const allNavigation = [
  pages.whatWeDo,
  pages.aiEngineering,
  pages.webApps,
  pages.mobileApps,
  pages.clients,
  pages.cases,
  pages.blog,
];

export function blogPostPageData(post: CollectionEntry<"posts">) {
  const { title, description } = post.data;
  return {
    title,
    description,
    openGraph: openGraph(title, description, blogPostThumbnailUrl(post)),
  };
}
