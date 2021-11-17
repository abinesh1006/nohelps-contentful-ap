import { graphql } from "gatsby"
import React from "react"
import CustomFonts from "../components/custom-fonts/custom-fonts"
import Navigation from "../components/navigation"
import MainContent from "../components/resume/main-content"
import Seo from "../components/seo/seo"
import Sidebar from "../components/resume/sidebar/sidebar"
import StructuredData from "../components/resume/structured-data"
import Footer from "../components/footer/footer"
import "../styles/style.css"


const AboutPage = ({ data }) => {
  const { history, profile, projects, social } = data

  return (
    <div className="antialiased bg-back leading-normal font-text text-front">
      <Seo />
      <StructuredData profile={profile} social={social.nodes} />
      <CustomFonts />

      <Navigation />

      <div className="md:max-w-screen-sm lg:max-w-screen-xl mx-auto px-4 flex flex-wrap pt-4 my-8">
        <Sidebar profile={profile} social={social.nodes} />

        <MainContent
          history={history.nodes}
          profile={profile}
          projects={projects.nodes}
        />
      </div>

      <Footer social={social.nodes} />
    </div>
  )
}

export default AboutPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        showThemeLogo
      }
    }
    profile: profileYaml {
      ...ProfileFragment
    }
    social: allSocialYaml(filter: { url: { ne: null } }) {
      nodes {
        ...SocialFragment
      }
    }
    history: allWorkHistoryYaml {
      nodes {
        ...WorkHistoryFragment
      }
    }
    projects: allProjectsYaml {
      nodes {
        ...ProjectFragment
      }
    }
  }
`
