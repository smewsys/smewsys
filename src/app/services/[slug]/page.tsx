import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceDetail, getAllServiceDetailSlugs } from "@/data/service-details";
import { services } from "@/data/services";
import { ServiceDetailTemplate } from "@/components/templates/ServiceDetailTemplate";

interface ServiceDetailPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  const slugs = getAllServiceDetailSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ServiceDetailPageProps): Promise<Metadata> {
  const service = getServiceDetail(params.slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} — Services`,
    description: service.metaDescription,
    openGraph: {
      title: `${service.title} — SMEWSYS Technology Services`,
      description: service.metaDescription,
      url: `https://smewsys.com/services/${service.slug}`,
      siteName: "SMEWSYS",
      type: "website",
    },
  };
}

export default function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const serviceDetail = getServiceDetail(params.slug);

  if (!serviceDetail) {
    notFound();
  }

  const relatedServices = services.filter((s) =>
    serviceDetail.relatedServiceSlugs.includes(s.slug)
  );

  return (
    <ServiceDetailTemplate
      serviceDetail={serviceDetail}
      relatedServices={relatedServices}
    />
  );
}

