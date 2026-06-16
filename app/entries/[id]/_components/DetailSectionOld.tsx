import Container from '@/app-components/global/Container'
import EntryCard from '@/app-components/home/entries/EntryCard';
import entryData from '@/utils/data/entry';

const DetailSectionOld = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  return (
    <div>
      {entryData.filter(entry => entry.id === id).map((entry) => (
      <Container key={entry.id} className="grid grid-cols-1 md:grid-cols-3 gap-4 py-8"> 
        <EntryCard key={entry.id} id={entry.id} image={entry.image} username={entry.username} caption={entry.caption} likes={entry.likes} views={entry.views} score={entry.score}/>
        
    </Container>
    ))}
    </div>
  )
}

export default DetailSectionOld
