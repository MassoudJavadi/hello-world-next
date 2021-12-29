//domain.com/news
import { Fragment } from "react";
import Link from "next/link";

const NewsPage = () => {
  return (
    <Fragment>
      <h1>The News page</h1>
      <ul>
        <li>
          <Link href="news/nextjs-is-a-great-framework">
            NextJs is a great framework
          </Link>
        </li>
        <li>Something Else</li>
      </ul>
    </Fragment>
  );
};

export default NewsPage;
