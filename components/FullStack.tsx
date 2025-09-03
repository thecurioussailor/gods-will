import ChromaGrid, { ChromaItem } from './ChromaGrid' 
const items: ChromaItem[] = [
    {
      image: '/metaverse.jpg',
      title: 'Trueman CEX in Rust',
      subtitle: 'Centralized Exchange',
      handle: 'Github',
      borderColor: '#4F46E5',
      gradient: 'linear-gradient(145deg,#4F46E5,#000)',
      url: 'https://github.com/thecurioussailor/metaverse-2d'
    },
    {
        image: '/metaverse.jpg',
        title: 'SocketTalk',
        subtitle: 'Chat App',
        handle: 'Github',
        borderColor: '#4F46E5',
        gradient: 'linear-gradient(145deg,#4F46E5,#000)',
        url: 'https://github.com/thecurioussailor/metaverse-2d'
      },
  ];
const FullStack = () => {
  return (
    <div>
        <ChromaGrid items={items} />
    </div>
  )
}

export default FullStack