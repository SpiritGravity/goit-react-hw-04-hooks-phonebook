import PropTypes from 'prop-types';
import { useState } from 'react';
import {Form, Input, Button} from './contactForm.styled';

export default function ContactForm(props)  {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');      

const handleInputChange = e => {
    const { name, value } = e.currentTarget;
switch(name) {
  case 'name':
    setName(value);
    break;
  case 'number':
    setNumber(value);
    break;
default:
  return;
}
};
    
const handleSubmit = e => {
    e.preventDefault();
    props.onSubmit({name, number});
    reset();
};
    
const reset = () => {
    setName('');
    setNumber('');
};

return (
<Form onSubmit = {handleSubmit}>
<label>
    Name
<Input
  type="text"
  name="name"
  value={name}
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
  onChange={handleInputChange}
/>
</label>
<label>
    Number
<Input
  type="tel"
  name="number"
  value={number}
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
  onChange={handleInputChange}
/>
</label>
<Button type='submit'>Add contact</Button>
</Form>
)  
};
    

ContactForm.protoType = {
  onSubmit: PropTypes.func.isRequired,
};
// import PropTypes from 'prop-types';
// import { Component } from 'react';
// import {Form, Input, Button} from './contactForm.styled';

// class ContactForm extends Component {
//     state = {
//         name: '',
//         number: '',
//       };

// handleInputChange = e => {
//     const { name, value } = e.currentTarget;
//     this.setState({ [name]: value });
// };
    
// handleSubmit = e => {
//     e.preventDefault();
//     this.props.onSubmit(this.state);
//     this.reset();
// };
    
// reset = () => {
//     this.setState({ name: '', number: '' });
// };

// render() {

//   const { name, number } = this.state;

// return (
// <Form onSubmit = {this.handleSubmit}>
// <label>
//     Name
// <Input
//   type="text"
//   name="name"
//   value={name}
//   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//   title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//   required
//   onChange={this.handleInputChange}
// />
// </label>
// <label>
//     Number
// <Input
//   type="tel"
//   name="number"
//   value={number}
//   pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//   title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//   required
//   onChange={this.handleInputChange}
// />
// </label>
// <Button type='submit'>Add contact</Button>
// </Form>
// )  
// }
// };
    
// export default ContactForm;

// ContactForm.protoType = {
//   onSubmit: PropTypes.func.isRequired,
// };