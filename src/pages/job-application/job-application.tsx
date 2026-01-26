import { Button, Row, Col, Modal } from 'react-bootstrap';
// import { useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import FeatherIcon from 'feather-icons-react';
import { FormInput } from 'components/form';
// import { useRef, useState } from 'react';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';



interface JobParameter {
  job_id: number;
  title: string;
  location: string;
  salary_package: string;
  description: string;
  perks: string;
  reference: string;
  requirements: string;
  screening_questions?: string;
}

interface RawScreeningQuestion {
  question_text?: string;
  answer_type: string;
  options?: string[];
  must_have?: boolean;
  length?: number;
}

interface ScreeningQuestion {
  id: number;
  question: string;
  type: 'yes_no' | 'mcq' | 'description';
  options?: string[];
}

const JobApplication = () => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>('Something went wrong.');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const successClose = () => setShowSuccessModal(false);
  const errorClose = () => {
    setShowErrorModal(false);
    setErrorMessage('Something went wrong.');
  };

  const methods = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      phoneNo: '',
      experience: '',
      cv: null,
      linkedIn: '',
      noticePeriod: '',
      salaryPackage: '',
    },
  });
  // const location = useLocation();
  const { register, handleSubmit, control, formState: { errors }, reset } = methods;

  // const jobParam = location.state as JobParameter;
  const { jobId } = useParams();
  const [jobParam, setJobParam] = useState<JobParameter | null>(null);
  const [loading, setLoading] = useState(true);
  const form = useRef<HTMLFormElement>(null);

  // console.log('location.state:', location.state);

  useEffect(() => {
    if (!jobId) return;

    fetch(`https://api.cinergiedigital.com/recruitment/admin/get_job_by_id.php?job_id=${jobId}`)
      .then(res => res.json())
      .then(result => {
        if (result.status === 'success') {
          setJobParam(result.data);
        }
      })
      .finally(() => setLoading(false));
  }, [jobId]);

  if (loading) return <p>Loading job...</p>;
  if (!jobParam) return <p>Job not found.</p>;

  const sendApplication = async (data: any) => {
    try {
      setIsSubmitting(true);
      if (!jobParam || !jobParam.job_id) {
        throw new Error('Job ID is missing. Please select a job to apply for.');
      }

      // console.log('Form data before sending:', data);

      const formData = new FormData();
      formData.append('job_id', jobParam.job_id.toString());
      formData.append('fullName', data.fullName);
      formData.append('email', data.email);
      formData.append('phoneNo', data.phoneNo);
      formData.append('experience', data.experience);
      formData.append('linkedin_profile', data.linkedIn);
      formData.append('noticePeriod', data.noticePeriod);
      formData.append('salaryPackage', data.salaryPackage);
      formData.append('reference', jobParam.reference.toString());
      formData.append('job_title', jobParam.title.toString());

      if (data.cv && data.cv[0]) {
        formData.append('cv', data.cv[0]);
      }

      const screeningAnswers = Object.keys(data)
        .filter((key) => key.startsWith('screening_'))
        .map((key) => ({
          question: screeningQuestions.find((q) => `screening_${q.id}` === key)?.question || '',
          answer: data[key],
        }));
      formData.append('screening_questions', JSON.stringify(screeningAnswers));

      console.log('Form Data:', Object.fromEntries(formData));

      const response = await fetch('https://api.cinergiedigital.com/recruitment/admin/save_application.php', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const text = await response.text();
        // console.error('Non-JSON response:', text);
        throw new Error(`Server returned ${response.status}: ${text}`);
      }

      const result = await response.json();
      if (result.success) {
        setShowSuccessModal(true);
        reset();
      } else {
        setErrorMessage(result.message || 'Failed to submit application.');
        setShowErrorModal(true);
        console.error('API error:', result.message);
      }
    } catch (err: any) {
      setErrorMessage(err.message || 'An unexpected error occurred.');
      setShowErrorModal(true);
      console.error('Submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const onSubmit = async (data: any) => {
    if (!data) {
      // console.log('Form is empty');
      return;
    }
    // console.log('Form data submitted:', data);
    await sendApplication(data);
  };

  let screeningQuestions: ScreeningQuestion[] = [];
  try {
    if (jobParam?.screening_questions) {
      const rawQuestions: RawScreeningQuestion[] = JSON.parse(jobParam.screening_questions);


      screeningQuestions = rawQuestions
        .filter((q) => q.question_text)
        .map((q, index) => {
          let normalizedType: 'yes_no' | 'mcq' | 'description';
          switch (q.answer_type) {
            case 'Yes/No':
              normalizedType = 'yes_no';
              break;
            case 'MCQ':
              normalizedType = 'mcq';
              break;
            case 'Not Related':
            default:
              normalizedType = 'description';
              break;
          }

          const options = normalizedType === 'yes_no' && !q.options ? ['Yes', 'No'] : q.options;

          return {
            id: index + 1,
            question: q.question_text!,
            type: normalizedType,
            options: options,
          };
        });


    }
  } catch (error) {
    console.error('Error parsing screening questions:', error);
  }

  if (!jobParam) {
    return <p>No job data available.</p>;
  }

  return (
    <div className="p-5 mx-5 position-relative">
      <h1>{jobParam.title}</h1>

      <div className="job-details mb-4">
        <p><strong>Location:</strong> {jobParam.location}</p>
        <p><strong>Salary Range:</strong> {jobParam.salary_package}</p>
        <p><strong>Experience Required:</strong> {jobParam.description}</p>
        <p><strong>Benefits:</strong></p>
        <ul>
          {jobParam.perks
            ?.replace(/&#13;&#10;|&#10;|&#13;|\r\n|\r|\n/g, '\n')  // Normalize all newlines
            .split('\n')                                           // Split into lines
            .map((line, index) =>
              line.trim() ? <li key={index}>{line.trim()}</li> : null
            )}
        </ul>
        <p><strong>Reference:</strong> {jobParam.reference}</p>
        <div className="job-requirements mt-3">
          <div className="html-content" dangerouslySetInnerHTML={{ __html: jobParam.requirements }} />
        </div>
      </div>

      <h3 className="mt-4">Apply to the job</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="d-grid py-2" ref={form}>
        <Row>
          <Col md={6}>
            <FormInput
              type="text"
              name="fullName"
              label="Full Name"
              placeholder="Full Name"
              containerClass={'mb-3'}
              register={register}
              errors={errors}
              control={control}
              required
            />
          </Col>
          <Col md={6}>
            <FormInput
              type="email"
              name="email"
              label="Email"
              placeholder="Email"
              containerClass={'mb-3'}
              register={register}
              errors={errors}
              control={control}
              required
            />
          </Col>
          <Col md={6}>
            <FormInput
              type="text"
              name="phoneNo"
              label="Phone#"
              placeholder="Phone Number"
              containerClass={'mb-3'}
              register={register}
              errors={errors}
              control={control}
              required
            />
          </Col>
          <Col md={6}>
            <FormInput
              type="number"
              name="experience"
              label="Years Of Experience"
              placeholder="Years of experience"
              containerClass={'mb-3'}
              register={register}
              errors={errors}
              control={control}
              required
            />
          </Col>
          <Col md={6}>
            <FormInput
              type="file"
              name="cv"
              label="CV"
              placeholder="CV"
              containerClass={'mb-3'}
              register={register}
              errors={errors}
              control={control}
              required
            />
          </Col>
          <Col md={6}>
            <FormInput
              type="text"
              name="linkedIn"
              label="LinkedIn Profile"
              placeholder="e.g., https://linkedin.com/in/yourprofile"
              containerClass={'mb-3'}
              register={register}
              errors={errors}
              control={control} required
              className="text-blue-600 underline hover:text-blue-800"
              style={{ width: '200px', fontSize: '0.9rem' }} // Smaller size and link-like style
            />
          </Col>
          <Col md={6}>
            <FormInput
              type="text"
              name="noticePeriod"
              label="What is your current notice period"
              placeholder="e.g: 30 days"
              containerClass={'mb-3'}
              register={register}
              errors={errors}
              control={control}
              required
            />
          </Col>
          <Col lg={12}>
            <label htmlFor="salaryPackage">Do you agree with the salary package:</label>
            <div>
              <FormInput
                type="radio"
                name="salaryPackage"
                label="Yes"
                value="Yes"
                containerClass={'mb-2'}
                register={register}
                errors={errors}
                control={control}
                required
              />
              <FormInput
                type="radio"
                name="salaryPackage"
                label="No"
                value="No"
                containerClass={'mb-2'}
                register={register}
                errors={errors}
                control={control}
                required
              />
            </div>
          </Col>
        </Row>

        {screeningQuestions.length > 0 ? (
          <div className="mt-4">
            <h4>Screening Questions</h4>
            {screeningQuestions.map((question) => (
              <Row key={question.id} className="mb-3">
                <Col lg={6}>
                  <label className="form-label">{question.question}</label>
                  {question.type === 'description' && (
                    <FormInput
                      type="number"
                      name={`screening_${question.id}`}
                      placeholder="e.g: 1 to 10"
                      containerClass={'mb-3'}
                      register={register}
                      errors={errors}
                      control={control}
                      required
                    />
                  )}
                  {(question.type === 'yes_no' || question.type === 'mcq') && question.options && (
                    <div>
                      {question.options.map((option, index) => (
                        <FormInput
                          key={index}
                          type={question.type === 'mcq' ? 'checkbox' : 'radio'}
                          name={`screening_${question.id}`}
                          label={option}
                          value={option}
                          containerClass={'mb-2'}
                          register={register}
                          errors={errors}
                          control={control}
                        />
                      ))}
                    </div>
                  )}
                </Col>
              </Row>
            ))}
          </div>
        ) : (
          <p>No screening questions available.</p>
        )}

        <Col lg="auto" className="my-2 mx-auto">
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                Submitting...
              </>
            ) : (
              <>
                Apply
                <span className="icon icon-xs text-white ms-1">
                  <FeatherIcon icon="send" />
                </span>
              </>
            )}
          </Button>
        </Col>
      </form>

      {isSubmitting && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
          }}
        >
          <div className="text-white text-center" style={{ fontSize: '0.9rem' }}>
            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
            Processing...
          </div>
        </div>
      )}

      <Modal show={showSuccessModal} onHide={successClose} size="sm" centered>
        <Modal.Header onHide={successClose} closeButton className="border-0 pb-0" />
        <Modal.Body className="text-center">
          <span className="icon icon-lg text-success">
            <FeatherIcon icon="check-circle" className="icon-dual-success" />
          </span>
          <h4 className="text-success mt-0">Application Sent</h4>
          <p className="mx-auto text-muted">
            Thank you for your application! We've received it and will process it shortly.
          </p>
          <div className="mt-4">
            <Button variant="white btn-sm" onClick={successClose}>
              <FeatherIcon icon="arrow-left" className="icon-xs me-1" /> Back
            </Button>
          </div>
        </Modal.Body>
      </Modal>

      <Modal show={showErrorModal} onHide={errorClose} size="sm" centered>
        <Modal.Header onHide={errorClose} closeButton className="border-0 pb-0" />
        <Modal.Body className="text-center">
          <span className="icon icon-md text-danger">
            <FeatherIcon icon="alert-octagon" className="icon-dual-danger" />
          </span>
          <h4 className="text-danger mt-0">Error</h4>
          <p className="mx-auto text-muted mt-2">{errorMessage}</p>
          <div className="mt-4">
            <Button variant="white btn-sm" onClick={errorClose}>
              <FeatherIcon icon="arrow-left" className="icon-xs me-1" /> Back
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default JobApplication;