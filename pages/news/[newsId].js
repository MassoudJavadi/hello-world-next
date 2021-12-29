import React from "react";
import { useRouter } from "next/router";

const DetailPage = () => {
  const router = useRouter();

  console.log(router.query.newsId);

  return <div>details</div>;
};

export default DetailPage;
