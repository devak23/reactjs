import React from 'react';

const Contact = () => {
  return (
    <section className='container section scrollspy' id='contact'>
      <div className='row'>
        <div className='col s12 l5'>
          <h3 className='indigo-text text-darken-4'>Get In Touch</h3>
          <p>
            Veniam duis qui magna Lorem ut laboris consequat exercitation. Quis cillum reprehenderit dolore nostrud
            laborum minim dolore exercitation culpa pariatur tempor mollit. Quis aute deserunt cupidatat quis ut eiusmod
            incididunt ullamco magna. Occaecat consectetur dolore veniam in fugiat ut tempor velit ullamco. Esse
            voluptate nostrud laborum ut nostrud officia nisi aliqua exercitation qui ex ut. Aute ut esse duis irure
            commodo.
          </p>
          <p>
            Veniam qui ipsum labore laborum enim non. Dolor tempor est nisi magna veniam sit consequat sit ut laboris id
            reprehenderit labore. Qui ut laborum ipsum elit laboris anim irure reprehenderit eiusmod. Commodo commodo
            anim sint tempor elit occaecat consectetur. Commodo incididunt occaecat dolore irure amet consectetur minim
            laborum Lorem id adipisicing magna. Dolore anim deserunt occaecat eu excepteur in eiusmod tempor eu irure
            qui. Ad est consectetur voluptate ea.
          </p>
        </div>
        <div className='col s12 l5 offset-l1'>
          <form action=''>
            <div className='input-field'>
              <i className='material-icons prefix'>email</i>
              <input type='email' id='email' />
              <label htmlFor='email'>Your email</label>
            </div>
            <div className='input-field'>
              <i className='material-icons prefix'>message</i>
              <textarea id='message' className='materialize-textarea' />
              <label htmlFor='message'>Your Message</label>
            </div>
            <div className='input-field'>
              <input type='text' id='datepicker' className='datepicker' />
              <label htmlFor='datepicker'>Choose a date you need me for</label>
            </div>
            <div className='input-field'>
              <p>Services required ...</p>
              <p>
                <label>
                  <input type='checkbox' />
                  <span>Photography</span>
                </label>
              </p>
              <p>
                <label>
                  <input type='checkbox' />
                  <span>Editing</span>
                </label>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
