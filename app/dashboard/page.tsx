import AddNewButton from '@/features/dashboard/components/add-new-button'
import AddRepoButton from '@/features/dashboard/components/add-repo-button'
import Image from 'next/image';

interface Props{
  title: string;
  description: string;
  imageSrc: string;
}

//temporary playground
interface Playgrounds{
  id: string;
  name:string;
}

const EmptyState = ({title, description, imageSrc}: Props) => {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <Image 
      src={imageSrc} 
      alt={title} 
      height={220} 
      width={220} 
      className='mb-4'/>
      <h2 className='text-xl font-semibold text-gray-500'>
        {title}
      </h2>
      <p className='text-gray-400'>
        {description}
      </p>
    </div>
  )
}

const page = () => {
  const playgrounds: Playgrounds[] = [];

  return (
    <div className="flex flex-col min-h-screen">

      {/* Top Section */}
      <div className="mx-auto w-full max-w-7xl px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AddNewButton />
          <AddRepoButton />
        </div>
      </div>

      {/* Center Section */}
      <div className="flex flex-1 -mt-50 justify-center">
        {playgrounds.length === 0 ? (
          <EmptyState
            title="No projects found"
            description="Create your first project or open a repository."
            imageSrc="/empty-state.svg"
          />
        ) : (
          <p>Playground Table</p>
        )}
      </div>

    </div>
  );
};


export default page