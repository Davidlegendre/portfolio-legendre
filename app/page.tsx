import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from 'next/headers'
import '../components/css/Home.class.css'
import AboutMeSection from "@/components/SectionAboutMe"
import ProjectSection from "@/components/ProjectsSection"
import { Root } from '../Interfaces/Portfolio.interface';


export default async function(){
    const supabase = createServerComponentClient({cookies})
    
    const { data : Root} = await supabase
    .from('Porfolio')
    .select('*, Captures(*), Links(*, TypeURLs(*))')

    
    return (
        <>
        <AboutMeSection></AboutMeSection>
        <div className="homePage">
            <p className="title-projects">Proyecto Realizados</p>
        { !Root ? 
           <p className="isnullStyle">NO DATA</p>  : 
           <ProjectSection data={Root}/>}
        </div>
        
        </>      
    )
}