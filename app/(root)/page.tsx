import { auth } from "@/auth";
import SearchForm from "@/components/SearchForm";
import StartupCard, { StartupCardType } from "@/components/StartupCard";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";

export default async function Home({searchParams} :
  {searchParams : Promise<{query: string}>}
) {
  const query = (await searchParams).query || "";

  const params = {search: query || null};

  const session = await auth();

  const {data: posts} = await sanityFetch({query: STARTUPS_QUERY, params});

  return (
    <>
    <section className="pink_container">
      <h1 className="heading">Pitch Your Idea Connect With World</h1>
      <p className="sub-heading !max-w-3xl">
      Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions
      </p>
      <SearchForm query={query}/>
    </section>

    <section className="section_container">
      <p className="text-30-semibold">
        {query ? `Search results for "${query}"` : "All Blogs"}
      </p>
      
      <ul className="mt-7 card_grid">
        {posts?.length > 0 ? (
          posts.map((post: StartupCardType, index: number) =>(
            <StartupCard key={post?._id} post={post}/>
          ))
        ):(
          <p className="text-20-semibold">No posts found</p>
        )}
      </ul>
    </section>
    <SanityLive />
    </>
  )
}
