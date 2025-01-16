import { formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ci from "../public/images.jpeg";
import { Button } from "./ui/button";
import { Author, Blog } from "@/sanity/types";

export type BlogTypeCard = Omit<Blog, "author"> & {author?: Author};

const BlogCard = ({ post }: { post: BlogTypeCard }) => {
  const {
    _createdAt,
    _id,
    title,
    description,
    image,
    category,
    author,
    views,
  } = post;

  return (
    <li className="startup-card group">
      <div className="flex-between">
        <p className="startup_card_date">{formatDate(_createdAt)}</p>
        <div className="flex gap-1.5">
          <EyeIcon className="size-6 text-primary" />
          <span className="text-16-medium">{views}</span>
        </div>
      </div>
      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
          <Link href={`/user/${author?._id}`}>
            <p className="text-16-medium line-clamp-1">{author?.name}</p>
          </Link>
          <Link href={`/blog/${_id}`}>
            <p className="text-26-semibold line-clamp-1">{title}</p>
          </Link>
        </div>
        <Link href={`/user/${author?._id}`}>
          <Image
            className="rounded-full"
            src={post?.author?.image || ""}
            width={48}
            height={48}
            alt="avator-image"
          />
        </Link>
      </div>
      <Link href={`/blog/${_id}`}>
        <p className="startup-card_desc">{description}</p>
        <img src={image} alt="image" className="startup-card_img" />
      </Link>
      <div className="flex-between gap-3 mt-5">
        <Link href={`/?query=${category?.toLowerCase()}`}>
          <p className="text-16-medium">{category}</p>
        </Link>
        <Button className="startup-card_btn" asChild>
          <Link href={`/blog/${_id}`}>Details</Link>
        </Button>
      </div>
    </li>
  );
};

export default BlogCard;
