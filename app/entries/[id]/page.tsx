
import DetailSection from './_components/DetailSection';

const page = async  ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
     console.log('id', id);
  return (
    <DetailSection id={id}/>
  )
}

export default page
