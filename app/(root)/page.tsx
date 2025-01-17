import SearchForm from "../../components/SearchForm";
import BlogCard, { BlogTypeCard } from "../../components/BlogCard";
import { BLOGS_QUERY } from "@/sanity/lib/queries";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { auth } from "@/auth";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const params = { search: query || null };

  const session = await auth();

  const { data: posts } = await sanityFetch({ query: BLOGS_QUERY, params });

  return (
    <>
      <section className="pink_container !min-h-[230px]">
        <h1 className="heading">
          Share your development knowledge with the world
        </h1>
        <p className="sub-heading !max-w-3xl">
          {" "}
          "Dev Share is the ultimate platform for developers to share knowledge, insights, and experiences with the world. Empower the tech community by contributing your expertise and learning from others!"
        </p>
        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Blogs"}
        </p>
        <ul className="mt-7 card_grid">
          {posts.length > 0 ? (
            posts.map((post: BlogTypeCard) => (
              <BlogCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-result">No blog found</p>
          )}
        </ul>
      </section>
      <SanityLive />
    </>
  );
}
