import { Imagem } from './styles'

import banner from '../assets/apresentacao.png'

const Banner = () => (
  <div>
    <Imagem style={{ backgroundImage: `url(${banner})` }}></Imagem>
  </div>
)

export default Banner
