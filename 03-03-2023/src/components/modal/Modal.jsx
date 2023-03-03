import Button from '../button'
import './index.css'

const Modal = ({ setModalOpen }) => {
  return (
    <div className='Modal'>
      <div className='Modal__content'>
        <h3>
          Utilizziamo cookie e altre tecnologie essenziali per fornirti i nostri
          servizi e le funzionalità del sito. Se accetti e clicchi su "Accetta
          tutto", consentiremo anche alle aziende di terze parti con cui
          collaboriamo di memorizzare cookie sul tuo dispositivo e di utilizzare
          tecnologie simili per raccogliere e utilizzare i tuoi dati personali.
          Puoi rifiutare il consenso cliccando su "Rifiuta tutto". Puoi revocare
          il consenso in qualsiasi momento.
        </h3>
        <div className='Modal__btns'>
          <Button text='Rifiuta tutto' clickFunc={() => {}} />
          <Button
            text='Accetta tutto'
            clickFunc={() => setModalOpen((prev) => !prev)}
          />
        </div>
      </div>
    </div>
  )
}

export default Modal
