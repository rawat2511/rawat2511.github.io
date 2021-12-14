import { contact } from '../../portfolio'
import './Contact.css'

// <section className='section contact center' id='contact'>
//   <h2 className='section__title'>Contact</h2>
//   <a href={`mailto:${contact.email}`}>
//     <span type='button' className='btn btn--outline'>
//       Email me
//     </span>
//   </a>
// </section>

const Contact = () => {
  if (!contact.email) return null

  return (

    <div>
    <h2 className='section__title'>Contact</h2>

        <div className='contact'>
                <div className="column left">
                    

                        <div className="row">
                            <img className="contact-icon" src="https://icons.iconarchive.com/icons/visualpharm/must-have/256/User-icon.png" alt="user" />

                            <div className="info">
                                <div className="head">Name</div>
                                <div className="head">Shubham Rawat</div>
                            </div>
                        </div>

                        <div className="row">
                        <img className="contact-icon" src="https://media.istockphoto.com/vectors/vector-map-with-pin-pointer-illustration-vector-id535913739?k=20&m=535913739&s=612x612&w=0&h=cS_zINbhJ9T9vRlaAc4S_-Yd45f6qs5zliFHZ7KNhFI=" alt="location" />
                            <div className="info">
                                <div className="head">Address</div>
                                <div className="head">Ghaziabad, Uttar Pradesh</div>
                            </div>
                        </div>

                        <div className="row">
                        <img className="contact-icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKilPjQUkVFTd0IBVF1iYlVvLxSX0iFOhlWA&usqp=CAU" alt="mail"/>
                            <div className="info">
                                <div className="head">Email</div>
                                <div className="head">shubham25112000@gmail.com</div>
                            </div>
                        </div>

                        <div className="row">
                        <img className="contact-icon" src="https://www.seekpng.com/png/full/97-972664_image-transparent-background-white-phone-icon.png" alt="mail"/>
                            <div className="info">
                                <div className="head">Phone</div>
                                <div className="head">+91 8527184201</div>
                            </div>
                        </div>
                    
                </div>

                <div className="column right">
                    <div className="text">Message me</div>
                    <form action="#">
                        <div className="fields">
                            <div className="field name">
                                <input type="text" placeholder="Name" required />
                            </div>
                            <div className="field email">
                                <input type="email" placeholder="Email" required />
                            </div>
                        </div>
                        <div className="field">
                            <input type="text" placeholder="Subject" required />
                        </div>
                        <div className="field textarea">
                            <textarea placeholder="Message.." required />
                        </div>
                        <div className="button-area">
                            <button type="submit">Send message</button>
                        </div>
                    </form>
                </div>
        </div>
    </div>

  )
}

export default Contact
