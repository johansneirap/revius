import {
  // FaceSmileIcon,
  // DevicePhoneMobileIcon,
  // AdjustmentsHorizontalIcon,
  // SunIcon,
  UserGroupIcon,
  ClockIcon,
  ScaleIcon,
  ChatBubbleOvalLeftIcon,
  ShieldExclamationIcon,
  ArrowsRightLeftIcon,
} from '@heroicons/react/24/solid'

// import benefitOneImg from '../../../public/img/benefit-one.png'
// import benefitOneImg from '../../../public/img/benefit-two.png'
import benefitOneImg from '../../../public/img/undraw_reviews.svg'
import benefitTwoImg from '../../../public/img/undraw_window_shopping.svg'

const benefitOne = {
  title: 'Lo que buscas en un solo lugar.',
  desc: 'Revius te permite acceder a reseñas de productos de diferentes fuentes y plataformas en un solo lugar, ahorrando tiempo y esfuerzo al no tener que buscar en múltiples sitios',
  image: benefitOneImg,
  bullets: [
    {
      title: 'Transparencia',
      desc: 'Transparente, sin sesgos ni bots. Toma tu decisión con confianza.',
      icon: <ScaleIcon />,
    },
    {
      title: 'Ahorra tiempo y esfuerzo',
      desc: 'No busques en todo internet. Si tienes el producto, tenemos reseñas.',
      icon: <ClockIcon />,
    },
    {
      title: 'Basado en la comunidad',
      desc: 'Comparte tus experiencias y opiniones sobre productos en común con otros.',
      icon: <UserGroupIcon />,
    },
  ],
}

const benefitTwo = {
  title: 'Evaluación integral',
  desc: 'Obtén una visión más completa y objetiva de las características y rendimiento de un producto en particular.',
  image: benefitTwoImg,
  bullets: [
    {
      title: 'Diversidad de opinión',
      desc: 'Toma tu decisión con una amplia variedad de opiniones.',
      icon: <ChatBubbleOvalLeftIcon />,
    },
    {
      title: 'Reduce riesgos',
      desc: 'Evita comprar productos de baja calidad.',
      icon: <ShieldExclamationIcon />,
    },
    {
      title: 'Retroalimentación constante',
      desc: 'Fomentamos la colaboración y el intercambio de información.',
      icon: <ArrowsRightLeftIcon />,
    },
  ],
}

export { benefitOne, benefitTwo }
