import BlogArticle from "../BlogArticle/BlogArticle";
import BlogsSection from "../BlogsSection/BlogsSection";
import { DataBlogsSection } from "../BlogsSection/DataBlogsSection/DataBlogsSection";
import { DataBlogsDynamicHero } from "../DynamicHero/DataDynamicHero/DataBlogsDynamicHero";
import DynamicHero from "../DynamicHero/DynamicHero";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import TransformBusinessBanner2 from "../TransformBusinessBanner/TransformBusinessBanner2";

export default function BlogsPage() {
    return (
        <div>
            <div>
                <Navbar />
            </div>

            <div>
                <DynamicHero data={DataBlogsDynamicHero} />
            </div>

            <div>
                <BlogArticle />
            </div>


            <div>
                <BlogsSection data={DataBlogsSection} />
            </div>



            <div className=''>
                <TransformBusinessBanner2 />
            </div>

            <div>
                <Footer />
            </div>


        </div>
    )
}