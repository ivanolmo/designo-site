import 'preact';
import { Formik, Form, useField } from 'formik';
import { number, object, string, SchemaOf } from 'yup';

import { classNames } from '../../utils';

interface Values {
  name: string;
  email: string;
  phone: number | null;
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
  phone: number()
    .required("Can't be empty")
    .min(6, 'Phone number is too short')
    .typeError('Enter a valid phone number'),
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
              meta.touched && !meta.error && 'border-b-2',
              'relative bg-transparent border-b border-white outline-none placeholder-white placeholder-opacity-40 w-full p-2 text-white text-[0.9375rem] font-medium'
            )}
            {...field}
            {...props}
          />
        ) : (
          <textarea
            className={classNames(
              meta.touched && !meta.error && 'border-b-2',
              'relative bg-transparent border-b border-white outline-none placeholder-white placeholder-opacity-40 w-full p-2 text-white text-[0.9375rem] font-medium resize-none'
            )}
            rows={4}
            {...field}
            {...props}
          ></textarea>
        )}

        {meta.touched && meta.error && (
          <div className='absolute right-8 mt-2.5 flex items-center gap-2 text-white text-xs italic error-icon'>
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
    phone: null,
    message: '',
  };

  return (
    <div className='flex flex-col items-center px-6 py-[4.5rem] bg-peach-600 bg-[url("/assets/mobile/contact/bg-pattern-hero-contact-mobile.svg")]'>
      <div className='flex flex-col items-center gap-6 text-white'>
        <h1>Contact Us</h1>
        <p className='text-[0.9375rem] text-center'>
          Ready to take it to the next level? Let’s talk about your project or
          idea and find out how we can help your business grow. If you are
          looking for unique digital experiences that’s relatable to your users,
          drop us a line.
        </p>
      </div>
      <div className='mt-12 w-full'>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            alert(JSON.stringify(values, null, 2));
            resetForm();
          }}
        >
          {() => {
            return (
              <Form>
                <div className='flex flex-col items-center gap-6'>
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
                    className='py-4 rounded-lg w-[152px] bg-white
                    font-medium uppercase cursor-pointer'
                  >
                    Submit
                  </button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}
