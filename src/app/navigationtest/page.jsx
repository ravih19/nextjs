"use client"; 
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import React from "react";

const NavigationTestPage = () => {
  // const search = useSearchParams();
  // const pathname = usePathname();
  // console.log(pathname);
  // const q=search.get("q");
  // console.log(q);
  return (
    <div>
      NavigationTestPage
      <Link href="/" prefetch={false}>
        Click on Me Daddy
      </Link>
    </div>
  );
};

export default NavigationTestPage;
