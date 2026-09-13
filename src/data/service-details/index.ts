import { ServiceDetail } from "@/types/service-detail";
import { webDevelopmentDetail } from "./web-development";
import { softwareDevelopmentDetail } from "./software-development";
import { ecommerceDetail } from "./e-commerce";
import { cmsSolutionsDetail } from "./cms-solutions";
import { automationDetail } from "./automation";
import { cloudSolutionsDetail } from "./cloud-solutions";
import { aiSolutionsDetail } from "./ai-solutions";

const serviceDetailsMap: Record<string, ServiceDetail> = {
  "web-development": webDevelopmentDetail,
  "software-development": softwareDevelopmentDetail,
  "e-commerce": ecommerceDetail,
  "cms-solutions": cmsSolutionsDetail,
  "automation": automationDetail,
  "cloud-solutions": cloudSolutionsDetail,
  "ai-solutions": aiSolutionsDetail,
};

export function getServiceDetail(slug: string): ServiceDetail | undefined {
  return serviceDetailsMap[slug];
}

export function getAllServiceDetailSlugs(): string[] {
  return Object.keys(serviceDetailsMap);
}
