
import { Root } from '@/Interfaces/Portfolio.interface';
import ProjectItem from './ProjectItem';

export default function ProjectSection({data}: {data:Root})
{
    return (
        <div>
            {data.map(e => <ProjectItem Root2={e}></ProjectItem>)}
        </div>
    )
}