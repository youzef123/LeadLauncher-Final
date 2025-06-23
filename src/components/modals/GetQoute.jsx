import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './GetQoute.module.css';

const GetQuote = ({ isOpen, onClose }) => {
    // Form state
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        company: '',
        website: '',
        jobTitle: '',
        address: '',
        state: '',
        industry: '',
        targets: '',
        services: [],
        date: null,
        time: '09:00 AM',
        timezone: ''
    });

    // UI state
    const [step, setStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [errors, setErrors] = useState({});

    // Options
    const serviceOptions = [
        'Lead Generation And Appointment Setting',
        'Medical Billing',
        'Customer Service',
        'Virtual Assistant'
    ];

    const timeOptions = [
        '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM',
        '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
        '01:00 PM', '01:30 PM', '02:00 PM', '02:30 PM',
        '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM',
        '05:00 PM'
    ];

    const timezoneOptions = [
        'Eastern Time', 'Central Time', 'Mountain Time', 'Pacific Time'
    ];

    // Custom DatePicker input
    const CustomDateInput = React.forwardRef(({ value, onClick }, ref) => (
        <input
            type="text"
            className={`${styles.dateInput} ${errors.date ? styles.errorInput : ''}`}
            onClick={onClick}
            value={value}
            ref={ref}
            placeholder="Select a date"
            readOnly
        />
    ));

    // Validation
    const validateStep = () => {
        const newErrors = {};

        if (step === 1) {
            if (!formData.name.trim()) newErrors.name = 'Full name is required';
            if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
            if (!formData.email.trim()) {
                newErrors.email = 'Email is required';
            } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
                newErrors.email = 'Email is invalid';
            }
            if (!formData.company.trim()) newErrors.company = 'Company name is required';
            if (formData.website && !/^https?:\/\/.+\..+/.test(formData.website)) {
                newErrors.website = 'Please enter a valid URL (include http:// or https://)';
            }
        }

        if (step === 2) {
            if (!formData.jobTitle.trim()) newErrors.jobTitle = 'Job title is required';
            if (!formData.address.trim()) newErrors.address = 'Address is required';
            if (!formData.state.trim()) newErrors.state = 'State is required';
        }

        if (step === 3 && formData.services.length === 0) {
            newErrors.services = 'Please select at least one service';
        }

        if (step === 4) {
            if (!formData.date) newErrors.date = 'Date is required';
            if (!formData.timezone) newErrors.timezone = 'Timezone is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handlers
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox'
                ? checked
                    ? [...prev.services, value]
                    : prev.services.filter(s => s !== value)
                : value
        }));

        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleDateChange = (date) => {
        setFormData(prev => ({ ...prev, date }));
        if (errors.date) setErrors(prev => ({ ...prev, date: '' }));
    };

    const nextStep = () => validateStep() && setStep(prev => Math.min(prev + 1, 4));
    const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

    const resetForm = () => {
        setFormData({
            name: '',
            phone: '',
            email: '',
            company: '',
            website: '',
            jobTitle: '',
            address: '',
            state: '',
            industry: '',
            targets: '',
            services: [],
            date: null,
            time: '09:00 AM',
            timezone: ''
        });
        setErrors({});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateStep()) return;

        setIsSubmitting(true);
        setErrors({});

        try {
            const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwbt5BRD9KXsY7qnbfmCfoOaDA-f41jVG1bUyhiYGH9eHuwV6-2PNN5ambSjSljnQLg/exec';

            // Prepare form data
            const submissionData = {
                ...formData,
                date: formData.date ? formData.date.toISOString() : null
            };

            // Make the POST request with JSON data
            const response = await fetch(SCRIPT_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(submissionData),
                redirect: 'follow'
            });

            // Check if the response is OK
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            // Parse the response
            const result = await response.json();

            if (!result.success) {
                throw new Error(result.error || 'Submission failed');
            }

            // Success handling
            setIsSuccess(true);
            setTimeout(() => {
                onClose();
                setStep(1);
                setIsSuccess(false);
                resetForm();
            }, 2000);

        } catch (error) {
            console.error('Submission error:', error);
            setErrors({
                submit: error.message || 'Failed to submit form. Please try again later.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modal} onClick={e => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose}>
                    &times;
                </button>

                {isSuccess ? (
                    <div className={styles.successAnimation}>
                        <svg className={styles.checkmark} viewBox="0 0 52 52">
                            <circle className={styles.checkmarkCircle} cx="26" cy="26" r="25" fill="none" />
                            <path className={styles.checkmarkCheck} fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                        </svg>
                        <h3 style={{ color: '#333' }}>Thank You!</h3>
                        <p style={{ color: '#333' }}>We'll get back to you shortly.</p>
                    </div>
                ) : isSubmitting ? (
                    <div className={styles.loadingAnimation}>
                        <div className={styles.spinner}></div>
                        <p style={{ color: '#333' }}>Submitting your request...</p>
                    </div>
                ) : (
                    <>
                        <h2 className={styles.modalTitle}>Get A Quote</h2>

                        <div className={styles.stepProgress}>
                            {[1, 2, 3, 4].map((stepNumber) => (
                                <div
                                    key={stepNumber}
                                    className={styles.stepContainer}
                                    onClick={() => stepNumber < step && setStep(stepNumber)}
                                >
                                    <div
                                        className={`${styles.stepCircle} ${stepNumber < step ? styles.completedStep :
                                            stepNumber === step ? styles.activeStep : ''
                                            }`}
                                    >
                                        {stepNumber < step ? (
                                            <svg viewBox="0 0 24 24" className={styles.checkIcon}>
                                                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                                            </svg>
                                        ) : (
                                            stepNumber
                                        )}
                                    </div>
                                    <div className={styles.stepLabel}>
                                        {stepNumber === 1 && 'Contact'}
                                        {stepNumber === 2 && 'Details'}
                                        {stepNumber === 3 && 'Services'}
                                        {stepNumber === 4 && 'Schedule'}
                                    </div>
                                    {stepNumber < 4 && (
                                        <div
                                            className={`${styles.stepConnector} ${stepNumber < step ? styles.completedConnector : ''
                                                }`}
                                        />
                                    )}
                                </div>
                            ))}
                        </div>

                        <form onSubmit={handleSubmit} className={styles.quoteForm} noValidate>
                            {/* Step 1 */}
                            <div className={`${styles.formStep} ${step === 1 ? styles.activeStep : ''}`}>
                                <h3 className={styles.stepTitle}>Contact Information</h3>
                                <div className={styles.formGroup}>
                                    <label htmlFor="name">Full Name*</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={errors.name ? styles.errorInput : ''}
                                    />
                                    {errors.name && <span className={styles.errorMessage}>{errors.name}</span>}
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="phone">Phone Number*</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className={errors.phone ? styles.errorInput : ''}
                                    />
                                    {errors.phone && <span className={styles.errorMessage}>{errors.phone}</span>}
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="email">Email*</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={errors.email ? styles.errorInput : ''}
                                    />
                                    {errors.email && <span className={styles.errorMessage}>{errors.email}</span>}
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="company">Company Name*</label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        className={errors.company ? styles.errorInput : ''}
                                    />
                                    {errors.company && <span className={styles.errorMessage}>{errors.company}</span>}
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="website">Website</label>
                                    <input
                                        type="text"
                                        id="website"
                                        name="website"
                                        value={formData.website}
                                        onChange={handleChange}
                                        placeholder="https://example.com"
                                        className={errors.website ? styles.errorInput : ''}
                                    />
                                    {errors.website && <span className={styles.errorMessage}>{errors.website}</span>}
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className={`${styles.formStep} ${step === 2 ? styles.activeStep : ''}`}>
                                <h3 className={styles.stepTitle}>Professional Information</h3>
                                <div className={styles.formGroup}>
                                    <label htmlFor="jobTitle">Job Title*</label>
                                    <input
                                        type="text"
                                        id="jobTitle"
                                        name="jobTitle"
                                        value={formData.jobTitle}
                                        onChange={handleChange}
                                        className={errors.jobTitle ? styles.errorInput : ''}
                                    />
                                    {errors.jobTitle && <span className={styles.errorMessage}>{errors.jobTitle}</span>}
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="address">Address*</label>
                                    <input
                                        type="text"
                                        id="address"
                                        name="address"
                                        value={formData.address}
                                        onChange={handleChange}
                                        className={errors.address ? styles.errorInput : ''}
                                    />
                                    {errors.address && <span className={styles.errorMessage}>{errors.address}</span>}
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="state">State*</label>
                                    <input
                                        type="text"
                                        id="state"
                                        name="state"
                                        value={formData.state}
                                        onChange={handleChange}
                                        className={errors.state ? styles.errorInput : ''}
                                    />
                                    {errors.state && <span className={styles.errorMessage}>{errors.state}</span>}
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="industry">Industry</label>
                                    <input
                                        type="text"
                                        id="industry"
                                        name="industry"
                                        value={formData.industry}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="targets">Targets</label>
                                    <textarea
                                        id="targets"
                                        name="targets"
                                        value={formData.targets}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className={`${styles.formStep} ${step === 3 ? styles.activeStep : ''}`}>
                                <h3 className={styles.stepTitle}>What Areas Do You Need Help With?</h3>
                                <div className={styles.checkboxGroup}>
                                    {serviceOptions.map((service, index) => (
                                        <div key={index} className={styles.checkboxContainer}>
                                            <input
                                                type="checkbox"
                                                id={`service-${index}`}
                                                name="services"
                                                value={service}
                                                checked={formData.services.includes(service)}
                                                onChange={handleChange}
                                                className={styles.checkboxInput}
                                            />
                                            <label htmlFor={`service-${index}`} className={styles.checkboxLabel}>
                                                {service}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                                {errors.services && <span className={styles.errorMessage}>{errors.services}</span>}
                            </div>

                            {/* Step 4 */}
                            <div className={`${styles.formStep} ${step === 4 ? styles.activeStep : ''}`}>
                                <h3 className={styles.stepTitle}>Preferred Date and Time Selection</h3>
                                <div className={styles.dateTimeContainer}>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="date">Choose date*</label>
                                        <DatePicker
                                            id="date"
                                            selected={formData.date}
                                            onChange={handleDateChange}
                                            minDate={new Date()}
                                            dateFormat="MMMM d, yyyy"
                                            placeholderText="Select a date"
                                            customInput={<CustomDateInput />}
                                            className={styles.datePicker}
                                            calendarClassName={styles.calendar}
                                            popperClassName={styles.popper}
                                            showPopperArrow={false}
                                        />
                                        {errors.date && <span className={styles.errorMessage}>{errors.date}</span>}
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="time">Time</label>
                                        <select
                                            id="time"
                                            name="time"
                                            value={formData.time}
                                            onChange={handleChange}
                                            className={styles.timeInput}
                                        >
                                            {timeOptions.map((time, index) => (
                                                <option key={index} value={time}>{time}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="timezone">Timezone*</label>
                                    <select
                                        id="timezone"
                                        name="timezone"
                                        value={formData.timezone}
                                        onChange={handleChange}
                                        className={errors.timezone ? styles.errorInput : ''}
                                    >
                                        <option value="">Select time zone</option>
                                        {timezoneOptions.map((zone, index) => (
                                            <option key={index} value={zone}>{zone}</option>
                                        ))}
                                    </select>
                                    {errors.timezone && <span className={styles.errorMessage}>{errors.timezone}</span>}
                                </div>
                            </div>

                            <div className={styles.formNavigation}>
                                {step > 1 && (
                                    <button
                                        type="button"
                                        onClick={prevStep}
                                        className={styles.navButton}
                                    >
                                        ← Previous
                                    </button>
                                )}

                                {step < 4 ? (
                                    <button
                                        type="button"
                                        onClick={nextStep}
                                        className={`${styles.navButton} ${styles.nextButton}`}
                                    >
                                        Next →
                                    </button>
                                ) : (
                                    <button
                                        type="submit"
                                        className={`${styles.navButton} ${styles.submitButton}`}
                                    >
                                        Submit
                                    </button>
                                )}
                            </div>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
}

export default GetQuote;