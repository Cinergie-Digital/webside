import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Card, Col, Container, Row, Modal } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
import OfficeCard from 'components/shared/Office';
import { FormInput } from 'components/form';
import { offices } from './data';

const ContactUs = () => {
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [showErrorModal, setShowErrorModal] = useState(false);

    const successClose = () => setShowSuccessModal(false);
    const errorClose = () => setShowErrorModal(false);

    const schemaResolver = yupResolver(
        yup.object().shape({
            business: yup.string().required('Please enter business name'),
            fname: yup.string().required('Please enter first name'),
            lname: yup.string().required('Please enter last name'),
            email: yup.string().required('Please enter email').email('Please enter a valid Email'),
            message: yup.string().required('Please enter message'),
        })
    );

    const methods = useForm({ resolver: schemaResolver });
    const {
        handleSubmit,
        register,
        control,
        formState: { errors },
    } = methods;

    const form = useRef(null);

    const sendEmail = async () => {
        try {
            if (form.current) {
                const result = await emailjs.sendForm(
                    'service_6ox3elm',
                    'template_5x8jb8h',
                    form.current,
                    't5t-h48zRsZEmoh6H'
                );
                setShowSuccessModal(true);
                console.log(result.text);
            } else {
                setShowErrorModal(true);
                console.error('Form ref is not properly initialized.');
            }
        } catch (error: any) {
            setShowErrorModal(true);
            console.log(error.text);
        }
    };

    const onSubmit = async () => {
        await sendEmail();
        methods.reset();
    };

    return (
        <section className="section" style={{ fontFamily: 'Garet' }}>
            <Container>
                {/* --- Dubai Office --- */}
                <Row className="align-items-center mb-5">
                    <Col lg={6}>
                        <OfficeCard office={offices[0]} />
                    </Col>
                    <Col lg={6}>
                        <div style={{ position: 'relative', overflow: 'hidden', width: '100%', paddingTop: '100%' }}>
                            <iframe
                                title="Dubai Office"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.4679491982592!2d55.26419767521115!3d25.187436977717212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69d3bb4198df%3A0xa2db82f588c4c7fb!2sThe%20Binary%20by%20OMNIYAT!5e0!3m2!1sen!2s!4v1705384607513!5m2!1sen!2s"
                                style={{
                                    position: 'absolute',
                                    top: '0',
                                    left: '0',
                                    width: '100%',
                                    height: '100%',
                                    border: '0',
                                }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </Col>
                </Row>

                {/* --- Contact Form --- */}
                <Row className="align-items-center">
                    <Col lg={1}></Col>
                    <Col lg={10}>
                        <Card className="shadow-none">
                            <Card.Body className="p-xl-5 p-0">
                                <h2
                                    className="mb-2 mt-0 fw-medium"
                                    style={{
                                        fontSize: '2.5rem',
                                        fontWeight: 600,
                                        fontFamily: 'Garet',
                                    }}
                                >
                                    Ready to Connect?
                                </h2>
                                <p className="mb-5" style={{ fontFamily: 'Garet' }}>
                                    Drop us a note by filling out the form below. We're eager to connect with you and
                                    will be in touch shortly.
                                </p>

                                <form ref={form} onSubmit={handleSubmit(onSubmit)}>
                                    <Row>
                                        <Col lg={12}>
                                            <FormInput
                                                type="text"
                                                name="business"
                                                label="Business Name"
                                                placeholder="Your Business Name"
                                                containerClass={'mb-3'}
                                                register={register}
                                                errors={errors}
                                                control={control}
                                            />
                                        </Col>
                                        <Col md={6}>
                                            <FormInput
                                                type="text"
                                                name="fname"
                                                label="First Name"
                                                placeholder="Your First Name"
                                                containerClass={'mb-3'}
                                                register={register}
                                                errors={errors}
                                                control={control}
                                            />
                                        </Col>
                                        <Col md={6}>
                                            <FormInput
                                                type="text"
                                                name="lname"
                                                label="Last Name"
                                                placeholder="Your Last Name"
                                                containerClass={'mb-3'}
                                                register={register}
                                                errors={errors}
                                                control={control}
                                            />
                                        </Col>
                                        <Col lg={12}>
                                            <FormInput
                                                type="email"
                                                name="email"
                                                label="Email"
                                                placeholder="Your Email"
                                                containerClass={'mb-3'}
                                                register={register}
                                                errors={errors}
                                                control={control}
                                            />
                                        </Col>
                                        <Col lg={12}>
                                            <FormInput
                                                type="textarea"
                                                name="message"
                                                label="Message"
                                                placeholder="Type your message..."
                                                rows={5}
                                                containerClass={'mb-3'}
                                                register={register}
                                                errors={errors}
                                                control={control}
                                            />
                                        </Col>
                                        <Col lg="auto" className="mb-0 mx-auto">
                                            <Button type="submit">
                                                Send
                                                <span className="icon icon-xs text-white ms-1">
                                                    <FeatherIcon icon="send" />
                                                </span>
                                            </Button>
                                        </Col>
                                    </Row>
                                </form>

                                {/* Success Modal */}
                                <Modal show={showSuccessModal} onHide={successClose} size="sm" centered>
                                    <Modal.Header closeButton className="border-0 pb-0" />
                                    <Modal.Body className="text-center">
                                        <span className="icon icon-lg text-success">
                                            <FeatherIcon icon="check-circle" className="icon-dual-success" />
                                        </span>
                                        <h4
                                            className="text-success mt-0"
                                            style={{
                                                fontSize: '1.5rem',
                                                fontWeight: 500,
                                                fontFamily: 'Garet',
                                            }}
                                        >
                                            Application Sent
                                        </h4>
                                        <p className="mx-auto text-muted" style={{ fontFamily: 'Garet' }}>
                                            Thank you for your application! We've received it and will process it
                                            shortly.
                                        </p>
                                        <div className="mt-4">
                                            <Button variant="white btn-sm" onClick={successClose}>
                                                <FeatherIcon icon="arrow-left" className="icon-xs me-1" /> Back
                                            </Button>
                                        </div>
                                    </Modal.Body>
                                </Modal>

                                {/* Error Modal */}
                                <Modal show={showErrorModal} onHide={errorClose} size="sm" centered>
                                    <Modal.Header closeButton className="border-0 pb-0" />
                                    <Modal.Body className="text-center">
                                        <span className="icon icon-md text-danger">
                                            <FeatherIcon icon="alert-octagon" className="icon-dual-danger" />
                                        </span>
                                        <h4
                                            className="text-danger mt-0"
                                            style={{
                                                fontSize: '1.5rem',
                                                fontWeight: 500,
                                                fontFamily: 'Garet',
                                            }}
                                        >
                                            Something went wrong.
                                        </h4>
                                        <p className="mx-auto text-muted mt-2" style={{ fontFamily: 'Garet' }}>
                                            We are unable to process your request at the moment. Our apologies, please
                                            try again in a few minutes.
                                        </p>
                                        <div className="mt-4">
                                            <Button variant="white btn-sm" onClick={errorClose}>
                                                <FeatherIcon icon="arrow-left" className="icon-xs me-1" /> Back
                                            </Button>
                                        </div>
                                    </Modal.Body>
                                </Modal>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ContactUs;
