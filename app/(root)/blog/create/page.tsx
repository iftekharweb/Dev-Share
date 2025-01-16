import { auth } from "@/auth"
import BlogForm from "@/components/BlogForm";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await auth();
  if(!session) redirect('/');
  return (
    <>
      <section className='pink_container !min-h-[230px]'>
        <h1 className='heading'>Submit Your Blog</h1>
      </section>
      <BlogForm/>
    </>
  )
}

export default page
