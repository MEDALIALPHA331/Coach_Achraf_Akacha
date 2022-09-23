import { useState } from 'react'
import styles from './header.module.css'
import styled from 'styled-components'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Autoplay, EffectCube } from 'swiper'
import 'swiper/css'
import 'swiper/css/effect-fade'

interface HeadingData {
  image: string
  sloganPartOne: string
  sloganPartTwo: string
  sloganPartThree: string
  sloganPartFour: string | undefined
  button: string
  buttonAction: string
}

const headerData: HeadingData[] = [
  {
    image: '/photos/achraf2.png',
    sloganPartOne: 'action',
    sloganPartTwo: 'is the key',
    sloganPartThree: 'to all sucess',
    sloganPartFour: undefined,
    // animation: ""
    button: 'Contact Me',
    buttonAction: '',
  },
  {
    image: '/photos/achraf4.png',
    sloganPartOne: 'action',
    sloganPartTwo: 'is the key',
    sloganPartThree: 'to all sucess',
    sloganPartFour: undefined,
    button: 'Contact Me',
    buttonAction: '',
  },

  {
    image: '/photos/achraf7.png',
    sloganPartOne: 'action',
    sloganPartTwo: 'is the key',
    sloganPartThree: 'to all sucess',
    sloganPartFour: undefined,
    button: 'Contact Me',
    buttonAction: '',
  },
]

export default function Header() {
  return (
    <Swiper
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      modules={[EffectFade, Autoplay]}
      effect="fade"
      // modules={[EffectCards]}
      // effect="cards"
      autoplay={{
        delay: 2500,
        // pauseOnMouseEnter: true,
      }}
    >
      {headerData.map((item: HeadingData, index: number) => {
        return (
          <SwiperSlide>
            <Heading
              key={index}
              image={item.image}
              sloganPartOne={item.sloganPartOne}
              sloganPartTwo={item.sloganPartTwo}
              sloganPartThree={item.sloganPartThree}
              /*
            sloganPartFour={
              item.sloganPartFour !== undefined ? item.sloganPartFour : null
            }
            */
              button={item.button}
              buttonAction={item.buttonAction}
            />
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

function Heading({
  image,
  sloganPartOne,
  sloganPartTwo,
  sloganPartThree,
  button,
  buttonAction,
}: any) {
  //   const [state, setState] = useState(0)

  //   const handleClick = () => {
  //     setState(buttonAction)
  //   }

  return (
    <HeadingLayout>
      <Image src={image} layout="fill" style={{ zIndex: '-10' }} />

      <div
        className={`z-[20] flex h-full min-w-full flex-col items-center justify-center p-2 md:min-h-full md:w-1/2 `}
      >
        <h1 className=" mt-12 h-[60%] text-center text-5xl uppercase text-white md:max-h-[60%] md:min-w-[60%] md:text-left md:text-7xl">
          <span className={`${styles.span} ${styles.span1}`}>
            {sloganPartOne}{' '}
          </span>
          <br />
          <span className={`${styles.span} ${styles.span2} md:ml-[40px]`}>
            {sloganPartTwo}
          </span>
          <br />
          <span className={`${styles.span} ${styles.span3} md:ml-[80px]`}>
            {sloganPartThree}
          </span>
        </h1>

        <div className="z-[30] md:min-h-[20%]">
          <button
            // onClick={handleClick}
            className="rounded-lg border-[2px] border-violet-400 px-4 py-2 text-2xl text-white hover:cursor-pointer "
          >
            {button}
          </button>
        </div>
      </div>
      <div></div>
    </HeadingLayout>
  )
}

const HeadingLayout = styled.header`
  position: relative;
  display: flex;
  place-content: center;
  height: 100vh;
  max-height: 91vh;
  width: 100%;
  padding: 0 40px;

  z-index: 0;

  &::after {
    content: '';
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
  }
`
