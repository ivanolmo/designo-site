import 'preact';
import { Formik, Form, useField } from 'formik';
import { object, string, SchemaOf } from 'yup';

import { classNames } from '../../utils';

interface Values {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface InputProps {
  inputType: 'input' | 'textarea';
  name: string;
  placeholder: string;
}

const validationSchema: SchemaOf<Values> = object({
  name: string().required('Enter a valid name'),
  email: string().email('Enter a valid email').required('Enter a valid email'),
  phone: string()
    .required("Can't be empty")
    .min(6, 'Phone number is too short')
    .matches(/^[0-9]+$/, 'Phone number is not valid'),
  message: string().required("Can't be empty"),
});

function Input(props: InputProps) {
  const [field, meta] = useField(props);

  return (
    <div className='w-full'>
      <label htmlFor={props.name} className='flex justify-between'>
        {props.inputType === 'input' ? (
          <input
            className={classNames(
              meta.touched && !meta.error ? 'border-b-2' : 'border-b',
              'relative bg-transparent border-white outline-none placeholder-white placeholder-opacity-40 w-full p-2 md:px-6 md:py-4 text-white text-[0.9375rem] font-medium'
            )}
            {...field}
            {...props}
          />
        ) : (
          <textarea
            className={classNames(
              meta.touched && !meta.error ? 'border-b-2' : 'border-b',
              'relative bg-transparent border-white outline-none placeholder-white placeholder-opacity-40 w-full p-2 md:px-6 md:py-4 text-white text-[0.9375rem] font-medium resize-none'
            )}
            rows={4}
            {...field}
            {...props}
          ></textarea>
        )}

        {meta.touched && meta.error && (
          <div className='absolute right-8 md:right-32 lg:right-64 mt-2.5 md:mt-4 flex items-center gap-2 text-white text-xs italic error-icon'>
            <span>{meta.error}</span>
          </div>
        )}
      </label>
    </div>
  );
}

export default function ContactForm() {
  const initialValues: Values = {
    name: '',
    email: '',
    phone: '',
    message: '',
  };

  return (
    <div className='flex flex-col lg:flex-row items-center px-6 md:px-16 lg:px-24 py-[4.5rem] lg:py-14 bg-peach-600 bg-[url("/assets/mobile/contact/bg-pattern-hero-contact-mobile.svg")] md:bg-[url("/assets/shared/contact/bg-pattern-hero-contact.svg")] md:bg-no-repeat md:bg-[left_-120px_top] lg:bg-left md:rounded-2xl'>
      <div className='flex flex-col items-center gap-6 text-white lg:gap-8 md:items-start lg:w-1/2 lg:pr-4'>
        <h1>Contact Us</h1>
        <p className='text-center md:text-base md:text-start'>
          Ready to take it to the next level? Let’s talk about your project or
          idea and find out how we can help your business grow. If you are
          looking for unique digital experiences that’s relatable to your users,
          drop us a line.
        </p>
      </div>
      <div className='w-full mt-12 lg:m-0 lg:w-1/2 lg:pl-20'>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values: Values, { resetForm }) => {
            alert(
              `You entered: \n Name: ${values.name} \n Email: ${values.email} \n Phone: ${values.phone} \n Message: ${values.message}`
            );
            resetForm();
          }}
        >
          {(values: Values) => (
            <>
              <Form>
                <div className='flex flex-col items-center gap-6 lg:gap-0'>
                  <Input inputType='input' name='name' placeholder='Name' />
                  <Input inputType='input' name='email' placeholder='Email' />
                  <Input inputType='input' name='phone' placeholder='Phone' />
                  <Input
                    inputType='textarea'
                    name='message'
                    placeholder='Your Message'
                  />
                  <button
                    type='submit'
                    className='py-4 rounded-lg w-[152px] bg-white hover:bg-peach-400 hover:text-white transition-colors duration-300
                    font-medium uppercase cursor-pointer md:place-self-end lg:mt-8'
                  >
                    Submit
                  </button>
                </div>
              </Form>
            </>
          )}
        </Formik>
      </div>
    </div>
  );
}
