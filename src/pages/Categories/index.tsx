import Banner from '../../components/BannerCategorie'
import HeaderCategorie from '../../components/HeaderCategorie'
import ProdutoCategoria from '../../components/ProdutosCategorie'

import pizza from '../../components/assets/PizzaCategoria.png'

const Categories = () => (
  <div>
    <HeaderCategorie></HeaderCategorie>
    <Banner></Banner>
    <div className="container grid">
      <ProdutoCategoria
        title="Pizza Marguerita"
        description="A clássica Marguerita: molho de tomate suculento,
        mussarela derretida, manjericão fresco e um toque de azeite.
        Sabor e simplicidade!"
        image={pizza}
      ></ProdutoCategoria>

      <ProdutoCategoria
        title="Pizza Marguerita"
        description="A clássica Marguerita: molho de tomate suculento,
        mussarela derretida, manjericão fresco e um toque de azeite.
        Sabor e simplicidade!"
        image={pizza}
      ></ProdutoCategoria>

      <ProdutoCategoria
        title="Pizza Marguerita"
        description="A clássica Marguerita: molho de tomate suculento,
        mussarela derretida, manjericão fresco e um toque de azeite.
        Sabor e simplicidade!"
        image={pizza}
      ></ProdutoCategoria>

      <ProdutoCategoria
        title="Pizza Marguerita"
        description="A clássica Marguerita: molho de tomate suculento,
        mussarela derretida, manjericão fresco e um toque de azeite.
        Sabor e simplicidade!"
        image={pizza}
      ></ProdutoCategoria>

      <ProdutoCategoria
        title="Pizza Marguerita"
        description="A clássica Marguerita: molho de tomate suculento,
        mussarela derretida, manjericão fresco e um toque de azeite.
        Sabor e simplicidade!"
        image={pizza}
      ></ProdutoCategoria>

      <ProdutoCategoria
        title="Pizza Marguerita"
        description="A clássica Marguerita: molho de tomate suculento,
        mussarela derretida, manjericão fresco e um toque de azeite.
        Sabor e simplicidade!"
        image={pizza}
      ></ProdutoCategoria>
    </div>
  </div>
)

export default Categories
