"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import {
  getBlogs,
  BlogListResponse,
  BlogPaginationInfo,
} from "@/services/blog-service";
import BlogCard from "@/components/blog/blog-card";
import { formatDate } from "@/utils/format-date";
import { useEffect, useState } from "react";

interface BlogListProps {
  lng: string;
  initialBlogs: BlogPaginationInfo;
}

export default function BlogList({ lng, initialBlogs }: BlogListProps) {
  const [blogPaginationInfo, setBlogPaginationInfo] =
    useState<BlogPaginationInfo>(initialBlogs);

  console.log(blogPaginationInfo);

  const fetchBlogs = async (page: number) => {
    const res = await getBlogs({ page });
    if (res.code !== "success") {
      console.log("Failed to fetch blogs", page);

      return;
    }
    setBlogPaginationInfo(res.data);
  };

  const totalPages = Math.ceil(blogPaginationInfo.count / 3);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePreviousClick = () => {
    if (!blogPaginationInfo.previous) return;
    const url = new URL(blogPaginationInfo.previous);
    const pageNumber = url.searchParams.get("page") || "1"; // 默认为第一页

    fetchBlogs(Number(pageNumber));
  };

  const handleNextClick = () => {
    if (!blogPaginationInfo.next) return;
    const url = new URL(blogPaginationInfo.next);
    const pageNumber = url.searchParams.get("page");
    fetchBlogs(Number(pageNumber));
  };

  const handlePageNumberClick = (pageNumber: number) => {
    fetchBlogs(pageNumber);
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-10">
        {blogPaginationInfo.results.map((blog: BlogListResponse) => {
          return (
            <BlogCard
              key={blog.id}
              lng={lng}
              id={blog.id}
              title={blog.title}
              imgUrl={blog.cover_image}
              date={formatDate(blog.updated_at)}
              description={blog.summary}
            />
          );
        })}
      </div>
      <div className="grid grid-cols-3 justify-center border-t border-b p-10 mt-10 text-[#1e2d7d]">
        {blogPaginationInfo.previous ? (
          <div
            className="flex items-center gap-2 cursor-pointer font-medium"
            onClick={handlePreviousClick}
          >
            <FontAwesomeIcon icon={faAngleLeft} className="w-4 h-4" />
            Previous article
          </div>
        ) : (
          <div></div>
        )}

        <div className="flex gap-2">
          {pageNumbers.map((pageNum) => (
            <button
              key={pageNum}
              className="w-5 h-5 text-black"
              onClick={() => handlePageNumberClick(pageNum)}
            >
              {pageNum}
            </button>
          ))}
        </div>
        {blogPaginationInfo.next ? (
          <div
            className="flex items-center gap-2 cursor-pointer font-medium "
            onClick={handleNextClick}
          >
            Next article
            <FontAwesomeIcon icon={faAngleRight} className="w-4 h-4" />
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
