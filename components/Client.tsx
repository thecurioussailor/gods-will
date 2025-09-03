import ChromaGrid, { ChromaItem } from './ChromaGrid' 
const items: ChromaItem[] = [
    {
      image: '/metaverse.jpg',
      title: 'Tinywallet',
      subtitle: 'Backend Developer',
      handle: 'Github',
      borderColor: '#4F46E5',
      gradient: 'linear-gradient(145deg,#4F46E5,#000)',
      url: 'https://github.com/thecurioussailor/metaverse-2d'
    },
    {
        image: '/metaverse.jpg',
        title: 'Command Hive',
        subtitle: 'Backend Developer',
        handle: 'Github',
        borderColor: '#4F46E5',
        gradient: 'linear-gradient(145deg,#4F46E5,#000)',
        url: 'https://github.com/thecurioussailor/metaverse-2d'
    },
    {
        image: '/metaverse.jpg',
        title: 'Coinbuzz Dashboard',
        subtitle: 'Backend Developer',
        handle: 'Github',
        borderColor: '#4F46E5',
        gradient: 'linear-gradient(145deg,#4F46E5,#000)',
        url: 'https://github.com/thecurioussailor/metaverse-2d'
    },
    {
        image: '/metaverse.jpg',
        title: 'Portfolio',
        subtitle: 'Backend Developer',
        handle: 'Github',
        borderColor: '#4F46E5',
        gradient: 'linear-gradient(145deg,#4F46E5,#000)',
        url: 'https://github.com/thecurioussailor/metaverse-2d'
    },

    {
        image: '/metaverse.jpg',
        title: 'Ice Staking',
        subtitle: 'Backend Developer',
        handle: 'Github',
        borderColor: '#4F46E5',
        gradient: 'linear-gradient(145deg,#4F46E5,#000)',
        url: 'https://github.com/thecurioussailor/metaverse-2d'
    },
  ];
const Client = () => {
  return (
    <div>
        <ChromaGrid items={items} />
    </div>
  )
}

export default Client