import ChromaGrid, { ChromaItem } from './ChromaGrid' 
const items: ChromaItem[] = [
    {
      image: '/metaverse.jpg',
      title: 'Metaverse 2D Game',
      subtitle: 'Backend Developer',
      handle: 'Github',
      borderColor: '#4F46E5',
      gradient: 'linear-gradient(145deg,#4F46E5,#000)',
      url: 'https://github.com/thecurioussailor/metaverse-2d'
    },
    {
      image: '/probo.jpg',
      title: 'Probo - Opinion Market',
      subtitle: 'DevOps Engineer',
      handle: 'Github',
      borderColor: '#10B981',
      gradient: 'linear-gradient(210deg,#10B981,#000)',
      url: 'https://github.com/thecurioussailor/metaverse-2d'
    },
    {
      image: '/metaverse.png',
      title: 'Play Earth Mama - Watch Together',
      subtitle: 'UI/UX Designer',
      handle: 'Github',
      borderColor: '#F59E0B',
      gradient: 'linear-gradient(165deg,#F59E0B,#000)',
      url: 'https://github.com/thecurioussailor/playearthmama'
    },
    {
      image: '/metaverse.png',
      title: 'Task Sprout',
      subtitle: 'Data Scientist',
      handle: 'Github',
      borderColor: '#EF4444',
      gradient: 'linear-gradient(195deg,#EF4444,#000)',
      url: 'https://kaggle.com/'
    },
  ];
const Backend = () => {
  return (
    <div>
        <ChromaGrid items={items} />
    </div>
  )
}

export default Backend