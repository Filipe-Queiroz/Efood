import { Text, BgImg, Text1, Text2 } from './styles'

type Props = {
  banner: 'Home' | 'Saiba mais'
}

const Banner = ({ banner }: Props) => {
  if (banner === 'Home') {
    return <Text>Viva experiências gastronômicas no conforto da sua casa</Text>
  } else {
    return (
      <BgImg>
        <div className="container">
          <Text1>Italiana</Text1>
          <Text2>La Dolce Vita Trattoria</Text2>
        </div>
      </BgImg>
    )
  }
}

export default Banner
