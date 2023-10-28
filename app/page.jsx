import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Create Your Own Feed
            <br className="max-md:hidden" />
            <span className="orange_gradient text-center"> AI-Powered Responses</span>
        </h1>
        <p className="desc text-center">
            Create your feed your way.
            <br/>
            Centralize all your social media accounts in one place. Curate the posts that you see here. Respond with AI Recommendations.
        </p>

        <Feed />
    </section>
  )
}

export default Home