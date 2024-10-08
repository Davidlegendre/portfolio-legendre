import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from 'next/headers'
import '../components/css/Home.class.css'
import AboutMeSection from "@/components/SectionAboutMe"
import ProjectSection from "@/components/ProjectsSection"
import { ToastContainer } from "react-toastify"
import { Root } from "@/Interfaces/Portfolio.interface"
export const dynamic = "force-dynamic";
export default async function(){
    const supabase = createServerComponentClient({cookies})
    
    const { data } = await supabase
    .from('Porfolio')
    .select('*, Captures(*), Links(*, TypeURLs(*))')
    
    return (
        <>
        <AboutMeSection></AboutMeSection>
        <ToastContainer
      />
      <ToastContainer />
        <div className="homePage">
            <p className="title-projects">Proyecto Realizados</p>
        { !data ? 
           <p className="isnullStyle">NO DATA</p>  : 
           <ProjectSection data={data}/>}
        </div>
        
        </>      
    )
}