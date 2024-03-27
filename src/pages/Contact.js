import BenFoto from "../assets/ben.png"

const Contact = () => {
  return (
    <>
      <div className='contact-card'>
        <div>
          <img src={BenFoto} alt='Alim Karaca' width='300' />
        </div>
        <div className='contact-text-card'>
          <span className='contact-text'>Alim Karaca</span>
          <span className='contact-text'>
            <strong>E-Mail: </strong> alim.karaca2000@gmail.com
          </span>
          <span className='contact-text'>
            <strong>Phone: </strong>+90 522 243 9383
          </span>
        </div>
      </div>
    </>
  )
}

export default Contact
