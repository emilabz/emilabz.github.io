import React, { useRef } from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";
import { Form, Button } from "react-bootstrap";
import emailjs from "@emailjs/browser";

class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      disabled: false,
      emailSent: null,
    };
  }

  handleChange = (event) => {
    console.log(event);
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, message } = this.state;
    let templateParams = {
      name: name,
      email: email,
      message: message,
    };
    console.log("In handle submit", templateParams);

    // emailjs
    //   .sendForm(
    //     "contact_service",
    //     "contact_form",
    //     event.target,
    //     "E_mOtfXm7y5i9x9vV"
    //   )
    //   .then(
    //     function () {
    //       console.log("Success");
    //     },
    //     function (error) {
    //       console.log("Failed", error);
    //     }
    //   );
    event.target.reset();

    // this.form.reset();
    this.setState({
      name: "",
      email: "",
      message: "",
      disabled: true,
      emailSent: true,
    });
  };

  render() {
    return (
      <div>
        <Hero title={this.props.title} />
        <Content>
          <Form
            onSubmit={this.handleSubmit.bind(this)}
            ref={(form) => (this.form = form)}
          >
            <Form.Group>
              <Form.Label htmlFor="full-name">Full Name</Form.Label>
              <Form.Control
                id="full-name"
                name="name"
                type="text"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control
                id="email"
                name="email"
                type="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="message">Message</Form.Label>
              <Form.Control
                id="message"
                name="message"
                as="textarea"
                rows="3"
                value={this.state.message}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Button
              className="d-inline-block"
              variant="primary"
              type="submit"
              disabled={this.state.disabled}
            >
              Send
            </Button>
            {this.state.emailSent === true && (
              <p className="d-inline success-msg">Email Sent</p>
            )}
            {this.state.emailSent === false && (
              <p className="d-inline err-msg">Email Not Sent</p>
            )}
          </Form>
        </Content>
      </div>
    );
  }
}

export default ContactPage;
