import BlogContainer from "@/components/blogs/BlogContainer";
import Certification from "@/components/certifications/Certification";
import Education from "@/components/educations/Education";
import Experience from "@/components/experiences/Experience";
import FeaturedProject from "@/components/projects/FeaturedProject";
import Hero from "@/components/hero/Hero";
import Skill from "@/components/skills/Skill";

export default function Home() {
  return (
    <div className="px-8 space-y-4">
      <div className="container mx-auto px-4 sm:px-10 lg:px-28 xl:px-44 2xl:px-56 space-y-4">
        <Hero />
        <Skill />
        <FeaturedProject />
        <Experience />
        <Education />
        <Certification />
        <BlogContainer />
      </div>
    </div>
  );
}
