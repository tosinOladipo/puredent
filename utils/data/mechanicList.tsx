import { Camera, MessageSquareMore } from 'lucide-react'

type MechanicType = {
  icon: React.ReactNode;
  headline: string;
  desc: string
};



const mechList: MechanicType[] = [
    {
    icon: <Camera/>,
    headline: 'Photo entries',
    desc:'Crisp 9:16 selfies showing your fresh glow.'
  },

   {
    icon: <MessageSquareMore />,
    headline: 'Caption',
    desc:'Mini-caption capturing your confident moment'
  },
  {
    icon: '/how-to-play',
    headline: 'Hashtags required',
    desc:'#SmileRevolutionNG · #12HourConfidence'
  },
];

export default mechList;