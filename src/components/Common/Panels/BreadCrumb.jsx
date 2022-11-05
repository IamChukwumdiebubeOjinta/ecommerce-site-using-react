import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import React from "react";

const BreadCrumb = (props) => {
  const isLast = (index) => {
    return index === props.crumbs.length - 1;
  };
  return (
    <React.Fragment>
      <Breadcrumb spacing="8px" separator={<ChevronRightIcon className="w-4" />}>
        {props.crumbs.map((crumb, ci) => {
          const disabled = isLast(ci) ? "cursor-default" : "";

          return (
            <BreadcrumbItem key={ci}>
              <BreadcrumbLink
                href="#"
                className={` ${disabled}`}
                onClick={() => props.selected(crumb)}
              >
                {crumb}
              </BreadcrumbLink>
            </BreadcrumbItem>
          );
        })}

        {/* <BreadcrumbItem>
          <BreadcrumbLink href="#">About</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="#">Contact</BreadcrumbLink>
        </BreadcrumbItem> */}
      </Breadcrumb>
    </React.Fragment>
  );
};

export default BreadCrumb;
