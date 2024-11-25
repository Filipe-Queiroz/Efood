import { useDispatch, useSelector } from 'react-redux'
import { AddCartButton, SubmitCartButton } from '../Cart/styles'
import {
  ConfirmedContainer,
  InputGroup,
  EnderecoContainer,
  PaidStage
} from './styles'
import {
  backtoCart,
  payment,
  confirmed,
  startCheckout,
  closeAndFinish
} from '../../store/reducers/cart'
import { RootReducer } from '../../store'
import { priceFormat } from '../../Utils'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { usePurchaseMutation } from '../../services/api'
import { IMaskInput } from 'react-imask'

type Props = {
  checkoutStart?: boolean
  priceTotal: number
}

const Checkout = ({ checkoutStart = false, priceTotal = 0 }: Props) => {
  const [purchase, { isSuccess, data }] = usePurchaseMutation()

  const { isPayment, isConfirmed, pedido } = useSelector(
    (state: RootReducer) => state.cart
  )
  const dispatch = useDispatch()

  const finish = () => {
    dispatch(closeAndFinish())
  }
  const backCart = () => {
    dispatch(backtoCart())
  }
  const backAdress = () => {
    dispatch(startCheckout())
  }
  const activePayment = () => {
    if (
      form.values.nome &&
      form.values.endereco &&
      form.values.cidade &&
      form.values.cep &&
      form.values.numero
    ) {
      dispatch(payment())
    } else {
      alert('Preencha antes os dados obrigatórios!')
    }
  }
  const activeConfirmed = () => {
    if (
      form.values.nomeCartao &&
      form.values.numeroCartao &&
      form.values.cvv &&
      form.values.anoVencimento &&
      form.values.mesVencimento
    ) {
      dispatch(confirmed())
    } else {
      alert('Preencha antes os dados obrigatórios!')
    }
    console.log(pedido)
  }

  const form = useFormik({
    initialValues: {
      nome: '',
      endereco: '',
      cidade: '',
      cep: '',
      numero: '',
      complemento: '',
      nomeCartao: '',
      numeroCartao: '',
      cvv: '',
      mesVencimento: '',
      anoVencimento: ''
    },
    validationSchema: Yup.object({
      nome: Yup.string().required('Campo obrigatório'),
      endereco: Yup.string().required('Campo obrigatório'),
      cidade: Yup.string().required('Campo obrigatório'),
      cep: Yup.string().required('Campo obrigatório'),
      numero: Yup.string().required('Campo obrigatório'),

      nomeCartao: Yup.string().when((values, schema) =>
        isPayment ? schema.required('O campo é obrigatório') : schema
      ),
      numeroCartao: Yup.string().when((values, schema) =>
        isPayment ? schema.required('O campo é obrigatório') : schema
      ),
      cvv: Yup.string().when((values, schema) =>
        isPayment ? schema.required('O campo é obrigatório') : schema
      ),
      mesVencimento: Yup.string().when((values, schema) =>
        isPayment ? schema.required('O campo é obrigatório') : schema
      ),
      anoVencimento: Yup.string().when((values, schema) =>
        isPayment ? schema.required('O campo é obrigatório') : schema
      )
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.nome,
          address: {
            city: values.cidade,
            description: values.endereco,
            number: Number(values.numero),
            zipCode: values.cep,
            complement: values.complemento
          }
        },
        payment: {
          card: {
            name: values.nomeCartao,
            number: values.numeroCartao,
            code: Number(values.cvv),
            expires: {
              month: Number(values.mesVencimento),
              year: Number(values.anoVencimento)
            }
          }
        },
        products: [
          {
            id: 1,
            price: 100
          }
        ]
      })
    }
  })
  const getErroMassage = (campo: string, message?: string) => {
    const estaAlterado = campo in form.touched
    const estaInvalido = campo in form.errors
    if (estaAlterado && estaInvalido) {
      return message
    }
    return ''
  }
  return (
    <form onSubmit={form.handleSubmit}>
      <EnderecoContainer className={checkoutStart ? 'show' : ''}>
        <h2>Entrega</h2>
        <InputGroup>
          <label htmlFor="nome">Quem irá receber</label>
          <input
            type="text"
            required
            id="nome"
            name="nome"
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            value={form.values.nome}
          />
          <small>{getErroMassage('nome', form.errors.nome)}</small>
        </InputGroup>
        <InputGroup>
          <label htmlFor="endereco">Endereço</label>
          <input
            type="text"
            required
            id="endereco"
            name="endereco"
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            value={form.values.endereco}
          />
          <small>{getErroMassage('endereco', form.errors.endereco)}</small>
        </InputGroup>
        <InputGroup>
          <label htmlFor="cidade">Cidade</label>
          <input
            type="text"
            required
            id="cidade"
            name="cidade"
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            value={form.values.cidade}
          />
          <small>{getErroMassage('cidade', form.errors.cidade)}</small>
        </InputGroup>
        <div className="CEPNumber">
          <InputGroup>
            <label htmlFor="cep">CEP</label>
            <IMaskInput
              mask="00.000-000"
              type="text"
              required
              id="cep"
              name="cep"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              value={form.values.cep}
            />
            <small>{getErroMassage('cep', form.errors.cep)}</small>
          </InputGroup>
          <InputGroup>
            <label htmlFor="numero">Número</label>
            <input
              type="number"
              required
              id="numero"
              name="numero"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              value={form.values.numero}
            />
            <small>{getErroMassage('numero', form.errors.numero)}</small>
          </InputGroup>
        </div>
        <InputGroup>
          <label htmlFor="complemento">Complemento (opcional)</label>
          <input
            type="text"
            id="complemento"
            name="complemento"
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            value={form.values.complemento}
          />
          {/* <small>
                {getErroMassage('complemento', form.errors.complemento)}
            </small> */}
        </InputGroup>
        <div className="buttomContainer">
          <AddCartButton type="submit" onClick={activePayment}>
            Continuar com o pagamento
          </AddCartButton>
          <AddCartButton onClick={backCart}>Voltar ao carrinho</AddCartButton>
        </div>
      </EnderecoContainer>
      <PaidStage className={isPayment ? 'show' : ''}>
        <p>Pagamento - Valor a pagar {priceFormat(priceTotal)}</p>

        <InputGroup>
          <label htmlFor="nomeCartao">Nome do cartão</label>
          <input
            type="text"
            required
            id="nomeCartao"
            name="nomeCartao"
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            value={form.values.nomeCartao}
          />
          <small>{getErroMassage('nomeCartao', form.errors.nomeCartao)}</small>
        </InputGroup>
        <div className="fieldContainer">
          <InputGroup>
            <label htmlFor="numeroCartao">Número do cartão</label>
            <IMaskInput
              mask="0000.0000.0000.0000"
              type="text"
              required
              id="numeroCartao"
              name="numeroCartao"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              value={form.values.numeroCartao}
            />
            <small>
              {getErroMassage('cardNumber', form.errors.numeroCartao)}
            </small>
          </InputGroup>
          <InputGroup>
            <label htmlFor="cvv">CVV</label>
            <IMaskInput
              mask="000"
              type="text"
              required
              id="cvv"
              name="cvv"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              value={form.values.cvv}
            />
            <small>{getErroMassage('cvv', form.errors.cvv)}</small>
          </InputGroup>
        </div>
        <div className="fieldContainer">
          <InputGroup>
            <label htmlFor="mesVencimento">Mês de vencimento</label>
            <IMaskInput
              mask="00"
              type="text"
              required
              id="mesVencimento"
              name="mesVencimento"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              value={form.values.mesVencimento}
            />
            <small>
              {getErroMassage('mesVencimento', form.errors.mesVencimento)}
            </small>
          </InputGroup>
          <InputGroup>
            <label htmlFor="anoVencimento">Ano de vencimento</label>
            <IMaskInput
              mask="00"
              type="text"
              required
              id="anoVencimento"
              name="anoVencimento"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              value={form.values.anoVencimento}
            />
            <small>
              {getErroMassage('anoVencimento', form.errors.anoVencimento)}
            </small>
          </InputGroup>
        </div>
        <div className="buttomContainer">
          <SubmitCartButton type="submit" onClick={activeConfirmed}>
            Finalizar pagamento
          </SubmitCartButton>
          <AddCartButton onClick={backAdress}>
            Voltar para a edição do endereço
          </AddCartButton>
        </div>
      </PaidStage>
      <ConfirmedContainer className={isConfirmed && isSuccess ? 'show' : ''}>
        <h2>Pedido realizado - {data?.orderId} </h2>
        <p>
          Estamos felizes em informar que seu pedido já está em processo de
          preparação e, em breve, será entregue no endereço fornecido.
        </p>
        <br />
        <p>
          Gostaríamos de ressaltar que nossos entregadores não estão autorizados
          a realizar cobranças extras.
        </p>
        <br />
        <p>
          Lembre-se da importância de higienizar as mãos após o recebimento do
          pedido, garantindo assim sua segurança e bem-estar durante a refeição.
        </p>
        <br />
        <p>
          Esperamos que desfrute de uma deliciosa e agradável experiência
          gastronômica. Bom apetite!
        </p>
        <div className="buttomContainer">
          <AddCartButton type="submit" onClick={finish}>
            Concluir
          </AddCartButton>
        </div>
      </ConfirmedContainer>
    </form>
  )
}

export default Checkout
